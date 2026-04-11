import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

const generateTeamCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export async function POST(request: Request) {
  const user = await verifyAuth(request);
  if (!user) return unauthorizedAction();

  try {
    const { name, instagram, color } = await request.json();
    const code = generateTeamCode();
    
    const existingMembership = await prisma.teamMember.findFirst({
      where: { userId: user.userId }
    });
    
    if (existingMembership) {
      return NextResponse.json({ error: "Você já faz parte de uma equipe." }, { status: 400 });
    }

    const team = await prisma.team.create({
      data: {
        name,
        code,
        instagram,
        color,
        ownerId: user.userId,
        members: {
          create: {
            userId: user.userId,
            role: "OWNER"
          }
        }
      }
    });
    
    return NextResponse.json(team);
  } catch (error) { 
    console.error("Error creating team:", error);
    return NextResponse.json({ error: "Erro interno ao criar equipe" }, { status: 500 }); 
  }
}
