---
number: 17
name: Transposon Integration
part: 4
group: Programmable insertion
acts: seq
cargo: [vast]
reach: [exvivo]
maturity: emerging
clinical: trials
---

## Description
A transposon system integrates a gene into the genome using two components: a DNA cargo flanked by short recognition sequences, and a transposase enzyme that cuts the cargo out and pastes it into chromosomal DNA. Sleeping Beauty and piggyBac are the two used clinically, both reconstructed or adapted from transposons found in other organisms. Unlike everything else in this class, the insertion site is not programmable: the transposase inserts wherever it finds a suitable sequence motif, which is at many thousands of positions genome-wide. What it offers instead is capacity and cost. piggyBac carries cargo well over 100 kilobases, far beyond any viral vector, and both components can be delivered as plasmid or messenger RNA by electroporation, which removes viral vector from the manufacturing process entirely. That last point is the reason the systems are used: viral vector is typically 20–40% of cell therapy manufacturing cost and a recurring supply bottleneck.

## Strengths and weaknesses
The strengths are cargo capacity, cost, and supply chain independence. Removing viral vector removes the most expensive input and the longest lead time in cell therapy manufacturing, and it removes replication-competent virus testing from release. Cargo capacity allows multi-gene constructs that no virus can hold. Electroporation equipment is cheap and the process suits automation and decentralized manufacturing, which is why several point-of-care CAR-T programs use transposons. The weaknesses are integration site distribution and a specific safety history. Insertion is semi-random, and piggyBac in particular has been associated with malignant transformation in CAR-T recipients in at least one clinical program, which is the same failure mode that moved the field away from gamma-retroviral vectors two decades ago. Transposase persistence raises the possibility of continued remobilization after treatment. Transfer efficiency is generally lower than viral transduction and electroporation costs cell viability.

## When to use
Use a transposon when manufacturing cost or vector supply is the binding constraint, or when the construct is too large for any virus. It is most compelling for decentralized and academic manufacturing, where the alternative is often no product at all rather than a cheaper one, and several groups outside the US have delivered CAR-T at a small fraction of commercial prices this way. Sleeping Beauty has the better safety record of the two and is the more conservative choice. Given the malignancy signal, treat integration site analysis and long-term follow-up as central program activities rather than routine ones. If the program is a first-in-class construct where clinical risk is already high, adding an unproven integration method compounds two novel risks, and an established lentiviral process is usually the better sequencing.

## Key numbers
piggyBac cargo capacity well above 100 kb; Sleeping Beauty comfortable to roughly 10 kb, with efficiency falling as cargo grows · against roughly 8 kb for lentivirus and 4.7 kb for AAV · viral vector is commonly 20–40% of cell therapy manufacturing cost, which is what this removes · electroporation reduces cell viability by roughly 10–30% · integration occurs at many thousands of genomic positions rather than one · malignant transformation has been reported in a piggyBac-based CAR-T trial · no approved product using transposon integration.

## Off-target and safety
The central issue is insertional mutagenesis, and it is not theoretical here. Semi-random integration means every treated cell has inserts at different places, and a clone whose insert lands near a growth-promoting gene can expand. The piggyBac lymphoma cases make this the question a regulator will ask first. Sleeping Beauty's integration profile is generally regarded as more neutral, favoring TA dinucleotides distributed across the genome rather than concentrating near transcription start sites. Required work includes integration site analysis on the product, clonal tracking in patients, and long-term malignancy surveillance measured in years. Transposase persistence is a distinct concern, since an enzyme still present after treatment can move the insert again, and limiting exposure by delivering it as messenger RNA rather than plasmid is the standard mitigation.

## Examples
Sleeping Beauty CAR-T programs, including academic and point-of-care efforts that have produced clinical-grade product at a fraction of commercial cost; piggyBac-based CAR-T from several companies, where cases of malignant transformation prompted reassessment; and widespread research use for stable cell line generation, where the cargo capacity and simplicity are attractive and the safety concerns do not apply.

## Economic profile
This is a cost-structure play. The biology delivered is the same as a lentiviral product and the argument is entirely manufacturing: removing the most expensive input from cell therapy could widen access substantially, and in settings where commercial CAR-T is simply unaffordable it has already done so. The commercial question is whether the saving survives the extra regulatory scrutiny and longer follow-up that the malignancy signal created, and whether a company can build a competitive position on a manufacturing method rather than on a product. The most convincing near-term value is in decentralized manufacturing outside high-income markets, which is a real public health opportunity and an awkward venture proposition.
