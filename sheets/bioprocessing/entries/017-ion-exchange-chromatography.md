---
number: 17
name: Ion-Exchange Chromatography
part: 4
group: Chromatography
products: [protein, vaccine, nucleic, vector]
scale: [bench, pilot, mid, large, bulk]
cogs: low
maturity: default
regulatory: routine
---

## Description
Ion exchange separates molecules by net surface charge. The resin carries fixed charges, and whether something binds depends on the buffer pH relative to the molecule's isoelectric point and on how much salt is competing for the same sites. Two operating modes matter, and choosing between them is the actual decision. In cation-exchange bind-and-elute, you run below the product's pI so the product sticks, then elute on a salt or pH gradient; done well this separates monomer from aggregate and strips residual host cell protein and leached Protein A. In anion-exchange flow-through, you run above the product's pI so the product walks straight through the column while DNA, endotoxin, acidic host cell protein, and virus bind and stay behind. Flow-through costs almost no yield and supplies 3–5 logs of viral clearance, conventionally counted as about 4, which is why nearly every mammalian process has one.

## Strengths and weaknesses
Ion exchange is the cheapest and most versatile chromatography available. Resins cost a few hundred to a few thousand dollars per litre, roughly an order of magnitude under Protein A, they hold 50–150 g/L, and they survive hundreds of cycles of caustic cleaning. Bind-and-elute recovery is usually 85–95%; flow-through is close to quantitative. The weakness is the mechanism itself. Charge is a single dimension, so if the impurity you need to remove has nearly the same net charge as the product, the gradient co-elutes them and no amount of screening fixes it. That is common with deamidated charge variants and with aggregates that are not measurably more charged than monomer. The second weakness is buffer. Gradients and washes consume tens of column volumes per cycle, so buffer preparation vessels, hold tanks, and water for injection capacity size a downstream suite as much as the columns do, and a process that looks small on a flow sheet can be impossible to fit in an existing building.

## When to use
Put an anion-exchange flow-through step in essentially every mammalian process. It is cheap, it loses almost nothing, and it supplies logs of viral clearance you are required to demonstrate anyway. Add cation-exchange bind-and-elute as the aggregate-removal polish, since the aggregate is usually more positively charged than monomer at working pH and does separate. If cation exchange still cannot resolve the impurity after you have screened pH and conductivity properly, stop optimizing and change mechanism to hydrophobic interaction or mixed-mode rather than trying another ion exchanger. Use anion-exchange membrane adsorbers instead of packed columns for flow-through when the suite is single-use, the batch is small, or the load is a large volume with a light impurity burden, since a membrane needs no packing, no storage, and no column cleaning validation.

## Key numbers
Resin at a few hundred to a few thousand dollars per litre, roughly an order of magnitude under Protein A · binding capacity 50–150 g/L · bind-and-elute step recovery usually 85–95% · anion-exchange flow-through at 3–5 logs of viral clearance for almost no yield loss · gradients and washes measured in tens of column volumes per cycle · membrane adsorbers reported at 3.6–5.4-fold enrichment of full AAV capsids in flow-through polishing.

## Regulatory notes
Routine GMP for the purification claim, heavier for the safety claim. An anion-exchange flow-through step is almost always filed as a viral clearance step, which means a scaled-down spiking study and validated ranges on pH, conductivity, and load ratio that you cannot drift outside during manufacture without a deviation. Resin lifetime studies are required but cheaper and less contentious than Protein A's, since the resin costs less and fouls less. For AAV, anion exchange carries an extra weight: the full-versus-empty capsid separation is what determines how much of the dose is active, so the step ties directly into a potency attribute and its control strategy is scrutinized accordingly. Membrane adsorbers simplify the cleaning story because they are discarded, but they still need extractables and leachables data.

## Examples
Cytiva Capto Q, Q Sepharose Fast Flow, and Capto S ImpAct; Thermo Fisher POROS XS and POROS HQ; Tosoh Toyopearl GigaCap; Bio-Rad Nuvia. On the membrane side, Sartorius Sartobind Q, Pall Mustang Q, and Merck Natrix Q, all of which are used both for viral clearance flow-through in antibody processes and for enriching full AAV capsids in gene therapy processes. Ion exchange also does most of the purification work in plasmid DNA, mRNA, and vaccine antigen processes, where no affinity ligand exists.

## Economic profile
Per gram of product this is the cheapest chromatography you can run. Resin amortizes over hundreds of cycles at a tenth of Protein A's price, so the dominant cost is buffer: salts, water for injection, the tanks to hold them, and the operator time to make them. That is why buffer concentrates and inline dilution skids have become standard in new plants, and why a downstream suite's real capacity constraint is often buffer hold volume rather than column diameter. Membrane adsorbers cost more per litre of feed processed than a packed column but remove packing, cleaning validation, storage, and column qualification, so they win in multi-product and clinical suites and lose in dedicated high-volume ones. The rough rule is that membranes pay when batches are few and changeovers are frequent.

## Videos

- https://www.youtube.com/watch?v=i4U4ndf2ayg — Ion Exchange Chromatography Animation (Biology with Animations, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=rPsJo0jHJ7g — Principles of ion exchange chromatography explained (Cytiva, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=2M4nEFcqIWg — Anion Exchange Chromatography (GFP Purification part 2 of 6) (BioNetwork, 2 minutes, 10k+ views)

## Further reading

[Ion Exchange Chromatography: Principles and Methods (GE Healthcare)](https://research.fredhutch.org/content/dam/research/hahn/methods/Ion_Exchange_Chromatography_Handbook.pdf) · [Purification of Monoclonal Antibodies Using Chromatographic Methods: Increasing Purity and Recovery (Advanced Pharmaceutical Bulletin)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12235372/)
