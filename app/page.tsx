import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getActs, getClauses } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Check, CircleDashed } from "lucide-react";

export const revalidate = 60;

const FOUNDER_STACK = [
  { layer: "Constitution", doc: "Articles of association", shipped: "multi-class shares" },
  { layer: "Co-founder governance", doc: "Shareholder agreement + founder vesting" },
  { layer: "Employee equity", doc: "ESOP plan + grant template" },
  { layer: "Investor instruments", doc: "SAFE + convertible note", shipped: "SAFE" },
  { layer: "Venture debt", doc: "Standard note + warrant" },
  { layer: "Cap table", doc: "Standard schema + reporting" },
  { layer: "IP & data", doc: "IP assignment + DPA" },
];

const INVESTOR_STACK = [
  { layer: "Fund formation", doc: "GP/LP + management company templates" },
  { layer: "Syndicate", doc: "Angel-syndicate deal-by-deal template" },
  { layer: "SPV", doc: "Cross-border investment vehicle" },
];

const TIERS = [
  {
    tier: "Tier 1",
    label: "Set up your PASE Corporation",
    body: "You incorporate (or have already incorporated) a local company in your jurisdiction. PASE gives you the articles, shareholder agreement, ESOP, and investor instruments — drafted natively for your legal tradition. Plus a markdown skill-pack you hand to your law firm with step-by-step implementation, and an MCP server any AI assistant can query in real time.",
    outcome: "A venture-investable African company, internationally legible, locally compliant. No offshore parent required.",
  },
  {
    tier: "Tier 2",
    label: "Qualify for startup-act benefits + plug into international scaffolding",
    body: "PASE-compliant cap tables auto-qualify for startup-act benefits (tax holiday, label, forex access) in jurisdictions that whitelist PASE — what we advocate for at the national level. PASE also includes integration templates for Delaware C-Corps and English-law parent companies, for founders raising from US-only LPs or scaffolding for an eventual listing.",
    outcome: "PASE-native African operations interlocking cleanly with whichever international structure your investors require.",
  },
  {
    tier: "Tier 3",
    label: "Operate across multiple African markets",
    body: "Cross-border templates for expanding into a second, third, or fourth African market. Where mutual-recognition arrangements exist — the Ghana–Rwanda Fintech Passport, the proposed OHADA SAS-I — the templates use them. Where they don't yet exist, the templates minimize duplication.",
    outcome: "One PASE Corporation, operating across multiple African markets with standardised structures.",
  },
];

export default async function HomePage() {
  const [signatoryCount] = await Promise.all([safeCount()]);
  const acts = getActs();
  const clauses = getClauses();
  const enacted = acts.filter((a) => a.status === "enacted").length;
  const drafting = acts.filter((a) => a.status === "in-development").length;
  const totalLayers = FOUNDER_STACK.length + INVESTOR_STACK.length;
  const shippedLayers = FOUNDER_STACK.filter((l) => l.shipped).length;

  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            One Africa. One standard.
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl tracking-tight font-medium leading-[1.05]">
            The standard for venture capital in&nbsp;Africa.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            After a decade of African venture capital — <strong className="text-foreground">$28 billion invested, 13,000+ deals</strong>, hundreds of fund formations and cross-border vehicles — the patterns are clear. The corporate structures investors expect. The cap tables that survive Series A. The fund vehicles that actually scale.
          </p>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            <strong className="text-foreground">PASE codifies them.</strong> Standardised, venture-grade, drafted natively into your jurisdiction's company law — not layered on top. Common-law (Nigeria, Kenya, Ghana, South Africa). OHADA / civil-law (Senegal, Ivory Coast, DRC, Tunisia). <strong className="text-foreground">14 African jurisdictions today.</strong>
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Open source. MIT licensed. <strong className="text-foreground">Free forever.</strong>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/entity">
                See PASE for Founders <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sign">Sign the manifesto</Link>
            </Button>
            {signatoryCount !== null && signatoryCount > 0 && (
              <span className="text-sm text-muted-foreground">
                {signatoryCount.toLocaleString()} verified signatures
              </span>
            )}
          </div>
        </div>
      </section>

      {/* The case */}
      <section className="border-b">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">The case</h2>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed tracking-tight">
            <strong>83% of growth-stage African startups are incorporated in Delaware, Mauritius, or the Cayman Islands</strong> — not for tax reasons, but because African corporate law won't let them issue the share classes their investors require. The cost: 15–20% of every operating budget burned on legal workarounds. Hundreds of millions in IP, tax, and governance routed offshore. By 2050 Africa's internet economy will be worth <strong>$712 billion</strong>. Whose laws will it be built on?
          </p>
          <p className="mt-10 text-base text-muted-foreground leading-relaxed">
            Africa has <strong className="text-foreground">{acts.length} startup acts</strong> — {enacted} enacted, {drafting} drafting — covering 75% of continental GDP. They look strikingly similar. They don't talk to each other. The window to integrate them is <strong className="text-foreground">2–3 years</strong> before fragmentation locks in.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Common is the integration. <strong className="text-foreground">PASE is the part you can adopt today.</strong>
          </p>
        </div>
      </section>

      {/* The stack */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground">The stack</h2>
              <p className="mt-3 text-2xl tracking-tight">
                10 functional layers. Drafted twice — common-law and OHADA.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {shippedLayers} of {totalLayers} layers shipped. Rest in progress.
              </p>
            </div>
            <Badge variant="secondary">{clauses.length} clauses shipped</Badge>
          </div>

          <Card className="mt-10">
            <CardHeader>
              <CardTitle className="text-base">PASE for Founders</CardTitle>
              <CardDescription>You set up a <strong>PASE Corporation</strong> — the venture-grade corporate stack for African startups.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <StackTable rows={FOUNDER_STACK} />
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">PASE for Investors</CardTitle>
              <CardDescription>You set up a <strong>PASE Fund</strong>, syndicate, or SPV — the venture-grade capital stack for African investors.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <StackTable rows={INVESTOR_STACK} startIndex={FOUNDER_STACK.length} />
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Open source. MIT licensed. <strong className="text-foreground">Free forever.</strong>
            </p>
            <Button asChild variant="outline">
              <Link href="/entity">
                See PASE for Founders <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Before / after</h2>
          <p className="mt-3 text-2xl tracking-tight">
            The same Series-A-ready cap table — two ways.
          </p>

          <Card className="mt-8">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Status quo</TableHead>
                    <TableHead>PASE</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <ComparisonRow label="Structure" status="Delaware C-Corp + Mauritius IP holdco + Cayman SPV" pase="One African entity (Tier 1) → optional Delaware/UK shell (Tier 2)" />
                  <ComparisonRow label="Time to cap table" status="6–12 months" pase="6–8 weeks" />
                  <ComparisonRow label="Legal cost" status="$200–300K" pase="$10–20K" />
                  <ComparisonRow label="Where governance lives" status="Offshore" pase="Your African entity" />
                  <ComparisonRow label="Where IP lives" status="Offshore" pase="At home" />
                  <ComparisonRow label="Where tax accrues" status="Where you don't operate" pase="Where you operate" />
                  <ComparisonRow label="Founder time on structuring" status="15–20% of operating budget" pase="Days, not months" />
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <p className="mt-4 text-xs text-muted-foreground">
            Status-quo figures from the underlying policy paper (interviews with growth-stage founders). PASE figures projected from comparable structures (French SAS adoption, Estonian e-Residency, Singapore Pte Ltd).
          </p>
        </div>
      </section>

      {/* Adoption tiers */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Adoption</h2>
          <p className="mt-3 text-2xl tracking-tight">
            Three tiers. Tier 1 is the only one that needs action from you.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <Card key={t.tier}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{t.tier}</Badge>
                  <CardTitle className="mt-2 text-base leading-snug">{t.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed space-y-3">
                  <p>{t.body}</p>
                  <p className="text-muted-foreground italic">{t.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">Roadmap beyond PASE</h2>
          <p className="mt-3 text-2xl tracking-tight max-w-3xl">
            PASE is the part you adopt today. Three more pillars carry the political work.
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
            These are what Common pushes for at the national, regional, and continental levels — so PASE graduates from Tier 1 (contractual) to Tier 2 (whitelisted by governments) to Tier 3 (recognised in law).
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">National fixes</CardTitle>
                <CardDescription>
                  Surgical amendments to the corporate, securities, tax, forex, and labor codes in {acts.length} jurisdictions. The barriers PASE works around contractually, fixed in statute.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" size="sm" className="px-0">
                  <Link href="/acts">
                    {acts.length} country dossiers <ArrowRight className="ml-1 size-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Regional passport</CardTitle>
                <CardDescription>
                  Extending the Ghana–Rwanda Fintech Passport (Feb 2025) to ECOWAS, EAC, OHADA, and AMU. Mutual recognition of startup labels across borders.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" size="sm" className="px-0">
                  <Link href="/passport">
                    Track agreements <ArrowRight className="ml-1 size-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">AU Model Law</CardTitle>
                <CardDescription>
                  Implementation specifications for the AU Model Law on Startup Promotion (July 2024). Six enhancement areas: finance, digital, passport, multi-jurisdiction, classification, coordination.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" size="sm" className="px-0">
                  <Link href="/model-law">
                    Read the proposal <ArrowRight className="ml-1 size-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight">
            If you're building, investing, advising, or legislating in Africa — sign.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founders. Investors. In-house and external counsel. Policymakers. The signatures are the political force that turns Tier 1 into Tier 2, and Tier 2 into Tier 3.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/sign">Sign the manifesto</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/entity">See PASE for Founders</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function StackTable({
  rows,
  startIndex = 0,
}: {
  rows: Array<{ layer: string; doc: string; shipped?: string }>;
  startIndex?: number;
}) {
  return (
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
        {rows.map((r, i) => (
          <TableRow key={r.layer}>
            <TableCell className="text-muted-foreground font-mono">{startIndex + i + 1}</TableCell>
            <TableCell className="font-medium">{r.layer}</TableCell>
            <TableCell className="text-muted-foreground">{r.doc}</TableCell>
            <TableCell>
              {r.shipped ? (
                <span className="inline-flex items-center gap-1.5 text-foreground">
                  <Check className="size-4" /> {r.shipped}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <CircleDashed className="size-4" /> pending
                </span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ComparisonRow({
  label,
  status,
  pase,
}: {
  label: string;
  status: string;
  pase: string;
}) {
  return (
    <TableRow>
      <TableCell className="font-medium">{label}</TableCell>
      <TableCell className="text-muted-foreground">{status}</TableCell>
      <TableCell>{pase}</TableCell>
    </TableRow>
  );
}

async function safeCount(): Promise<number | null> {
  try {
    return await prisma.signatory.count({ where: { verified: true } });
  } catch {
    return null;
  }
}
