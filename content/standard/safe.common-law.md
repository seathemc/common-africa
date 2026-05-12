# Simple Agreement for Future Equity (SAFE) — PASE Standard (common-law)

> **Status:** v0.1 reference standard. Not legal advice.
> **Layer:** 4 of 7 in the PASE for Founders stack (investor instruments, friction-light variant). Pairs with the [convertible note clause](./convertible-note.common-law.md).
> **Traditions:** Common-law (Nigeria, Kenya, Ghana, South Africa). [OHADA / civil-law parallel](./safe.ohada.md).

## What PASE codifies

A PASE Corporation issues SAFEs as a friction-light early-stage financing primitive that:

1. **Is not debt** — no interest accrual, no maturity date, no creditor rights. The investor pays the Purchase Amount in exchange for a right to future equity.
2. **Auto-converts at the next Qualified Financing** into the same class as the priced round, at the lower of the Cap-Based Price (Valuation Cap ÷ Capitalisation) and the Discount Price (round price × Discount Rate).
3. **Pays out cap-priced shares on a Liquidity Event** before maturity, with the investor choosing cash or shares.
4. **Returns the Purchase Amount on Dissolution** before any distribution to common.
5. **Carries Most-Favoured-Nation rights** to subsequent SAFE terms in the same round.

The principle: **the lightest possible early-stage financing instrument that an investor will actually fund.** No negotiating maturity dates, interest rates, or repayment schedules; defer everything to the next priced round.

## Menu of instruments

The SAFE is one instrument, but its terms come as a small menu:

| Variant | Mechanics | Best fit |
|---|---|---|
| **Cap + Discount** | Conversion at the lower of cap-based and discount-based prices | Default. Most common in 2020s African seed rounds. |
| **Cap-only** | Conversion only at Cap-Based Price | Where the investor wants ceiling-protection but not floor-protection. Rare. |
| **Discount-only** | Conversion only at the Discount Price | Where the cap is unsetable (no comparable valuation precedent) but the investor wants early-round discount. |
| **MFN-only** | No cap, no discount; converts at the Qualified Financing price; MFN to subsequent SAFE terms | Friends-and-family. Aligned with founder; investor underwrites the team without pricing the company. |

**Decision rule:** Cap + Discount is the default. The other three are negotiated outcomes.

## Mechanics (PASE defaults)

| Parameter | Default | Configurable |
|---|---|---|
| Purchase Amount | Set per investor | Yes |
| Valuation Cap | Set per round, uniform within round | Yes |
| Discount Rate | 80% (i.e. 20% discount) | Yes |
| Qualified Financing threshold | Equity round at fixed pre-money raising ≥ USD 1M (or local-currency equivalent) | Yes |
| Conversion price | Lower of Cap-Based and Discount-Based | Fixed |
| Liquidity Event treatment | Investor election: cash payout of Purchase Amount, OR shares at Liquidity Price | Fixed |
| Dissolution Event | Investor recovers Purchase Amount before common | Fixed |
| MFN | Standard MFN to subsequent SAFE terms in same round | Fixed |
| Transferability | With Company consent, except to affiliates / successors | Yes |
| Maturity | None | Fixed (the entire point) |
| Interest | None | Fixed |

## The case

The SAFE was developed by Y Combinator in 2013 (post-money form, 2018) to compress early-stage financing rounds from weeks to days. The instrument has been adopted by the entire US and UK seed-stage market and is the de-facto standard for friction-light early-stage financing globally.

African common-law jurisdictions lack express statutory recognition of the SAFE:

- **Nigeria's SEC Rules 2013** classify SAFEs as debt instruments (paper p. 53), distorting accounting (interest accrual where none exists), tax (debt classification when no debt is intended), and prudential treatment. Many Nigerian growth-stage founders use Cayman or Delaware parents specifically to issue SAFEs cleanly.
- **Kenya's Capital Markets Authority** has not classified SAFEs (paper p. 73). Cautious counsel re-cast the instrument as a convertible loan with zero coupon — losing the SAFE's "not-debt" character but obtaining classification certainty.
- **Ghana's Securities Industry Act 2016** limits convertible instruments to debentures (paper p. 73). SAFEs operate in a legal grey area; founders frequently issue them via offshore entities to avoid classification dispute.
- **South Africa's Companies Act 71/2008** does not address SAFEs specifically. Practice treats them as bilateral contracts under general contract law, with exchange-control review for non-resident investors.

**The structural alternative** — issuing a convertible note instead of a SAFE (see [convertible-note.common-law.md](./convertible-note.common-law.md)) — is often *easier* in African common-law jurisdictions because debt classification is well-established. PASE provides both instruments precisely because the choice between them depends on jurisdictional clarity, investor preference, and round economics. For most African seed rounds with institutional investors today, the **convertible note is the safer instrument**; for pre-seed and angel rounds where speed matters more than classification certainty, the **SAFE remains the right choice.**

## Per-jurisdiction implementation

| Jurisdiction | Statutory hook | Today's constraint | PASE workaround | Tier 2 ask |
|---|---|---|---|---|
| **Nigeria** | SEC Rules 2013; CAMA 2020 §§ 188-204; NSA 2022 § 23 | SEC Rules classify SAFE as debt; FIRS taxes accordingly | Bilateral SAFE accompanied by side letter clarifying non-debt character. NSA § 23 mentions convertible instruments but lacks SEC implementing guidance. | SEC Rules amendment recognising SAFEs as equity-linked when issued by NSA-labelled startups |
| **Kenya** | Companies Act 2015 § 326; CMA Act Cap 485A § 33 (private-placement exemption) | CMA has not classified; cautious counsel re-cast as zero-coupon convertible loan | Bilateral SAFE under Companies Act 2015 + CMA private-placement exemption (≤ 100 investors, qualified investors) | KENIA-labelled-startup CMA rule expressly recognising SAFEs as equity-linked |
| **Ghana** | Companies Act 2019 § 138; SIA 2016 § 109 | SIA limits convertibles to debentures | Bilateral SAFE under Companies Act + SIA § 122 private-placement exemption. Often founders use convertible note instead. | SIA amendment recognising SAFEs as equity-linked for labelled-startup issuers |
| **South Africa** | Companies Act 71/2008 § 43; general contract law | Treated as bilateral contracts; SARB exchange control for non-residents | Direct SAFE under general contract law; SARB approval for non-resident investors via Currency and Exchanges Manual | None specific; SA practice is closest to direct alignment |

## Foreign comparables

- **United States — Y Combinator post-2018 SAFE** (publicly available at ycombinator.com). The canonical form globally. PASE common-law SAFE is modelled directly on this.
- **United Kingdom — Convertible Loan Note (CLN)**, BVCA standard form. UK does not have a direct SAFE equivalent; CLNs (debt with conversion) dominate the seed-stage market. Pertinent because UK investors structuring African rounds frequently negotiate against CLN templates.
- **Singapore — Convertible Note**, with similar mechanics. Singapore is heavily used as an offshore holding jurisdiction for African startups; SAFE-equivalent structures route through Singapore parents.
- **Israel — Convertible Note Y Combinator-adapted.** Israel adapted the YC SAFE for its own seed market. Israeli founders are frequent comparables for African startup founders structurally.

## How this layer relates to startup acts

For SAFEs specifically, the startup-act interaction is **at Tier 2 only**:

- **Tier 1 (today).** SAFE works bilaterally as a contract in all 4 common-law anchor jurisdictions. No startup act required. The risk is classification dispute (NG/GH) or tax-treatment ambiguity (NG/KE), not issuance prohibition.
- **Tier 2 (12-24 months).** **The startup-act amendment is securities-law, not corporate-law.** Each act needs an implementing rule from its securities regulator (SEC NG, CMA KE, SEC GH, FSCA ZA-equivalent-not-applicable) that expressly recognises SAFEs as equity-linked when issued by labelled startups. This is the highest-leverage securities-law fix in the PASE roadmap.
- **Tier 3 (3-5 years).** Statutory recognition of SAFE as a recognised security type in each Companies Act / Securities Act, with associated tax and prudential treatment.

**Notable contrast:** the convertible note (debt) layer doesn't have the same securities-law gap because debt is everywhere well-recognised. The SAFE gap is specifically about hybrid-instrument classification. This is why PASE provides both instruments — drafters in jurisdictions where the SAFE classification is contested can use the convertible note while the Tier 2 work happens in parallel.

## Failure modes (without PASE)

- **Nigerian seed round with SAFE.** Investor wires USD 250K to a Nigerian Ltd in exchange for a YC-standard SAFE. SEC Rules 2013 deem it debt; FIRS subsequently assesses Withholding Tax on the "interest" component (there is none) and the Companies Income Tax Act treats it as a balance-sheet liability. Six months of back-and-forth ensues. The PASE workaround — bilateral SAFE accompanied by side letter — reduces but does not eliminate the dispute.
- **Ghanaian seed round chooses convertible note over SAFE.** Founder counsel advises against SAFE because SIA classification is contested. The convertible note instead works cleanly under Companies Act § 138. Round closes in 4 weeks. **This is actually the right answer in Ghana today** — PASE is not "SAFE-or-bust."
- **Kenyan early-stage SAFE.** Kenyan founder issues SAFE without registering with CMA, relying on private-placement exemption under CMA Act § 33. The exemption holds (≤ 100 investors, qualified). The CMA does not interfere. Two years later, at the Series A, the SAFE converts cleanly. **This is the workable path in Kenya today.**

## Tier progression

- **Tier 1 (today).** Bilateral SAFE under general contract law + private-placement exemptions. Works in KE and ZA cleanly; works in NG and GH with side-letter mitigation.
- **Tier 2 (12-24 months).** Securities-regulator amendments (SEC NG, CMA KE, SEC GH) recognising SAFEs as equity-linked for labelled-startup issuers.
- **Tier 3 (3-5 years).** Statutory recognition of SAFE as a security type in each Companies Act / Securities Act.

## Cross-references in PASE

- **Reads from layer 1** (multi-class shares) — conversion price calculations reference the share-class architecture; on conversion the SAFE becomes a "shadow preferred" class.
- **Reads from layer 3** (ESOP) — the Capitalisation definition includes the ESOP pool pre-money.
- **Companion to layer 4 (convertible note)** — same kit shape, different instrument; drafters choose based on jurisdictional fit and investor preference.
- **Read by layer 6** (cap table standard) — outstanding SAFEs must appear on the cap table as a separate row with the conversion mechanics specified.

## Citations

**Paper:** Section 3 country profiles p. 53 (Nigeria SEC Rules 2013), p. 49 (Tunisia BCT memo, for context), p. 73 (Ghana SIA), p. 73 (Kenya CMA); Finding #1 evidence p. 62; Recommendation #1 securities-framework provisions p. 68; Recommendation #3 financing-instrument library pp. 71-72.

**Nigerian statutes:** CAMA 2020 §§ 188-204; SEC Rules 2013 (private-placement provisions); NSA 2022 § 23; Stamp Duties Act Cap S8 LFN 2004.

**Kenyan statutes:** Companies Act 2015 §§ 53, 326, 477+; CMA Act Cap 485A § 33; ITA Cap 470.

**Ghanaian statutes:** Companies Act 2019 (Act 992) § 138; SIA 2016 (Act 929) §§ 109, 122; ITA 2015 (Act 896).

**South African statutes:** Companies Act 71/2008 § 43; SARB Currency and Exchanges Manual § B.2(I).

**Foreign:** YC Standard Post-Money SAFE (ycombinator.com); UK BVCA Convertible Loan Note standard form; Singapore Companies Act § 64A; Israel YC-adapted SAFE practice.

## Template artifacts

Reference SAFE text — YC-standard adapted per jurisdiction with side-letter templates for Nigeria and Ghana — lives at `content/templates/safe/common-law/`. **They are not the standard**; the standard is the rules above.
