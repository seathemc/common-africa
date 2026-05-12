import Link from "next/link";

export const metadata = { title: "AU Model Law on Startup Promotion — Common" };

export default function ModelLawPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-xs uppercase tracking-widest text-foreground">
        Continental layer
      </div>
      <h1 className="mt-2 text-3xl md:text-5xl tracking-tight">
        The AU Model Law on Startup Promotion.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        In July 2024 the African Union adopted a Model Law on Startup Promotion — the continental
        framework that the 14 national startup acts could converge on. The Model Law sets the
        outline. <strong className="text-foreground">Common</strong> proposes the implementation
        specifications that turn it into infrastructure.
      </p>

      <div className="mt-10 p-5 border text-sm leading-relaxed">
        <strong>v0 — proposal in draft.</strong> This page will become the annotated reference
        implementation. Track progress on{" "}
        <a href="https://github.com/seathemc/common-africa">GitHub</a> or{" "}
        <Link href="/sign">sign as a policymaker</Link> to join the working group.
      </div>

      <h2 className="mt-16 text-sm uppercase tracking-widest text-muted-foreground">
        What's in scope
      </h2>
      <ol className="mt-6 space-y-6 text-[color:var(--foreground)] leading-relaxed list-decimal list-inside">
        <li>
          <strong>Standard term sheets.</strong> Reference seed and Series A documents drafted in
          parallel for common-law and OHADA jurisdictions, layered on top of the{" "}
          <Link href="/entity">PASE clause library</Link>.
        </li>
        <li>
          <strong>API standards for labelling portals.</strong> A common schema so a startup
          labelled in Senegal can be recognised programmatically by Ivory Coast's portal — the
          technical layer beneath the Startup Passport.
        </li>
        <li>
          <strong>Passport protocols.</strong> Mutual-recognition primitives extending the
          Ghana–Rwanda Fintech Passport (Feb 2025) into a general framework.
        </li>
        <li>
          <strong>Industry classification.</strong> A startup taxonomy aligned with AU Agenda
          2063 priority sectors, replacing the ad-hoc lists in each national act.
        </li>
      </ol>

      <h2 className="mt-16 text-sm uppercase tracking-widest text-muted-foreground">
        Why this matters
      </h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Without implementation specifications, the Model Law risks becoming another aspirational
        document. With them, it becomes adoption infrastructure: every RECs (ECOWAS, EAC, SADC,
        COMESA) can layer a passport on top, every African government drafting an act gets a
        ready-made compatibility surface, and every founder gets a stack that travels.
      </p>

      <div className="mt-16 border-t pt-10">
        <Link href="/" className="text-sm">← Back to the manifesto</Link>
      </div>
    </section>
  );
}
