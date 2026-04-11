import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction, forbiddenAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();
  if (user.role !== 'ADMIN') return forbiddenAction();

  try {
    const [remittances, goals, operations, activities] = await Promise.all([
      prisma.teamRemittance.findMany({ take: 15, orderBy: { createdAt: 'desc' }, include: { operator: { select: { name: true } } } }),
      prisma.teamGoal.findMany({ take: 10, orderBy: { createdAt: 'desc' }, include: { team: true } }),
      prisma.teamOperation.findMany({ take: 10, orderBy: { createdAt: 'desc' }, include: { team: true } }),
      prisma.activity.findMany({ take: 10, orderBy: { createdAt: 'desc' }, include: { user: { select: { name: true } } } })
    ]);

    const feed = [
      ...remittances.map(r => ({ type: 'REMITTANCE', title: `Nova Remessa: R$ ${r.value}`, user: r.operator.name, date: r.createdAt })),
      ...goals.map(g => ({ type: 'GOAL', title: `Nova Meta: ${g.platform}`, user: g.team.name, date: g.createdAt })),
      ...operations.map(o => ({ type: 'OPERATION', title: `Operação: ${o.title}`, user: o.team.name, date: o.createdAt })),
      ...activities.map(a => ({ type: 'ACTIVITY', title: a.description, user: a.user.name, date: a.createdAt }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(feed.slice(0, 25));
  } catch (error) { 
    console.error("Admin feed error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 }); 
  }
}
