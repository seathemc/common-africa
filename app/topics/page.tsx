import Link from "next/link";
import { getBarriers, TOPIC_LABELS } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Topics — Common" };

export default function TopicsIndex() {
  const barriers = getBarriers();
  const byCategory = barriers.reduce<Record<string, typeof barriers>>((acc, b) => {
    (acc[b.category] ??= []).push(b);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-foreground">
          Topic-axis browse
        </div>
        <h1 className="mt-2 text-3xl md:text-5xl tracking-tight">
          Browse by barrier, not by country.
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The same legal barrier usually appears in 4–8 jurisdictions — and the same PASE clause
          solves it everywhere. Flipping the axis is the move.
        </p>
      </header>

      {Object.entries(byCategory).map(([category, items]) => (
        <section key={category} className="mt-12">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl tracking-tight">
              {TOPIC_LABELS[category] ?? category}
            </h2>
            <Badge variant="secondary">{items.length}</Badge>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-4">
            {items.map((b) => (
              <Card key={b.id} className="hover:bg-muted/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href={`/topics/${b.id}`} className="no-underline">
                      {b.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {b.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="outline">
                      {b.affectedCountries.length} jurisdictions
                    </Badge>
                    {b.paseClauses.length > 0 && (
                      <Badge variant="outline">
                        PASE · {b.paseClauses.join(", ")}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
