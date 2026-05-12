# Plan d'Options de Souscription d'Actions — PASE Standard (OHADA / civil-law)

> **Statut :** Version 0.1 — standard de référence. Ne constitue pas un avis juridique.
> **Couche :** 3 sur 7 de la pile PASE pour Fondateurs (capital salarié).
> **Traditions :** OHADA / civil-law (Sénégal, Côte d'Ivoire, RDC, Tunisie). [Parallèle common-law](./esop.common-law.md).

## Ce que PASE codifie

Une Corporation PASE attribue à ses salariés un capital qui :

1. **S'acquiert sur 48 mois avec un palier (cliff) initial de 12 mois** — vesting temporel standard.
2. **Impose à la liquidité, non à l'attribution ni à l'acquisition** — le fait générateur d'imposition est le moment où le salarié peut effectivement céder les actions.
3. **Donne 90 jours de fenêtre post-cessation pour la levée** — défaut Y Combinator ; extensible jusqu'à 7-10 ans pour rétention.
4. **Accélère à double déclenchement** — changement de contrôle plus cessation involontaire dans les 12 mois.
5. **Réserve une enveloppe de 10 % du pleinement dilué**, rafraîchie à chaque tour à valorisation fixée.
6. **Survit au changement de contrôle à conditions équivalentes** — l'acquéreur reprend ou paie en numéraire ; jamais d'extinction.

Le principe : **réforme du droit du travail d'abord, plomberie sociétaire ensuite.** La main-d'œuvre de l'économie de la connaissance africaine devrait détenir une participation au capital des entreprises dont elle construit la croissance. La rémunération en numéraire seule ne peut retenir le talent ingénieur senior face à des employeurs domiciliés à l'étranger.

## Menu d'instruments

PASE codifie le **principe**, pas un instrument spécifique. L'instrument approprié dépend du régime fiscal local. Chaque entreprise PASE-conforme choisit dans ce menu celui qui satisfait le principe dans sa juridiction.

| Instrument | Nature | Cas de référence |
|---|---|---|
| **OSA** (option de souscription d'actions à VV à l'attribution) | Droit de souscrire des actions ultérieurement au prix VV d'aujourd'hui | Défaut dans les juridictions sans régime statutaire de différé fiscal et où la levée anticipée permet de basculer en plus-values. **Inopérant en Tunisie** (Article 38 IRPP). |
| **AGA** (attribution gratuite d'actions) | Promesse d'actions livrées à un déclencheur — temps, milestone, ou **liquidité** | Lorsque le droit fiscal impose à l'acquisition. AGA acquise à la liquidité aligne le fait générateur avec la liquidité réelle. **Modèle français de référence (Code Commerce Art L.225-197-1+).** Pertinent pour Tunisie + tout pays OHADA où l'acquisition déclenche l'imposition. |
| **AGA à conditions de présence pure** | Variante d'AGA dont le seul déclencheur est la liquidité (changement de contrôle ou IPO) | Pour **Tunisie spécifiquement**, où l'article 38 IRPP impose à l'attribution sur la valeur théorique de tout avantage. Cette structure échappe à l'application de l'article 38 parce qu'aucun avantage économique n'existe à l'attribution. |
| **Phantom equity / participation aux plus-values** | Versement en numéraire à la liquidité égal à la valeur que les actions auraient eue | Instrument de dernier recours lorsque même l'AGA est bloquée par le droit fiscal local. Pas d'actions effectivement émises. |
| **BSPCE-style** (bons de souscription pré-émis avec traitement statutaire) | Bons assortis d'un régime fiscal préférentiel statutaire | Lorsqu'un amendement Startup Act ou un régime statutaire active expressément le différé fiscal pour le capital salarié — la destination Tier 2/Tier 3. **France BSPCE (CGI Art 163 bis G) est le modèle.** |

**Arbre de décision en trois questions :**

1. *Le droit fiscal local impose-t-il à l'attribution sur la valeur théorique ?* Si oui → **AGA à conditions de présence pure** ou **phantom equity** (aucun autre instrument ne survit). Sinon :
2. *Le droit fiscal local impose-t-il à l'acquisition sur la valeur d'alors ?* Si oui → **AGA acquise à la liquidité** (aligne le fait générateur avec la liquidité réelle). Sinon :
3. **OSA avec levée anticipée permise** est le défaut. Traitement en plus-values sur l'appréciation ; l'écart à la levée est la seule exposition à l'imposition ordinaire.

## Mécaniques (défauts PASE)

| Paramètre | Défaut | Configurable |
|---|---|---|
| Taille de l'enveloppe | 10 % pleinement dilué à l'adoption | Oui |
| Rafraîchissement | Chaque tour à valorisation fixée | À la discrétion du Comité |
| Vesting | 48 mois, palier 12 mois, mensuel ensuite | Oui |
| Prix de souscription (OSA) | VV à l'attribution, déterminée de bonne foi par le Comité | Fixe |
| Déclencheur d'acquisition (AGA) | Temps (défaut) ou liquidité (pour TN / SA-équivalent) | Oui |
| Levée anticipée (OSA seul) | Permise, vesting inversé sur les actions sous-jacentes | Oui |
| Durée d'option | 10 ans | Oui |
| Fenêtre post-cessation (bonne sortie) | 90 jours | Oui (jusqu'à 10 ans) |
| Déchéance pour faute grave | Totale | Fixe |
| Accélération décès / invalidité | 100 % déclenchement unique | Fixe |
| Accélération changement de contrôle | 100 % double déclenchement | Dérogation par déclenchement unique permise |
| Droit de rachat | 90 jours à VV à la cessation | Oui |

## Le cas

Les six juridictions à Startup Act adopté manquent toutes d'un cadre fiscal et de droit du travail pour la rémunération en capital différée à la liquidité (paper p. 63, Recommandation #1). L'article 38 du Code IRPP tunisien impose les attributions comme salaires immédiats sur la valeur théorique. Le Code du Travail sénégalais (articles L.40 et L.67 de la Loi 97-17) impose des structures d'emploi rigides. Le SYSCOHADA (articles 10-15) ne prévoit pas de traitement comptable clair pour les options. La conséquence agrégée : les ingénieurs seniors acceptent soit des options offshore invisibles à l'autorité fiscale locale, soit se relocalisent. Le paper documente ~30 % de relocalisation d'ingénieurs seniors dans les 3 ans suivant l'embauche dans une startup en phase de croissance.

**La Tunisie est le cas spécial.** L'article 38 du Code IRPP impose à l'attribution sur la valeur théorique de tout avantage. Aucune structure d'option classique ne peut éviter cette imposition — le simple fait de promettre un avantage économique futur déclenche l'imposition immédiate. Le contournement PASE en Tunisie est la **AGA à conditions de présence pure** : l'option ne devient acquise qu'à la survenance d'un Événement de Liquidité. Avant cet événement, le salarié n'a aucun avantage économique mesurable — l'article 38 ne déclenche pas. La demande Tier 2 pour la Tunisie est l'**amendement de l'article 38** pour différer l'imposition à la liquidité, miroir de la Spain Ley 28/2022.

## Implémentation par juridiction

| Juridiction | Hook statutaire | Contrainte actuelle | Instrument PASE recommandé | Demande Tier 2 |
|---|---|---|---|---|
| **Sénégal** | AUSCGIE 822-839 ; CGI sénégalais ; Loi 2020-01 art 12 ; Code Travail L.40, L.67 | Code du Travail rigide ; absence de traitement statutaire pour options ; SYSCOHADA muet | **OSA à VV + levée anticipée** dans pacte d'associés et statuts (SAS de préférence) | Amendement CGI déférant l'imposition à la liquidité pour startups labellisées DER/FJ ; SYSCOHADA Annexe B pour traitement comptable des ESOP |
| **Côte d'Ivoire** | AUSCGIE 822-839 ; CGI ivoirien art 15 ; SYSCOHADA art 10-15 | SYSCOHADA art 10-15 (pas de traitement options) ; CGI art 15 sans application automatique | **OSA à VV + levée anticipée** dans SAS ivoirienne ; gestion comptable manuelle en attendant SYSCOHADA Annexe B | SYSCOHADA Annexe B (priorité régionale) ; auto-application de CGI art 15 à la délivrance du label PADS |
| **RDC** | AUSCGIE 822-839 ; Ordonnance 22/030 art 16 ; Code Travail 015/2002 art 40, 67 ; Régl. Changes 2014 art 70 | Articles 40/67 du Code Travail incompatibles ; art 70 Régl. Changes pour bénéficiaires non-résidents | **OSA à VV + levée anticipée** dans SAS congolaise ; autorisation BCC requise pour bénéficiaires non-résidents | Amendement Code Travail articles 40/67 pour permettre vesting et levée anticipée ; auto-application des exonérations graduées du statut JEI |
| **Tunisie** | Code IRPP art 38 ; Code Sociétés Commerciales art 144-148 ; Loi 2018-20 art 13, 17 ; Code Changes art 6 | **Article 38 IRPP impose à l'attribution sur valeur théorique** — bloque toute structure d'options classique | **AGA à conditions de présence pure** (vesting uniquement à la liquidité) — échappe à l'article 38 ; **ou phantom equity** | Amendement article 38 différant l'imposition à la cession (modèle Spain Ley 28/2022) |

## Comparables étrangers

- **France — BSPCE** (CGI Article 163 bis G). Bons préférentiels pour startups < 15 ans, capitalisation < 150 M€. Imposition forfaitaire à la cession uniquement. **Modèle direct pour PASE Tier 3 dans la tradition OHADA / civiliste.**
- **France — AGA** (Code de Commerce L.225-197-1 à L.225-197-6). Attribution gratuite d'actions sous conditions de présence et/ou de performance. Régime fiscal préférentiel : imposition à la cession seulement, plus-value d'acquisition imposée comme salaire mais à la cession. **Le modèle direct pour les structures AGA-style décrites ci-dessus.**
- **Espagne — Ley 28/2022 Article 5** (BOE-A-2022-23845). Différé fiscal pour les options de startups labellisées ENISA à la liquidité. **Le précédent législatif le plus net pour PASE Tier 2.**
- **Belgique — Loi du 26 mars 1999 sur les options.** Régime fiscal pour stock-options : imposition à l'octroi de l'option (à un taux préférentiel) ou à la levée, au choix. Alternative au modèle français pour les juridictions OHADA.
- **Luxembourg — Loi du 4 décembre 1967.** Régime de stock options luxembourgeois. Pertinent pour les structures Tier 2 impliquant un holding luxembourgeois en complément d'une opérationnelle OHADA.

## Comment cette couche s'articule avec les Startup Acts

PASE et les Startup Acts sont **complémentaires, pas équivalents.** Les Startup Acts sont l'**infrastructure de politique publique** (labellisation, surveillance, avantages fiscaux) ; PASE est l'**infrastructure de droit privé** (structures sociétaires, instruments, gouvernance).

Les deux s'articulent à chaque tier :

- **Tier 1 (contractuel).** PASE fonctionne dans toute juridiction au Tier 1 — adoption par décision sociale + contrat de travail + Plan. **Pas de Startup Act requis.** Fonctionne aujourd'hui dans les 4 juridictions OHADA / civilistes d'ancrage, y compris la Tunisie.
- **Tier 2 (whitelisting).** Le Startup Act crée le système de labellisation. Une table de capitalisation « PASE-conforme » qualifie automatiquement une startup labellisée pour les bénéfices de la loi — exonération fiscale, label, accès devises. Le précédent Spain Ley 28/2022 : startup labellisée ENISA → traitement fiscal différé automatique sur les options.
  - Pour pays OHADA à Startup Act adopté (SN, CI, CD) : la demande est un amendement CGI référençant le label.
  - **Pour la Tunisie spécifiquement :** l'article 38 IRPP est l'obstacle principal. La demande Tier 2 est l'**amendement de l'article 38** déférant l'imposition à la cession. Le mécanisme de labellisation existe déjà (Startup Label de 2018) — il manque le différé fiscal.
- **Tier 3 (statutaire).** Le Startup Act (ou son cadre successeur) codifie l'AGA PASE-équivalente comme la forme canonique. La France BSPCE est la cible — régime statutaire spécifiquement pour les salariés de startups, avec plafonds de taille d'entreprise et d'enveloppe, traitement fiscal généreux.

En résumé : **PASE s'appuie sur toute infrastructure de politique publique existante**, qu'il s'agisse d'un Startup Act (SN/CI/CD/TN), d'une réforme sectorielle (modification de l'article 38 IRPP), ou d'aucune loi spécifique (Tier 1 contractuel).

## Modes de défaillance (sans PASE)

- **Une fintech sénégalaise route ses options via un holding mauricien.** Les ingénieurs sur paie sénégalaise reçoivent des options offshore invisibles à la DGID. Le Code du Travail sénégalais ne reconnaît pas les options dans les contrats de travail ; les contentieux relatifs aux options sont jugés sous droit mauricien.
- **Une équipe d'ingénieurs tunisienne refuse les options.** Article 38 IRPP impose l'attribution sur la valeur théorique à 5 ans à un taux marginal de 35 %. Pas de cash pour payer l'impôt. L'ingénieur accepte un salaire plus élevé à la place.
- **Une startup ivoirienne ne peut pas comptabiliser ses options.** SYSCOHADA articles 10-15 ne fournissent aucun traitement comptable pour les options. Les états financiers de la société soit ignorent les options (dilution invisible), soit les traitent de manière non-standard (audit problématique).
- **Une mobile money congolaise utilise des bonus en numéraire au lieu d'options.** Articles 40/67 du Code du Travail rendent le vesting impraticable. La société remplace l'équité par des bonus, perd le talent senior face à des employeurs domiciliés au Kenya ou en Afrique du Sud.

## Progression Tier

- **Tier 1 (aujourd'hui).** Adopter le POSA PASE par décision sociale + ratification associés + Plan + (pour OHADA) inscription au pacte d'associés. Pas d'action gouvernementale. Fonctionne dans les 4 juridictions OHADA / civilistes d'ancrage.
- **Tier 2 (12-24 mois).** Whitelisting gouvernemental — la labellisation Startup Act (ou réforme sectorielle, dans le cas tunisien) qualifie le plan pour le traitement à la liquidité par amendement du régime fiscal applicable. Spain Ley 28/2022 est le modèle.
- **Tier 3 (3-5 ans).** Régime statutaire de capital salarié modélisé sur le BSPCE français, avec plafonds de taille d'entreprise et d'enveloppe, traitement fiscal généreux pour les plans qualifiés.

## Références croisées dans PASE

- **Lit la couche 1** (actions à classes multiples) — le plan attribue des options sur la classe d'actions autorisée par la clause actions à classes multiples ; le dimensionnement de l'enveloppe suppose cette autorisation.
- **Précède la couche 4** (instruments d'investisseurs) — la table de capitalisation pre-money du SAFE / OCA inclut l'enveloppe ESOP ; le rafraîchissement de l'enveloppe interagit avec le rafraîchissement de la table à chaque tour à valorisation fixée.
- **Contraint la couche 6** (standard de table de capitalisation) — le schéma de table doit accommoder attributions, promesses AGA, splits acquis/non acquis, et vesting inversé sur actions levées anticipées.

## Citations

**Paper :** Section 3 profils pays pp. 49–55 ; preuves Finding #1 pp. 62–63 ; Recommandation #1 modifications du droit du travail p. 68 ; Recommandation #3 standardisation ESOP pp. 71–72.

**Textes OHADA :** AUSCGIE Articles 822-839 (obligations convertibles) ; Acte Uniforme Société Coopérative ; SYSCOHADA Articles 10-15 (traitement comptable des immobilisations et frais de personnel).

**Textes sénégalais :** Loi 2020-01 art 12 ; CGI sénégalais ; Code Travail (Loi 97-17) art L.40, L.67 ; Décrets DER/FJ.

**Textes ivoiriens :** Loi PADS 2024 ; CGI ivoirien art 15 ; SYSCOHADA art 10-15 ; Code Travail ivoirien.

**Textes congolais :** Ordonnance 22/030 du 13 septembre 2022 art 13-16, 31, 34-38, 42 ; Code Travail (Loi 015/2002) art 40, 67 ; Régl. Changes 2014 art 70.

**Textes tunisiens :** Code IRPP art 38, art 14 ; Loi 2018-20 art 13, 17 ; Code Sociétés Commerciales (Loi 2000-93) art 144-148 ; Code Changes (Loi 76-18) art 6 ; mémorandum BCT février 2020.

**Étrangers :** Code de Commerce français L.225-197-1+ (AGA) ; CGI français Art 163 bis G (BSPCE) ; Spain Ley 28/2022 Art 5 ; Loi belge du 26 mars 1999 ; Loi luxembourgeoise du 4 décembre 1967.

## Artefacts de templates

Textes contractuels de référence — Plan, Convention d'Attribution, Notification de Levée — vivent à `content/templates/esop/ohada/` pour les rédacteurs qui souhaitent le texte modèle complet. Les templates sont du texte rédactionnel de référence uniquement ; **ils ne sont pas le standard**. Le standard est l'ensemble des règles ci-dessus.
