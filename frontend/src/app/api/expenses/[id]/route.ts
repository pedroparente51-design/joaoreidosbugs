import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { id: paramId } = await context.params;
    const id = Number(paramId);
    await prisma.expense.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE expense error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
