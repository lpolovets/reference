---
number: 16
name: Protein A Affinity Capture
part: 4
group: Chromatography
products: [protein]
scale: [bench, pilot, mid, large]
cogs: med
maturity: default
regulatory: routine
---

## Description
Protein A is a bacterial cell-wall protein that binds the Fc region of an antibody. Immobilize an engineered version of it on a chromatography bead and you get a capture step that binds the product and lets essentially everything else flow past: load clarified harvest, wash, then drop the pH to 3.0–3.5 and the antibody comes off at 95–99% purity with 90–95% step recovery, in one pass, using the same method for almost every monoclonal antibody. That single fact is why antibodies have a manufacturing platform and nothing else does. Modern resins use alkali-stable ligand variants that survive 0.1–0.5 M sodium hydroxide cleaning, which is what makes hundreds of cycles possible. Dynamic binding capacity runs 40–80 g of antibody per liter of resin at a 4–6 minute residence time, and the current generation sits at the top of that band: MabSelect PrismA is specified above 80 g/L at 6 minutes and around 65 g/L at 4 minutes.

## Strengths and weaknesses
One step does the work of three, development takes weeks instead of months, and the impurity profile going into polishing is predictable enough that the rest of the train can be a platform too. Against that, the resin costs roughly $8,000–15,000 per liter and a production column is usually the most expensive single object in the suite. The elution is a problem for some molecules, because pH 3.0–3.5 induces acid-mediated aggregation in antibodies with low conformational stability, and additives only partly fix it. Leached ligand is a real impurity, typically 10–35 ppm in the eluate, and it is assayed on every batch. The failure mode is fouling. Feed impurities bind irreversibly over repeated cycles and dynamic binding capacity declines by roughly 10–25% over 200 cleaning cycles, so the resin's usable life is set by a cycling study rather than by wear, and any upstream or clarification change that dirties the feed can invalidate the lifetime you already filed.

## When to use
For anything with an Fc, use Protein A, at every scale from bench through commercial. The temptation to design a cheaper non-affinity capture train comes up in every cost review, and it usually loses: two or three ion-exchange and mixed-mode steps cost months of development, carry more molecule-specific risk, and consume more buffer, which more than eats the resin saving unless volumes are enormous. Skip it in three cases. If the molecule has no Fc, you have no choice. If it aggregates at pH 3.5 and no elution additive rescues it, capture on cation exchange or a mixed-mode resin instead. And if resin cost per gram is genuinely a top-three line item, the answer is usually continuous multi-column capture, which uses the same resin two to three times harder, rather than a different resin.

## Key numbers
Dynamic binding capacity 40–80 g/L at 4–6 minute residence time · resin at roughly $8,000–15,000 per liter · 100–300 cycles, with alkali-stable resins holding over 95% of capacity at 150 cycles · 95–99% purity and 90–95% recovery in a single pass · elution at pH 3.0–3.5 · leached ligand typically 10–35 ppm in the eluate · resin amortization of roughly $1.25–2.50 per gram of antibody at 100–200 cycles.

## Regulatory notes
Routine GMP, and also the most heavily documented consumable in the process. Resin lifetime has to be demonstrated in a small-scale cycling study run on the actual feed, typically to 100–300 cycles, and the number you demonstrate is the number you file; running a column past it is a deviation, not a judgment call. Leached Protein A is a specified impurity with a per-batch immunoassay. A column shared between products needs its own carryover and cleaning data, which is why CDMO suites often dedicate columns rather than argue the point. The subtle one is that the pH 3.0–3.5 eluate doubles as the low-pH viral inactivation step, so elution conditions are part of the viral clearance claim: change the elution pH or the hold time to help a fragile molecule and you have reopened a viral clearance study as well as a purification one.

## Examples
Cytiva MabSelect SuRe and MabSelect PrismA, Purolite Praesto Jetted A50, JSR Amsphere A3, Tosoh Toyopearl AF-rProtein A HC-650F, and Thermo Fisher POROS MabCapture A. On the product side the list is essentially every approved monoclonal antibody, including adalimumab, trastuzumab, and pembrolizumab, all of which are captured this way. Chinese suppliers such as Bestchrom have entered the market at lower price points, mostly serving biosimilar and domestic programs.

## Economic profile
Capture is usually 10–20% of an antibody batch's cost, and most of that is resin amortization, which is arithmetic you can do yourself. Resin at $10,000 a liter, loaded at 40 g of antibody per liter per cycle, over 100–200 cycles, works out to roughly $1.25–2.50 per gram of product. Run the same column only 20 times before a product change and it is about $12 a gram, which is why cycle count matters more than list price. At 15,000 L batch scale the column itself represents millions of dollars of resin sitting on the floor. List prices have not fallen much over the past decade; what improved is capacity, and that is economically the same thing, since a 10 g/L gain in dynamic binding capacity has been reported to cut Protein A cost per gram by 15–20%. Supply is concentrated among a handful of ligand and bead makers, and Protein A resin shows up on every serious single-source risk register in the industry.

## Videos

- https://www.youtube.com/watch?v=KOTNXKo2O7o — Affinity Chromatography Explained (Cube Biotech , 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=aKZMk6LQ7So — Recombinant Antibody Affinity Purification with Protein A or Protein G Protocol (Addgene, 11 minutes, 5k+ views)
- https://www.youtube.com/watch?v=e3-Hkxpj0GU — Case study - downstream processing of monoclonal antibodies produced in bioreactors (Marloes Peeters, 13 minutes, 10k+ views)

## Further reading

[Recent Advances and Future Directions in Downstream Processing of Therapeutic Antibodies (International Journal of Molecular Sciences)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9369434/) · [Protein A chromatography increases monoclonal antibody aggregation rate during subsequent low pH virus inactivation hold (Journal of Chromatography A)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4582070/)
