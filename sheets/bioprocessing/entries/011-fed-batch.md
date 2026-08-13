---
number: 11
name: Fed-Batch Culture
part: 2
group: Culture modes
products: [protein, vaccine, indus]
scale: [pilot, mid, large, bulk]
cogs: high
maturity: default
regulatory: routine
---

## Description
Fed-batch is the default mammalian culture mode and the baseline every other mode gets measured against. You seed the reactor, let the cells grow, then feed concentrated nutrient solutions on a schedule or against a glucose setpoint without removing anything, and harvest once when viability drops. A CHO run takes 12–18 days and reaches 3–8 g/L at peak densities of 10–30 million cells per milliliter. Feeding rather than batching exists because the amino acids, glucose, vitamins, and trace elements the culture needs would be toxic if they were all present at the start, so they get metered in as the culture consumes them. Day-to-day control is mostly glucose and lactate: keep glucose from running out and from spiking, and the culture stays out of the lactate-producing metabolic state that kills late-run productivity. Everything about the mode is simple, which is the source of both its advantages and its limits.

## Strengths and weaknesses
The strength is simplicity, and it is worth more than it sounds. One harvest gives one unambiguous batch definition, the scale-down model is something every process development group knows how to build and defend, and the regulatory path holds no surprises. The weakness is that most of the reactor's volume-time goes into growing cells rather than collecting product: volumetric productivity averages roughly 0.3–0.5 g/L/day over a run against the 1–3 g/L/day a perfusion process delivers. The product also sits in a 37 °C reactor for up to two weeks accumulating deamidation, oxidation, aggregation, and clipping by proteases released from dying cells. The failure mode is a late crash. Viability falls faster than the model predicted, host cell protein and DNA spike as cells lyse, and a harvest that would have been clean on day 14 becomes a high-impurity feed that blinds the depth filters on day 16. Choosing the harvest day is a judgment call on every batch, and getting it wrong costs downstream yield rather than upstream titer.

## When to use
Default to fed-batch for a stable protein at commercial scale. It is right when the molecule survives two weeks at 37 °C, when demand is met by a manageable number of batches, and when you want the least regulatory friction available. Switch to perfusion when the product is unstable and needs residence time cut from days to hours, when you need much more mass out of a fixed footprint, or when the facility cannot install a large enough reactor. An intensified seed train, meaning perfusion in the N-1 stage to raise the inoculum density, is the middle path most large manufacturers have already taken, because it shortens the growth phase of the production fed-batch without changing its batch definition. And do not chase titer much past 5 g/L expecting proportional savings: above roughly that point the remaining cost sits downstream in consumables, fill-finish, and QC, none of which improve when cells make more.

## Key numbers
Runs of 12–18 days · 3–8 g/L in CHO, occasionally above 10 · peak density 10–30 million cells/mL · volumetric productivity roughly 0.3–0.5 g/L/day against 1–3 g/L/day for perfusion · a 2,000 L run at 5 g/L makes about 10 kg in the harvest and roughly 7 kg of drug substance after a 70% downstream recovery · upstream is 35–50% of a monoclonal antibody batch's cost.

## Regulatory notes
Routine GMP, and this is the mode reviewers have seen most often, so the control strategy is conventional: a defined feed schedule, in-process controls on glucose, lactate, viable cell density, viability and osmolality, and a harvest criterion tied to viability rather than to the calendar alone. The quiet requirement is the scale-down model, usually 2–15 L. Everything you claim about a 2,000 L reactor gets demonstrated in a small one, including viral clearance spiking studies and most deviation investigations, so the model itself has to be shown to be representative, and that qualification is a real piece of work. Feed composition and schedule become registered process parameters, which means improving them after approval requires a variation and, if any quality attribute moves, a comparability package running 6–12 months. That is the main reason commercial fed-batch processes stay frozen at the settings that were fastest to the clinic.

## Examples
Essentially every commercial monoclonal antibody is made in fed-batch: Humira, Keytruda, Herceptin, Dupixent. Platform media and feed systems in common use include Thermo Fisher's Gibco Efficient-Pro, Merck's Cellvento and EX-CELL Advanced CHO fed-batch system, and Sartorius Cellca, each sold as a matched basal medium and feed pair so a new molecule can enter an established process. Intensified fed-batch with N-1 perfusion is now standard practice at Lonza, Samsung Biologics, and WuXi Biologics, and it is the change that has actually moved upstream productivity in the last decade.

## Economic profile
Medium and feeds plus reactor time and the facility overhead attached to both make up 35–50% of a monoclonal antibody batch's cost, and that is the pool fed-batch improvements draw from. The problem is that improvements there have stopped paying for themselves. Doubling titer from 5 to 10 g/L halves upstream cost per gram but leaves downstream consumables, aseptic fill, and QC untouched, so the total moves far less than the headline suggests, which is why antibody drug substance has sat at roughly $50–150/g for a decade. Media and feed supply is concentrated among Thermo Fisher, Merck, Sartorius, and FUJIFILM Irvine, and because feed composition is a registered parameter, a supplier reformulation is a regulatory event rather than a purchasing one. If you are looking for cost reduction in a fed-batch process, the honest places to look are batch count against plant capacity, downstream step count, and QC, not another gram per liter.

## Videos

- https://www.youtube.com/watch?v=mUDXupn2Dhk — Types of Bioprocesses ( Batch , Fed Batch and Continuous processes) (Animated biology With arpan, 9 minutes, 100k+ views)
- https://www.youtube.com/watch?v=3VhJknqdm9E — Batch, fed batch and continuous fermentation biotechnology | batch culture vs continuous culture (Shomu's Biology, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=vNo8-ndMpFw — Insights on Fed-batch vs Perfusion Processing and Upstream vs Downstream Process Improvements (PatheonChannel, 5 minutes, 5k+ views)

## Further reading

[Progress in fed-batch culture for recombinant protein production in CHO cells (Applied Microbiology and Biotechnology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9843118/) · [Metabolic Control in Mammalian Fed-Batch Cell Cultures for Reduced Lactic Acid Accumulation and Improved Process Robustness (Bioengineering)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5597163/)
