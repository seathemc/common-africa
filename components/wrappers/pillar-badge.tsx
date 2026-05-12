import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Pillar } from "@/lib/data";

const STYLES: Record<Pillar, string> = {
  industry:
    "border-amber-700/30 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  national:
    "border-stone-700/30 bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-200",
  regional:
    "border-emerald-800/30 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
  continental:
    "border-primary/30 bg-primary/5 text-foreground",
};

const LABELS: Record<Pillar, string> = {
  industry: "Industry",
  national: "National",
  regional: "Regional",
  continental: "Continental",
};

export function PillarBadge({
  pillar,
  className,
}: {
  pillar: Pillar;
  className?: string;
}) {
  return (
    <Badge variant="outline" className={cn(STYLES[pillar], className)}>
      {LABELS[pillar]}
    </Badge>
  );
}
