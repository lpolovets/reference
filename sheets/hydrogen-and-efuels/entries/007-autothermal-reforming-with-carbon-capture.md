---
number: 7
name: Autothermal Reforming with Carbon Capture
part: 2
group: Reforming
sector: [chem, ref, steel, exp]
form: [gas]
carbon: low
maturity: pilot
cost: low
---

## Description
Autothermal reforming is the reformer you build when the capture rate is the product. Instead of heating catalyst tubes from outside with a gas-fired furnace, an ATR burns part of the feed with pure oxygen inside a single refractory-lined vessel, and the heat released there drives the reforming reaction over a catalyst bed in the same vessel. Removing the furnace removes the dilute flue-gas stream that caps what an SMR retrofit can capture (entry 006). All the carbon leaves in one place, in the shifted syngas, concentrated and at 30 bar or more, where a single amine or physical-solvent unit can take 90–95% of it and licensors quote 98–99%. The price of that is an air separation unit: a typical design runs at an oxygen-to-carbon ratio near 0.61, and cryogenic oxygen costs about 0.35 kWh per kg, so the plant carries an electrical load an SMR does not.

## Strengths and weaknesses
The strength is architectural. One concentrated CO2 stream means one capture unit, high recovery, and a plant-level carbon intensity of 1–3 kg CO2e/kg where the gas supply is clean, against 4–6 for a retrofit SMR. The vessel itself is not exotic; ATRs are standard equipment in large methanol and gas-to-liquids plants. The weaknesses are the balance of plant and the supply chain. An ASU is a large capital item with a real parasitic load, roughly 1.2 kWh of electricity per kg of hydrogen against about 0.13 for an SMR, and CO2 transport and storage has to be contracted before the plant is worth building. The failure mode is not in the plant at all. Upstream methane leakage is counted in the hydrogen's carbon intensity, and at about 3.2 kg of natural gas per kg of hydrogen, 1% leakage adds roughly 0.9 kg CO2e/kg on a 100-year global warming potential and closer to 2.5 kg on a 20-year one. A 95%-capture plant on a leaky gas field can miss the 4 kg threshold on emissions it never touched.

## When to use
Build an ATR when the hydrogen has to qualify, not merely be cleaner: a new-build plant aiming under 4 kg CO2e/kg for 45V, or under 3.38 for the EU's RFNBO rules, needs plant-wide capture in the 90s, and only a design with no fired furnace gets there with one capture unit. It also suits large single trains, since ATR scales better in one vessel than a tube furnace does. Do not choose it to decarbonize a reformer you already own, because the retrofit in entry 006 gets you tonnes for a fraction of the capital. Before committing, get measured methane intensity from the specific gas supply, not a national average, and get the CO2 storage contract signed, because those two items decide the carbon number and neither is inside the fence. If you cannot get both, an ATR is an expensive way to build an ordinary reformer.

## Key numbers
Oxygen-to-carbon ratio near 0.61, steam-to-carbon near 1.37 · 90–95% plant-wide capture, with licensors quoting 98–99% · 1–3 kg CO2e/kg on a clean gas supply against 4–6 for a retrofit SMR · about 3.2 kg of natural gas per kg of hydrogen · ASU power near 0.35 kWh per kg of O2, giving roughly 1.2 kWh/kg of hydrogen against 0.13 for SMR.

## Energy and losses
Gas consumption is close to SMR and slightly better on a process basis, around 3.2 kg of natural gas per kg of hydrogen, because burning feed inside the vessel wastes less than firing a furnace from outside. The difference is electrical: the ASU takes roughly 1.2 kWh/kg of hydrogen against about 0.13 kWh/kg for a reformer, a ninefold increase, and CO2 compression adds roughly another 0.1 kWh per kg of CO2 sent to the pipeline. On carbon, a plant starting near 9 kg of CO2 per kg of hydrogen and capturing 95% keeps about 0.5 kg in the stack gas, so the delivered number is set almost entirely by the upstream gas supply rather than by the plant.

## Examples
The technology is licensed by Topsoe as SynCOR, by Johnson Matthey as LCH (a gas-heated reformer feeding an ATR), and by Air Liquide and Technip Energies in their blue hydrogen packages. The project record is where this entry gets uncomfortable. ExxonMobil's Baytown plant, roughly 1 billion cubic feet a day of hydrogen with 7 Mt/yr of CO2 capture using SynCOR and a stated capture rate above 98%, went through FEED and was then paused indefinitely in 2026 for lack of offtake. bp's 1.2 GW H2Teesside, which had selected Johnson Matthey's LCH, was abandoned in December 2025 and the site redirected to a data center. Air Products canceled its $4.5 billion Louisiana complex in June 2026 and took a pre-tax charge of up to $2.9 billion. As of mid-2026 there is no large ATR-plus-capture hydrogen plant operating in the West.

## Economic profile
On paper ATR is the cheaper way to buy deep decarbonization: capture cost per tonne is lower than an SMR retrofit that goes after the flue gas, because the stream is concentrated and pressurized, and the capture rate is roughly double. The problem is that the whole plant is capital, not a bolt-on, so it needs 15 to 20 years of contracted offtake at a premium over gray hydrogen, and that offtake has not appeared. Three flagship projects were canceled or paused between December 2025 and June 2026, in each case citing weak demand rather than technology risk. If you are building a business here, treat the binding constraint as the offtake contract and the CO2 storage agreement, and note that a project's carbon intensity is set by a gas supply chain the developer does not own. The technology works; the commercial case is the part that has not been demonstrated.

## Videos

- https://www.youtube.com/watch?v=Pdh6sWNPgMI — ATR: how does it work? - Air Liquide (Air Liquide, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=Ejx_WNKPEVw — How an Air Separation Plant Works | Air Products (Air Products, 4 minutes, 50k+ views)

## Further reading

[Technological evolution of large-scale blue hydrogen production toward the U.S. Hydrogen Energy Earthshot (Nature Communications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11227542/) · [Guidelines to Determine Well-to-Gate Greenhouse Gas (GHG) Emissions of Hydrogen Production Pathways using 45VH2-GREET (US Department of Energy)](https://www.energy.gov/sites/default/files/2025-12/45vh2-greet-manual_december-2025.pdf)
