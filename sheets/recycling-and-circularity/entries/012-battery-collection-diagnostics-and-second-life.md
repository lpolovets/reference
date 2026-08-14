---
number: 12
name: Battery Collection, Diagnostics and Second Life
part: 3
group: Battery recycling
output: closed
economics: thin
feed: mixed
drivers: [reg, val, carbon]
maturity: scale
---

## Description
A retired electric-vehicle pack weighs 300–600 kg, holds 40–100 kWh, and moves as class 9 dangerous goods, so the first real cost in this chain is freight rather than chemistry. Packs reach a collector three ways: warranty and crash returns through dealers, fleet retirements, and consumer cells through take-back points. The first two supply most of today's volume, because the vehicles built in the late 2010s are mostly still on the road. Diagnostics decide what happens to a pack once it arrives. State of health is present capacity divided by original capacity, and a pack usually comes out of a vehicle somewhere between 70% and 80%; measuring that properly means a full charge and discharge at roughly C/3, which takes six to ten hours per module, so grading a pack module by module ties up a test rig for days unless the operator can read the battery management system's own logged history or use a faster impedance or pulse measurement. Second life takes the modules that grade well, rebuilds them into a stationary system, and sells the remaining capacity into applications where weight and volume do not matter.

## Strengths and weaknesses
A module at 75% of its original capacity still holds real energy, and stationary storage has no weight or volume limit, so the material genuinely has value left in it. Four things get in the way. Grading costs money before anything is sold, commonly $10–30/kWh in published estimates, and packs arrive in dozens of incompatible mechanical and communication formats, so integration is one-off engineering work every time. The repurposer becomes the manufacturer for liability purposes, which is what UL 1974 exists to structure, and an insurer pricing fire risk on cells with an unknown thermal history charges for that uncertainty. The fourth problem is the competition: Chinese LFP cells sold under $50/kWh in 2025 against an average pack price near $115/kWh in 2024, and a new cell comes with a cycle warranty behind it that a used module cannot carry.

## When to use
If you have a large fleet of identical packs with logged battery-management data and one buyer for the output, second life is worth doing, because the two costs that usually kill it, grading and integration, both fall with sameness. If the packs are mixed models bought at auction, do not: you will pay to test each one and then build a one-off system around it. If the chemistry is LFP, the case is stronger, since an LFP pack has almost no recoverable metal value and sending it to a recycler will cost you a gate fee rather than pay you. If the chemistry is NMC or NCA, run the comparison against recycling the pack now, because the nickel and cobalt are worth money today and second life defers that revenue by five to ten years while you carry storage, insurance, and commodity risk. As a default, assume a second-life system has to land under roughly $50–80/kWh installed to beat a new LFP system with a warranty.

## Key numbers
Pack 300–600 kg and 40–100 kWh · retired at 70–80% state of health · a full capacity test at about C/3 takes 6–10 hours per module · grading commonly $10–30/kWh before any repackaging · Chinese LFP cells under $50/kWh in 2025 against an average pack price near $115/kWh in 2024 · a second-life system needs to land under roughly $50–80/kWh installed to compete · a 500 kg NMC pack yields roughly 150 kg of black mass.

## Examples
The Johan Cruijff ArenA in Amsterdam runs a 3 MW storage system built from 148 Nissan Leaf packs, and B2U Storage Solutions operates a site in Lancaster, California assembled from used Honda and Nissan packs. Connected Energy in the UK and 4R Energy, Nissan's joint venture with Sumitomo, are the longest-running operators; UL 1974 is the standard a repurposer is evaluated against.

## Economic profile
Second life is a spread business: take or buy a pack, spend money grading and repackaging it, and sell stationary capacity. Both ends of that spread moved the wrong way over the last five years, because new cell prices fell fast while grading and integration are labor and did not fall with them. The feed side is thinner than the forecasts assumed as well, since most packs available today come from crashes and warranty claims rather than age-out, and a crashed pack is exactly the one nobody wants to repurpose. A recycler, meanwhile, pays cash now: a 500 kg NMC pack yields roughly 150 kg of black mass, which at $2,500–4,000 a tonne is $375–600, plus a few hundred dollars of copper, aluminum, and steel. That is a small number, but it is certain, which is why a pack worth repurposing is usually also worth recycling. The carbon argument is real, since making a new cell emits roughly 60–100 kg CO2e per kWh and reusing a module avoids almost all of it, but outside a few European procurement rules nobody pays for that directly. If you are underwriting one of these businesses, ask whether identical packs are contracted at volume and whether a buyer has signed for the output at a price, because without both, the diagnostics cost alone consumes the margin.

## Videos

- https://www.youtube.com/watch?v=Tu5N3-JlW2k — Second Life Batteries: The Solution for Sustainable Mobility? (DW REV - Mobility & Innovation, 10 minutes, 5k+ views)
- https://www.youtube.com/watch?v=P0ltPuQxp0c — Why Second Life Battery Projects Are So Important For Everyone (Transport Evolved, 6 minutes, 10k+ views)

## Further reading

[Electric-vehicle battery second-life and recycling pathways: How economics depend on chemistry, processing, and application (National Laboratory of the Rockies)](https://www.osti.gov/pages/biblio/3031080) · [Lithium-ion battery second life: pathways, challenges and outlook (Frontiers in Chemistry)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11033388/)
