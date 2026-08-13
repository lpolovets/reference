---
number: 1
name: SpCas9 Nuclease
part: 1
group: Cas nucleases
acts: seq
cargo: [small]
reach: [exvivo, liver, cns, eye]
maturity: default
clinical: approved
---

## Description
SpCas9 is the nuclease from Streptococcus pyogenes that made programmable genome editing ordinary. It is a protein that carries a short guide RNA, scans DNA for a matching 20-base sequence next to a three-letter motif called a PAM, and cuts both strands. The cell then repairs the break, and it is the repair, not the cut, that does the editing. Non-homologous end joining is fast and sloppy, inserting or deleting a few bases and usually destroying the gene, which is why knockouts are easy. Homology-directed repair can copy a supplied template and write in a chosen sequence, but it only operates in dividing cells and is far less efficient. The reason SpCas9 displaced everything before it is targeting: retargeting means ordering a new 20-base guide RNA, which costs almost nothing and takes days, against the months of protein engineering that zinc fingers and TALENs required.

## Strengths and weaknesses
The strengths are simplicity, efficiency, and an enormous body of shared knowledge. Editing efficiencies above 80% are routine in cultured cells and have been achieved in patients, guide design is well understood, and reagents are commodity items. It multiplexes: several guides in one cell edit several sites at once. The weaknesses start with size. At about 4.2 kilobases of coding sequence, SpCas9 plus a guide barely fits in AAV, and anything built on top of it, such as a base or prime editor, does not fit at all. Double-strand breaks are a blunt instrument: they cause large deletions, chromosomal translocations when several sites are cut, and p53 activation that selects for cells with impaired damage response. Off-target cutting at similar sequences is real and requires empirical measurement rather than computational prediction alone. The PAM requirement means roughly one in eight positions is targetable, which matters when a specific base has to be reached. And a substantial fraction of people carry pre-existing immunity to Cas9, since the source organism is a common human pathogen.

## When to use
Use SpCas9 when you want to disable a gene and the delivery route can carry it. It remains the default for knockouts, for ex vivo cell therapy manufacturing where electroporation of the protein and guide is straightforward, and for any screening application. Reach for something else in three cases. If the edit is a specific base change, a base editor or prime editor makes it far more cleanly, without a double-strand break. If the target must fit in a single AAV alongside a promoter and a guide, use a compact nuclease instead. And if you are cutting more than one or two sites in the same cell, weigh the translocation risk seriously, because it scales with the number of simultaneous breaks and is the safety issue most likely to appear in a clinical hold.

## Key numbers
Coding sequence about 4.2 kb, against roughly 4.7 kb of AAV capacity · guide RNA is 20 bases of targeting sequence · requires an NGG PAM, so about one position in eight is directly targetable · editing efficiency commonly 50–90% in cultured cells and above 80% reported clinically in ex vivo settings · protein delivered as a ribonucleoprotein clears within 24–72 hours, which limits off-target exposure · pre-existing anti-Cas9 antibodies are present in a substantial fraction of adults · one approved product uses it.

## Off-target and safety
The central safety work in any SpCas9 program. Computational prediction of similar sequences is a starting point and is not sufficient on its own, because it misses sites with bulges and mismatched spacing. Unbiased experimental methods are expected: GUIDE-seq and CIRCLE-seq find candidate sites, and those candidates are then sequenced deeply in the actual edited cell type, since chromatin state changes which sites are accessible. Beyond point off-targets, reviewers now ask about large deletions and rearrangements at the on-target site, which conventional short-read amplicon sequencing does not detect, and about translocations when multiple guides are used. Delivering the nuclease as a protein rather than as DNA shortens its exposure and measurably reduces off-target editing, which is why ribonucleoprotein delivery is standard ex vivo. High-fidelity engineered variants such as SpCas9-HF1 and HypaCas9 reduce off-target activity at some cost to on-target efficiency.

## Examples
Exagamglogene autotemcel (Casgevy), the first approved CRISPR therapy, which uses SpCas9 to disrupt a regulatory element and restore fetal hemoglobin in sickle cell disease and beta-thalassemia; the CAR-T programs that knock out the endogenous T-cell receptor and MHC to make allogeneic products; NTLA-2001 and its successors, which deliver SpCas9 messenger RNA in a lipid nanoparticle to knock out a liver gene; and essentially every CRISPR screen published since 2014.

## Economic profile
The reagents are commodities. Guide RNA synthesis costs tens of dollars, recombinant Cas9 protein is cheap, and no part of the editing step is a meaningful line item next to delivery, cell manufacturing, or clinical development. That is the important economic fact about this tool: it created enormous value and captures very little of it directly, and the intellectual property fights over the foundational patents have been more commercially consequential than the cost of the material. For a company, the durable position is in delivery, in a specific validated target, or in manufacturing, rather than in the nuclease itself, which is now close to a free input.
