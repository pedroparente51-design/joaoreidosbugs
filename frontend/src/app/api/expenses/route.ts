import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const expenses = await prisma.expense.findMany({ 
      where: { userId: user.userId }, 
      orderBy: { createdAt: 'desc' } 
    });
    return NextResponse.json(expenses);
  } catch (error) {
    console.error("GET expenses error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { name, amount, category, date } = await request.json();
    const expense = await prisma.expense.create({
      data: { 
        name, 
        amount: Number(amount), 
        category, 
        date, 
        userId: user.userId 
      }
    });
    return NextResponse.json(expense);
  } catch (error) {
    console.error("POST expenses error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
