---
number: 1
name: Small-Molecule Inhibitor
part: 1
group: Small molecules
targets: [surface, intra, path]
dosing: [daily]
cogs: vlow
maturity: default
precedent: many
---

## Description
A small-molecule inhibitor is a synthetic chemical, usually under about 500 daltons, that binds a pocket on a target protein and blocks its function. It is the default modality in drug development and has been for a century, because it is the only one that combines oral dosing, distribution to essentially every tissue including the brain, and a cost of goods measured in cents. The binding is reversible and occupancy-driven, so the effect tracks plasma concentration and stops when the patient stops taking it. That is a feature when you need to withdraw a drug quickly and a problem when adherence is poor. The chemical matter comes from high-throughput screening of a compound library, from fragment-based discovery, from structure-based design against a solved protein structure, or increasingly from a computational screen over a docked library, and then goes through several years of medicinal chemistry to fix potency, selectivity, solubility, metabolic stability, and off-target liabilities such as hERG binding. Roughly half of new drug approvals each year are still small molecules.

## Strengths and weaknesses
The strengths: oral dosing, tissue penetration that no biologic matches, manufacturing at a few dollars a kilogram in commodity chemical plants, room-temperature stability with no cold chain, and a hundred years of regulatory precedent. Generic competition arrives on a predictable schedule, which is a strength for payers and the central weakness of the business model. The technical weakness is that most proteins have no druggable pocket. The conventional estimate is that roughly 10–15% of the proteome is accessible to this modality, which leaves transcription factors, scaffolding proteins, and most protein-protein interfaces out of reach; that gap is the reason every other modality on this sheet exists. Selectivity is the other recurring problem, since a pocket that fits your compound often fits the same pocket on 30 related kinases, and the resulting off-target activity shows up as toxicity in Phase 1 rather than in the biochemical assay. Resistance is a structural weakness in oncology and infectious disease: a single point mutation in the binding pocket can restore function, which is why targeted cancer drugs have a measured duration of response rather than a cure rate.

## When to use
Default to a small molecule whenever the target has a real binding pocket and the disease needs chronic oral therapy. If the target is intracellular, this is usually the only modality that reaches it at reasonable cost. If the indication is chronic and large, the cost of goods advantage compounds: a $2 pill and a $2,000 infusion have very different economics at 10 million patients even when the price is similar. Go elsewhere for three reasons. If the target has no pocket, look at a degrader, a molecular glue, or an oligonucleotide that silences the transcript instead. If you need absolute selectivity between close family members, an antibody usually gets it and a small molecule usually does not. And if the target is extracellular, an antibody will generally give you better potency and monthly rather than daily dosing, which matters more to adherence than it does to pharmacology.

## Key numbers
Molecular weight typically 300–500 Da · roughly 10–15% of human proteins are considered druggable by this modality · cost of goods usually under $1 per dose at scale, and often a few cents · capitalized cost per approved drug estimated at $1–2.6B depending on the study and how failures are attributed · 10–15 years from program start to approval · Phase 1 to approval success rate roughly 10% across all indications · oral bioavailability target usually above 30% · patent life leaves roughly 8–12 years of marketing exclusivity after approval.

## Development path
The most predictable path in the industry. IND-enabling work is a settled package: GLP toxicology in two species, safety pharmacology, genotoxicity, and a validated bioanalytical method. CMC is straightforward compared with any biologic, since the molecule is fully characterized by ordinary analytical chemistry and there is no question about what is in the vial. Review divisions have seen thousands of these, so the questions are known before you ask them. The main regulatory risks are not modality risks: they are the clinical endpoint, the size of the safety database, and whether a competitor gets there first. Generic entry under an ANDA is cheap and fast once exclusivity expires, which is why the commercial model depends on patent life rather than manufacturing difficulty.

## Examples
Imatinib (Gleevec) for CML, which established targeted kinase inhibition; osimertinib (Tagrisso) for EGFR-mutant lung cancer; sofosbuvir (Sovaldi) for hepatitis C; atorvastatin (Lipitor), the largest-selling drug of its era; nirmatrelvir (in Paxlovid) for COVID-19; and the BTK inhibitor ibrutinib. Structure-based design produced most of the HIV protease inhibitors.

## Economic profile
Cost of goods is close to irrelevant, usually well under 5% of revenue, so the economics are entirely about development cost, patent life, and payer willingness. That makes small molecules the modality where clinical risk dominates and manufacturing risk barely registers. The flip side is that generic entry typically removes 80–90% of revenue within two years of exclusivity expiring, so the whole return has to be earned in a window the company does not control. Contract manufacturing is a genuine commodity with dozens of qualified suppliers, and API supply is heavily concentrated in India and China, which has become a policy concern rather than a pricing one. For a startup, the practical implication is that the value is in the molecule and the clinical data, not in anything you build.
