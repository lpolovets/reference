---
number: 14
name: Cell Disruption and Inclusion-Body Refolding
part: 3
group: Primary recovery
products: [protein, nucleic]
scale: [pilot, mid, large]
cogs: high
maturity: proven
regulatory: routine
---

## Description
When the product is inside the cell, you have to break the cell open. At scale that means high-pressure homogenization, where a cell slurry is forced through a valve at 500–1,500 bar and shredded by shear and cavitation. Below about 500 bar you need several passes to get good release; between 1,000 and 1,500 bar most of the protein comes out on the first pass and further passes mainly micronize the debris. Bead milling is the alternative for tough-walled organisms like yeast. Either way the step inverts the purity of the stream: everything the cell contained, including all its protein, DNA, and endotoxin, is now in solution with the product. For E. coli inclusion bodies there is a second half that is harder than the first. The dense misfolded aggregates are washed, solubilized in 6 M guanidine or 8 M urea, and then refolded by diluting the denaturant out slowly at 0.1–1 g/L, because folding and aggregation compete and aggregation wins at high concentration. Refold recovery is 15–40%.

## Strengths and weaknesses
Inclusion bodies are attractive for a reason: expression reaches 2–10 g/L, the aggregates are dense enough to pellet away from debris, and the product is protected from host proteases while it sits there. The problem is the dilution. Refolding 5 kg of protein at 0.5 g/L requires 10 m³ of tank, plus the buffer to fill it and the concentration step to get back out, and that single operation is frequently the largest cost line in a microbial process. The failure mode is that refold yield does not scale. In a 1 L bench refold the dilution is effectively instantaneous; in a 10,000 L tank, product entering at the addition point sees a local high concentration for a few seconds before it mixes, and whatever aggregates there is gone for good. A bench process at 40% recovery routinely lands at 20% at scale, and fixing it means re-engineering the addition geometry rather than the chemistry. Homogenization has a smaller version of the same trap: extra passes make the debris finer and harder to centrifuge away.

## When to use
Choose an inclusion-body process when the protein is small, has few or no disulfide bonds or refolds reliably, is not glycosylated, and you need many kilograms at low cost. That describes insulin, growth hormone, filgrastim, and most of the interferons, which is why all of them are made this way. Avoid it when the molecule has complex disulfide connectivity, when refold screening at bench scale is already giving under 20%, or when the product is a multi-domain protein that has never been refolded. In those cases pay for a secreting host instead: Pichia secretes folded, disulfide-bonded protein into a nearly protein-free medium and skips both operations entirely, and periplasmic E. coli expression at least gets the folding done in the cell even though the titer is far lower. The rule of thumb is that if refolding recovers under about 20%, a secreting host at a fifth of the titer is usually still cheaper per gram.

## Key numbers
Homogenization at 500–1,500 bar, with most protein released on the first pass above 1,000 bar · inclusion body titer 2–10 g/L · solubilization in 6 M guanidine or 8 M urea · refolding by dilution at 0.1–1 g/L · refold recovery 15–40% · a 5 kg refold at 0.5 g/L needing 10 m³ of tank volume.

## Regulatory notes
Routine GMP, but this is where the impurity control strategy gets set. Host cell protein and DNA hit their process maximum immediately after lysis, so the host cell protein immunoassay used for release has to be raised against the actual production lysate, not a generic E. coli reagent, and the coverage of that assay is something reviewers ask about. Endotoxin is a release specification and the whole downstream burden of clearing it starts here. Refolding also creates product-related variants (misfolds, scrambled disulfides, covalent dimers) that count as quality attributes in their own right, so you need methods that resolve them and data showing the train removes them. Urea deserves specific attention: it decomposes to cyanate, which carbamylates lysine residues and creates a charge variant, so urea grade, temperature, and hold time end up as controlled process parameters with a residual test behind them.

## Examples
Recombinant human insulin from Lilly and Novo Nordisk, somatropin, filgrastim (Neupogen), and interferon beta-1b (Betaseron) are all E. coli inclusion-body processes. Homogenizers come from GEA (Ariete and the Niro Soavi line), SPX APV, Microfluidics, and Constant Systems; bead mills from Netzsch and WAB. Several CDMOs including Cytovance Biologics market refolding specifically as a capability, which is a reasonable signal of how much of the difficulty sits in that one step.

## Economic profile
The cost here is tank volume, buffer, and denaturant rather than equipment. Guanidine and urea are bought by the tonne per campaign, the water for injection to fill a 10 m³ refold tank is not free, and the vessel itself occupies floor space that produces nothing else while the refold holds for hours. Add the concentration step needed to get from 0.5 g/L back to a loadable feed and this operation frequently accounts for more of a microbial process's cost of goods than the fermentation that preceded it. That inversion is the whole reason yeast and fungal secretion systems keep taking share for products that do not need mammalian glycosylation. It is also why refold yield improvement is one of the few remaining process-development levers in mature microbial processes: five percentage points of refold recovery is worth more than a doubling of fermentation titer.

## Videos

- https://www.youtube.com/watch?v=FGbNbqE3Oyw — Cell Disruption using High Pressure Homogenization (GreenCoLab, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=DFe-AyB0vc8 — Cell Disruption (Microfluidics, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=olTL9mIrTB8 — Refolding of Inclusion Body Proteins from E Coli (Creative BioMart, 13 minutes, 10k+ views)

## Further reading

[Refolding techniques for recovering biologically active recombinant proteins from inclusion bodies (Biomolecules)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4030991/) · [State-of-the-art and novel approaches to mild solubilization of inclusion bodies (Frontiers in Bioengineering and Biotechnology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10399460/)
