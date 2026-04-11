import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  const { searchParams } = new URL(request.url);
  const teamId = searchParams.get("teamId");
  
  if (!teamId) return NextResponse.json({ error: "teamId é obrigatório" }, { status: 400 });

  try {
    const id = Number(teamId);
    const [allRemittances, members, goals] = await Promise.all([
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

    const teamProfit = allRemittances.reduce((acc, r) => acc + r.value, 0);
    const operatorsCount = members.length;
    const activeGoals = goals.filter(g => g.status === 'ACTIVE').length;
    const finishedGoals = goals.filter(g => g.status === 'CLOSED' || g.status === 'COMPLETED').length;

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

    return NextResponse.json({
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
  } catch (error) { 
    console.error("Team Dashboard error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 }); 
  }
}
