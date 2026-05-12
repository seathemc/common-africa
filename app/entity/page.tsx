import Link from "next/link";
import { getClauses } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Pan-African Startup Entity — Common" };

const ROADMAP = [
  "Standardised ESOP grant + vesting documents (common-law & OHADA)",
  "Convertible note (priced & unpriced)",
  "Founder share vesting + cliff agreement",
  "Cross-border holding structure recipes (Mauritius, Cayman, plus PASE-native)",
  "Data processing addendum aligned with the AU Convention on Cyber Security & Personal Data Protection",
];

export default function EntityIndex() {
  const clauses = getClauses();

  return (
    <div className="container-wide py-12 font-ui">
      <header className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[color:var(--brand)]">
          Industry layer · open-source
        </div>
        <h1 className="mt-2 font-body text-3xl md:text-5xl tracking-tight">
          The Pan-African Startup Entity.
        </h1>
        <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
          A growing library of model corporate clauses — multi-class shares, ESOP, SAFE,
          convertible notes, cross-border registration — drafted in parallel for{" "}
          <strong className="text-foreground">both common-law and OHADA / civil-law</strong>{" "}
          jurisdictions. Adopt today via private contract, even before national recognition
          catches up. This is exactly how the French SAS became dominant.
        </p>
      </header>

      <Card className="mt-8 max-w-3xl bg-muted/30">
        <CardContent className="py-5 text-sm leading-relaxed">
          <strong>v0.1 — community review.</strong> These are reference templates, not legal
          advice. We're partnering with African law firms to harden each clause; pull requests
          and clause-by-clause annotations are welcome.
        </CardContent>
      </Card>

      <section className="mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="font-body text-xl tracking-tight">Available clauses</h2>
          <Badge variant="secondary">{clauses.length}</Badge>
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {clauses.map((c) => (
            <Card key={c.slug} className="hover:bg-muted/30 transition-colors">
              <CardHeader>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.category}
                </div>
                <CardTitle className="text-xl mt-1">
                  <Link href={`/entity/${c.slug}`} className="no-underline">
                    {c.title}
                  </Link>
                </CardTitle>
                <CardDescription className="leading-relaxed">{c.summary}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2 text-xs">
                {c.versions.map((v) => (
                  <Badge key={v.tradition} variant="outline">
                    {v.label}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-body text-xl tracking-tight">Roadmap</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
          {ROADMAP.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
