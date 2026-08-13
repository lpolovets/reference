---
number: 14
name: Epigenetic Editing
part: 3
group: Expression control
acts: expr
cargo: [mid]
reach: [liver, research]
maturity: early
clinical: trials
---

## Description
Epigenetic editing changes how much protein a gene makes by rewriting the chemical marks on and around it, rather than by changing the DNA sequence. A dead Cas9 carries an enzyme that writes or erases those marks: DNA methyltransferases to add methyl groups to a promoter and silence it, demethylases to remove them, or histone-modifying enzymes to open or close the surrounding chromatin. The critical difference from CRISPR interference is durability. Marks written this way are copied when the cell divides, so the change persists after the editing machinery is gone. That makes the treatment hit-and-run: deliver transiently, write the mark, and the machinery degrades within days while the silencing lasts for months, years, or in principle for the life of the cell. The result is a durable therapeutic effect with no permanent change to the genome, which is a combination nothing else on this sheet offers.

## Strengths and weaknesses
The strength is that it occupies genuinely new ground between transient and permanent. You get durability comparable to a genome edit without cutting DNA, without a double-strand break, and without an irreversible sequence change, so the worst-case failure mode is much better: silencing can in principle be reversed by editing the marks back, which no genome edit permits. Transient delivery means the bacterial protein is present for days rather than permanently, which largely removes the immunogenicity problem. The weaknesses are durability that is not yet proven at human timescales and mechanism that is not fully controlled. Methylation marks can be lost over time, and how long silencing persists varies by locus, cell type and whether the tissue divides. Some loci resist silencing entirely. The machinery is large, roughly 5 kilobases or more, so delivery has the same constraints as base editing. Long-term human data does not exist yet, which is the central uncertainty.

## When to use
Use epigenetic editing when you want to turn a gene down durably and permanence is a liability rather than an asset: a target where you are confident enough to want years of effect but not confident enough to accept an irreversible edit, or a population healthy enough that a permanent change is a hard risk-benefit argument. Lipid nanoparticle delivery to the liver is the practical route today, and the clinical programs are there. Compare it directly against in vivo base editing for the same target, since both give durable knockdown from one dose; the trade is proven permanence against unproven durability with a possible undo. Check whether the specific locus silences durably in the relevant cell type before building a program, because this varies far more than efficiency data alone suggests.

## Key numbers
Machinery is roughly 5 kb or more, requiring non-viral delivery or split vectors · silencing of 80–95% of expression is achievable at responsive loci · the mark is copied through cell division, so the effect persists after the machinery is gone, which is the defining property · machinery itself clears within days when delivered as messenger RNA · durability demonstrated for months to over a year in animal models, with human durability data still accumulating · first clinical dosing in the mid-2020s · no approved product.

## Off-target and safety
Better than any DNA-cutting approach on the sharpest risks and less well characterized overall. There is no double-strand break, so none of the deletion, translocation or p53 consequences apply, and the DNA sequence is unchanged, which means an off-target event is a mis-set epigenetic mark rather than a permanent mutation. Off-target methylation across the genome is the assay that matters, measured by whole-genome bisulfite sequencing, and it is a different and less standardized workstream than CRISPR off-target analysis. The specific unknown is whether silencing spreads beyond the intended region over time, and whether marks at off-target sites are similarly durable. Transient delivery caps exposure, which is the main safety lever the approach provides.

## Examples
Clinical programs silencing PCSK9 in the liver to lower cholesterol durably from a single dose, which is the same target that in vivo base editing is pursuing and makes for a direct comparison of the two philosophies; hepatitis B programs aiming to silence integrated viral DNA; preclinical work in pain, where durably reducing a sodium channel is attractive precisely because it can be reversed; and the extensive research literature using dead Cas9 fused to methyltransferases and demethylases to establish causal roles for specific epigenetic marks.

## Economic profile
The delivery route makes it a lipid nanoparticle business, with the low manufacturing cost and off-the-shelf availability that implies, which is what makes large chronic indications plausible. The strategic argument is strong: a durable effect without an irreversible edit is easier to justify to regulators and to patients who are not severely ill, which is exactly the population that one-time cardiovascular and metabolic therapies need to reach. The unresolved risk is durability, and it is the kind of risk that only resolves with years of human follow-up, so the category will be capital-intensive before it is proven. For an investor, the discriminating question is how long silencing has held in the longest-followed animals and patients, not how deep it goes at week four.
