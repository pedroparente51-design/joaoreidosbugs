import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const sheets = await prisma.dailySheet.findMany({
      where: { userId: user.userId },
      include: { records: true }
    });
    const expenses = await prisma.expense.findMany({
      where: { userId: user.userId }
    });
    
    let totalInvest = 0;
    let totalWithdraw = 0;
    let totalProxySms = 0;
    
    sheets.forEach((sheet: any) => {
      totalProxySms += (sheet.proxyCost || 0) + (sheet.smsCost || 0);
      sheet.records.forEach((record: any) => {
        totalInvest += record.investment;
        totalWithdraw += record.withdraw;
      });
    });
    const totalExp = expenses.reduce((acc: number, e: any) => acc + e.amount, 0);
    
    const investment = totalInvest + totalProxySms + totalExp;
    const revenue = totalWithdraw;
    const profit = revenue - investment;
    const roi = investment > 0 ? (profit / investment) * 100 : 0;
    const totalMovimentado = totalInvest + totalWithdraw;
    
    return NextResponse.json({ investment, revenue, profit, roi, totalMovimentado });
  } catch (error) {
    console.error("GET dashboard-summary error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
