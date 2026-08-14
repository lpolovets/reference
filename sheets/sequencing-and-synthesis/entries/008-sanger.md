---
number: 8
name: Sanger Sequencing
part: 3
group: Targeted reading
role: read
length: [short]
apps: [targeted, build]
cost: high
maturity: default
---

## Description
Sanger sequencing works by deliberately breaking DNA synthesis. A polymerase copies the template in the presence of a small proportion of chain-terminating nucleotides, each labeled with a different color, so the reaction produces a population of fragments that all start at the same place and stop at every possible position. Separating those fragments by size in a capillary and reading the color at each length gives the sequence directly. It was the method that sequenced the first human genome, and although it was displaced for anything at scale, it remains the default for reading one thing at a time. Two properties keep it alive: a single reaction reads 700 to 900 bases of very high quality with no library preparation and no informatics, and the resulting trace is a directly interpretable picture that a person can look at and judge.

## Strengths and weaknesses
The strengths are simplicity, turnaround and interpretability. For one amplicon, one plasmid or one clone, the answer arrives the same day for a few dollars with no library preparation, no multiplexing, no alignment and no variant caller. The trace is human-readable, which matters when a result has to be defended. Accuracy in the middle of a read is very high, which is why it has been the confirmatory method for clinical variant calling for decades. The weaknesses are throughput and sensitivity. One reaction reads one molecule population, so cost per base is orders of magnitude above any next-generation platform and sequencing more than a handful of targets stops making sense quickly. It cannot detect a variant present in less than roughly 15–20% of the molecules, so low-frequency somatic variants and mosaicism are invisible. The first 20 to 40 bases after the primer are unreliable, and read quality degrades toward the end.

## When to use
Use Sanger sequencing when you have a small number of specific things to check: verifying a plasmid or a cloned construct, confirming a variant found by another method, checking an edited cell line at a known site, or genotyping a handful of samples. It is the default for sequence verification in molecular biology and remains the confirmatory standard in many clinical laboratories. The crossover point is worth knowing: below roughly ten to twenty targets, Sanger is cheaper and faster than preparing a sequencing library, and above that it is not. Do not use it to look for low-frequency variants, to survey anything large, or to detect structural variation, and be aware that its detection floor around 15–20% allele fraction means a negative Sanger result does not exclude a low-level variant.

## Key numbers
Read length 700–900 bases per reaction, with the first 20–40 bases unreliable · very high accuracy in the middle of the read · detection limit roughly 15–20% allele fraction, so low-frequency variants are invisible · cost per reaction of a few dollars, which is very high per base and very low per answer · turnaround same day, with no library preparation · the crossover against next-generation sequencing sits at roughly ten to twenty targets · the method used for the original human genome project.

## Failure modes
The characteristic failure is a mixed trace. If the template contains two different sequences, from a heterozygous insertion or deletion, from a mixed clone, or from a poorly specific PCR, the trace becomes a superposition of two sequences after the difference and is unreadable without deconvolution software. Indels are the usual cause and the reason a clean-looking failure is often misdiagnosed as a bad reaction. The detection floor is the other trap: a laboratory using Sanger to confirm variants can report a negative when a real variant is present below 15%, which matters in somatic testing and mosaicism. Poor template quality, primer dimers and secondary structure all degrade traces, and homopolymer runs can slip.

## Examples
Plasmid and construct verification, which is still overwhelmingly done this way; clinical confirmation of variants found by next-generation panels, long the standard practice; genotyping of edited cell lines at a known target site; the Human Genome Project, completed on capillary Sanger instruments; and the commercial services that will sequence a tube of plasmid overnight for a few dollars, which is what keeps the method ubiquitous.

## Economic profile
A mature commodity service business with very thin margins and enormous volume, sustained by the fact that molecular biology still generates a constant stream of single constructs that need checking. Instrument sales have declined for years while sample volumes have not, because the work moved to service providers who run capillary instruments at scale. The interesting recent development is competitive pressure from cheap targeted next-generation sequencing and from nanopore-based plasmid sequencing services, both of which read a whole plasmid in one pass rather than requiring several primer walks, and which are eroding the one application that kept Sanger indispensable.

## Videos

- https://www.youtube.com/watch?v=e2G5zx-OJIw — How does Sanger Sequencing Work? – Seq It Out #1 (Thermo Fisher Scientific, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=X9566yI2cBo — Sanger Sequencing Explained: The Original Method to Modern DNA Sequencing (ClevaLab, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Wpww8bb63zU — When do I use Sanger Sequencing vs. NGS? - Seq It Out #7 (Thermo Fisher Scientific, 3 minutes, 100k+ views)

## Further reading

[Sanger sequencing is no longer always necessary based on a single-center validation of 1109 NGS variants in 825 clinical exomes (Scientific Reports)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7952542/)
