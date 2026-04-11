import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { code } = await request.json();
    const team = await prisma.team.findUnique({ where: { code } });
    
    if (!team) return NextResponse.json({ error: "Equipe não encontrada" }, { status: 404 });
    
    const existingMembership = await prisma.teamMember.findUnique({
      where: {
        teamId_userId: {
          teamId: team.id,
          userId: user.userId
        }
      }
    });
    
    if (existingMembership) {
      return NextResponse.json({ error: "Você já é membro desta equipe." }, { status: 400 });
    }

    await prisma.teamMember.create({
      data: {
        teamId: team.id,
        userId: user.userId,
        role: "OPERATOR"
      }
    });
    
    return NextResponse.json({ success: true, team });
  } catch (error) { 
    console.error("Error joining team:", error);
    return NextResponse.json({ error: "Erro interno ao entrar na equipe" }, { status: 500 }); 
  }
}
