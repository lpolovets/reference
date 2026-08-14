---
number: 18
name: Molecular Barcodes and Error Correction
part: 5
group: Accuracy and extraction
role: prep
length: [vshort]
apps: [targeted, rna]
cost: low
maturity: default
---

## Description
A molecular barcode, usually called a unique molecular identifier, is a short random sequence attached to each original DNA fragment before any amplification. Every copy made from that fragment carries the same barcode, so after sequencing you can group reads by barcode and know they came from one starting molecule. That grouping does two things. It lets you count original molecules instead of reads, which removes amplification bias from quantification. And it lets you build a consensus across the copies of each original molecule, so that an error introduced during PCR or sequencing appears in only some copies and is voted out, while a real variant appears in all of them. Duplex sequencing extends this by tagging both strands of the original double helix separately and requiring agreement between them, which removes errors that occurred on one strand before amplification.

## Strengths and weaknesses
The strengths are sensitivity and honest counting. Consensus calling across barcode families drops the effective error rate by orders of magnitude, which is what makes detecting a variant present in one molecule in ten thousand possible at all. For expression quantification, counting molecules rather than reads removes a major source of bias. Duplex methods reach error rates low enough to measure somatic mutation in normal tissue, which no other approach can do. The weaknesses are cost and depth. Building a consensus requires sequencing every original molecule several times over, so a large fraction of the sequencing output is spent confirming what you already read, and duplex sequencing is dramatically more expensive still because it needs both strands represented multiple times. Barcode collisions occur when two different molecules receive the same barcode, and barcodes themselves accumulate sequencing errors, both of which need handling.

## When to use
Use molecular barcodes whenever the variant of interest may be present at low frequency: circulating tumor DNA, minimal residual disease monitoring, somatic mosaicism, mutagenicity testing, and any assay claiming detection below a few percent allele fraction. They are effectively mandatory for those applications, and an assay claiming sub-percent sensitivity without them should be treated skeptically. Use them for RNA quantification wherever amplification is involved, which includes essentially all single-cell methods. Use duplex sequencing when the requirement is measuring genuinely rare mutations in normal tissue or reaching the lowest achievable error rates, and budget for it accordingly, because the sequencing cost per informative molecule is very high.

## Key numbers
A barcode is typically 8–16 random bases attached before amplification · consensus across a barcode family reduces effective error rates by orders of magnitude against raw sequencing · detection limits below 0.1% allele fraction are achievable with barcodes, against roughly 1% without and 15–20% for Sanger · duplex sequencing requires both strands of the original molecule and reaches the lowest error rates available · several-fold to tens-of-fold sequencing redundancy is needed per original molecule, which is the cost · barcode collisions rise as the number of input molecules approaches the barcode space.

## Failure modes
The commonest mistake is claiming a detection limit that the input allows. Sensitivity is bounded by how many original molecules were in the sample, not by sequencing depth: if a plasma sample contains 3,000 genome equivalents, no amount of sequencing detects a variant present at one in ten thousand, because the molecule is not there. Assays are routinely oversold on this point. Barcode collisions assign two original molecules to one family and corrupt the consensus. Errors in the barcode itself split one family into two, which looks like extra molecules. Insufficient family size means consensus is built from too few reads to vote reliably, and family size distribution should be reported rather than an average. Contamination and index hopping both create apparent low-frequency variants that barcoding does not fix.

## Examples
Circulating tumor DNA assays for treatment selection and minimal residual disease detection, which depend entirely on this technique; duplex sequencing used to measure somatic mutation accumulation in normal human tissue and to detect low-frequency mutagenic effects in toxicology; single-cell RNA sequencing, where every commercial protocol includes molecular identifiers; and error-corrected sequencing used to measure the fidelity of gene editing and of DNA synthesis.

## Economic profile
Barcoding is cheap to add and expensive to use, because the cost lands in sequencing depth rather than in reagents. That structure has shaped an entire diagnostics segment: liquid biopsy assays are priced on the sequencing burden their sensitivity requires, and the competitive question between vendors is how few molecules and how little depth can achieve a clinically acceptable limit of detection. As sequencing prices fall, assays that were uneconomic become viable, which is why minimal residual disease monitoring has moved from research to commercial reality over the last few years, and it is one of the clearest examples of falling sequencing cost creating a new market rather than just reducing an old cost.

## Videos

- https://www.youtube.com/watch?v=I0wHb3Ol6IY — VIB Tech Training: UMIs allow to detect PCR copies in single cell sequencing (janick mathys, 4 minutes, under 1k views)
- https://www.youtube.com/watch?v=39bgOS2baLo — Barcodes vs. UMIs: How NGS Antibody Data Gets Processed (Geneious, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=Tf9UQdgWJV0 — Duplex sequencing: Detecting ultra rare variants (MHSc Medical Genomics, 16 minutes, under 1k views)

## Further reading

[UMI-tools: modeling sequencing errors in Unique Molecular Identifiers to improve quantification accuracy (Genome Research)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5340976/) · [Correcting PCR amplification errors in unique molecular identifiers to generate accurate numbers of sequencing molecules (Nature Methods)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10927542/)
