# Plan d'Options de Souscription d'Actions — Rédaction OHADA / droit civil

> **Statut :** Version 0.1 — rédigée comme texte de référence PASE. Ne constitue pas un avis juridique. À adapter avec un conseil qualifié dans la juridiction concernée avant adoption.
>
> **Tradition :** OHADA / droit civil (ancrage : Sénégal ; notes parallèles : Côte d'Ivoire, RDC, Tunisie).

## Pourquoi cette clause existe

Le Plan d'Options de Souscription d'Actions (POSA) constitue le plus grand vide juridique non comblé dans la pratique du droit des sociétés africain. Le document de politique publique de référence documente que **les six juridictions disposant d'un Startup Act adopté ne disposent pas d'un cadre fiscal et social permettant la rémunération en capital différée à la liquidité** (paper p. 63 — preuves du Finding #1 et taxonomie des « surgical-code-fixes » de la Recommandation #1). Au Sénégal, les articles L.40 et L.67 du Code du Travail (Loi n° 97-17) imposent des structures d'emploi rigides qui n'accommodent pas les attributions d'actions variables. En Tunisie, l'article 38 du Code de l'IRPP impose les attributions d'actions comme salaires immédiats sur des valeurs théoriques, anéantissant l'incitation économique. En Côte d'Ivoire, les articles 10 à 15 du SYSCOHADA (révisé 2017) ne prévoient aucun traitement comptable clair pour les attributions d'options. En RDC, les articles 40 et 67 du Code du Travail (Loi n° 015/2002) créent des obligations immédiates incompatibles avec la volatilité des startups.

La conséquence économique n'est pas abstraite. Selon le paper (pp. 11–12), 35 % des investisseurs en capital-risque africains sont désormais basés en Afrique, mais **moins de 5 % des startups en phase d'amorçage atteignent la Série A** — un taux de progression entraîné, entre autres facteurs, par la fuite des talents techniques seniors. En l'absence d'une rémunération en capital différée à la liquidité, les startups africaines ne peuvent pas concurrencer les employeurs offshore (Delaware, Maurice, Singapour) pour le talent qui pilote la graduation vers la Série A. Les ingénieurs seniors acceptent soit des options sur une société mère à l'étranger — juridiquement invisibles à leur administration fiscale locale — soit se relocalisent physiquement.

Le récit que cette clause vient porter dépasse la simple plomberie d'entreprise. **C'est une réforme du droit du travail.** La main-d'œuvre jeune et hautement qualifiée de l'Afrique — 60 % du continent ayant moins de 25 ans (UNESCO Institute for Statistics, 2020) — devrait détenir une participation au capital des entreprises dont elle construit la croissance. Le POSA PASE codifie l'appareillage juridique qui rend la participation salariée en capital routinière dans le cadre civiliste / OHADA.

## Ce que contient le kit

Cette clause est un kit de quatre documents qui fonctionnent ensemble au sein de la structure sociétaire OHADA / civiliste de la Société. Le kit ne requiert pas l'incorporation dans une juridiction particulière ; il est rédigé pour s'intégrer nativement au droit sénégalais, ivoirien, congolais (RDC) ou tunisien.

1. **Le Plan** — les règles globales du programme d'options. Fixe la taille de l'enveloppe, les conditions d'éligibilité, le calendrier d'acquisition (vesting) par défaut, l'autorité administrative, le traitement en cas de changement de contrôle, et les options de traitement fiscal. Adopté par décision du président (dans une SAS) ou par délibération du conseil d'administration (dans une SA), et ratifié par les associés ou actionnaires en assemblée générale.
2. **La Convention d'Attribution d'Options (CAO)** — l'instrument individuel attribuant à un bénéficiaire un nombre déterminé d'options à un prix de souscription déterminé selon un calendrier d'acquisition déterminé. Signée par la Société et le bénéficiaire.
3. **La Notification de Levée** — le formulaire que le bénéficiaire soumet pour lever ses options acquises, accompagné du paiement du prix de souscription.
4. **Le Tableau de Capitalisation (Annexe)** — l'annexe de reporting montrant toutes les attributions, les levées, les déchéances, et la répartition résultante du capital pleinement dilué.

Chaque document est paramétré. Les variables (taille de l'enveloppe, cadence d'acquisition, fenêtre de levée, fenêtre post-cessation) sont mises entre `{{doubles accolades}}` dans le texte ci-dessous ; les valeurs par défaut PASE sont précisées.

## Mécaniques structurelles — les valeurs par défaut PASE

Ces valeurs reflètent la pratique standard de l'industrie des années 2010–2020 en France (régime BSPCE), au Royaume-Uni (EMI), aux États-Unis (NSO), adaptées aux traditions juridiques africaines. Elles ne sont pas statutaires ; ce sont des choix contractuels que la clause PASE encode comme défauts.

| Mécanique | Valeur par défaut PASE | Justification |
|---|---|---|
| Taille de l'enveloppe | 10 % du capital pleinement dilué à la date d'adoption du Plan ; rafraîchie lors de chaque tour de financement à valorisation fixée | Convention Y Combinator / a16z pour les tables de capitalisation pré-Série A |
| Cadence d'acquisition | 48 mois au total, avec un palier (cliff) initial de 12 mois ; acquisition mensuelle ensuite | Norme post-2010 ; protège la Société contre l'abus de départ précoce |
| Type d'option | Options non statutaires (non-BSPCE) à la valeur vénale au jour de l'attribution | Évite l'imposition à l'attribution sous les régimes IRPP des pays OHADA (pas d'avantage économique à l'attribution) |
| Levée anticipée | Permise, avec acquisition inversée sur les actions sous-jacentes | Permet au bénéficiaire de démarrer le compte de plus-value plus tôt et de minimiser l'exposition à l'IRPP |
| Fenêtre de levée (durée totale) | 10 ans à compter de l'attribution | Standard dans tous les régimes comparables |
| Fenêtre post-cessation — bonne sortie | 90 jours suivant la cessation, automatique | Standard Y Combinator ; les sociétés peuvent étendre jusqu'à 10 ans pour la rétention |
| Fenêtre post-cessation — mauvaise sortie | Déchéance | Cessation pour faute grave déchoit les options non levées |
| Accélération en cas de décès / invalidité | Déclenchement unique — 100 % des options non acquises sont acquises | Standard de l'industrie ; protège la succession du bénéficiaire |
| Accélération en cas de changement de contrôle | Double déclenchement — 100 % acquises sur (i) changement de contrôle plus (ii) cessation involontaire dans les 12 mois | Standard Y Combinator / Cooley ; équilibre la protection du bénéficiaire et les besoins de rétention de l'acquéreur |
| Traitement à l'événement de liquidité | Les options acquises se convertissent en actions au prix du changement de contrôle ; les options non acquises soit s'accélèrent (double déclenchement) soit s'éteignent | Précisé dans la Convention d'Attribution |
| Prix de souscription | Valeur vénale au jour de l'attribution, déterminée de bonne foi par le président ou le conseil | Requis pour éviter l'imposition de l'écart à l'attribution sous les régimes IRPP africains |
| Droit de rachat | La Société dispose d'un droit (et non d'une obligation) de racheter les actions issues de la levée à la valeur vénale lors d'une cessation | Protège la table de capitalisation ; standard dans les plans des sociétés non cotées |

## 1. Le Plan — Plan d'Options de Souscription d'Actions (statuts modèles)

### 1.1 Objet

Le Plan a pour objet de permettre à {{Nom de la Société}} (la « Société ») d'attribuer des options de souscription d'actions à ses salariés, consultants, et mandataires sociaux éligibles à titre de composante de leur rémunération globale, en vue de l'attraction et de la rétention du talent nécessaire à la croissance d'une société soutenue par capital-risque. Le Plan s'inscrit dans l'adoption par {{Nom de la Société}} du **standard Pan-African Startup Entity (PASE)** pour une structure sociétaire de niveau capital-risque.

### 1.2 Définitions

- **« Avis d'Attribution »** désigne la notification écrite et la Convention d'Attribution d'Options émise à un Bénéficiaire au titre d'une Attribution.
- **« Bénéficiaire »** désigne une Personne Éligible ayant reçu une Attribution au titre du Plan.
- **« Changement de Contrôle »** désigne (i) la cession de la totalité ou de la quasi-totalité des actifs de la Société, (ii) une opération entraînant le transfert de plus de 50 % des droits de vote, ou (iii) une fusion ou consolidation dans laquelle la Société n'est pas l'entité survivante (ou dans laquelle les associés immédiats avant ne détiennent pas plus de 50 % de l'entité survivante).
- **« Comité »** désigne un comité du conseil (ou du président, dans une SAS) auquel l'administration du Plan a été déléguée, ou, à défaut de délégation, le conseil ou le président lui-même.
- **« Invalidité »** désigne l'incapacité du Bénéficiaire, en raison d'une atteinte physique ou mentale, d'exercer une activité professionnelle substantielle dont on s'attend à ce qu'elle entraîne le décès ou à ce qu'elle dure pendant une période continue d'au moins 12 mois, telle que déterminée par le Comité de bonne foi.
- **« Option »** désigne une option non statutaire de souscription d'actions ordinaires attribuée au titre du présent Plan.
- **« Personne Éligible »** désigne un salarié, consultant, conseiller, ou mandataire social non exécutif de la Société ou de l'une de ses filiales.
- **« Plan »** désigne le présent Plan d'Options de Souscription d'Actions, tel que modifié de temps à autre.
- **« Valeur Vénale »** désigne, pour une action ordinaire à une date donnée, la valeur déterminée par le Comité de bonne foi conformément à la méthodologie décrite à l'article 1.7.

### 1.3 Administration

Le Plan est administré par le Comité. Le Comité a le pouvoir de :

(a) désigner les Personnes Éligibles à qui des Attributions peuvent être accordées ;
(b) déterminer le nombre d'actions soumises à chaque Attribution ;
(c) déterminer les termes et conditions de chaque Attribution, y compris le calendrier d'acquisition, le prix de souscription, la date d'expiration, et les conséquences de la cessation des fonctions ;
(d) interpréter et administrer le Plan et toute Convention d'Attribution ;
(e) édicter, modifier et rapporter les règles et règlements relatifs au Plan ; et
(f) prendre toute autre détermination et toute autre action que le Comité juge nécessaire ou souhaitable pour l'administration du Plan.

Les déterminations du Comité au titre du Plan ne sont pas tenues d'être uniformes et peuvent être prises sélectivement entre les Bénéficiaires.

### 1.4 Enveloppe d'actions

Le nombre total d'actions ordinaires pouvant être émises au titre du Plan ne peut excéder {{X}} actions (l'« Enveloppe »), représentant approximativement **{{10 %}}** du capital pleinement dilué de la Société à la date d'adoption du Plan. L'Enveloppe est susceptible d'ajustement conformément à l'article 1.10 (Ajustements).

Les actions qui font l'objet d'une Attribution expirant, étant résiliée, ou faisant l'objet d'une déchéance sans émission des actions sous-jacentes reviennent à l'Enveloppe et redeviennent disponibles pour émission au titre du Plan.

L'Enveloppe est rafraîchie à chaque tour de financement à valorisation fixée subséquent, par tel montant que le Comité détermine, sous réserve des droits de consentement des associés titulaires d'actions de préférence prévus aux statuts et au pacte d'associés.

### 1.5 Éligibilité

Les Attributions ne peuvent être accordées qu'à des Personnes Éligibles. Le Comité détermine, à sa discrétion, quelles Personnes Éligibles reçoivent des Attributions et le nombre d'actions soumis à chaque Attribution.

### 1.6 Convention d'Attribution

Chaque Attribution est constatée par une Convention d'Attribution, signée par la Société et le Bénéficiaire, qui précise : (i) le nombre d'actions soumis à l'Attribution ; (ii) le prix de souscription ; (iii) le calendrier d'acquisition ; (iv) la date d'expiration ; et (v) tels autres termes et conditions que le Comité détermine.

### 1.7 Valeur Vénale

La Valeur Vénale d'une action ordinaire est déterminée par le Comité de bonne foi, en appliquant une ou plusieurs des méthodologies suivantes selon ce que le Comité juge approprié :

(a) le prix payé le plus récemment par un investisseur tiers de bonne foi dans le cadre d'un financement à valorisation fixée, ajusté pour les développements significatifs intervenus depuis ;
(b) une évaluation indépendante préparée par un cabinet d'évaluation qualifié utilisant des méthodologies usuelles (flux de trésorerie actualisés, transactions comparables, sociétés cotées comparables) ; ou
(c) pour les sociétés en phase d'amorçage avant tout tour à valorisation fixée, une évaluation déterminée par le conseil et appuyée d'un mémorandum exposant la base de la détermination.

Le Comité maintient une trace écrite contemporaine de la base de chaque détermination de Valeur Vénale. L'intention du présent article est d'assurer que le prix de souscription de chaque Option n'est pas inférieur à la Valeur Vénale au jour de l'attribution, de sorte qu'aucun revenu ne soit reconnu par le Bénéficiaire à l'attribution au regard du droit fiscal de la juridiction du Bénéficiaire.

### 1.8 Acquisition (vesting)

Le calendrier d'acquisition par défaut PASE est de quatre années d'acquisition mensuelle avec un palier (cliff) initial d'une année. Précisément, aucune Option n'est acquise avant le premier anniversaire de la date de commencement d'acquisition ; au premier anniversaire, 25 % des Options sont acquises ; ensuite, les 75 % restantes sont acquises par 36 mensualités égales.

Le Comité peut, dans toute Convention d'Attribution individuelle, accélérer, différer, ou autrement modifier le calendrier d'acquisition de toute Attribution, y compris en le rattachant à des jalons de performance plutôt qu'au temps (ou en complément du temps).

### 1.9 Levée d'options

(a) **Généralités.** Un Bénéficiaire peut lever ses Options acquises en délivrant à la Société une Notification de Levée précisant le nombre d'actions à acquérir, accompagnée du paiement du prix de souscription cumulé.

(b) **Paiement du prix de souscription.** Le prix de souscription peut être réglé en numéraire, par chèque, par virement bancaire, ou — à la discrétion du Comité — par levée nette (la Société retenant des actions d'une Valeur Vénale égale au prix de souscription cumulé), par levée sans décaissement via un intermédiaire financier, ou par toute autre contrepartie que le Comité détermine.

(c) **Levée anticipée.** Un Bénéficiaire peut élire de lever des Options non encore acquises. Les actions acquises à la suite d'une levée anticipée sont soumises à un droit de rachat par la Société au prix de souscription d'origine, droit qui s'éteint conformément au calendrier d'acquisition applicable à l'Option d'origine. La levée anticipée permet au Bénéficiaire de démarrer le compte de la période de détention pour le traitement en plus-value plus tôt et de minimiser l'exposition à l'IRPP.

(d) **Expiration.** À moins que le Comité ne précise autrement, chaque Option expire au dixième anniversaire de la date d'attribution.

### 1.10 Ajustements

En cas de modification des actions ordinaires en raison d'un fractionnement d'actions, d'un fractionnement inversé, d'un dividende en actions, d'une recapitalisation, d'une réorganisation, d'une fusion, d'une consolidation, ou d'un événement similaire, le Comité procède à des ajustements équitables : (i) du nombre d'actions soumis au Plan, (ii) du nombre d'actions soumis aux Attributions en circulation, et (iii) du prix de souscription des Attributions en circulation, dans chaque cas selon ce que le Comité juge nécessaire pour prévenir la dilution ou l'augmentation des droits des Bénéficiaires.

### 1.11 Cessation des fonctions

(a) **Cessation volontaire par le Bénéficiaire.** Si le Bénéficiaire cesse volontairement ses fonctions, toutes les Options non acquises sont déchues à la Date de Cessation. Les Options acquises demeurent susceptibles de levée pendant **{{90 jours}}** suivant la Date de Cessation, après quoi elles expirent.

(b) **Cessation par la Société sans faute grave.** Si la Société met fin aux fonctions du Bénéficiaire sans faute grave, le traitement est celui du (a) ci-dessus, sauf disposition contraire du Comité ou d'une Convention d'Attribution.

(c) **Cessation pour faute grave.** Si la Société met fin aux fonctions du Bénéficiaire pour faute grave, toutes les Options (acquises et non acquises) sont déchues immédiatement à la Date de Cessation.

(d) **Décès.** Si le Bénéficiaire décède pendant qu'il est en fonctions, 100 % des Options non acquises s'accélèrent et deviennent acquises à la date du décès. La succession du Bénéficiaire peut lever ces Options acquises pendant une période de **{{12 mois}}** suivant la date du décès, après quoi elles expirent.

(e) **Invalidité.** Si les fonctions du Bénéficiaire prennent fin pour cause d'Invalidité, 100 % des Options non acquises s'accélèrent et deviennent acquises à la Date de Cessation. Le Bénéficiaire peut lever ces Options acquises pendant une période de **{{12 mois}}** suivant la Date de Cessation.

### 1.12 Changement de Contrôle

(a) **Traitement des Options acquises.** En cas de Changement de Contrôle, les Options acquises sont traitées comme le Comité le détermine, y compris (i) conversion en droit de recevoir la contrepartie par action versée dans le Changement de Contrôle, déduction faite du prix de souscription, en numéraire ou en titres de l'acquéreur ; (ii) reprise par l'acquéreur selon des termes substantiellement équivalents ; ou (iii) levée accélérée suivie de résiliation.

(b) **Accélération à double déclenchement pour les Options non acquises.** Les Options non acquises sont acquises en totalité à la survenance des deux conditions : (i) un Changement de Contrôle, et (ii) la cessation involontaire des fonctions du Bénéficiaire par la Société (ou son successeur) sans faute grave, ou la cessation constructive des fonctions par le Bénéficiaire pour motif valable (tel que défini dans la Convention d'Attribution), dans chaque cas dans les 12 mois suivant le Changement de Contrôle.

(c) **Dérogation par déclenchement unique.** Le Comité peut, dans toute Convention d'Attribution individuelle, prévoir une accélération à déclenchement unique en cas de Changement de Contrôle seul, sans exiger la cessation ultérieure.

### 1.13 Droit de rachat

La Société dispose d'un droit (et non d'une obligation) de racheter les actions émises sur levée d'Options auprès d'un Bénéficiaire dont les fonctions prennent fin, à un prix égal à (i) le prix de souscription d'origine, pour les actions acquises sur levée anticipée n'ayant pas encore été acquises selon le calendrier d'acquisition inversée correspondant ; ou (ii) la Valeur Vénale, pour les actions pleinement acquises. Le droit de rachat est exerçable pendant une période de 90 jours suivant la date la plus tardive entre la Date de Cessation et la date de levée.

### 1.14 Restrictions de transfert

Les Options ne sont pas cessibles autrement que par testament ou par les règles de la succession ab intestat. Les actions émises sur levée sont soumises aux restrictions de transfert, aux droits de sortie conjointe (tag-along), aux droits de cession forcée (drag-along), et aux droits de préemption prévus aux statuts et au pacte d'associés.

### 1.15 Aspects fiscaux

Chaque Bénéficiaire est seul responsable des conséquences fiscales de l'attribution, de la levée, de la cession, et de la disposition des Options et des actions sous-jacentes dans sa juridiction. La Société ne fait aucune déclaration quant au traitement fiscal d'une Attribution et n'est pas responsable d'un impôt encouru par le Bénéficiaire. Chaque Bénéficiaire est encouragé à consulter un conseil fiscal indépendant.

Nonobstant ce qui précède, la Société :

(a) tient les registres et effectue les déclarations exigés par le droit applicable pour déclarer les Attributions, les levées, et les cessions d'actions aux administrations fiscales compétentes ;
(b) lorsque le droit applicable le requiert, retient l'impôt sur la paie du Bénéficiaire ou sur les actions à délivrer sur levée ; et
(c) lorsque la Société est une startup labellisée au titre d'un Startup Act national applicable et que cet Act prévoit un traitement fiscal différé ou préférentiel de la rémunération en capital, revendique ce traitement au nom du Bénéficiaire lorsqu'elle y est autorisée.

### 1.16 Modifications et résiliation

Le conseil ou le président peut modifier, suspendre, ou résilier le Plan à tout moment, à condition qu'aucune modification, suspension, ou résiliation n'affecte les droits d'un Bénéficiaire au titre d'une Attribution déjà accordée, sans le consentement du Bénéficiaire concerné. Les modifications nécessitant l'approbation des associés au titre de l'AUSCGIE ou du Startup Act applicable sont soumises à cette approbation.

### 1.17 Conformité au droit applicable

Le Plan, l'attribution des Attributions, et l'émission d'actions sur levée sont soumis à la conformité au droit applicable, y compris au droit des sociétés OHADA (AUSCGIE), au droit des marchés financiers (BCEAO, COSUMAF, ou équivalent national), au droit fiscal (Code Général des Impôts national), et au droit du travail de la juridiction du Bénéficiaire et de toute juridiction dans laquelle la Société opère. Le Comité peut imposer des conditions à l'attribution et à la levée des Attributions selon ce qui est nécessaire pour assurer la conformité.

### 1.18 Droit applicable

Le Plan est régi par et interprété conformément aux lois de {{juridiction d'incorporation de la Société}}, sous réserve de l'application impérative de l'AUSCGIE et des Actes uniformes OHADA pour les sociétés constituées dans l'espace OHADA.

## 2. Convention d'Attribution d'Options — texte modèle

> **Convention d'Attribution d'Options**
> Au titre du Plan d'Options de Souscription d'Actions {{20XX}} de {{Nom de la Société}} (le « Plan »)

| | |
|---|---|
| **Bénéficiaire** | {{Nom du Bénéficiaire}} |
| **Date d'Attribution** | {{Date}} |
| **Nombre d'Options** | {{N}} |
| **Prix de Souscription par Action** | {{X}} XOF (que le Comité a déterminé être égal à la Valeur Vénale à la Date d'Attribution) |
| **Date de Commencement d'Acquisition** | {{Date — typiquement la date d'entrée en fonctions}} |
| **Calendrier d'Acquisition** | 25 % au premier anniversaire de la Date de Commencement d'Acquisition ; les 75 % restantes par 36 mensualités égales ensuite |
| **Date d'Expiration** | Le dixième anniversaire de la Date d'Attribution |
| **Levée Anticipée** | Permise au titre de l'article 1.9(c) du Plan |

La présente Attribution est accordée au titre du Plan, et y est soumise à tous égards. Les termes capitalisés utilisés mais non définis dans la présente Convention ont les significations qui leur sont données dans le Plan.

Le Bénéficiaire reconnaît avoir reçu un exemplaire du Plan et accepte d'y être lié.

Signé :

{{Nom du Président / Directeur Général, pour la Société}} ____________________

{{Nom du Bénéficiaire}} ____________________

## 3. Notification de Levée — texte modèle

> **Notification de Levée d'Options de Souscription d'Actions**

Le soussigné lève par les présentes les Options attribuées au titre de la Convention d'Attribution datée du {{Date d'Attribution}} comme suit :

- Nombre d'actions souscrites : {{N}}
- Prix de souscription par action : {{X}} XOF
- Prix de souscription cumulé : {{N × X}} XOF
- Mode de paiement : {{numéraire / chèque / virement / levée nette / sans décaissement}}

Le soussigné reconnaît que, à l'émission, les actions acquises au titre des présentes sont soumises aux restrictions de transfert et aux autres dispositions du Plan, des statuts, et du pacte d'associés applicables.

Signé : {{Nom du Bénéficiaire}} ____________________ Date : {{Date}}

## 4. Traitement fiscal par juridiction

La présente section expose le traitement fiscal actuel des options dans chacune des quatre juridictions d'ancrage OHADA / civil-law, et le contournement que PASE recommande pour approximer le « traitement fiscal différé à la liquidité » dans le cadre statutaire existant.

### 4.1 Sénégal

**Traitement actuel.** Le Code Général des Impôts (CGI) sénégalais (Loi n° 2012-31) traite la rémunération salariale de manière large aux articles 167 et suivants. La Direction Générale des Impôts et des Domaines (DGID) n'a pas émis de doctrine spécifique aux options sur titres ; les praticiens traitent les options comme des revenus salariaux imposables sur l'écart entre la Valeur Vénale à la levée et le prix de souscription, à la date de la levée, au taux marginal du Bénéficiaire (jusqu'à 40 %). Aucune imposition de l'écart à l'attribution n'est exigée lorsque le prix de souscription est égal à la Valeur Vénale à l'attribution (absence d'avantage économique à l'attribution). Les plus-values sur cession ultérieure des actions sont imposées au titre de l'article 259 du CGI au taux de 25 %.

**Interaction avec la Loi n° 2020-01 sur les Startups.** L'article 8 de la Loi sénégalaise sur les Startups prévoit des exonérations fiscales pour les startups labellisées, mais ces exonérations requièrent une vérification distincte par la DGID (typiquement 45–60 jours, contre la limite statutaire de 30 jours — voir paper p. 5). Aucune disposition de l'article 8 ne traite directement de la rémunération en capital des salariés. La recommandation PASE au niveau national pour le Sénégal comprend un amendement au CGI auto-appliquant les bénéfices fiscaux à la date d'émission du label, et un amendement parallèle aux articles L.40 et L.67 du Code du Travail permettant la rémunération en capital différée à la liquidité (voir les recommandations pays `sn-tax-auto-apply` et `sn-labor-l40-l67`).

**Contournement PASE dans le cadre actuel.** La Convention d'Attribution doit structurer l'Option comme une option non statutaire à la Valeur Vénale à l'attribution, avec levée anticipée permise. Lorsque le Bénéficiaire élit la levée anticipée, il paie le prix de souscription d'avance, les actions résultantes sont soumises à une acquisition inversée, et le décompte de la période de détention pour le traitement en plus-value commence. Lors de la liquidité éventuelle, le Bénéficiaire paie l'impôt sur les plus-values (25 %) sur l'écart entre prix de cession et prix de souscription, plutôt que l'impôt sur le revenu (jusqu'à 40 %) sur le même écart à la levée.

L'effet économique approxime le « traitement à la liquidité », mais requiert que le Bénéficiaire avance le prix de la levée anticipée. Pour les salariés qui ne peuvent le faire, l'alternative est une structure d'Attribution d'Actions Gratuites différée à la liquidité — voir section 5 (Notes de mise en œuvre).

### 4.2 Côte d'Ivoire

**Traitement actuel.** Le Code Général des Impôts (CGI) ivoirien (Annexe à la loi de finances 2018, modifié annuellement) traite la rémunération salariale de manière large à l'article 116. La Direction Générale des Impôts (DGI) traite les options sur titres comme des revenus salariaux imposables sur l'écart à la levée, au taux marginal du Bénéficiaire (jusqu'à 32 %). Les plus-values sur cession ultérieure des actions sont imposées au titre des articles 6 et suivants du CGI au taux de 25 %. Les SYSCOHADA Articles 10-15 (révisé 2017) ne prévoient pas de traitement comptable clair pour les options sur titres, créant une zone grise pour la comptabilisation des plans d'attribution (paper p. 54).

**Interaction avec la Loi sur les Startups (2024).** L'article 15 du CGI prévoit des exonérations fiscales pour les startups labellisées, mais sans application automatique (paper p. 54). La recommandation PASE au niveau national pour la Côte d'Ivoire comprend l'application automatique des exonérations fiscales à la délivrance du label, ainsi que la création d'une Annexe B au SYSCOHADA pour les startups (traitement comptable spécialisé des ESOP, des frais de R&D capitalisés, et de l'évaluation des actifs incorporels — voir les recommandations pays `ci-cgi-15` et `ci-syscohada-annex-b`).

**Contournement PASE dans le cadre actuel.** Comme au Sénégal — option non statutaire à la VV à l'attribution, avec levée anticipée permise. Lorsque le Bénéficiaire élit la levée anticipée, le traitement en plus-value s'applique à l'appréciation ultérieure.

### 4.3 République Démocratique du Congo

**Traitement actuel.** Le Code Général des Impôts (Ordonnance-loi n° 69/006 du 10 février 1969, modifié) traite la rémunération salariale aux articles 17 et suivants. La Direction Générale des Impôts congolaise traite les options sur titres comme des revenus salariaux imposables à la levée, au taux marginal (jusqu'à 30 %). Les plus-values sur cession sont imposées au titre des règles spéciales sur les plus-values.

**Interaction avec la Loi sur les Startups (2022) / Statut de Jeune Entreprise Innovante.** Les articles 34 à 38 de l'Ordonnance-loi n° 22/030 prévoient des exonérations fiscales graduées (100 % à 50 % sur cinq ans) pour les startups labellisées « JEI » (paper p. 52). Aucune disposition ne traite directement de la rémunération en capital des salariés. La recommandation PASE au niveau national pour la RDC comprend l'application automatique des exonérations graduées à la date d'émission du label, et un amendement aux articles 40 et 67 du Code du Travail (Loi n° 015/2002) permettant la rémunération en capital et les arrangements de travail flexibles (voir les recommandations pays `cd-tax-34-38` et `cd-labor-40-67`).

**Contournement PASE dans le cadre actuel.** Comme au Sénégal et en Côte d'Ivoire. À noter : le contrôle des changes prévu à l'article 70 de la Réglementation des Changes 2014 ajoute une couche supplémentaire de complexité pour les options émises à des Bénéficiaires non résidents ou pour les levées par des Bénéficiaires non résidents — le Comité doit obtenir l'autorisation préalable de la Banque Centrale du Congo pour ces opérations.

### 4.4 Tunisie

**Traitement actuel.** L'article 38 du Code de l'IRPP tunisien (Loi n° 89-114 du 30 décembre 1989, modifié) impose les attributions d'actions comme des salaires immédiats sur la valeur théorique de l'avantage à la date d'attribution, indépendamment de toute liquidité ultérieure (paper p. 63). C'est la disposition la plus hostile à la rémunération en capital de toutes les juridictions africaines analysées. Le taux marginal de l'IRPP tunisien atteint 35 %.

**Interaction avec la Loi n° 2018-20 (Startup Act).** Les articles 8 et 9 du Startup Act tunisien autorisent la rémunération en capital pour les startups labellisées, mais l'article 38 de l'IRPP n'a pas été modifié en conséquence, créant un conflit interne au droit tunisien (paper p. 63). La recommandation PASE au niveau national pour la Tunisie comprend l'amendement de l'article 38 de l'IRPP pour différer l'imposition des attributions d'actions à l'événement de liquidité dans les sociétés labellisées (voir la recommandation pays `tn-irpp-38`).

**Contournement PASE dans le cadre actuel.** Le contournement standard (option non statutaire à la VV avec levée anticipée) ne fonctionne PAS en Tunisie, parce que l'article 38 impose à l'attribution sur la valeur théorique, indépendamment du prix de souscription. Deux alternatives :

1. **Structure d'options de pure liquidité.** L'Option ne s'acquiert qu'à la survenance d'un Événement de Liquidité. Avant l'Événement, le Bénéficiaire n'a aucun droit. L'article 38 ne s'applique que si le Bénéficiaire dispose d'un avantage économique à l'attribution ; structurée comme une promesse conditionnelle, l'option échappe à l'application de l'article 38.
2. **Phantom equity / participation aux plus-values.** La Société promet contractuellement de verser un montant en numéraire égal à l'écart entre prix de cession et valeur de référence à un Événement de Liquidité. Le paiement est imposable comme salaire à la date de versement (donc à la liquidité), pas à la date de promesse. Cette structure approxime l'effet économique de l'option sans déclencher l'article 38.

Pour les startups labellisées tunisiennes, PASE recommande la structure d'options de pure liquidité, complétée par un texte clarificatif à insérer dans la Convention d'Attribution.

## 5. Intégration au droit du travail par juridiction

La présente clause est rédigée pour fonctionner dans le cadre du droit du travail existant de chaque juridiction d'ancrage. Les Attributions sont accordées au titre du Plan, et non au titre du contrat de travail. Les droits du salarié au titre de la Convention d'Attribution survivent au droit du travail ordinaire de la même manière qu'une prime ou un avantage en nature — la Convention d'Attribution est un contrat distinct entre le Bénéficiaire et la Société, régi par le droit précisé au Plan.

### 5.1 Sénégal — Code du Travail (Loi n° 97-17)

Les articles L.40 et L.67 du Code du Travail sénégalais imposent des structures d'emploi rigides incompatibles avec la rémunération en capital variable (paper p. 50). Le Plan et la Convention d'Attribution doivent être structurés comme des contrats commerciaux distincts du contrat de travail, signés par écrit par le Bénéficiaire, et conclus en lien avec (mais non comme partie intégrante de) le contrat de travail. Cette structuration en deux contrats distincts permet de préserver l'application du Plan en cas de cessation du contrat de travail, même contestée devant le Tribunal du Travail.

**IPRES et CSS.** Les cotisations de retraite (IPRES) et de sécurité sociale (CSS) sont assises sur les rémunérations salariales mensuelles. Les options non levées et les options levées non encore acquises (acquisition inversée) ne sont pas des « rémunérations » au sens des articles 5 du Décret n° 75-455 et du Code de Sécurité Sociale ; elles n'attirent pas de cotisations.

**Quota de personnel étranger.** Le quota de 20 % de personnel étranger applicable aux startups labellisées (paper p. 5) ne s'applique pas aux Bénéficiaires en tant que tels (ils sont salariés au titre du contrat de travail, pas en tant que Bénéficiaires) mais limite indirectement la portée des programmes d'options pour les talents étrangers. La recommandation PASE comprend un amendement à ce quota pour les startups labellisées (voir la recommandation `sn-labor-l40-l67` corollaire).

### 5.2 Côte d'Ivoire — Code du Travail (Loi n° 2015-532)

Le Code du Travail ivoirien traite la rémunération salariale aux articles 31 et suivants. Comme au Sénégal, le Plan et la Convention d'Attribution doivent être structurés comme des contrats commerciaux distincts du contrat de travail. Le Tribunal du Travail a compétence sur les litiges du travail, mais les litiges relatifs à la rémunération en capital relèvent typiquement du Tribunal de Commerce.

**CNPS.** Les cotisations à la Caisse Nationale de Prévoyance Sociale sont assises sur les rémunérations salariales. Comme au Sénégal, les options en dehors de la paie n'attirent pas de cotisations CNPS.

### 5.3 République Démocratique du Congo — Code du Travail (Loi n° 015/2002)

Les articles 40 et 67 du Code du Travail congolais créent des obligations immédiates incompatibles avec la volatilité de la rémunération en capital de startup (paper p. 52). Le Plan et la Convention d'Attribution doivent être structurés comme contrats commerciaux distincts ; les arrangements alternatifs (engagement d'agents au lieu de salariés directs) que la pratique a documentés en RDC (paper p. 52) ne sont pas nécessaires pour les Bénéficiaires d'options PASE, à condition que la structuration en deux contrats soit respectée.

**INSS.** Les cotisations à l'Institut National de Sécurité Sociale congolais sont assises sur les rémunérations salariales. Les options ne sont pas assujetties.

### 5.4 Tunisie — Code du Travail

L'article 57 du Code du Travail tunisien prévoit des procédures formelles de licenciement (audiences, préavis) qui peuvent prolonger la cessation des fonctions et créer une incertitude sur la Date de Cessation pour les besoins de la fenêtre post-cessation de la Convention d'Attribution (paper p. 49). La Convention doit définir la Date de Cessation par référence à la date de notification du licenciement (et non à la date de l'audience finale ou de la décision définitive en cas de contestation), pour préserver la prévisibilité du calendrier des options.

**Quota de personnel étranger.** Le quota de 30 % de personnel étranger applicable initialement (réduit à 10 % après 3 ans) sous le régime du Startup Act tunisien (paper p. 49) limite la portée des programmes d'options pour les talents étrangers. La recommandation PASE comprend un amendement à ce quota (voir la recommandation `tn-labor-30pct`).

**CNSS.** Les cotisations à la Caisse Nationale de Sécurité Sociale tunisienne sont assises sur les rémunérations salariales. Les options non levées ne sont pas assujetties ; les options levées dans le cadre du contournement « options de pure liquidité » (voir section 4.4) ne sont pas non plus assujetties à la CNSS à la levée (la liquidité étant l'événement déclencheur de paiement, non l'attribution).

## 6. Régimes étrangers comparables — ce que nous codifions

Le POSA PASE n'est pas inventé de toutes pièces ; c'est une expression OHADA / civiliste des structures qui ont fait leurs preuves ailleurs. La clause cite les comparables suivants pour que les rédacteurs et les régulateurs puissent vérifier la logique sous-jacente.

**France — BSPCE (Bons de Souscription de Parts de Créateur d'Entreprise).** Article 163 bis G du Code Général des Impôts français. Régime fiscal préférentiel pour les options émises par des sociétés françaises de moins de 15 ans avec capitalisation inférieure à 150 M€. Pas d'imposition à l'attribution ni à la levée ; imposition uniquement à la cession des actions sous-jacentes, au taux forfaitaire (12,8 % si détention < 3 ans, dégressif ensuite). Le BSPCE est le modèle direct du présent clause OHADA : il fonctionne dans une tradition civiliste, codifié par amendement ciblé du CGI, sans création d'entité corporative nouvelle. Le BSPCE est ce que la PASE Tier 2 / Tier 3 ambitionne pour les pays OHADA — une catégorie statutaire d'options de souscription pour les startups labellisées, avec imposition différée à la cession.

**France — AGA (Attributions Gratuites d'Actions).** Articles L. 225-197-1 et suivants du Code de Commerce français. Régime d'attribution d'actions gratuites sous conditions de présence et / ou de performance. Imposition différée à la cession des actions à la fin de la période de conservation. L'AGA est l'alternative française au BSPCE pour les sociétés ne remplissant pas les critères du BSPCE, et elle constitue un modèle utile pour la structure d'options de pure liquidité recommandée en Tunisie.

**Espagne — Ley 28/2022 (Loi sur les Startups).** L'article 5 de la Loi espagnole sur les startups modifie l'article 42 de la Loi sur l'Impôt sur le Revenu des Personnes Physiques pour différer l'imposition des options sur titres émises par les startups labellisées par l'ENISA au moment de la liquidité (cession des actions sous-jacentes), plutôt qu'à l'attribution ou à la levée. C'est le précédent législatif le plus net pour l'objectif « imposition à la liquidité » que PASE Tier 2 préconise pour les juridictions africaines. (Référence : BOE-A-2022-23845, 22 décembre 2022.)

**Belgique — Loi du 26 mars 1999 sur les options sur actions.** Régime hybride : imposition à l'attribution (60ème jour) ou à la levée, au choix du Bénéficiaire, avec base imposable forfaitaire (pourcentage de la valeur des actions). C'est un modèle utile pour les juridictions OHADA qui souhaitent introduire un régime d'options sans rupture totale avec le principe d'imposition à l'attribution — il établit une base imposable forfaitaire bas, plutôt que la valeur théorique pleine.

**Royaume-Uni — EMI (Enterprise Management Incentive).** Schedule 5, Income Tax (Earnings and Pensions) Act 2003. Régime d'options émises par des PME (actifs bruts < 30 M£, effectif < 250 salariés). Pas d'IR ni de cotisations sociales à l'attribution ni à la levée ; impôt sur les plus-values (avec Business Asset Disposal Relief à 10 %) à la cession. L'EMI est le régime d'options statutaire le plus généreux dans une juridiction de common law et constitue un modèle structurel pour PASE Tier 3 dans une amélioration statutaire du droit des sociétés africain.

## 7. Modes de défaillance — ce qui arrive sans PASE

La présente section catalogue les défaillances opérationnelles que le POSA PASE vient remédier. Elles sont tirées du paper et de la pratique documentée dans les quatre juridictions d'ancrage.

**Tunisie (illustratif).** Une ingénieure ML senior d'une startup IA tunisoise reçoit des options au titre du plan de la société. Au titre de l'article 38 de l'IRPP, l'attribution est imposée à la levée comme un revenu salarial sur la valeur théorique de l'écart, au taux marginal de l'ingénieure (jusqu'à 35 %). La société étant non cotée et les actions illiquides, l'ingénieure n'a aucune source de liquidités pour payer l'impôt. Les issues pratiques documentées au paper sont : (i) l'ingénieure refuse les options et accepte un salaire en numéraire plus élevé, abandonnant l'upside en capital ; (ii) l'ingénieure migre vers la paie de la société mère britannique ou américaine et est rémunérée en options de la juridiction étrangère, invisibles à l'administration fiscale tunisienne ; ou (iii) l'ingénieure se relocalise physiquement vers la juridiction de la société mère dans les 24 mois suivant son embauche.

**Sénégal (illustratif).** Une SARL sénégalaise opérant dans la fintech souhaite attribuer des options à ses ingénieurs principaux. Les articles 39 (règle « une action, une voix ») et 309–314 (capital minimum, structures de gouvernance rigides) de l'AUSCGIE rendent l'attribution domestique d'options peu praticable dans une SA. La société se restructure en SAS (flexibilité statutaire OHADA), mais l'Instruction BCEAO 2012-09 ne reconnaissant que la dette et le capital, la structure sous-jacente d'option-sur-actions-futures se trouve dans une zone grise juridique. La société achemine en pratique les options via une société mère mauricienne. La DGID ne reconnaît pas les options offshore aux fins fiscales ; le Code du Travail sénégalais ne fournit pas de cadre pour les contentieux portant sur des actions non acquises. Lors d'une cession hypothétique, les droits économiques de l'ingénieur dépendent entièrement du pacte d'associés mauricien, sur lequel la DGID et les tribunaux sénégalais n'ont aucune juridiction.

**Côte d'Ivoire (illustratif).** Une startup ivoirienne (Djamo, type fintech bancaire numérique) souhaite attribuer des options à ses 15 premiers ingénieurs. Les contraintes OHADA sur les actions à classes multiples obligent à passer par une structure offshore (Maurice ou Cayman). L'absence de traitement comptable SYSCOHADA pour les ESOP (articles 10–15, paper p. 54) crée une incertitude sur la comptabilisation des options dans les états financiers de la société ivoirienne (impact sur la dilution comptable, le résultat, et les ratios prudentiels). Le résultat documenté : les sociétés évitent les ESOP locaux et passent toutes les attributions à la société mère étrangère, créant une asymétrie de gouvernance et une exposition fiscale latente.

**RDC (illustratif).** Une société congolaise du secteur mobile money (Maxicash, type service de paiement) emploie plus d'agents que de salariés directs pour échapper aux contraintes des articles 40 et 67 du Code du Travail (paper p. 52). La rémunération en capital pour les agents n'a aucun cadre juridique reconnu (les agents ne sont pas salariés ; les régimes d'options sont conçus pour les salariés). Le résultat : aucune participation des agents au capital, malgré leur rôle critique dans la valeur créée.

**Transversal.** L'effet agrégé dans les quatre juridictions OHADA / civilistes d'ancrage est que le talent senior de l'économie de la connaissance des startups africaines accepte soit des actions étrangères opaques (avec risque juridique pour l'employé et la société), soit refuse la rémunération en capital entièrement, soit se relocalise. Le paper documente qu'environ 30 % du talent ingénieur senior des startups de croissance africaines se relocalise physiquement dans les trois ans suivant l'embauche ; le POSA PASE existe pour rendre cette décision économiquement inutile.

## 8. Notes de mise en œuvre par juridiction

Pour le cabinet d'avocats local engagé à adopter la clause PASE pour une société donnée, les étapes de mise en œuvre suivantes ancrent chaque juridiction.

### 8.1 Sénégal — SAS sénégalaise au titre de l'AUSCGIE

1. Vérifier que les statuts permettent l'émission de classes d'actions multiples (ou les modifier en conséquence en s'appuyant sur la flexibilité statutaire de la SAS au titre de l'AUSCGIE — voir clause PASE actions à classes multiples).
2. Délibération du président de la SAS adoptant le Plan, fixant l'Enveloppe à 10 % du capital pleinement dilué, et autorisant le Comité.
3. Décision collective des associés ratifiant le Plan, en respectant les droits de préemption prévus aux statuts et au pacte d'associés.
4. Inscription des modifications statutaires au RCCM dans les délais légaux (typiquement 1 mois).
5. Pour chaque attribution : délibération du président, émission de la Convention d'Attribution, mise à jour du tableau de capitalisation, et inscription au registre des mouvements de titres à la levée.
6. Si la Société est labellisée au titre de la Loi n° 2020-01, demander à la DGID un rescrit confirmant que l'IRPP ne sera pas assis à l'attribution lorsque le prix de souscription égale la VV ; à défaut, accompagner le Plan d'une lettre annexe au Bénéficiaire clarifiant la position.
7. Maintenir la documentation contemporaine de VV au titre de l'article 1.7 du Plan.

### 8.2 Côte d'Ivoire — SAS ivoirienne au titre de l'AUSCGIE

1. Comme au Sénégal pour la vérification des statuts et la flexibilité SAS.
2. Délibération du président et décision collective des associés.
3. Inscription au RCCM ivoirien.
4. Pour chaque attribution : comme au Sénégal.
5. SYSCOHADA : comptabilisation des options selon le traitement adopté, en notant l'absence de traitement clair aux articles 10–15 (paper p. 54) ; PASE recommande un traitement provisoire en charges sur la période d'acquisition, à réviser à l'adoption de l'Annexe B SYSCOHADA proposée.
6. DGI : demander un rescrit fiscal sur le traitement des options ; à défaut, lettre annexe.

### 8.3 RDC — SAS congolaise au titre de l'AUSCGIE

1. Comme au Sénégal et en Côte d'Ivoire pour la vérification des statuts.
2. Délibérations.
3. Inscription au Greffe du Tribunal de Commerce.
4. **Note spécifique RDC :** obtenir l'autorisation préalable de la Banque Centrale du Congo (BCC) pour toute option émise à un Bénéficiaire non résident ou pour toute levée par un Bénéficiaire non résident, conformément à l'article 70 de la Réglementation des Changes 2014.
5. DGI : déclaration de l'attribution et de la levée à l'administration fiscale ; demande de rescrit si la Société est labellisée « JEI ».

### 8.4 Tunisie — SA tunisienne ou SUARL au titre du Code des Sociétés Commerciales

1. Vérifier que les statuts permettent l'émission d'actions de préférence ou d'actions sans droit de vote (la Tunisie n'est pas OHADA, mais le Code des Sociétés Commerciales tunisien est plus rigide que l'AUSCGIE sur ce point — voir clause PASE actions à classes multiples).
2. Délibération du conseil d'administration adoptant le Plan, à structurer impérativement comme un plan d'**options de pure liquidité** (voir section 4.4) pour éviter l'application de l'article 38 de l'IRPP.
3. Assemblée générale extraordinaire ratifiant le Plan.
4. Inscription au RNE (Registre National des Entreprises).
5. **Note spécifique Tunisie :** la Convention d'Attribution doit explicitement préciser que l'Option n'est ni un salaire ni un avantage en nature à l'attribution, et ne devient un revenu salarial qu'à la cession des actions sous-jacentes lors d'un Événement de Liquidité. Cette clarification est critique pour échapper à l'article 38.
6. CMF : aucune approbation requise pour une SA non cotée. Pour une SA ayant l'intention d'introduire en bourse, des obligations de divulgation s'appliqueront.
7. BCT (Banque Centrale de Tunisie) : autorisation préalable pour toute levée par un Bénéficiaire non résident, conformément aux articles 6 et suivants du Code des Changes ; le paper p. 49 documente l'incohérence persistante entre la Loi sur les Startups (article 17, accordant des comptes en devises) et le Code des Changes (article 6, requérant l'autorisation BCT).

## 9. Citations sources

La présente clause est rédigée par référence à :

**Le document de politique publique.** *Integrating Africa's Startup Acts: Building a Legal Architecture for a Single Digital Market.* Spécifiquement :
- Section 3, country-by-country review of Africa's enacted startup acts, pp. 49–55 (Tunisie, Sénégal, RDC, Nigeria, Côte d'Ivoire, Éthiopie).
- Section 4, Finding #1: Startup acts introduce new layers alongside existing laws, pp. 62–63 (Recommandation : mises à jour ciblées des lois existantes plutôt que systèmes parallèles).
- Section 5.1, Core Recommendation #1: National level — surgical code fixes with digital rails, p. 68 (Modifications du droit du travail permettant la rémunération en capital avec différé d'imposition à la liquidité).
- Section 5.3, Ecosystem Recommendation #3: Industry level — Pan-African Startup Entity, pp. 71–72 (Cadre ESOP standardisé, dispositions de vesting, traitement fiscal approprié à la liquidité plutôt qu'à l'attribution).

**Textes OHADA.**
- Acte uniforme relatif au droit des sociétés commerciales et du GIE (AUSCGIE), Articles 5, 6, 39, 309–314 (formes sociales, règle « une action, une voix », gouvernance et capital minimum des SA).
- Acte uniforme sur les sûretés (2010), Articles 233–246 (instruments de garantie).
- SYSCOHADA (Système Comptable OHADA révisé), Articles 10–15 (immobilisations incorporelles, traitement des frais).
- Acte uniforme portant procédures simplifiées de recouvrement et voies d'exécution.

**Textes sénégalais.**
- Loi n° 2020-01 du 6 janvier 2020 portant statut des startups, Article 8 (exonérations fiscales).
- Code Général des Impôts (Loi n° 2012-31, modifiée), Articles 167 et suivants (revenus salariaux), Article 259 (plus-values).
- Code du Travail (Loi n° 97-17), Articles L.40, L.67.
- Code de Sécurité Sociale ; règlements IPRES et CSS.
- BCEAO Instruction n° 2012-09 (instruments financiers reconnus).
- BCEAO Règlement R09/98/CM/UEMOA (réglementation des changes).

**Textes ivoiriens.**
- Loi sur les Startups (Loi n° 2024-XXX portant sur la digitalisation et le développement des startups, PADS).
- Code Général des Impôts (annexe à la loi de finances 2018, modifié annuellement), Article 15, Article 116, Articles 6 et suivants (plus-values).
- Code du Travail (Loi n° 2015-532), Articles 31 et suivants.
- Régulations CNPS.

**Textes congolais.**
- Ordonnance-loi n° 22/030 du 13 septembre 2022 portant Code des Investissements et statut des Jeunes Entreprises Innovantes, Articles 13–16, 31, 34–38, 42.
- Code Général des Impôts (Ordonnance-loi n° 69/006), Articles 17 et suivants.
- Code du Travail (Loi n° 015/2002), Articles 40, 67.
- Réglementation des Changes 2014, Article 70.

**Textes tunisiens.**
- Loi n° 2018-20 du 17 avril 2018 portant Startup Act, Articles 3, 8, 9, 13, 17, 19.
- Code de l'IRPP (Loi n° 89-114), Article 38.
- Code des Sociétés Commerciales (Loi n° 2000-93), Articles 94, 154, 190, 388.
- Code du Travail tunisien, Article 57.
- Code des Changes (Loi n° 76-18), Article 6.
- Décret n° 2018-1037 sur le marché des capitaux.
- Mémorandum BCT février 2020 (traitement des SAFEs).

**Régimes étrangers comparables.**
- France : Code Général des Impôts, Article 163 bis G (régime BSPCE) ; Articles L. 225-197-1 et suivants du Code de Commerce (AGA).
- Espagne : Ley 28/2022 de fomento del ecosistema de las empresas emergentes, Article 5. BOE-A-2022-23845.
- Belgique : Loi du 26 mars 1999 relative au plan d'action belge pour l'emploi 1998 et portant des dispositions diverses, Article 41 et suivants (options sur actions).
- Royaume-Uni : Income Tax (Earnings and Pensions) Act 2003, Schedule 5 (régime EMI).

**Références internes PASE.**
- Clause PASE actions à classes multiples (OHADA) — s'articule avec l'article 1.4 (Enveloppe) du présent Plan.
- Clause PASE SAFE (OHADA) — s'articule avec l'article 1.10 (Ajustements) et la date de commencement d'acquisition pour les embauches en phase d'amorçage.

## 10. Questions ouvertes pour révision

1. **Forme sociale recommandée.** La SAS offre la flexibilité statutaire requise pour la rémunération en capital sous l'AUSCGIE. La SA est plus contrainte (article 39, règle « une action, une voix »). Les rédacteurs doivent confirmer la forme sociale au cas par cas ; pour les sociétés constituées en SA pour des raisons réglementaires (notamment dans les secteurs financiers réglementés), un contournement par pacte d'associés peut être nécessaire mais sera moins robuste qu'une SAS native.
2. **Mécaniques de rafraîchissement de l'enveloppe.** Comme dans la version common law, les rédacteurs doivent considérer si fixer un pourcentage de rafraîchissement (par exemple +5 % du pleinement dilué à chaque tour) ou laisser à la discrétion du Comité. La pratique varie.
3. **Définition de la faute grave.** À définir étroitement dans la Convention d'Attribution. La PASE par défaut suggère manquement matériel aux devoirs fiduciaires, négligence grave, condamnation pénale, ou faute intentionnelle ; mais la définition exacte dépendra du droit du travail de la juridiction et de l'appétit pour le risque de la société.
4. **Articulation avec les droits de cession forcée et de sortie conjointe.** La clause suppose que les statuts et le pacte d'associés incluent les clauses standard. Les rédacteurs doivent confirmer l'articulation, en particulier pour le traitement des options levées mais non liquidifiées lors d'un Changement de Contrôle.
5. **Alternative phantom equity en Tunisie.** Pour la Tunisie, où le contournement « options de pure liquidité » repose sur une interprétation favorable de l'article 38 IRPP qui n'a pas été testée en jurisprudence, les rédacteurs doivent considérer une structure parallèle de phantom equity / participation aux plus-values en numéraire à la liquidité, qui présente un risque fiscal plus prévisible (imposition comme salaire à la date de versement, sans question sur la valeur théorique à l'attribution).
6. **Statut OHADA de la Tunisie.** La Tunisie n'est pas membre de l'OHADA mais suit une tradition civiliste. Les rédacteurs doivent noter que les références OHADA (AUSCGIE, SYSCOHADA, BCEAO) ne s'appliquent pas en Tunisie, et que la documentation tunisienne doit être adaptée en conséquence — la présente clause OHADA / civil-law inclut la Tunisie par tradition juridique, non par appartenance OHADA.
