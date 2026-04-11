import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { id } = await context.params;
    const { name, proxyCost, smsCost } = await request.json();
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (proxyCost !== undefined) updateData.proxyCost = Number(proxyCost);
    if (smsCost !== undefined) updateData.smsCost = Number(smsCost);
    
    const sheet = await prisma.dailySheet.update({
      where: { id: Number(id) },
      data: updateData,
      include: { records: true }
    });
    return NextResponse.json(sheet);
  } catch (error) {
    console.error("PUT daily-sheet error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { id } = await context.params;
    await prisma.dailySheet.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE daily-sheet error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
