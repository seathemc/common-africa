# CLAUDE.md — conventions for this repo

## Stack

- Next.js 16 (App Router, React 19, TypeScript, Turbopack)
- Tailwind CSS v4 with `@tailwindcss/typography`
- shadcn/ui — `new-york` style, `neutral` base color, `lucide` icons. Primitives live in `components/ui/` and are **owned local code** (edit them when needed; don't treat them as a dependency).
- Prisma 6 + PostgreSQL (Supabase)
- `marked` for server-rendered markdown clauses
- `zod` for input validation on the API
- `radix-ui` (peer of shadcn primitives) for low-level primitives
- Resend for verification emails (logs to console if `RESEND_API_KEY` is unset)

## Design language

Two registers, both supported by the same shell:

| Register | Where | Font | Container | Background feel |
|---|---|---|---|---|
| **Editorial** | `/`, `/sign`, `/signatories` | `var(--font-body)` (serif) via inherited `html, body` | `.container-prose` (720 max) | Warm paper `#fafaf7` |
| **Operator** | `/acts`, `/topics`, `/entity`, `/model-law` | `.font-ui` (system sans) opt-in per page | `.container-wide` (1080 max) | Same warm paper |

The sidebar shell wraps all routes; editorial pages just use a narrower content column inside `SidebarInset`. Don't switch between fonts inside a single page — opt the whole architecture page into `.font-ui` at the outer `<div>`.

## Colour tokens

| Token | Use |
|---|---|
| `--background` (`#fafaf7`) | Page background. Warm paper. |
| `--foreground` | Body text. shadcn neutral near-black. |
| `--brand` (`#b91c1c`) | Editorial accent — section labels (`text-[color:var(--brand)]`), priority emphasis, hover link color. *Not* the shadcn `--accent` token, which is reserved for subtle hover backgrounds on primitives. |
| `--muted-foreground` | Muted text in both registers. Replaces the old `--muted` semantic. |
| `--line` (`#e5e3dc`) | Hairline borders via `.hairline` class. Distinct from shadcn `--border`. |
| `--accent` | shadcn's subtle accent (almost-white). **Do not use as a brand colour.** |

## Sidebar

Defined in `components/layout/app-sidebar.tsx`. Three semantic groups, mirroring the `pan-african-library` pattern:

1. **Manifesto** — single item (`/`)
2. **The architecture** — PASE / Acts / Passport / AU Model Law (the four pillars)
3. **Browse** — Topics / Signatories

Plus a CTA-style **Sign the manifesto** item in `SidebarFooter` (inverted styling, mirrors truth-web's pattern).

Add new architecture pages to the `NAV` array, not to a separate component.

## Product wrappers

Built on top of shadcn primitives, kept in `components/wrappers/`. Use these, not raw `Badge` / `Card` everywhere:

- `<PillarBadge pillar="national" />` — color-coded per pillar (industry / national / regional / continental)
- `<PriorityBadge priority="high" />` — emphasis colour for `high`
- `<StatusBadge status="enacted" year={2022} />` — for startup-act status
- `<RecommendationCard rec={...} />` — full card for `/acts/[iso]` and `/topics/[id]`

Add new wrappers here when a pattern repeats across two or more pages.

## Tabs vs routes

**Tabs** for sub-segmentation *within a single subject*:
- `/acts/[iso]` — pillar groups (National / Regional / Industry / Continental)
- `/topics/[id]` — recommendations / jurisdictions / PASE clauses
- `/entity/[slug]` — legal tradition (common-law / OHADA)

**Routes** for distinct subjects. Don't use Tabs to mash different topics into one page.

## Data shape

All structured data lives in `data/*.json` and is consumed via `lib/data.ts` helpers. The MCP server (planned) and any external consumer reads the same files. Treat the JSON shape as a stable public API:

- `data/startup-acts.json` — 14 country entries with `recommendations[]`
- `data/clauses.json` — PASE clauses with `barrierIds[]`
- `data/barriers.json` — de-duplicated barrier catalog with `paseClauses[]` and `affectedCountries[]`

Every recommendation, barrier, and clause carries `sourcePages[]` citations back to the policy paper. Don't add records without source citations.

## Forms

Pragmatic — direct shadcn primitives (`<Input>`, `<Select>`, `<Label>`, `<Textarea>`, `<Button>`) for simple forms. Reach for `react-hook-form` + `zod` resolvers only when validation logic is non-trivial.

The signup form (`/sign`) deliberately keeps a hidden honeypot field (`name="website"`) — preserve it; it eliminates ~95% of spam without UX cost.

## Build / typecheck

```bash
npx tsc --noEmit      # type check
npx next build        # full build (includes prisma generate)
```

Both must pass before pushing. ESLint config has a pre-existing FlatCompat issue (`eslint-config-next` + `@eslint/eslintrc` shim) — known issue, not blocking, ignore.

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
