import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Priority = "high" | "medium" | "low";

const STYLES: Record<Priority, string> = {
  high: "border-primary/40 bg-primary/5 text-foreground font-medium",
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
    <Badge variant="outline" className={cn(STYLES[priority], className)}>
      {priority} priority
    </Badge>
  );
}
