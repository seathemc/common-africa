import Link from "next/link";
import { getActs, getBarriers, TOPIC_LABELS, type Act } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Africa's startup acts — Common" };

export default function ActsPage() {
  const acts = getActs();
  const enacted = acts
    .filter((a) => a.status === "enacted")
    .sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
  const drafting = acts.filter((a) => a.status === "in-development");
  const barriers = getBarriers();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl tracking-tight">
          Africa's startup acts
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {acts.length} frameworks across the continent — covering 75–78% of African GDP.
          Independently drafted, structurally similar. The convergence is the opportunity.
        </p>
      </header>

      <section className="mt-10">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl tracking-tight">Enacted</h2>
          <Badge variant="secondary">{enacted.length}</Badge>
        </div>
        <ActsTable acts={enacted} />
      </section>

      <section className="mt-16">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl tracking-tight">In development</h2>
          <Badge variant="outline">{drafting.length}</Badge>
        </div>
        <ActsTable acts={drafting} />
      </section>

      <section className="mt-20 grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>The convergence pattern</CardTitle>
            <CardDescription>
              Independently drafted, structurally similar — that's the harmonisation foothold.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
              <li>
                <strong className="text-foreground">Age limits:</strong> all 5–10 years (Tunisia 8,
                Nigeria 10, Senegal 8, DRC 7, Ivory Coast 8, Ethiopia 5).
              </li>
              <li>
                <strong className="text-foreground">Labelling systems:</strong> all use
                certification, not new legal entities.
              </li>
              <li>
                <strong className="text-foreground">Tax holidays:</strong> all promise them. None
                apply automatically on labelling.
              </li>
              <li>
                <strong className="text-foreground">Oversight bodies:</strong> all create a
                dedicated authority (College of Startups, NCDIE, DER/FJ…).
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Or browse by barrier</CardTitle>
            <CardDescription>
              The same legal barriers recur across 4–8 jurisdictions, and the same PASE clauses
              solve them everywhere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {barriers.slice(0, 8).map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/topics/${b.id}`}
                    className="no-underline rounded-full border px-3 py-1 text-xs hover:bg-foreground hover:text-background transition-colors"
                  >
                    {TOPIC_LABELS[b.category] ?? b.category} · {b.title.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/topics" className="mt-5 inline-block text-sm">
              All topics →
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ActsTable({ acts }: { acts: Act[] }) {
  return (
    <Card className="mt-4 p-0 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Country</TableHead>
            <TableHead>Region · REC</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Age limit</TableHead>
            <TableHead>Labelling body</TableHead>
            <TableHead>Tax holiday</TableHead>
            <TableHead>Recommendations</TableHead>
            <TableHead className="w-12 sr-only">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {acts.map((a) => {
            const recCount = a.recommendations?.length ?? 0;
            return (
              <TableRow key={a.iso}>
                <TableCell className="font-medium">
                  <Link href={`/acts/${a.iso.toLowerCase()}`} className="no-underline">
                    {a.country}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">
                  {a.region} · {a.rec}
                </TableCell>
                <TableCell className="text-muted-foreground">{a.year ?? "—"}</TableCell>
                <TableCell className="text-muted-foreground">
                  {a.ageLimit ? `${a.ageLimit} yrs` : "—"}
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">
                  {a.labelingBody ?? "—"}
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">
                  {a.taxHoliday ?? "—"}
                </TableCell>
                <TableCell>
                  {recCount > 0 ? (
                    <Badge variant="secondary">{recCount}</Badge>
                  ) : (
                    <span className="text-muted-foreground text-xs">—</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={`/acts/${a.iso.toLowerCase()}`}
                    className="text-xs text-muted-foreground"
                  >
                    Open →
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
