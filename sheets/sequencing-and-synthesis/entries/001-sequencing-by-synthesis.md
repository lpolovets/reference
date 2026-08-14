---
number: 1
name: Sequencing by Synthesis
part: 1
group: Short-read platforms
role: read
length: [vshort]
apps: [wgs, targeted, rna, epi]
cost: vlow
maturity: default
---

## Description
Sequencing by synthesis is the chemistry behind the instruments that have produced most of the world's sequence data. DNA fragments are attached to a flow cell surface and amplified in place into clusters of identical copies, so that each cluster gives a signal strong enough to read. Sequencing then proceeds one base at a time: fluorescently labeled nucleotides with a reversible chemical block are washed in, one is incorporated at each cluster, the flow cell is imaged, and the label and block are cleaved so the next cycle can run. Every cluster is read in parallel, and a modern flow cell holds billions of them, which is where the throughput comes from. Reads are short because the chemistry accumulates errors: molecules within a cluster gradually fall out of step with each other, and the signal degrades until base calling becomes unreliable, which happens somewhere around 250 to 300 cycles.

## Strengths and weaknesses
The strengths are accuracy, throughput and cost. Raw per-base accuracy above 99.9% is routine, and the errors that do occur are mostly substitutions rather than insertions or deletions, which is the easier error type to handle in variant calling. Throughput on the largest instruments is measured in terabases per run, and cost per gigabase is the lowest of any method. The ecosystem is the real moat: two decades of tools, pipelines, reference datasets and trained people all assume this data. The weaknesses follow from the read length. Short reads cannot span repetitive regions, so they miss structural variation, cannot phase variants that sit far apart, and align ambiguously in segmental duplications and the several percent of the genome that stayed unresolved until long reads arrived. Amplification introduces bias against regions of extreme base composition and creates duplicate reads. The instruments are expensive and the largest ones only make economic sense at high, steady volume.

## When to use
Use short-read sequencing by synthesis as the default for counting applications and for small variants: whole genome and exome sequencing for single-nucleotide variants, RNA quantification, targeted panels, and any experiment where the answer comes from how many reads fall somewhere rather than from what a single molecule looks like end to end. It is the right choice when cost per sample matters and the question does not involve structure. Reach for a long-read platform when you need structural variants, phasing, repeat expansions, full-length transcript isoforms, or assembly of a new genome. Many projects now run both, using short reads for depth and accuracy and long reads for structure, and that combination is more often the right answer than either alone.

## Key numbers
Read lengths typically 100–300 bases, most commonly 150 bases paired-end · raw accuracy above 99.9%, with errors mostly substitutions · output from a few gigabases on a benchtop instrument to terabases on the largest · a 30-fold coverage human genome takes roughly 90–100 gigabases · cost per gigabase has fallen by several orders of magnitude since 2007 and continues to fall with each instrument generation · run times from several hours to a couple of days · instrument capital from tens of thousands to over a million dollars.

## Failure modes
The characteristic failures are all consequences of short reads and amplification. Repetitive regions produce ambiguous alignment, so variants there are either missed or called wrongly, and this is silent: the pipeline returns a confident answer for the regions it can handle and simply says nothing about the ones it cannot. Amplification bias depletes coverage in regions of very high or very low base composition, which is why some clinically important regions have persistently poor coverage. PCR duplicates inflate apparent depth and can make a sequencing error look like a real variant if not removed. Index hopping on patterned flow cells assigns reads to the wrong sample in multiplexed runs, which matters most when looking for rare variants and is controlled with unique dual indexes. Coverage uniformity, not raw accuracy, is usually what limits a clinical assay.

## Examples
The Illumina instrument line, which has dominated the market for over a decade, from benchtop sequencers through the highest-throughput production instruments; the UK Biobank and All of Us whole-genome programs, which produced hundreds of thousands of genomes on this chemistry; essentially every large population genomics dataset; and the RNA sequencing and single-cell workflows that use it as the readout.

## Economic profile
The clearest example in life sciences of a razor-and-blade model, and one of the most profitable. Instruments are sold at moderate margin and consumables at high margin, with the flow cell as the recurring purchase, and the installed base plus the software ecosystem makes switching genuinely expensive even when a competitor's specifications are better. That position held for roughly fifteen years and has recently come under real pressure from several new entrants, which has moved list prices more in the last few years than in the decade before. For a buyer, the important consequence is that cost per gigabase quotes are contract-dependent and the list price is not the price; for anyone building a business on sequencing, the input cost is falling but the supplier concentration is a genuine risk.

## Videos

- https://www.youtube.com/watch?v=fCd6B5HRaZ8 — Overview of Illumina Sequencing by Synthesis Workflow | Standard SBS chemistry (Illumina, 5 minutes, 1m+ views)
- https://www.youtube.com/watch?v=WKAUtJQ69n8 — NGS Explained: Next Generation Sequencing Step-by-Step (ClevaLab, 8 minutes, 500k+ views)
- https://www.youtube.com/watch?v=CZeN-IgjYCo — Next Generation Sequencing (Illumina) - An Introduction (Henrik's Lab, 5 minutes, 500k+ views)

## Further reading

[Performance assessment of DNA sequencing platforms in the ABRF Next-Generation Sequencing Study (Nature Biotechnology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8985210/) · [DNA Sequencing Costs: Data (NHGRI)](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data)
