---
number: 8
name: Plant Transient Expression
part: 1
group: Alternative hosts
products: [protein, vaccine]
scale: [pilot, mid]
cogs: low
maturity: early
regulatory: novel
---

## Description
Plant transient expression means agroinfiltration: grow Nicotiana benthamiana for four to six weeks, then vacuum-infiltrate whole plants with a suspension of Agrobacterium tumefaciens carrying the gene of interest on a T-DNA, often paired with a viral replicon to push expression higher. The plants sit in the greenhouse for another five to ten days while they make the protein, then the leaf biomass is harvested and homogenized. Nothing is stably transformed, so there is no cell line to build and no cell bank in the mammalian sense, and a new construct can go from sequence to protein in a few weeks. Upstream capital is a greenhouse rather than a stainless plant, biomass is cheap, and surge capacity comes from planting more plants, which is why the platform was pitched hard for pandemic response. Expression is normally quoted as a percentage of total soluble protein rather than in grams per liter, because there is no liquid culture to divide by.

## Strengths and weaknesses
The upstream case is genuinely good: cheap biomass, fast turnaround, scaling by planting, no mammalian viral clearance, and no expensive bioreactor depreciation. The costs are all downstream. Leaf extract is a hard feedstock, dominated by RuBisCO, loaded with phenolics and proteases, and variable with whatever the greenhouse was doing that week, so purification carries almost the entire process and step yields are lower than from a clean fermentation supernatant. Plant N-glycans carry β1,2-xylose and core α1,3-fucose, which are not human and are potentially immunogenic, so a therapeutic needs a glyco-engineered line with those transferases knocked out. The failure mode is variability at the wrong level of the process. Expression varies plant to plant with light, temperature, and plant age, so the batch is a population of organisms whose consistency you control with agronomy rather than with process parameters, and that is a much harder thing to write into a control strategy a reviewer will accept.

## When to use
Pick plant transient expression when you need many candidate proteins quickly and cheaply, which is a real fit for research reagents, antigen screening, and diagnostic proteins, or when the thing you are buying is surge capacity that does not need a stainless plant. Do not pick it for a commercial glycoprotein without first confronting the glycan question and pricing the purification train, because the greenhouse capex saving disappears quickly if the process needs three chromatography steps to handle leaf extract. If you need cheap protein and do not need a eukaryotic fold, microbial hosts give a far cleaner feedstock for similar money. If you need a licensed path for a glycoprotein, CHO is the answer and the extra upstream cost buys you a route reviewers already understand.

## Key numbers
Four to six weeks to grow plants, then harvest five to ten days after infiltration · expression quoted as a percentage of total soluble protein rather than in g/L · greenhouse capital rather than a stainless plant, with surge capacity added by planting more · plant N-glycans carry β1,2-xylose and core α1,3-fucose unless the line is glyco-engineered · one long-standing approval (Elelyso, 2012, from carrot cell suspension rather than agroinfiltration) and one authorized-then-discontinued vaccine (Covifenz, Canada 2022; Medicago closed February 2023) · roughly 5–15% of finished cost of goods, with the rest downstream.

## Regulatory notes
Precedent-setting, and it involves two agencies rather than one. In the US, a plant-made pharmaceutical is a drug for FDA and a regulated genetically engineered organism for USDA APHIS, which brings permits, containment, and disposal requirements a fermentation plant never sees; the 2002 FDA and USDA draft guidance on plant-derived biologics is still the reference document, which tells you how thin the precedent is. The product-specific asks are control of residual Agrobacterium and its DNA, plant-specific glycan characterization, a host cell protein immunoassay raised against the particular plant line, and a control strategy that accounts for biological variation across a plant population rather than across a homogeneous culture. Covifenz did clear Health Canada, so the route is not impossible; the WHO's refusal to grant it emergency use listing turned on the company's tobacco-industry ownership rather than on any manufacturing question.

## Examples
Medicago's Covifenz, authorized by Health Canada in February 2022 as the first plant-based vaccine for human use, refused WHO emergency use listing, and discontinued when Mitsubishi Chemical shut Medicago in February 2023, affecting about 586 jobs in Quebec. Protalix's Elelyso (taliglucerase alfa, approved 2012) is the one long-standing plant-expression approval, though it comes from carrot cell suspension culture in disposable bioreactors rather than from agroinfiltrated whole plants. ZMapp, the anti-Ebola antibody cocktail used during the 2014 outbreak, was made in N. benthamiana by Kentucky BioProcessing. Contract plant expression is available from Leaf Expression Systems, Cape Bio Pharms, and Kentucky BioProcessing.

## Economic profile
Upstream is cheap in a way nothing else in this sheet is: greenhouse space, Agrobacterium culture, and labor, with no bioreactor depreciation, no sterile utilities, and no clean-in-place plant. Downstream is where the money goes, because you are purifying a target out of an extract whose most abundant protein is RuBisCO. That inversion is the entire economic story. In a monoclonal antibody process upstream is 35–50% of cost; here it is a small fraction, so any process needing several chromatography steps hands the greenhouse saving straight back. The field consolidated hard after Medicago, so the supplier base is thin and mostly contract. For an investor the useful screen is narrow: look for a product class that combines a low purity bar with a genuine surge-capacity requirement, and be honest that the intersection is small and that the platform's most complete demonstration ended with the plant closing.

## Videos

- https://www.youtube.com/watch?v=kkAb2WB17l4 — Could Growing Vaccines in Plants Save Lives? | Freethink (Freethink, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Ysnu8P66YiA — Tobacco Agroinfiltration Transient Transformation (Rahul Patharkar, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=iiuAC0U9VxY — BioBytes: Biotechnology and Plant Made Pharmaceuticals (Biotechnology Innovation Organization, 3 minutes, 5k+ views)

## Further reading

[Plant Molecular Farming: A Viable Platform for Recombinant Biopharmaceutical Production (Plants)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7411908/) · [Product safety aspects of plant molecular farming (Frontiers in Bioengineering and Biotechnology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10442644/)
