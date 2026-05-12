import type { MetadataRoute } from "next";
import { getActs, getBarriers, getClauses } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://common-africa.org";
  const root = base.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/acts",
    "/topics",
    "/entity",
    "/model-law",
    "/sign",
    "/signatories",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${root}${path}`,
      lastModified: now,
    })),
    ...getActs().map((a) => ({
      url: `${root}/acts/${a.iso.toLowerCase()}`,
      lastModified: now,
    })),
    ...getClauses().map((c) => ({
      url: `${root}/entity/${c.slug}`,
      lastModified: now,
    })),
    ...getBarriers().map((b) => ({
      url: `${root}/topics/${b.id}`,
      lastModified: now,
    })),
  ];
}
