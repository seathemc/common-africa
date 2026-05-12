import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getActByIso,
  getActs,
  PILLAR_LABELS,
  PRIORITY_ORDER,
  recommendationsByPillar,
  TOPIC_LABELS,
  type Pillar,
  type Recommendation,
} from "@/lib/data";

export function generateStaticParams() {
  return getActs().map((a) => ({ iso: a.iso.toLowerCase() }));
}

export default async function ActDetailPage({ params }: { params: Promise<{ iso: string }> }) {
  const { iso } = await params;
  const act = getActByIso(iso);
  if (!act) notFound();

  const grouped = recommendationsByPillar(act);
  const totalRecs = act.recommendations?.length ?? 0;
  const pillarOrder: Pillar[] = ["national", "regional", "industry", "continental"];

  return (
    <section className="container-prose py-20">
      <Link href="/acts" className="text-sm">← All acts</Link>
      <div className="mt-6 text-xs uppercase tracking-widest text-[color:var(--accent)]">
        {act.status === "enacted" ? `Enacted · ${act.year}` : "In development"}
      </div>
      <h1 className="mt-2 text-3xl md:text-4xl tracking-tight">{act.country}</h1>
      <p className="mt-2 text-[color:var(--muted)]">
        {act.actName} · {act.region} · {act.rec}
      </p>

      <dl className="mt-12 grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
        <Stat label="Age limit" value={act.ageLimit ? `${act.ageLimit} years` : "—"} />
        <Stat label="Labelling body" value={act.labelingBody ?? "—"} />
        <Stat label="Label" value={act.labelName ?? "—"} />
        <Stat label="Tax holiday" value={act.taxHoliday ?? "—"} />
        <Stat
          label="Automatic tax application"
          value={
            act.taxAutoApplied === null || act.taxAutoApplied === undefined
              ? "—"
              : act.taxAutoApplied
              ? "Yes"
              : "No — separate verification required"
          }
        />
      </dl>

      <div className="mt-12">
        <h2 className="text-sm uppercase tracking-widest text-[color:var(--muted)]">Known gaps</h2>
        <ul className="mt-4 space-y-3 list-disc list-inside text-[color:var(--foreground)] leading-relaxed">
          {act.knownGaps.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      </div>

      {act.notable && (
        <div className="mt-12 border-l-2 border-[color:var(--accent)] pl-4 italic text-[color:var(--muted)]">
          {act.notable}
        </div>
      )}

      <div className="mt-20 border-t hairline pt-10">
        <h2 className="text-sm uppercase tracking-widest text-[color:var(--muted)]">
          What Common proposes for {act.country} ({totalRecs} recommendations)
        </h2>
        <p className="mt-4 text-[color:var(--muted)] leading-relaxed">
          Each recommendation cites the specific code and article. Recommendations are organised by the
          pillar that owns them: <strong className="text-foreground">national</strong> (statutory amendments),
          {" "}<strong className="text-foreground">regional</strong> (REC-level harmonisation),
          {" "}<strong className="text-foreground">industry</strong> (PASE clauses adoptable today),
          {" "}<strong className="text-foreground">continental</strong> (AU Model Law).
        </p>

        {pillarOrder.map((pillar) => {
          const recs = grouped[pillar].slice().sort(
            (a, b) =>
              PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority],
          );
          if (recs.length === 0) return null;
          return (
            <div key={pillar} className="mt-14">
              <h3 className="text-xs uppercase tracking-widest text-[color:var(--accent)]">
                {PILLAR_LABELS[pillar]} · {recs.length}
              </h3>
              <ul className="mt-6 space-y-8">
                {recs.map((r) => (
                  <RecommendationCard key={r.id} rec={r} />
                ))}
              </ul>
            </div>
          );
        })}

        {totalRecs === 0 && (
          <p className="mt-8 text-[color:var(--muted)]">
            No recommendations yet for {act.country}. Contributions welcome on{" "}
            <a href="https://github.com/seathemc/common-africa">GitHub</a>.
          </p>
        )}
      </div>
    </section>
  );
}

function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <li className="border hairline p-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs uppercase tracking-widest text-[color:var(--muted)]">
        <span>{TOPIC_LABELS[rec.topic] ?? rec.topic}</span>
        <span>·</span>
        <PriorityBadge priority={rec.priority} />
      </div>
      <div className="mt-3 text-sm text-[color:var(--muted)]">
        {rec.code} <span className="text-foreground">— {rec.article}</span>
      </div>
      <div className="mt-5 grid gap-4 text-[15px] leading-relaxed">
        <div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--muted)]">Current</div>
          <div className="mt-1">{rec.currentText}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--muted)]">Proposed</div>
          <div className="mt-1">{rec.proposedAmendment}</div>
        </div>
      </div>
      {(rec.paseClauses.length > 0 || rec.barrierId) && (
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {rec.barrierId && (
            <Link
              href={`/topics/${rec.barrierId}`}
              className="no-underline rounded-full border hairline px-3 py-1"
            >
              Topic: {rec.barrierId.replace(/-/g, " ")}
            </Link>
          )}
          {rec.paseClauses.map((slug) => (
            <Link
              key={slug}
              href={`/entity/${slug}`}
              className="no-underline rounded-full border hairline px-3 py-1 hover:bg-foreground hover:text-background"
            >
              PASE: {slug.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      )}
      {rec.sourcePages.length > 0 && (
        <div className="mt-4 text-xs text-[color:var(--muted)]">
          Source: paper p. {rec.sourcePages.join(", ")}
        </div>
      )}
    </li>
  );
}

function PriorityBadge({ priority }: { priority: Recommendation["priority"] }) {
  const colours: Record<Recommendation["priority"], string> = {
    high: "text-[color:var(--accent)]",
    medium: "text-foreground",
    low: "text-[color:var(--muted)]",
  };
  return <span className={colours[priority]}>{priority} priority</span>;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[color:var(--muted)]">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
