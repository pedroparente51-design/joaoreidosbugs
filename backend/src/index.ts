import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import webpush from "web-push";

dotenv.config();

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || "BJDVzITaN-AqA97sDgrEinPoHhyN9T9eRXAIi5-dJcePYIt5vQHEQj0HfvK5vTgvSlxO8ox2-UQCyIYnjjtAO14";
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || "_U6F0hskOhDDHUAAqCOblQigRYCmqqxzkk8AO27sqxU";

webpush.setVapidDetails(
  "mailto:joaoreidobugs@gmail.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    process.env.FRONTEND_URL || 'https://joaoreidosbugs.netlify.app',
  ],
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

// Admin Seeding
const seedAdmin = async () => {
  const adminEmail = "joaoreidobugs@gmail.com";
  try {
    const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (!existingAdmin) {
      const passwordHash = await bcrypt.hash("Admin@123", 10);
      await prisma.user.create({
        data: {
          name: "João Rei (ADMIN)",
          email: adminEmail,
          passwordHash,
          role: "ADMIN",
          status: "ACTIVE"
        }
      });
      console.log("Admin seeded successfully");
    }
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
};
seedAdmin();

// Middleware for JWT verification
const authenticate = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Auth failed: No token");
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    console.log("Auth failed: Invalid token", error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

const isAdmin = (req: any, res: any, next: any) => {
  if (req.user && req.user.role === 'ADMIN') {
    next();
  } else {
    res.status(403).json({ error: "Acesso negado. Apenas administradores podem acessar esta rota." });
  }
};

// Auth routes
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        status: "ACTIVE"
      },
    });

    // Log Activity
    await prisma.activity.create({
      data: { userId: user.id, actionType: "REGISTER", description: "Novo usuário registrado" }
    });

    res.status(201).json({ message: "User registered successfully", userId: user.id });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// --- USER PROFILE ROUTES ---
app.get("/api/user/me", authenticate, async (req: any, res: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { id: true, name: true, email: true, role: true, image: true }
    });
    res.json(user);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/user/profile", authenticate, async (req: any, res: any) => {
  try {
    const { name, image } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: { name, image },
      select: { id: true, name: true, email: true, role: true, image: true }
    });

    // Log Activity
    await prisma.activity.create({
      data: { userId: req.user.userId, actionType: "UPDATE_PROFILE", description: "Atualizou informações do perfil" }
    });

    res.json(updatedUser);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (user.status === 'BANNED') {
      return res.status(403).json({ error: "Sua conta foi suspensa. Entre em contato com o suporte." });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Log Activity
    await prisma.activity.create({
      data: { userId: user.id, actionType: "LOGIN", description: "Login realizado com sucesso" }
    });

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, image: user.image } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



// --- NOTIFICATION ROUTES ---
app.get("/api/notifications/public-key", (req, res) => {
  res.json({ publicKey: VAPID_PUBLIC_KEY });
});

app.post("/api/notifications/subscribe", authenticate, async (req: any, res: any) => {
  const subscription = req.body;
  const userId = req.user.userId;

  try {
    await prisma.pushSubscription.upsert({
      where: { endpoint: subscription.endpoint },
      update: {
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
        userId: userId,
      },
      create: {
        endpoint: subscription.endpoint,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
        userId: userId,
      },
    });
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

app.post("/api/notifications/test", authenticate, async (req: any, res: any) => {
  try {
    await sendPushNotification(
      req.user.userId,
      "Notificação de Teste",
      "Parabéns! Suas notificações estão funcionando corretamente no PC e Celular. 🚀"
    );
    res.json({ success: true, message: "Teste disparado" });
  } catch (error) {
    console.error("Test notification error:", error);
    res.status(500).json({ error: "Erro ao enviar teste" });
  }
});

const sendPushNotification = async (userId: number, title: string, body: string) => {
  const subscriptions = await prisma.pushSubscription.findMany({
    where: { userId }
  });

  const payload = JSON.stringify({ 
    title, 
    body,
    icon: '/img/logo1.ico',
    badge: '/img/logo1.ico'
  });

  const notifications = subscriptions.map(sub => {
    const pushConfig = {
      endpoint: sub.endpoint,
      keys: {
        p256dh: sub.p256dh,
        auth: sub.auth
      }
    };
    return webpush.sendNotification(pushConfig, payload).catch((err: any) => {
      if (err.statusCode === 410) {
        // Subscription expired or removed
        return prisma.pushSubscription.delete({ where: { id: sub.id } });
      }
      console.error("Error sending push notification:", err);
    });
  });

  await Promise.all(notifications);
};

// --- ADMIN ROUTES ---

app.get("/api/admin/metrics", authenticate, isAdmin, async (req, res) => {
  try {
    const [usersCount, teamsCount, operatorsCount, goalsCount, remittances, dailyRecords] = await Promise.all([
      prisma.user.count(),
      prisma.team.count(),
      prisma.teamMember.count({ where: { role: 'OPERATOR' } }),
      prisma.teamGoal.count(),
      prisma.teamRemittance.findMany(),
      prisma.dailyRecord.findMany()
    ]);

    const activeGoals = await prisma.teamGoal.count({ where: { status: 'ACTIVE' } });
    const closedGoals = await prisma.teamGoal.count({ where: { status: 'CLOSED' } });
    
    const teamRevenue = remittances.reduce((acc, r) => acc + r.value, 0);
    const dailyProfit = dailyRecords.reduce((acc, r) => acc + r.profit, 0);
    const totalPlatformRevenue = teamRevenue + dailyProfit;

    // Today's revenue (rough estimate from created at)
    const today = new Date();
    today.setHours(0,0,0,0);
    const todayRemittances = await prisma.teamRemittance.findMany({ where: { createdAt: { gte: today } } });
    const todayDaily = await prisma.dailyRecord.findMany({ where: { createdAt: { gte: today } } });
    const todayRevenue = todayRemittances.reduce((acc, r) => acc + r.value, 0) + todayDaily.reduce((acc, r) => acc + r.profit, 0);

    res.json({
      totalUsers: usersCount,
      totalTeams: teamsCount,
      totalOperators: operatorsCount,
      totalGoals: goalsCount,
      activeGoals,
      closedGoals,
      totalRemittances: remittances.length,
      totalRevenue: totalPlatformRevenue,
      todayRevenue,
      totalLoss: dailyRecords.filter(r => r.profit < 0).reduce((acc, r) => acc + Math.abs(r.profit), 0)
    });
  } catch (error) {
    res.status(500).json({ error: "Internal error" });
  }
});

app.get("/api/admin/users", authenticate, isAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { teamMemberships: { include: { team: true } } },
      orderBy: { createdAt: 'desc' }
    });
    res.json(users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status,
      createdAt: u.createdAt,
      team: u.teamMemberships[0]?.team.name || "Sem Equipe"
    })));
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/admin/users/:id/role", authenticate, isAdmin, async (req, res) => {
  try {
    const { role } = req.body;
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: { role }
    });
    res.json(user);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/admin/users/:id/status", authenticate, isAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: { status }
    });
    res.json(user);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.delete("/api/admin/users/:id", authenticate, isAdmin, async (req, res) => {
  try {
    await prisma.user.delete({ where: { id: Number(req.params.id) } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.get("/api/admin/teams", authenticate, isAdmin, async (req, res) => {
  try {
    const teams = await prisma.team.findMany({
      include: { 
        owner: { select: { name: true } },
        members: true,
        remittances: true
      }
    });

    res.json(teams.map(t => ({
      id: t.id,
      name: t.name,
      code: t.code,
      owner: t.owner.name,
      operatorsCount: t.members.length,
      revenue: t.remittances.reduce((acc, r) => acc + r.value, 0)
    })));
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.get("/api/admin/feed", authenticate, isAdmin, async (req, res) => {
  try {
    const [remittances, goals, operations, activities] = await Promise.all([
      prisma.teamRemittance.findMany({ take: 10, orderBy: { createdAt: 'desc' }, include: { operator: { select: { name: true } } } }),
      prisma.teamGoal.findMany({ take: 10, orderBy: { createdAt: 'desc' }, include: { team: true } }),
      prisma.teamOperation.findMany({ take: 10, orderBy: { createdAt: 'desc' }, include: { team: true } }),
      prisma.activity.findMany({ take: 10, orderBy: { createdAt: 'desc' }, include: { user: { select: { name: true } } } })
    ]);

    const feed = [
      ...remittances.map(r => ({ type: 'REMITTANCE', title: `Nova Remessa: R$ ${r.value}`, user: r.operator.name, date: r.createdAt })),
      ...goals.map(g => ({ type: 'GOAL', title: `Nova Meta: ${g.platform}`, user: g.team.name, date: g.createdAt })),
      ...operations.map(o => ({ type: 'OPERATION', title: `Operação: ${o.platform} (${o.network})`, user: o.team.name, date: o.createdAt })),
      ...activities.map(a => ({ type: 'ACTIVITY', title: a.description, user: a.user.name, date: a.createdAt }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    res.json(feed.slice(0, 20));
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.get("/api/admin/logs", authenticate, isAdmin, async (req, res) => {
  try {
    const logs = await prisma.activity.findMany({
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
    res.json(logs);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

// Data routes (protected)
app.get("/api/dashboard", authenticate, async (req: any, res: any) => {
  try {
    const userId = req.user.role === 'ADMIN' ? undefined : req.user.userId;
    
    // Aggregate stats
    const stats = await prisma.statistic.aggregate({
      _sum: {
        clicks: true,
        revenue: true,
        leads: true
      },
      where: userId ? { userId } : undefined
    });

    const recentActivities = await prisma.activity.findMany({
      where: userId ? { userId } : undefined,
      orderBy: { createdAt: "desc" },
      take: 5
    });

    res.json({ stats: stats._sum, recentActivities });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/users", authenticate, async (req: any, res: any) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: "Forbidden" });
  }
  
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// --- GOALS ROUTE ---
app.get("/api/goals", authenticate, async (req: any, res: any) => {
  try {
    const goals = await prisma.goal.findMany({ where: { userId: req.user.userId } });
    res.json(goals);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/goals", authenticate, async (req: any, res: any) => {
  try {
    const { title, target, current, deadline } = req.body;
    const goal = await prisma.goal.create({
      data: { title, target, current, deadline, userId: req.user.userId }
    });
    res.json(goal);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.delete("/api/goals/:id", authenticate, async (req: any, res: any) => {
  try {
    await prisma.goal.delete({ where: { id: Number(req.params.id), userId: req.user.userId } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

// --- EXPENSES ROUTE ---
app.get("/api/expenses", authenticate, async (req: any, res: any) => {
  try {
    const expenses = await prisma.expense.findMany({ where: { userId: req.user.userId }, orderBy: { createdAt: 'desc' } });
    res.json(expenses);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/expenses", authenticate, async (req: any, res: any) => {
  try {
    const { name, amount, category, date } = req.body;
    const expense = await prisma.expense.create({
      data: { name, amount, category, date, userId: req.user.userId }
    });
    res.json(expense);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.delete("/api/expenses/:id", authenticate, async (req: any, res: any) => {
  try {
    await prisma.expense.delete({ where: { id: Number(req.params.id) } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

// --- DAILY SHEETS & RECORDS ---
app.get("/api/daily-sheets", authenticate, async (req: any, res: any) => {
  try {
    const sheets = await prisma.dailySheet.findMany({
      where: { userId: req.user.userId },
      include: { records: { orderBy: { createdAt: 'desc' } } },
      orderBy: { createdAt: 'asc' }
    });
    res.json(sheets);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/daily-sheets", authenticate, async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const sheet = await prisma.dailySheet.create({
      data: { name, userId: req.user.userId },
      include: { records: true }
    });
    res.json(sheet);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.put("/api/daily-sheets/:id", authenticate, async (req: any, res: any) => {
  try {
    const { name, proxyCost, smsCost } = req.body;
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (proxyCost !== undefined) updateData.proxyCost = proxyCost;
    if (smsCost !== undefined) updateData.smsCost = smsCost;
    
    const sheet = await prisma.dailySheet.update({
      where: { id: Number(req.params.id) },
      data: updateData,
      include: { records: true }
    });
    res.json(sheet);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.delete("/api/daily-sheets/:id", authenticate, async (req: any, res: any) => {
  try {
    await prisma.dailySheet.delete({ where: { id: Number(req.params.id) } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.get("/api/daily-records", authenticate, async (req: any, res: any) => {
  try {
    const { sheetId } = req.query;
    if (!sheetId) return res.status(400).json({ error: "sheetId required "});
    const records = await prisma.dailyRecord.findMany({
      where: { sheetId: Number(sheetId) },
      orderBy: { createdAt: 'desc' }
    });
    res.json(records);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/daily-records", authenticate, async (req: any, res: any) => {
  try {
    const { sheetId, date, cycles } = req.body;

    if (!cycles || !Array.isArray(cycles) || cycles.length === 0) {
      return res.status(400).json({ error: "No cycles provided" });
    }

    let totalProfit = 0;
    const recordsToCreate: any[] = [];
    const recordDate = date ? new Date(date) : new Date();

    const sheet = await prisma.dailySheet.findUnique({ where: { id: Number(sheetId) } });
    const platformName = sheet ? sheet.name : "Desconhecida";

    for (const c of cycles) {
      const investment = Number(c.deposit) || 0;
      const withdraw = Number(c.withdraw) || 0;
      const bau = Number(c.bau) || 0;
      const salary = Number(c.salary) || 0;
      
      const profit = withdraw + bau + salary;
      totalProfit += profit;

      recordsToCreate.push({
        sheetId: Number(sheetId),
        date: recordDate,
        platform: platformName,
        investment,
        withdraw,
        bau,
        salary,
        cycles: "1",
        profit,
        observation: c.observation || null,
        rolloverSlot: c.rolloverSlot || null
      });
    }

    await prisma.dailyRecord.createMany({
      data: recordsToCreate
    });

    res.json({ success: true, totalProfit, cyclesProcessed: cycles.length });

    // Send aggregated push notification
    const formattedProfit = totalProfit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    sendPushNotification(
      req.user.userId,
      "Remessa registrada!",
      `Novo registro de ${cycles.length} ciclo(s) - Lucro Total ${formattedProfit}`
    ).catch(e => console.error("Notification error:", e));
  } catch (error) { 
    console.error("Create daily-record error:", error);
    res.status(500).json({ error: "Internal error" }); 
  }
});

app.put("/api/daily-records/:id", authenticate, async (req: any, res: any) => {
  try {
    const { platform, deposit, withdraw, bau, salary, observation } = req.body;
    const inv = Number(deposit) || 0;
    const wd = Number(withdraw) || 0;
    const b = Number(bau) || 0;
    const s = Number(salary) || 0;
    
    const profit = wd + b + s;
    
    const recordBefore = await prisma.dailyRecord.findUnique({ where: { id: Number(req.params.id) }, include: { sheet: true } });
    const platformUpdated = recordBefore?.sheet?.name || "Desconhecida";

    const record = await prisma.dailyRecord.update({
      where: { id: Number(req.params.id) },
      data: { 
        platform: platformUpdated, 
        investment: inv, 
        withdraw: wd, 
        bau: b, 
        salary: s, 
        observation, 
        profit,
        rolloverSlot: req.body.rolloverSlot
      }
    });
    res.json(record);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.delete("/api/daily-records/:id", authenticate, async (req: any, res: any) => {
  try {
    await prisma.dailyRecord.delete({ where: { id: Number(req.params.id) } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.get("/api/dashboard-summary", authenticate, async (req: any, res: any) => {
  try {
    const sheets = await prisma.dailySheet.findMany({
      where: { userId: req.user.userId },
      include: { records: true }
    });
    const allExpenses = await prisma.expense.findMany({
      where: { userId: req.user.userId }
    });
    
    // Filtrar despesas apenas do dia atual
    const today = new Date().toISOString().split('T')[0];
    const todayExpenses = allExpenses.filter((e: any) => {
      // Suporta formato ISO (2026-04-11) e pt-BR (11/04/2026)
      if (e.date && e.date.includes('-')) return e.date === today;
      return false;
    });
    
    let totalInvest = 0;
    let totalWithdraw = 0;
    let totalProxySms = 0;
    
    sheets.forEach((sheet: any) => {
      totalProxySms += (sheet.proxyCost || 0) + (sheet.smsCost || 0);
      sheet.records.forEach((record: any) => {
        totalInvest += record.investment;
        totalWithdraw += record.withdraw;
      });
    });
    const totalExp = todayExpenses.reduce((acc: number, e: any) => acc + e.amount, 0);
    
    const investment = totalInvest + totalProxySms + totalExp;
    const revenue = totalWithdraw;
    const profit = revenue - investment;
    const roi = investment > 0 ? (profit / investment) * 100 : 0;
    const totalMovimentado = totalInvest + totalWithdraw;
    
    res.json({ investment, revenue, profit, roi, totalMovimentado });
  } catch (error) {
    res.status(500).json({ error: "Internal error" });
  }
});

// --- TEAM ROUTES ---

// Helper to generate unique team code
const generateTeamCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

app.post("/api/teams/create", authenticate, async (req: any, res: any) => {
  try {
    const { name, instagram, color, image } = req.body;
    const code = generateTeamCode();
    
    // Ensure the owner is not already in another team (assuming 1 team per user for simplicity, or just atomic create)
    const existingMembership = await prisma.teamMember.findFirst({
      where: { userId: req.user.userId }
    });
    
    if (existingMembership) {
      return res.status(400).json({ error: "Você já faz parte de uma equipe." });
    }

    const team = await prisma.team.create({
      data: {
        name,
        code,
        instagram,
        color,
        image,
        ownerId: req.user.userId,
        members: {
          create: {
            userId: req.user.userId,
            role: "OWNER"
          }
        }
      }
    });
    
    res.json(team);
  } catch (error) { 
    console.error("Error creating team:", error);
    res.status(500).json({ error: "Erro interno ao criar equipe" }); 
  }
});

app.post("/api/teams/join", authenticate, async (req: any, res: any) => {
  try {
    const { code } = req.body;
    const team = await prisma.team.findUnique({ where: { code } });
    
    if (!team) return res.status(404).json({ error: "Equipe não encontrada" });
    
    // Check if user is already a member
    const existingMembership = await prisma.teamMember.findUnique({
      where: {
        teamId_userId: {
          teamId: team.id,
          userId: req.user.userId
        }
      }
    });
    
    if (existingMembership) {
      return res.status(400).json({ error: "Você já é membro desta equipe." });
    }

    const membership = await prisma.teamMember.create({
      data: {
        teamId: team.id,
        userId: req.user.userId,
        role: "OPERATOR"
      }
    });
    
    res.json({ success: true, team });
  } catch (error) { 
    console.error("Error joining team:", error);
    res.status(500).json({ error: "Erro interno ao entrar na equipe" }); 
  }
});

app.get("/api/teams/current", authenticate, async (req: any, res: any) => {
  try {
    const membership = await prisma.teamMember.findFirst({
      where: { userId: req.user.userId },
      include: { team: true }
    });
    res.json(membership ? membership.team : null);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.get("/api/teams/dashboard", authenticate, async (req: any, res: any) => {
  try {
    const { teamId } = req.query;
    if (!teamId) return res.status(400).json({ error: "teamId required" });
    
    const id = Number(teamId);
    const [team, allRemittances, members, goals, teamExpenses] = await Promise.all([
      prisma.team.findUnique({ where: { id } }),
      prisma.teamRemittance.findMany({ 
        where: { teamId: id },
        include: { operator: { select: { name: true } } }
      }),
      prisma.teamMember.findMany({ 
        where: { teamId: id },
        include: { user: { select: { name: true, email: true } } }
      }),
      prisma.teamGoal.findMany({ where: { teamId: id } }),
      prisma.teamExpense.findMany({ where: { teamId: id } })
    ]);

    // Calculate requested stats
    const totalRemittanceValue = allRemittances.reduce((acc, r) => acc + r.value, 0);
    const totalExpenses = teamExpenses.reduce((acc, e) => acc + e.amount, 0);
    const teamNetProfit = totalRemittanceValue - totalExpenses;
    const operatorsCount = members.length;
    const activeGoals = goals.filter(g => g.status === 'ACTIVE').length;
    const finishedGoals = goals.filter(g => g.status === 'CLOSED' || g.status === 'COMPLETED').length;

    // Operator Ranking (Sum of profit/remittances)
    const rankingMap: Record<number, { name: string, profit: number, count: number }> = {};
    allRemittances.forEach(r => {
      if (!rankingMap[r.operatorId]) {
        rankingMap[r.operatorId] = { name: r.operator.name, profit: 0, count: 0 };
      }
      rankingMap[r.operatorId].profit += r.value;
      rankingMap[r.operatorId].count += 1;
    });
    const operatorsRanking = Object.values(rankingMap)
      .sort((a, b) => b.profit - a.profit);

    // Platform/Network Ranking (which platform generated the most profit)
    const platformMap: Record<string, { platform: string, profit: number, count: number, totalCycles: number }> = {};
    allRemittances.forEach(r => {
      const key = r.platform;
      if (!platformMap[key]) {
        platformMap[key] = { platform: key, profit: 0, count: 0, totalCycles: 0 };
      }
      platformMap[key].profit += r.value;
      platformMap[key].count += 1;
      platformMap[key].totalCycles += parseInt(r.cycles || "1") || 1;
    });
    const platformRanking = Object.values(platformMap)
      .sort((a, b) => b.profit - a.profit);

    res.json({
      teamProfit: totalRemittanceValue,
      totalExpenses,
      teamNetProfit,
      totalRemittance: allRemittances.length,
      operatorsCount,
      goalsCount: goals.length,
      activeGoals,
      finishedGoals,
      members: members.map(m => ({ 
        id: m.userId, 
        name: m.user.name, 
        role: m.role 
      })),
      operatorsRanking,
      platformRanking
    });
  } catch (error) { 
    console.error("Dashboard error:", error);
    res.status(500).json({ error: "Internal error" }); 
  }
});

app.get("/api/teams/operations", authenticate, async (req: any, res: any) => {
  try {
    const { teamId } = req.query;
    if (!teamId) return res.status(400).json({ error: "teamId required" });
    const operations = await prisma.teamOperation.findMany({
      where: { teamId: Number(teamId) },
      orderBy: { createdAt: 'desc' }
    });
    res.json(operations);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/teams/operations", authenticate, async (req: any, res: any) => {
  try {
    const { teamId, platform, network, bets, average, depositors, target, operatorName } = req.body;
    
    const result = await prisma.$transaction(async (tx) => {
      const operation = await tx.teamOperation.create({
        data: { 
          teamId: Number(teamId), 
          platform, 
          network, 
          bets: Number(bets) || 0, 
          average: Number(average) || 0, 
          depositors: Number(depositors) || 0,
          operatorName
        }
      });

      // Se houver um target, cria a meta automaticamente
      const goalTarget = parseInt(target);
      if (!isNaN(goalTarget) && goalTarget > 0) {
        await tx.teamGoal.create({
          data: {
            teamId: Number(teamId),
            platform,
            target: goalTarget,
            status: "ACTIVE"
          }
        });
      }

      return operation;
    });

    res.json(result);
  } catch (error) { 
    console.error("Create operation error:", error);
    res.status(500).json({ error: "Internal error" }); 
  }
});

app.get("/api/teams/goals", authenticate, async (req: any, res: any) => {
  try {
    const { teamId } = req.query;
    const goals = await prisma.teamGoal.findMany({ 
      where: { teamId: Number(teamId) },
      orderBy: { createdAt: 'desc' }
    });
    res.json(goals);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/teams/goals", authenticate, async (req: any, res: any) => {
  try {
    const { teamId, platform, target } = req.body;
    const goal = await prisma.teamGoal.create({
      data: { teamId: Number(teamId), platform, target: Number(target) }
    });
    res.json(goal);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.delete("/api/teams/goals/:id", authenticate, async (req: any, res: any) => {
  try {
    await prisma.teamGoal.delete({ where: { id: Number(req.params.id) } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/teams/remittance", authenticate, async (req: any, res: any) => {
  try {
    const { teamId, cycles } = req.body;
    
    if (!cycles || !Array.isArray(cycles) || cycles.length === 0) {
      return res.status(400).json({ error: "No cycles provided" });
    }

    let totalProfit = 0;
    const remittancesToCreate: any[] = [];
    const platformsCount: Record<string, number> = {};

    for (const c of cycles) {
      const deposit = Number(c.deposit) || 0;
      const withdraw = Number(c.withdraw) || 0;
      const bau = Number(c.bau) || 0;
      const salary = Number(c.salary) || 0;
      
      const calculatedValue = withdraw + bau + salary - deposit;
      totalProfit += calculatedValue;
      
      const platformStr = c.platform || "Desconhecida";
      platformsCount[platformStr] = (platformsCount[platformStr] || 0) + 1;

      remittancesToCreate.push({
        teamId: Number(teamId),
        operatorId: req.user.userId,
        platform: platformStr,
        deposit,
        withdraw,
        bau,
        salary,
        cycles: "1", // Cada iteração representa 1 ciclo
        value: calculatedValue,
        observation: c.observation || null,
        rolloverSlot: c.rolloverSlot || null
      });
    }

    // Insert all remittances in a single transaction
    await prisma.teamRemittance.createMany({
      data: remittancesToCreate
    });
    
    // Update team operations (bar target) per platform
    for (const [platform, count] of Object.entries(platformsCount)) {
      const activeOp = await prisma.teamOperation.findFirst({
        where: { teamId: Number(teamId), platform },
        orderBy: { createdAt: 'desc' }
      });
      if (activeOp) {
        await prisma.teamOperation.update({
          where: { id: activeOp.id },
          data: { depositors: activeOp.depositors + count }
        });
      }
    }

    res.json({ success: true, totalProfit, cyclesProcessed: cycles.length });

    // Send aggregated push notification to all team members
    try {
      const teamMembers = await prisma.teamMember.findMany({ 
        where: { teamId: Number(teamId) },
        include: { user: true }
      });
      
      const operator = teamMembers.find((m: any) => m.userId === req.user.userId);
      const operatorName = operator ? operator.user.name : "Alguém";
      
      const formattedProfit = totalProfit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const notificationTitle = "Remessa registrada!";
      const notificationBody = `Op. ${operatorName} finalizou ${cycles.length} ciclo(s) - Lucro Total ${formattedProfit}`;
      
      const notificationPromises = teamMembers.map((m: any) => 
        sendPushNotification(m.userId, notificationTitle, notificationBody)
          .catch(e => console.error(`Error notifying user ${m.userId}:`, e))
      );
      
      await Promise.all(notificationPromises);
    } catch (pnError) {
      console.error("Push notification error in remittance:", pnError);
    }
  } catch (error) { 
    console.error("Create remittance error:", error);
    res.status(500).json({ error: "Internal error" }); 
  }
});

// --- TEAM EXPENSES ---
app.get("/api/teams/expenses", authenticate, async (req: any, res: any) => {
  try {
    const { teamId } = req.query;
    if (!teamId) return res.status(400).json({ error: "teamId required" });
    const expenses = await prisma.teamExpense.findMany({
      where: { teamId: Number(teamId) },
      include: { user: { select: { name: true } } },
      orderBy: { date: 'desc' }
    });
    res.json(expenses);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.post("/api/teams/expenses", authenticate, async (req: any, res: any) => {
  try {
    const { teamId, name, amount, category, date } = req.body;
    // Somente owners/admins? Para simplificar, vou permitir que qualquer membro adicione, mas registre o user.
    // O USER pode mudar isso se quiser restrição maior.
    const expense = await prisma.teamExpense.create({
      data: {
        teamId: Number(teamId),
        userId: req.user.userId,
        name,
        amount: Number(amount),
        category,
        date: date || new Date().toISOString().split('T')[0]
      }
    });
    res.json(expense);
  } catch (error) { 
     console.error("Create team expense error:", error);
     res.status(500).json({ error: "Internal error" }); 
  }
});

app.delete("/api/teams/expenses/:id", authenticate, async (req: any, res: any) => {
  try {
    await prisma.teamExpense.delete({ where: { id: Number(req.params.id) } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

app.get("/api/teams/remittance/feed", authenticate, async (req: any, res: any) => {
  try {
    const { teamId } = req.query;
    const feed = await prisma.teamRemittance.findMany({
      where: { teamId: Number(teamId) },
      include: { operator: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
      take: 20
    });
    res.json(feed);
  } catch (error) { res.status(500).json({ error: "Internal error" }); }
});

// --- FINALIZE REMITTANCE ---
app.post("/api/daily-records/:id/finalize", authenticate, async (req: any, res: any) => {
  try {
    const recordId = Number(req.params.id);
    const userId = req.user.userId;

    const record = await prisma.dailyRecord.findUnique({
      where: { id: recordId },
      include: { sheet: true }
    });

    if (!record || record.sheet.userId !== userId) {
      return res.status(404).json({ error: "Registro não encontrado" });
    }

    if (record.status === 'FINISHED') {
      return res.status(400).json({ error: "Esta remessa já foi finalizada" });
    }

    // Find user's team
    const membership = await prisma.teamMember.findFirst({
      where: { userId }
    });

    if (!membership) {
      return res.status(400).json({ error: "Você precisa estar em uma equipe para finalizar cooperação." });
    }

    const profit = record.profit || (record.withdraw - record.investment);

    const [updatedRecord, remittance] = await prisma.$transaction([
      prisma.dailyRecord.update({
        where: { id: recordId },
        data: { status: 'FINISHED', teamId: membership.teamId }
      }),
      prisma.teamRemittance.create({
        data: {
          teamId: membership.teamId,
          operatorId: userId,
          platform: record.platform,
          value: profit,
          observation: `Finalização de cooperação - ${record.cycles}`
        }
      }),
      // Log notification activity for feed/logs
      prisma.activity.create({
        data: {
          userId,
          actionType: "FINALIZE_REMITTANCE",
          description: `Finalizou remessa: ${record.platform} - R$ ${profit.toFixed(2)}`
        }
      })
    ]);

    res.json({ success: true, record: updatedRecord, remittance });
  } catch (error) {
    console.error("Finalize error:", error);
    res.status(500).json({ error: "Erro interno ao finalizar remessa" });
  }
});

// --- RECENT ACTIVITY (feed aggregado) ---
app.get("/api/recent-activity", authenticate, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;

    const [records, expenses, sheets] = await Promise.all([
      prisma.dailyRecord.findMany({
        where: { sheet: { userId } },
        orderBy: { createdAt: 'desc' },
        take: 6,
        include: { sheet: { select: { name: true } } }
      }),
      prisma.expense.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 6
      }),
      prisma.dailySheet.findMany({
        where: {
          userId,
          OR: [{ proxyCost: { gt: 0 } }, { smsCost: { gt: 0 } }]
        },
        orderBy: { updatedAt: 'desc' },
        take: 4
      })
    ]);

    type ActivityItem = {
      type: string;
      label: string;
      value: number;
      date: Date;
    };

    const activities: ActivityItem[] = [];

    records.forEach(r => {
      const profit = r.profit ?? (r.withdraw - r.investment);
      activities.push({
        type: profit >= 0 ? 'WITHDRAW' : 'LOSS',
        label: `${r.platform} — Novo Registro`,
        value: profit,
        date: r.createdAt
      });
    });

    expenses.forEach(e => {
      activities.push({
        type: 'EXPENSE',
        label: e.name,
        value: -e.amount,
        date: e.createdAt
      });
    });

    sheets.forEach(s => {
      const cost = (s.proxyCost || 0) + (s.smsCost || 0);
      if (cost > 0) {
        activities.push({
          type: 'COST',
          label: `Proxy/SMS — ${s.name}`,
          value: -cost,
          date: s.updatedAt
        });
      }
    });

    activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    res.json(activities.slice(0, 6).map(a => ({
      type: a.type,
      label: a.label,
      value: a.value,
      date: a.date
    })));
  } catch (error) {
    console.error("recent-activity error:", error);
    res.status(500).json({ error: "Internal error" });
  }
});

// --- SERVER OPERATIONS (registros do livro diário) ---
app.get("/api/server-operations", authenticate, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;

    const records = await prisma.dailyRecord.findMany({
      where: { sheet: { userId } },
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: { sheet: { select: { name: true } } }
    });

    res.json(records.map(r => ({
      id: r.id,
      platform: r.platform,
      type: r.withdraw >= r.investment ? 'WITHDRAW' : 'DEPOSIT',
      investment: r.investment,
      withdraw: r.withdraw,
      profit: r.profit ?? (r.withdraw - r.investment),
      sheet: r.sheet.name,
      cycles: r.cycles,
      date: r.createdAt
    })));
  } catch (error) {
    console.error("server-operations error:", error);
    res.status(500).json({ error: "Internal error" });
  }
});

// --- RESET DATA ---

// Reset Team Data (Owner/Admin only)
app.post("/api/teams/:id/reset", authenticate, async (req: any, res: any) => {
  try {
    const teamId = Number(req.params.id);
    const userId = req.user.userId;

    // Check membership and role
    const membership = await prisma.teamMember.findUnique({
      where: { teamId_userId: { teamId, userId } }
    });

    if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
      return res.status(403).json({ error: "Acesso negado. Apenas proprietários ou administradores podem redefinir os dados." });
    }

    await prisma.$transaction([
      prisma.teamRemittance.deleteMany({ where: { teamId } }),
      prisma.teamGoal.deleteMany({ where: { teamId } }),
      prisma.teamOperation.deleteMany({ where: { teamId } }),
      // Log the reset
      prisma.activity.create({
        data: {
          userId,
          actionType: "RESET_TEAM_DATA",
          description: `Redefiniu todos os dados da equipe ID ${teamId}`
        }
      })
    ]);

    res.json({ success: true, message: "Dados da equipe redefinidos com sucesso." });
  } catch (error) {
    console.error("Team reset error:", error);
    res.status(500).json({ error: "Erro interno ao redefinir dados da equipe" });
  }
});

// Reset User Data (Personal only)
app.post("/api/user/reset-data", authenticate, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;

    await prisma.$transaction([
      prisma.dailySheet.deleteMany({ where: { userId } }),
      prisma.goal.deleteMany({ where: { userId } }),
      prisma.expense.deleteMany({ where: { userId } }),
      prisma.statistic.deleteMany({ where: { userId } }),
      prisma.activity.deleteMany({ where: { userId } }),
      // Re-log the reset activity as the only one left
      prisma.activity.create({
        data: {
          userId,
          actionType: "RESET_USER_DATA",
          description: "Redefiniu todos os dados pessoais"
        }
      })
    ]);

    res.json({ success: true, message: "Seus dados foram redefinidos com sucesso." });
  } catch (error) {
    console.error("User reset error:", error);
    res.status(500).json({ error: "Erro interno ao redefinir seus dados" });
  }
});

// ── Sair da Equipe ─────────────────────────────────────────────────────────
app.post("/api/team/leave", authenticate, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;
    
    // Encontra todas as memberships do usuário
    const memberships = await prisma.teamMember.findMany({
      where: { userId }
    });

    if (memberships.length === 0) {
      return res.status(404).json({ error: "Você não está em nenhuma equipe." });
    }

    // Remove todas as memberships (sai de todas as equipes)
    await prisma.teamMember.deleteMany({
      where: { userId }
    });

    // Registre a atividade
    await prisma.activity.create({
      data: {
        userId,
        actionType: "LEAVE_TEAM",
        description: "Saiu da equipe"
      }
    });

    res.json({ success: true, message: "Você saiu da equipe com sucesso." });
  } catch (error) {
    console.error("Leave team error:", error);
    res.status(500).json({ error: "Erro interno ao sair da equipe" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
