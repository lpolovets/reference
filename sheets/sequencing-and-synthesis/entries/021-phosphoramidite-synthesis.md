---
number: 21
name: Phosphoramidite Column Synthesis
part: 6
group: Oligo synthesis
role: write
length: [vshort]
apps: [build, targeted]
cost: med
maturity: default
---

## Description
Almost every synthetic DNA molecule in the world is made by phosphoramidite chemistry, a four-step cycle developed in the early 1980s and largely unchanged since. Synthesis runs on a solid support in a column, building the chain one base at a time from the three-prime end. Each cycle removes a protecting group from the growing chain, couples the next activated nucleotide, caps any chains that failed to react so they cannot participate later, and oxidizes the new linkage to its stable form. The cycle takes a few minutes and repeats once per base. Coupling efficiency per step is very high but not perfect, and because the yield of full-length product is the per-step efficiency raised to the power of the length, the arithmetic imposes a hard practical ceiling: at 99% per step, a 100-mer comes out at roughly 37% full length, and the rest is truncated material that has to be removed or tolerated.

## Strengths and weaknesses
The strengths are maturity, quality and availability. The chemistry is completely characterized, instruments are widely available, oligos arrive in days from many suppliers, and modifications such as labels, phosphorothioate backbones and unnatural bases are routine, which matters enormously because therapeutic oligonucleotides depend on them. Per-oligo quality is high and purification methods are established. The weaknesses are length, cost at scale and waste. Length is capped around 200 bases by yield arithmetic, and quality degrades well before that. The process is column-based, so each distinct sequence needs its own column and its own reagent volumes, which makes making a thousand different oligos a thousand times the cost of making one. It uses large volumes of acetonitrile and other organic solvents, generating hazardous waste that is a real environmental and cost consideration at industrial scale, and it is the main driver of interest in enzymatic alternatives.

## When to use
Use column phosphoramidite synthesis for anything needing high quality per sequence at modest sequence count: PCR primers, probes, guide RNAs, therapeutic oligonucleotides, and any oligo requiring chemical modification. It remains the only practical route to modified backbones and unnatural chemistry, which is why the entire antisense and siRNA drug industry runs on it. Use array-based synthesis instead when you need many different sequences and can tolerate lower per-oligo quality and tiny quantities, which is the case for gene assembly and library construction. Do not plan on sequences much beyond 150 to 200 bases from a single synthesis; longer constructs are assembled from shorter pieces, which is a separate step with its own error considerations.

## Key numbers
Coupling efficiency per cycle is very high, typically above 99%, and full-length yield is that raised to the power of the length · at 99% per step a 100-mer is roughly 37% full length; at 99.5% it is about 61% · practical length ceiling around 150–200 bases, with quality falling well before that · cycle time a few minutes per base · cost per base falls sharply with synthesis scale, and cost per oligo is dominated by fixed setup rather than by length at small scale · large solvent volumes per synthesis, which is the main environmental cost.

## Failure modes
Truncated sequences are the characteristic impurity, and capping is what makes them tolerable: without it, a chain that failed to couple in one cycle would resume in the next and produce a deletion mutant that is nearly the right length and nearly impossible to separate, which is far worse than a clean truncation. Depurination under the acidic deprotection step damages the growing chain and worsens with length. Sequences with strong secondary structure or long homopolymer runs couple poorly and give lower yields. For therapeutic oligonucleotides, the impurity profile is the regulatory issue rather than the yield: every truncation and modification-related species has to be characterized and controlled, and that analytical burden grows with length.

## Examples
Every PCR primer and probe in routine use; the approved antisense and siRNA drugs, all made by this chemistry at kilogram scale with modified backbones; guide RNAs for CRISPR experiments; the commercial oligo suppliers that deliver custom sequences in days; and the large-scale manufacturing plants built through the 2020s to meet demand from oligonucleotide therapeutics, which turned a laboratory reagent business into a pharmaceutical manufacturing one.

## Economic profile
Two very different businesses run on the same chemistry. Research oligos are a commodity with thin margins, fast turnaround and many suppliers, competing on price and delivery time. Therapeutic oligonucleotide manufacturing is a pharmaceutical business with high margins, long qualification cycles and few qualified suppliers, and demand from approved siRNA and antisense drugs has driven substantial capacity investment. Solvent consumption and hazardous waste are a genuine cost and regulatory pressure at that scale, which is the strongest practical argument for enzymatic synthesis and the reason serious money is going into replacing a chemistry that has worked well for forty years.

## Videos

- https://www.youtube.com/watch?v=kjSojZWnPQ4 — What is Oligonucleotide Synthesis? (METTLER TOLEDO AutoChem, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=GXOR09Q_VEA — Unit 3 Part 3 Synthesizing DNA by Solid Phase Synthesis (Kyoto-U OCW, 9 minutes, 1k+ views)
- https://www.youtube.com/watch?v=gQt1dxcTsDU — Chemical synthesis of oligonucleotides|Phosphoramidite Method| (Introvert Geek, 13 minutes, 50k+ views)

## Further reading

[Synthesis of DNA/RNA and their analogs via phosphoramidite and H-phosphonate chemistries (Molecules)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6270087/) · [Improvements in the phosphoramidite procedure for the synthesis of oligodeoxyribonucleotides (Nucleic Acids Research)](https://pmc.ncbi.nlm.nih.gov/articles/PMC325909/)
