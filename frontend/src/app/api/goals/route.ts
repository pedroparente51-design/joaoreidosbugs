import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const goals = await prisma.goal.findMany({ where: { userId: user.userId } });
    return NextResponse.json(goals);
  } catch (error) {
    console.error("GET goals error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { title, target, current, deadline } = await request.json();
    const goal = await prisma.goal.create({
      data: { 
        title, 
        target: Number(target), 
        current: Number(current || 0), 
        deadline, 
        userId: user.userId 
      }
    });
    return NextResponse.json(goal);
  } catch (error) {
    console.error("POST goals error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
