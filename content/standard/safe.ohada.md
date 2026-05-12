# Accord Simple d'Investissement en Capital Futur (SAFE) — PASE Standard (OHADA / civil-law)

> **Statut :** Version 0.1 — standard de référence. Ne constitue pas un avis juridique.
> **Couche :** 4 sur 7 de la pile PASE pour Fondateurs (instruments d'investisseurs, variante friction-light). En complément de la [clause OCA / convertible note](./convertible-note.ohada.md).
> **Traditions :** OHADA / civil-law (Sénégal, Côte d'Ivoire, RDC, Tunisie). [Parallèle common-law](./safe.common-law.md).

## Ce que PASE codifie

Une Corporation PASE émet un SAFE comme instrument de financement de phase d'amorçage à friction minimale qui :

1. **N'est pas une dette** — pas d'intérêts, pas d'échéance, pas de droits de créancier. L'investisseur verse le Montant Investi en contrepartie d'un droit à un capital futur.
2. **Se convertit automatiquement au prochain Tour de Financement Qualifié** dans la même catégorie que le tour à valorisation fixée, au plus bas entre le Prix-Plafond (Plafond de Valorisation ÷ Capitalisation) et le Prix-Décoté (prix du tour × Taux de Décote).
3. **Verse des actions au Prix-Plafond lors d'un Événement de Liquidité** avant maturité, l'investisseur choisissant entre numéraire ou actions.
4. **Restitue le Montant Investi en cas de Dissolution** avant toute distribution aux ordinaires.
5. **Porte des droits de Nation la Plus Favorisée** sur les termes des SAFE subséquents du même tour.

Le principe : **l'instrument de financement d'amorçage le plus léger qu'un investisseur acceptera de financer.** Pas de négociation d'échéance, de taux d'intérêt, ou de calendrier de remboursement ; tout est différé au prochain tour à valorisation fixée.

## Note structurelle — le SAFE est l'instrument plus difficile en OHADA

**Honnêteté importante :** dans l'espace OHADA et le droit civiliste (Tunisie), le SAFE est **structurellement plus difficile** à émettre proprement que l'OCA. Trois raisons :

1. **L'AUSCGIE ne reconnaît pas les instruments hybrides** (paper p. 50). Articles 778+ traitent les obligations ; il n'y a pas d'analogue pour le « droit au capital futur ».
2. **L'Instruction BCEAO 2012-09 ne reconnaît que la dette et le capital** (paper p. 60). Un SAFE n'est ni l'un ni l'autre — il flotte dans une zone grise prudentielle.
3. **Le mémorandum de la BCT de février 2020 classe les SAFEs comme dette** en Tunisie (paper p. 49), ce qui contredit la nature non-dette du SAFE et crée des conséquences fiscales et comptables non voulues.

**Pour les juridictions OHADA et la Tunisie, l'OCA (convertible note OHADA) est l'instrument hybride le plus administrativement fiable** parce qu'AUSCGIE 822-839 fournit un cadre statutaire mature. Le SAFE OHADA existe parce que (i) certains investisseurs anglo-saxons exigent un SAFE structuré pour des raisons de portefeuille, et (ii) à terme PASE Tier 2 demandera une reconnaissance BCEAO du SAFE pour startups labellisées. Mais **par défaut PASE recommande l'OCA dans l'espace OHADA, pas le SAFE.**

## Menu d'instruments

Lorsque le SAFE est l'instrument choisi (généralement à la demande de l'investisseur), les variantes :

| Variante | Mécanique | Cas de référence |
|---|---|---|
| **Plafond + Décote** | Conversion au plus bas du Prix-Plafond et du Prix-Décoté | Défaut. |
| **Plafond seul** | Conversion au seul Prix-Plafond | Investisseur protège le plafond mais accepte le prix du tour sinon. |
| **Décote seule** | Conversion au seul Prix-Décoté | Pas de précédent de valorisation à utiliser comme plafond ; rare. |
| **CNPF seule** | Sans plafond ni décote ; conversion au prix du tour ; CNPF aux SAFE subséquents | Friends & family. Investisseur aligné sans valorisation. |

## Mécaniques (défauts PASE)

| Paramètre | Défaut | Configurable |
|---|---|---|
| Montant Investi | À l'investisseur près | Oui |
| Plafond de Valorisation | À fixer par tour, uniforme dans le tour | Oui |
| Taux de Décote | 80 % (soit 20 % de décote) | Oui |
| Seuil de Tour de Financement Qualifié | Tour à valorisation fixée levant ≥ 1 000 000 USD (ou équivalent local) | Oui |
| Prix de conversion | Plus bas du Prix-Plafond et du Prix-Décoté | Fixe |
| Traitement Événement de Liquidité | Élection de l'investisseur : numéraire du Montant Investi, OU actions au Prix-Plafond | Fixe |
| Événement de Dissolution | Investisseur récupère le Montant Investi avant les ordinaires | Fixe |
| CNPF | CNPF standard aux SAFE subséquents du même tour | Fixe |
| Transférabilité | Avec consentement de la Société, sauf affiliés/successeurs | Oui |
| Échéance | Aucune | Fixe (raison d'être du SAFE) |
| Intérêts | Aucun | Fixe |

## Le cas

Le SAFE a été développé par Y Combinator en 2013 (forme post-money 2018) pour comprimer les tours de financement d'amorçage de semaines à jours. L'instrument a été adopté par l'ensemble des marchés américain et britannique d'amorçage et est devenu le standard de facto pour le financement d'amorçage à friction minimale au niveau mondial.

Les juridictions OHADA et la Tunisie manquent de reconnaissance statutaire expresse du SAFE :

- **L'AUSCGIE n'a pas d'analogue pour le « droit au capital futur »** (paper p. 50). Articles 778+ traitent les obligations classiques ; les instruments hybrides ne sont pas formalisés.
- **L'article 12 de la Loi 2020-01 sénégalaise mentionne les « titres convertibles »** (paper p. 50) mais sans implémentation OHADA. La référence statutaire existe ; l'opérationnalisation manque.
- **L'Instruction BCEAO 2012-09 ne reconnaît que dette et capital.** Un SAFE échappe aux deux catégories et flotte dans une zone grise prudentielle.
- **Le mémorandum BCT février 2020 (Tunisie) classe les SAFEs comme dette**, contredisant leur nature non-dette.

L'alternative structurelle : **l'OCA (convertible note OHADA)** [voir clause séparée](./convertible-note.ohada.md). Pour la plupart des tours d'amorçage avec investisseurs institutionnels dans l'espace OHADA aujourd'hui, **l'OCA est l'instrument plus sûr**.

## Implémentation par juridiction

| Juridiction | Hook statutaire | Contrainte actuelle | Workaround PASE | Demande Tier 2 |
|---|---|---|---|---|
| **Sénégal** | AUSCGIE 778+ ; Loi 2020-01 art 12 ; BCEAO Instruction 2012-09 | BCEAO ne reconnaît que dette et capital ; AUSCGIE ne formalise pas l'hybride | SAFE bilatéral sous AUSCGIE (autonomie contractuelle) + lettre annexe clarifiant la nature non-dette ; **par défaut PASE recommande OCA** | Circulaire BCEAO reconnaissant SAFE comme instrument lié au capital pour startups labellisées DER/FJ |
| **Côte d'Ivoire** | AUSCGIE 778+ ; Loi PADS 2024 ; BCEAO Instruction 2012-09 | Idem Sénégal | Idem Sénégal | Idem (BCEAO régional, applicable aux 8 pays UEMOA) |
| **RDC** | AUSCGIE 778+ ; Régl. Changes 2014 art 70 | AUSCGIE pas de formalisme hybride ; autorisation BCC pour bénéficiaires non-résidents | SAFE bilatéral sous AUSCGIE + autorisation BCC ; **par défaut PASE recommande OCA** | Aucune demande BCEAO (RDC pas UEMOA) ; demande BCC pour traitement simplifié des SAFEs |
| **Tunisie** | Code Sociétés Commerciales (Loi 2000-93) art 144-148 ; Loi 2018-20 ; Code Changes (Loi 76-18) art 6 ; **mémorandum BCT février 2020** | **Mémorandum BCT classe SAFE comme dette** — conséquences fiscales et comptables non voulues | SAFE bilatéral sous CSC + lettre annexe clarifiant la nature non-dette ; **par défaut PASE recommande OCA** | Mémorandum BCT révisé reconnaissant SAFE comme instrument de capital pour startups labellisées |

## Comparables étrangers

- **États-Unis — YC Standard Post-Money SAFE** (publiquement disponible à ycombinator.com). Le modèle canonique mondial. Le SAFE OHADA PASE est adapté de ce modèle.
- **France — Bon de Souscription Autonome (BSA)** + **Promesse Unilatérale d'Achat**. La France n'a pas d'analogue SAFE direct ; les structures de financement d'amorçage utilisent typiquement des BSA ou des OCA. Le BSA est l'instrument français le plus proche d'un SAFE — bon de souscription d'actions avec mécaniques de conversion.
- **Royaume-Uni — Convertible Loan Note (CLN)**, standard BVCA. Le Royaume-Uni utilise les CLN plutôt que les SAFE ; pertinent parce que les investisseurs britanniques structurent leurs investissements dans les startups OHADA contre des CLN.
- **Israël — Convertible Note adapté YC.** Israël a adapté le SAFE YC pour son marché d'amorçage ; modèle alternatif à étudier pour l'OHADA.

## Comment cette couche s'articule avec les Startup Acts

Pour les SAFEs spécifiquement, l'interaction avec les Startup Acts est **principalement au Tier 2** :

- **Tier 1 (aujourd'hui).** SAFE bilatéral sous autonomie contractuelle dans toutes les juridictions OHADA et la Tunisie. **Pas de Startup Act requis.** Le risque est la classification (BCEAO/BCT/SYSCOHADA), pas l'interdiction d'émission.
- **Tier 2 (12-24 mois).** **L'amendement Startup Act est réglementaire (BCEAO, BCT, COSUMAF), pas législatif.** Chaque régulateur des marchés financiers ou autorité monétaire émet une circulaire reconnaissant les SAFEs comme instruments liés au capital lorsque émis par des startups labellisées. Pour le BCEAO, une seule circulaire débloque les 8 pays UEMOA simultanément.
- **Tier 3 (3-5 ans).** Reconnaissance statutaire du SAFE comme catégorie d'instrument dans l'AUSCGIE — adoption au niveau OHADA, débloquant les 17 États membres en une fois.

**Contraste notable :** la clause OCA (convertible note) n'a pas le même verrou réglementaire parce que la dette est partout reconnue. Le SAFE est spécifiquement bloqué par la classification hybride. C'est pourquoi PASE fournit les deux instruments — pour les rédacteurs dans les juridictions où la classification SAFE est contestée, l'OCA peut être utilisée pendant que le travail Tier 2 se déroule en parallèle.

## Modes de défaillance (sans PASE)

- **Tour d'amorçage tunisien avec SAFE.** Investisseur français vire 200 000 USD à une SA tunisienne en contrepartie d'un SAFE YC-standard. Le mémorandum BCT classe l'instrument comme dette ; la BCT impose une retenue à la source sur les « intérêts » présumés (il n'y en a pas) ; le commissaire aux comptes refuse de comptabiliser le SAFE en fonds propres. Six mois de discussions. **Le contournement PASE — OCA à la place du SAFE — éliminerait entièrement le problème.**
- **Tour d'amorçage sénégalais.** SAS sénégalaise émet SAFE à un fonds européen. BCEAO Instruction 2012-09 ne reconnaît pas l'instrument. La société et l'investisseur signent un SAFE bilatéral sous AUSCGIE + une lettre annexe clarifiant la nature ; la BCEAO ne s'oppose pas mais ne reconnaît pas formellement. Le SAFE convertit deux ans plus tard sans incident — mais la BCEAO n'a jamais pris de position.
- **Tour ivoirien choisit OCA plutôt que SAFE.** Le conseil local recommande l'OCA en raison de sa solidité statutaire sous AUSCGIE 822-839 ; le SAFE est écarté. Le tour se ferme en 4 semaines avec OCA. **C'est la bonne réponse aujourd'hui dans l'espace OHADA.**

## Progression Tier

- **Tier 1 (aujourd'hui).** SAFE bilatéral sous autonomie contractuelle + lettre annexe. Fonctionne avec friction acceptable ; PASE recommande l'OCA par défaut.
- **Tier 2 (12-24 mois).** Circulaire BCEAO (UEMOA) ; mémorandum BCT révisé (Tunisie) ; règlement COSUMAF (CEMAC). Reconnaissance du SAFE comme instrument lié au capital pour startups labellisées.
- **Tier 3 (3-5 ans).** Reconnaissance statutaire du SAFE dans l'AUSCGIE — modification au niveau OHADA.

## Références croisées dans PASE

- **Lit la couche 1** (actions à classes multiples) — les calculs de prix de conversion réfèrent à l'architecture de classes d'actions ; à la conversion le SAFE devient une catégorie « actions de préférence ombres ».
- **Lit la couche 3** (ESOP) — la définition de Capitalisation inclut l'enveloppe ESOP pre-money.
- **Companion à la couche 4 (OCA)** — même structure de kit, instrument différent ; les rédacteurs choisissent selon l'adaptation juridictionnelle et la préférence de l'investisseur. **Dans l'espace OHADA, l'OCA est l'instrument par défaut PASE ; le SAFE est l'exception.**
- **Lue par la couche 6** (standard de table de capitalisation) — les SAFE en circulation doivent apparaître sur la table comme ligne séparée avec les mécaniques de conversion précisées.

## Citations

**Paper :** Section 3 profils pays p. 49 (Tunisie BCT memo), p. 50 (Sénégal art 12), p. 52 (DRC), p. 54 (CI), p. 60 (BCEAO Instruction 2012-09) ; preuves Finding #1 p. 62 ; Recommandation #1 dispositions du cadre des marchés financiers p. 68 ; Recommandation #3 bibliothèque d'instruments de financement pp. 71-72.

**Textes OHADA :** AUSCGIE Articles 778+ (obligations) ; Acte Uniforme sur les Sûretés (2010) ; SYSCOHADA.

**Textes sénégalais :** Loi 2020-01 art 12 ; CGI sénégalais ; BCEAO Instruction 2012-09 ; BCEAO Règlement R09/98/CM/UEMOA.

**Textes ivoiriens :** Loi PADS 2024 ; CGI ivoirien.

**Textes congolais :** Ordonnance 22/030 art 13-16 ; Régl. Changes 2014 art 70.

**Textes tunisiens :** Loi 2018-20 ; Code Sociétés Commerciales (Loi 2000-93) art 144-148 ; Code Changes (Loi 76-18) art 6 ; **mémorandum BCT février 2020** ; Décret 2018-1037 sur le marché des capitaux.

**Étrangers :** YC Standard Post-Money SAFE (ycombinator.com) ; Code de Commerce français L.228-91+ (BSA) ; BVCA Convertible Loan Note (UK) ; pratique israélienne SAFE-adaptée.

## Artefacts de templates

Texte de référence SAFE — adapté YC par juridiction avec lettres annexes pour Tunisie/Sénégal — vit à `content/templates/safe/ohada/`. **Ils ne sont pas le standard** ; le standard est l'ensemble des règles ci-dessus.
