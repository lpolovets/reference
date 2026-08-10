---
number: 2
name: TOPCon
part: 1
group: Crystalline silicon
dispatch: var
lcoe: vlow
cf: low
capex: low
build: med
---

## Description
TOPCon puts a passivating contact across the whole rear of an n-type wafer instead of PERC's local openings. The stack is a tunnel oxide about 1–2 nm thick topped with a doped polysilicon layer: majority carriers tunnel through the oxide into the poly and out to the metal, while the oxide keeps them away from the silicon surface where they would recombine. Because the contact covers the full area rather than a few percent of it, resistance and recombination stop trading against each other, and production cells reach roughly 25–26% with modules at 22–24%. The wafer is phosphorus-doped n-type, which removes the boron-oxygen degradation p-type PERC had to engineer around. None of that is why TOPCon won. It won because the extra steps drop into an existing PERC line, so the industry converted its installed capacity in about three years instead of building new factories, and by 2025 TOPCon was close to 95% of shipments among the top module makers.

## Strengths and weaknesses
TOPCon buys 1–2 more points of module efficiency than PERC, a temperature coefficient near -0.29%/°C against PERC's -0.34, bifaciality of roughly 70–85%, and lower annual degradation, all at close to PERC's price per watt. It costs more silver per watt, and the polysilicon deposition wraps around the wafer edges and has to be etched off, which is where yield went during the first two years of the ramp. The degradation mode the industry is now watching is UV-induced degradation of the front surface, reported on fielded n-type modules and not well captured by the standard IEC UV preconditioning, so ask a supplier for extended UV test data rather than a certificate. The other exposure is legal: Trina, JinkoSolar, LONGi, and First Solar are all litigating TOPCon patents, and a US import ruling can move a module's landed cost more than any process improvement will.

## When to use
Default to TOPCon for anything utility-scale. It is the cheapest way to buy a modern module, supply is enormous, and at equal $/W it beats PERC on every spec that matters. Move off it in three cases. If the site is hot and bright and you can model the extra energy, HJT's temperature coefficient and bifaciality may justify a premium. If area is the binding constraint, as on a roof, back-contact modules give you roughly 15% more watts in the same footprint. And if US import exposure is unacceptable, CdTe is the only non-silicon option at scale. Wherever you buy, check where the cells were made rather than just the modules, and check the specific supplier's patent position.

## Key numbers
Tunnel oxide roughly 1–2 nm thick under a doped polysilicon layer · cell efficiency about 25–26%, module 22–24% · temperature coefficient near -0.29%/°C against PERC's -0.34 · bifaciality roughly 70–85% · close to 95% of 2025 shipments among the top module makers · converted from PERC in about three years because the added steps retrofit an existing line.

## Grid integration
The dispatch profile is the same as any silicon PV plant, but two TOPCon properties move numbers an interconnection study cares about. Higher module efficiency and real bifacial gain put more DC capacity behind the same AC connection, and utility projects now run DC:AC ratios of 1.3–1.5; that clips a little midday energy and raises the morning and evening shoulders, which is what capacity accreditation actually rewards. Lower degradation matters over a 20–30 year PPA, since an n-type module with no boron-oxygen loss holds several more points of nameplate at year 25, so the accredited capacity a system operator counts on late in the contract is higher. Neither changes the fact that the plant is inverter-coupled and supplies no inertia unless the inverters are specified to.

## Examples
JinkoSolar's Tiger Neo, Trina Solar's Vertex N, JA Solar's DeepBlue 4.0, Canadian Solar's TOPHiKu, and Astronergy's ASTRO N are the volume TOPCon lines. Jinko reached volume first in 2022–23 and the rest of the top ten followed within about two years. On the legal side, Trina has asserted TOPCon patents against Runergy and Adani in the US, and First Solar holds and licenses a TOPCon patent portfolio it acquired with TetraSun in 2013, which is an unusual position for a company that makes no silicon cells.

## Economic profile
TOPCon's economics are the reason it exists. Upgrading a PERC line costs a fraction of a greenfield cell fab, so the industry captured a 1–2 point efficiency gain without writing off its tool base, and module prices barely moved. The consequence is chronic overcapacity: Chinese nameplate cell and module capacity has run at roughly twice global demand since 2023, prices fell below cash cost through much of 2024–25, and most listed module makers lost money over that stretch. If you are buying modules, this is the best procurement environment the industry has ever had. If you are trying to build a module business, the only defensible positions are a policy-protected market (US 45X credits and tariffs), a patent position, or a genuinely different cost structure such as CdTe.

## Videos

- https://www.youtube.com/watch?v=baL1SrqEiB0 — TOPCON Tunnel Oxide Passivated Contact New solar cell Technology Breakthrough (Smart Solar, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=8aB_GY6rxPA — What is TOPCon solar module technology? Is it worth investing in? (Ornate Solar, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=PME47LDFb0s — Jinko Solar Virtual Tour-Cell Factory (JinkoSolar, 7 minutes, 10k+ views)

## Further reading

[TOPCon – Overcoming Fundamental Bottlenecks to a New World-Record Silicon Solar Cell (Fraunhofer ISE)](https://www.ise.fraunhofer.de/en/research-projects/topcon.html) · [International Technology Roadmap for Photovoltaic, 17th Edition 2026 (VDMA)](https://www.vdma.eu/en-GB/international-technology-roadmap-photovoltaic)
