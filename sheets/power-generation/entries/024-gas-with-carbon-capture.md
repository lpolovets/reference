---
number: 24
name: Gas with carbon capture
part: 5
group: Low-carbon gas
dispatch: disp
lcoe: high
cf: high
capex: vhigh
build: slow
---

## Description
Two different ways to make a gas plant's CO2 capturable. Post-combustion capture bolts an amine absorber onto a combined cycle's exhaust: the solvent picks CO2 out of a dilute flue gas (about 4% CO2 for a gas turbine, against 12–14% for coal), then steam bled from the bottoming cycle regenerates the solvent and releases the CO2 for compression. That gets 90–95% of the CO2 at an energy penalty of roughly 8–12% of plant output, most of it the regeneration steam. Oxy-fuel supercritical CO2, the Allam cycle, takes the other route: burn the gas in nearly pure oxygen so the combustion products are only CO2 and water, run the CO2 itself as the working fluid, condense out the water, and take the surplus CO2 off at pipeline pressure with no stack at all. The price there is an air separation unit, which eats a similar share of the output, plus a turbine nobody has yet built at commercial scale. Either way, the plant is only half the project: the CO2 needs a pipeline and a permitted place to go.

## Strengths and weaknesses
This is the only route that keeps a dispatchable gas plant and its cheap fuel while removing most of the CO2, and post-combustion capture is a retrofit, so it can reuse a site, a turbine, and an existing grid connection. The weaknesses compound. Capture costs 8–12% of output plus a large capital adder, so the plant makes less power and costs much more per kW. The capture island has its own minimum stable load and its own trip modes, so availability falls and the unit ramps worse than the combined cycle it started as. The usual failure is not the chemistry. It is a finished plant with nowhere to put its CO2 because the storage permit or the pipeline slipped, or a capture unit that gets bypassed whenever the power price beats the value of the credit.

## When to use
Only consider gas with capture when you already have a credible CO2 disposal path. In practice that means the US Gulf Coast, Alberta, or the North Sea, where a storage site, a Class VI-equivalent permit, and a pipeline are realistic on the project's schedule; anywhere else the disposal path is the project and the power plant is the easy part. Then check the revenue, because nothing here clears without a 45Q-style credit, a carbon price, or an enhanced-oil-recovery buyer, and the answer moves more with that number than with any engineering choice. Pick post-combustion if you are retrofitting or want technology risk near zero; pick oxy-fuel only if pipeline-pressure CO2 with no stack is worth first-of-a-kind risk to you. If what you actually need is clean firm power on a data-center timeline rather than a decarbonized gas fleet, geothermal and nuclear are the alternatives large offtakers compare against, and both avoid CO2 logistics entirely.

## Key numbers
90–95% CO2 capture on post-combustion amine · 8–12% of plant output lost to the energy penalty, mostly solvent-regeneration steam · about 4% CO2 in gas-turbine exhaust against 12–14% for coal, which is why capture per tonne costs more on gas · roughly 0.34 t CO2/MWh from a modern combined cycle, so 90% capture earns about $26/MWh at the US 45Q rate of $85 a tonne · NET Power's Project Permian about 80 MW for $475–575M, roughly $6,000–7,000/kW · commercial operation targeted for early 2029 after a 2026 investment decision.

## Grid integration
The generator is a synchronous gas turbine, so inertia, fault current, and capacity credit look much like a plain combined cycle's. The capture island is what changes the plant's behavior: solvent regeneration draws steam from the bottoming cycle, the absorber has a minimum stable load of its own, and the extra equipment adds forced-outage modes, so the unit ramps more slowly and is available fewer hours than the same turbine without capture. What has to be built alongside it is a CO2 pipeline and a permitted injection site, which is usually a longer and less certain path than the power plant, and one the grid operator has no visibility into.

## Variants
### Post-combustion amine capture
The route with operating precedent. It retrofits an existing combined cycle, it can be turned down or bypassed, and the vendors (Shell Cansolv, Mitsubishi's KM-CDR, Aker Carbon Capture, Entropy) have run units on real flue gas. It costs the most steam and the most footprint of any option here, and the solvent itself degrades and has to be reclaimed.

### Oxy-fuel supercritical CO2 (Allam cycle)
NET Power's cycle: no stack, CO2 out at pipeline pressure, and no thermal NOx because there is no nitrogen in the combustor. It needs an air separation unit, a bespoke high-pressure oxy-combustor, and a first-of-a-kind turbine. NET Power halted development of its first utility-scale oxy-combustion project and suspended testing at its La Porte demonstration plant in late 2025, which is the clearest available verdict on how ready it is.

## Examples
NET Power's Project Permian in West Texas, redesigned around Siemens A35 turbines with Entropy's post-combustion capture, about 80 MW in phase one at an estimated $475–575M, with a final investment decision expected in the second half of 2026 and operation targeted for early 2029. Equinor and partners' Northern Lights in Norway as the storage half of the equation. Entropy's capture units on gas plants in Alberta. On the solid-fuel side, Boundary Dam 3 in Saskatchewan is still the only large operating coal capture unit anywhere, and it is covered under pulverized coal.

## Economic profile
Capture roughly doubles a gas plant's capital cost per kW while cutting its net output, so the levelized cost lands well above $200/MWh at any realistic capacity factor, and the plant needs to run a lot of hours to spread that capital. NET Power's numbers are the cleanest public data point: roughly $6,000–7,000/kW for a first phase, against $2,000–2,800/kW for the combined cycles the market is currently buying. The revenue side is policy. A modern combined cycle emits about 0.34 tonnes of CO2 per MWh, so capturing 90% is worth roughly $26/MWh at the US 45Q rate of $85 a tonne, which is real money and still not enough to cover the capital adder on its own. Anyone investing here is betting that a large buyer will pay a premium for firm gas power with the CO2 accounted for, on a schedule nuclear cannot meet and geothermal can meet only in certain geologies.

## Videos

- https://www.youtube.com/watch?v=9FqoabWp8pY — Can solvent-based carbon capture work? CO2 reduction explained | GE Vernova (GE Vernova, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=vFcbev1TkoU — NET Power, LLC Allam Cycle Overview (gwilliambrownjr, 2 minutes, 10k+ views)

## Further reading

[Global Status of CCS 2025: Executive Summary (Global CCS Institute)](https://www.globalccsinstitute.com/wp-content/uploads/2025/10/GSR-2025-Executive-Summary-21-October.pdf) · [Class VI Wells Used for Geologic Sequestration of Carbon Dioxide (US Environmental Protection Agency)](https://www.epa.gov/uic/class-vi-wells-used-geologic-sequestration-carbon-dioxide)
