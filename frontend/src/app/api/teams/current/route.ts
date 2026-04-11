import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const membership = await prisma.teamMember.findFirst({
      where: { userId: user.userId },
      include: { team: true }
    });
    return NextResponse.json(membership ? membership.team : null);
  } catch (error) { 
    console.error("GET current team error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 }); 
  }
}
