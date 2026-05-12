# Obligation Convertible en Actions (OCA) — PASE Standard (OHADA / civil-law)

> **Statut :** Version 0.1 — standard de référence. Ne constitue pas un avis juridique.
> **Couche :** 4 sur 7 de la pile PASE pour Fondateurs (instruments d'investisseurs, variante dette). En complément de la [clause SAFE](./safe.ohada.md).
> **Traditions :** OHADA / civil-law (Sénégal, Côte d'Ivoire, RDC, Tunisie). [Parallèle common-law](./convertible-note.common-law.md).

## Ce que PASE codifie

Une Corporation PASE émet une OCA comme instrument de dette qui :

1. **Est une dette avec une date d'échéance** — intérêts s'accumulent, principal se rembourse, droits de créancier s'appliquent. Classification propre sous AUSCGIE 822-839 et son équivalent tunisien CSC 332-355.
2. **Se convertit automatiquement au prochain Tour de Financement Qualifié** dans la même catégorie que le tour à valorisation fixée, au plus bas entre Prix-Plafond et Prix-Décoté.
3. **Verse à un Changement de Contrôle avant échéance** — élection investisseur : remboursement avec prime, ou conversion au Prix-Plafond.
4. **Traite l'échéance proprement** — élection investisseur : remboursement, ou Conversion à l'Échéance au Prix-Plafond (évite le problème de ballon non financé).
5. **Porte CNPF, subordination, et clauses de défaut standard** — covenants de dette habituels.

Le principe : **l'instrument de phase d'amorçage financièrement fundable institutionnellement dans l'espace OHADA et civiliste.** Là où la classification du SAFE est contestée par BCEAO/BCT, l'OCA est dette propre — émission plus simple, comptabilisation plus simple, dégagement réglementaire plus simple.

## Note structurelle — l'OCA est l'instrument plus simple en OHADA / civil-law

**L'OCA est l'instrument hybride le plus administrativement fiable dans l'espace OHADA / civil-law**, et c'est important à dire ouvertement. Trois raisons :

1. **AUSCGIE Articles 822-839 fournissent un cadre statutaire mature pour les OCA** (paper p. 58, 350). Autorisation par AGE (ou délégation au conseil sous conditions), conditions de conversion, protection des porteurs via assemblée spéciale, formalismes RCCM bien définis. Pas de zone grise.
2. **Le Code des Sociétés Commerciales tunisien Articles 332-355** fournissent un cadre **encore plus mature** que l'AUSCGIE pour les *obligations convertibles* — la Tunisie a une pratique de OCA depuis des décennies dans son marché coté.
3. **Le BCEAO Instruction 2012-09 reconnaît la dette**, et l'OCA en première intention est dette. **Pas de zone grise prudentielle** (contrairement au SAFE).

**Par défaut, PASE recommande l'OCA dans l'espace OHADA et la Tunisie**, pas le SAFE. Cette préférence est le contraire de la common-law (où SAFE et convertible note sont à peu près interchangeables).

## Menu d'instruments

| Variante | Mécanique | Cas de référence |
|---|---|---|
| **Plafond + Décote + CNPF** | Conversion au plus bas du Prix-Plafond et du Prix-Décoté ; CNPF aux OCA subséquentes | Défaut. Structure YC-équivalente adaptée à OHADA. |
| **Plafond seul** | Conversion au seul Prix-Plafond | Rare. |
| **Décote seule** | Conversion au seul Prix-Décoté | Friends-and-family. |
| **OCA + BSA (warrant coverage)** | OCA + BSA pour actions supplémentaires (typiquement 10-25 % du principal) | DFI (Proparco, FMO, BIO, DEG) et investisseurs institutionnels exigeant tampon de dilution. Standard pour le marché DFI africain. |
| **OCA sécurisée** | OCA + sûreté sur actifs de la Société (nantissement de fonds de commerce, hypothèque) | Lorsque l'investisseur exige protection de créancier. Standard pour la dette de venture. |

**Règle de décision :** Plafond + Décote + CNPF est le défaut. Ajouter couverture BSA si l'investisseur est DFI. Sécurisée pour les tours plus tardifs.

## Mécaniques (défauts PASE)

| Paramètre | Défaut | Configurable |
|---|---|---|
| Principal | Montant Souscrit | Oui |
| Taux d'intérêt | 5 % par an, simple, comptabilisé mensuellement | Oui |
| Échéance | 24 mois | Oui (extension par consentement) |
| Taux de Décote | 80 % (20 % de décote) | Oui |
| Seuil de Tour de Financement Qualifié | Tour à valorisation fixée ≥ 1 000 000 USD | Oui |
| Prix de conversion | Plus bas du Prix-Plafond et du Prix-Décoté | Fixe |
| Traitement à l'échéance | Élection investisseur : remboursement OU Conversion à l'Échéance au Prix-Plafond | Élection dans 30 jours ; défaut à Conversion |
| Traitement Changement de Contrôle | Élection investisseur : remboursement + prime 1× OU conversion au Prix-Plafond | Élection dans 10 jours ouvrés ; défaut à remboursement avec prime |
| CNPF | CNPF standard aux termes plus favorables des OCA subséquentes | Fixe |
| Subordination | Subordonnée à la dette sécurisée senior ; prime sur le capital ordinaire ; pari passu avec autres OCA du même tour | Fixe |
| Sûreté | Non sécurisée | Oui (variante sécurisée disponible) |
| Défaut | Habituels : défaut de paiement, insolvabilité, violation matérielle, défaut croisé > 100 000 USD | Fixe |

## Le cas

L'OCA est l'**instrument plus simple** dans l'espace OHADA / civil-law parce que son cadre statutaire est mature :

- **AUSCGIE Articles 822-839** traitent les obligations convertibles. Autorisation AGE, protection des porteurs, conversion formalisée, RCCM. Pas de zone grise.
- **Code Sociétés Commerciales tunisien Articles 332-355** traitent les obligations convertibles depuis des décennies. Plus mature que l'OHADA.
- **BCEAO Instruction 2012-09 reconnaît la dette** et l'OCA est dette en première intention.
- **L'article 12 de la Loi 2020-01 sénégalaise** mentionne expressément les « titres convertibles » comme catégorie envisagée (paper p. 50). Référence statutaire existante.

Par contraste, le SAFE (voir [clause séparée](./safe.ohada.md)) flotte dans une zone grise réglementaire. **Pour les tours institutionnels dans l'espace OHADA, l'OCA est l'instrument par défaut PASE.**

## Implémentation par juridiction

| Juridiction | Hook statutaire | Contrainte actuelle | Workaround PASE | Demande Tier 2 |
|---|---|---|---|---|
| **Sénégal** | AUSCGIE 822-839 ; Loi 2020-01 art 12 ; CGI sénégalais art 472+ (droits d'enregistrement) ; BCEAO Instruction 2012-09 | Cadre OHADA mature, applicable directement | OCA sous AUSCGIE 822-839 + Contrat de Souscription ; déclaration BCEAO si investisseur non-résident ; enregistrement CGI dans 1 mois | Application automatique des exonérations fiscales du Startup Act à l'émission OCA pour startups labellisées DER/FJ |
| **Côte d'Ivoire** | AUSCGIE 822-839 ; Loi PADS 2024 ; AMF-UEMOA | Idem Sénégal | Idem Sénégal sous régime AMF-UEMOA | Idem Sénégal |
| **RDC** | AUSCGIE 822-839 ; Ordonnance 22/030 ; Régl. Changes 2014 art 70 | AUSCGIE mature ; mais art 70 Régl. Changes requiert autorisation BCC pour investisseurs non-résidents (45-60 jours) | OCA sous AUSCGIE + autorisation BCC préalable couvrant à la fois l'émission et la conversion future | Autorisation BCC simplifiée pour OCA émises par startups labellisées JEI |
| **Tunisie** | Code Sociétés Commerciales (Loi 2000-93) art 332-355 ; Code IRPP art 14 ; Code Changes art 6 ; Loi 2018-20 | Cadre tunisien le plus mature de toutes les juridictions PASE. CSC reconnait les OCA depuis 2000. | OCA sous CSC 332-355 + Contrat de Souscription ; autorisation BCT si non-résident ; enregistrement à droit fixe | Article 13 du Startup Act clarifié pour reconnaître spécifiquement les OCA émises par startups labellisées (faible priorité — le cadre existant fonctionne déjà) |

## Comparables étrangers

- **France — Code de Commerce L.228-91 à L.228-106** régissent les OCA. Régime mature et profondément intégré dans la pratique du capital-risque français. PASE OHADA suit la structure française.
- **France — OCEANE** (Obligation Convertible ou Échangeable en Actions Nouvelles ou Existantes). Variante française pour sociétés cotées. Hors champ pour startups PASE en pratique mais utile à connaître pour structurations de sortie.
- **Belgique — Code des Sociétés et Associations Articles 7:54+** régissent les obligations convertibles. Régime similaire au français.
- **Luxembourg — Loi du 10 août 1915 Articles 32-43**. Pertinent pour structurations Tier 2 avec holding luxembourgeois en parallèle d'opérationnelle OHADA.
- **YC Standard Convertible Note** (États-Unis, publiquement disponible). Pertinent comme référence pour les investisseurs américains structurant des tours africains.

## Comment cette couche s'articule avec les Startup Acts

Pour les OCA, l'interaction avec les Startup Acts est **moins critique** que pour le SAFE parce que la classification de dette est partout reconnue :

- **Tier 1 (aujourd'hui).** L'OCA fonctionne proprement dans toutes les juridictions OHADA et en Tunisie sous les cadres statutaires existants. **Pas de Startup Act requis.** Pas de dispute de classification (contrairement au SAFE).
- **Tier 2 (12-24 mois).** La demande Startup Act est **certitude sur la déductibilité des intérêts** et **simplification de la retenue à la source** pour les investisseurs non-résidents finançant des startups labellisées. Plus petite demande que la classification du SAFE.
- **Tier 3 (3-5 ans).** Traitement préférentiel codifié pour les OCA émises par startups labellisées — RAS réduite, sécurité de déductibilité, formalismes BCEAO/BCT simplifiés.

**L'asymétrie est intentionnelle dans le design PASE.** L'OCA est l'instrument qui fonctionne déjà ; PASE codifie les défauts structurels et l'uniformité inter-juridictionnelle. Le SAFE est l'instrument qui requiert du travail Tier 2 pour atterrir proprement. **Les rédacteurs aujourd'hui dans l'espace OHADA devraient se rabattre sur l'OCA pour les tours institutionnels** et utiliser le SAFE seulement où la vitesse importe plus que la certitude de classification.

## Modes de défaillance (sans PASE)

- **Une fintech sénégalaise lève via SAFE.** L'investisseur DFI européen exige un SAFE format YC. La BCEAO ne reconnaît pas l'instrument. La société et l'investisseur structurent un SAFE bilatéral, mais la BCEAO refuse de qualifier l'opération comme « titre convertible » au sens de l'article 12 de la Loi 2020-01. **L'opération aurait été propre sous OCA AUSCGIE 822-839** — PASE recommande l'OCA dans ce cas.
- **Une startup tunisoise lève sous SAFE.** Le mémorandum BCT février 2020 classe l'instrument comme dette. La société se retrouve avec une dette comptable qu'elle ne voulait pas, distorsion fiscale, comptable, et prudentielle. **L'OCA sous CSC 332-355 aurait été propre** — pas de mémorandum BCT contradictoire, cadre statutaire mature.
- **Une SAS ivoirienne lève USD 1M en OCA via Mauritius.** Les juristes locaux non familiers de l'AUSCGIE 822-839 recommandent par défaut une structure mauricienne. Le tour ferme en 4 mois avec coûts juridiques de USD 80K. **Sous OCA AUSCGIE directe, le tour aurait fermé en 6 semaines pour USD 15K.** L'éducation des juristes locaux est partie du programme PASE.

## Progression Tier

- **Tier 1 (aujourd'hui).** OCA sous AUSCGIE 822-839 (OHADA) ou CSC 332-355 (Tunisie). Fonctionne proprement.
- **Tier 2 (12-24 mois).** Application automatique des exonérations fiscales des Startup Acts à l'émission OCA pour startups labellisées ; BCC simplifiée pour la RDC ; RAS optimisée.
- **Tier 3 (3-5 ans).** Traitement préférentiel codifié pour les OCA émises par startups labellisées.

## Références croisées dans PASE

- **Lit la couche 1** (actions à classes multiples) — mécaniques de conversion réfèrent à l'architecture de classes d'actions.
- **Lit la couche 3** (ESOP) — définition de Capitalisation inclut l'enveloppe ESOP pre-money.
- **Companion à la couche 4 (SAFE)** — même structure de kit, instrument différent ; **dans l'espace OHADA / civil-law, l'OCA est l'instrument par défaut PASE ; le SAFE est l'exception.**
- **Lue par la couche 5** (dette de venture, à venir) — la dette de venture est la version senior sécurisée de l'OCA ; chevauchement structurel.
- **Lue par la couche 6** (standard de table de capitalisation) — les OCA en circulation apparaissent sur la table avec mécaniques de conversion précisées.

## Citations

**Paper :** Section 3 profils pays p. 50 (Sénégal art 12), p. 52 (RDC), p. 54 (CI), p. 49 (Tunisie BCT), p. 60 (BCEAO), p. 58 (analyse OHADA OCA) ; preuves Finding #1 p. 62 ; Recommandation #1 dispositions du cadre des marchés financiers p. 68 ; Recommandation #3 bibliothèque d'instruments pp. 71-72.

**Textes OHADA :** AUSCGIE Articles 778+ (obligations en général), 822-839 (obligations convertibles en actions) ; Acte Uniforme sur les Sûretés (2010) Articles 233-246.

**Textes sénégalais :** Loi 2020-01 art 12 ; CGI sénégalais art 7+ (déductibilité), art 259 (plus-values), art 472+ (droits d'enregistrement) ; BCEAO Instruction 2012-09 ; BCEAO Règlement R09/98/CM/UEMOA ; Règlement CREPMF / AMF-UEMOA.

**Textes ivoiriens :** Loi PADS 2024 ; CGI ivoirien art 18 (déductibilité).

**Textes congolais :** Ordonnance 22/030 art 13-16 ; Régl. Changes 2014 art 70.

**Textes tunisiens :** Loi 2018-20 art 13 ; Code Sociétés Commerciales (Loi 2000-93) art 332-355 (obligations convertibles), art 144-148 ; Code IRPP art 14 (déductibilité) ; Code Changes (Loi 76-18) art 6 ; Code des Droits d'Enregistrement et de Timbre ; mémorandum BCT février 2020 ; Décret 2018-1037.

**Étrangers :** Code de Commerce français L.228-91 à L.228-106 (OCA) ; L.228-90 à L.228-103 (OCEANE) ; Code Sociétés et Associations belge Articles 7:54+ ; Loi luxembourgeoise du 10 août 1915 Articles 32-43 ; YC Standard Convertible Note (États-Unis).

## Artefacts de templates

OCA + Contrat de Souscription + Notification de Conversion + side-letter (CNPF, droits pro-rata) vivent à `content/templates/convertible-note/ohada/`. **Ils ne sont pas le standard** ; le standard est l'ensemble des règles ci-dessus.
