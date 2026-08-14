---
number: 25
name: Sequence Verification and Error Correction
part: 6
group: Genes and verification
role: prep
length: [short, mid]
apps: [build, targeted]
cost: low
maturity: default
---

## Description
Synthetic DNA arrives with errors, and verification is how you find out which molecules are correct. Two distinct jobs sit under this heading. Error correction reduces the error rate of a synthesized population before cloning, usually by melting and reannealing the DNA so that strands carrying different errors pair with each other, creating mismatches that a mismatch-binding enzyme then cuts or binds, allowing the damaged molecules to be removed. That improves the population but does not guarantee any individual molecule. Clonal verification does the rest: individual molecules are isolated, usually by transformation into bacteria so that one colony equals one molecule, and each candidate is sequenced until a perfect one is found. Verification used to mean Sanger sequencing with primer walks, and increasingly means sequencing whole plasmids in one pass on a nanopore or short-read platform, which is cheaper and catches rearrangements that primer walking misses.

## Strengths and weaknesses
The strength is that these steps convert an unreliable synthetic product into a defined reagent, which is what makes gene synthesis usable at all. Enzymatic error correction can reduce error rates several-fold for very little cost, which materially raises the fraction of clones that are perfect and therefore reduces how many have to be screened. Whole-plasmid sequencing has made verification cheap enough to do routinely rather than selectively. The weaknesses are cost in time and the limits of what each method sees. Screening clones is a numbers game that scales badly with construct length, since the probability of a perfect clone falls with every base. Error correction reduces but does not eliminate errors and works poorly on some error types, particularly insertions and deletions in homopolymers. Sanger primer walking, still common, misses large rearrangements entirely because it only reads where the primers point.

## When to use
Verify everything that will be used more than once or that anything depends on, which in practice means every construct. Use whole-plasmid sequencing rather than Sanger primer walks: it costs about the same, reads the whole molecule including the vector backbone, and catches the rearrangements and insertions that walking cannot see. Use enzymatic error correction when assembling long constructs from synthetic fragments, because raising the fraction of perfect clones from a few percent to a few tens of percent changes the screening burden from painful to routine. For anything above a few kilobases, expect to screen multiple clones and plan the timeline accordingly. And verify after any step that could change the sequence, including passaging, since constructs with a fitness cost drift in culture.

## Key numbers
Probability of a perfect clone falls with construct length, since it is the per-base accuracy raised to the power of the length · enzymatic error correction typically reduces error rates several-fold in one round · whole-plasmid sequencing reads the entire construct in one pass, against Sanger's 700–900 bases per primer · verification cost per construct is now low enough to be routine · error correction works poorly on insertions and deletions in homopolymer runs · clones needing screening rise sharply above a few kilobases.

## Failure modes
The most consequential failure is verifying only part of the construct. Sanger primer walks read where the primers point and report clean sequence there while a large deletion, an inversion, or an insertion sits somewhere unread, which is why whole-plasmid methods have displaced walking. Toxic constructs select for mutants during cloning, so the clones that grow well are frequently the broken ones, and a laboratory that screens only the healthiest colonies finds them enriched for the mutations that relieved the toxicity. Repeated sequences cause misassembly that short-read verification cannot resolve, because reads do not span the repeat. And constructs that were verified once and then propagated for months are not still verified, since selection acts continuously on anything with a fitness cost.

## Examples
Commercial gene synthesis providers, who run error correction and clonal verification as standard and quote a guaranteed sequence; nanopore-based whole-plasmid sequencing services that return a full construct sequence overnight for a few dollars, which have largely replaced Sanger primer walking; enzymatic mismatch cleavage kits used in laboratory-scale gene assembly; and the routine practice of resequencing working stocks of important constructs, which catches drift that would otherwise be discovered as an unreproducible experiment.

## Economic profile
Verification is a small cost that prevents large ones, and its economics improved dramatically when whole-plasmid sequencing arrived: reading an entire construct for a few dollars removed the reason to verify selectively. The service market for plasmid sequencing has grown quickly for exactly that reason and has taken share from Sanger providers. For gene synthesis companies, error correction and verification are where much of the real process know-how sits, since anyone can order oligos but delivering a guaranteed perfect multi-kilobase construct at a competitive price depends on how efficiently the errors are removed.

## Videos

- https://www.youtube.com/watch?v=RJmBxwEoFHw — Whole plasmid sequencing with nanopore technology (ONT) (the bumbling biochemist, 7 minutes, under 1k views)
- https://www.youtube.com/watch?v=HxZcjX5WByc — Sequencing your plasmids (emphasis on Sanger sequencing) (the bumbling biochemist, 21 minutes, 1k+ views)

## Further reading

[Error correction in gene synthesis technology (Trends in Biotechnology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3933390/) · [Sequence verification of synthetic DNA by assembly of sequencing reads (Nucleic Acids Research)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3592409/)
