---
number: 10
name: Hybrid Capture
part: 3
group: Targeted reading
role: prep
length: [vshort, short]
apps: [targeted, wgs, epi]
cost: med
maturity: default
---

## Description
Hybrid capture enriches a chosen part of the genome by fishing for it. A sequencing library is made from the whole sample, then mixed with a pool of biotinylated probes complementary to the regions of interest. The probes hybridize to matching fragments, streptavidin beads pull them out, everything else is washed away, and the captured library is amplified and sequenced. Because enrichment happens after library construction rather than through amplification of specific targets, the fragments retain their original ends, which preserves the information that molecular barcodes and duplicate detection depend on and makes copy number analysis work properly. Probe pools scale to very large target sets: exome capture covers all roughly 20,000 protein-coding genes, and custom panels can cover anything from a few genes to tens of megabases without redesigning a primer scheme.

## Strengths and weaknesses
The strengths are coverage uniformity, scale and design flexibility. Coverage is more even than amplicon panels achieve, so fewer regions fall below the minimum depth an assay requires. Target sets can be very large, and adding content means adding probes to a pool rather than rebalancing a multiplex PCR. Original fragment ends are preserved, so duplicate reads can be identified properly and copy number can be called from read depth. Off-target reads still carry usable low-coverage information about the rest of the genome. The weaknesses are time, cost and input. The workflow includes an overnight hybridization, so turnaround is a day or more longer than an amplicon panel. Cost per sample is higher, from the probe pool and the extra steps. Input DNA requirements are greater, which is a real constraint on small biopsies. Capture efficiency falls in regions of extreme base composition and in repetitive sequence, where probes bind poorly or promiscuously.

## When to use
Use hybrid capture when the target region is large, when uniform coverage matters, or when the content will change over time. Exome sequencing, comprehensive cancer panels of hundreds of genes, and any assay where copy number is part of the answer are the natural applications. It is also the better choice when molecular barcode-based error correction is needed on native fragment ends. Use amplicon panels instead when input is scarce, turnaround must be measured in hours, or the target set is small and stable, since capture's advantages do not repay its cost at small scale. For very large target sets the calculation flips again: once a panel covers a substantial fraction of the exome, whole genome sequencing can be cheaper than capturing.

## Key numbers
Target sets from a few genes to the full exome of roughly 20,000 genes and beyond · coverage uniformity better than amplicon panels, with fewer targets falling below minimum depth · workflow includes an overnight hybridization, adding a day or more against amplicon methods · input requirements higher than amplicon panels, typically tens to hundreds of nanograms · on-target rates commonly 50–80% depending on design and target size · cost per sample higher than amplicon panels and well below whole genome sequencing for small target sets.

## Failure modes
Capture efficiency varies with sequence, so regions of extreme base composition and repetitive sequence are consistently under-covered, and a panel's weak spots are systematic rather than random. Probes can cross-hybridize to similar sequences elsewhere, pulling in pseudogene copies that then misalign and generate spurious variant calls, which is a well-known problem in genes with close paralogs. Off-target capture wastes sequencing capacity and is the main determinant of how much data a sample needs. Because the workflow is long, sample tracking errors have more opportunities to occur, and unique dual indexes are important. As with any enrichment, variants outside the design are invisible, and expanding coverage later means reprocessing samples rather than reanalyzing data.

## Examples
Clinical exome sequencing, which is the largest single application; comprehensive genomic profiling panels in oncology covering hundreds of genes with copy number and fusion detection; circulating tumor DNA assays that combine capture with molecular barcodes to reach very low detection limits; methylation capture panels; and target enrichment for non-human genomics where a reference exists but whole genome sequencing is unaffordable at the sample numbers required.

## Economic profile
Sits in the middle of the targeted sequencing market and is squeezed from both sides. Amplicon panels are cheaper and faster for small stable target sets, and falling whole-genome costs erode the case for capture at the large end, since capturing an increasingly large fraction of the genome eventually costs more than sequencing all of it. The probe pool is the recurring consumable and where suppliers make their margin. The long-term direction is clear even if the timing is not: as sequencing gets cheaper, enrichment becomes harder to justify, and the industry drifts toward sequencing everything and filtering computationally, which also removes the revalidation burden that comes with changing an assay's content.

## Videos

- https://www.youtube.com/watch?v=tKis4xKH_VA — Illumina Target Enrichment Workflow (Illumina, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Qx8-rrdYuS4 — myBaits Hybridization Capture for Targeted NGS Sequencing (Daicel Arbor Biosciences, 4 minutes, 5k+ views)
- https://www.youtube.com/watch?v=kq8KcvDKXmY — What is the difference between hybrid capture and multiplex PCR-based target enrichment for NGS? (Paragon Genomics, 2 minutes, 5k+ views)

## Further reading

[Target Enrichment Approaches for Next-Generation Sequencing Applications in Oncology (Diagnostics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9318977/)
