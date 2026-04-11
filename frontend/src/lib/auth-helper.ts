import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export async function verifyAuth(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    return payload;
  } catch (error) {
    return null;
  }
}

export function unauthorizedAction() {
  return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
}

export function forbiddenAction() {
  return NextResponse.json({ error: "Acesso negado. Apenas administradores." }, { status: 403 });
}
