import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ActStatus = "enacted" | "in-development";

export function StatusBadge({
  status,
  year,
  className,
}: {
  status: ActStatus;
  year?: number | null;
  className?: string;
}) {
  if (status === "enacted") {
    return (
      <Badge
        variant="outline"
        className={cn(
          "border-[color:var(--brand)]/40 text-[color:var(--brand)] font-ui",
          className,
        )}
      >
        Enacted{year ? ` · ${year}` : ""}
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className={cn("text-muted-foreground font-ui", className)}>
      In development
    </Badge>
  );
}
