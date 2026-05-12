import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PriorityBadge } from "@/components/wrappers/priority-badge";
import { PillarBadge } from "@/components/wrappers/pillar-badge";
import { TOPIC_LABELS, type Recommendation } from "@/lib/data";

export function RecommendationCard({
  rec,
  showPillar = false,
}: {
  rec: Recommendation;
  showPillar?: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {showPillar && <PillarBadge pillar={rec.pillar} />}
          <Badge variant="secondary">{TOPIC_LABELS[rec.topic] ?? rec.topic}</Badge>
          <PriorityBadge priority={rec.priority} />
        </div>
        <div className="mt-3 text-sm text-muted-foreground">
          {rec.code}{" "}
          <span className="text-foreground font-medium">— {rec.article}</span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 text-[15px] leading-relaxed">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Current
          </div>
          <p className="mt-1">{rec.currentText}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Proposed
          </div>
          <p className="mt-1">{rec.proposedAmendment}</p>
        </div>

        {(rec.paseClauses.length > 0 || rec.barrierId) && (
          <div className="flex flex-wrap gap-2 text-xs pt-2">
            {rec.barrierId && (
              <Link
                href={`/topics/${rec.barrierId}`}
                className="no-underline rounded-full border px-3 py-1 hover:bg-foreground hover:text-background transition-colors"
              >
                Topic · {rec.barrierId.replace(/-/g, " ")}
              </Link>
            )}
            {rec.paseClauses.map((slug) => (
              <Link
                key={slug}
                href={`/entity/${slug}`}
                className="no-underline rounded-full border px-3 py-1 hover:bg-foreground hover:text-background transition-colors"
              >
                PASE · {slug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        )}

        {rec.sourcePages.length > 0 && (
          <div className="text-xs text-muted-foreground">
            Source: paper p. {rec.sourcePages.join(", ")}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
