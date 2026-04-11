import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth, unauthorizedAction } from "@/lib/auth-helper";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userAuth = await verifyAuth(request);
  if (!userAuth) return unauthorizedAction();

  try {
    const recordId = Number(params.id);
    const userId = userAuth.userId;

    const record = await prisma.dailyRecord.findUnique({
      where: { id: recordId },
      include: { sheet: true }
    });

    if (!record || record.sheet.userId !== userId) {
      return NextResponse.json({ error: "Registro não encontrado" }, { status: 404 });
    }

    if (record.status === 'FINISHED') {
      return NextResponse.json({ error: "Esta remessa já foi finalizada" }, { status: 400 });
    }

    const membership = await prisma.teamMember.findFirst({
      where: { userId }
    });

    if (!membership) {
      return NextResponse.json({ error: "Você precisa estar em uma equipe para finalizar cooperação." }, { status: 400 });
    }

    const profit = record.profit || (record.withdraw - record.investment);

    const [updatedRecord, remittance] = await prisma.$transaction([
      prisma.dailyRecord.update({
        where: { id: recordId },
        data: { status: 'FINISHED', teamId: membership.teamId }
      }),
      prisma.teamRemittance.create({
        data: {
          teamId: membership.teamId,
          operatorId: userId,
          platform: record.platform,
          value: profit,
          observation: `Finalização de cooperação - ${record.cycles}`
        }
      }),
      prisma.activity.create({
        data: {
          userId,
          actionType: "FINALIZE_REMITTANCE",
          description: `Finalizou remessa: ${record.platform} - R$ ${profit.toFixed(2)}`
        }
      })
    ]);

    return NextResponse.json({ success: true, record: updatedRecord, remittance });
  } catch (error) {
    console.error("Finalize error:", error);
    return NextResponse.json({ error: "Erro interno ao finalizar remessa" }, { status: 500 });
  }
}
