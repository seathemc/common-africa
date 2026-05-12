# Convertible Note — Common-law Drafting

> **Status:** Draft v0.1 — drafted as PASE reference text, not legal advice. Adapt with qualified counsel in your jurisdiction before adoption.
>
> **Tradition:** Common-law (anchor: Nigeria; parallel notes: Kenya, Ghana, South Africa).

## Why this clause exists

The PASE library already includes a SAFE clause. The Convertible Note sits alongside it as the second early-stage financing primitive, drafted for the same eight common-law and OHADA jurisdictions. The two instruments differ in legal character, regulatory treatment, and economics. They are not substitutes; they are complements, with the SAFE optimised for friction-light pre-seed and seed rounds and the Convertible Note optimised for situations where the investor or the regulator requires a debt-like instrument with explicit creditor rights.

The case for the Convertible Note in the African common-law context is operational, not theoretical:

- **Securities recognition is asymmetric.** SAFEs are classified as debt by the Nigerian SEC Rules 2013 (paper p. 53) and treated as debt by the Tunisian BCT memo of February 2020 (paper p. 49). The convertible note, by contrast, *is* debt and falls within the well-established debenture frameworks of every common-law African jurisdiction (Nigerian CAMA 2020 Sections 188–204; Kenyan Companies Act 2015 Sections 477–490; Ghanaian Companies Act 2019 Sections 138–145; South African Companies Act 71/2008 Section 43). The convertible note is *easier* to issue cleanly than the SAFE in these jurisdictions because its classification is not in dispute.
- **Investor preference varies by stage and risk appetite.** Friends-and-family and angel rounds in the US and UK commonly use SAFEs because the convertible note's interest accrual and maturity-date repayment risk are not material at that scale. African angel and seed rounds frequently feature institutional investors (DFIs, regional VC firms, family offices) for whom the creditor protections of a convertible note are a procurement requirement, not a preference.
- **Maturity-date enforcement is a foreign-exchange consideration.** Cross-border financings into African jurisdictions face Central Bank approval requirements on capital flows. A convertible note's maturity date provides an enforceable repayment obligation that satisfies CBN, BCEAO, and analogous regulator review more cleanly than a SAFE's open-ended forward-equity right.

The convertible note is not redundant to the SAFE. It is the instrument PASE recommends when (i) the investor requires debt-like protections, (ii) the regulator's preference is for debt over hybrid instruments, or (iii) the company wants to preserve optionality on whether the round will price within a defined window.

## What's in this kit

The kit consists of three documents.

1. **The Convertible Note (the "Note")** — the bilateral debt instrument issued by the Company to the Investor. Sets principal, interest, maturity, conversion mechanics, change-of-control treatment, and default provisions.
2. **The Note Purchase Agreement (the "NPA")** — the agreement under which one or more Notes are issued, including representations and warranties, conditions to closing, and (where multiple Investors participate in a single round) the allocation among Investors.
3. **The Conversion Notice** — the form by which the Investor elects (or the Company elects, depending on the trigger) to convert the outstanding principal and accrued interest into shares.

A side letter for most-favoured-nation rights, information rights, and pro-rata rights is provided as an optional fourth document. It is recommended for institutional Investors and not necessary for most angel and friends-and-family rounds.

## Structural mechanics — the PASE defaults

These defaults reflect 2010s–2020s industry standard practice in Delaware, the UK, and Singapore, and have been adapted for the four anchor common-law African jurisdictions. They are not statutory; they are contractual choices that the PASE clause encodes as defaults and that a drafter may modify on a per-deal basis.

| Mechanic | PASE default | Rationale |
|---|---|---|
| Principal | The Purchase Amount the Investor pays at closing | Defined per Note |
| Interest rate | 5% per annum, simple interest, accrued monthly | Market standard for African seed-stage convertible notes; high enough to compensate for time value of money but low enough to avoid Sharia/usury-rule and tax-deductibility issues |
| Interest calculation | Simple, not compounded | Avoids over-accrual and Sharia-finance concerns; simpler tax treatment |
| Maturity date | 24 months from issuance | Provides the company a runway long enough to reach a priced round; extension by mutual consent |
| Qualified Financing | Equity financing raising at least USD 1 million (or local-currency equivalent) at a fixed pre-money valuation | The trigger for automatic conversion |
| Conversion price — capped | Cap-based: Valuation Cap divided by Company Capitalisation immediately prior to the Qualified Financing | Caps the upside the Investor gives up if the Company raises at a higher valuation |
| Conversion price — discounted | Discount-based: Qualified Financing price multiplied by Discount Rate (default 80%, i.e. 20% discount) | Compensates the Investor for the early-stage risk |
| Conversion price applied | The lower of capped and discounted price | Standard YC / Cooley structure |
| Valuation Cap | Set per deal; PASE provides no default | Negotiated outcome |
| Maturity treatment | At maturity: holder may elect (i) repayment of principal + accrued interest, or (ii) conversion at a Maturity Conversion Price equal to the Valuation Cap divided by Capitalisation as of maturity | Avoids the unintended consequence of an unfunded balloon at maturity if the Company is solvent but has not raised |
| Change of Control | Investor may elect (i) repayment of principal + accrued interest plus a Change of Control Premium (default 1× principal), or (ii) conversion at the Change of Control Price (typically the Valuation Cap divided by Capitalisation) | Provides downside protection while allowing the Investor to participate in upside |
| Most-Favoured-Nation | The Investor receives the benefit of any more favourable terms (cap, discount, maturity, interest) offered to subsequent convertible-note investors in the same round | Standard YC convertible note provision |
| Subordination | The Note is subordinated to all senior secured debt of the Company but ranks senior to common equity | Avoids conflict with bank facilities |
| Security | Unsecured by default | Avoids requirement for secured-transaction filing (NSE / CAC charge in Nigeria; CR12 charge in Kenya); secured variants available on negotiation |
| Default | Customary debt-default provisions: failure to pay, insolvency, material breach, cross-default to other indebtedness above USD 100K | Aligned with African common-law debenture conventions |
| Pro-rata rights | Standard pro-rata rights in subsequent priced rounds, surviving conversion | In the side letter |

## 1. The Convertible Note — model text

### 1.1 Recitals

THIS CONVERTIBLE PROMISSORY NOTE (the "Note") is issued on {{Date}} by {{Company Name}}, a {{[Nigerian limited liability company / Kenyan limited company / Ghanaian limited company / South African private company]}} (the "Company"), to {{Investor Name}} (the "Investor").

WHEREAS, the Investor is providing the Purchase Amount to the Company in exchange for the Company's promise to repay or convert that amount in accordance with this Note;

WHEREAS, this Note is issued in connection with the Note Purchase Agreement dated {{Date}} between the Company and the Investor (and, if applicable, the other Investors named therein);

NOW THEREFORE, in consideration of the mutual covenants and agreements contained herein, the parties agree as follows.

### 1.2 Definitions

- **"Capitalisation"** means, at any time, the total number of shares of all classes of stock of the Company outstanding on a fully diluted basis, including (i) all issued and outstanding shares, (ii) all shares issuable on exercise of outstanding options and warrants, (iii) all shares reserved for issuance under the Company's equity incentive plan, but excluding (iv) shares issuable on conversion of this Note and any other outstanding convertible securities of the Company.
- **"Change of Control"** means (i) the sale of all or substantially all of the Company's assets, (ii) a transaction in which more than 50% of the voting shares of the Company change hands, or (iii) a merger or consolidation in which the Company is not the surviving entity, or in which the Company's shareholders immediately prior do not hold more than 50% of the surviving entity, in each case in a single transaction or a series of related transactions.
- **"Change of Control Premium"** means an amount equal to {{1.0×}} the principal amount of this Note.
- **"Change of Control Price"** means a price per share equal to the Valuation Cap divided by the Capitalisation immediately prior to the Change of Control.
- **"Conversion Price"** has the meaning given in Section 1.3.
- **"Discount Rate"** means {{80%}}, representing a 20% discount.
- **"Maturity Date"** means the date that is {{24 months}} after the date of issuance of this Note.
- **"Maturity Conversion Price"** means a price per share equal to the Valuation Cap divided by the Capitalisation as of the Maturity Date.
- **"Qualified Financing"** means a bona fide transaction or series of transactions with the principal purpose of raising capital, pursuant to which the Company issues and sells preferred shares at a fixed pre-money valuation, in an aggregate amount of not less than {{USD 1,000,000}} (or the local-currency equivalent at then-prevailing rates) including the principal amount of this Note and any other Notes issued in the same round.
- **"Purchase Amount"** means {{$X}}, the amount paid by the Investor for this Note.
- **"Valuation Cap"** means {{$Y}}, the post-money valuation cap applicable on conversion.

### 1.3 Principal and interest

The Company hereby promises to pay to the Investor the Purchase Amount, together with simple interest accruing at the rate of {{5%}} per annum from the date of issuance, in accordance with the provisions of this Note.

Interest shall be calculated on the basis of a 365-day year and shall accrue monthly. Interest shall not compound; the Company's obligation in respect of interest is limited to the simple-interest accrual over the period the Note is outstanding.

### 1.4 Conversion on Qualified Financing

If a Qualified Financing occurs before the Maturity Date and before any Change of Control or default, then on the closing of the Qualified Financing this Note shall automatically convert into the number of shares of the same class as those issued in the Qualified Financing, computed as follows:

(a) the outstanding principal and accrued but unpaid interest under this Note, divided by

(b) the Conversion Price, which is the lower of (i) the Cap-Based Conversion Price, equal to the Valuation Cap divided by the Capitalisation immediately prior to the Qualified Financing, and (ii) the Discount-Based Conversion Price, equal to the price per share of preferred shares sold in the Qualified Financing multiplied by the Discount Rate.

The shares issued on conversion shall be subject to the same rights, preferences, privileges, and restrictions as the shares sold in the Qualified Financing, except that, where the Conversion Price is the Cap-Based Conversion Price and is lower than the price paid by other investors in the Qualified Financing, the shares issued to this Investor shall be denominated as a separate sub-class with a per-share liquidation preference equal to the Conversion Price (a "shadow preferred" structure).

### 1.5 Treatment on Change of Control

If a Change of Control occurs before the Maturity Date and before any Qualified Financing, the Investor shall, by written notice delivered to the Company not later than 10 business days following notice of the proposed Change of Control, elect either:

(a) **Repayment with Premium.** Repayment of the outstanding principal and accrued interest, plus the Change of Control Premium, in cash at the closing of the Change of Control; or

(b) **Conversion.** Conversion of the outstanding principal and accrued interest into common shares of the Company at the Change of Control Price, with such common shares to participate in the Change of Control on the same terms as other holders of common shares.

If the Investor fails to make an election within the 10-business-day period, the Investor shall be deemed to have elected Repayment with Premium.

### 1.6 Treatment on Maturity

If neither a Qualified Financing nor a Change of Control has occurred on or before the Maturity Date, the Investor shall, by written notice delivered to the Company not later than 30 days following the Maturity Date, elect either:

(a) **Repayment.** Repayment of the outstanding principal and accrued interest in cash, within 60 days of the Maturity Date; or

(b) **Maturity Conversion.** Conversion of the outstanding principal and accrued interest into common shares (or, if a separate "Conversion Series" of preferred shares has been authorised in the Company's articles for this purpose, into such Conversion Series shares) at the Maturity Conversion Price.

If the Investor fails to make an election within the 30-day period, the Investor shall be deemed to have elected Maturity Conversion.

### 1.7 Most-Favoured-Nation

If the Company issues any Convertible Note or similar convertible instrument after the issuance of this Note and before the conversion or repayment of this Note (a "Subsequent Note") with terms more favourable to the holder than the terms of this Note (whether as to interest rate, Valuation Cap, Discount Rate, Maturity Date, Change of Control Premium, or otherwise), the Company shall promptly notify the Investor and the Investor shall have the right to elect to have those more favourable terms apply to this Note, by written notice delivered to the Company within 15 business days of the Company's notice. This MFN right does not apply to the Qualified Financing itself or to any priced equity round.

### 1.8 Subordination

This Note is subordinated to all secured indebtedness of the Company, including any bank facility, credit line, equipment financing, or other senior debt. This Note ranks senior to common equity and pari passu with other Notes issued in the same round.

### 1.9 Representations and warranties of the Company

The Company represents and warrants to the Investor as of the date of issuance that:

(a) it is a {{corporate form}} duly incorporated, validly existing, and in good standing under the laws of {{Jurisdiction}};

(b) it has full corporate power and authority to issue this Note;

(c) the issuance of this Note has been duly authorised by all necessary corporate action and does not contravene the Company's articles of association, any shareholders agreement, or any applicable law;

(d) the Company has obtained all consents, approvals, and authorisations required for the issuance of this Note (including, where applicable, regulatory approvals under the Nigeria Investment Promotion Commission Act, Kenya Capital Markets Authority Act, Ghana Securities Industry Act, or South African Reserve Bank exchange-control regulations); and

(e) the Company is not in default of any material indebtedness or obligation, and the issuance of this Note will not cause a default under any agreement to which the Company is a party.

### 1.10 Representations and warranties of the Investor

The Investor represents and warrants to the Company as of the date of issuance that:

(a) it has full legal capacity and authority to enter into this Note;

(b) it is purchasing this Note for its own account, not as a nominee, and not with a view to resale in connection with any distribution within the meaning of applicable securities laws;

(c) it understands that this Note has not been registered under the securities laws of any jurisdiction and may not be transferred except in accordance with applicable securities laws;

(d) it is a "sophisticated investor" or "professional investor" within the meaning of the securities regulations of {{Jurisdiction}}, or has the financial sophistication and net worth necessary to evaluate the merits and risks of the investment.

### 1.11 Events of default

Each of the following constitutes an event of default:

(a) failure of the Company to pay any amount due under this Note within 10 business days of when due;

(b) any voluntary or involuntary insolvency, bankruptcy, winding-up, or receivership of the Company;

(c) any breach by the Company of a material representation, warranty, or covenant in this Note or the Note Purchase Agreement, not cured within 30 days of notice;

(d) cross-default to any other indebtedness of the Company exceeding {{USD 100,000}} (or local-currency equivalent).

On the occurrence of an event of default, the Investor may, by written notice to the Company, declare the principal and accrued interest immediately due and payable.

### 1.12 Transfer restrictions

The Investor may not transfer this Note without the prior written consent of the Company, except to (i) an affiliate of the Investor, (ii) any successor entity in a corporate reorganisation, or (iii) any party in a private resale that complies with applicable securities laws and that delivers to the Company a representation as to "sophisticated investor" or "professional investor" status equivalent to the Investor's.

### 1.13 Governing law

This Note shall be governed by and construed in accordance with the laws of {{Jurisdiction}}. Any dispute arising under this Note shall be resolved by {{the High Court of [Jurisdiction] / arbitration under [the rules of the Lagos Court of Arbitration / Nairobi Centre for International Arbitration / Arbitration Foundation of Southern Africa]}}.

### 1.14 Miscellaneous

(a) **Entire agreement.** This Note, together with the Note Purchase Agreement, constitutes the entire agreement between the parties with respect to the subject matter.

(b) **Amendment.** This Note may be amended only by written agreement between the Company and the Investor, except that amendments adverse to the Investor require the Investor's consent.

(c) **Notice.** All notices required or permitted under this Note shall be in writing and delivered by hand, courier, registered mail, or electronic mail (with confirmation of receipt) to the addresses specified in the Note Purchase Agreement.

(d) **Severability.** If any provision of this Note is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

## 2. Note Purchase Agreement — model text

The Note Purchase Agreement is the umbrella agreement under which one or more Notes are issued. Where a single Investor is acquiring a single Note, the NPA may be a short form integrated into the Note itself. Where multiple Investors participate in a single round, the NPA is a separate document executed by the Company and each Investor.

The NPA includes:

1. **Recitals** identifying the parties, the round, and the Notes being issued.
2. **Closing mechanics** — the date, time, and conditions to closing (including any regulatory approvals).
3. **Investor schedule** — Exhibit A listing each Investor, the Purchase Amount, and the Valuation Cap (which may differ Investor by Investor, though PASE recommends uniformity within a round).
4. **Representations and warranties** — restating those in the Note for the round as a whole.
5. **Side letters** — incorporated by reference where applicable.

A model NPA is provided in the PASE repository as a separate file (`convertible-note.npa.common-law.md`) — out of scope for the present clause text but available as part of the kit.

## 3. Conversion Notice — model text

> **Notice of Election under Convertible Note dated {{Date of Issuance}}**

The undersigned, being the holder of the Convertible Note dated {{Date of Issuance}} issued by {{Company Name}} (the "Note"), hereby gives notice of election as follows:

| Trigger | Election |
|---|---|
| Qualified Financing | Conversion is automatic; no election required. |
| Change of Control | {{Repayment with Premium / Conversion at Change of Control Price}} |
| Maturity Date | {{Repayment / Maturity Conversion}} |

The outstanding principal of the Note as of the date of this Notice is {{USD X}}. Accrued interest as of the date of this Notice is {{USD Y}}.

Signed: {{Investor Name}} ____________________ Date: {{Date}}

## 4. Tax treatment per jurisdiction

The convertible note's debt classification simplifies its tax treatment compared to the SAFE. In each anchor jurisdiction, the note is treated as interest-bearing indebtedness for the period it is outstanding, and as equity from the moment of conversion.

### 4.1 Nigeria

**Interest accrual.** Interest accrued on the Note is deductible by the Company under Sections 24 and 27 of the Companies Income Tax Act, subject to thin-capitalisation limits where applicable. From the Investor's perspective, interest is income subject to Withholding Tax (WHT) at the rates specified in the Personal Income Tax Act or, for institutional Investors, the Companies Income Tax Act (10% domestic; 7.5% for treaty-protected non-resident Investors).

**Conversion event.** Conversion is not a taxable event for the Investor under Nigerian income-tax law, provided the Investor recognises the conversion as a continuation of investment rather than a disposition. The Capital Gains Tax Act (Cap C1, LFN 2004) imposes a 10% rate on gains from the disposal of shares; the Investor's cost basis in the converted shares is the Purchase Amount paid for the Note plus accrued interest converted into shares.

**Stamp duty.** The Stamp Duties Act imposes ad valorem stamp duty on debt instruments. The applicable rate for a private-placement convertible note is {{0.375%}} of the principal amount. The Note must be stamped within 30 days of execution to avoid penalties.

**Nigeria Startup Act interaction.** Schedule 3 of the Nigeria Startup Act 2022 establishes pioneer-status tax incentives for labelled startups. These are corporate-income-tax incentives and do not directly affect the WHT or stamp-duty treatment of convertible notes. PASE's national-level recommendation for Nigeria includes amendments to the SEC Rules 2013 to recognise both SAFEs and convertible notes as equity-linked instruments for prudential and accounting purposes (see country recommendation `ng-sec-rules-2013`).

### 4.2 Kenya

**Interest accrual.** Interest is deductible by the Company under Section 15 of the Income Tax Act. WHT applies at 15% (domestic Investor) or 15% (non-resident Investor; reduced by treaty in many cases). For institutional Investors regulated by the Capital Markets Authority, certain exemptions apply.

**Conversion event.** Conversion is not a taxable event. The Investor's cost basis in the converted shares is the Purchase Amount plus converted accrued interest.

**Stamp duty.** The Stamp Duty Act imposes ad valorem duty on debt instruments. Private-placement convertible notes are subject to {{0.05%}} stamp duty under the Eighth Schedule.

### 4.3 Ghana

**Interest accrual.** Interest is deductible by the Company under Section 9 of the Income Tax Act 2015 (Act 896). WHT applies at 8% (resident) or 15% (non-resident, subject to treaty reductions).

**Conversion event.** Conversion is not a taxable event for the Investor. Capital gains on subsequent disposal are taxed at 15% under Section 99.

**Stamp duty.** Stamp Duty Act 2005 (Act 689) imposes ad valorem duty on debt instruments at 0.25%.

### 4.4 South Africa

**Interest accrual.** Interest is deductible by the Company under Section 24J of the Income Tax Act 58 of 1962. WHT on interest applies at 15% for non-resident Investors. Domestic Investors include interest in gross income at marginal rates.

**Conversion event.** Conversion is not a disposal under the Eighth Schedule to the Income Tax Act, provided the Investor receives shares of the same Company (rather than cash). The Investor's base cost in the converted shares is the Purchase Amount plus accrued interest.

**Securities Transfer Tax.** The Securities Transfer Tax Act 25 of 2007 imposes a 0.25% STT on the transfer of shares. Issuance of shares on conversion is generally exempt under Section 6, but verification per transaction is recommended.

**South African Reserve Bank.** SARB exchange-control approval is required for the issuance of debt securities to non-resident Investors (Section B.2(I) of the Currency and Exchanges Manual). The Company must apply for and obtain approval before issuance.

## 5. Securities-law integration per jurisdiction

### 5.1 Nigeria — SEC Rules 2013 and CAMA 2020

The Nigerian Securities and Exchange Commission has not classified convertible notes specifically. Under SEC Rules 2013, SAFEs have been treated as debt; convertible notes are by their terms debt and fall within established debenture frameworks. CAMA 2020 governs the issuance of debentures under Sections 188–204, including registration of charges (Section 197) for secured notes. For unsecured convertible notes, no charge registration is required.

**Foreign Investor considerations.** The Nigeria Investment Promotion Commission Act and the CBN Foreign Exchange Manual govern foreign Investor participation. A foreign Investor providing the Purchase Amount in foreign currency must obtain a Certificate of Capital Importation from an authorised dealer bank. The CCI is the gateway to repatriation rights on conversion or repayment.

### 5.2 Kenya — Capital Markets Act and Companies Act 2015

The Kenya Capital Markets Act and the Regulations thereunder govern public offerings; private placements to sophisticated or professional Investors are exempt under Section 33 of the Capital Markets Act. The Companies Act 2015 governs debenture issuance under Sections 477–490, including registration of charges (Section 870) for secured notes.

### 5.3 Ghana — Securities Industry Act 2016 and Companies Act 2019

The Securities Industry Act 2016 (Act 929) Section 109 governs debentures. Private placements to qualified Investors are exempt from public-offering registration under Section 122. The Companies Act 2019 (Act 992) Sections 138–145 govern the Company's authority to issue debentures.

PASE's national-level recommendation for Ghana (see country recommendation `gh-securities-industry-act`) includes amendments to the Securities Industry Act 2016 to expressly recognise both SAFEs and convertible notes for labelled startups. Until that amendment lands, convertible notes are the more straightforwardly compliant instrument because their classification as debentures is unambiguous.

### 5.4 South Africa — Companies Act 71/2008 and FSCA regulations

The South African Companies Act 71/2008 governs debt issuance under Section 43. Private placements to "qualifying investors" (as defined in the Companies Act and FSCA Notices) are exempt from public-offering disclosure requirements. The Financial Sector Conduct Authority regulates collective investment schemes but does not generally apply to private convertible-note placements.

**SARB exchange control.** As noted in Section 4.4, SARB approval is required for issuance to non-resident Investors. The Currency and Exchanges Manual provides a streamlined approval process for venture-capital instruments, with applications typically processed in 4-6 weeks.

## 6. Comparable foreign regimes

The PASE convertible note is modelled on instruments that have proven robust at scale. The clause cites the following comparables for verification of the underlying logic.

**United States — Y Combinator Standard Convertible Note (post-2018).** Y Combinator's standard convertible note (available at the YC website) is the most widely-used form in the US startup market. The PASE note follows YC's structure in most respects: same interest rate band (typically 4–8%), same maturity (18–24 months), same cap-and-discount conversion mechanics, same MFN provisions. The PASE note diverges from YC in two areas: (i) PASE provides a maturity-conversion mechanism by default to avoid balloon repayment, whereas YC's default is repayment-only at maturity; (ii) PASE provides a Change of Control Premium of 1× by default, whereas YC's default is 1.5× to 2×. These are calibrations for the African market: maturity-conversion is required because of the difficulty of returning capital in foreign-currency-controlled jurisdictions; the lower premium reflects the smaller deal sizes typical of African seed rounds.

**United Kingdom — Convertible Loan Note (CLN).** The UK convertible loan note has no statutory framework; it is a contractual instrument under the general law of contracts and the Companies Act 2006. Standard forms are published by the British Business Bank, the British Private Equity & Venture Capital Association (BVCA), and most City firms (Kirkland, Cooley, Travers Smith). The PASE common-law note draws from these standards and is intentionally compatible with UK CLN conventions, recognising that African startups with UK Investors will frequently negotiate against UK-standard documentation.

**Singapore — Convertible Bond.** Section 64A of the Singapore Companies Act expressly permits the issuance of convertible bonds. Singapore is the most-used offshore holding-company jurisdiction for African startups (alongside Delaware and Mauritius), and the PASE note is intentionally compatible with Singapore convertible bond conventions to ease eventual Tier 2 cross-border integration.

**Delaware — General Corporation Law.** Sections 154–157 of the Delaware General Corporation Law govern the issuance of debt instruments and their conversion into equity. Most African common-law jurisdictions have analogous provisions in their companies legislation; PASE structure aligns with the Delaware approach for ease of comparison.

## 7. Failure modes — what happens without PASE

This section catalogues the operational failures the PASE convertible note exists to remedy. Each scenario is drawn from documented African practice.

**Nigeria — SEC classification ambiguity for hybrid instruments.** A Lagos fintech raises a USD 500K convertible round. Under SEC Rules 2013, the SEC has historically taken the position that SAFEs are debt instruments requiring registration as debentures. The same logic applies to convertible notes, but the documentation is less standardised. The company's counsel structures the round using a hybrid document partly modelled on a SAFE and partly on a convertible note. The SEC, on review, questions the classification, and the company spends 8 weeks producing a private-placement memorandum and obtaining an SEC ruling. The PASE structure — a clean convertible note that fits within CAMA's debenture framework, with explicit interest accrual and maturity date — eliminates this classification ambiguity.

**Senegal — Article 12 BCEAO recognition gap.** A Senegalese SAS raises a USD 750K convertible round from a French DFI Investor. Article 12 of Loi n° 2020-01 mentions "titres convertibles" but lacks OHADA implementation. BCEAO Instruction 2012-09 only recognises debt and equity, not hybrid instruments. The company structures the round as a French-form OCA (obligation convertible en actions) under the Mauritius parent's articles, leaving Senegalese tax and creditor rights ambiguous. Under PASE, the OHADA convertible note (see parallel OHADA clause) provides a structure that fits within AUSCGIE Articles 778+ on bonds and Articles 822–839 on OCA, with explicit BCEAO-compatible drafting.

**Tunisia — BCT memo on SAFEs.** A Tunis-based AI startup wishes to raise a USD 300K convertible round. The BCT memo of February 2020 classifies SAFEs as debt, creating accounting and prudential ambiguity. The company opts for a convertible note structured under the Tunisian Code des Sociétés Commerciales, which has long recognised obligations convertibles. The PASE Tunisia notes documented in the OHADA / civil-law parallel clause provide the structure.

**Cross-cutting.** In African common-law jurisdictions, the difficulty is not the absence of a framework for debt — every common-law jurisdiction recognises debentures — but the absence of a clear framework for *hybrid* instruments. The convertible note's clean debt classification, paired with explicit conversion mechanics, makes it the most administratively reliable early-stage financing instrument in the African common-law context until SAFE recognition lands.

## 8. Implementation notes per jurisdiction

### 8.1 Nigeria — Nigerian Limited Liability Company under CAMA 2020

1. Board resolution authorising issuance of the Note, with reference to CAMA Section 188 (general authority to issue debentures) and the Company's articles.
2. Shareholder ratification under CAMA Section 119, where required by the Company's articles or by CAMA Section 142 (issuances exceeding specified thresholds).
3. CAC filing of the resolutions within 15 days under CAMA Section 119.
4. Where the Investor is non-resident: Certificate of Capital Importation issued by the authorised dealer bank.
5. Stamp duty payment within 30 days of execution under the Stamp Duties Act.
6. Where the Note is secured: registration of charge with the CAC under CAMA Section 197 within 30 days of execution.

### 8.2 Kenya — Kenyan Limited Company under Companies Act 2015

1. Board resolution authorising the issuance.
2. Shareholder ratification where required by the articles.
3. Business Registration Service filing under Section 53.
4. Stamp duty payment.
5. Where secured: charge registration under Section 870 within 30 days.

### 8.3 Ghana — Ghana Limited Company under Companies Act 2019 (Act 992)

1. Board resolution authorising issuance under Section 138.
2. Shareholder ratification under Section 144 where exceeding the threshold.
3. Registrar-General's Department filing.
4. Stamp duty payment.
5. Where secured: charge registration with the Registrar.

### 8.4 South Africa — Private Company under Companies Act 71/2008

1. Board resolution authorising issuance under Section 43.
2. Memorandum of Incorporation review — confirm authority to issue debt securities.
3. Where the Investor is non-resident: SARB exchange-control approval under Section B.2(I) of the Currency and Exchanges Manual.
4. Securities Transfer Tax assessment.
5. Where secured: registration of the security under the Security by Means of Movable Property Act 57 of 1993.

## 9. Source citations

**The policy paper.** *Integrating Africa's Startup Acts: Building a Legal Architecture for a Single Digital Market.* Specifically:
- Section 3, country-by-country review, pp. 49–55 (Tunisia BCT memo on SAFEs, Nigeria SEC Rules 2013, Senegal Article 12 of Loi 2020-01).
- Section 4, Finding #1 evidence on parallel regulatory systems, pp. 62–63.
- Section 5.1, Core Recommendation #1: National level — surgical code fixes with digital rails, p. 68 (Securities framework provisions recognising modern financing instruments).
- Section 5.3, Ecosystem Recommendation #3: PASE financing instrument library, pp. 71–72.

**Nigerian statutes.**
- Companies and Allied Matters Act 2020, Sections 119, 142, 188–204, 197.
- Companies Income Tax Act, Sections 24, 27.
- Personal Income Tax Act, withholding tax provisions.
- Capital Gains Tax Act, Cap C1, LFN 2004.
- Stamp Duties Act, Cap S8, LFN 2004.
- SEC Rules 2013 (private-placement provisions).
- Nigeria Investment Promotion Commission Act, Cap N117, LFN 2004.
- CBN Foreign Exchange Manual (2018 revision).

**Kenyan statutes.**
- Companies Act 2015, Sections 53, 477–490, 870.
- Income Tax Act, Cap 470, Sections 15 and withholding tax provisions.
- Capital Markets Act, Cap 485A, Section 33.
- Stamp Duty Act, Cap 480.

**Ghanaian statutes.**
- Companies Act 2019 (Act 992), Sections 138–145.
- Income Tax Act 2015 (Act 896), Sections 9, 99.
- Securities Industry Act 2016 (Act 929), Sections 109, 122.
- Stamp Duty Act 2005 (Act 689).

**South African statutes.**
- Companies Act 71 of 2008, Section 43.
- Income Tax Act 58 of 1962, Section 24J and Eighth Schedule.
- Securities Transfer Tax Act 25 of 2007.
- South African Reserve Bank Currency and Exchanges Manual.
- Security by Means of Movable Property Act 57 of 1993.

**Foreign comparables.**
- US: Y Combinator Standard Convertible Note (post-2018 form), publicly available at ycombinator.com.
- UK: British Business Bank standard CLN; BVCA convertible loan note guidelines.
- Singapore: Companies Act, Section 64A.
- Delaware: General Corporation Law, Sections 154–157.

**PASE internal references.**
- PASE SAFE clause (common-law) — companion instrument; same kit structure.
- PASE multi-class shares clause (common-law) — interlocks with the Conversion Price mechanics when the Qualified Financing issues preferred shares.
- PASE ESOP clause (common-law) — the Capitalisation definition includes the ESOP pool authorised under that clause.

## 10. Open questions for review

1. **Interest rate calibration.** The PASE default of 5% simple per annum reflects the median African seed-stage practice but may be high or low for specific deals. Investors with stronger negotiating leverage may seek 6–8%; founders with stronger leverage may negotiate to 3–4%. Drafters should set the rate per deal.
2. **Maturity treatment fallback.** PASE defaults to maturity-conversion if the Investor fails to elect within 30 days. The alternative — repayment-only at maturity — exposes the Company to a balloon-payment risk on the second anniversary of the Note. Drafters should consider which fallback the deal economics require.
3. **Discount Rate.** PASE defaults to 20% (a conversion at 80% of the Qualified Financing price). Deeper discounts (25–30%) are sometimes seen in late-stage convertible notes; shallower discounts (10–15%) for friends-and-family rounds.
4. **Valuation Cap interaction with the SAFE clause.** When a Company has both SAFEs and convertible notes outstanding, the conversion mechanics must be carefully harmonised. PASE recommends uniform Valuation Cap across all instruments in the same round, and consistent treatment of the "shadow preferred" conversion class.
5. **Security.** The PASE default is unsecured. For institutional Investors and DFIs that require security, the Note may be secured by floating charge over the Company's assets, fixed charge over specific assets, or pledge of shares of subsidiaries. The PASE roadmap includes a secured convertible note variant as a follow-on clause.
6. **Tunisia and OHADA jurisdictions.** Convertible notes in Tunisia and OHADA jurisdictions are addressed in the parallel OHADA / civil-law clause. Common-law drafters should reference that clause for cross-border holding structures involving OHADA subsidiaries.
