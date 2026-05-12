type SendArgs = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

export async function sendEmail({ to, subject, html, text }: SendArgs): Promise<
  { ok: true } | { ok: false; reason: string }
> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM ?? "Common <noreply@common-africa.org>";

  if (!apiKey) {
    console.warn(
      `[email] RESEND_API_KEY not set — would have sent to ${to}: ${subject}\n${text}`,
    );
    return { ok: false, reason: "email-provider-not-configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html, text }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[email] Resend error", res.status, body);
      return { ok: false, reason: `resend-${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[email] Send failed", err);
    return { ok: false, reason: "send-failed" };
  }
}

export function verificationEmail(name: string, verifyUrl: string): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = "Confirm your signature — Common";
  const text = `Hi ${name},

Thanks for signing the Common manifesto. Click the link below to confirm your email and make your signature public on the wall:

${verifyUrl}

If you didn't sign, you can ignore this email.

— Common
A legal architecture for Africa's single digital market`;
  const html = `<!doctype html>
<html><body style="font-family: Georgia, serif; max-width: 560px; margin: 32px auto; padding: 0 16px; color: #111;">
  <p>Hi ${escapeHtml(name)},</p>
  <p>Thanks for signing the Common manifesto. Click the button below to confirm your email and make your signature public on the wall:</p>
  <p style="margin: 28px 0;">
    <a href="${escapeAttr(verifyUrl)}" style="background: #111; color: #fafaf7; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-size: 14px;">Confirm my signature</a>
  </p>
  <p style="color: #6b6b6b; font-size: 14px;">Or paste this link in your browser:<br><span style="word-break: break-all;">${escapeHtml(verifyUrl)}</span></p>
  <p style="color: #6b6b6b; font-size: 14px;">If you didn't sign, you can ignore this email.</p>
  <hr style="border: none; border-top: 1px solid #e5e3dc; margin: 32px 0;">
  <p style="color: #6b6b6b; font-size: 12px;"><em>Common</em> — A legal architecture for Africa's single digital market.</p>
</body></html>`;
  return { subject, html, text };
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

function escapeAttr(s: string): string {
  return escapeHtml(s);
}
