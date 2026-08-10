---
number: 18
name: Metal Hydrides and Sorbents
part: 4
group: Bulk storage
sector: [veh, mar, pwr]
form: [bound]
carbon: none
maturity: pilot
cost: high
---

## Description
Solid-state storage holds hydrogen inside a material instead of inside a pressure envelope. In a metal hydride, hydrogen atoms occupy interstitial sites in a metal alloy's lattice, and temperature and pressure decide which way the reaction runs: absorption is exothermic, desorption endothermic. The workhorse families are AB5 alloys such as LaNi5, which take up 1.2–1.5% hydrogen by mass, and AB2 Laves-phase alloys such as TiMn2 and ZrMn2 at 1.8–2.2%, both operating near room temperature below 100 bar. Magnesium hydride reaches about 7.6 wt%, but its bond is much stronger and it needs roughly 300 °C to give the hydrogen back. Physisorbents are the other branch: metal-organic frameworks and activated carbons hold hydrogen by van der Waals attraction on very high surface area, which works at 77 K and barely at all at room temperature. The number that makes the category interesting is volumetric: LaNi5 hydride holds about 115 kg of hydrogen per cubic metre, against 71 for liquid hydrogen and 40 for 700 bar gas.

## Strengths and weaknesses
A hydride tank is the safest and densest storage on this list by volume. It sits at low pressure, so a puncture releases very little, and it holds indefinitely with no boil-off. The disqualifying weakness is mass. At 1.5–2 wt% of the alloy alone, a full system lands closer to 1%, which is why no materials-based system has met the Department of Energy's 5.5 wt% and 40 g/L targets, and why the ultimate 7.5 wt% goal remains a research target rather than an engineering one. The second problem is thermal. Absorption releases heat, so a hydride bed has to be actively cooled during a fast fill or it stops taking hydrogen, and desorption needs heat back at a temperature the alloy dictates. That is the failure mode in the field: a system sized on material capacity that cannot fill in reasonable time or cannot hold discharge rate because the heat exchanger, not the alloy, is the limit. Sorbents have the mirror problem, since keeping a MOF at 77 K costs more than the hydrogen is worth outside a laboratory.

## When to use
Choose a hydride when the platform is already heavy, cares about pressure or safety more than mass, and can supply or absorb heat. Submarines are the canonical case, and stationary buffers, ballast-carrying marine vessels, and backup power in occupied buildings are the same argument. Match the alloy to the heat you have: an AB5 or AB2 alloy releases at low enough temperature that a PEM fuel cell's own coolant can drive it, which is what makes an integrated system work at all, while magnesium hydride only makes sense next to an industrial heat source. Do not specify a hydride for anything that has to move its own storage on wheels or wings, because a 700 bar Type IV tank beats it by a factor of five on system mass. And be skeptical of any material claim quoted at the powder level, since the tank, the heat exchanger, and the balance of plant typically halve it.

## Key numbers
AB5 alloys hold 1.2–1.5% hydrogen by mass and AB2 alloys 1.8–2.2% · LaNi5 hydride holds about 115 kg H2/m3, against 71 for liquid hydrogen and 40 for 700 bar gas · magnesium hydride reaches about 7.6 wt% but needs roughly 300 °C · desorption enthalpy about 31 kJ/mol H2 for AB5 and about 75 kJ/mol for magnesium hydride · DOE system targets of 5.5 wt% and 40 g/L remain unmet · Type 212A submarines carry 18 hydride tanks of 4.4 tonnes each.

## Energy and losses
Nothing is lost in storage, but the release costs heat, and the bond strength sets how much. An AB5 alloy gives its hydrogen back at about 31 kJ per mole, roughly 4 kWh/kg or 13% of the fuel's 33.3 kWh, and at a low enough temperature that a fuel cell's waste heat covers it, so in an integrated system the loss is close to free. Magnesium hydride holds five times as much per kg of alloy but binds it at about 75 kJ per mole, roughly 10 kWh/kg or 31%, and demands 300 °C to deliver it, which is why the high-capacity materials have never shipped in a vehicle. Filling is the mirror image: absorption releases the same energy as heat, and a tank that cannot reject it fills slowly.

## Examples
German Type 212A submarines are the fielded case: 18 metal hydride tanks of about 4.4 tonnes and 1,200 litres each, feeding Siemens PEM fuel cells for roughly two weeks submerged, which buys air-independent propulsion at a mass penalty a submarine can carry because it needs ballast anyway. GKN Hydrogen sells containerized stationary hydride units in the HY2 range; Hydrexia works on magnesium-based storage. On the sorbent side, MOF-5 and NU-1501 are the reference materials, and the Department of Energy's HyMARC consortium coordinates most of the US research.

## Economic profile
Hydride systems cost far more per kg stored than pressure vessels, and the cost is in the alloy: rare earths for AB5, titanium and zirconium for AB2, all bought by the tonne for a tank that holds tens of kilograms of hydrogen. There is no obvious learning curve, because the constraint is materials chemistry rather than manufacturing, so prices will not follow the trajectory carbon fiber or electrolyzer stacks are on. That leaves the addressable market to applications that will pay for safety, low pressure, and volumetric density rather than for cheap energy: naval propulsion, stationary buffers in occupied spaces, and equipment where a compressor is unwelcome. Anyone underwriting a solid-state storage company should be asking which of those markets is large enough to build on, not when the material target will be met.

## Videos

- https://www.youtube.com/watch?v=9j2UMT06MTI — Hydrogen Storage in Metal Hydrides [Reupload] (Helmholtz-Zentrum Hereon, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=6Hs2-io-0tk — Hy2green ‒ The safest storage system for renewable energy (GKN Powder Metallurgy, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=M0fnEsz4Ks0 — Solid Hydrogen Explained (Again) - Is it the Future of Energy Storage? (Undecided with Matt Ferrell, 13 minutes, 1m+ views)

## Further reading

[Materials-Based Hydrogen Storage (US Department of Energy)](https://www.energy.gov/eere/fuelcells/materials-based-hydrogen-storage) · [Thermal Management in Metal Hydride Hydrogen Storage Reactors: Mechanisms, Architectures, and Design Trade-Offs (Nanomaterials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12985956/)
