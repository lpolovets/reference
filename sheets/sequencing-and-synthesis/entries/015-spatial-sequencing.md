---
number: 15
name: Sequencing-Based Spatial Transcriptomics
part: 4
group: Spatial methods
role: prep
length: [vshort]
apps: [rna]
cost: high
maturity: emerging
---

## Description
Sequencing-based spatial transcriptomics keeps track of where in a tissue each transcript came from. A tissue section is placed on a slide covered in capture probes, each carrying a barcode that encodes its position on the slide. The tissue is permeabilized, messenger RNA diffuses down onto the surface and is captured, and the position barcode is incorporated during library construction. Sequencing then reports both what the transcript was and where it was. The critical specification is the size of each capture spot, because that determines whether you are measuring a single cell or a neighborhood. Early implementations used spots of roughly 55 micrometers, which contain several to tens of cells depending on tissue, so the measurement is a local average. Newer designs use much smaller features, down to sub-micrometer, which approach or reach single-cell resolution and change what the data can support.

## Strengths and weaknesses
The strength is that it is unbiased: the whole transcriptome is captured without choosing genes in advance, so it is a discovery method in a way that imaging-based spatial methods are not. Tissue architecture is preserved, which matters enormously for tumors, brain and any tissue where position is functional. It works on standard sections and integrates with existing histology. The weaknesses are resolution and capture efficiency. At the older spot sizes, each measurement mixes several cells, so cell-type composition has to be inferred computationally by deconvolution against a single-cell reference, and those inferences are only as good as the reference. Capture efficiency is lower than for single-cell methods, so the data are sparser still. Cost per section is high and the area covered per slide is small, which limits how much tissue can be surveyed. Diffusion of transcripts before capture blurs the spatial signal at fine scales.

## When to use
Use sequencing-based spatial methods when you need whole-transcriptome coverage with spatial context and do not know in advance which genes matter. Tumor microenvironment mapping, tissue atlases and discovery work in structured tissue are the natural applications. Use imaging-based spatial methods instead when you know your gene panel, need genuine single-molecule and single-cell resolution, or need to work with fixed archival tissue where sequencing-based capture performs poorly. If spot sizes in your chosen implementation are larger than a cell, plan the deconvolution approach and the matching single-cell reference before running samples, because the analysis depends on it and retrofitting a reference is worse than designing for one.

## Key numbers
Capture spot sizes have fallen from roughly 55 micrometers, covering several to tens of cells, down to sub-micrometer features in newer implementations · whole transcriptome captured without gene selection, which is the defining advantage · capture efficiency lower than single-cell methods, so data are sparse · tissue area per slide is limited, typically a few square millimeters to a few square centimeters · cost per section in the hundreds to low thousands of dollars plus sequencing · transcript diffusion before capture limits effective resolution below the nominal feature size.

## Failure modes
The most common error is treating spot-level data as cell-level data. At multi-cell spot sizes every measurement is a mixture, and reporting that a spot expresses two markers does not mean any cell expresses both, which has generated a great deal of overstated colocalization. Deconvolution can recover composition but inherits every bias of the reference dataset, including its dissociation bias. Permeabilization time is a critical and tissue-specific parameter: too short and capture fails, too long and transcripts diffuse and the spatial signal smears. Section quality, RNA integrity and tissue thickness all affect results substantially. And because tissue area per slide is small, sampling a tumor at one location and generalizing is a real risk that the method's expense encourages.

## Examples
The Visium platform and its higher-resolution successors, which made spatial transcriptomics routine; Slide-seq and related bead-based methods that reached near-cellular resolution earlier; tumor studies mapping immune exclusion and spatial niches; developmental atlases where position is the biology; and the growing set of studies pairing spatial with single-cell data from the same samples, which is now the standard design.

## Economic profile
An expensive consumables business in rapid technical flux, which makes purchasing decisions difficult: resolution has improved by more than an order of magnitude across a few product generations, so an instrument or workflow bought today may be superseded quickly. Competition between sequencing-based and imaging-based approaches is active and has not resolved, and they are converging on similar capabilities from different directions. For a laboratory, the practical implication is to favor service providers over capital purchases until the field settles, and for an investor, the platform question is whether either approach establishes a durable advantage before the other closes the gap.

## Videos

- https://www.youtube.com/watch?v=VwNk4d-0RJc — How it Works | Visium Spatial Gene Expression Solution (10x Genomics, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ULfdOEhGvzs — The ST Protocol (Spatial Transcriptomics, 14 minutes, 5k+ views)
- https://www.youtube.com/watch?v=mQXr7ZsojpE — Sam Rodriques - Slide-seq: Spatial RNA sequencing with single-cell resolution (CPM Oxford, 21 minutes, 1k+ views)

## Further reading

[Technical Advances and Applications of Spatial Transcriptomics (GEN Biotechnology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11562938/)
