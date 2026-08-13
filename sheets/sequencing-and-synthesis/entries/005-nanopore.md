---
number: 5
name: Nanopore Sequencing
part: 2
group: Long-read platforms
role: read
length: [long, ultra]
apps: [wgs, struct, epi, rna]
cost: low
maturity: proven
---

## Description
Nanopore sequencing reads a DNA molecule by pulling it through a protein pore set in a membrane and measuring the change in ionic current as bases pass through. Each combination of bases sitting in the pore's narrow constriction blocks the current by a characteristic amount, and a neural network converts the resulting current trace into sequence. Nothing is copied, so there is no amplification and no incorporation chemistry, and the read continues for as long as the molecule keeps threading through: read length is set by the length of DNA you managed to extract, not by the instrument. That is the defining property. It also means the native molecule is what gets read, so chemical modifications such as methylation change the current signal and are detected directly, without bisulfite conversion or any separate assay.

## Strengths and weaknesses
The strengths are read length, direct modification detection, real-time output and portability. Reads of tens of kilobases are routine and reads over a megabase have been reported, which resolves repeats, structural variants and phasing that short reads cannot touch. Methylation comes free with the sequence. Data streams as the run proceeds, so an answer can arrive in minutes rather than after a run completes, and the smallest devices run off a laptop in the field. The weaknesses are accuracy and throughput. Raw per-read accuracy has improved enormously across pore and basecaller generations but remains below short-read platforms, and the residual errors concentrate in homopolymers and in specific sequence contexts, which is a systematic error that coverage does not fully cure. Throughput per flow cell is well below the largest short-read instruments, so very large projects cost more. Yield depends heavily on DNA quality, and a poorly extracted sample gives short reads regardless of the platform's capability.

## When to use
Use nanopore sequencing whenever the question involves structure: structural variants, repeat expansions, phasing, full-length transcript isoforms, or assembling a genome without a reference. It is the right tool for rapid clinical answers where time matters, including same-day whole-genome sequencing in critical care, and for any setting where a laboratory is not available, from field surveillance to space stations. Direct methylation detection makes it attractive for epigenetics without a separate library preparation. Use short reads instead when the answer comes from counting, when very large sample numbers dominate cost, or when the assay must call single-nucleotide variants at the highest confidence. Invest in high-molecular-weight extraction before blaming the platform for short reads, because sample preparation is usually the limiting factor.

## Key numbers
Read length limited by DNA fragment length rather than by chemistry, with tens of kilobases routine and megabase reads reported · raw per-read accuracy has improved across successive pore and basecaller generations and remains below short-read platforms · errors concentrate in homopolymers and specific sequence contexts · methylation detected directly from the current signal, with no bisulfite conversion · data available in real time as the run proceeds · devices range from a pocket-sized flow cell to high-throughput benchtop instruments · very low instrument capital at the small end.

## Failure modes
The dominant practical failure is sample preparation. Read length is set by fragment length, so ordinary extraction methods that shear DNA give short reads on a long-read instrument, and laboratories new to the platform routinely conclude the technology underperforms when the extraction is at fault. Homopolymer and context-specific errors are systematic, so they persist at high coverage and require basecallers and variant callers matched to the current chemistry. Pore blocking and membrane degradation reduce active pores over a run, so yield falls with time and with dirty samples. Because basecalling is a machine-learning step, results change when the basecaller is updated, which is a real reproducibility consideration: the same raw data reanalyzed later can give different calls, and clinical use requires pinning versions.

## Examples
Oxford Nanopore's device range from the pocket-sized MinION to high-throughput PromethION instruments; the telomere-to-telomere human genome assembly, which used ultra-long nanopore reads to resolve regions no short-read technology could; rapid whole-genome sequencing in neonatal intensive care, where turnaround measured in hours changes clinical management; Ebola and SARS-CoV-2 field surveillance sequencing; and use aboard the International Space Station.

## Economic profile
A genuinely different business model from the razor-and-blade instrument market: low capital cost, flow cells sold in a range from very cheap to production scale, and no large instrument purchase required to start. That has made sequencing accessible to laboratories and countries that could not justify a production sequencer, which is a real democratizing effect and a large part of the platform's strategic significance. Cost per gigabase remains above the highest-throughput short-read platforms, so it competes on capability and on turnaround rather than on bulk price. The company's independence in a market otherwise consolidated around a single supplier is itself commercially important.
