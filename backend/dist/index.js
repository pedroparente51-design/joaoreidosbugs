"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        process.env.FRONTEND_URL || 'https://joaoreidosbugs.netlify.app',
    ],
    credentials: true,
}));
app.use(express_1.default.json());
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
// Admin Seeding
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const adminEmail = "joaoreidobugs@gmail.com";
    try {
        const existingAdmin = yield prisma.user.findUnique({ where: { email: adminEmail } });
        if (!existingAdmin) {
            const passwordHash = yield bcryptjs_1.default.hash("Admin@123", 10);
            yield prisma.user.create({
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
    }
    catch (error) {
        console.error("Error seeding admin:", error);
    }
});
seedAdmin();
// Auth routes
app.post("/api/auth/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const existingUser = yield prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        const passwordHash = yield bcryptjs_1.default.hash(password, 10);
        const user = yield prisma.user.create({
            data: {
                name,
                email,
                passwordHash,
                status: "ACTIVE"
            },
        });
        // Log Activity
        yield prisma.activity.create({
            data: { userId: user.id, actionType: "REGISTER", description: "Novo usuário registrado" }
        });
        res.status(201).json({ message: "User registered successfully", userId: user.id });
    }
    catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
app.post("/api/auth/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        if (user.status === 'BANNED') {
            return res.status(403).json({ error: "Sua conta foi suspensa. Entre em contato com o suporte." });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        // Log Activity
        yield prisma.activity.create({
            data: { userId: user.id, actionType: "LOGIN", description: "Login realizado com sucesso" }
        });
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
// Middleware for JWT verification
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log("Auth failed: No token");
        return res.status(401).json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        console.log("Auth failed: Invalid token", error);
        return res.status(401).json({ error: "Invalid token" });
    }
};
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'ADMIN') {
        next();
    }
    else {
        res.status(403).json({ error: "Acesso negado. Apenas administradores podem acessar esta rota." });
    }
};
// --- ADMIN ROUTES ---
app.get("/api/admin/metrics", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [usersCount, teamsCount, operatorsCount, goalsCount, remittances, dailyRecords] = yield Promise.all([
            prisma.user.count(),
            prisma.team.count(),
            prisma.teamMember.count({ where: { role: 'OPERATOR' } }),
            prisma.teamGoal.count(),
            prisma.teamRemittance.findMany(),
            prisma.dailyRecord.findMany()
        ]);
        const activeGoals = yield prisma.teamGoal.count({ where: { status: 'ACTIVE' } });
        const closedGoals = yield prisma.teamGoal.count({ where: { status: 'CLOSED' } });
        const teamRevenue = remittances.reduce((acc, r) => acc + r.value, 0);
        const dailyProfit = dailyRecords.reduce((acc, r) => acc + r.profit, 0);
        const totalPlatformRevenue = teamRevenue + dailyProfit;
        // Today's revenue (rough estimate from created at)
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayRemittances = yield prisma.teamRemittance.findMany({ where: { createdAt: { gte: today } } });
        const todayDaily = yield prisma.dailyRecord.findMany({ where: { createdAt: { gte: today } } });
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
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/admin/users", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany({
            include: { teamMemberships: { include: { team: true } } },
            orderBy: { createdAt: 'desc' }
        });
        res.json(users.map(u => {
            var _a;
            return ({
                id: u.id,
                name: u.name,
                email: u.email,
                role: u.role,
                status: u.status,
                createdAt: u.createdAt,
                team: ((_a = u.teamMemberships[0]) === null || _a === void 0 ? void 0 : _a.team.name) || "Sem Equipe"
            });
        }));
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/admin/users/:id/role", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role } = req.body;
        const user = yield prisma.user.update({
            where: { id: Number(req.params.id) },
            data: { role }
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/admin/users/:id/status", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.body;
        const user = yield prisma.user.update({
            where: { id: Number(req.params.id) },
            data: { status }
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.delete("/api/admin/users/:id", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.user.delete({ where: { id: Number(req.params.id) } });
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/admin/teams", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield prisma.team.findMany({
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
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/admin/feed", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [remittances, goals, operations, activities] = yield Promise.all([
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
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/admin/logs", authenticate, isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield prisma.activity.findMany({
            include: { user: { select: { name: true, email: true } } },
            orderBy: { createdAt: 'desc' },
            take: 50
        });
        res.json(logs);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
// Data routes (protected)
app.get("/api/dashboard", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.role === 'ADMIN' ? undefined : req.user.userId;
        // Aggregate stats
        const stats = yield prisma.statistic.aggregate({
            _sum: {
                clicks: true,
                revenue: true,
                leads: true
            },
            where: userId ? { userId } : undefined
        });
        const recentActivities = yield prisma.activity.findMany({
            where: userId ? { userId } : undefined,
            orderBy: { createdAt: "desc" },
            take: 5
        });
        res.json({ stats: stats._sum, recentActivities });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
app.get("/api/users", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ error: "Forbidden" });
    }
    try {
        const users = yield prisma.user.findMany({
            select: { id: true, name: true, email: true, role: true, createdAt: true }
        });
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
// --- GOALS ROUTE ---
app.get("/api/goals", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const goals = yield prisma.goal.findMany({ where: { userId: req.user.userId } });
        res.json(goals);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/goals", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, target, current, deadline } = req.body;
        const goal = yield prisma.goal.create({
            data: { title, target, current, deadline, userId: req.user.userId }
        });
        res.json(goal);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
// --- EXPENSES ROUTE ---
app.get("/api/expenses", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expenses = yield prisma.expense.findMany({ where: { userId: req.user.userId }, orderBy: { createdAt: 'desc' } });
        res.json(expenses);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/expenses", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, amount, category, date } = req.body;
        const expense = yield prisma.expense.create({
            data: { name, amount, category, date, userId: req.user.userId }
        });
        res.json(expense);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.delete("/api/expenses/:id", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.expense.delete({ where: { id: Number(req.params.id) } });
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
// --- DAILY SHEETS & RECORDS ---
app.get("/api/daily-sheets", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sheets = yield prisma.dailySheet.findMany({
            where: { userId: req.user.userId },
            include: { records: { orderBy: { createdAt: 'desc' } } },
            orderBy: { createdAt: 'asc' }
        });
        res.json(sheets);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/daily-sheets", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const sheet = yield prisma.dailySheet.create({
            data: { name, userId: req.user.userId },
            include: { records: true }
        });
        res.json(sheet);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.put("/api/daily-sheets/:id", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, proxyCost, smsCost } = req.body;
        const updateData = {};
        if (name !== undefined)
            updateData.name = name;
        if (proxyCost !== undefined)
            updateData.proxyCost = proxyCost;
        if (smsCost !== undefined)
            updateData.smsCost = smsCost;
        const sheet = yield prisma.dailySheet.update({
            where: { id: Number(req.params.id) },
            data: updateData,
            include: { records: true }
        });
        res.json(sheet);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.delete("/api/daily-sheets/:id", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.dailySheet.delete({ where: { id: Number(req.params.id) } });
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/daily-records", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sheetId } = req.query;
        if (!sheetId)
            return res.status(400).json({ error: "sheetId required " });
        const records = yield prisma.dailyRecord.findMany({
            where: { sheetId: Number(sheetId) },
            orderBy: { createdAt: 'desc' }
        });
        res.json(records);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/daily-records", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sheetId, date, platform, investment, withdraw, cycles } = req.body;
        const profit = withdraw - investment;
        const record = yield prisma.dailyRecord.create({
            data: {
                sheetId: Number(sheetId),
                date: new Date(date),
                platform, investment, withdraw, cycles, profit
            }
        });
        res.json(record);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.put("/api/daily-records/:id", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, platform, investment, withdraw, cycles } = req.body;
        const profit = withdraw - investment;
        const record = yield prisma.dailyRecord.update({
            where: { id: Number(req.params.id) },
            data: { date: new Date(date), platform, investment, withdraw, cycles, profit }
        });
        res.json(record);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.delete("/api/daily-records/:id", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.dailyRecord.delete({ where: { id: Number(req.params.id) } });
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/dashboard-summary", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sheets = yield prisma.dailySheet.findMany({
            where: { userId: req.user.userId },
            include: { records: true }
        });
        const allExpenses = yield prisma.expense.findMany({
            where: { userId: req.user.userId }
        });
        // Filtrar despesas apenas do dia atual
        const today = new Date().toISOString().split('T')[0];
        const todayExpenses = allExpenses.filter((e) => {
            // Suporta formato ISO (2026-04-11) e pt-BR (11/04/2026)
            if (e.date && e.date.includes('-'))
                return e.date === today;
            return false;
        });
        let totalInvest = 0;
        let totalWithdraw = 0;
        let totalProxySms = 0;
        sheets.forEach((sheet) => {
            totalProxySms += (sheet.proxyCost || 0) + (sheet.smsCost || 0);
            sheet.records.forEach((record) => {
                totalInvest += record.investment;
                totalWithdraw += record.withdraw;
            });
        });
        const totalExp = todayExpenses.reduce((acc, e) => acc + e.amount, 0);
        const investment = totalInvest + totalProxySms + totalExp;
        const revenue = totalWithdraw;
        const profit = revenue - investment;
        const roi = investment > 0 ? (profit / investment) * 100 : 0;
        const totalMovimentado = totalInvest + totalWithdraw;
        res.json({ investment, revenue, profit, roi, totalMovimentado });
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
// --- TEAM ROUTES ---
// Helper to generate unique team code
const generateTeamCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};
app.post("/api/teams/create", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, instagram, color } = req.body;
        const code = generateTeamCode();
        // Ensure the owner is not already in another team (assuming 1 team per user for simplicity, or just atomic create)
        const existingMembership = yield prisma.teamMember.findFirst({
            where: { userId: req.user.userId }
        });
        if (existingMembership) {
            return res.status(400).json({ error: "Você já faz parte de uma equipe." });
        }
        const team = yield prisma.team.create({
            data: {
                name,
                code,
                instagram,
                color,
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
    }
    catch (error) {
        console.error("Error creating team:", error);
        res.status(500).json({ error: "Erro interno ao criar equipe" });
    }
}));
app.post("/api/teams/join", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.body;
        const team = yield prisma.team.findUnique({ where: { code } });
        if (!team)
            return res.status(404).json({ error: "Equipe não encontrada" });
        // Check if user is already a member
        const existingMembership = yield prisma.teamMember.findUnique({
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
        const membership = yield prisma.teamMember.create({
            data: {
                teamId: team.id,
                userId: req.user.userId,
                role: "OPERATOR"
            }
        });
        res.json({ success: true, team });
    }
    catch (error) {
        console.error("Error joining team:", error);
        res.status(500).json({ error: "Erro interno ao entrar na equipe" });
    }
}));
app.get("/api/teams/current", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const membership = yield prisma.teamMember.findFirst({
            where: { userId: req.user.userId },
            include: { team: true }
        });
        res.json(membership ? membership.team : null);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/teams/dashboard", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId } = req.query;
        if (!teamId)
            return res.status(400).json({ error: "teamId required" });
        const id = Number(teamId);
        const [team, allRemittances, members, goals] = yield Promise.all([
            prisma.team.findUnique({ where: { id } }),
            prisma.teamRemittance.findMany({
                where: { teamId: id },
                include: { operator: { select: { name: true } } }
            }),
            prisma.teamMember.findMany({
                where: { teamId: id },
                include: { user: { select: { name: true, email: true } } }
            }),
            prisma.teamGoal.findMany({ where: { teamId: id } })
        ]);
        // Calculate requested stats
        const teamProfit = allRemittances.reduce((acc, r) => acc + r.value, 0);
        const operatorsCount = members.length;
        const activeGoals = goals.filter(g => g.status === 'ACTIVE').length;
        const finishedGoals = goals.filter(g => g.status === 'CLOSED' || g.status === 'COMPLETED').length;
        // Operator Ranking (Sum of profit/remittances)
        const rankingMap = {};
        allRemittances.forEach(r => {
            if (!rankingMap[r.operatorId]) {
                rankingMap[r.operatorId] = { name: r.operator.name, profit: 0, count: 0 };
            }
            rankingMap[r.operatorId].profit += r.value;
            rankingMap[r.operatorId].count += 1;
        });
        const operatorsRanking = Object.values(rankingMap)
            .sort((a, b) => b.profit - a.profit);
        res.json({
            teamProfit,
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
            operatorsRanking
        });
    }
    catch (error) {
        console.error("Dashboard error:", error);
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/teams/operations", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId } = req.query;
        if (!teamId)
            return res.status(400).json({ error: "teamId required" });
        const operations = yield prisma.teamOperation.findMany({
            where: { teamId: Number(teamId) },
            orderBy: { createdAt: 'desc' }
        });
        res.json(operations);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/teams/operations", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId, platform, network, bets, average, depositors } = req.body;
        const operation = yield prisma.teamOperation.create({
            data: {
                teamId: Number(teamId),
                platform,
                network,
                bets: Number(bets) || 0,
                average: Number(average) || 0,
                depositors: Number(depositors) || 0
            }
        });
        res.json(operation);
    }
    catch (error) {
        console.error("Create operation error:", error);
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/teams/goals", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId } = req.query;
        const goals = yield prisma.teamGoal.findMany({
            where: { teamId: Number(teamId) },
            orderBy: { createdAt: 'desc' }
        });
        res.json(goals);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/teams/goals", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId, platform, target } = req.body;
        const goal = yield prisma.teamGoal.create({
            data: { teamId: Number(teamId), platform, target: Number(target) }
        });
        res.json(goal);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
app.post("/api/teams/remittance", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId, platform, deposit, withdraw, bau, observation } = req.body;
        // Calcula o lucro real (Remessa) como Saque - Depósito
        const calculatedValue = (Number(withdraw) || 0) - (Number(deposit) || 0);
        const remittance = yield prisma.teamRemittance.create({
            data: {
                teamId: Number(teamId),
                operatorId: req.user.userId,
                platform,
                deposit: Number(deposit) || 0,
                withdraw: Number(withdraw) || 0,
                bau: Number(bau) || 0,
                value: calculatedValue,
                observation
            }
        });
        res.json(remittance);
    }
    catch (error) {
        console.error("Create remittance error:", error);
        res.status(500).json({ error: "Internal error" });
    }
}));
app.get("/api/teams/remittance/feed", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId } = req.query;
        const feed = yield prisma.teamRemittance.findMany({
            where: { teamId: Number(teamId) },
            include: { operator: { select: { name: true } } },
            orderBy: { createdAt: 'desc' },
            take: 20
        });
        res.json(feed);
    }
    catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
}));
// --- FINALIZE REMITTANCE ---
app.post("/api/daily-records/:id/finalize", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recordId = Number(req.params.id);
        const userId = req.user.userId;
        const record = yield prisma.dailyRecord.findUnique({
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
        const membership = yield prisma.teamMember.findFirst({
            where: { userId }
        });
        if (!membership) {
            return res.status(400).json({ error: "Você precisa estar em uma equipe para finalizar cooperação." });
        }
        const profit = record.profit || (record.withdraw - record.investment);
        const [updatedRecord, remittance] = yield prisma.$transaction([
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
    }
    catch (error) {
        console.error("Finalize error:", error);
        res.status(500).json({ error: "Erro interno ao finalizar remessa" });
    }
}));
// --- RECENT ACTIVITY (feed aggregado) ---
app.get("/api/recent-activity", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const [records, expenses, sheets] = yield Promise.all([
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
        const activities = [];
        records.forEach(r => {
            var _a;
            const profit = (_a = r.profit) !== null && _a !== void 0 ? _a : (r.withdraw - r.investment);
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
    }
    catch (error) {
        console.error("recent-activity error:", error);
        res.status(500).json({ error: "Internal error" });
    }
}));
// --- SERVER OPERATIONS (registros do livro diário) ---
app.get("/api/server-operations", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const records = yield prisma.dailyRecord.findMany({
            where: { sheet: { userId } },
            orderBy: { createdAt: 'desc' },
            take: 10,
            include: { sheet: { select: { name: true } } }
        });
        res.json(records.map(r => {
            var _a;
            return ({
                id: r.id,
                platform: r.platform,
                type: r.withdraw >= r.investment ? 'WITHDRAW' : 'DEPOSIT',
                investment: r.investment,
                withdraw: r.withdraw,
                profit: (_a = r.profit) !== null && _a !== void 0 ? _a : (r.withdraw - r.investment),
                sheet: r.sheet.name,
                cycles: r.cycles,
                date: r.createdAt
            });
        }));
    }
    catch (error) {
        console.error("server-operations error:", error);
        res.status(500).json({ error: "Internal error" });
    }
}));
// --- RESET DATA ---
// Reset Team Data (Owner/Admin only)
app.post("/api/teams/:id/reset", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teamId = Number(req.params.id);
        const userId = req.user.userId;
        // Check membership and role
        const membership = yield prisma.teamMember.findUnique({
            where: { teamId_userId: { teamId, userId } }
        });
        if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
            return res.status(403).json({ error: "Acesso negado. Apenas proprietários ou administradores podem redefinir os dados." });
        }
        yield prisma.$transaction([
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
    }
    catch (error) {
        console.error("Team reset error:", error);
        res.status(500).json({ error: "Erro interno ao redefinir dados da equipe" });
    }
}));
// Reset User Data (Personal only)
app.post("/api/user/reset-data", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        yield prisma.$transaction([
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
    }
    catch (error) {
        console.error("User reset error:", error);
        res.status(500).json({ error: "Erro interno ao redefinir seus dados" });
    }
}));
// ── Sair da Equipe ─────────────────────────────────────────────────────────
app.post("/api/team/leave", authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        // Encontra todas as memberships do usuário
        const memberships = yield prisma.teamMember.findMany({
            where: { userId }
        });
        if (memberships.length === 0) {
            return res.status(404).json({ error: "Você não está em nenhuma equipe." });
        }
        // Remove todas as memberships (sai de todas as equipes)
        yield prisma.teamMember.deleteMany({
            where: { userId }
        });
        // Registre a atividade
        yield prisma.activity.create({
            data: {
                userId,
                actionType: "LEAVE_TEAM",
                description: "Saiu da equipe"
            }
        });
        res.json({ success: true, message: "Você saiu da equipe com sucesso." });
    }
    catch (error) {
        console.error("Leave team error:", error);
        res.status(500).json({ error: "Erro interno ao sair da equipe" });
    }
}));
app.listen(PORT, () => {
    console.log(`Backend rodando em http://localhost:${PORT}`);
});
