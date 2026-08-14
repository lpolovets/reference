---
number: 14
name: Flow Cytometry
part: 4
group: Cell analysis
sample: [blood, fluid, tissue]
tat: [shift]
setting: hospital
reg: ldt
cost: med
---

## Description
Flow cytometry measures individual cells one at a time as they pass single file through one or more laser beams. Light scattered forward and to the side reports cell size and internal complexity, and fluorescently labeled antibodies bound to surface or intracellular proteins report which markers each cell carries. Tens of thousands of cells per second can be measured, each yielding a set of simultaneous parameters, so the output is a multidimensional description of a population rather than an average. Conventional instruments use one detector per fluorochrome and are limited by spectral overlap to roughly 8 to 18 colors; spectral cytometers instead capture the full emission spectrum of every cell and unmix computationally, which supports 30 or more markers at once. Cell sorting variants divert selected cells physically for downstream use.

## Strengths and weaknesses
The strengths are single-cell resolution at population scale, speed and quantification. Identifying a rare population at one in ten thousand or better is routine, which is what makes minimal residual disease detection work, and the answer arrives the same day. It measures protein rather than transcript, which is what actually determines cell behavior. The weaknesses are standardization and expertise. Analysis depends on gating, the manual process of drawing boundaries in multidimensional space to define populations, and gating is operator-dependent enough that the same data analyzed by two people can give different answers, which is a real reproducibility problem the field has never fully solved. Panel design with many colors is genuinely difficult and compensation errors create artifacts that look like populations. Samples must be fresh, since cells degrade, and this constrains where testing can happen. Antibody clone and lot changes shift results.

## When to use
Use flow cytometry when the question is about cell populations: immunophenotyping in leukemia and lymphoma, CD4 counts in HIV, minimal residual disease detection, immune monitoring, and any application where identifying a rare cell type matters. It is the standard of care in hematological malignancy diagnosis and monitoring. Use single-cell sequencing when you need unbiased discovery of populations you cannot name in advance, accepting far higher cost and slower turnaround. Use imaging when spatial context matters. Standardize panels, reagent lots and gating strategies rigorously if results will be compared over time or between sites, because unstandardized flow data does not travel well, and treat published gating strategies as a starting point requiring local validation.

## Key numbers
Measures tens of thousands of cells per second, each with multiple simultaneous parameters · conventional instruments handle roughly 8–18 fluorochromes, spectral instruments 30 or more · detects rare populations to roughly one in 10,000 or better with sufficient events collected, which is what minimal residual disease requires · turnaround same day, with fresh sample required · instrument capital from tens of thousands for a simple analyzer to over a million for a spectral sorter · antibody panel cost of tens of dollars per sample.

## Failure modes
Gating is the dominant source of variability, and it is a human process: where the boundaries are drawn determines the numbers reported, and inter-operator differences are large enough that the same sample can yield materially different results in different hands. Compensation errors, from spectral overlap between fluorochromes not being corrected properly, create apparent populations that do not exist and are a classic beginner error that also catches experienced users on complex panels. Cell viability falls with time and handling, and dead cells bind antibodies non-specifically, so failing to exclude them inflates rare-population counts, which is exactly the setting where it matters most. Insufficient events collected makes rare-population detection statistically meaningless. Antibody clone changes alter staining patterns and break historical comparability.

## Examples
Leukemia and lymphoma immunophenotyping, the largest clinical application; minimal residual disease monitoring in acute lymphoblastic leukemia and myeloma, where sensitivity to one in 10,000 or better guides treatment; CD4 counting in HIV management; paroxysmal nocturnal hemoglobinuria testing; CAR-T product characterization and post-infusion monitoring; and the very large research use in immunology, where high-parameter spectral panels have become standard.

## Economic profile
An instrument and reagent business where the reagents, meaning conjugated antibodies, carry the margin and the antibody suppliers are the durable beneficiaries. Clinical flow is mostly performed as laboratory-developed tests, which has made it a target of regulatory attention over laboratory-developed test oversight, and any tightening there would fall heavily on this category since so little of clinical flow uses cleared kits. High-parameter spectral instruments have expanded what is measurable and raised both capital cost and analytical complexity, and the practical bottleneck in most laboratories is now trained analysts rather than instruments.

## Videos

- https://www.youtube.com/watch?v=B2zreF2dnWk — Flow Cytometry Animation (Cell Signaling Technology, Inc., 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=gLVouQhSv7Y — Flow Cytometry Basics: How To Use Gates (floreada.io) (Floreada Cytometry, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=L7R7NpUpQME — Understanding Flow Cytometry in Acute Leukemia: The Blast Gate (Bits of Pathology, 12 minutes, under 1k views)

## Further reading

[Immunophenotyping myelodysplastic neoplasms: the role of flow cytometry in the molecular classification era (Frontiers in Oncology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11560873/)
