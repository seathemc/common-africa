import Link from "next/link";
import { notFound } from "next/navigation";
import { getClauseBySlug, getClauses } from "@/lib/data";
import { readClauseMarkdown, renderMarkdown } from "@/lib/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function generateStaticParams() {
  return getClauses().map((c) => ({ slug: c.slug }));
}

export default async function ClausePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tradition?: string }>;
}) {
  const { slug } = await params;
  const { tradition } = await searchParams;
  const clause = getClauseBySlug(slug);
  if (!clause) notFound();

  const defaultTradition =
    clause.versions.find((v) => v.tradition === tradition)?.tradition ??
    clause.versions[0].tradition;

  return (
    <div className="container-wide py-12 font-ui">
      <Link href="/entity" className="text-sm text-muted-foreground">
        ← Clause library
      </Link>

      <header className="mt-6 max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[color:var(--brand)]">
          {clause.category}
        </div>
        <h1 className="mt-2 font-body text-3xl md:text-4xl tracking-tight">{clause.title}</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">{clause.summary}</p>
      </header>

      {clause.addresses && clause.addresses.length > 0 && (
        <Card className="mt-8 max-w-3xl bg-muted/30">
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground">
              Addresses these specific barriers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm list-disc list-inside">
              {clause.addresses.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue={defaultTradition} className="mt-10 max-w-3xl">
        <TabsList>
          {clause.versions.map((v) => (
            <TabsTrigger key={v.tradition} value={v.tradition}>
              {v.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {clause.versions.map((v) => {
          const md = readClauseMarkdown(v.file);
          const html = renderMarkdown(md);
          return (
            <TabsContent key={v.tradition} value={v.tradition} className="mt-6">
              <article
                className="font-body prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </TabsContent>
          );
        })}
      </Tabs>

      <Card className="mt-12 max-w-3xl">
        <CardContent className="py-5 text-sm text-muted-foreground leading-relaxed">
          <CardDescription className="text-sm">
            Found an issue or have a better drafting? Open a PR on{" "}
            <a href="https://github.com/seathemc/common-africa">GitHub</a> or{" "}
            <Link href="/sign">sign as counsel</Link> to join the review group.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
