---
number: 9
name: Amplicon Panel Sequencing
part: 3
group: Targeted reading
role: prep
length: [vshort, short]
apps: [targeted, rna]
cost: low
maturity: default
---

## Description
An amplicon panel amplifies a defined set of regions by PCR and sequences only those, rather than sequencing everything and discarding most of it. Hundreds to thousands of primer pairs are pooled into one or a few multiplex reactions, the products are barcoded and sequenced, and coverage lands where the primers put it. The economics are the point: sequencing a 50-gene panel at very high depth costs a fraction of sequencing a whole genome at low depth, and the depth is what lets the assay detect variants present in a small fraction of the molecules, which is what somatic and liquid biopsy testing require. Amplicon panels are also the fastest targeted method, since the workflow is PCR plus sequencing with no hybridization step, and turnaround measured in hours matters for infectious disease and for time-sensitive oncology testing.

## Strengths and weaknesses
The strengths are depth, speed, cost and low input requirements. Coverage of thousands of times over a small region is affordable, which pushes the detection limit for low-frequency variants down to a fraction of a percent when combined with molecular barcodes. Input DNA requirements are low, which matters for small biopsies and degraded samples. Workflow is short. The weaknesses come from PCR. Primers amplify unevenly, so coverage varies across the panel and some regions consistently underperform, which has to be characterized and reported rather than assumed away. Regions where a primer binding site carries a variant will amplify poorly or not at all, causing allele dropout that produces a false negative in exactly the sample that has the variant. Panels detect only what they target, so a variant outside the design is invisible by construction, and copy number and structural variants are difficult. Redesigning a panel to add genes is a real revalidation exercise.

## When to use
Use an amplicon panel when the gene set is known, the required depth is high, and turnaround or cost per sample matters. It is the standard approach for somatic oncology panels, liquid biopsy, infectious disease typing including viral genome sequencing, and inherited disease panels where the relevant genes are well established. Use hybrid capture instead when the target region is large, when uniform coverage matters more than speed, or when the design needs to change often, since capture handles large and evolving target sets better. Use whole genome or exome sequencing when the answer might be outside the panel, which is the situation panels handle worst and where their apparent cost advantage disappears if a second test is needed.

## Key numbers
Panels typically cover from a handful to a few thousand targets · depth of hundreds to thousands of times over the target region is routine and affordable · detection limits below 1% allele fraction with molecular barcodes, against 15–20% for Sanger · input requirements as low as tens of nanograms, and lower for optimized designs · turnaround measured in hours for the fastest workflows · cost per sample well below whole genome sequencing, which is the entire argument.

## Failure modes
Allele dropout is the failure that matters, and it is insidious because it produces a confident wrong answer: a variant under a primer binding site prevents amplification of that allele, so the assay reports the sample as homozygous reference or homozygous variant when it is neither. Coverage non-uniformity means some targets are always weakly covered, and unless minimum coverage is enforced per target rather than averaged, a region can be reported as negative when it was never adequately read. PCR errors introduced in early cycles look identical to real low-frequency variants, which is why molecular barcodes are essential for any application below a few percent allele fraction. Amplicon boundaries also make copy number and structural variant calling unreliable.

## Examples
Somatic oncology panels used routinely in clinical pathology; circulating tumor DNA assays for treatment selection and monitoring; the ARTIC protocol for SARS-CoV-2 genome sequencing, which used tiled amplicons and was deployed globally during the pandemic; inherited cardiomyopathy and cancer predisposition panels; and 16S ribosomal RNA amplicon sequencing for microbial community profiling.

## Economic profile
The workhorse of clinical sequencing economics. Panels are what make routine molecular pathology affordable, since they turn an expensive sequencing run into a cheap per-sample test by only reading what matters, and reimbursement structures have grown up around them. The commercial tension is that panels have to be revalidated whenever the gene content changes, while the clinically actionable gene list keeps growing, so laboratories face repeated revalidation costs and a slow drift toward exome or genome sequencing, where content changes are a reanalysis rather than a new assay. That drift is real but slow, because reimbursement and turnaround still favor panels.

## Further reading

[Target Enrichment Approaches for Next-Generation Sequencing Applications in Oncology (Diagnostics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9318977/)
