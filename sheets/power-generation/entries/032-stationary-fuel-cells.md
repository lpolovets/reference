---
number: 32
name: Stationary fuel cells
part: 7
group: On-site generators
dispatch: base
lcoe: med
cf: vhigh
capex: high
build: fast
---

## Description
A stationary fuel cell oxidizes natural gas or hydrogen electrochemically instead of burning it, so the products are DC electricity, water, and CO2, with essentially no NOx, SOx, or particulates. Solid oxide is effectively the whole market, and Bloom Energy is effectively the whole solid-oxide market. A Bloom stack runs a ceramic electrolyte at around 800 °C, reforms natural gas internally, and converts roughly 60% of the fuel's energy into electricity, which beats a combined cycle and, more importantly, holds at that efficiency in a 300 kW module, where no thermal cycle does. With heat recovery the total can exceed 90%. Because there is no combustion it permits where an engine cannot, and because it is modular and sits behind the meter it can be installed in months without entering the interconnection queue. It ramps slowly, since thermal cycling cracks ceramics, so it runs as baseload.

## Strengths and weaknesses
What sells it is speed and permits: near-zero criteria pollutants, a footprint that fits on a data-center pad, and delivery in months against five years for a grid connection or a new gas turbine. The efficiency at small scale is genuinely unusual and it is the reason the product exists. The honest limits: it is only as clean as the gas it burns, and at about 60% efficiency it emits roughly 0.30 tonnes of CO2 per MWh, close to a modern combined cycle rather than close to zero. It supplies no inertia and little fault current because it connects through an inverter, it will not follow load, and it needs a firm gas supply, so it trades delivery risk on the grid for delivery risk on the pipeline. The number that decides the pro forma is stack degradation: solid-oxide stacks lose output over time and get replaced on roughly a five-year cycle, and that recurring capital hides inside the service agreement rather than in the headline capex.

## When to use
Choose a fuel cell when the binding constraint is a permit or a date rather than cost per MWh. That describes the data-center case exactly: gas available at the site, a five-year interconnection queue, and a NOx-constrained air district where a bank of engines cannot get permitted. It also fits hospitals, universities, and manufacturing sites that want on-site power with useful heat and cannot tolerate a diesel plant's emissions. Do not buy it for flexibility, because it will not follow load, and do not buy it as a decarbonization measure on its own, because on natural gas its CO2 per MWh is close to a combined cycle's. If you can wait for a grid connection, grid power under a PPA is usually cheaper. If you need flexibility rather than steady output, reciprocating engines are cheaper and faster wherever the permit allows them.

## Key numbers
About 60% electrical efficiency on natural gas at any module size, and over 90% total with heat recovery · roughly 0.30 t CO2/MWh, close to a modern combined cycle · near-zero NOx, SOx, and particulates, which is what makes it permittable · stack replacement on roughly a five-year cycle, carried in the service agreement · roughly $3,000–5,000/kW installed before that agreement, at $100–200/MWh delivered on gas · installed in months against a US interconnection median above five years.

## Grid integration
A fuel cell connects through an inverter, so it supplies no inertia, little fault current, and nothing for system strength. Its value is that it barely needs the grid: sited behind the meter next to the load it avoids transmission, distribution upgrades, and the interconnection queue, and with a microgrid controller it will island and keep the site running through an outage. It does not ramp, so it cannot provide reserve or follow load, and a system operator counts it as a permanent reduction in demand rather than as dispatchable capacity. What has to be built alongside it is a gas lateral with enough pressure and capacity, which on a large data-center installation is a pipeline project in its own right.

## Variants
### Phosphoric acid (PAFC)
Doosan's 400 kW units are the mature low-temperature option: around 40% electrical efficiency, high total efficiency in combined heat and power, and a long field record in buildings. Lower efficiency than solid oxide and a much smaller installed base outside South Korea.

### Molten carbonate (MCFC)
FuelCell Energy's platform, running near 650 °C at roughly 45–50% electrical efficiency. Its distinctive property is that it concentrates CO2 out of an external flue gas stream while making power, which is why it keeps appearing in carbon-capture proposals rather than in straight generation ones.

### Proton exchange membrane (PEM)
Low temperature, fast starting, and needs pure hydrogen, so in stationary use it shows up mainly as backup power for telecom sites and as a bridge product, not as a generator you would size a facility around.

## Examples
Bloom Energy's Energy Servers at Equinix, AT&T, and Home Depot sites, and the 2026 agreements that changed the category: up to 2.8 GW with Oracle, up to 1 GW with AEP under a $2.65B deal, a $5B partnership with Brookfield for AI data centers, and roughly $7.65B of data-center contracts inside a single quarter. Doosan Fuel Cell's phosphoric-acid fleet in South Korea, one of the largest stationary fuel cell fleets anywhere, built on a dedicated portfolio standard. FuelCell Energy's molten carbonate plants in Connecticut and South Korea. Bloom's older Delaware and California installations are the longest-running public field data on degradation.

## Economic profile
The equipment is a manufactured product, so it rides a factory cost curve rather than a construction one, and installed cost lands around $3,000–5,000/kW before the service agreement. That agreement is the number to focus on, because it covers stack replacement on about a five-year cycle: a fuel cell's cost is part capex and part a recurring capital charge, and any model that treats it as ordinary O&M understates it. On natural gas the delivered cost lands around $100–200/MWh, above a combined cycle and below a peaker, and the buyers signing in 2025–26 are not buying on that number. They are buying delivery inside a year, a permit in an air district that will not take engines, and independence from a queue whose US median wait is over five years. If gas turbine lead times normalize or queues shorten, that premium compresses, so the durable question for the business is whether manufacturing cost falls fast enough to compete on price once speed stops being scarce.

## Videos

- https://www.youtube.com/watch?v=wN4Z0iFifxc — How A Bloom Energy Server Works (Bloom Energy, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=hJTVJqG5TmU — Solid oxide fuel cell - make electricity from natural gas (chemicum, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=PilpTDYtyIc — Understanding Solid Oxide Fuel Cell (SOFC) | Advantages, Disadvantages, Applications (Owl WiS, 4 minutes, 10k+ views)

## Further reading

[Comparison of Fuel Cell Technologies (US Department of Energy)](https://www.energy.gov/cmei/fuels/comparison-fuel-cell-technologies) · [Solid Oxide Fuel Cells (US Department of Energy)](https://www.energy.gov/hgeo/solid-oxide-fuel-cells)
