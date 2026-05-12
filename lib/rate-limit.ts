import { prisma } from "./prisma";

type LimitResult = { ok: true } | { ok: false; retryAfterSeconds: number };

export async function rateLimit(
  key: string,
  max: number,
  windowMs: number,
): Promise<LimitResult> {
  const now = new Date();
  try {
    const existing = await prisma.rateLimit.findUnique({ where: { key } });
    if (!existing || existing.windowEnd <= now) {
      await prisma.rateLimit.upsert({
        where: { key },
        create: { key, count: 1, windowEnd: new Date(now.getTime() + windowMs) },
        update: { count: 1, windowEnd: new Date(now.getTime() + windowMs) },
      });
      return { ok: true };
    }
    if (existing.count >= max) {
      return {
        ok: false,
        retryAfterSeconds: Math.max(
          1,
          Math.ceil((existing.windowEnd.getTime() - now.getTime()) / 1000),
        ),
      };
    }
    await prisma.rateLimit.update({
      where: { key },
      data: { count: { increment: 1 } },
    });
    return { ok: true };
  } catch {
    // If the rate-limit table isn't available (DB down, schema not pushed),
    // fail open. The honeypot and verification flow still gate abuse.
    return { ok: true };
  }
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}
