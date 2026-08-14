---
number: 2
name: Digital PCR
part: 1
group: Amplification methods
sample: [blood, tissue, fluid]
tat: [shift]
setting: reference
reg: ldt
cost: med
---

## Description
Digital PCR removes the standard curve by counting reactions instead of measuring signal. The sample is divided into thousands to millions of tiny partitions, in droplets or in chip wells, so that each partition contains either zero or a small number of target molecules. Every partition then runs its own PCR to completion, and at the end each is scored simply as positive or negative. The proportion that came up positive, corrected by Poisson statistics for partitions that happened to receive more than one molecule, gives the absolute number of target molecules in the original sample. Nothing has to be calibrated against a reference material, and because the readout is a count of end-point reactions rather than a cycle threshold, amplification efficiency differences that would distort a real-time PCR result largely cancel out.

## Strengths and weaknesses
The strengths are absolute quantification, precision and tolerance of inhibitors. Results are comparable between laboratories and instruments without a shared calibrator, which is why digital PCR has become the reference method for certifying nucleic acid standards. Partitioning also concentrates a rare target into its own reaction away from the excess of wild-type background, which is what allows detection of a mutant present at a fraction of a percent among normal molecules. Inhibitors are diluted into individual partitions and affect the count less than they affect a cycle threshold. The weaknesses are cost, throughput and dynamic range. Consumables cost several times a real-time PCR reaction, instruments are expensive, and the number of partitions caps the upper end of quantification, so very high concentrations need dilution. Sample input is limited by partition volume, which bounds sensitivity in the same way it does for any assay: you cannot detect a molecule that was not in the tube.

## When to use
Use digital PCR when the number matters absolutely rather than relatively: measuring residual disease, quantifying a rare mutation against wild-type background, certifying reference materials, measuring viral load where cross-laboratory comparability is required, and quantifying copy number differences of less than two-fold that real-time PCR cannot resolve reliably. It is the right tool for transplant rejection monitoring using donor-derived cell-free DNA and for minimal residual disease in some hematological settings. Use real-time PCR when a relative answer is enough and cost or throughput matters, which covers most infectious disease work. Use sequencing when you need to know which variant rather than how much of a known one.

## Key numbers
Thousands to millions of partitions per sample, which sets both precision and the upper limit of quantification · detects variants down to roughly 0.01–0.1% allele fraction, an order of magnitude or more below real-time PCR · absolute quantification with no standard curve, giving cross-laboratory comparability · run time typically a few hours including partitioning and analysis · consumable cost several times a real-time PCR reaction · precision sufficient to resolve copy number changes below two-fold.

## Failure modes
The most common analytical error is claiming a sensitivity the input does not support. Detection of a variant at 0.01% requires at least tens of thousands of genome equivalents in the reaction, and a sample containing fewer molecules simply cannot deliver it however many partitions the instrument makes. Partition volume variability biases the Poisson correction if not controlled. Rain, meaning partitions with intermediate fluorescence that are neither clearly positive nor negative, forces threshold decisions that change the answer and is worse with poorly optimized assays. Sample loss during partitioning matters more than in bulk PCR because the input is already limited. And carryover contamination remains as dangerous as in any amplification method.

## Examples
Donor-derived cell-free DNA testing for organ transplant rejection, which quantifies a small fraction of donor DNA in recipient plasma; minimal residual disease monitoring in leukemia; quantification of viral load in settings requiring absolute comparability, including certification of international standards; copy number analysis in genetic testing; and quality control of gene therapy products, where vector genome titer must be measured accurately and the method has become a reference standard.

## Economic profile
A premium instrument and consumable business serving applications where the absolute number justifies several times the cost of real-time PCR. Growth has come mainly from clinical applications that did not exist a decade ago, particularly transplant monitoring and cell-free DNA measurement, which found a real clinical need that only absolute quantification could serve. Competition among instrument vendors has increased and consumable prices have come down somewhat. The technology's role as a reference method for certifying standards gives it a durable position beyond its direct clinical use, since it underpins the calibration of cheaper assays.

## Videos

- https://www.youtube.com/watch?v=Qqdmw3wvMFo — Digital PCR Principle & Advantages (Stilla Technologies, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=R92_RwoRSTk — Digital PCR vs. Real-time PCR - Ask TaqMan #30 (Thermo Fisher Scientific, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=KE8nhJSkG_4 — Foundational: Counting in ddPCR (Bio-Rad Laboratories, 10 minutes, 10k+ views)

## Further reading

[Droplet digital PCR of viral DNA/RNA, current progress, challenges, and future perspectives (Journal of Medical Virology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8013307/)
