# Employee Stock Option Plan — PASE Standard (common-law)

> **Status:** v0.1 reference standard. Not legal advice.
> **Layer:** 3 of 7 in the PASE for Founders stack (employee equity).
> **Traditions:** Common-law (Nigeria, Kenya, Ghana, South Africa). [OHADA / civil-law parallel](./esop.ohada.md).

## What PASE codifies

A PASE Corporation grants employees equity that:

1. **Vests over 4 years with a 1-year cliff** — industry-standard time-based vesting.
2. **Taxes at liquidity, not at grant or vesting** — the taxable event is when the employee can actually sell the shares.
3. **Carries 90-day post-termination exercise** — Y Combinator default; extensible to 7-10 years for founder-friendly retention.
4. **Accelerates on double trigger** — change of control + qualifying termination within 12 months.
5. **Reserves a 10% fully-diluted pool**, refreshed at each priced round.
6. **Survives change of control on equivalent terms** — acquirer assumes or cashes-out; never extinguished.

The principle is **labor reform first, corporate plumbing second.** Africa's knowledge-economy workforce should hold equity in the companies whose growth they build. Cash compensation alone cannot retain senior engineering talent against offshore-domiciled employers.

## Menu of instruments

PASE codifies the **principle**, not a specific instrument. The right instrument depends on the local tax regime. Each PASE-compliant company picks from this menu based on which one satisfies the principle in its jurisdiction.

| Instrument | What it is | Best fit |
|---|---|---|
| **NSO** (non-statutory option, FMV strike) | Right to buy shares later at today's FMV | Default in jurisdictions where there is no statutory tax-deferred equity-comp regime and early-exercise can convert ordinary-income exposure into capital-gains exposure. Nigeria, Kenya, Ghana. |
| **RSU** (restricted stock unit) | Promise of shares delivered on a trigger — time, milestone, or **liquidity** | When the local tax code taxes at vesting on then-FMV. The RSU vested-at-liquidity aligns the tax trigger with actual cash to pay it. **South Africa Section 8C, Tunisia Article 38.** |
| **RSA** (restricted stock award) | Actual shares granted upfront, subject to reverse-vesting / forfeiture | Founders themselves and the first 2-3 hires; rare for later employees because employee must put up cash for the shares at grant. |
| **Phantom equity / SAR** (stock appreciation right) | Cash payout at liquidity equal to what the shares would have been worth | Last-resort instrument for jurisdictions where even an RSU is blocked by labor or tax law. The Tunisia structure where Article 38's "avantage économique à l'attribution" trigger makes anything else taxable on theoretical value. |
| **Profit-interest / BSPCE-style** | Pre-classed shares (or pre-classed bons de souscription) with statutory tax-deferred treatment | Where a startup-act amendment or statutory regime explicitly enables tax-deferred employee equity — the Tier 2/Tier 3 destination. France BSPCE (CGI Art 163 bis G) is the comparable. |

**Decision tree in three questions:**

1. *Does the local tax code tax at grant on theoretical value?* If yes → **phantom equity** or **liquidity-only options** (no other instrument survives). Otherwise:
2. *Does the local tax code tax at vesting on then-FMV?* If yes → **RSU vested at liquidity** (aligns the tax event with actual cash). Otherwise:
3. **NSO with permitted early exercise** is the default. Cap-gains track on appreciation; spread at exercise is the only ordinary-income exposure.

## Mechanics (PASE defaults)

| Parameter | Default | Configurable |
|---|---|---|
| Pool size | 10% fully-diluted at adoption | Yes |
| Pool refresh | Each priced round | Board-determined |
| Vesting | 48 months, 12-month cliff, monthly thereafter | Yes |
| Strike price (for NSO) | FMV at grant, board-determined in good faith | Fixed |
| Vesting trigger (for RSU) | Time-based (default) or liquidity-based (for SA / TN) | Yes |
| Early exercise (NSO only) | Permitted, reverse vesting on underlying shares | Yes |
| Option term | 10 years | Yes |
| Post-termination window (good leaver) | 90 days | Yes (up to 10 years) |
| Cause forfeiture | Total | Fixed |
| Death/disability acceleration | 100% single-trigger | Fixed |
| Change of control acceleration | 100% double-trigger | Single-trigger override permitted |
| Repurchase right | 90 days at FMV on termination | Yes |

## The case

All six enacted-act jurisdictions lack a tax-and-labor framework for tax-at-liquidity equity compensation (paper p. 63, Recommendation #1). Tunisia's IRPP Article 38 taxes grants as immediate wages on theoretical values. Nigeria's Labour Act has no equity-comp provisions. South Africa's ITA Section 8C taxes at vesting (not liquidity), creating illiquidity-tax mismatches. The aggregate consequence: senior engineers either accept offshore-parent options invisible to local tax authority, or relocate. The paper documents ~30% senior-engineering relocation within 3 years of joining a growth-stage African startup.

**South Africa is the special case.** It has no enacted startup act (Section 12J expired 2021; no replacement). It has the most modern corporate law on the continent (Companies Act 71/2008 expressly permits multi-class shares, ESOPs, convertibles). And it has the only statutory equity-comp regime in Africa — Section 8C of the ITA — which is mature and well-litigated but taxes at *vesting*, not at *liquidity*. The PASE workaround in SA is the **RSU vested at liquidity** structure: the Section 8C taxable event becomes the actual liquidity event, with cash to pay the tax. The Tier 2 ask for SA is **Section 8C reform** (defer the taxable event to disposal), not a startup act — the political vehicle is different.

## Per-jurisdiction implementation

| Jurisdiction | Statutory hook | Today's constraint | Recommended PASE instrument | Tier 2 ask |
|---|---|---|---|---|
| **Nigeria** | CAMA 2020 §§ 119, 124(2), 142; PITA Schedule 3; NSA Schedule 3 | PITA taxes spread at exercise; CAMA 124(2) blocks multi-class without exemption | **NSO at FMV + early exercise** → cap-gains track | Finance Act amendment recognising NSA label for PITA pioneer-status purposes; PITA carve-out deferring ESOP-spread tax to liquidity |
| **Kenya** | Companies Act 2015 §§ 326, 477+; ITA Cap 470 § 5; CGT Act 2015 | ITA taxes at exercise (30% marginal); CGT at 15% on sale | **NSO at FMV + early exercise**; multi-class permitted by statute | KENIA-labelled startup exemption deferring tax to liquidity |
| **Ghana** | Companies Act 2019 (Act 992) § 31; ITA 2015 (Act 896) §§ 4, 6, 99 | ITA taxes at exercise (up to 30%); CGT at 15% on sale | **NSO at FMV + early exercise**; multi-class permitted by statute | Startup Act provision (when enacted) deferring tax to liquidity |
| **South Africa** | Companies Act 71/2008 § 36; ITA 58/1962 § 8C | Section 8C taxes at vesting on then-FMV (up to 45%) | **RSU vested at liquidity** (or liquidity-only NSO) to align § 8C trigger with actual liquidity | Section 8C amendment: defer taxable event to actual disposal of shares |

## Foreign comparables

- **Spain — Ley 28/2022 Article 5** (BOE-A-2022-23845). Amends PIT Article 42 to defer taxation of ENISA-labelled-startup options to liquidity. **Cleanest legislative precedent for PASE Tier 2.**
- **France — BSPCE** (CGI Article 163 bis G). Tax-advantaged options for startups <15 years, capitalization <€150M. Flat-rate tax at disposal only. The model for PASE Tier 3.
- **UK — EMI** (ITEPA 2003 Schedule 5). Companies <250 employees, gross assets <£30M. No income tax at grant or exercise; CGT with BADR at 10% on disposal. Strongest common-law statutory regime.
- **Delaware — NSO** (IRC § 83). Spread at exercise = ordinary income; appreciation = cap gains. The PASE common-law NSO is modelled on this.
- **South Africa — Section 8C** (ITA 58/1962). The only statutory equity-comp regime in Africa today. Useful as a domestic comparable when proposing similar regimes in other African jurisdictions.

## How this layer relates to startup acts

PASE and startup acts are **complementary, not the same thing.** Startup acts are the **policy infrastructure** (labelling, oversight, tax benefits); PASE is the **private-law infrastructure** (corporate structures, instruments, governance).

The two interlock at each tier:

- **Tier 1 (contractual).** PASE works in any jurisdiction at Tier 1 — adopt by board resolution + employment contract + Plan document. **No startup act required.** Works today in all 4 common-law anchor jurisdictions, including South Africa.
- **Tier 2 (whitelisted).** The startup act creates a labelling system. A "PASE-compliant" cap table auto-qualifies a labelled startup for the act's benefits — tax holiday, label, forex access. The Spain Ley 28/2022 precedent: ENISA-labelled startup → automatic deferred-tax treatment on stock options.
  - For enacted-act countries (NG, plus KE/GH once acts are enacted): the ask is Finance Act / PIT amendment cross-referencing the startup-act label.
  - **For South Africa specifically:** no startup act to whitelist against. The ask is **Section 8C reform** — defer taxable event from vesting to disposal — without requiring a labelling system. Different political vehicle, same Tier 2 outcome.
- **Tier 3 (statutory).** The startup act (or its successor framework) codifies PASE-equivalent ESOP as the canonical form. UK EMI and French BSPCE are the targets — statutory regimes specifically for startup employees, with caps on company size and pool, generous tax treatment.

In short: **PASE rides on top of any policy infrastructure that exists**, whether that's a startup act (NG/KE/GH/etc.), a sector-specific statute (SA Section 8C), or no act at all (Tier 1 contractual).

## Failure modes (without PASE)

- **Nigerian fintech routes options through Cayman parent.** Engineers on Nigerian payroll receive Cayman-plan options invisible to FIRS. FIRS § 81 back-assessments under "income arising from a source in Nigeria" theory create unbounded liability.
- **South African engineer faces Section 8C bill at vesting.** Options have appreciated 5× since grant; vesting tax bill is real cash owed on illiquid paper. Engineer either sells personal assets to cover, or refuses to vest.
- **Tunisian senior dev declines options.** IRPP Article 38 taxes grant on theoretical 5-year forward value at marginal 35%. Cash to pay tax doesn't exist. Dev accepts higher cash salary instead. (See OHADA / civil-law parallel for the Tunisia-specific pure-liquidity workaround.)
- **Kenyan startup uses cash bonuses instead of equity.** ITA Section 5 + no startup-act tax deferral makes options too expensive for employees. The company replaces equity with cash bonuses, loses senior talent to UK/UAE-domiciled employers.

## Tier progression

- **Tier 1 (today).** Adopt PASE ESOP by board resolution + shareholder ratification + Plan document. No government action. Works in all 4 common-law jurisdictions.
- **Tier 2 (12-24 months).** Government whitelisting — startup-act labelling (or sector statute, in SA's case) auto-qualifies the plan for tax-at-liquidity treatment via amendment to the relevant PIT regime. Spain Ley 28/2022 is the template.
- **Tier 3 (3-5 years).** Statutory equity-comp regime modelled on UK EMI, with caps on company size and pool, generous tax treatment for qualifying plans.

## Cross-references in PASE

- **Reads from layer 1** (multi-class shares) — the plan grants options on the share class authorised under the multi-class clause; pool sizing assumes that authorisation.
- **Sits before layer 4** (investor instruments) — the SAFE/convertible-note cap table includes the ESOP pool pre-money; pool refresh interacts with the cap-table refresh at each priced round.
- **Constrains layer 6** (cap table standard) — the cap table schema must accommodate option grants, RSU promises, vested/unvested splits, and reverse-vesting on early-exercised shares.

## Citations

**Paper:** Section 3 country profiles pp. 49–55; Finding #1 evidence pp. 62–63; Recommendation #1 labor-law modifications p. 68; Recommendation #3 ESOP standardisation pp. 71–72.

**Nigerian statutes:** CAMA 2020 §§ 119, 124(2), 142, 188-204; PITA Cap P8, LFN 2004; Labour Act Cap L1 LFN 2004 § 91; Pension Reform Act 2014; CGT Act Cap C1; NSA 2022 Schedule 3.

**Kenyan statutes:** Companies Act 2015 §§ 53, 95, 96, 326; ITA Cap 470 § 5, 8th Schedule; CGT Act 2015; Employment Act 2007.

**Ghanaian statutes:** Companies Act 2019 (Act 992) §§ 31, 32; ITA 2015 (Act 896) §§ 4, 6, 99; Labour Act 2003 (Act 651) §§ 17, 64; Securities Industry Act 2016 (Act 929).

**South African statutes:** Companies Act 71/2008 §§ 16, 36; ITA 58/1962 § 8C; LRA 66/1995; BCEA 75/1997. **Section 12J (expired 2021)** as the closest historical equivalent to a Tier 2 vehicle.

**Foreign:** Spain Ley 28/2022 Art 5 (BOE-A-2022-23845); France CGI Art 163 bis G (BSPCE); UK ITEPA 2003 Schedule 5 (EMI); US IRC §§ 83, 422 (NSO, ISO).

## Template artifacts

Reference contract templates — Plan, Award Agreement, Notice of Exercise — live at `content/templates/esop/common-law/` for drafters who want full model text. The templates are reference drafting only; **they are not the standard**. The standard is the rules above.
