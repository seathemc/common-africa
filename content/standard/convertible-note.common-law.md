# Convertible Note — PASE Standard (common-law)

> **Status:** v0.1 reference standard. Not legal advice.
> **Layer:** 4 of 7 in the PASE for Founders stack (investor instruments, debt variant). Pairs with the [SAFE clause](./safe.common-law.md).
> **Traditions:** Common-law (Nigeria, Kenya, Ghana, South Africa). [OHADA / civil-law parallel](./convertible-note.ohada.md).

## What PASE codifies

A PASE Corporation issues a Convertible Note as a debt instrument that:

1. **Is debt with a maturity date** — interest accrues, principal repays, creditor rights apply. Clean classification under every common-law African Companies Act.
2. **Auto-converts at the next Qualified Financing** into the same class as the priced round, at the lower of Cap-Based and Discount Prices.
3. **Pays out on Change of Control before maturity** — investor election: repayment with premium, or conversion at the Cap-Based Price.
4. **Treats maturity gracefully** — investor election: repayment, or Maturity Conversion at the Cap-Based Price (avoids the unfunded balloon problem).
5. **Carries MFN, subordination, and customary default provisions** — standard debt covenants.

The principle: **the institutionally-fundable early-stage instrument.** Where the SAFE's hybrid classification is contested, the convertible note is clean debt — easier to issue, easier to account for, easier to clear with regulators.

## Menu of instruments

| Variant | Mechanics | Best fit |
|---|---|---|
| **Cap + Discount + MFN** | Conversion at lower of Cap-Based and Discount Prices; MFN to subsequent notes | Default. Standard YC-equivalent structure adapted for African common-law. |
| **Cap-only** | Conversion at Cap-Based Price only | Where the investor wants ceiling protection but accepts the round price otherwise. |
| **Discount-only** | Conversion at Discount Price only | Friends-and-family rounds where no cap is set. |
| **Note with warrant coverage** | Note + warrant for additional shares (typically 10-25% of principal) | DFI and institutional investors who require additional dilution buffer; standard in the African DFI market. |
| **Secured Note** | Note + security interest over Company assets | Where the investor requires creditor protection. Standard for venture debt; less common for seed-stage convertible. |

**Decision rule:** Cap + Discount + MFN is the default. Add warrant coverage if the investor is a DFI. Secured is rare at seed stage but standard at venture-debt stage (layer 5).

## Mechanics (PASE defaults)

| Parameter | Default | Configurable |
|---|---|---|
| Principal | Purchase Amount | Yes |
| Interest rate | 5% per annum, simple, monthly accrual | Yes |
| Maturity | 24 months from issuance | Yes (extension by consent) |
| Discount Rate | 80% (20% discount) | Yes |
| Qualified Financing threshold | Equity round at fixed pre-money raising ≥ USD 1M (or local-currency equivalent) | Yes |
| Conversion price | Lower of Cap-Based and Discount-Based | Fixed |
| Maturity treatment | Investor election: repayment OR Maturity Conversion at Cap-Based Price | Investor election within 30 days; default to Conversion |
| Change of Control treatment | Investor election: repayment + 1× premium OR conversion at Cap-Based Price | Investor election within 10 business days; default to repayment with premium |
| MFN | Standard MFN to subsequent notes' more-favourable terms | Fixed |
| Subordination | Subordinated to senior secured debt; senior to common equity; pari passu with other notes in same round | Fixed |
| Security | Unsecured | Yes (secured variant available) |
| Default | Customary: failure to pay, insolvency, material breach, cross-default > USD 100K | Fixed |

## The case

The convertible note is the **administratively easier** early-stage financing instrument in African common-law jurisdictions because its classification as debt is unambiguous:

- **Nigerian CAMA 2020 §§ 188-204** govern debenture issuance. The convertible note fits within established debenture frameworks. Stamp duty applies (0.375% under Stamp Duties Act); FIRS treatment is clear.
- **Kenyan Companies Act 2015 §§ 477-490** govern debenture issuance. Capital Markets Authority private-placement exemption under § 33 covers most rounds.
- **Ghanaian Companies Act 2019 (Act 992) §§ 138-145** govern debenture issuance. Securities Industry Act 2016 § 109 expressly recognises debentures.
- **South African Companies Act 71/2008 § 43** governs debt issuance. SARB exchange-control approval required for non-resident investors but the framework is well-established.

By contrast, the SAFE faces classification disputes in NG and GH and ambiguity in KE. **For institutional rounds, the convertible note is the easier instrument.** For pre-seed and angel rounds where speed matters more than classification, the SAFE remains the right choice.

PASE provides both. Drafters choose based on round economics, investor preference, and jurisdiction.

## Per-jurisdiction implementation

| Jurisdiction | Statutory hook | Today's constraint | PASE workaround | Tier 2 ask |
|---|---|---|---|---|
| **Nigeria** | CAMA 2020 §§ 188-204; SEC Rules 2013; Stamp Duties Act Cap S8 | Debenture framework well-established; non-resident investors need Certificate of Capital Importation | Note + NPA + CCI from authorised dealer bank; stamp duty payment within 30 days | None acute; SEC clarification of NSA § 23 convertible-instrument provisions desirable |
| **Kenya** | Companies Act 2015 §§ 477-490, 870 (charges); CMA Act Cap 485A § 33; ITA Cap 470 § 15 (interest deductibility) | Clean; CMA private-placement exemption covers most rounds | Note + NPA under Companies Act; CMA exemption used; charges registered if secured | None acute |
| **Ghana** | Companies Act 2019 (Act 992) §§ 138-145; SIA 2016 § 109, § 122 (private-placement exemption); ITA 2015 § 9 (interest deductibility) | Clean | Note + NPA; SIA § 122 exemption used | None acute |
| **South Africa** | Companies Act 71/2008 § 43; ITA 58/1962 § 24J (interest treatment); Securities Transfer Tax Act § 6; SARB Currency and Exchanges Manual § B.2(I) | Clean except SARB approval for non-residents (4-6 week typical processing) | Note + NPA under Companies Act; SARB approval applied at issuance | SARB streamlining of venture-instrument approval; not blocking |

## Foreign comparables

- **United States — Y Combinator Standard Convertible Note** (publicly available). The canonical form. PASE common-law convertible note is structurally aligned with YC's post-2018 form, calibrated for African market.
- **United Kingdom — BVCA Convertible Loan Note** + **British Business Bank standard CLN**. UK CLN dominates the UK seed-stage market. Pertinent because UK investors structuring African rounds negotiate against CLN templates.
- **Singapore — Companies Act § 64A** expressly permits convertible bonds. Heavily used as offshore parent jurisdiction for African startups.
- **Delaware — DGCL §§ 154-157** govern debt issuance and conversion. Most US-investor-aligned reference.

## How this layer relates to startup acts

For convertible notes, the startup-act interaction is **less acute** than for the SAFE because the debt classification is everywhere recognised:

- **Tier 1 (today).** Convertible note works cleanly in all 4 common-law anchor jurisdictions under existing debenture frameworks. **No startup act required.** No classification dispute (unlike SAFE).
- **Tier 2 (12-24 months).** The startup-act ask is **interest-deductibility certainty** and **withholding-tax simplification** for non-resident investors funding labelled startups. Smaller ask than the SAFE's classification fix.
- **Tier 3 (3-5 years).** Codified preferential treatment for convertible notes issued by labelled startups — reduced WHT, deductibility safe harbours, simplified CCI/SARB procedures.

**The asymmetry is intentional in PASE design.** The convertible note is the instrument that already works; PASE codifies the structural defaults and the cross-jurisdictional uniformity. The SAFE is the instrument that needs Tier 2 work to land cleanly. Drafters today should default to the convertible note for institutional rounds and use the SAFE where speed and friction matter more.

## Failure modes (without PASE)

- **Lagos fintech raises USD 500K SAFE round, SEC classifies as debt.** Round bogged down for 8 weeks in classification dispute. **Had the company used a convertible note instead (PASE-recommended for Nigeria), the round would have closed in 3-4 weeks** under the clean CAMA debenture framework.
- **Senegalese SAS raises USD 750K from a French DFI.** DFI requires creditor protections, maturity, and warrants. Convertible note structured under AUSCGIE 822-839 (see OHADA parallel) closes in 6 weeks. **The SAFE would not have worked** — DFI procurement requires debt-equivalent instrument.
- **Kenyan seed round closes USD 200K SAFE in 2 weeks.** No CMA involvement; private-placement exemption applies; classification dispute does not materialise. **The SAFE works in Kenya at small scale.** For a USD 2M round, the convertible note would have been the safer choice.

## Tier progression

- **Tier 1 (today).** Convertible note under existing debenture frameworks. Works cleanly across all 4 common-law jurisdictions.
- **Tier 2 (12-24 months).** Interest-deductibility and WHT simplification for labelled-startup issuers.
- **Tier 3 (3-5 years).** Codified preferential treatment for convertible notes issued by labelled startups.

## Cross-references in PASE

- **Reads from layer 1** (multi-class shares) — conversion mechanics reference the share-class architecture.
- **Reads from layer 3** (ESOP) — Capitalisation definition includes the ESOP pool pre-money.
- **Companion to layer 4 (SAFE)** — same kit shape, different instrument; convertible note is the institutionally-fundable variant. PASE recommends note over SAFE for institutional rounds; SAFE for pre-seed where speed matters most.
- **Read by layer 5** (venture debt, forthcoming) — venture debt is the senior secured version of the convertible note; structural overlap.
- **Read by layer 6** (cap table standard) — outstanding notes appear on cap table with conversion mechanics.

## Citations

**Paper:** Section 3 country profiles p. 53 (Nigeria SEC), p. 73 (Ghana SIA, Kenya CMA); Finding #1 p. 62; Recommendation #1 securities-framework provisions p. 68; Recommendation #3 financing-instrument library pp. 71-72.

**Nigerian statutes:** CAMA 2020 §§ 119, 142, 188-204, 197; CITA §§ 24, 27; PITA; CGT Act Cap C1; Stamp Duties Act Cap S8; NSA 2022 § 23; CBN Foreign Exchange Manual (2018 revision); NIPC Act Cap N117.

**Kenyan statutes:** Companies Act 2015 §§ 53, 326, 477-490, 870; ITA Cap 470 § 15; CMA Act Cap 485A § 33; Stamp Duty Act Cap 480.

**Ghanaian statutes:** Companies Act 2019 (Act 992) §§ 138-145; ITA 2015 (Act 896) §§ 9, 99; SIA 2016 (Act 929) §§ 109, 122; Stamp Duty Act 2005 (Act 689).

**South African statutes:** Companies Act 71/2008 § 43; ITA 58/1962 § 24J and Eighth Schedule; Securities Transfer Tax Act 25/2007 § 6; SARB Currency and Exchanges Manual; Security by Means of Movable Property Act 57/1993.

**Foreign:** YC Standard Convertible Note (post-2018 form, ycombinator.com); UK BVCA standard CLN; British Business Bank standard form; Singapore Companies Act § 64A; Delaware DGCL §§ 154-157.

## Template artifacts

Reference Note + NPA + Conversion Notice + side-letter (MFN, pro-rata) templates live at `content/templates/convertible-note/common-law/`. **They are not the standard**; the standard is the rules above.
