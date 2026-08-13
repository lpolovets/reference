---
number: 26
name: Benchtop Synthesis and Biosecurity Screening
part: 6
group: Oligo synthesis
role: write
length: [vshort]
apps: [build]
cost: med
maturity: emerging
---

## Description
Benchtop synthesizers put DNA writing inside the laboratory rather than at a supplier. A researcher enters a sequence in the afternoon and has oligos or a short gene the next morning, without shipping, customs or a supplier queue. The instruments use either miniaturized phosphoramidite chemistry with cartridge-contained reagents or enzymatic synthesis, which is better suited to a benchtop because it avoids the solvent handling and hazardous waste that make chemical synthesis a facilities question. The reason this matters beyond convenience is biosecurity. Commercial synthesis providers screen orders against sequences of concern and screen customers, a practice that has been voluntary in most jurisdictions and is increasingly the subject of policy. An instrument that synthesizes DNA on a bench moves that control point from a supplier who screens to a device that may not, which is the central governance question the technology raises.

## Strengths and weaknesses
The strengths are turnaround and control. Same-day or overnight availability changes the pace of design-build-test cycles substantially, and for laboratories in places where importing reagents is slow or unreliable it can be the difference between doing the work and not. Sequences never leave the institution, which matters for confidential constructs. The weaknesses are cost per base and quality. At the volumes a single laboratory uses, an instrument plus consumables rarely beats a commercial supplier on price, because suppliers run at enormous scale and compete hard. Product quality and length are generally below what a specialist supplier delivers. The biosecurity concern is real rather than hypothetical: distributed synthesis capability without screening removes the chokepoint that current governance relies on, and screening implemented in device firmware can in principle be circumvented in ways a supplier's process cannot.

## When to use
Use a benchtop synthesizer when turnaround time genuinely limits your work and the volume justifies the instrument, which is most often true in high-iteration protein engineering and synthetic biology groups running many design cycles. It is also worth considering where supply chains are slow or where sequence confidentiality is a requirement. Do not buy one to save money at typical laboratory volumes, because the arithmetic usually favors ordering. Whatever the setting, treat screening as part of the purchase decision: check what the instrument screens, whether that screening can be disabled, and what the institution's own obligations are, because the responsibility that a supplier used to carry moves to the operator.

## Key numbers
Overnight or same-day turnaround against days to weeks for ordering · cost per base at single-laboratory volumes is generally above commercial suppliers, which run at far greater scale · product length and purity typically below specialist supplier output · enzymatic instruments avoid organic solvent handling, which is what makes a benchtop deployment practical · commercial synthesis screening has been largely voluntary, coordinated through industry consortia · policy attention to synthesis screening has increased substantially in the 2020s.

## Failure modes
On the technical side, benchtop output is usually less pure and shorter than supplier material, so constructs built from it need more verification, and a laboratory that treats instrument output as equivalent to ordered oligos will find the difference during assembly rather than before. Consumable cartridges tie the instrument to one supplier at that supplier's pricing, which is the same razor-and-blade exposure as any instrument purchase. On the governance side, the failure mode is institutional rather than technical: assuming screening happens because it used to. If an instrument does not screen, or screening is optional, the obligation sits with the operator and the institution, and discovering that after the fact is a much worse position than deciding it in advance.

## Examples
DNA Script's enzymatic benchtop synthesizers, the most established commercial instruments; Telesis Bio and similar systems that combine synthesis with assembly to produce constructs rather than oligos; the International Gene Synthesis Consortium's voluntary screening framework, which covers a large share of commercial synthesis; and the successive policy efforts in the US and elsewhere to make screening of both sequences and customers a condition of federal funding.

## Economic profile
A small instrument market with an outsized policy footprint. The commercial case is turnaround rather than cost, which limits the addressable market to groups whose iteration speed is genuinely constrained, and that is a smaller set than the marketing implies. The more consequential dynamic is regulatory: as synthesis screening moves from voluntary industry practice toward a funding or legal requirement, the compliance burden falls differently on centralized suppliers, who already screen at scale, and on distributed instruments, which have to implement it per device. How that resolves will shape whether benchtop synthesis becomes common laboratory equipment or stays a specialist purchase.

## Further reading

[Enhancing Gene Synthesis Security: An Updated Framework for Synthetic Nucleic Acid Screening and the Responsible Use of Synthetic Biological Materials (Applied Biosafety)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11319848/) · [A system capable of verifiably and privately screening global DNA synthesis (National Science Review)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13348243/)
