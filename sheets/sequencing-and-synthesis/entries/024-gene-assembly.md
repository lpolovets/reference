---
number: 24
name: Gene Assembly
part: 6
group: Genes and verification
role: write
length: [short, mid]
apps: [build]
cost: med
maturity: default
---

## Description
No synthesis chemistry makes a gene directly, because the length ceiling is a few hundred bases and a gene is one to several kilobases. Genes are therefore built by joining short synthetic fragments. Several methods do this and they differ mainly in whether the joins are designed or arbitrary. Polymerase cycling assembly anneals overlapping oligos and extends them into a full-length product in one reaction. Gibson assembly joins fragments with matching end sequences using three enzymes in a single isothermal step, and because the overlaps are designed into the fragments, the joins leave no scar and the method handles several fragments at once. Golden Gate assembly uses restriction enzymes that cut outside their recognition site, so the cut leaves a chosen four-base overhang and many fragments can be joined in a defined order in one reaction, which suits standardized part libraries. Yeast assembly uses homologous recombination in vivo and handles the largest constructs.

## Strengths and weaknesses
The strengths are that these methods work reliably at the kilobase scale and are cheap in reagent terms. Gibson and Golden Gate are seamless, so no unwanted sequence is left at the junctions, which matters when the construct has to encode exactly what was designed. Golden Gate's defined overhangs make ordered multi-fragment assembly routine and are the basis of standardized part collections. Yeast recombination assembles constructs of tens to hundreds of kilobases that no in vitro method handles. The weaknesses are error accumulation and sequence-dependent failure. Every base came from synthesis with an error rate, and assembly does not correct errors, so a longer construct is more likely to carry one, which makes verification mandatory rather than optional. Repetitive sequence causes misassembly, since overlaps become ambiguous. Constructs toxic to the host will not clone. Success rates vary enough with sequence that gene synthesis providers quote turnaround ranges rather than fixed times.

## When to use
Use Gibson assembly for joining a few fragments seamlessly when the sequences are arbitrary and you control the ends, which covers most cloning. Use Golden Gate when building from a standardized part library or assembling many fragments in a defined order, which is the synthetic biology workhorse. Use polymerase cycling assembly to build a gene directly from an oligo pool, which is what commercial gene synthesis does at the first stage. Use yeast recombination for anything above about 20 kilobases. In every case, plan verification into the workflow, and design out repeats and problematic sequence before ordering, since a construct that will not assemble is usually a design problem rather than a protocol problem and is much cheaper to fix on the screen.

## Key numbers
Synthesis fragments are a few hundred bases; genes are one to several kilobases, which is why assembly exists · Gibson handles several fragments in one isothermal reaction with seamless joins · Golden Gate uses four-base designed overhangs, supporting ordered assembly of many fragments at once · yeast recombination assembles tens to hundreds of kilobases · error rate of the final construct is inherited from synthesis and accumulates with length · repetitive sequence is the main cause of misassembly · commercial gene synthesis turnaround is typically days to a few weeks depending on difficulty.

## Failure modes
Repeats are the reliable killer: any sequence that appears twice makes overlaps ambiguous, and the assembly produces deletions, inversions or nothing at all. This is why long repetitive constructs, including many natural regulatory regions and anything with tandem repeats, are quoted at higher prices or refused by synthesis providers. Secondary structure prevents annealing and extension. High or low base composition regions fail disproportionately. Constructs encoding something toxic to the cloning host are selected against, so the colonies that grow are the ones carrying mutations that broke the toxic element, which is a particularly deceptive failure because it produces plasmid that sequences cleanly at the vector and wrongly at the insert. Carrying synthesis errors through unverified is the other common outcome.

## Examples
Commercial gene synthesis, which uses polymerase cycling assembly from array-derived oligos followed by cloning and verification; the MoClo and Golden Braid standardized Golden Gate part systems used across plant and microbial synthetic biology; the synthetic yeast genome project, which assembled whole designer chromosomes by yeast recombination; and the routine molecular biology use of Gibson assembly, which largely displaced restriction cloning for arbitrary constructs.

## Economic profile
Gene synthesis has become a competitive commodity service priced per base, with surcharges for repetitive or structured sequence. Prices have fallen far enough that ordering a designed gene is normally cheaper and faster than cloning one from a template, which has quietly changed how molecular biology is done. Suppliers compete on price, turnaround and how much difficult sequence they will accept, and that last point is where the genuine technical differentiation lies, since easy genes are easy for everyone.
