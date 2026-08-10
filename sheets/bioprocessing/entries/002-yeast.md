---
number: 2
name: Pichia and Saccharomyces Yeast Expression
part: 1
group: Microbial hosts
products: [protein, vaccine, indus]
scale: [pilot, mid, large, bulk]
cogs: low
maturity: proven
regulatory: routine
---

## Description
Yeast sits between E. coli and CHO: a eukaryote that folds disulfide-bonded protein properly and secretes it, on medium that costs a fraction of what mammalian medium costs. The two hosts that matter are Komagataella phaffii (long known as Pichia pastoris), which grows to over 100 g/L dry cell weight on glycerol and then expresses from the methanol-inducible AOX1 promoter or the constitutive GAP promoter, and Saccharomyces cerevisiae, which is GRAS and carries the longest regulatory history of any eukaryotic host. Secreted titers run 5–20 g/L, with over 10 g/L reported on AOX1. Secretion is the whole point. The defined mineral medium contains almost no protein of its own, so the harvest supernatant is already a fairly clean feed, capture chromatography is straightforward, and there is no lysis step and no refolding step. That is the structural advantage over E. coli, and it is worth more than the titer number.

## Strengths and weaknesses
Yeast gives you eukaryotic folding, disulfide bonds, high cell density, cheap defined medium with no animal components, no viral clearance burden, and a clean secreted feed. The weakness is glycosylation. Yeast N-glycans are high-mannose and frequently hypermannosylated, which is wrong for a human therapeutic: those structures clear quickly in circulation and can be immunogenic, so a glycoprotein drug needs a glyco-engineered strain, and the humanized-glycan Pichia lines that were built to solve this grew poorly and never became commercial platforms. The failure mode to watch is proteolysis. Yeast proteases attack the secreted product over a long induction, so a titer measured at 48 hours can be lower and more heterogeneous at 96 hours, and the clipped species look like a purification problem when they are really a fermentation problem. O-mannosylation adds heterogeneity you cannot purify away either. At scale, methanol feeding is also a hazardous-area design constraint that a glucose-fed plant does not have.

## When to use
Pick Pichia when the product is a secreted, disulfide-bonded protein whose glycans either do not exist or do not matter: insulin and insulin analogs, peptides, single-domain antibodies and other fragments, enzymes, and food proteins. It is the right call whenever you want to skip refolding and viral clearance in the same decision. Pick S. cerevisiae specifically when you want the GRAS status and the vaccine precedent, which is why hepatitis B surface antigen and HPV virus-like particles are made in it. Do not pick yeast when the glycan is a critical quality attribute, because you will spend years on strain engineering to land somewhere CHO already is. If the protein has no disulfides and folds fine in a bacterial cytoplasm, E. coli is faster and simpler; if you need human glycans on an antibody, go to CHO and pay for it.

## Key numbers
Secreted titer 5–20 g/L, over 10 g/L reported on the AOX1 promoter · cell density above 100 g/L dry cell weight · secreted into a near protein-free defined medium, so no lysis and no refolding · yeast N-glycans are high-mannose and need glyco-engineering for therapeutic use · microbial recombinant protein drug substance runs roughly $10–100/g against $50–150/g for a CHO-made antibody · roughly 5–15% of finished cost of goods.

## Regulatory notes
Routine GMP with a long precedent. Both licensed recombinant hepatitis B vaccines, Recombivax HB and Engerix-B, are made in S. cerevisiae, and Gardasil's HPV virus-like particles come from the same host, so reviewers have decades of yeast filings to compare against. As with any microbial host, there is no mammalian viral clearance package. The specific asks are a two-tier cell bank characterized under ICH Q5D with genetic stability data under ICH Q5B (plasmid copy number and integration stability over the fermentation matter here), residual host cell protein by a yeast-specific immunoassay, glycan characterization showing what the high-mannose structures actually are on your molecule, and control of residual methanol as a process-related impurity on AOX1 processes. For food and industrial uses of the same host, the route is not GMP at all but GRAS notification in the US and EFSA novel food or food enzyme authorisation in the EU.

## Examples
Recombivax HB and Engerix-B hepatitis B vaccines and Gardasil HPV vaccine, all S. cerevisiae; Novo Nordisk's insulin, made in S. cerevisiae as a secreted precursor; Semglee (insulin glargine, Biocon and Viatris) made in Pichia; recombinant human albumin from Albumedix; Impossible Foods' soy leghemoglobin, made in Pichia at food scale. Strains and toolkits come from BioGrammatics, ATUM, and Ginkgo Bioworks; contract fermentation capacity from Lonza, Fujifilm Diosynth, Wacker, and a long tail of industrial fermentation CDMOs.

## Economic profile
The cost structure is microbial: cheap defined medium, a short fermentation, standard stainless fermentation equipment, and no animal-derived components to qualify. Because the product is secreted into a clean supernatant, the downstream train is short, which is where yeast beats E. coli by more than the titer difference suggests. That combination is why yeast is the host of choice when a protein has to hit a price point rather than a potency target, and why the food-protein companies chose it. In pharma the cost curve is flat and has been for years; in food and industrial applications it is still moving, because those programs are running the same organism at far larger scale against commodity prices. The practical constraint on a new program is capacity: pharma-grade microbial suites are priced for pharma, and genuinely large-scale yeast fermentation capacity is a different and thinner market.

## Videos

- https://www.youtube.com/watch?v=60XdMGcX-iY — THE INDUSTRIAL YEAST PICHIA PASTORIS (BOKU University, 7 minutes, 1k+ views)
- https://www.youtube.com/watch?v=4TF-B4uL1QM — Learn to Make Recombinant Proteins with Pichia Pastoris (Keck Graduate Institute, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=pBgRuQ4tFHU — How Insulin is made in Yeast - through recombinant DNA technology (Biotech Review, 2 minutes, 5k+ views)

## Further reading

[Industrial Production of Proteins with Pichia pastoris-Komagataella phaffii (Biomolecules)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10046876/) · [Customized yeast cell factories for biopharmaceuticals: from cell engineering to process scale up (Microbial Cell Factories)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8246677/)
