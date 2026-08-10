---
number: 12
name: Perfusion and Continuous Culture
part: 2
group: Culture modes
products: [protein, vaccine, cell]
scale: [bench, pilot, mid]
cogs: high
maturity: proven
regulatory: routine
---

## Description
Perfusion feeds fresh medium into the reactor continuously and withdraws spent medium and product at the same rate, while a retention device keeps the cells inside. The device is usually an alternating tangential flow (ATF) or tangential flow hollow-fiber module, sometimes an acoustic separator, a gravity settler, or a spin filter on older adherent processes. Because nutrients never run out and lactate and ammonium never accumulate, the culture holds 50–150 million cells/mL where a fed-batch peaks at 10–30 million, and it runs 30–60 days instead of 12–18. Volumetric productivity is commonly 1–3 g/L/day against roughly 0.3–0.5 g/L/day averaged over a fed-batch run, so a 500 L perfusion reactor can out-produce a 5,000 L fed-batch one. One published integrated continuous design gets up to 30 kg of antibody per batch out of a single 500 L perfusion vessel, about half a tonne a year, and reaches 8 tonnes a year on 2,000 L vessels. The second thing perfusion buys is short residence time: product leaves the warm reactor in hours rather than sitting in it for two weeks.

## Strengths and weaknesses
You get much higher output per liter of installed reactor, a smaller and cheaper facility for the same annual mass, and a product that spends hours rather than days at 37 °C, which matters for anything that deamidates, clips, or aggregates. The costs are medium and complexity. Perfusion consumes roughly 0.5–2 reactor volumes of medium a day, so a 40-day run on a 500 L vessel drinks 10,000–40,000 L of medium, and medium is often the single largest upstream line item. The failure mode is the retention device. Hollow fibers foul over a long campaign, and as they foul the sieving coefficient drops, so product stops passing into the harvest and starts accumulating and degrading inside the reactor. A module that blinds on day 25 of a 45-day run ends the run. Long campaigns also mean more calendar time in which a contamination event can happen, and a contamination on day 40 costs 40 days of medium.

## When to use
Pick perfusion when the product is unstable in culture, when you need a lot of mass from a small footprint, or when the upstream has to match a continuous downstream. If your molecule is a stable antibody and you already have a fed-batch platform, fed-batch usually still wins on simplicity: one harvest, one batch, a scale-down model everyone knows, and no device to babysit for six weeks. If you are building new capacity and demand is uncertain, perfusion lets you buy a 500 L suite instead of a 2,000 L one, which is the real argument in most business cases. The version almost everyone should adopt regardless is intensified N-1 perfusion: run only the last seed step in perfusion so the production reactor is inoculated at high density, and you shorten the production run by several days for very little added risk.

## Key numbers
50–150 million cells/mL against fed-batch's 10–30 million · campaigns of 30–60 days · volumetric productivity commonly 1–3 g/L/day against roughly 0.3–0.5 g/L/day for fed-batch · medium consumption of roughly 0.5–2 reactor volumes a day · up to 30 kg per batch from a 500 L vessel in a published integrated continuous design · product residence time in the warm reactor measured in hours rather than days.

## Regulatory notes
Routine GMP, because licensed perfusion products go back to the early 1990s and reviewers have seen the format many times. The extra work is mostly definitional and analytical. A batch has to be defined by harvest volume, elapsed time, or a number of collection intervals rather than by emptying a vessel, and each defined batch needs in-process control data across its whole window. Expect to supply pooled-harvest hold and stability data, evidence that product quality does not drift between day 5 and day 50 of a campaign, and a demonstration that the retention device does not shed fibers or extractables into the harvest. The longer campaign also raises bioburden and mycoplasma monitoring frequency, since a 45-day run has 45 days of sampling ports and feed connections to keep sterile.

## Examples
Bayer's Kogenate (Factor VIII) and Pfizer's Xyntha/ReFacto, Janssen's Remicade, Merck Serono's Gonal-f and Rebif, and the Genzyme enzyme replacement products Cerezyme, Fabrazyme, and Myozyme, which Sanofi has run at production scale with perfusion feeding continuous capture. Retention hardware comes from Repligen (XCell ATF), Cytiva (Xcellerex APS), and Sartorius. Perfusion is also the standard expansion mode for the newer intensified seed trains that most CHO platform processes have adopted.

## Economic profile
Medium dominates. Perfusion trades facility depreciation for consumable spend, so the calculation is whether a smaller building plus a lot of medium beats a larger building plus less medium, and the answer depends on how many years of demand you are amortizing over. Perfusion medium is usually a cheaper, leaner formulation than a fed-batch base plus concentrated feeds, but you use ten to forty times as much of it, and medium can already be on the order of a million dollars for a single large fed-batch. The other cost is the retention module and its tubing, which is a per-campaign consumable. Where perfusion pays reliably is new capacity for uncertain demand: a 500 L perfusion suite is far cheaper to build, qualify, and staff than a 2,000 L fed-batch suite of equivalent output, and it fails cheaper if the product does not sell.

## Videos

- https://www.youtube.com/watch?v=IWe1b-WyXv4 — How it Works: ATF (Alternating Tangential Flow) Filtration (Repligen, 1 minute, 10k+ views)
- https://www.youtube.com/watch?v=vNo8-ndMpFw — Insights on Fed-batch vs Perfusion Processing and Upstream vs Downstream Process Improvements (PatheonChannel, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=qJ9du7nhEto — Perfusion and Intensified Fed-Batch (MilliporeSigma, 2 minutes, 1k+ views)

## Further reading

[Developments and opportunities in continuous biopharmaceutical manufacturing (mAbs)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8043180/) · [Evolving trends in mAb production processes (Bioengineering and Translational Medicine)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5689530/)
