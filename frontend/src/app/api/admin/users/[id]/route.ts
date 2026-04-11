import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction, forbiddenAction } from "@/lib/auth-helper";

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const userAuth = await verifyAuth(request);
  if (!userAuth) return unauthorizedAction();
  if (userAuth.role !== 'ADMIN') return forbiddenAction();

  try {
    const { id } = await context.params;
    const { role, status } = await request.json();
    const updateData: any = {};
    if (role) updateData.role = role;
    if (status) updateData.status = status;

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: updateData
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error("POST admin-user update error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const userAuth = await verifyAuth(request);
  if (!userAuth) return unauthorizedAction();
  if (userAuth.role !== 'ADMIN') return forbiddenAction();

  try {
    const { id } = await context.params;
    await prisma.user.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE admin-user error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
