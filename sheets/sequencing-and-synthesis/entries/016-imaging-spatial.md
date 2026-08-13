---
number: 16
name: Imaging-Based Spatial Profiling
part: 4
group: Spatial methods
role: read
length: [vshort]
apps: [rna, targeted]
cost: high
maturity: emerging
---

## Description
Imaging-based spatial methods find individual transcript molecules in intact tissue by looking at them. A panel of probes is hybridized to chosen target genes, and the identity of each gene is encoded as a sequence of fluorescent signals read across many successive rounds of imaging, so that a manageable number of color channels can distinguish hundreds to thousands of genes through combinatorial coding. Each detected spot is one molecule at a known location with sub-cellular precision. Because the tissue is never dissociated and never sequenced, the measurement preserves true single-cell boundaries and even sub-cellular localization, which sequencing-based spatial methods cannot reach. The trade-off is fundamental to the approach: you must decide which genes to measure before you start, so this is a measurement method rather than a discovery method.

## Strengths and weaknesses
The strengths are resolution and sensitivity. Individual molecules are localized to within a fraction of a cell, cell boundaries are real rather than inferred from capture spots, and detection efficiency per targeted transcript is considerably higher than capture-based methods achieve. It works well on formalin-fixed archival tissue, which unlocks enormous existing sample collections that sequencing-based capture handles poorly. Sub-cellular localization is a genuinely new kind of information. The weaknesses are panel selection and throughput. Measuring only chosen genes means the experiment can only answer questions anticipated in advance, and a panel that misses the relevant biology cannot be rescued by reanalysis. Imaging many rounds over large tissue areas is slow and generates very large image datasets. Cell segmentation, dividing the image into cells, is a persistent source of error, and molecules assigned to the wrong cell produce apparent co-expression that is an artifact.

## When to use
Use imaging-based spatial profiling when you know which genes matter, need genuine single-cell or sub-cellular resolution, or are working with fixed archival tissue. Validating a hypothesis generated from single-cell or sequencing-based spatial data is the classic application, and the two approaches pair well in that order: discover with sequencing, confirm and localize with imaging. It is the better choice for clinical and translational work on retrospective cohorts, where the samples are fixed and the gene set is defined. Use sequencing-based methods when the gene set is unknown. Treat cell segmentation quality as a primary quality metric rather than a preprocessing detail, since it determines whether the single-cell claims hold at all.

## Key numbers
Panels of hundreds to a few thousand genes, chosen in advance · single-molecule detection with sub-cellular localization · detection efficiency per targeted transcript higher than capture-based spatial methods · combinatorial encoding across many imaging rounds is what allows a few color channels to distinguish thousands of genes · works on formalin-fixed paraffin-embedded tissue, unlike most capture-based approaches · imaging time and data volume scale with area and with the number of rounds · cost per section high, comparable to sequencing-based spatial.

## Failure modes
Cell segmentation is the dominant error source. Assigning molecules to cells requires drawing boundaries in an image, and in dense tissue those boundaries are ambiguous, so molecules are routinely assigned to neighbors. The consequence is apparent co-expression of markers that belong to adjacent cell types, which looks like a novel hybrid population and is an artifact. Optical crowding in highly expressed genes causes spots to overlap and be undercounted, which compresses dynamic range at the top end. Autofluorescence in fixed tissue creates false spots. Registration errors across imaging rounds corrupt the combinatorial code and produce misidentified genes. And panel design is a one-way decision: the genes not chosen are permanently absent from the dataset.

## Examples
The MERFISH and seqFISH methods that established combinatorial single-molecule imaging; the Xenium and CosMx commercial platforms that made it accessible to non-specialist laboratories; brain atlases mapping cell types in situ at single-molecule resolution; tumor immunology studies on archival fixed cohorts where no fresh tissue exists; and the growing practice of pairing a discovery single-cell experiment with an imaging-based validation on the same cohort.

## Economic profile
A capital-intensive instrument market with high-margin consumable panels, competing directly with sequencing-based spatial from the opposite technical direction. The competitive picture is genuinely unsettled: imaging methods are adding genes toward whole-transcriptome coverage while sequencing methods are shrinking features toward single-cell resolution, and each is approaching the other's advantage. For laboratories the sensible position is to use service providers rather than buy, since the technology generation cycle is short. The archival tissue compatibility is the most durable commercial advantage, because the world's pathology archives are enormous, fixed, and unusable by most other methods.

## Further reading

[Spatially resolved cell atlas of the mouse primary motor cortex by MERFISH (Nature)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8494645/)
