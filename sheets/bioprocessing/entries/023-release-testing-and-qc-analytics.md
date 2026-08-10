---
number: 23
name: Release Testing and QC Analytics
part: 5
group: Fill-finish and quality
products: [protein, vaccine, nucleic, vector, cell]
scale: [bench, pilot, mid, large, bulk]
cogs: med
maturity: default
regulatory: validated
---

## Description
A batch is not product until a certificate of analysis says it meets every specification, and the panel that gets it there runs on every commercial lot. It covers identity, purity by size-exclusion chromatography and capillary electrophoresis, charge variants, the glycan profile, residual host cell protein and host DNA, endotoxin, bioburden and sterility, and potency. Potency is the hard item, because a biologic's activity has to be measured in a cell-based or binding assay rather than inferred from its structure, and those assays are slow and imprecise. That is the real difference from small-molecule QC: a small molecule is defined by its structure, so a chromatogram and a mass spectrum settle identity and purity in an afternoon. For a biologic the process defines the product, so the specification has to measure a dozen attributes the process can move, each with its own validated method. QC typically runs 10–25% of a biologic's cost of goods, and a much larger share for small lots, because most of the panel costs the same whether the batch is 10 kg of antibody or one patient's dose of cells.

## Strengths and weaknesses
A well-designed panel does more than gate release: it catches process drift batches before it becomes a deviation, because a shifting glycan profile or a creeping aggregate level shows up on a trend chart long before it breaches a limit. The costs are calendar time and inflexibility. The compendial sterility test takes 14 days and mycoplasma culture takes 28, so a lot made today is not released this month. The failure mode is a potency assay that drifts or fails on a lot that is actually fine. Cell-based bioassays commonly run 10–30% relative standard deviation, so a result near a specification limit triggers an investigation, a retest, and occasionally a discarded batch with nothing wrong with it. The second failure mode is setting specifications from ten early development lots, which then reject normal manufacturing variation for the commercial life of the product.

## When to use
You do not get to skip this, so the decision is how fast the panel has to be and how much of it you build in-house. If the product has a shelf life measured in years and lots measured in kilograms, run the standard compendial panel and outsource the specialty assays; the 14-day sterility test costs you nothing you care about. If the product expires in days, as autologous cell therapy does, you have to design around the panel: qualify a rapid microbiological method, release on interim results with the compendial test reading out after infusion, and develop the potency assay before the pivotal trial rather than after. Bring an assay in-house when you will run it more than roughly once a week or when its turnaround gates release; below that a contract lab is cheaper and already validated. Push toward real-time release only if the process is characterized well enough to defend a model instead of a measurement, which in practice means a platform molecule and years of batch data.

## Key numbers
QC roughly 10–25% of a biologic's cost of goods · compendial sterility test 14 days, mycoplasma culture 28 days · rapid microbiological methods reading out in hours to about 7 days · host cell protein specified to single-digit parts per million · cell-based potency assays at roughly 10–30% relative standard deviation · panel cost fixed per lot, so nearly identical for 10 kg of antibody and one patient's dose.

## Regulatory notes
ICH Q6B is the framework the specification gets written against, and every method on it needs a validation package under ICH Q2(R2) covering accuracy, precision, specificity, linearity, and range. That work is a line item, not paperwork: a potency bioassay usually takes a year or more to develop, qualify, and validate, and FDA thought the problem important enough to issue dedicated draft guidance on potency assurance for cell and gene therapy products in December 2023. Once a method is in the filing, replacing it is a post-approval change with its own bridging data, so an assay you regret is expensive to get rid of. Alternative microbiological methods are explicitly allowed (USP General Chapter 1223, Ph. Eur. 5.1.6), but the burden is on you to demonstrate equivalence to the compendial method, which is why rapid sterility is standard in cell therapy and rare everywhere else.

## Examples
The multi-attribute method, an LC-MS peptide map developed at Amgen and now used across the industry to replace several separate identity and purity assays with one measurement. bioMérieux BacT/ALERT and Rapid Micro Biosystems Growth Direct for rapid sterility and bioburden. PCR mycoplasma kits such as Thermo Fisher MycoSEQ and Roche MycoTOOL, both accepted as alternatives to the 28-day culture. Cygnus Technologies host cell protein ELISA kits, used either off the shelf or as the starting point for a process-specific assay. Contract testing at Eurofins BioPharma Product Testing, SGS, and Charles River, which is where most companies run stability programs and specialty assays rather than building the lab themselves.

## Economic profile
QC cost is mostly people and calendar time, not reagents. A commercial release panel is a couple of dozen tests, and the analysts, instrument qualification, reference standards, and the multi-year stability program running alongside it are what push QC to 10–25% of cost of goods. That cost is fixed per lot rather than per gram, which is why it barely registers on a 10 kg antibody batch and dominates a cell therapy lot of one dose. Contract labs charge per test against a minimum, so small programs pay a premium and large ones eventually build their own lab; the crossover is usually around one lot a week. The cost curve here is close to flat. Assays have gotten better without getting much cheaper, and the two changes that would actually move the number, rapid microbiology and real-time release, buy turnaround by spending capital and validation work rather than by cutting cost. If you are building a business on a modality with small lots, treat QC as a structural cost that automation does not fix, and size the lab for it from the start.

## Videos

- https://www.youtube.com/watch?v=Gfu61757ikc — Sterility Testing performed at Nelson Labs (Nelson Labs, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=kcxmaB-qhmQ — An Inside Look at ARL's Rapid Sterility Test (ARL Bio Pharma, 4 minutes, 1k+ views)

## Further reading

[Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products, Q6B (ICH)](https://database.ich.org/sites/default/files/Q6B%20Guideline.pdf) · [Validation of Analytical Procedures, Q2(R2) (ICH)](https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf)
