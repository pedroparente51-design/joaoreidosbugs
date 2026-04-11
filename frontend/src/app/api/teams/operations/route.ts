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
    const operations = await prisma.teamOperation.findMany({
      where: { teamId: Number(teamId) },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(operations);
  } catch (error) {
    console.error("GET team operations error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { teamId, platform, network, title, depositors } = await request.json();
    const operation = await prisma.teamOperation.create({
      data: { teamId: Number(teamId), platform, network, title, depositors: Number(depositors) }
    });
    return NextResponse.json(operation);
  } catch (error) {
    console.error("POST team operations error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
