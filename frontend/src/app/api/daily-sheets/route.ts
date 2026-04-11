import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const sheets = await prisma.dailySheet.findMany({
      where: { userId: user.userId },
      include: { records: { orderBy: { createdAt: 'desc' } } },
      orderBy: { createdAt: 'asc' }
    });
    return NextResponse.json(sheets);
  } catch (error) {
    console.error("GET daily-sheets error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { name } = await request.json();
    const sheet = await prisma.dailySheet.create({
      data: { name, userId: user.userId },
      include: { records: true }
    });
    return NextResponse.json(sheet);
  } catch (error) {
    console.error("POST daily-sheets error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
