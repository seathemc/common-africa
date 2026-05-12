import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/sign?verify=missing", url.origin));
  }

  try {
    const signatory = await prisma.signatory.findUnique({
      where: { verifyToken: token },
      select: { id: true, verified: true },
    });
    if (!signatory) {
      return NextResponse.redirect(new URL("/sign?verify=invalid", url.origin));
    }
    if (!signatory.verified) {
      await prisma.signatory.update({
        where: { id: signatory.id },
        data: { verified: true, verifiedAt: new Date(), verifyToken: null },
      });
    }
    return NextResponse.redirect(new URL("/signatories?verify=ok", url.origin));
  } catch (err) {
    console.error("[verify] error", err);
    return NextResponse.redirect(new URL("/sign?verify=error", url.origin));
  }
}
