---
number: 4
name: DNA Nanoball Sequencing
part: 1
group: Short-read platforms
role: read
length: [vshort]
apps: [wgs, targeted, rna, epi]
cost: vlow
maturity: proven
---

## Description
DNA nanoball sequencing replaces the amplification step that most short-read platforms use with a different one that does not compound errors. A DNA fragment is circularized, then copied round and round by rolling circle amplification to produce a long single strand containing hundreds of tandem copies of the original, which collapses into a compact ball a few hundred nanometers across. Because every copy is made from the original circle rather than from a previous copy, errors do not accumulate the way they do in PCR, where a mistake early in amplification is propagated to everything downstream. The nanoballs are loaded onto a patterned array, one per spot, and sequenced by a combinatorial probe-anchor chemistry. The architecture gives high signal density with low reagent consumption, and it avoids the duplicate reads and exponential error propagation of PCR-based cluster generation.

## Strengths and weaknesses
The strengths are error containment, low reagent use and cost. Linear rather than exponential amplification means the error profile is cleaner in a specific way that matters for detecting low-frequency variants, since a PCR error made in an early cycle looks like a real low-frequency variant and a rolling circle error does not propagate. Duplicate rates are very low because each nanoball comes from one original molecule. Cost per gigabase is competitive with any platform, and the highest-throughput instruments in this line are among the largest-output sequencers available. The weaknesses are ecosystem and geopolitics rather than chemistry. Read lengths are short with all the usual consequences. Tooling and clinical validation are less developed outside China than for the incumbent. Most consequentially, the platform's availability in the US market has been affected by patent litigation and by legislation aimed at Chinese biotechnology companies, which is a supply risk unrelated to performance.

## When to use
Use nanoball sequencing where short reads are appropriate and cost matters, and particularly for low-frequency variant detection where the linear amplification advantage is real, such as liquid biopsy and somatic variant calling at low allele fraction. It is widely used outside the US and is a genuine alternative to the market leader on both cost and specifications. The decisive consideration for a US-based laboratory is usually supply and regulatory risk rather than technical merit: patent disputes and legislative attention have made availability uncertain in ways that a laboratory building a clinical service cannot ignore. Where that risk is acceptable or does not apply, the technical case is strong.

## Key numbers
Read lengths in the short-read range, typically 100–200 bases · rolling circle amplification is linear, so errors do not propagate exponentially as in PCR · duplicate read rates are very low because each nanoball derives from a single original molecule · the highest-throughput instruments in this family are among the largest-output sequencers available · widely deployed in China and internationally, with restricted availability in the US market · cost per gigabase competitive with any platform.

## Failure modes
All the short-read limitations apply: repeats align ambiguously, structural variants are invisible, phasing is impossible over any distance. Platform-specific issues are mostly practical. Error profiles differ from the incumbent's, so variant callers and quality thresholds need retuning, and a laboratory migrating an assay has real revalidation work. Reference and benchmarking datasets are more available for the incumbent. The most significant practical failure mode has nothing to do with the chemistry: a clinical service built on an instrument whose market availability depends on ongoing litigation and legislation carries a continuity risk that should be assessed explicitly rather than discovered.

## Examples
The MGI and Complete Genomics instrument lines, which use this chemistry across a range from benchtop to very high throughput; large national sequencing programs outside the US built on the platform; and the extensive patent litigation with the market incumbent, which has shaped where the instruments can be sold and is as important to understanding the platform's position as any specification.

## Economic profile
Aggressively priced and technically credible, and its commercial trajectory has been shaped as much by law and policy as by performance. The platform has taken substantial share in markets where it can compete freely and has been constrained in the largest market by litigation and legislative scrutiny of Chinese biotechnology. For buyers, the effect of its existence has been to put sustained pressure on prices everywhere. For anyone planning a sequencing-dependent business, the lesson generalizes beyond this platform: supplier concentration in sequencing is a real strategic exposure, and the alternatives to the incumbent each carry their own non-technical risk.
