import Link from "next/link";
import { getBarriers, TOPIC_LABELS } from "@/lib/data";

export const metadata = { title: "Topics — Common" };

export default function TopicsIndex() {
  const barriers = getBarriers();
  const byCategory = barriers.reduce<Record<string, typeof barriers>>(
    (acc, b) => {
      (acc[b.category] ??= []).push(b);
      return acc;
    },
    {},
  );

  return (
    <section className="container-prose py-20">
      <div className="text-xs uppercase tracking-widest text-[color:var(--brand)]">
        Topic-axis browse
      </div>
      <h1 className="mt-2 text-3xl md:text-5xl tracking-tight">
        Browse by barrier, not by country.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Africa's startup-act fragmentation looks different when you flip the axis. Instead of
        "what's the law in Senegal?", ask "which countries treat SAFEs as debt?" The same barrier
        usually appears in 4-8 jurisdictions — and the same PASE clause solves it everywhere.
      </p>

      {Object.entries(byCategory).map(([category, items]) => (
        <div key={category} className="mt-14">
          <h2 className="text-xs uppercase tracking-widest text-[color:var(--brand)]">
            {TOPIC_LABELS[category] ?? category} · {items.length}
          </h2>
          <ul className="mt-6 space-y-5">
            {items.map((b) => (
              <li key={b.id} className="border hairline p-6">
                <Link
                  href={`/topics/${b.id}`}
                  className="no-underline text-xl tracking-tight"
                >
                  {b.title}
                </Link>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border hairline px-3 py-1">
                    {b.affectedCountries.length} jurisdictions
                  </span>
                  {b.paseClauses.length > 0 && (
                    <span className="rounded-full border hairline px-3 py-1">
                      PASE: {b.paseClauses.join(", ")}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
