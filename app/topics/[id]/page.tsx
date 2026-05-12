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

  // Gather all recommendations across all countries that address this barrier.
  const allRecsForBarrier: Array<{ act: Act; rec: Recommendation }> = [];
  for (const act of getActs()) {
    for (const rec of act.recommendations ?? []) {
      if (rec.barrierId === id) {
        allRecsForBarrier.push({ act, rec });
      }
    }
  }

  return (
    <section className="container-prose py-20">
      <Link href="/topics" className="text-sm">← All topics</Link>

      <div className="mt-6 text-xs uppercase tracking-widest text-[color:var(--brand)]">
        {TOPIC_LABELS[barrier.category] ?? barrier.category}
      </div>
      <h1 className="mt-2 text-3xl md:text-4xl tracking-tight">{barrier.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{barrier.description}</p>

      <div className="mt-10 border hairline p-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          The surgical fix
        </div>
        <p className="mt-3 leading-relaxed">{barrier.surgicalFix}</p>
        {barrier.sourcePages.length > 0 && (
          <div className="mt-4 text-xs text-muted-foreground">
            Source: paper p. {barrier.sourcePages.join(", ")}
          </div>
        )}
      </div>

      {clauses.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
            PASE clauses that solve this contractually
          </h2>
          <ul className="mt-6 grid gap-4">
            {clauses.map((c) => (
              <li key={c.slug} className="border hairline p-5">
                <Link href={`/entity/${c.slug}`} className="no-underline text-lg">
                  {c.title} →
                </Link>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
          Affected jurisdictions · {affectedActs.length}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {affectedActs.map((a) => (
            <Link
              key={a.iso}
              href={`/acts/${a.iso.toLowerCase()}`}
              className="no-underline rounded-full border hairline px-4 py-1.5 hover:bg-foreground hover:text-background"
            >
              {a.country}
            </Link>
          ))}
        </div>
      </div>

      {allRecsForBarrier.length > 0 && (
        <div className="mt-16 border-t hairline pt-10">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
            Country-specific recommendations · {allRecsForBarrier.length}
          </h2>
          <ul className="mt-6 space-y-6">
            {allRecsForBarrier.map(({ act, rec }) => (
              <li key={`${act.iso}-${rec.id}`} className="border hairline p-5">
                <div className="flex flex-wrap items-baseline gap-x-3 text-sm">
                  <Link
                    href={`/acts/${act.iso.toLowerCase()}`}
                    className="no-underline font-medium"
                  >
                    {act.country}
                  </Link>
                  <span className="text-muted-foreground">
                    {rec.code} — {rec.article}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed">{rec.proposedAmendment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
