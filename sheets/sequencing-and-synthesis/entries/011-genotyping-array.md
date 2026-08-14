---
number: 11
name: Genotyping Microarray
part: 3
group: Array and mapping methods
role: read
length: [vshort]
apps: [targeted]
cost: vlow
maturity: proven
---

## Description
A genotyping microarray measures which version of a chosen set of variants a sample carries, without sequencing anything. Hundreds of thousands to millions of short probes are printed or bead-loaded onto a chip, each complementary to a specific known variant site. Sample DNA is fragmented, labeled and hybridized, and the fluorescence at each probe reports which allele is present. The critical difference from sequencing is that an array only sees what was designed into it: it is an interrogation of known positions, not a discovery method. That constraint is also its strength, because measuring a million pre-selected positions is far cheaper than sequencing a genome, and for common variation it is enough. Imputation extends the reach considerably, using population reference panels to infer the genotypes of millions of unmeasured variants from the correlation structure of the ones that were measured.

## Strengths and weaknesses
The strengths are cost and throughput. Arrays cost a small fraction of even the cheapest whole-genome sequencing, run on simple instruments, and produce a compact well-behaved dataset that needs no alignment or variant calling. For genome-wide association studies across hundreds of thousands of people, they remain the economically rational choice. Copy number can be inferred from signal intensity. The weaknesses follow directly from measuring only known sites. Rare and novel variants are invisible, which makes arrays unsuitable for diagnosing rare disease, where the causal variant is usually rare by definition. Probe performance varies and some sites fail consistently. Ancestry bias is a serious and underappreciated problem: arrays were designed around variation cataloged mostly in European-ancestry populations, so both direct coverage and imputation accuracy are worse for other ancestries, which propagates into polygenic scores and association studies.

## When to use
Use arrays when you need common variant genotypes across very large numbers of samples and cost per sample dominates: genome-wide association studies, polygenic risk scoring, population biobanks, agricultural breeding programs, and consumer ancestry testing. They remain the right tool for that work. Do not use them for rare disease diagnosis, for anything requiring novel variant discovery, or for populations whose variation is poorly represented in the array design and the imputation reference. Check imputation accuracy for the specific ancestries in your cohort rather than accepting a global figure, because the difference between populations is large enough to change conclusions. As sequencing costs fall, the crossover point where low-coverage whole genome sequencing beats an array keeps moving, and it is worth recalculating rather than assuming.

## Key numbers
Hundreds of thousands to a few million variant positions per array · cost per sample a small fraction of whole genome sequencing, which is the entire rationale · measures only designed positions, so novel and rare variants are invisible · imputation extends coverage to millions of additional variants using population reference panels · imputation accuracy is substantially lower for ancestries under-represented in reference panels · copy number inferred from intensity rather than measured directly · used for the great majority of published genome-wide association studies.

## Failure modes
The dominant systematic failure is ancestry bias, and it is not a technical artifact but a design consequence: probes were chosen from variant catalogs built mostly from European-ancestry cohorts, so an array measures other populations less well and imputes them worse, and polygenic scores built on that data transfer poorly. This has produced published findings that do not replicate across populations. Beyond that, probes at sites where a nearby variant disrupts hybridization give wrong genotypes, batch effects between chip lots can masquerade as association signals if cases and controls were run separately, and copy number inference from intensity is noisy. The most common analysis error is treating imputed genotypes as measured ones without carrying their uncertainty through.

## Examples
The UK Biobank genotyping of roughly half a million participants, which underpins a very large fraction of modern human genetics; consumer ancestry and health testing services; agricultural genomic selection programs in livestock and crops, where arrays are used at enormous scale for breeding decisions; and the genome-wide association studies of the 2007 to 2020 period, essentially all of which used arrays.

## Economic profile
A mature, low-margin, high-volume business, and one of the few places in genomics where the incumbent's cost advantage comes from manufacturing scale rather than from chemistry. The strategic question is how long arrays remain rational as sequencing prices fall. Low-coverage whole genome sequencing with imputation already competes on cost in some settings and gives a superset of the information, including novel variants and better performance across ancestries. Consumer genomics has been the most visible commercial application and also the most volatile, since the business model depends on repeat engagement that a one-time test does not naturally produce.

## Videos

- https://www.youtube.com/watch?v=lVG04dAAyvY — Illumina Infinium Assay: An Overview (Illumina, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=DHcCv6u0I3M — Illumina BeadChip genotypes - The basics (Genomics Boot Camp, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=G2d5qaJ_g3w — The pros and cons of GWAS (The Sheekey Science Show, 10 minutes, 10k+ views)

## Further reading

[SNP Arrays (Microarrays)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5197946/) · [Imputation-based genomic coverage assessments of current human genotyping arrays (G3)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3789804/)
