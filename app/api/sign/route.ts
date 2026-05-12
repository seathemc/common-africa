import { NextResponse } from "next/server";
import { z } from "zod";
import { randomBytes } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { sendEmail, verificationEmail } from "@/lib/email";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const Body = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  role: z.enum(["founder", "investor", "counsel", "policymaker", "academic", "other"]),
  country: z.string().min(2).max(80),
  organization: z.string().max(160).optional().or(z.literal("")),
  message: z.string().max(280).optional().or(z.literal("")),
  showPublicly: z.union([z.literal("on"), z.literal(""), z.boolean()]).optional(),
  // Honeypot — real users never see this field; bots fill everything.
  website: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;

  if (data.website && data.website.length > 0) {
    // Honeypot tripped — pretend success.
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(req);
  const limit = await rateLimit(`sign:${ip}`, 5, 60 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const showPublicly =
    data.showPublicly === true || data.showPublicly === "on"
      ? true
      : data.showPublicly === false
        ? false
        : true;
  const email = data.email.toLowerCase();

  try {
    const existing = await prisma.signatory.findUnique({
      where: { email },
      select: { verified: true },
    });

    const reissueToken = !existing || !existing.verified;
    const verifyToken = reissueToken ? randomBytes(24).toString("base64url") : undefined;

    const record = await prisma.signatory.upsert({
      where: { email },
      update: {
        name: data.name,
        role: data.role,
        country: data.country,
        organization: data.organization || null,
        message: data.message || null,
        showPublicly,
        ...(reissueToken ? { verifyToken } : {}),
      },
      create: {
        name: data.name,
        email,
        role: data.role,
        country: data.country,
        organization: data.organization || null,
        message: data.message || null,
        showPublicly,
        verifyToken,
      },
    });

    if (!record.verified && record.verifyToken) {
      const verifyUrl = buildVerifyUrl(req, record.verifyToken);
      const { subject, html, text } = verificationEmail(record.name, verifyUrl);
      await sendEmail({ to: record.email, subject, html, text });
    }

    return NextResponse.json({ ok: true, verified: record.verified });
  } catch (err) {
    console.error("[sign] error", err);
    return NextResponse.json({ error: "Database unavailable" }, { status: 500 });
  }
}

function buildVerifyUrl(req: Request, token: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin;
  return `${base.replace(/\/$/, "")}/api/verify?token=${encodeURIComponent(token)}`;
}
