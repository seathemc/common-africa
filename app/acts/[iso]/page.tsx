import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getActByIso,
  getActs,
  PILLAR_LABELS,
  PRIORITY_ORDER,
  recommendationsByPillar,
  type Pillar,
} from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatusBadge } from "@/components/wrappers/status-badge";
import { RecommendationCard } from "@/components/wrappers/recommendation-card";

export function generateStaticParams() {
  return getActs().map((a) => ({ iso: a.iso.toLowerCase() }));
}

export default async function ActDetailPage({
  params,
}: {
  params: Promise<{ iso: string }>;
}) {
  const { iso } = await params;
  const act = getActByIso(iso);
  if (!act) notFound();

  const grouped = recommendationsByPillar(act);
  const totalRecs = act.recommendations?.length ?? 0;
  const pillarOrder: Pillar[] = ["national", "regional", "industry", "continental"];
  const defaultTab = pillarOrder.find((p) => grouped[p].length > 0) ?? "national";

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/acts" className="text-sm text-muted-foreground">
        ← All acts
      </Link>

      <header className="mt-6 flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl tracking-tight">{act.country}</h1>
          <p className="mt-2 text-muted-foreground">
            {act.actName} · {act.region} · {act.rec}
          </p>
        </div>
        <StatusBadge status={act.status as "enacted" | "in-development"} year={act.year} />
      </header>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Age limit" value={act.ageLimit ? `${act.ageLimit} years` : "—"} />
        <StatCard label="Labelling body" value={act.labelingBody ?? "—"} />
        <StatCard label="Label name" value={act.labelName ?? "—"} />
        <StatCard label="Tax holiday" value={act.taxHoliday ?? "—"} />
        <StatCard
          label="Auto tax application"
          value={
            act.taxAutoApplied === null || act.taxAutoApplied === undefined
              ? "—"
              : act.taxAutoApplied
              ? "Yes"
              : "No"
          }
        />
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Known gaps</CardTitle>
            <CardDescription>
              Where the act creates a paper right that doesn't yet operate in practice.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc list-inside leading-relaxed">
              {act.knownGaps.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {act.notable && (
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base">Notable</CardTitle>
            </CardHeader>
            <CardContent className="italic text-muted-foreground leading-relaxed">
              {act.notable}
            </CardContent>
          </Card>
        )}
      </div>

      <section className="mt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-2xl tracking-tight">
            What Common proposes for {act.country}
          </h2>
          <span className="text-sm text-muted-foreground">
            {totalRecs} recommendation{totalRecs === 1 ? "" : "s"} · sourced from the policy paper
          </span>
        </div>

        {totalRecs === 0 ? (
          <p className="mt-8 text-muted-foreground">
            No recommendations yet for {act.country}. Contributions welcome on{" "}
            <a href="https://github.com/seathemc/common-africa">GitHub</a>.
          </p>
        ) : (
          <Tabs defaultValue={defaultTab} className="mt-8">
            <TabsList>
              {pillarOrder.map((p) => (
                <TabsTrigger key={p} value={p} disabled={grouped[p].length === 0}>
                  {PILLAR_LABELS[p].split(" — ")[0]}
                  <span className="ml-2 text-xs text-muted-foreground">
                    {grouped[p].length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            {pillarOrder.map((p) => {
              const recs = grouped[p].slice().sort(
                (a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority],
              );
              return (
                <TabsContent key={p} value={p} className="mt-6">
                  <p className="text-sm text-muted-foreground max-w-2xl">
                    {PILLAR_LABELS[p]}
                  </p>
                  <div className="mt-6 grid gap-4">
                    {recs.map((r) => (
                      <RecommendationCard key={r.id} rec={r} />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        )}
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Card className="py-4">
      <CardContent className="px-4">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-1.5 text-sm font-medium leading-snug">{value}</div>
      </CardContent>
    </Card>
  );
}
