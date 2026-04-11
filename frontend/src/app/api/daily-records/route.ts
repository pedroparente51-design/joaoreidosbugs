import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  const { searchParams } = new URL(request.url);
  const sheetId = searchParams.get("sheetId");
  
  if (!sheetId) return NextResponse.json({ error: "sheetId é obrigatório" }, { status: 400 });

  try {
    const records = await prisma.dailyRecord.findMany({
      where: { sheetId: Number(sheetId) },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(records);
  } catch (error) {
    console.error("GET daily-records error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { sheetId, date, platform, investment, withdraw, cycles } = await request.json();
    const profit = withdraw - investment;
    const record = await prisma.dailyRecord.create({
      data: {
        sheetId: Number(sheetId),
        date: new Date(date),
        platform, investment, withdraw, cycles, profit
      }
    });
    return NextResponse.json(record);
  } catch (error) {
    console.error("POST daily-records error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
