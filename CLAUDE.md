# CLAUDE.md — conventions for this repo

## What this is

Common is the African VC standard. Open source, MIT licensed, free forever.

The product is **PASE** — a standardised, venture-grade corporate stack drafted natively into 14 African jurisdictions' company law (common-law + OHADA). Two audiences, two entity mechanisms:

- **PASE for Founders** — you set up a **PASE Corporation** (shares, options, investor instruments, venture debt)
- **PASE for Investors** — you set up a **PASE Fund** (or SPV, or Syndicate)

Beyond PASE itself, three roadmap pillars carry the political work — national surgical fixes, regional passport, AU Model Law specifications. These exist to help PASE graduate from Tier 1 (contractual) to Tier 2 (whitelisted) to Tier 3 (statutory).

## Stack

- Next.js 16 (App Router, React 19, TypeScript, Turbopack)
- Tailwind CSS v4 + `@tailwindcss/typography`
- shadcn/ui — `new-york` style, `neutral` base, `lucide` icons. Primitives in `components/ui/` are **owned local code**.
- Prisma 6 + PostgreSQL (Supabase)
- `marked` for server-rendered markdown clauses
- `zod` for input validation
- Resend for verification emails (console-logs if `RESEND_API_KEY` unset)

## Design system — full shadcn defaults

No editorial overrides. The original scaffold had a warm `#fafaf7` background, serif body, brand-red accent, hairline borders — all stripped. Site now reads as a real shadcn app (white background, sans body, slate neutrals, `border-border` defaults).

Use shadcn primitives and tokens. No custom container classes (`container-prose` / `container-wide` are gone). Use Tailwind's `mx-auto max-w-3xl px-6` for prose width and `mx-auto max-w-5xl px-6` for dashboard width.

## Sidebar — `components/layout/app-sidebar.tsx`

Four groups, in this order:

1. **Manifesto** — `/`
2. **PASE** — PASE for Founders (`/entity`), PASE for Investors (`/entity/funds`)
3. **Roadmap** — National fixes (`/acts`), Topics (`/topics`), Regional passport (`/passport`), AU Model Law (`/model-law`)
4. **Sign the manifesto** — CTA-style item in `SidebarFooter`, inverted styling

Add new architecture pages to the `NAV` array. Anything that isn't core PASE is "Roadmap."

## Product wrappers — `components/wrappers/`

Built on shadcn primitives. Use these, not raw `Badge` / `Card`:

- `<PillarBadge pillar="national" />`
- `<PriorityBadge priority="high" />`
- `<StatusBadge status="enacted" year={2022} />`
- `<RecommendationCard rec={...} />`

Add new wrappers when a pattern repeats across two or more pages.

## Tabs vs routes

**Tabs** for sub-segmentation within a single subject:
- `/acts/[iso]` — pillar Tabs (National / Regional / Industry / Continental)
- `/topics/[id]` — Recommendations / Jurisdictions / PASE clauses
- `/entity/[slug]` — legal tradition (common-law / OHADA)

**Routes** for distinct subjects. Don't mash unrelated topics into one Tabs view.

## Data shape — `data/*.json`

All structured data is in `data/`, consumed via `lib/data.ts`. The (planned) MCP server and any external consumer reads the same files. Treat the JSON shape as a stable public API:

- `data/startup-acts.json` — 14 country entries with `recommendations[]`
- `data/clauses.json` — PASE clauses with `barrierIds[]`
- `data/barriers.json` — de-duplicated barrier catalog with `paseClauses[]` and `affectedCountries[]`

Every recommendation, barrier, and clause carries `sourcePages[]` citations back to the underlying policy paper. Don't add records without source citations.

## Positioning — copy conventions

- **Slogan:** *"One Africa. One standard."*
- **Hero thesis:** *"The standard for venture capital in Africa."* (NOT "EU-Inc for Africa," NOT "Delaware for Africa")
- **Antagonist:** legal reinvention. NOT Delaware specifically. NOT "Africa vs America."
- **Promise:** *"Open source. MIT licensed. Free forever."* — repeated as a recurring footer / pillar, not a one-time mention.
- **Naming:** *PASE* is a brand, used unqualified after the subtitle. The unfolded *"Pan-African Startup Entity"* appears only in metadata and once on the manifesto.
- **Audience labels:** *PASE for Founders* / *PASE for Investors* (friendly).
- **Entity-mechanism labels:** *PASE Corporation* / *PASE Fund* (technical, used when talking about the legal vehicle itself).
- **No personal attribution** — Common is a movement, not a personal project. Don't name individual founders/operators unless they sign publicly.

## Adoption tiers

Three tiers describe **founder progression**, not regulatory progression:

- **Tier 1** — Set up your PASE Corporation. Skill-pack for your law firm. No government action.
- **Tier 2** — Qualify for startup-act benefits + plug into Delaware/UK scaffolding when investors require it.
- **Tier 3** — Operate across multiple African markets via standardised cross-border templates.

Only Tier 1 needs action from the user. Tier 2/3 imply work *we* (Common) do politically, but the framing on the page is what the founder *gets*, not what we're advocating for.

## Forms

Direct shadcn primitives (`<Input>`, `<Select>`, `<Label>`, `<Textarea>`, `<Button>`) for simple forms. Reach for `react-hook-form` + `zod` resolvers only when validation logic is non-trivial.

The signup form (`/sign`) keeps a hidden honeypot field (`name="website"`) — preserve it.

## Build / typecheck

```bash
npx tsc --noEmit      # type check
npx next build        # full build (includes prisma generate)
```

Both must pass before pushing. ESLint config has a pre-existing FlatCompat issue — known, not blocking.

## Branch / PR conventions

- Develop on `claude/<descriptor>` branches
- PRs open as draft against `main`
- After pushing, always create the draft PR if one doesn't exist
- Don't push to `main` directly

## What not to add

- Documentation files (`*.md`) unless explicitly requested — this `CLAUDE.md` is the exception
- Emojis (unless the user asks)
- Backwards-compatibility shims for code you just removed
- Comments that explain what the code does — only WHY when non-obvious
- Personal attribution — Common is the movement, not a person's project
