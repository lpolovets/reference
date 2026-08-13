---
number: 8
name: Transversion and C-to-G Editors
part: 2
group: Base editors
acts: seq
cargo: [mid]
reach: [research, exvivo]
maturity: early
clinical: none
---

## Description
The two established base editors between them make only two of the twelve possible base changes: A to G and C to T. Both are transitions, meaning a purine swapped for a purine or a pyrimidine for a pyrimidine. The other eight changes are transversions, which swap a purine for a pyrimidine, and they were unreachable by base editing until recently. C-to-G base editors are the furthest developed. They use the same cytidine deaminase to create a uracil, then deliberately recruit the repair pathway that a cytosine editor works to block: uracil DNA glycosylase removes the base, leaving a gap, and the cell's repair machinery fills it, sometimes with a guanine. Directing that repair toward a predictable outcome is the engineering problem, and efficiency and product purity both remain well below the transition editors. A to Y editors, converting adenine to cytosine or thymine, and glycosylase-based editors for other conversions are at an earlier stage.

## Strengths and weaknesses
The strength is coverage. A meaningful fraction of pathogenic mutations require a transversion to correct, and no base editor could make them, which left prime editing or homology-directed repair as the only options, both of which are less efficient in non-dividing cells. Filling that gap while keeping base editing's clean product profile, with no double-strand break and no template, would be genuinely useful. The weaknesses are that it does not yet work well enough. Efficiencies are lower than for transition editors, and product purity is the real problem: a C-to-G editor produces a mixture of C-to-G, C-to-T and insertions or deletions, so the intended edit may be a minority of the outcomes. That mixture is a serious regulatory problem for a therapeutic, where every product species has to be characterized and justified. The tools also inherit every constraint of the transition editors: 5 kilobases or more of cargo, PAM-limited targeting, and a narrow editing window.

## When to use
Use a transversion editor when the required change is a transversion, the target is in non-dividing cells where homology-directed repair does not work, and prime editing efficiency at that site is inadequate. That is a narrow set of conditions and it is the honest scope today. For most programs the practical answer is to check whether prime editing handles the change first, since it makes any substitution with better product purity, and to treat transversion editors as an option when prime editing efficiency is the limiting factor. In research they are useful now for modeling disease variants that transition editors cannot install. Anyone building a therapeutic program on one should treat product purity, not efficiency, as the gating question, because that is what a regulator will focus on.

## Key numbers
Base editors cover 2 of the 12 possible base conversions; transversions account for the other 8 · roughly a quarter to a third of pathogenic point mutations require a transversion to correct · C-to-G editing efficiency is generally well below the 50–80% typical of transition editors · product purity is the main limitation, with the intended edit often a minority of outcomes · cargo size similar to other base editors, above 5 kb · no clinical use to date.

## Off-target and safety
Inherits the full off-target picture of cytosine base editors, since the same deaminase does the chemistry: guide-dependent DNA editing, guide-independent DNA editing from the APOBEC-family enzyme, and transcriptome-wide RNA editing. On top of that comes a product purity problem that the transition editors largely avoid. Because the mechanism deliberately recruits base excision repair, which creates an abasic site and then a gap, insertions and deletions occur at meaningful rates. For a therapeutic application every one of those species has to be identified and its functional consequence explained, which is a far heavier characterization burden than for a transition editor where byproducts are under one percent.

## Examples
The C-to-G base editors developed independently by several groups, which established that directing base excision repair toward a chosen outcome is possible; adenine transversion editors reported more recently and still largely at proof-of-concept; and the use of these tools in research to install specific disease variants in cell and animal models, which is currently their most reliable application.

## Economic profile
Too early for meaningful economics. The strategic question is whether transversion base editing establishes itself as a distinct platform or is overtaken by prime editing, which already makes every substitution and is improving quickly on efficiency. The argument for the base editing approach is that it does not require a reverse transcriptase or a long engineered guide, so the machinery is smaller and the mechanism simpler, which could matter for delivery. The argument against is that product purity is the hard problem and prime editing is structurally better on exactly that dimension. For an investor, this is a technology to watch rather than to fund as a standalone platform.

## Further reading

[Development of deaminase-free T-to-S base editor and C-to-G base editor by engineered human uracil DNA glycosylase (Nature Communications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11162499/)
