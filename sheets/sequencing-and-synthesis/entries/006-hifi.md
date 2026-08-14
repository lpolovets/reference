---
number: 6
name: HiFi Single-Molecule Sequencing
part: 2
group: Long-read platforms
role: read
length: [mid, long]
apps: [wgs, struct, epi]
cost: med
maturity: proven
---

## Description
Single-molecule real-time sequencing watches one polymerase copy one DNA molecule, detecting each nucleotide as it is incorporated by the flash of fluorescence from a label that is cleaved away immediately afterwards. The polymerase sits at the bottom of a well small enough that only the nucleotide being incorporated is illuminated. On its own this gives long reads with a fairly high raw error rate, and the important development was circular consensus: the DNA fragment is circularized, the polymerase goes round it many times, and the resulting repeated passes over the same molecule are collapsed into a consensus. Because the errors are random rather than systematic, averaging many passes drives accuracy up sharply. The result, called HiFi, is reads of roughly 15 to 25 kilobases at accuracy comparable to short-read sequencing, which is the combination that made long reads acceptable for clinical variant calling.

## Strengths and weaknesses
The strength is having both length and accuracy at once, which nothing else offers. Reads long enough to phase variants and span most repeats, at per-base accuracy that supports confident single-nucleotide variant calling, means one dataset answers questions that previously required two platforms. Methylation is detected directly from polymerase kinetics with no separate assay. Assemblies from HiFi data are the current standard for reference-quality genomes. The weaknesses are cost, throughput and the length ceiling. Circular consensus spends sequencing capacity on repeated passes over the same molecule, so usable output per run is well below what the raw chemistry generates and well below short-read platforms, which makes cost per gigabase substantially higher. Read lengths, while long, are shorter than nanopore's, because the fragment must be short enough for the polymerase to circle it several times. Instruments are expensive and input DNA quality requirements are demanding.

## When to use
Use HiFi when you need long reads and high accuracy in the same dataset: reference genome assembly, clinical structural variant detection where a confident call is required, phasing across a gene, and comprehensive variant detection where missing something is worse than the cost. It has become the standard for rare disease genome sequencing in programs that can afford it, because a single assay finds small variants, structural variants, repeat expansions and methylation together. Choose nanopore instead when you need reads longer than about 25 kilobases, when turnaround time is critical, or when cost per sample is the constraint. Choose short reads when the question is counting and structure does not matter. Sample quality matters as much as it does for nanopore.

## Key numbers
Read lengths typically 15–25 kilobases for HiFi mode · accuracy comparable to short-read platforms after circular consensus, from averaging many passes over the same molecule · errors in the raw signal are random rather than systematic, which is why consensus works so well · methylation detected directly from polymerase kinetics · output per run well below short-read platforms, so cost per gigabase is several times higher · instrument capital in the high hundreds of thousands · the standard input for reference-grade genome assembly.

## Failure modes
The main trap is the trade-off between read length and accuracy, which is set by how many passes the polymerase makes: longer inserts mean fewer passes and lower consensus accuracy, so a library pushed toward maximum length quietly loses the accuracy that justified the platform. Input DNA quality is critical, and degraded samples produce short inserts and poor yield. Cost per gigabase is high enough that projects sized on short-read intuitions come out several times over budget, which is the most common planning error. The platform reads through most but not all difficult regions, so the longest repeat arrays and some centromeric sequence still need ultra-long reads from another technology, and assuming HiFi resolves everything is a mistake.

## Examples
PacBio's Revio and related instruments; the Human Pangenome Reference Consortium assemblies, which combined HiFi with ultra-long nanopore reads to produce reference-quality diploid genomes; rare disease programs that replaced exome sequencing with long-read genome sequencing and found diagnoses that short reads had missed; and the telomere-to-telomere reference work, where HiFi provided the accurate backbone and nanopore the ultra-long scaffolding.

## Economic profile
Positioned as the premium long-read platform, sold on the value of a complete and confident answer rather than on cost per base. That works well in rare disease diagnostics, where a diagnosis after years of testing is worth a great deal, and in reference genomics, where quality is the product. It works poorly against short reads for any counting application and against nanopore where turnaround or capital cost dominates. The competitive dynamic between the two long-read platforms has been good for buyers, with both improving accuracy and throughput quickly, and the practical result is that many large projects now use both rather than choosing.

## Videos

- https://www.youtube.com/watch?v=7yYPHatccgw — PacBio sequencing: how it works (2026) (PacBio, 3 minutes, 500k+ views)
- https://www.youtube.com/watch?v=F6J8P3IRRw4 — Understanding PacBio HiFi Sequencing (PacBio, 6 minutes, 1k+ views)
- https://www.youtube.com/watch?v=-nOr5B_bF3A — Pacific Biosciences Sequencing (RobEdwards, 5 minutes, 10k+ views)

## Further reading

[Long and Accurate: How HiFi Sequencing is Transforming Genomics (Genomics, Proteomics & Bioinformatics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12257948/)
