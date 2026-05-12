# Employee Stock Option Plan — Common-law Drafting

> **Status:** Draft v0.1 — drafted as PASE reference text, not legal advice. Adapt with qualified counsel in your jurisdiction before adoption.
>
> **Tradition:** Common-law (anchor: Nigeria; parallel notes: Kenya, Ghana, South Africa).

## Why this clause exists

The Employee Stock Option Plan is the single biggest unmet need in African corporate practice. The policy paper documents that **all six enacted-act jurisdictions lack a tax-and-labor-code framework for tax-at-liquidity equity compensation** (paper p. 63 — Finding #1 evidence and Recommendation #1 surgical-fix taxonomy). The Tunisian Code of Income Tax taxes option grants as immediate wages on theoretical values (IRPP Article 38). The Nigerian Labor Act has no equity-comp provisions. The Senegalese Code du Travail (Loi n° 97-17) Articles L.40 and L.67 impose rigid employment structures that don't accommodate variable equity grants. Across the board, African knowledge-economy employees are paid in cash for work that, in San Francisco or London, would be paid 30–60% in equity vesting toward liquidity.

The economic consequence is not abstract. Per the paper (pp. 11–12), 35% of African startup investors are now Africa-based, but **fewer than 5% of seed-stage African startups reach Series A** — a progression rate driven, among other factors, by senior-engineer attrition. Without equity comp that pays out at liquidity, African startups can't compete with offshore-domiciled employers for the talent that drives Series A graduation. Senior engineers either accept Cayman-parent options that are legally invisible to their local tax authority, or they relocate physically.

The narrative this clause exists to advance is broader than corporate finance. **It is a labor reform.** Africa's young, highly-skilled knowledge-economy workforce — 60% of the continent under 25, per UNESCO Institute for Statistics 2020 — should hold equity in the companies whose growth they build. PASE ESOP codifies the legal apparatus that makes employee ownership routine.

## What's in this kit

This clause is a kit of four documents that operate together within the company's existing common-law corporate structure. The kit does not require the company to be incorporated in any particular jurisdiction; it is drafted to integrate natively with Nigerian, Kenyan, Ghanaian, or South African company law.

1. **The Plan** — the global rules of the option program. Sets pool size, eligibility, vesting defaults, administrative authority, change-of-control mechanics, and tax-treatment elections. Adopted by the board of directors and ratified by shareholders in general meeting.
2. **The Award Agreement (Notice of Stock Option Grant)** — the per-employee instrument that grants a specific number of options at a specific exercise price with a specific vesting schedule. Issued by the board and accepted by the employee in writing.
3. **The Notice of Exercise** — the form the employee submits to exercise vested options, with the share-cash payment.
4. **The Cap Table Schedule** — the reporting attachment showing all grants, exercises, expirations, and the resulting fully-diluted ownership.

Each document is parameterised. Variables (pool size, vesting cadence, exercise window, post-termination window) are highlighted in `{{double braces}}` in the text below; the PASE defaults are stated alongside.

## Structural mechanics — the PASE defaults

These defaults reflect 2010s–2020s industry standard practice in Delaware, the UK, and Singapore, adapted for African legal traditions. They are not statutory; they are contractual choices the PASE clause encodes as defaults.

| Mechanic | PASE default | Rationale |
|---|---|---|
| Pool size | 10% of fully-diluted shares at the time of plan adoption; refreshed at each priced round | Y Combinator / a16z / Index Ventures convention for pre-Series-A cap tables |
| Vesting cadence | 48 months total, with a 12-month cliff; monthly thereafter | Industry-standard post-2010; protects the company against early-departure abuse |
| Option type | Non-statutory stock options (NSOs) at fair market value at grant | Avoids spread-at-grant tax under most African income-tax codes (no economic benefit at grant) |
| Early exercise | Permitted, with reverse vesting on the underlying shares | Lets the employee start the capital-gains clock early and minimise income-tax exposure under PIT-style codes |
| Exercise window (life of option) | 10 years from grant | Standard in every comparable regime (US, UK, France) |
| Post-termination exercise window — good leaver | 90 days from termination, automatic | Y Combinator standard; companies may extend up to 10 years for retention |
| Post-termination exercise window — bad leaver | Forfeiture | Termination for cause forfeits unexercised options |
| Acceleration on death/disability | Single trigger — 100% of unvested options vest | Industry standard; protects the employee's estate |
| Acceleration on change of control | Double trigger — 100% vests on (i) change of control plus (ii) qualifying termination within 12 months | Y Combinator / Cooley standard; balances employee protection against acquirer's retention needs |
| Liquidity event treatment | Vested options convert to shares at the change-of-control price; unvested options either accelerate (double trigger) or terminate | Specified in the Award Agreement |
| Strike price | Fair market value at grant, determined in good faith by the board | Required to avoid spread-at-grant tax under most African PIT regimes |
| Repurchase right | Company has 90-day right to repurchase exercised-but-vested shares at FMV on termination | Protects the cap table; standard in private-company plans |

## 1. The Plan — Stock Option Plan (model articles)

### 1.1 Purpose

The Plan exists to enable {{Company Name}} (the "Company") to grant options to eligible employees, consultants, and directors as a component of total compensation, in furtherance of the Company's interest in attracting and retaining the talent required to scale a venture-backed business. The Plan is established as part of {{Company Name}}'s adoption of the **Pan-African Startup Entity (PASE) standard** for venture-grade corporate structure.

### 1.2 Definitions

- **"Award Agreement"** means the written notice and grant agreement issued to a Grantee in respect of an Award.
- **"Board"** means the board of directors of the Company.
- **"Change of Control"** means (i) the sale of all or substantially all of the Company's assets, (ii) a transaction in which more than 50% of the voting shares of the Company change hands, or (iii) a merger or consolidation in which the Company is not the surviving entity (or in which the Company's shareholders immediately prior do not hold more than 50% of the surviving entity).
- **"Committee"** means a committee of the Board to which administration of the Plan has been delegated, or, in the absence of delegation, the Board itself.
- **"Disability"** means the inability of the Grantee, by reason of physical or mental impairment, to engage in any substantial gainful activity expected to result in death or to last for a continuous period of not less than 12 months, as determined by the Committee in good faith.
- **"Eligible Person"** means an employee, consultant, advisor, or non-executive director of the Company or any of its subsidiaries.
- **"Fair Market Value"** means, with respect to a share of Common Shares on a given date, the value as determined in good faith by the Committee, applying the methodology described in Section 1.7.
- **"Grantee"** means an Eligible Person who has received an Award under the Plan.
- **"Option"** means a non-statutory option to purchase Common Shares granted under this Plan.
- **"Plan"** means this Employee Stock Option Plan, as amended from time to time.
- **"Share Pool"** has the meaning given in Section 1.4.
- **"Termination Date"** means the date on which a Grantee ceases to be an Eligible Person, as determined by the Committee in good faith.

### 1.3 Administration

The Plan shall be administered by the Committee. The Committee shall have the authority to:

(a) designate the Eligible Persons to whom Awards may be granted;
(b) determine the number of Shares to be covered by each Award;
(c) determine the terms and conditions of each Award, including the vesting schedule, the exercise price, the expiration date, and the consequences of termination of service;
(d) interpret and administer the Plan and any Award Agreement;
(e) establish, amend, and rescind rules and regulations relating to the Plan; and
(f) make any other determination and take any other action that the Committee deems necessary or desirable for the administration of the Plan.

The Committee's determinations under the Plan need not be uniform and may be made selectively among Grantees.

### 1.4 Share Pool

The aggregate number of Common Shares that may be issued under the Plan shall not exceed {{X}} shares (the "Share Pool"), representing approximately **{{10%}}** of the Company's fully-diluted share capital as of the date of Plan adoption. The Share Pool shall be subject to adjustment under Section 1.10 (Adjustments).

Shares that are subject to an Award that expires, terminates, or is forfeited without issuance of the underlying Shares shall be returned to the Share Pool and shall again be available for issuance under the Plan.

The Share Pool shall be refreshed at each subsequent priced equity financing of the Company by such amount as the Board determines, subject to the consent rights of preferred shareholders set forth in the Company's articles of association and any shareholders agreement.

### 1.5 Eligibility

Awards may be granted only to Eligible Persons. The Committee shall determine, in its discretion, which Eligible Persons shall receive Awards and the number of Shares subject to each Award.

### 1.6 Award Agreement

Each Award shall be evidenced by an Award Agreement, signed by the Company and the Grantee, that sets forth: (i) the number of Shares subject to the Award; (ii) the exercise price; (iii) the vesting schedule; (iv) the expiration date; and (v) such other terms and conditions as the Committee determines.

### 1.7 Fair Market Value

The Fair Market Value of a Common Share shall be determined by the Committee in good faith, applying one or more of the following methodologies as the Committee deems appropriate:

(a) the most recent price paid by a bona fide third-party investor in an arm's-length equity financing of the Company, adjusted for material developments since;
(b) an independent valuation prepared by a qualified valuation firm using customary methodologies (discounted cash flow, comparable transactions, comparable public companies); or
(c) for early-stage companies in the period before a priced equity round, a board-determined valuation supported by a memorandum reciting the basis of the determination.

The Committee shall maintain a contemporaneous written record of the basis for each Fair Market Value determination. The intent of this section is to ensure that the exercise price of each Option is not less than Fair Market Value at the time of grant, so that no income is recognised by the Grantee at grant under the tax law of the Grantee's jurisdiction.

### 1.8 Vesting

The PASE default vesting schedule is four years of monthly vesting with a one-year cliff. Specifically, no Options shall vest before the first anniversary of the vesting commencement date; on the first anniversary, 25% of the Options shall vest; thereafter, the remaining 75% shall vest in 36 equal monthly instalments.

The Committee may, in any individual Award Agreement, accelerate, defer, or otherwise modify the vesting schedule of any Award, including by reference to performance milestones rather than (or in addition to) time-based vesting.

### 1.9 Exercise

(a) **General.** A Grantee may exercise vested Options by delivering to the Company a written notice of exercise specifying the number of Shares to be acquired, accompanied by payment of the aggregate exercise price.

(b) **Payment of exercise price.** The exercise price may be paid in cash, by cheque, by bank transfer, or — at the Committee's discretion — by net-exercise (whereby the Company withholds Shares equal in Fair Market Value to the aggregate exercise price), by cashless exercise through a broker, or by such other consideration as the Committee determines.

(c) **Early exercise.** A Grantee may elect to exercise unvested Options. Shares acquired pursuant to early exercise shall be subject to a right of repurchase by the Company at the original exercise price, lapsing in accordance with the vesting schedule applicable to the original Option. Early exercise lets the Grantee start the holding-period clock for capital-gains treatment earlier and minimise income-tax exposure under PIT-style codes.

(d) **Expiration.** Unless the Committee specifies otherwise, each Option shall expire on the tenth anniversary of the date of grant.

### 1.10 Adjustments

In the event of any change in the Common Shares by reason of a share split, reverse share split, share dividend, recapitalisation, reorganisation, merger, consolidation, or similar event, the Committee shall make equitable adjustments to (i) the number of Shares subject to the Plan, (ii) the number of Shares subject to outstanding Awards, and (iii) the exercise price of outstanding Awards, in each case as the Committee determines necessary to prevent dilution or enlargement of the rights of Grantees.

### 1.11 Termination of service

(a) **Voluntary termination by Grantee.** If a Grantee voluntarily terminates service, all unvested Options shall be forfeited on the Termination Date. Vested Options shall remain exercisable for **{{90 days}}** following the Termination Date, after which they shall expire.

(b) **Termination by the Company without cause.** If the Company terminates the Grantee's service without cause, the treatment shall be as in (a) above, unless the Committee or an Award Agreement specifies otherwise.

(c) **Termination for cause.** If the Company terminates the Grantee's service for cause, all Options (vested and unvested) shall be forfeited immediately on the Termination Date.

(d) **Death.** If the Grantee dies while in service, 100% of unvested Options shall accelerate and become vested on the date of death. The Grantee's estate may exercise such vested Options for a period of **{{12 months}}** following the date of death, after which they shall expire.

(e) **Disability.** If the Grantee's service terminates by reason of Disability, 100% of unvested Options shall accelerate and become vested on the Termination Date. The Grantee may exercise such vested Options for a period of **{{12 months}}** following the Termination Date.

### 1.12 Change of Control

(a) **Treatment of vested Options.** On a Change of Control, vested Options shall be treated as the Committee determines, including (i) conversion into the right to receive the per-share consideration paid in the Change of Control, less the exercise price, in cash or in the acquirer's securities; (ii) assumption by the acquirer under substantially equivalent terms; or (iii) accelerated exercisability followed by termination.

(b) **Double-trigger acceleration for unvested Options.** Unvested Options shall vest in full on the occurrence of both: (i) a Change of Control, and (ii) the involuntary termination of the Grantee's service by the Company (or its successor) without cause, or the constructive termination of the Grantee's service by the Grantee for good reason (as defined in the Award Agreement), in each case within 12 months following the Change of Control.

(c) **Single-trigger override.** The Committee may, in any individual Award Agreement, provide for single-trigger acceleration on Change of Control alone, without the requirement of subsequent termination.

### 1.13 Repurchase rights

The Company shall have a right (but not an obligation) to repurchase shares issued on exercise of Options from a Grantee whose service terminates, at a price equal to (i) the original exercise price, for shares acquired on early exercise that have not yet vested under the corresponding reverse-vesting schedule; or (ii) Fair Market Value, for shares fully vested. The repurchase right shall be exercisable for a period of 90 days following the later of the Termination Date and the date of exercise.

### 1.14 Restrictions on transfer

Options shall not be transferable other than by will or the laws of intestate succession. Shares issued on exercise shall be subject to the transfer restrictions, drag-along rights, tag-along rights, and rights of first refusal set forth in the Company's articles of association and any shareholders agreement.

### 1.15 Tax matters

Each Grantee is solely responsible for the tax consequences of grant, exercise, sale, and disposition of Options and the underlying Shares in the Grantee's jurisdiction. The Company makes no representation as to the tax treatment of any Award and shall not be liable for any tax incurred by the Grantee. Each Grantee is encouraged to consult independent tax counsel.

Notwithstanding the foregoing, the Company shall:

(a) maintain such records and make such filings as are required by applicable law to report Awards, exercises, and dispositions of Shares to relevant tax authorities;
(b) where required by applicable law, withhold tax from the Grantee's payroll or from the Shares deliverable on exercise; and
(c) where the Company is a labelled startup under an applicable national Startup Act and that Act provides for deferred or preferential tax treatment of equity compensation, claim such treatment on behalf of the Grantee where so authorised.

### 1.16 Amendments and termination

The Board may amend, suspend, or terminate the Plan at any time, provided that no amendment, suspension, or termination shall impair the rights of any Grantee under an Award already granted, without the consent of the affected Grantee. Amendments that require shareholder approval under the applicable companies legislation shall be submitted for such approval.

### 1.17 Compliance with applicable law

The Plan, the grant of Awards, and the issuance of Shares on exercise shall be subject to compliance with all applicable laws and regulations, including the companies, securities, tax, and labour laws of the Grantee's jurisdiction and any jurisdiction in which the Company operates. The Committee may impose such conditions on the grant and exercise of Awards as are necessary to ensure compliance.

### 1.18 Governing law

The Plan shall be governed by and construed in accordance with the laws of {{Jurisdiction of the Company's incorporation}}.

## 2. Award Agreement (Notice of Stock Option Grant) — model text

> **Notice of Stock Option Grant**
> Under the {{Company Name}} {{20XX}} Stock Option Plan (the "Plan")

| | |
|---|---|
| **Grantee** | {{Name of Grantee}} |
| **Date of Grant** | {{Date}} |
| **Number of Options** | {{N}} |
| **Exercise Price per Share** | {{$X}} (which the Committee has determined equals Fair Market Value on the Date of Grant) |
| **Vesting Commencement Date** | {{Date — typically the Grantee's start date}} |
| **Vesting Schedule** | 25% on the first anniversary of the Vesting Commencement Date; the remaining 75% in 36 equal monthly instalments thereafter |
| **Expiration Date** | The tenth anniversary of the Date of Grant |
| **Early Exercise** | Permitted under Section 1.9(c) of the Plan |

This Award is granted under, and is subject in all respects to, the Plan. Capitalised terms used but not defined in this Notice have the meanings given in the Plan.

The Grantee acknowledges receipt of a copy of the Plan and agrees to be bound by its terms.

Signed:

{{Name of Director, for the Company}} ____________________

{{Name of Grantee}} ____________________

## 3. Notice of Exercise — model text

> **Notice of Exercise of Stock Option**

The undersigned hereby exercises the Option granted under the Award Agreement dated {{Date of Grant}} as follows:

- Number of Shares being acquired: {{N}}
- Exercise price per Share: {{$X}}
- Aggregate exercise price: {{$N × X}}
- Method of payment: {{cash / cheque / bank transfer / net exercise / cashless}}

The undersigned acknowledges that, on issuance, the Shares acquired hereunder shall be subject to the transfer restrictions and other provisions of the Plan, the Company's articles of association, and any applicable shareholders agreement.

Signed: {{Name of Grantee}} ____________________ Date: {{Date}}

## 4. Tax treatment per jurisdiction

This section sets out the current tax treatment of options under each of the four anchor common-law jurisdictions, and the workaround PASE recommends to approximate "tax at liquidity" within the existing statutory frame.

### 4.1 Nigeria

**Current treatment.** Nigeria's Personal Income Tax Act (PITA) 2011 (as amended) treats employment income broadly under Section 3 and the First Schedule. The Federal Inland Revenue Service (FIRS) and the State Internal Revenue Services have not issued option-specific guidance, with the consequence that practitioners treat options as taxable as employment income on the spread between Fair Market Value at exercise and the exercise price. Tax is due at exercise, at the Grantee's marginal income-tax rate (up to 24%). There is no spread-at-grant tax where the exercise price equals Fair Market Value at grant (because there is no economic benefit at grant).

**Nigeria Startup Act interaction.** Schedule 3 of the Nigeria Startup Act 2022 establishes pioneer-status tax incentives for labelled startups. Schedule 3 does not directly address employee equity compensation. The FIRS coordination required to integrate Schedule 3 with PITA is still in progress two years after enactment (paper p. 4). PASE's national-level recommendation for Nigeria includes a Finance Act amendment auto-recognising NSA label as pioneer status for FIRS purposes and a parallel PIT carve-out for equity compensation issued by NSA-labelled startups (see country recommendation `ng-labor-esop` in `data/startup-acts.json`).

**PASE workaround within current law.** The Award Agreement should structure the Option as a non-statutory option at Fair Market Value at grant, with permitted early exercise. Where the Grantee elects early exercise, they pay the exercise price up front, the resulting Shares are subject to reverse vesting, and the holding-period clock for capital-gains treatment begins. On eventual liquidity, the Grantee pays capital gains (currently 10% under the Capital Gains Tax Act, Cap C1, LFN 2004) on the spread between sale price and exercise price, rather than ordinary income tax (up to 24%) on the same spread at the point of exercise.

The economic effect approximates "tax at liquidity" but requires the Grantee to put up cash for the early-exercise. For employees who cannot do so, the alternative is a Restricted Share Unit structure that vests directly at the liquidity event — see Section 5 (Implementation notes).

### 4.2 Kenya

**Current treatment.** The Income Tax Act, Cap 470, treats employment income broadly under Section 5. The Kenya Revenue Authority (KRA) has issued guidance treating stock options as taxable employment income on the spread at exercise, at the Grantee's marginal income-tax rate (up to 30%). Capital gains on the subsequent sale of shares are subject to the Capital Gains Tax Act 2015 at 15%.

**Kenya Startup Bill interaction.** The Kenya Startup Bill 2022 has been passed and awaits regulatory implementation. The Bill does not address employee equity compensation directly. PASE's national-level recommendation for Kenya includes Bill amendments codifying multi-class share defaults and SAFE/convertible-note recognition (see country recommendations `ke-companies-act-multiclass` and `ke-cma-convertibles`).

**PASE workaround within current law.** As Nigeria — non-statutory option at FMV at grant, with permitted early exercise. Where the Grantee elects early exercise, capital-gains treatment applies to subsequent appreciation. The Companies Act 2015 expressly permits multi-class shares (Section 326), so the PASE structure works within statute without requiring a Startup Bill amendment to take effect.

### 4.3 Ghana

**Current treatment.** The Income Tax Act 2015 (Act 896) treats employment income broadly under Sections 4 and 6. The Ghana Revenue Authority has not issued option-specific guidance; practitioners treat options as taxable as employment income on the spread at exercise, at the Grantee's marginal income-tax rate (up to 30%). Capital gains on subsequent sale of shares are subject to Section 99 of the Income Tax Act 2015 at 15%.

**Ghana Startup Act interaction.** Ghana's Draft Startup Act has been submitted in final form and awaits legislative approval. The draft does not address employee equity compensation directly. PASE's national-level recommendation for Ghana includes Securities Industry Act 2016 (Act 929) amendments recognising SAFEs and convertible notes for labelled startups (see country recommendation `gh-securities-industry-act`).

**PASE workaround within current law.** As Nigeria and Kenya — non-statutory option at FMV at grant, with permitted early exercise.

### 4.4 South Africa

**Current treatment.** South Africa has the most developed equity-compensation tax regime in Africa. Section 8C of the Income Tax Act 58 of 1962 governs the taxation of "restricted equity instruments" issued to employees. Section 8C taxes the gain on a restricted equity instrument at the time the restriction lapses (i.e., at vesting), based on the Fair Market Value of the instrument at that time, less the exercise price. The Grantee is taxed at marginal income-tax rates (up to 45%). Subsequent appreciation is taxed as capital gains on disposal.

The Section 8C regime is helpful in that it provides a clear statutory framework, but the tax is triggered at vesting rather than at sale — the Grantee may face a substantial income-tax bill on options that have appreciated significantly but are not yet liquid.

**South African startup framework interaction.** South Africa does not yet have an enacted Startup Act. The current PASE national-level recommendation for South Africa includes legislating a Section 12J successor (for VC tax incentives) and amending Companies Act 71 of 2008 to codify multi-class share defaults (see country recommendations `za-12j-replacement` and `za-companies-act-multiclass`).

**PASE workaround within current law.** Companies Act 71 of 2008 expressly permits multi-class shares, so structurally the PASE ESOP fits within South African statute. For the tax-at-liquidity goal, the practical workaround is to issue options with vesting tied to liquidity events rather than to time (i.e., the option vests only on the occurrence of a Change of Control), so that the Section 8C taxable event is the same as the Grantee's liquidity event. This structure forfeits the labour-market incentive of time-based vesting but is the only structure that approximates tax-at-liquidity within Section 8C as currently drafted.

## 5. Labour-law integration per jurisdiction

This clause is drafted to operate within the existing labour-law framework of each anchor jurisdiction. Awards are granted under the Plan, not under the employment contract. The employee's rights under the Award Agreement survive ordinary employment law in the same way that a bonus declaration or a benefit-in-kind survives — the Award Agreement is a separate contract between the Grantee and the Company, governed by the law specified in the Plan.

### 5.1 Nigeria — Labour Act, Cap L1, LFN 2004

The Labour Act applies primarily to "workers" performing manual labour, with carve-outs in Section 91 for technical, administrative, professional, executive, and managerial roles. Most ESOP Grantees in startups fall within the carve-out and are governed by general contract law rather than the Labour Act. The Plan and Award Agreement should be structured as commercial contracts, executed by the Grantee in writing, and entered into in conjunction with (but not as part of) the employment contract.

**Pension and payroll-tax considerations.** The Pension Reform Act 2014 defines "monthly emoluments" for pension contribution purposes by reference to basic salary, housing, and transport allowances. Unvested options and unexercised vested options are not "monthly emoluments" and do not attract pension contributions. On exercise, the spread between FMV and exercise price (if any) is treated as employment income for PIT purposes — see Section 4.1.

**Industrial Training Fund.** ITF contributions are calculated on payroll. As with pension, options outside payroll do not attract ITF contributions.

### 5.2 Kenya — Employment Act 2007 and Employment and Labour Relations Court Act 2011

The Employment Act 2007 governs the employment relationship but does not directly regulate equity compensation. The Plan and Award Agreement should be structured as commercial contracts ancillary to the employment contract. The Employment and Labour Relations Court has jurisdiction over disputes arising from the employment relationship, including disputes over equity compensation tied to employment terms — Award Agreements should specify the Plan's governing law and forum (typically the High Court of Kenya, commercial division) to avoid jurisdictional ambiguity.

**NSSF and NHIF contributions.** Equity compensation outside cash payroll does not attract NSSF or NHIF contributions.

### 5.3 Ghana — Labour Act 2003 (Act 651)

Section 17 (termination) and Section 64 (remuneration) of the Labour Act 2003 are the principal touchpoints. As with Nigeria and Kenya, the Plan and Award Agreement should be structured as commercial contracts ancillary to the employment contract. Section 64 defines remuneration broadly for severance and notice-period purposes; the Award Agreement should specify that the value of unvested or unexercised options does not form part of "remuneration" for those purposes, to avoid disputes on termination.

### 5.4 South Africa — Labour Relations Act 66 of 1995 and Basic Conditions of Employment Act 75 of 1997

The South African labour regime is the most developed and most protective of African common-law jurisdictions. The Plan should be drafted to interact predictably with the Basic Conditions of Employment Act's remuneration definitions and the Labour Relations Act's unfair-dismissal provisions. Where an employee is dismissed and there is an open question whether the dismissal was procedurally fair, vested options may become a subject of the CCMA or Labour Court proceedings. The Award Agreement should specify forfeiture rules clearly — particularly the definition of "cause" — to minimise post-termination dispute.

## 6. Comparable foreign regimes — what we are codifying African equivalents of

PASE ESOP is not invented from scratch; it is an African expression of the structures that have worked elsewhere. The clause cites the following comparables expressly so that drafters and regulators can verify the underlying logic.

**Spain — Ley 28/2022 ("Ley de Startups").** Article 5 of the Spanish Startup Law amends Article 42 of the Personal Income Tax Law to defer taxation of employee stock options issued by ENISA-labelled startups to the moment of liquidity (sale of the underlying shares), rather than at grant or exercise. The taxation occurs at the lesser of capital gains rates or income tax rates as specified in Article 5. This is the cleanest legislative precedent for the "tax at liquidity" goal that PASE Tier 2 advocates for African jurisdictions. (Reference: BOE-A-2022-23845, 22 December 2022.)

**France — BSPCE (Bons de Souscription de Parts de Créateur d'Entreprise).** Code Général des Impôts Article 163 bis G provides a preferential tax regime for stock options issued by French startups under 15 years old with capitalisation under €150 million. Tax is paid only on disposal of the underlying shares (not at grant or exercise), at a flat 12.8% if held less than 3 years, with progressive reduction thereafter. BSPCE is the model for the OHADA version of this clause — see the parallel OHADA drafting.

**United Kingdom — Enterprise Management Incentive (EMI).** Income Tax (Earnings and Pensions) Act 2003, Schedule 5. EMI options issued by qualifying small companies (gross assets under £30M, fewer than 250 employees) are exempt from income tax at grant and exercise; capital gains tax (with Business Asset Disposal Relief at 10%) applies on disposal. EMI is the most generous statutory option regime in any common-law jurisdiction and the structural model PASE Tier 3 advocates for as a statutory enhancement to African company law.

**Delaware — Incentive Stock Option (ISO) and Non-Statutory Option (NSO).** Internal Revenue Code §422 (ISO) and §83 (NSO). ISOs grant tax-favoured treatment subject to a $100,000-per-year vesting cap and disqualifying-disposition rules; NSOs are taxed as ordinary income on the spread at exercise. The PASE common-law clause is modelled on the NSO structure (no statutory tax preference at grant; spread taxed as employment income at exercise; capital gains on subsequent appreciation) because no African jurisdiction has an ISO-equivalent statutory regime yet.

## 7. Failure modes — what happens without PASE

This section catalogs the operational failures the PASE ESOP exists to remedy. These are drawn from the policy paper and from documented practice across the four anchor jurisdictions.

**Tunisia (illustrative).** A senior machine-learning engineer at a Tunis-headquartered AI startup is granted options under the company's plan. Under IRPP Article 38, the grant is taxed at exercise as employment income on the theoretical value of the spread, at the engineer's marginal rate (up to 35%). Because the company is privately held and the shares are illiquid, the engineer has no source of cash to pay the tax. The practical outcomes documented in the paper are: (i) the engineer declines the options and accepts a higher cash salary, foregoing the equity upside; (ii) the engineer migrates onto the payroll of the company's UK or US parent and is paid in foreign-jurisdiction options that are invisible to Tunisian tax administration; or (iii) the engineer physically relocates to the parent's jurisdiction within 24 months of joining.

**Nigeria (illustrative).** A growth-stage Lagos fintech maintains its operating entity as a Nigerian Limited Company under CAMA 2020 but issues options to engineers under the company's Cayman holding company's stock option plan. The Nigerian PIT system does not have a clean mechanism for assessing tax on the Cayman options. The company does not withhold Nigerian PIT on the option grant or exercise because it considers the option to be a foreign-source benefit. The Federal Inland Revenue Service has begun, sporadically, to issue back-assessments under Section 81 of PITA on the theory that the option is "income arising from a source in Nigeria" because the underlying work is performed in Nigeria. Each contested assessment costs the company and the engineer six-figure legal fees and creates substantial reputational risk. The PASE structure — domestic option granted on the Nigerian company's own shares, with FMV-at-grant pricing and early-exercise availability — eliminates this entire category of exposure.

**Senegal (illustrative).** A Senegalese SARL operating in fintech wishes to issue options to its lead engineering hires. OHADA AUSCGIE Article 39's default one-share-one-vote rule and Articles 309–314's rigid capital requirements make domestic option issuance impractical in an SA. The company restructures as an SAS (which has statutory flexibility under OHADA), but BCEAO Instruction 2012-09 only recognises traditional debt and equity, leaving the underlying option-on-future-equity structure in a legal grey area. The company in practice routes the options through a Mauritius parent. The Senegalese tax authority (DGID) does not recognise the offshore options for any purpose; the Senegalese Code du Travail does not provide a framework for unvested-equity disputes. On a hypothetical exit, the engineer's economic rights are entirely a function of the Mauritius shareholders agreement, which DGID and Senegalese courts have no jurisdiction over.

**Cross-cutting.** The aggregate effect across the four anchor common-law jurisdictions is that senior knowledge-economy talent at African startups either accepts opaque offshore-parent equity (with associated legal risk to both employee and company), declines equity entirely, or relocates. The paper documents that approximately 30% of senior engineering talent at growth-stage African startups physically relocates within three years of joining; PASE ESOP exists to make that decision economically unnecessary.

## 8. Implementation notes per jurisdiction

For the local law firm engaged to adopt the PASE clause for a specific company, the following implementation steps anchor each jurisdiction.

### 8.1 Nigeria — Nigerian Limited Liability Company under CAMA 2020

1. Confirm the company's articles of association permit issuance of share classes (or amend to do so under Section 124(2), noting the legal tension until the section is amended for NSA-labelled startups).
2. Pass a board resolution adopting the Plan, fixing the Share Pool at 10% of fully-diluted, and authorising the Committee.
3. Pass an ordinary resolution of shareholders ratifying the Plan, noting any pre-emption-right waivers required under CAMA Section 142.
4. File the resolutions with the Corporate Affairs Commission within 15 days of passage under CAMA Section 119.
5. For each grant: pass a board resolution granting the Option, issue the Award Agreement, log the grant in the cap table, and update the share register on exercise.
6. If the company is NSA-labelled, request from the FIRS a private ruling confirming that PIT will not be assessed on grant where the exercise price equals FMV; in the absence of a ruling, accompany the Plan with a side letter to the Grantee clarifying the position.
7. Maintain contemporaneous FMV documentation under Section 1.7 of the Plan.

### 8.2 Kenya — Kenyan Limited Company under Companies Act 2015

1. Confirm or amend the articles of association to authorise the Plan's share class (multi-class share structures are expressly permitted under Section 326 of the Companies Act 2015).
2. Board and shareholder resolutions as in Nigeria.
3. File the resolutions with the Business Registration Service under Section 53 of the Companies Act 2015.
4. Maintain the register of allotments and the register of members under Sections 95 and 96.
5. KRA: file PAYE returns reflecting the grant and exercise of options under the Employer's Guide to PAYE (revised 2024); request a KRA ruling for cases where the company is KENIA-aligned and a deferred-tax position is sought.

### 8.3 Ghana — Ghana Limited Company under Companies Act 2019 (Act 992)

1. Confirm or amend the regulations of the company to authorise the Plan's share class (multi-class share structures are expressly permitted under Section 31 of the Companies Act 2019).
2. Board and shareholder resolutions as above.
3. File the resolutions with the Registrar-General's Department under Section 32.
4. Maintain the register of members.
5. GRA: PAYE filings reflecting the grant and exercise of options.

### 8.4 South Africa — Private Company under Companies Act 71 of 2008

1. Confirm the Memorandum of Incorporation permits the share class (Section 36 of the Companies Act 71 of 2008 expressly permits more than one class of shares).
2. Board resolution adopting the Plan; special resolution of shareholders to the extent required by the MOI.
3. Filing of the MOI amendment (if any) with the Companies and Intellectual Property Commission under Section 16.
4. JSE listing requirements do not apply to private companies; for companies contemplating an IPO, additional disclosure requirements will apply under the JSE Listings Requirements.
5. SARS: Section 8C reporting; PAYE on the spread at vesting; CGT on disposal. Where the company wishes to approximate tax-at-liquidity, structure the option as liquidity-vested (see Section 4.4 above).

## 9. Source citations

This clause is drafted with reference to:

**The policy paper.** *Integrating Africa's Startup Acts: Building a Legal Architecture for a Single Digital Market.* Specifically:
- Section 3, country-by-country review of Africa's enacted startup acts, pp. 49–55 (Tunisia, Senegal, DRC, Nigeria, Ivory Coast, Ethiopia).
- Section 4, Finding #1: Startup acts introduce new layers alongside existing laws, pp. 62–63 (Recommendation: targeted updates to existing laws rather than parallel systems).
- Section 5.1, Core Recommendation #1: National level — surgical code fixes with digital rails, p. 68 (Labour law modifications enabling equity-based compensation with tax obligations deferred until liquidity events).
- Section 5.3, Ecosystem Recommendation #3: Industry level — Pan-African Startup Entity, pp. 71–72 (Standardised ESOP framework, vesting provisions, appropriate tax treatment at liquidity rather than grant).

**Nigerian statutes and regulations.**
- Companies and Allied Matters Act 2020, Sections 119, 124, 142.
- Personal Income Tax Act, Cap P8, LFN 2004 (as amended), Sections 3, 81; First Schedule.
- Labour Act, Cap L1, LFN 2004, Section 91.
- Pension Reform Act 2014, Section 4.
- Capital Gains Tax Act, Cap C1, LFN 2004, Section 2.
- Nigeria Startup Act 2022, Sections 13, 23, Schedule 3.

**Kenyan statutes and regulations.**
- Companies Act 2015, Sections 53, 95, 96, 326.
- Income Tax Act, Cap 470, Section 5; Eighth Schedule.
- Capital Gains Tax Act 2015 (Finance Act amendment).
- Employment Act 2007.

**Ghanaian statutes and regulations.**
- Companies Act 2019 (Act 992), Sections 31, 32.
- Income Tax Act 2015 (Act 896), Sections 4, 6, 99.
- Labour Act 2003 (Act 651), Sections 17, 64.
- Securities Industry Act 2016 (Act 929).

**South African statutes and regulations.**
- Companies Act 71 of 2008, Sections 16, 36.
- Income Tax Act 58 of 1962, Section 8C.
- Labour Relations Act 66 of 1995.
- Basic Conditions of Employment Act 75 of 1997.

**Foreign comparable regimes.**
- Spain: Ley 28/2022, de fomento del ecosistema de las empresas emergentes, Article 5. BOE-A-2022-23845.
- France: Code Général des Impôts, Article 163 bis G (BSPCE regime).
- United Kingdom: Income Tax (Earnings and Pensions) Act 2003, Schedule 5 (EMI regime).
- United States: Internal Revenue Code §83 (NSO regime), §422 (ISO regime).

**PASE internal references.**
- PASE multi-class shares clause (common-law) — interlocks with Section 1.4 (Share Pool) of this Plan.
- PASE SAFE clause (common-law) — interlocks with Section 1.10 (Adjustments) and the Award Agreement's vesting commencement date for early-stage hires.

## 10. Open questions for review

1. **Pool refresh mechanics.** The PASE default refreshes the Share Pool at each priced equity round. Drafters should consider whether to specify a fixed refresh percentage (e.g., +5% of fully-diluted at each round) versus a board-determined refresh. Industry practice varies.
2. **Post-termination exercise window.** The PASE default is 90 days, matching Y Combinator and Cooley standards. Founder-friendly practice (e.g., Pinterest, Quora's plans pre-IPO) extends to 7–10 years. Drafters should consider whether the PASE default should be extended to a longer post-termination window for founder retention reasons, with cost-of-cap-table-management considered.
3. **Cause definition.** "Cause" for forfeiture purposes should be defined narrowly in the Award Agreement. The PASE default suggests material breach of fiduciary duty, gross negligence, conviction of a crime, or willful misconduct, but the precise definition will depend on the jurisdiction's labour law and the company's risk appetite.
4. **Drag-along and tag-along interaction.** The clause assumes the Company's articles of association include standard drag-along and tag-along rights. Drafters should confirm interaction with the PASE shareholder agreement (forthcoming clause), particularly for the treatment of exercised but unrealised options at a Change of Control.
5. **Phantom-equity alternative.** For jurisdictions where the option structure cannot be made tax-efficient (notably South Africa's Section 8C regime, and Tunisia's IRPP Article 38), drafters should consider a parallel Phantom Equity Plan that delivers cash at liquidity equal to the spread the option would have produced. The PASE roadmap includes such a plan as a parallel clause.
