import acts from "@/data/startup-acts.json";
import clauses from "@/data/clauses.json";
import barriers from "@/data/barriers.json";

export type Recommendation = {
  id: string;
  code: string;
  article: string;
  currentText: string;
  proposedAmendment: string;
  pillar: "industry" | "national" | "regional" | "continental";
  topic: string;
  barrierId: string;
  paseClauses: string[];
  priority: "high" | "medium" | "low";
  sourcePages: number[];
};

export type Act = (typeof acts)[number] & {
  recommendations?: Recommendation[];
};

export type Clause = (typeof clauses)[number];

export type Barrier = (typeof barriers)[number];

export function getActs(): Act[] {
  return acts as Act[];
}

export function getActByIso(iso: string): Act | undefined {
  return (acts as Act[]).find((a) => a.iso.toLowerCase() === iso.toLowerCase());
}

export function getClauses(): Clause[] {
  return clauses as Clause[];
}

export function getClauseBySlug(slug: string): Clause | undefined {
  return (clauses as Clause[]).find((c) => c.slug === slug);
}

export function getBarriers(): Barrier[] {
  return barriers as Barrier[];
}

export function getBarrierById(id: string): Barrier | undefined {
  return (barriers as Barrier[]).find((b) => b.id === id);
}

export function getActsForBarrier(barrierId: string): Act[] {
  const barrier = getBarrierById(barrierId);
  if (!barrier) return [];
  return (acts as Act[]).filter((a) =>
    barrier.affectedCountries.includes(a.iso),
  );
}

export function getClausesForBarrier(barrierId: string): Clause[] {
  return (clauses as Clause[]).filter((c) =>
    c.barrierIds?.includes(barrierId),
  );
}

export function getBarriersForClause(slug: string): Barrier[] {
  return (barriers as Barrier[]).filter((b) => b.paseClauses.includes(slug));
}

export type Pillar = "industry" | "national" | "regional" | "continental";

export function recommendationsByPillar(
  act: Act,
): Record<Pillar, Recommendation[]> {
  const grouped: Record<Pillar, Recommendation[]> = {
    industry: [],
    national: [],
    regional: [],
    continental: [],
  };
  for (const rec of act.recommendations ?? []) {
    grouped[rec.pillar as Pillar]?.push(rec);
  }
  return grouped;
}

export const PILLAR_LABELS: Record<Pillar, string> = {
  industry: "Industry — PASE adoption",
  national: "National — surgical code fixes",
  regional: "Regional — passport / REC harmonisation",
  continental: "Continental — AU Model Law",
};

export const TOPIC_LABELS: Record<string, string> = {
  corporate: "Corporate law",
  securities: "Securities & financing",
  tax: "Tax",
  forex: "Foreign exchange",
  labor: "Labor & equity compensation",
  ip: "IP & technology transfer",
  data: "Data protection",
  capital: "Institutional capital",
  regional: "Cross-border recognition",
  implementation: "Digital implementation rails",
  accounting: "Accounting standards",
};

export const PRIORITY_ORDER: Record<string, number> = {
  high: 0,
  medium: 1,
  low: 2,
};
