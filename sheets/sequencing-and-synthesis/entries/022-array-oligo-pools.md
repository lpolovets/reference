---
number: 22
name: Array-Based Oligo Pools
part: 6
group: Oligo synthesis
role: write
length: [vshort]
apps: [build, targeted]
cost: vlow
maturity: proven
---

## Description
Array synthesis runs the same phosphoramidite chemistry as a column, but on a chip with tens of thousands to millions of independently addressed features, each building a different sequence in parallel. Which feature receives which base at each step is controlled either by light, using photolabile protecting groups and a micromirror array, or by electrochemistry, generating deprotecting acid at chosen electrodes. Reagent volumes per sequence collapse from microliters to picoliters, and the cost per base falls by three to four orders of magnitude against column synthesis. The output is a pool: all the sequences mixed together in tiny total quantity, at unequal abundances, with a higher error rate than column material. That output form defines the applications, since a pool is exactly what you want for building genes from fragments or for making a library, and useless when you need one pure sequence.

## Strengths and weaknesses
The strengths are cost per sequence and parallelism. Making 100,000 different oligos on a chip costs a small fraction of making one on a column, which is what made synthetic biology, large-scale library construction and DNA data storage economically conceivable. It is the enabling technology for gene synthesis, since a gene is assembled from array-derived fragments. The weaknesses are quantity, purity and uniformity. Each sequence is present in femtomole quantities, so anything needing material has to amplify first, which introduces bias and errors. Error rates per base are higher than column synthesis, so downstream assembly needs error correction or sequence verification. Abundance across the pool is uneven, often by orders of magnitude, so some designed sequences are effectively absent. Modified chemistry is limited compared with column synthesis, and separating one sequence from a pool requires amplification with specific primers, which is a design constraint on the whole pool.

## When to use
Use array pools whenever you need many different sequences and small amounts of each: gene assembly fragments, mutagenesis and variant libraries, CRISPR guide libraries, hybridization capture probes, and DNA data storage. It is the right tool any time the number of distinct sequences is the cost driver. Design the pool with orthogonal primer binding sites so subsets can be amplified separately, because retrieving one gene's worth of fragments from a pool of 50,000 is a design problem that has to be solved before synthesis, not after. Use column synthesis when you need one sequence at usable quantity, high purity, or with chemical modification. Expect to sequence-verify anything assembled from array material, since the error rate makes verification a required step rather than a precaution.

## Key numbers
Tens of thousands to millions of distinct sequences per chip · cost per base three to four orders of magnitude below column synthesis · quantity per sequence in the femtomole range, requiring amplification before use · error rates per base higher than column synthesis, typically by several-fold · abundance across a pool varies by orders of magnitude between sequences · practical length per oligo of roughly 150–300 bases, similar to column but with more error · limited support for modified backbones and labels.

## Failure modes
Uneven representation is the failure that most often derails a library experiment: sequences that came off the chip at low abundance are underrepresented or absent, and a screen then reports nothing about genes that were never really present, which looks like a negative result. Measuring the actual pool composition by sequencing before use is the fix and is frequently skipped. Amplification of the pool introduces further bias and can amplify a subset preferentially, particularly where sequences differ in base composition or secondary structure. Cross-hybridization between similar sequences during retrieval pulls out the wrong fragments. And the higher error rate means assembled constructs carry mutations at a rate that requires clonal verification, so treating array material as if it were column-grade is a reliable way to build a gene with a silent error in it.

## Examples
Commercial gene synthesis, essentially all of which assembles genes from array-derived fragments; CRISPR guide libraries for genome-wide screens; deep mutational scanning libraries covering every amino acid substitution in a protein; hybridization capture probe panels; large-scale DNA data storage demonstrations, which depend entirely on array cost per base; and the oligo pool products sold by several suppliers as a standard catalog item.

## Economic profile
The cost structure that made synthetic biology possible. Reducing the price of a distinct sequence by four orders of magnitude changed which experiments are conceivable, and the entire field of high-throughput library-based biology rests on it. Commercially, array synthesis is mostly sold indirectly, embedded in gene synthesis and library products rather than as chips, and the suppliers with proprietary array platforms have a genuine cost advantage in those downstream markets. The main competitive pressure now comes from enzymatic synthesis, which promises comparable parallelism without organic solvents and with potentially longer and cleaner products, and which is the technology most likely to reset this market.

## Videos

- https://www.youtube.com/watch?v=UbH9xPVlmeQ — SDC2021: From DNA Synthesis on Chips to DNA Data Storage (SNIAVideo, 16 minutes, 1k+ views)
- https://www.youtube.com/watch?v=YXkK-QuBU7s — Writing DNA - Emily Leproust, CEO of Twist Bioscience (Hello Tomorrow, 19 minutes, 10k+ views)
- https://www.youtube.com/watch?v=piVOIxDfcS8 — Creation of a Pooled Library (Broad Institute, 3 minutes, 5k+ views)

## Further reading

[DNA synthesis technologies to close the gene writing gap (Nature Reviews Chemistry)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9869848/) · [Oligo Pools as an Affordable Source of Synthetic DNA for Cost-Effective Library Construction in Protein- and Metabolic Pathway Engineering (ChemBioChem)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9300125/)
