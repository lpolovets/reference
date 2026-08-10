---
number: 1
name: Monocrystalline silicon PERC
part: 1
group: Crystalline silicon
dispatch: var
lcoe: vlow
cf: low
capex: low
build: med
---

## Description
PERC is a monocrystalline p-type silicon cell with a dielectric stack (usually aluminum oxide capped with silicon nitride) deposited on the rear, where the aluminum rear contact reaches the wafer only through laser-opened line openings. The dielectric does two jobs at once: it passivates the rear surface so carriers stop recombining there, and it reflects long-wavelength light back into the wafer for a second pass. Together those are worth 1–2 points of efficiency over the aluminum back-surface-field cell PERC replaced, taking production cells to about 23% and modules to 21–22%. The upgrade was cheap because it bolted onto an existing Al-BSF line, and between roughly 2016 and 2021 it took over the entire industry. It has since lost that position to TOPCon just as fast, falling to something like 1–2% of 2025 module shipments. What survives is an installed base above a terawatt and the price everyone still quotes as the floor.

## Strengths and weaknesses
The strength is that everything about PERC is known: a decade of volume field data, a fully depreciated global tool base, and module prices of $0.08–0.12/W that set the benchmark every other cell has to beat. The weaknesses all come from the p-type wafer. Boron-oxygen light-induced degradation cost early PERC roughly 2–3% of output in its first weeks until gallium doping largely fixed it around 2019–2021, and LeTID, a slower degradation that appears after months at elevated cell temperature, is still the thing to look for in hot climates because it can take several percent off a module that passed factory flash test. The architecture also caps itself: metal touches silicon over a few percent of the rear, and recombination under that metal is what stops PERC going much past 23.5%.

## When to use
Specify PERC only when someone is clearing remaining inventory below TOPCon on a $/W basis and the racking and land are already sunk, because at equal price per watt TOPCon gives you higher efficiency, a better temperature coefficient, and less degradation. Where PERC still matters is analysis rather than procurement: if you are diligencing an operating portfolio, most of the modules on the ground are PERC, and their degradation curve and LeTID exposure are what decide whether year-15 output matches the model. If you are repowering a PERC site, check that the racking and inverters can take a physically larger, higher-current n-type module before assuming a straight swap. For anything new, default to TOPCon.

## Key numbers
Cell efficiency around 23%, module 21–22% · 1–2 efficiency points gained over the aluminum back-surface-field cell it replaced · roughly 1–2% of 2025 module shipments, down from the large majority in 2020 · over 1 TW installed worldwide · modules $0.08–0.12/W against a $1,150–1,600/kW utility project · degradation typically 0.5%/yr against a 25–30 year warranty.

## Grid integration
A silicon PV plant's grid behavior comes from the tracker and the inverter, not from the cell, so nothing in this entry changes it. Output follows the sun, which means capacity credit starts near nameplate in a market with little solar and falls toward 10–20% once solar covers the afternoon and the net peak moves into the evening; CAISO and PJM have both cut solar accreditation for that reason. The inverters supply no inertia or fault current on their own, so interconnection agreements increasingly specify reactive power and grid-forming behavior as conditions of connection. The one PERC-specific point is scale: with more than a terawatt installed, the fleet's 0.5%/yr decay is quietly shrinking the accredited capacity behind contracts signed a decade ago.

## Examples
Martin Green's group at UNSW demonstrated the cell in 1983 and won the 2023 Queen Elizabeth Prize for Engineering for it. Suntech and SolarWorld commercialized it around 2012–2014, and LONGi, JinkoSolar, Trina Solar, JA Solar, and Canadian Solar then built the gigawatt-scale mono-PERC lines that made solar the cheapest new generation on earth. Hanwha Qcells sold it as Q.ANTUM. Most utility plants commissioned anywhere between about 2017 and 2022 are PERC, which is why the operating fleet and the technology roadmap now look nothing alike.

## Economic profile
PERC's cost structure is the standard silicon chain: polysilicon, ingot pulling, wafering, cell processing, module assembly, each step in a different factory and mostly in China. That chain is what got modules to $0.08–0.12/W, and it is also why nobody outside it competes on price alone. The lines are largely written down, so a PERC module can be sold at cash cost, which is what happened during the 2023–25 overcapacity glut and is why leftover PERC inventory sometimes undercuts TOPCon. The broader lesson for anyone building a business on PV is that the cell is not where the margin sits: modules are roughly a tenth of a $1,150–1,600/kW utility project, and the rest is balance of system, land, interconnection, and financing.

## Videos

- https://www.youtube.com/watch?v=XaLTr6_pR5I — PERC Solar Cell: Course Photovoltaics #16 (Photovoltaics Explained, 20 minutes, 5k+ views)
- https://www.youtube.com/watch?v=PJUIS8itDfs — What Is Solar PERC Technology? // Mono PERC // Poly PERC. // Passivated Emitter and Rear Contact. (Solar Facts, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=GPG-zrJCfh0 — The Advantages of Mono PERC Solar Panel Technology: Passivated Emitter Rear Contact (Solar Solution, 4 minutes, 10k+ views)

## Further reading

[Crystalline Silicon Photovoltaics Research (US Department of Energy)](https://www.energy.gov/cmei/systems/crystalline-silicon-photovoltaics-research) · [Photovoltaics Report, July 2026 edition (Fraunhofer ISE)](https://www.ise.fraunhofer.de/en/publications/studies/photovoltaics-report.html)
