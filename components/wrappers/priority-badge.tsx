import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Priority = "high" | "medium" | "low";

const STYLES: Record<Priority, string> = {
  high: "border-[color:var(--brand)]/40 bg-[color:var(--brand)]/5 text-[color:var(--brand)]",
  medium: "",
  low: "text-muted-foreground",
};

export function PriorityBadge({
  priority,
  className,
}: {
  priority: Priority;
  className?: string;
}) {
  return (
    <Badge variant="outline" className={cn(STYLES[priority], "font-ui", className)}>
      {priority} priority
    </Badge>
  );
}
