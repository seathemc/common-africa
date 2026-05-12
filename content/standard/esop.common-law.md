# Employee Stock Option Plan — PASE Standard (common-law)

> **Status:** v0.1 reference standard. Not legal advice.
> **Layer:** 3 of 7 in the PASE for Founders stack (employee equity).
> **Traditions:** Common-law (Nigeria, Kenya, Ghana, South Africa). [OHADA / civil-law parallel](./esop.ohada.md).

## What PASE codifies

A PASE Corporation grants employee stock options under a standardised plan that:

1. **Vests at 4 years with a 1-year cliff** — industry-standard time-based vesting.
2. **Strikes at fair market value at grant** — to avoid spread-at-grant income tax under PIT-style codes.
3. **Defers taxable event to liquidity** — either through early-exercise mechanics (where capital-gains treatment is available) or through liquidity-vested option structures (where it isn't).
4. **Carries 90-day post-termination exercise** — Y Combinator default; extensible to 7-10 years for founder-friendly retention.
5. **Accelerates on double trigger** — change of control + qualifying termination within 12 months.
6. **Reserves a 10% fully-diluted ESOP pool**, refreshed at each priced round.

The standard is **labor reform first, corporate plumbing second.** Africa's knowledge-economy workforce should hold equity in the companies whose growth they build. Cash compensation alone cannot retain senior engineering talent against offshore-domiciled employers.

## Mechanics (PASE defaults)

| Parameter | Default | Configurable |
|---|---|---|
| Pool size | 10% fully-diluted at adoption | Yes |
| Pool refresh | Each priced round | Board-determined |
| Vesting | 48 months, 12-month cliff, monthly thereafter | Yes |
| Option type | NSO at FMV at grant | Fixed |
| Early exercise | Permitted, reverse vesting on underlying shares | Yes |
| Strike price | FMV at grant, board-determined in good faith | Fixed |
| Option term | 10 years | Yes |
| Post-termination window (good leaver) | 90 days | Yes (up to 10 years) |
| Cause forfeiture | Total | Fixed |
| Death/disability acceleration | 100% single-trigger | Fixed |
| Change of control acceleration | 100% double-trigger | Single-trigger override permitted |
| Repurchase right | 90 days at FMV on termination | Yes |

## The case

All six enacted-act jurisdictions lack a tax-and-labor framework for tax-at-liquidity equity compensation (paper p. 63, Recommendation #1). Tunisia's IRPP Article 38 taxes grants as immediate wages on theoretical values. Nigeria's Labour Act has no equity-comp provisions. South Africa's ITA Section 8C taxes at vesting (not liquidity), creating illiquidity-tax mismatches. The aggregate consequence: senior engineers either accept offshore-parent options invisible to local tax authority, or relocate. The paper documents ~30% senior-engineering relocation within 3 years of joining a growth-stage African startup.

## Per-jurisdiction implementation

| Jurisdiction | Statutory hook | Today's constraint | PASE workaround | Tier 2 ask |
|---|---|---|---|---|
| **Nigeria** | CAMA 2020 §§ 119, 124(2), 142; PITA Schedule 3; NSA Schedule 3 | PITA taxes spread at exercise; CAMA 124(2) blocks multi-class | NSO at FMV + early exercise → cap-gains track. NSA labelling enables PIT carve-out request. | Finance Act amendment recognising NSA label for PITA pioneer-status purposes; PITA carve-out for ESOP-spread at exercise → liquidity |
| **Kenya** | Companies Act 2015 §§ 326, 477+; ITA Cap 470 § 5; CGT Act 2015 | ITA taxes at exercise (30%); CGT at 15% on sale | NSO at FMV + early exercise. Multi-class permitted by statute. | KENIA-labelled startup exemption: deferred tax to liquidity for designated companies |
| **Ghana** | Companies Act 2019 (Act 992) § 31; ITA 2015 (Act 896) §§ 4, 6, 99 | ITA taxes at exercise; CGT at 15% on sale | NSO at FMV + early exercise. Multi-class permitted by statute. | Startup Act provision (when enacted) deferring tax to liquidity |
| **South Africa** | Companies Act 71/2008 § 36; ITA 58/1962 § 8C | Section 8C taxes at vesting on then-FMV (up to 45%) | Liquidity-vested options (vest only on Change of Control) align Section 8C trigger with actual liquidity | Section 8C amendment: defer taxable event to actual disposal of shares |

## Foreign comparables

- **Spain — Ley 28/2022 Article 5** (BOE-A-2022-23845). Amends PIT Article 42 to defer taxation of ENISA-labelled-startup options to liquidity. **Cleanest legislative precedent for PASE Tier 2.**
- **France — BSPCE** (CGI Article 163 bis G). Tax-advantaged options for startups <15 years, capitalization <€150M. Flat-rate tax at disposal only.
- **UK — EMI** (ITEPA 2003 Schedule 5). Companies <250 employees, gross assets <£30M. No income tax at grant or exercise; CGT with BADR at 10% on disposal.
- **Delaware — NSO** (IRC § 83). Spread at exercise = ordinary income; appreciation = cap gains. The PASE common-law structure is NSO-modelled because no African jurisdiction has an ISO-equivalent statutory regime yet.

## Failure modes (without PASE)

- **Nigerian fintech routes options through Cayman parent.** Engineers on Nigerian payroll receive Cayman-plan options invisible to FIRS. FIRS § 81 back-assessments under "income arising from a source in Nigeria" theory create unbounded liability.
- **South African engineer faces Section 8C bill at vesting.** Options have appreciated 5× since grant; vesting tax bill is real cash owed on illiquid paper. Engineer either sells personal assets to cover, or refuses to vest.
- **Tunisian senior dev declines options.** IRPP Article 38 taxes grant on theoretical 5-year forward value at marginal 35%. Cash to pay tax doesn't exist. Dev accepts higher cash salary instead. (See OHADA / civil-law parallel for the Tunisia-specific pure-liquidity workaround.)

## Tier progression

- **Tier 1 (today).** Adopt PASE ESOP by board resolution + shareholder ratification + plan document. No government action. Works in all 4 common-law jurisdictions.
- **Tier 2 (12-24 months).** Government whitelisting — startup-act labelling auto-qualifies the plan for tax-at-liquidity treatment via amendment to the relevant PIT regime. Spain Ley 28/2022 is the template.
- **Tier 3 (3-5 years).** Statutory equity-comp regime modelled on UK EMI, with caps on company size and pool, generous tax treatment for qualifying plans.

## Cross-references in PASE

- **Reads from layer 1** (multi-class shares) — the plan grants options on the share class authorised under the multi-class clause; pool sizing assumes that authorisation.
- **Sits before layer 4** (investor instruments) — the SAFE/convertible-note cap table includes the ESOP pool pre-money; pool refresh interacts with the cap-table refresh at each priced round.
- **Constrains layer 6** (cap table standard) — the cap table schema must accommodate option grants, vested/unvested splits, and reverse-vesting on early-exercised shares.

## Citations

**Paper:** Section 3 country profiles pp. 49–55; Finding #1 evidence pp. 62–63; Recommendation #1 labor-law modifications p. 68; Recommendation #3 ESOP standardisation pp. 71–72.

**Nigerian statutes:** CAMA 2020 §§ 119, 124(2), 142, 188-204; PITA Cap P8, LFN 2004; Labour Act Cap L1 LFN 2004 § 91; Pension Reform Act 2014; CGT Act Cap C1; NSA 2022 Schedule 3.

**Kenyan statutes:** Companies Act 2015 §§ 53, 95, 96, 326; ITA Cap 470 § 5, 8th Schedule; CGT Act 2015; Employment Act 2007.

**Ghanaian statutes:** Companies Act 2019 (Act 992) §§ 31, 32; ITA 2015 (Act 896) §§ 4, 6, 99; Labour Act 2003 (Act 651) §§ 17, 64; Securities Industry Act 2016 (Act 929).

**South African statutes:** Companies Act 71/2008 §§ 16, 36; ITA 58/1962 § 8C; LRA 66/1995; BCEA 75/1997.

**Foreign:** Spain Ley 28/2022 Art 5 (BOE-A-2022-23845); France CGI Art 163 bis G (BSPCE); UK ITEPA 2003 Schedule 5 (EMI); US IRC §§ 83, 422 (NSO, ISO).

## Template artifacts

Reference contract templates — Plan, Award Agreement, Notice of Exercise — live at `content/templates/esop/common-law/` for drafters who want full model text. The templates are reference drafting only; they are not the standard. The standard is the rules above.
