---
number: 25
name: mRNA In Vitro Transcription
part: 6
group: Nucleic acids
products: [vaccine, nucleic]
scale: [bench, pilot, mid]
cogs: vhigh
maturity: proven
regulatory: routine
---

## Description
In vitro transcription makes mRNA in a stirred tank with no cells in it. A linearized plasmid template, T7 RNA polymerase, magnesium, the four nucleotides with N1-methylpseudouridine substituted for uridine, and a cap analog react for a few hours at 37 °C and yield roughly 2–5 g of RNA per liter. The template is then destroyed with DNase, and the RNA is purified: oligo-dT affinity for the poly(A) tail, a cellulose or reversed-phase step to strip double-stranded RNA byproduct, and TFF to set concentration and buffer. Capping happens either co-transcriptionally, where a cap analog such as CleanCap is incorporated as the first bases, or enzymatically afterwards with vaccinia capping enzyme, and the choice drives both reagent cost and capping efficiency. The volumetric economics are the best in this reference: at 3 g/L, a 10 L reaction makes about 30 g of RNA, which is a million doses at the 30 µg used in Comirnaty. What makes the modality strategically different is that a sequence change means ordering a new DNA template, not building a cell line, so the changeover is weeks instead of a year.

## Strengths and weaknesses
Speed and scale-per-liter are genuinely unmatched, and the process is the same regardless of what the RNA encodes, which is why a COVID variant update is a manufacturing formality rather than a development program. There are no cells, so there is no viral clearance burden, no host cell protein assay, and no glycosylation to control. The weakness is the reagent bill, which is most of the drug substance cost and is bought from a handful of suppliers: modified nucleotides, T7 polymerase, and above all the cap analog, which is frequently the single largest line item. The technical failure mode is double-stranded RNA byproduct. T7 polymerase makes some antisense and self-primed product on every run, dsRNA triggers innate immune sensing, and it is hard to remove without losing yield, so a purification step exists purely to fix a defect of the enzyme. Residual template DNA and capping efficiency are the other two attributes that routinely fail a lot.

## When to use
Choose mRNA when you need to change the sequence often, move fast, or make a product per patient, and when a transient burst of protein expression is enough. Pandemic vaccines, seasonal strain changes, and individualized neoantigen cancer vaccines all fit, because their value comes from turnaround rather than from cost per gram. Do not choose it when the therapeutic needs sustained protein levels, because the RNA and the protein both clear in days and redosing carries the delivery vehicle's toxicity every time. If the target is a secreted protein that a patient needs for years, a recombinant protein made in CHO is cheaper and better understood. And if your dose is large, look hard at self-amplifying mRNA, which encodes a replicase and gets to comparable expression at roughly 1–5 µg per dose, though the RNA is much longer and harder to make and the reactogenicity profile differs.

## Key numbers
Yield roughly 2–5 g of RNA per liter of reaction · reaction time hours rather than days · at 3 g/L, a 10 L reaction makes about 30 g, roughly a million 30 µg doses · vaccine doses 30 µg in Comirnaty and 100 µg in the original Spikevax primary series · self-amplifying mRNA dosed at roughly 1–5 µg · reagents, led by the cap analog, are most of drug substance cost.

## Regulatory notes
The cell-free process removes whole categories of filing work: no viral clearance validation, no host cell protein assay, no cell bank characterization beyond the E. coli bank behind the template. What replaces them are RNA-specific critical quality attributes that regulators now expect on every lot: capping efficiency, poly(A) tail length distribution, RNA integrity, double-stranded RNA content, and residual DNA template. The genuinely valuable precedent is the strain change. Regulators accepted COVID variant updates as post-approval changes supported by manufacturing and immunogenicity data rather than new efficacy trials, on the same logic used for seasonal influenza, and FDA's platform technology designation pathway under FDORA 2022 is written to extend that treatment to other mRNA products. That is the closest thing to a manufacturing platform any modality outside antibodies has, and it is worth more than any reagent saving.

## Examples
Comirnaty and Spikevax, the two products that proved the platform at multi-billion-dose scale. mResvia, Moderna's RSV vaccine approved in 2024, made on the same process. Kostaive (zapomeran), a self-amplifying mRNA COVID vaccine dosed at 5 µg. Moderna and Merck's individualized neoantigen therapy, where each patient's sequence is different and the manufacturing turnaround is the product. On the supply side: TriLink's CleanCap analogs (Maravai), New England Biolabs and Thermo Fisher for enzymes and nucleotides, Aldevron for template plasmid, and BioNTech's BioNTainer modular units, which package the whole drug substance process into shipping containers.

## Economic profile
Capital cost is low and reagent cost is high, which is the reverse of every protein process in this reference. A drug substance suite is a few stainless or single-use reactors, a chromatography skid, and a TFF system, so a plant costs a fraction of a mammalian facility and can be built in a year. An independent analysis of COVID vaccine manufacturing put net cost at roughly $0.60–1.00 per dose at hundred-million-dose volumes, and essentially all of that is materials. Supplier concentration is the strategic fact: modified nucleotides, capping reagents, and GMP enzymes come from very few vendors, and cap analog pricing is set by patent position rather than by cost to make. For anyone building here, the cost curve bends through reagent supply and dose size, not through process engineering. Self-amplifying mRNA cutting the dose tenfold does more for cost of goods than any plausible improvement in titer.

## Videos

- https://www.youtube.com/watch?v=3tI2QdXZxxU — Custom mRNA Production via Gene Synthesis and In Vitro Transcription (Azenta Life Sciences, 2 minutes, 500k+ views)
- https://www.youtube.com/watch?v=CIhpfLq2RIc — How IN VITRO TRANSCRIPTION works (Henrik's Lab, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=cUFn2YGNVh0 — In Vitro mRNA Capping (TriLink BioTechnologies, 9 minutes, 5k+ views)

## Further reading

[Development of mRNA Manufacturing for Vaccines and Therapeutics (Translational Research via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8641981/) · [Evaluation of the Quality, Safety and Efficacy of Messenger RNA Vaccines: Regulatory Considerations, TRS 1039 Annex 3 (WHO)](https://www.who.int/publications/m/item/annex-3-mRNA-vaccines-trs-no-1039)
