---
number: 12
name: ADAR-Recruiting RNA Editing
part: 3
group: RNA editing
acts: rna
cargo: [tiny]
reach: [liver, cns, research]
maturity: emerging
clinical: trials
---

## Description
Human cells already contain an enzyme that edits RNA. ADAR converts adenosine to inosine in double-stranded RNA, and because the cell's machinery reads inosine as guanosine, the effect is an A-to-G change in the transcript. ADAR-recruiting therapies do not deliver an editing enzyme at all. They deliver only a short guide oligonucleotide designed to pair with the target transcript at the site to be edited, creating the double-stranded structure that the cell's own ADAR recognizes and acts on. That is the defining advantage: the drug is a chemically synthesized oligonucleotide of the same class as an antisense drug, with no protein to deliver, no vector, no bacterial sequence, and no immunogenicity from a foreign enzyme. It inherits the whole oligonucleotide toolkit, including GalNAc conjugation for liver delivery and intrathecal administration for the central nervous system, both of which are clinically established.

## Strengths and weaknesses
The strengths are delivery and safety. Because the payload is a modified oligonucleotide rather than a protein, everything the oligonucleotide field has learned about chemistry, delivery and manufacturing transfers directly, which is a very large head start. There is no permanent genome change, so an adverse effect resolves when dosing stops, and no immune response against a bacterial editor. The weaknesses are the chemistry available and durability. Only A-to-G is on offer, the same conversion an adenine base editor makes, and only in RNA. Editing efficiency depends on ADAR levels in the target cell, which vary between tissues and are low in some, and on local sequence context, so many sites edit poorly. The effect is transient by construction, so chronic dosing is required, which is a disadvantage against a one-time genome edit and an advantage against it, depending on how confident you are in the target. Bystander editing of nearby adenosines occurs.

## When to use
Use ADAR recruitment when an A-to-G change in a transcript is therapeutic, when the tissue is reachable by oligonucleotide, and when you want reversibility. Restoring a protein disabled by a G-to-A mutation is the model case, and it competes directly with adenine base editing on the same underlying chemistry. The choice between them is essentially permanence against reversibility: base editing does it once and forever, ADAR recruitment does it repeatedly and can be stopped. Prefer ADAR recruitment when the target is new, when the safety picture is unsettled, or when the population is not severely ill, since those are exactly the situations where an irreversible intervention is hardest to justify. Prefer base editing when lifelong dosing is the burden you are trying to remove. Check ADAR expression in the target cell type before designing anything, since low expression makes the whole approach ineffective.

## Key numbers
The drug is a guide oligonucleotide only, typically under 100 bases, with no protein delivered · makes A-to-G changes in RNA and nothing else · editing efficiency depends on endogenous ADAR levels and sequence context, and varies widely between tissues · effect is transient, requiring repeat dosing, with intervals depending on transcript and protein turnover · uses the established oligonucleotide delivery routes, GalNAc for liver and intrathecal for central nervous system · several programs in clinical trials, none approved.

## Off-target and safety
Structurally safer than any DNA editor, because nothing permanent happens and no foreign protein is introduced. The concerns are the ones oligonucleotide drugs already have, plus editing specificity. Bystander editing of adenosines near the target site occurs and needs characterization. Guide-dependent off-target editing at transcripts with partial complementarity is measurable by RNA sequencing and is the main specificity assay. There is also a theoretical concern about perturbing the cell's normal ADAR activity by recruiting the enzyme away from its natural substrates, which is worth measuring transcriptome-wide. The oligonucleotide class effects on platelets, liver enzymes and complement apply as they do for antisense drugs, and are well understood.

## Examples
Clinical programs in alpha-1 antitrypsin deficiency, where a single G-to-A mutation causes the disease and the liver is directly reachable with a GalNAc conjugate, which is the furthest advanced application; central nervous system programs delivered intrathecally; and research tools including the LEAPER and RESTORE systems, which established that endogenous ADAR could be recruited with a guide alone.

## Economic profile
Attractive because it borrows a mature manufacturing and delivery base rather than building one. Synthesis is solid-phase oligonucleotide chemistry at a few hundred to a couple of thousand dollars per gram, contract capacity is available, and the regulatory path resembles an antisense drug rather than a gene therapy, which is faster and cheaper. The commercial question is the competition with base editing for the same mutations. A one-time treatment is a stronger patient proposition and a harder payer proposition, and a repeat-dosed oligonucleotide is a more conventional pharmaceutical business with recurring revenue. Both models are viable, and which wins per indication will probably depend on disease severity more than on technology.

## Videos

- https://www.youtube.com/watch?v=Hac_yg_KnX4 — ProQR's Axiomer technology explained - How does ADAR work? (ProQR Therapeutics, 5 minutes, 1k+ views)
- https://www.youtube.com/watch?v=7q_Nu55sGPs — RNA editing: adenosine to inosine (Shomu's Biology, 11 minutes, 10k+ views)

## Further reading

[Novel Engineered Programmable Systems for ADAR-Mediated RNA Editing (Molecular Therapy: Nucleic Acids)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7015837/) · [Emerging clinical applications of ADAR based RNA editing (Stem Cells Translational Medicine)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12105611/)
