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
    const feed = await prisma.teamRemittance.findMany({
      where: { teamId: Number(teamId) },
      include: { operator: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
      take: 20
    });
    return NextResponse.json(feed);
  } catch (error) {
    console.error("GET team remittance error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { teamId, platform, value, observation } = await request.json();
    const remittance = await prisma.teamRemittance.create({
      data: { 
        teamId: Number(teamId),
        operatorId: user.userId,
        platform,
        value: Number(value),
        observation
      }
    });
    return NextResponse.json(remittance);
  } catch (error) { 
    console.error("POST team remittance error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 }); 
  }
}
