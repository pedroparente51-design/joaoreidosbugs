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
    const goals = await prisma.teamGoal.findMany({ 
      where: { teamId: Number(teamId) },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(goals);
  } catch (error) {
    console.error("GET team goals error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { teamId, platform, target } = await request.json();
    const goal = await prisma.teamGoal.create({
      data: { teamId: Number(teamId), platform, target: Number(target) }
    });
    return NextResponse.json(goal);
  } catch (error) {
    console.error("POST team goals error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
