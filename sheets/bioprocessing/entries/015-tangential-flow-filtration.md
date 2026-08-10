---
number: 15
name: Tangential Flow Filtration
part: 3
group: Primary recovery
products: [protein, vaccine, nucleic, vector]
scale: [bench, pilot, mid, large]
cogs: vlow
maturity: default
regulatory: routine
---

## Description
Tangential flow filtration pumps the process stream across the face of a membrane instead of into it. Permeate passes through, retentate recirculates, and the sweeping flow keeps the polarized gel layer thin enough that the membrane does not blind the way a dead-end filter would. The same hardware does two jobs. Ultrafiltration concentrates, by removing water and small solutes. Diafiltration exchanges buffer, by adding fresh buffer at the rate permeate leaves, which washes out the old buffer exponentially: each diavolume removes about 63% of what remains, so seven diavolumes take a component down to roughly 0.1%. Membrane cutoffs run 10–50 kDa, picked by a rule of thumb of three to five times below the product's molecular weight, so 10 kDa for a 50 kDa protein and 30 kDa for a 150 kDa antibody. TFF appears three or four times in a normal process: concentrating harvest before capture, exchanging buffer between chromatography steps, and the final UF/DF that sets drug substance concentration and formulation buffer.

## Strengths and weaknesses
It is cheap, it scales by adding cassettes rather than redesigning anything, it involves no chemistry, and step recovery is usually 90–97%. Its limit is that flux falls as concentration rises, because the gel layer at the membrane thickens. That is tolerable up to moderate concentrations and becomes the process at high ones. The failure mode shows up in high-concentration subcutaneous formulations at 150–250 mg/mL: viscosity climbs steeply, flux collapses, and the hold-up volume in the recirculation loop means the bulk you finally recover is more dilute than the loop was, so real processes overshoot to around 300 g/L and then dilute back to a 150–175 g/L target. The other weakness is that TFF cannot purify. It separates by size, and a 150 kDa antibody and a 90 kDa host cell protein do not resolve on a 30 kDa membrane no matter how many diavolumes you run. Shear in the recirculation pump also damages fragile products, which is why viral vectors and VLPs are usually run on hollow fiber at low cross-flow rather than flat sheet.

## When to use
Use TFF whenever you need to change buffer or change concentration, which is most transitions in a process. Use flat-sheet cassettes for proteins, where flux and footprint matter, and hollow fiber for shear-sensitive products like vectors, VLPs, and cells, where the open channel is gentler. Reach for single-pass TFF when you want inline concentration between two other operations without a recirculation tank, for example concentrating a Protein A eluate before a polishing column. Do not use TFF where you actually need a purification step. If the impurity you are trying to remove is within about a factor of three of the product's size, buy a column.

## Key numbers
Membrane cutoffs 10–50 kDa, roughly three to five times below the product's molecular weight · flux in the tens of liters per square meter per hour · concentration factors of 10–30x · 6–10 diavolumes, with seven taking a buffer component to about 0.1% · step recovery usually 90–97% · high-concentration processes overshooting to about 300 g/L and diluting back to a 150–175 g/L target.

## Regulatory notes
Routine GMP with a small but specific validation load. If cassettes are reused across a campaign, you owe a cleaning validation and a lifetime study showing flux and retention hold over the claimed number of cycles; buying single-use cassettes trades that paperwork for consumable spend. Every TFF operation needs a pre-use and post-use integrity test, and the final UF/DF needs a demonstrated diafiltration endpoint, usually a residual assay for whatever the old buffer contained. Extractables and leachables data on the membrane and flow path is expected, and matters more on the final UF/DF because nothing downstream removes what leaches in there. One thing TFF is not is a viral clearance step. An ultrafiltration membrane is not validated for virus retention, and clearance credit only comes from the dedicated 20 nm filter.

## Examples
Merck Millipore Pellicon 2 and 3 cassettes and the Pellicon single-pass modules, Cytiva Kvick flat sheet and hollow fiber, Sartorius Sartocon with Hydrosart membranes, Repligen KrosFlo hollow fiber, and Pall Centramate. Essentially every licensed biologic passes through several TFF operations, and the final UF/DF is the step that defines the drug substance in the specification.

## Economic profile
TFF is one of the cheapest operations in the train, well under 5% of cost of goods, and it does not have an interesting cost curve of its own. Where it starts to matter is at the ends. High-concentration subcutaneous formulations drive membrane area and processing time up sharply because flux is so poor near the target concentration, and that is a real drug-product cost that gets attributed to formulation. At the other end, single-pass TFF is one of the few genuinely cheap intensification moves available, because it removes a hold tank and its cleaning from the flow sheet rather than adding equipment. Membrane suppliers are concentrated but not monopolized, and cassette prices have been broadly stable, so the lever here is process design rather than procurement.

## Videos

- https://www.youtube.com/watch?v=V3CaGINTKqY — Introduction to Tangential Flow Filtration (TFF) (ACE Biologics, 7 minutes, 50k+ views)
- https://www.youtube.com/watch?v=LkoQX7U4eeo — Tangential Flow Filtration - TFF (GFP Purification part 5 of 6) (BioNetwork, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=m6S19j6BpuY — How it Works: Hollow Fiber TFF (Tangential Flow Filtration) (Repligen, 1 minute, 10k+ views)

## Further reading

[Buffer effects on protein sieving losses in ultrafiltration and their relationship to biophysical properties (Biotechnology Progress)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11659806/) · [Control of protein particle formation during ultrafiltration/diafiltration through interfacial protection (Journal of Pharmaceutical Sciences)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4284022/)
