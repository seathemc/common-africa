import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, CircleDashed } from "lucide-react";

export const metadata = { title: "PASE for Investors — Common" };

const STACK = [
  {
    layer: "Fund formation",
    doc: "GP/LP + management company templates",
    body: "Standardised general-partner / limited-partner structure plus management-company templates. Adapted to Mauritius GBC, Lux SCSp, RIPCO Mauritius, and OHADA SCS frameworks — pick the domicile, the rest of the stack follows.",
  },
  {
    layer: "Syndicate",
    doc: "Angel-syndicate deal-by-deal template",
    body: "Deal-by-deal syndicate vehicle for angel groups. Lead syndicator + co-investors with standard carry, follow-on rights, and tax-transparent treatment where the jurisdiction allows.",
  },
  {
    layer: "SPV",
    doc: "Cross-border investment vehicle",
    body: "Single-purpose vehicle for cross-border investment into African startups. Designed to interlock cleanly with PASE Corporations — no entity-shape friction, no governance translation layer.",
  },
];

export default function FundsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Badge variant="outline" className="w-fit">PASE for Investors</Badge>
          <h1 className="mt-4 text-3xl md:text-5xl tracking-tight font-medium leading-[1.05]">
            You set up a <span className="underline decoration-2 underline-offset-4">PASE Fund</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A PASE Fund (or syndicate, or SPV) is a standardised venture-capital structure for general partners, angel syndicates, and cross-border investors deploying into African startups. Same standards. Interlocks cleanly with PASE Corporations on the other side of the table.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Open source. MIT licensed. <strong className="text-foreground">Free forever.</strong>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="text-xs">In progress — 0 of 3 templates shipped</Badge>
          </div>
        </div>
      </section>

      {/* What we're building */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">The stack</h2>
          <p className="mt-3 text-2xl tracking-tight">
            3 functional layers. Drafted for the domicile combinations that actually appear in African deals.
          </p>

          <Card className="mt-8 p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Layer</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {STACK.map((s, i) => (
                  <TableRow key={s.layer} className="align-top">
                    <TableCell className="font-mono text-muted-foreground">{8 + i}</TableCell>
                    <TableCell className="font-medium">{s.layer}</TableCell>
                    <TableCell>
                      <div>{s.doc}</div>
                      <div className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-md">
                        {s.body}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <CircleDashed className="size-4" /> pending
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Why this matters */}
      <section className="border-b">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Why this matters</h2>
          <p className="mt-6 text-base leading-relaxed">
            <strong>35% of African startup investors are now Africa-based</strong> — surpassing North America for the first time in 2023 (AVCA / Briter Bridges). But the legal scaffolding for African capital is still bespoke per deal: every fund formation re-drafts LP terms from scratch, every SPV is custom, every syndicate's deal-by-deal docs are bespoke.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            PASE for Investors codifies the patterns the ecosystem has already converged on, so GPs spend their time on deal flow and portfolio support — not on re-inventing fund structures.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl tracking-tight">
            Want to shape the investor stack?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We're forming a review group with African GPs, syndicate leads, and fund-formation counsel to draft the first three templates. Sign as an investor or counsel to join.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/sign">Sign the manifesto</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/entity">
                See PASE for Founders <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
