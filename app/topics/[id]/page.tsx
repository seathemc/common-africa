import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getActs,
  getActsForBarrier,
  getBarrierById,
  getBarriers,
  getClausesForBarrier,
  TOPIC_LABELS,
  type Act,
  type Recommendation,
} from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return getBarriers().map((b) => ({ id: b.id }));
}

export default async function TopicDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const barrier = getBarrierById(id);
  if (!barrier) notFound();

  const affectedActs = getActsForBarrier(id);
  const clauses = getClausesForBarrier(id);

  const allRecsForBarrier: Array<{ act: Act; rec: Recommendation }> = [];
  for (const act of getActs()) {
    for (const rec of act.recommendations ?? []) {
      if (rec.barrierId === id) {
        allRecsForBarrier.push({ act, rec });
      }
    }
  }

  return (
    <div className="container-wide py-12 font-ui">
      <Link href="/topics" className="text-sm text-muted-foreground">
        ← All topics
      </Link>

      <header className="mt-6 max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-[color:var(--brand)]">
          {TOPIC_LABELS[barrier.category] ?? barrier.category}
        </div>
        <h1 className="mt-2 font-body text-3xl md:text-4xl tracking-tight">
          {barrier.title}
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {barrier.description}
        </p>
      </header>

      <Card className="mt-10 max-w-3xl bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">The surgical fix</CardTitle>
        </CardHeader>
        <CardContent className="leading-relaxed">
          <p>{barrier.surgicalFix}</p>
          {barrier.sourcePages.length > 0 && (
            <p className="mt-3 text-xs text-muted-foreground">
              Source: paper p. {barrier.sourcePages.join(", ")}
            </p>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="recommendations" className="mt-12">
        <TabsList>
          <TabsTrigger value="recommendations">
            Recommendations
            <span className="ml-2 text-xs text-muted-foreground">
              {allRecsForBarrier.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="jurisdictions">
            Jurisdictions
            <span className="ml-2 text-xs text-muted-foreground">
              {affectedActs.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="clauses" disabled={clauses.length === 0}>
            PASE clauses
            <span className="ml-2 text-xs text-muted-foreground">{clauses.length}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="mt-6">
          {allRecsForBarrier.length === 0 ? (
            <p className="text-muted-foreground">No country-specific recommendations yet.</p>
          ) : (
            <div className="grid gap-3">
              {allRecsForBarrier.map(({ act, rec }) => (
                <Card key={`${act.iso}-${rec.id}`}>
                  <CardContent className="py-4">
                    <div className="flex flex-wrap items-baseline gap-x-3 text-sm">
                      <Link
                        href={`/acts/${act.iso.toLowerCase()}`}
                        className="no-underline font-medium"
                      >
                        {act.country}
                      </Link>
                      <span className="text-muted-foreground text-xs">
                        {rec.code} — {rec.article}
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed">
                      {rec.proposedAmendment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="jurisdictions" className="mt-6">
          <div className="flex flex-wrap gap-2">
            {affectedActs.map((a) => (
              <Link
                key={a.iso}
                href={`/acts/${a.iso.toLowerCase()}`}
                className="no-underline"
              >
                <Badge variant="outline" className="text-sm hover:bg-foreground hover:text-background transition-colors py-1.5 px-4">
                  {a.country}
                </Badge>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="clauses" className="mt-6">
          {clauses.length === 0 ? (
            <p className="text-muted-foreground">
              No PASE clauses yet address this barrier contractually. Track progress on{" "}
              <a href="https://github.com/seathemc/common-africa">GitHub</a>.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {clauses.map((c) => (
                <Card key={c.slug}>
                  <CardHeader>
                    <CardTitle className="text-base">
                      <Link href={`/entity/${c.slug}`} className="no-underline">
                        {c.title} →
                      </Link>
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {c.summary}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
