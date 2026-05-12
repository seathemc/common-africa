# Multi-class Share Structure — PASE Standard (common-law)

> **Status:** v0.1 reference standard. Not legal advice.
> **Layer:** 1 of 7 in the PASE for Founders stack (constitution).
> **Traditions:** Common-law (Nigeria, Kenya, Ghana, South Africa). [OHADA / civil-law parallel](./multi-class-shares.ohada.md).

## What PASE codifies

A PASE Corporation's articles of association authorise **at least three share classes** with statutorily-permitted differentiation:

1. **Ordinary (common) shares** — one vote per share; residual economic rights.
2. **Preferred shares** — votes per share as specified at issuance; liquidation preference; anti-dilution protection; convertible to ordinary at holder's option and automatically on IPO.
3. **Non-voting (founder or growth) shares** — no votes (save in respect of class rights); same economic rights as ordinary.

Plus sub-classes within preferred (Series Seed, Series A, etc.) with class-specific terms set at each round.

Standard preferred rights:
- **Liquidation preference: 1× non-participating** — preferred recovers invested capital before any distribution to ordinary; does not "double-dip" by also participating pro-rata thereafter.
- **Anti-dilution: broad-based weighted-average** — protects preferred from dilution in a down round, with the formula accounting for the size of the down round and the existing fully-diluted base.
- **Conversion: 1:1 to ordinary**, at holder's option always, automatic on a qualifying IPO or by majority consent of the class.
- **Class voting rights** for any change adverse to that class (variation, dilution, liquidation order).

The principle: **the cap table investors expect, available natively in your local company.** Founders should not have to incorporate offshore to issue a Series A in San Francisco's standard shape.

## Menu of instruments

This layer is one structure, not a menu. But the **expression** of the structure varies by jurisdiction:

| Expression | Jurisdiction fit |
|---|---|
| **Direct authorisation in articles of association** (express multiple classes with terms in the constitutional document) | Where the local Companies Act expressly permits multi-class — **Kenya, Ghana, South Africa.** Cleanest. |
| **Class through shareholder agreement** (single class in articles; class-equivalent rights and economic outcomes in shareholders agreement) | Where the local Companies Act prohibits or restricts multi-class for private companies — **Nigeria pre-CAMA-amendment.** Workaround; protects founders contractually but does not bind subsequent shareholders the way articles do. |
| **Class through nominee structure** (single class in articles; classes "expressed" via nominee shareholdings that route economics to beneficial holders) | Worst-case fallback when neither articles nor a clean shareholder agreement is enforceable. Rare; not recommended. |

**Decision rule:** Direct authorisation if permitted; shareholder-agreement workaround if not; nominee only if neither.

## Mechanics (PASE defaults)

| Parameter | Default | Configurable |
|---|---|---|
| Classes authorised | Ordinary + Preferred + Non-voting (founder/growth) | Yes (additional classes by board) |
| Preferred liquidation preference | 1× non-participating | Yes (participating allowed; cap at 2-3× recommended) |
| Preferred anti-dilution | Broad-based weighted-average | Yes (full-ratchet permitted but disfavoured) |
| Preferred conversion | 1:1 to ordinary; automatic on qualifying IPO or majority class consent | Fixed |
| Non-voting voting rights | None except on class-rights variations and liquidation resolutions | Fixed |
| Class consent thresholds | Majority of class for routine variations; 75% for liquidation order changes | Yes |
| Pro-rata rights | Standard pro-rata for preferred in subsequent priced rounds | In shareholders agreement, not articles |

## The case

Common-law African company law splits sharply by jurisdiction on multi-class shares:

- **Nigeria's CAMA 2020 Section 124(2)** expressly prohibits dual-class voting for private companies (paper p. 53, 62, 387). This is the single most-cited reason growth-stage Nigerian startups maintain Delaware or Cayman parent companies — investors demand preferred shares with the standard protections, and CAMA forbids them domestically.
- **Kenya's Companies Act 2015 Section 326** expressly permits multi-class structures. PASE structure works within statute without amendment.
- **Ghana's Companies Act 2019 Section 31** expressly permits multi-class structures. Same as Kenya.
- **South Africa's Companies Act 71/2008 Section 36** expressly permits multi-class structures. SA has the most modern company law on the continent and the lowest implementation friction for PASE multi-class.

The aggregate consequence: a Nigerian startup wanting to issue Series A preferred shares in San Francisco's standard shape must either (i) restructure as a Cayman parent + Nigerian subsidiary, paying $150-200K in offshore legal fees per the paper, or (ii) attempt a contractual workaround that fails under CAMA's mandatory provisions. Neither outcome serves the company or the policy.

The Nigeria gap is **the single biggest "easy win" surgical fix** in the common-law African corporate-law landscape: a one-line CAMA amendment exempting NSA-labelled startups from Section 124(2) unlocks the rest of the PASE stack.

## Per-jurisdiction implementation

| Jurisdiction | Statutory hook | Today's constraint | PASE workaround | Tier 2 ask |
|---|---|---|---|---|
| **Nigeria** | CAMA 2020 §§ 18, 124(2) | Section 124(2) prohibits dual-class voting in private companies | **Shareholder-agreement workaround**: single class in articles; class-equivalent economics + class-equivalent voting via proxy and consent provisions in shareholders agreement. Less robust than articles, but enforceable inter se. | CAMA amendment: exempt NSA-labelled startups from Section 124(2); or carve out a "labelled startup" company sub-category permitting multi-class |
| **Kenya** | Companies Act 2015 § 326 | None — multi-class expressly permitted by statute | **Direct authorisation in articles.** Standard PASE articles. | None at Tier 2; Tier 3 might codify a labelled-startup default. |
| **Ghana** | Companies Act 2019 (Act 992) § 31 | None — multi-class expressly permitted | **Direct authorisation in articles.** | Same as Kenya. |
| **South Africa** | Companies Act 71/2008 § 36 | None — multi-class expressly permitted, including non-voting | **Direct authorisation in articles.** SA is the cleanest implementation in Africa. | Same as Kenya. |

## Foreign comparables

- **Delaware — DGCL §§ 151, 152.** The reference frame globally. Permits any number of classes with any rights as specified. PASE preferred structure is modelled on Delaware Series A standard NVCA documents.
- **UK — Companies Act 2006 § 629.** Permits multi-class; UK BVCA standard articles for venture-backed companies are the common-law analogue.
- **Singapore — Companies Act § 64.** Permits multi-class. Singapore is the most-used offshore jurisdiction for African startups alongside Delaware and Mauritius.
- **France — Code de Commerce L.228-11+** (actions de préférence). The civil-law analogue; permits issuance of preferred shares with bespoke economic and voting rights. PASE OHADA expresses preferred via actions de préférence under AUSCGIE.

## How this layer relates to startup acts

For the three jurisdictions where multi-class is statutorily permitted (KE, GH, ZA), this layer is **Tier-1-only** — no startup act involvement needed at any tier. The standard articles work.

For Nigeria — the one jurisdiction with a statutory prohibition — the layer maps to startup-act intervention:

- **Tier 1 (today):** Shareholder-agreement workaround. PASE-shaped economics achievable contractually; founders accept enforcement risk on third parties.
- **Tier 2 (12-24 months):** NSA amendment — Section 124(2) exemption for NSA-labelled startups. **This is the single highest-leverage surgical fix in the entire Nigerian PASE roadmap.** It unlocks not just multi-class but every downstream layer that depends on it (ESOP on a non-voting class, preferred-share conversion mechanics, etc.).
- **Tier 3 (3-5 years):** Codified "labelled startup" company category in CAMA with multi-class as a statutory default.

For other in-development-act countries (Algeria, Morocco, Rwanda, Uganda, Egypt) whose company law may have similar restrictions: drafters of those Startup Acts should include the equivalent of NSA-amendment language pre-emptively, before the act enacts.

## Failure modes (without PASE)

- **Nigerian Series A round routes through Cayman.** Investor requires preferred shares with 1× non-participating liquidation preference and broad-based weighted-average anti-dilution. CAMA 124(2) blocks direct issuance in Nigerian Ltd. Company restructures to Cayman parent + Nigerian subsidiary at the cost of $150-200K + 6-12 weeks. IP, tax, and governance migrate offshore. (Paper p. 53, 62.)
- **Kenyan Series A round closes locally.** Companies Act 2015 permits multi-class; PASE articles work. Closes in 4 weeks for ~$30K legal. Counterfactual to Nigeria — same deal shape, different infrastructure cost.
- **South African non-voting founder shares.** Standard SA practice; PASE structure is barely a variant of what already works.

## Tier progression

- **Tier 1 (today).** Where statutorily permitted: direct PASE articles. Where prohibited (NG): shareholder-agreement workaround that approximates the economics.
- **Tier 2 (12-24 months).** NSA Section 124(2) amendment for Nigeria. (KE, GH, ZA: no Tier 2 needed.)
- **Tier 3 (3-5 years).** Codified labelled-startup company category in CAMA-equivalent statutes, with multi-class as the default.

## Cross-references in PASE

- **Read by layer 3** (ESOP) — the option pool is sized against the fully-diluted share count established here.
- **Read by layer 4** (SAFE, convertible note) — conversion price calculations depend on the share-class architecture.
- **Read by layer 6** (cap table standard) — the cap table schema must accommodate multi-class structures.
- **Constrains layer 2** (co-founder governance, forthcoming) — drag-along, tag-along, ROFR all operate across the share-class architecture.

## Citations

**Paper:** Section 3 country profiles p. 53 (Nigeria), p. 62 (Tunisia); Finding #1 evidence p. 62; Recommendation #1 corporate-law updates p. 68; Recommendation #3 multi-class structure p. 387 (illustrative).

**Nigerian statutes:** CAMA 2020 §§ 18, 119, 124(2), 142.

**Kenyan statutes:** Companies Act 2015 §§ 53, 95, 96, 326; CMA Act Cap 485A.

**Ghanaian statutes:** Companies Act 2019 (Act 992) §§ 31, 32; Securities Industry Act 2016 (Act 929).

**South African statutes:** Companies Act 71 of 2008 §§ 16, 36.

**Foreign:** Delaware DGCL §§ 151, 152 (multi-class authorisation); UK Companies Act 2006 § 629; Singapore Companies Act § 64; France Code de Commerce L.228-11+ (actions de préférence).

## Template artifacts

Reference articles-of-association language and per-jurisdiction shareholder-agreement templates live at `content/templates/multi-class-shares/common-law/`. **They are not the standard**; the standard is the rules above.
