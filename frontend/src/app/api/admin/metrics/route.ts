import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction, forbiddenAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();
  if (user.role !== 'ADMIN') return forbiddenAction();

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

    // Today's revenue
    const today = new Date();
    today.setHours(0,0,0,0);
    const todayRemittances = await prisma.teamRemittance.findMany({ where: { createdAt: { gte: today } } });
    const todayDaily = await prisma.dailyRecord.findMany({ where: { createdAt: { gte: today } } });
    const todayRevenue = todayRemittances.reduce((acc, r) => acc + r.value, 0) + todayDaily.reduce((acc, r) => acc + r.profit, 0);

    return NextResponse.json({
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
    console.error("Admin metrics error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
