---
number: 3
name: High-Density Bead Sequencing
part: 1
group: Short-read platforms
role: read
length: [vshort]
apps: [wgs, rna, epi]
cost: vlow
maturity: emerging
---

## Description
This approach attacks sequencing cost from the physical side rather than the chemical one. Instead of clusters on a patterned flow cell, DNA is amplified onto beads which are then packed at very high density onto a circular substrate that spins under the optics, so imaging is continuous rather than a step-and-repeat scan of discrete tiles. The chemistry also departs from conventional sequencing by synthesis: rather than adding one reversibly blocked base per cycle, mostly natural nucleotides are used with only a fraction labeled, and the sequence is inferred from signal intensity across flows of single bases. Removing the reversible terminator removes a slow and expensive chemical step. The result is very high throughput at low reagent cost, aimed squarely at applications where the requirement is an enormous number of bases rather than the highest possible per-base accuracy.

## Strengths and weaknesses
The strength is cost per gigabase at scale, which has been the platform's entire proposition and has been genuinely disruptive to pricing expectations for large sequencing programs. Continuous imaging of a spinning substrate uses the optics far more efficiently than tile-by-tile scanning. The weakness is the error profile. Inferring sequence from flow intensities rather than from discrete terminated additions makes homopolymer runs difficult, because the signal from four identical bases in a row has to be distinguished from three or five by intensity alone, and that is exactly the error mode that flow-based chemistries have always struggled with. Insertion and deletion errors in homopolymers are consequently more common than on terminator-based platforms, which matters for clinical variant calling and less for counting applications. Read lengths remain short, so none of the structural limitations are addressed.

## When to use
Use this platform where the question is counting and the volume is large: RNA quantification, single-cell sequencing, methylation surveys, and very large population whole-genome programs where cost per sample dominates. It suits high-throughput production settings with steady volume rather than laboratories running occasional diverse projects. Avoid it where homopolymer accuracy matters, which includes clinical variant calling in genes with homopolymer runs and any application where insertions and deletions are the variants of interest. As always with short reads, structural variation, phasing and repeat expansions require a long-read platform regardless of which short-read instrument is chosen.

## Key numbers
Read lengths in the short-read range, comparable to other platforms in this class · very high throughput per run, aimed at the highest-volume production applications · reagent cost per base is low because mostly natural nucleotides replace reversible terminators · homopolymer regions carry a higher insertion and deletion error rate than terminator chemistries · adoption has concentrated in large genome centers and high-volume service providers rather than in clinical laboratories.

## Failure modes
The signature failure is homopolymer miscalling, and it is systematic rather than random, which makes it worse than an equivalent rate of random error: the same run of identical bases will be miscalled the same way every time, so extra coverage does not fix it. Pipelines have to account for this explicitly, and variant callers tuned for substitution-dominated error profiles will misbehave. The short-read limitations all apply: ambiguous alignment in repeats, invisible structural variation, no phasing. Because the platform is optimized for scale, small runs are economically inefficient, and a laboratory with variable or low volume will not see the cost advantage that justifies the platform.

## Examples
The Ultima Genomics platform, which introduced this architecture with an explicit goal of driving whole-genome cost sharply below prevailing prices; adoption by large genome centers and by companies running very high volumes of single-cell and methylation sequencing; and use in population-scale research programs where the total base requirement is the binding constraint.

## Economic profile
A pure cost-per-base play, and it has moved the market's expectations even where it has not won the sale. The strategy is to serve the highest-volume buyers, whose economics are dominated by consumable cost and who have the pipeline sophistication to handle a different error profile, and to leave clinical and low-volume segments to incumbents. That is a coherent position and it targets the segment where switching costs are lowest relative to the saving. The broader effect on the industry is the same as any credible competitor entering a long-stable market: prices move for everyone, and buyers benefit whether or not they switch.
