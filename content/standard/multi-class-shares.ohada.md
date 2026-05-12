# Structure d'Actions à Classes Multiples — PASE Standard (OHADA / civil-law)

> **Statut :** Version 0.1 — standard de référence. Ne constitue pas un avis juridique.
> **Couche :** 1 sur 7 de la pile PASE pour Fondateurs (constitution).
> **Traditions :** OHADA / civil-law (Sénégal, Côte d'Ivoire, RDC, Tunisie). [Parallèle common-law](./multi-class-shares.common-law.md).

## Ce que PASE codifie

Les statuts d'une Corporation PASE autorisent **au moins trois catégories d'actions** avec les différenciations statutairement permises :

1. **Actions ordinaires** — une voix par action ; droits économiques résiduels.
2. **Actions de préférence** — droits de vote spécifiés à l'émission ; préférence de liquidation ; protection anti-dilution ; convertibles en ordinaires au gré du titulaire et automatiquement à l'introduction en bourse.
3. **Actions sans droit de vote (fondateur ou croissance)** — pas de voix (sauf droits de catégorie) ; mêmes droits économiques que les ordinaires.

Plus des sous-catégories au sein des actions de préférence (Série Seed, Série A, etc.) avec termes spécifiques à chaque tour.

Droits standard des actions de préférence :
- **Préférence de liquidation : 1× non participative** — préférence récupère le capital investi avant toute distribution aux ordinaires ; ne « double-dip » pas en participant pro-rata ensuite.
- **Anti-dilution : moyenne pondérée à base large** — protège la préférence d'une dilution lors d'un down round.
- **Conversion : 1:1 en ordinaires**, au gré du titulaire toujours, automatique à l'IPO qualifiée ou par consentement de la majorité de la catégorie.
- **Droits de vote de catégorie** pour toute modification défavorable à cette catégorie.

Le principe : **la table de capitalisation que les investisseurs attendent, disponible nativement dans votre société locale.** Les fondateurs ne devraient pas avoir à s'incorporer à l'étranger pour émettre une Série A de forme standard.

## Menu d'instruments

Cette couche est une structure, pas un menu. Mais l'**expression** de la structure varie selon la juridiction :

| Expression | Juridiction adaptée |
|---|---|
| **Autorisation directe dans les statuts d'une SAS** (catégories multiples avec termes explicites dans les statuts) | SAS OHADA (Sénégal, Côte d'Ivoire, RDC). L'AUSCGIE permet la liberté statutaire de la SAS pour les catégories d'actions. **Solution la plus propre dans l'espace OHADA.** |
| **Actions de préférence dans une SA** (sous AUSCGIE) | SA OHADA. Les articles 778+ de l'AUSCGIE permettent l'émission d'actions de préférence par les SA, mais avec des contraintes (égalité des droits de vote sauf actions de préférence ; capital minimum élevé). Moins propre que la SAS. |
| **Pacte d'associés combiné à une structure SAS** | Lorsque les statuts d'une SAS sont rigidifiés par des contraintes pratiques (banques, partenaires institutionnels), le pacte d'associés peut compléter les statuts pour les droits de catégorie. |
| **Actions de préférence sous Code des Sociétés Commerciales tunisien** | Tunisie. Articles 346-363 du CSC permettent l'émission d'actions à dividende prioritaire sans droit de vote (ADPSDV) et d'actions de préférence. |

**Règle de décision :** SAS avec statuts directs si possible ; SA avec actions de préférence si la forme SAS n'est pas adaptée au secteur ; pacte d'associés en complément si nécessaire.

## Mécaniques (défauts PASE)

| Paramètre | Défaut | Configurable |
|---|---|---|
| Catégories autorisées | Ordinaires + Préférence + Sans droit de vote (fondateur/croissance) | Oui (catégories additionnelles par décision) |
| Préférence de liquidation | 1× non participative | Oui (participative permise ; plafond 2-3× recommandé) |
| Anti-dilution | Moyenne pondérée à base large | Oui (cliquet plein permis mais déconseillé) |
| Conversion | 1:1 en ordinaires ; automatique à IPO qualifiée ou consentement majorité de catégorie | Fixe |
| Droits de vote sans droit de vote | Aucun sauf variations de droits de catégorie et résolutions de liquidation | Fixe |
| Seuils de consentement de catégorie | Majorité de la catégorie pour variations courantes ; 75 % pour modifications de l'ordre de liquidation | Oui |
| Droits de souscription préférentielle | Standard pro-rata pour la préférence dans tours à valorisation fixée subséquents | Dans le pacte d'associés, pas les statuts |

## Le cas

Le droit OHADA et le droit civil non-OHADA divergent sur les actions à classes multiples :

- **L'AUSCGIE permet la SAS** (article 853-1 et suivants) **avec une grande liberté statutaire.** La SAS peut émettre des catégories d'actions différenciées par les statuts — c'est l'outil natif de l'OHADA pour la structure PASE.
- **L'AUSCGIE article 39 impose un défaut « une action, une voix » pour les SA** (paper p. 58, 350) sauf actions de préférence émises selon les articles 778+. Pratique courante mais lourde.
- **Les articles 309-314 de l'AUSCGIE** imposent des capitaux minimums et procédures rigides pour les SA, rendant la SAS l'option préférée pour les startups (paper p. 58).
- **Le Code des Sociétés Commerciales tunisien article 154** impose la règle « une action, une voix » pour les SA tunisiennes (paper p. 62). La Tunisie n'est pas OHADA mais suit une tradition civiliste similaire.

L'opportunité régionale : **PASE Tier 2 pour l'espace OHADA est la création d'une SAS-I (SAS-Innovation)** — une variante de la SAS spécifiquement adaptée aux startups labellisées, avec multi-classes natives et formalismes allégés. Cette demande est portée par PASE auprès du Conseil des Ministres de l'OHADA et bénéficierait simultanément aux 17 États membres. C'est la demande Tier 2 la plus puissante du référentiel PASE — une seule modification OHADA débloque toutes les juridictions OHADA en même temps.

## Implémentation par juridiction

| Juridiction | Hook statutaire | Contrainte actuelle | Workaround PASE | Demande Tier 2 |
|---|---|---|---|---|
| **Sénégal** | AUSCGIE 853-1+ (SAS) ; 309-314, 778+ (SA) ; Loi 2020-01 | AUSCGIE 39 pour SA (« une action, une voix ») ; capitaux minimums | **SAS sénégalaise avec statuts à classes multiples directes** | Création OHADA SAS-I (multi-classes natives pour startups labellisées) |
| **Côte d'Ivoire** | AUSCGIE 853-1+ ; Loi PADS 2024 | Idem Sénégal | **SAS ivoirienne avec statuts à classes multiples directes** | Idem (régional OHADA) |
| **RDC** | AUSCGIE 853-1+ ; Ordonnance 22/030 | Idem Sénégal | **SAS congolaise avec statuts à classes multiples directes** | Idem (régional OHADA) |
| **Tunisie** | CSC art 154 (SA) ; 346-363 (actions de préférence) ; Loi 2018-20 | CSC art 154 (« une action, une voix » pour SA) | **Actions de préférence sous CSC 346-363** ; ou SUARL pour cas spécifiques ; **option SAS non disponible (la Tunisie n'a pas adopté la forme SAS)** | Amendement CSC art 154 pour exempter les startups labellisées de la règle « une action, une voix » |

## Comparables étrangers

- **France — Code de Commerce L.228-11+** (actions de préférence). Le modèle direct pour les actions de préférence dans la tradition civiliste. PASE OHADA exprime la préférence selon ce modèle.
- **France — Code de Commerce L.227-1+** (SAS). La SAS française est la forme sociale modèle pour les startups en France ; la SAS OHADA (AUSCGIE 853-1+) en est l'analogue direct.
- **Allemagne — UG / GmbH avec Geschäftsanteile** (Sections 5a, 14-16 GmbHG). Structure à parts sociales avec différenciation possible. Pertinent comme comparable civiliste alternatif.
- **Espagne — Ley de Sociedades de Capital** Articles 91-103. Régime espagnol des actions de préférence ; modernisé par Ley 28/2022.
- **Delaware — DGCL §§ 151, 152.** Référence globale ; permet toute catégorie avec tout droit.

## Comment cette couche s'articule avec les Startup Acts

L'articulation avec les Startup Acts est différente de la version common-law parce que le verrou principal est **régional (OHADA)**, pas national.

- **Tier 1 (aujourd'hui).** Pour SN, CI, CD : SAS avec statuts à classes multiples directes — déjà fonctionne. Pour TN : actions de préférence sous CSC 346-363 — déjà fonctionne. **Pas de demande Tier 1 ouverte.**
- **Tier 2 (12-24 mois).** **OHADA SAS-I.** Le Conseil des Ministres de l'OHADA adopte une modification de l'AUSCGIE créant une variante SAS-Innovation avec multi-classes natives, formalismes allégés, et reconnaissance automatique des structures PASE pour startups labellisées par tout Startup Act d'un État membre. Une seule action débloque tous les pays OHADA. Pour TN : amendement CSC art 154 (national, indépendant).
- **Tier 3 (3-5 ans).** SAS-I codifié comme forme par défaut pour startups labellisées dans tous les États membres OHADA ; amendements parallèles nationaux dans les Codes des Sociétés Commerciales hors OHADA (Tunisie, Maroc).

## Modes de défaillance (sans PASE)

- **Une SA sénégalaise émet une Série A.** L'AUSCGIE article 39 impose le défaut « une action, une voix » ; les investisseurs exigent des actions de préférence avec leurs droits standards. La SA tente d'émettre des actions de préférence sous AUSCGIE 778+ mais le formalisme (capital minimum, AGE obligatoire, formalités RCCM) prend 6-12 semaines et coûte plus que la valeur de l'opération.
- **Une SA tunisienne maintient une structure mauricienne.** L'article 154 du CSC tunisien interdit les classes multiples. La société opérationnelle reste une SA tunisienne ; la table de capitalisation vit chez la holding mauricienne. Les investisseurs ne reconnaissent que la holding ; la SA tunisienne devient une simple filiale opérationnelle sans capital structurant.
- **Une fintech ivoirienne hésite entre SAS et SA.** La SAS permettrait les classes multiples directement sous AUSCGIE 853-1+. La SA exigerait des actions de préférence sous 778+. Les conseils locaux, peu familiers de la SAS, recommandent par défaut la SA — la société hérite des contraintes de l'article 39 et finit par restructurer offshore.

## Progression Tier

- **Tier 1 (aujourd'hui).** SAS OHADA avec statuts à classes multiples directes (SN/CI/CD) ; actions de préférence CSC 346-363 (TN).
- **Tier 2 (12-24 mois).** **OHADA SAS-I** — la demande la plus puissante du référentiel PASE, une seule modification régionale débloque 17 États membres simultanément. Amendement CSC art 154 pour la Tunisie en parallèle.
- **Tier 3 (3-5 ans).** SAS-I comme défaut statutaire pour startups labellisées dans tous les États OHADA ; régime équivalent en Tunisie/Maroc.

## Références croisées dans PASE

- **Lue par la couche 3** (ESOP) — l'enveloppe d'options est dimensionnée sur le capital pleinement dilué établi ici.
- **Lue par la couche 4** (SAFE, OCA) — les calculs de prix de conversion dépendent de l'architecture de classes d'actions.
- **Lue par la couche 6** (standard de table de capitalisation) — le schéma de table doit accommoder les structures à classes multiples.
- **Contraint la couche 2** (gouvernance entre fondateurs, à venir) — les clauses de cession forcée, sortie conjointe, préemption opèrent à travers l'architecture de classes.

## Citations

**Paper :** Section 3 profils pays p. 50 (Sénégal), p. 52 (RDC), p. 54 (CI), p. 58 (analyse OHADA), p. 62 (TN article 154) ; preuves Finding #1 p. 62 ; Recommandation #1 actualisations du droit des sociétés p. 68 ; Recommandation OHADA SAS-I p. 350.

**Textes OHADA :** AUSCGIE Articles 5, 6, 39, 309-314, 778+, 853-1 à 853-22 (SAS).

**Textes sénégalais :** Loi 2020-01 ; CGI sénégalais.

**Textes ivoiriens :** Loi PADS 2024.

**Textes congolais :** Ordonnance 22/030 art 13-16.

**Textes tunisiens :** Code des Sociétés Commerciales (Loi 2000-93) art 154, 346-363, 388 ; Loi 2018-20.

**Étrangers :** Code de Commerce français L.228-11+ (actions de préférence) ; L.227-1+ (SAS) ; Allemagne GmbHG §§ 5a, 14-16 ; Espagne Ley de Sociedades de Capital art 91-103 ; Delaware DGCL §§ 151, 152.

## Artefacts de templates

Modèles de statuts SAS et clauses de pacte d'associés vivent à `content/templates/multi-class-shares/ohada/`. **Ils ne sont pas le standard** ; le standard est l'ensemble des règles ci-dessus.
