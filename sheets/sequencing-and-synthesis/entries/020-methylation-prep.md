---
number: 20
name: Methylation Library Preparation
part: 5
group: Accuracy and extraction
role: prep
length: [vshort, short]
apps: [epi]
cost: med
maturity: proven
---

## Description
DNA methylation is a chemical mark on cytosine that a sequencer cannot see, because a methylated cytosine and an ordinary one are read as the same base. Methylation library preparation makes the mark visible by converting the DNA chemically before sequencing. Bisulfite treatment, the long-standing method, deaminates unmethylated cytosines to uracil, which reads as thymine, while methylated cytosines are protected and still read as cytosine; comparing the result to the reference reveals which cytosines were marked. The treatment is harsh: it fragments DNA severely and destroys a large fraction of the sample. Enzymatic conversion achieves the same read-out through a two-enzyme reaction that protects methylated cytosines and then deaminates the rest, without the acid and heat, which preserves far more intact DNA and gives more even coverage. Long-read platforms sidestep the whole problem by detecting methylation directly from the raw signal.

## Strengths and weaknesses
The strength of conversion-based methods is that they give single-base resolution methylation across the genome on ordinary short-read instruments, with a large body of established protocols and reference data. Enzymatic conversion in particular gives good coverage uniformity from low input. The weaknesses are damage and complexity. Bisulfite conversion degrades most of the input DNA, so it needs more material and yields libraries with poor uniformity, and the converted genome has drastically reduced sequence complexity because most cytosines have become thymines, which makes alignment harder and less accurate. Incomplete conversion is indistinguishable from methylation and inflates apparent methylation levels, so conversion controls are essential. The converted data cannot be aligned with ordinary tools. Long-read direct detection avoids all of this but costs more per base and has its own accuracy considerations.

## When to use
Use enzymatic conversion in preference to bisulfite for new work: it is gentler, needs less input, and gives better coverage uniformity, and the reason bisulfite persists is inertia and comparability with existing datasets rather than performance. Use bisulfite when comparability with a large existing bisulfite dataset is required. Use long-read direct detection when you also want structural information or phasing, or when you want methylation without any conversion chemistry at all, which is increasingly the right answer for whole-genome methylation. Use targeted methylation panels rather than whole-genome methods when the regions of interest are known, which is the case for most clinical applications and cuts cost dramatically. Always include conversion controls, because incomplete conversion silently inflates every methylation estimate in the run.

## Key numbers
Bisulfite treatment degrades a large fraction of input DNA and requires correspondingly more material · enzymatic conversion works from low input with better coverage uniformity · conversion reduces the effective sequence complexity of the genome, since most cytosines become thymines, which complicates alignment · conversion efficiency must be measured with spike-in controls, since incomplete conversion reads as methylation · long-read platforms detect methylation directly with no conversion · targeted methylation panels cost a fraction of whole-genome methylation sequencing.

## Failure modes
Incomplete conversion is the classic and most consequential failure, because it produces a systematic overestimate of methylation that looks entirely plausible and is invisible without spike-in controls. Over-conversion, where methylated cytosines are converted too, produces the opposite error. Bisulfite-induced fragmentation biases the library toward regions that survive, which is not random with respect to base composition, so coverage is uneven in a way that correlates with the biology being measured. Alignment of converted reads is harder and produces more mapping errors, particularly in repetitive regions. And PCR after conversion amplifies the strand bias introduced by the chemistry, so the two strands of a locus can give different answers, which is why strand-specific analysis matters.

## Examples
Whole-genome bisulfite sequencing, the long-standing reference method for methylome mapping; enzymatic methyl sequencing kits, which have taken substantial share for new work; methylation arrays, which remain the cheapest way to survey hundreds of thousands of defined sites and underpin most epigenetic clock work; targeted methylation panels used in multi-cancer early detection tests, which is the largest clinical application; and direct methylation calling on long-read platforms, now routine.

## Economic profile
A specialized preparation market that has been substantially reshaped by the clinical arrival of methylation-based cancer detection, which turned methylation from a research measurement into the basis of large commercial diagnostic programs. That has pulled investment into targeted panels and away from whole-genome methods, since a clinical test needs a few hundred informative regions rather than the whole methylome. The technical trend is toward avoiding conversion entirely, either through enzymatic methods that are gentler or through long-read platforms that read the mark directly, and bisulfite's long dominance is ending for reasons of data quality rather than cost.

## Further reading

[Comprehensive comparison of enzymatic and bisulfite DNA methylation analysis in clinically relevant samples (Clinical Epigenetics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12495756/) · [Comparison of enzymatic and bisulfite conversion of circulating cell-free tumor DNA for DNA methylation analyses (Clinical Epigenetics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12135323/)
