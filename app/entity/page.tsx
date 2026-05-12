import Link from "next/link";
import { getClauses } from "@/lib/data";
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
import { ArrowRight, Check, CircleDashed } from "lucide-react";

export const metadata = { title: "PASE for Founders — Common" };

const STACK: Array<{
  layer: string;
  doc: string;
  shippedSlugs?: string[];
  pendingDescription: string;
}> = [
  {
    layer: "Constitution",
    doc: "Articles of association",
    shippedSlugs: ["multi-class-shares"],
    pendingDescription: "Ordinary, preferred, and non-voting classes with liquidation preferences. Drafted to integrate with each jurisdiction's company law — Nigerian CAMA Section 124 exemption, Senegalese SAS via the AUSCGIE freedom, etc.",
  },
  {
    layer: "Co-founder governance",
    doc: "Shareholder agreement + founder vesting",
    pendingDescription: "Drag-along, tag-along, ROFR, pre-emption, information rights. Founder shares vest over four years with one-year cliff; reverse-vesting on departure.",
  },
  {
    layer: "Employee equity",
    doc: "ESOP plan + grant template",
    pendingDescription: "Tax-at-liquidity (not grant), four-year vesting, one-year cliff, post-termination exercise window, single- and double-trigger acceleration. The single biggest gap in current African corporate practice.",
  },
  {
    layer: "Investor instruments",
    doc: "SAFE + convertible note",
    shippedSlugs: ["safe"],
    pendingDescription: "Post-money SAFE (priced and unpriced) plus convertible note (priced and unpriced). Drafted to be recognised as equity-linked under your jurisdiction's securities framework or, where the law doesn't yet recognise them, paired with a side letter that survives challenge.",
  },
  {
    layer: "Venture debt",
    doc: "Standard note + warrant",
    pendingDescription: "Senior secured note + lender warrant — for the venture-debt rounds that are now routine at growth stage. Adapted to OHADA's Uniform Act on Secured Transactions and to common-law jurisdictions.",
  },
  {
    layer: "Cap table",
    doc: "Standard schema + reporting",
    pendingDescription: "JSON schema + IFRS-compatible reporting templates with African-context adaptations. Compatible with Carta, Pulley, AngelList, and self-hosted alternatives.",
  },
  {
    layer: "IP & data",
    doc: "IP assignment + DPA",
    pendingDescription: "IP assignment from founders + employees to the company. Data processing addendum aligned with the AU Convention on Cyber Security & Personal Data Protection and with the ECOWAS Supplementary Act.",
  },
];

export default function EntityIndex() {
  const clauses = getClauses();
  const shippedCount = STACK.filter((s) => s.shippedSlugs && s.shippedSlugs.length > 0).length;

  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Badge variant="outline" className="w-fit">PASE for Founders</Badge>
          <h1 className="mt-4 text-3xl md:text-5xl tracking-tight font-medium leading-[1.05]">
            You set up a <span className="underline decoration-2 underline-offset-4">PASE Corporation</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A PASE Corporation is a standardised, venture-grade corporate structure for African startups — drafted natively into your jurisdiction's company law, not layered on top. Same standard, two legal traditions: common-law (Nigeria, Kenya, Ghana, South Africa) and OHADA / civil-law (Senegal, Ivory Coast, DRC, Tunisia, and other OHADA member states).
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Open source. MIT licensed. <strong className="text-foreground">Free forever.</strong>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="#stack">See the stack <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/entity/funds">PASE for Investors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What "drafted natively" means */}
      <section className="border-b">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
            What "drafted natively" means
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            PASE doesn't sit on top of your local company. It <strong>becomes</strong> your local company.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            For a Nigerian startup: you incorporate as a Nigerian Limited Liability Company under CAMA 2020. Your <strong className="text-foreground">articles of association</strong> are PASE-shaped — they use the multi-class share opt-in drafted to operate within CAMA. Your <strong className="text-foreground">shareholder agreement</strong> uses common-law conventions. Your <strong className="text-foreground">ESOP</strong> respects Nigerian labor and tax law. The entity stays a Nigerian Ltd. The corporate substance is PASE.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            For a Senegalese startup: you incorporate as a Senegalese SAS under the OHADA AUSCGIE. Your <strong className="text-foreground">statuts</strong> are PASE-shaped — they use the SAS's statutory freedom to permit multi-class shares. Your <strong className="text-foreground">pacte d'associés</strong> uses OHADA conventions. The entity stays a Senegalese SAS. The corporate substance is PASE.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Same standard, two legal traditions, fourteen jurisdictions today.
          </p>
        </div>
      </section>

      {/* The stack */}
      <section id="stack" className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                The stack
              </h2>
              <p className="mt-3 text-2xl tracking-tight">
                7 functional layers. Drafted twice — common-law and OHADA.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {shippedCount} of {STACK.length} layers shipped. Rest in progress.
              </p>
            </div>
            <Badge variant="secondary">{clauses.length} clauses shipped</Badge>
          </div>

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
                {STACK.map((s, i) => {
                  const isShipped = s.shippedSlugs && s.shippedSlugs.length > 0;
                  return (
                    <TableRow key={s.layer} className="align-top">
                      <TableCell className="font-mono text-muted-foreground">{i + 1}</TableCell>
                      <TableCell className="font-medium">{s.layer}</TableCell>
                      <TableCell>
                        <div>{s.doc}</div>
                        <div className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-md">
                          {s.pendingDescription}
                        </div>
                      </TableCell>
                      <TableCell>
                        {isShipped && s.shippedSlugs ? (
                          <div className="flex flex-col gap-1">
                            {s.shippedSlugs.map((slug) => (
                              <Link
                                key={slug}
                                href={`/entity/${slug}`}
                                className="inline-flex items-center gap-1.5 text-sm no-underline"
                              >
                                <Check className="size-4" /> {slug}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                            <CircleDashed className="size-4" /> pending
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Clauses shipped — quick browse */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Clauses shipped</h2>
          <p className="mt-3 text-2xl tracking-tight">Browse the {clauses.length} drafted clauses.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {clauses.map((c) => (
              <Card key={c.slug} className="hover:bg-muted/40 transition-colors">
                <CardHeader>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.category}
                  </div>
                  <CardTitle className="text-lg">
                    <Link href={`/entity/${c.slug}`} className="no-underline">
                      {c.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{c.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 text-xs">
                  {c.versions.map((v) => (
                    <Badge key={v.tradition} variant="outline">
                      {v.label}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl tracking-tight">
            Want to use PASE for your company?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The customizer and the law-firm skill-pack ship next. For now: read the shipped clauses above, raise issues on GitHub, or sign the manifesto to join the founder review group.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/sign">Sign the manifesto</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/seathemc/common-africa">View source on GitHub</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
