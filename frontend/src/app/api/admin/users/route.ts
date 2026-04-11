import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction, forbiddenAction } from "@/lib/auth-helper";

export async function GET(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();
  if (user.role !== 'ADMIN') return forbiddenAction();

  try {
    const users = await prisma.user.findMany({
      include: { teamMemberships: { include: { team: true } } },
      orderBy: { createdAt: 'desc' }
    });
    
    const formattedUsers = users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status,
      createdAt: u.createdAt,
      team: u.teamMemberships[0]?.team.name || "Sem Equipe"
    }));

    return NextResponse.json(formattedUsers);
  } catch (error) {
    console.error("GET admin-users error:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
