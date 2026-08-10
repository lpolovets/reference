---
number: 31
name: Reciprocating engine gensets
part: 7
group: On-site generators
dispatch: fast
lcoe: high
cf: low
capex: low
build: fast
---

## Description
Diesel and gas piston engines driving generators, from about 100 kW up to 20 MW in a single block and ganged into plants above 200 MW. Their properties are better than their reputation. Large lean-burn gas engines reach 45–50% electrical efficiency, which beats a simple-cycle gas turbine's 35–44%; they synchronize in tens of seconds and reach full load in a couple of minutes; and because a plant is built from many identical units, you shed output by shutting engines off rather than by throttling one machine, so plant efficiency barely falls at part load. That last property is what makes a bank of engines the flexible-generation choice on grids with a lot of wind and solar. Capex runs $700–1,500/kW, which overlaps a frame peaker's band at the top and undercuts it at the bottom, and units ship with lead times measured in months while a gas turbine order waits five years.

## Strengths and weaknesses
Fast starts, flat part-load efficiency, low capex, modularity, and availability now are a strong combination for a grid that needs flexibility rather than energy. Engines are synchronous too, so they contribute inertia and fault current and can black-start a system. The weaknesses are emissions and fuel cost. NOx and particulates per MWh are far higher than a modern turbine's, so permits often cap run hours, and US emergency-standby engines are typically limited to about 100 hours a year of non-emergency operation. Diesel is expensive per MWh: at $3 a gallon and 42% efficiency the fuel alone is well over $150/MWh, which is why diesel units are backup and utility-scale engine plants burn gas. The characteristic failure is organizational rather than mechanical. A standby fleet that has never been load-tested properly does not start when the utility supply actually fails, and nobody finds out until that day.

## When to use
Choose engines when you need capacity or flexibility below about 200 MW, when you need it soon, or when the plant will run at low and highly variable output. Below roughly 20 MW they beat aeroderivative turbines on efficiency and cost per kW. Above that, compare on expected starts and load profile rather than full-load efficiency, because part-load and start behavior is where engines win and where a turbine's heat-rate advantage disappears. For backup at a data center or hospital, diesel is still the default: the fuel stores on site indefinitely and the duty cycle is a few hours a year, so efficiency does not matter. For a utility-scale flexible plant use gas engines, and check the local NOx permit before anything else, because it sets the SCR scope, the run-hour cap, and sometimes whether the project is possible at all. If the site needs steady output rather than flexibility and cannot get an engine permit, a solid-oxide fuel cell is the usual alternative.

## Key numbers
100 kW to 20 MW per unit, ganged into plants above 200 MW · 45–50% electrical efficiency on large gas engines, against 35–44% for a simple-cycle turbine · synchronized in tens of seconds and at full load in a couple of minutes · $700–1,500/kW installed, undercutting a frame peaker's $1,150–1,450/kW at the low end · US emergency-standby permits typically cap non-emergency running near 100 hours a year · diesel fuel alone above $150/MWh at $3 a gallon and 42% efficiency.

## Grid integration
Engines are synchronous machines, so they supply real inertia, fault current, and voltage support, and a plant of them can black-start a system. Their value to an operator is start speed and turndown: a 200 MW plant built from twenty 10 MW engines can cover a wind forecast error in minutes and sit at a small fraction of rating without an efficiency penalty, which makes it useful as contingency reserve and renewables balancing rather than as an energy source. Standby engines behind a customer's meter are a different animal. The operator cannot see them, they carry no capacity credit, and their run-hour permits usually forbid the economic dispatch that would make them useful, unless they are enrolled in a demand-response program, which is what a growing number of data-center fleets now do. Interconnection is easy because the plants are small and sited at load, and what gets built alongside them is emissions control (SCR and an oxidation catalyst) plus fuel storage or a gas lateral.

## Examples
Wärtsilä's 31 and 34 series flexible plants, including the Cooperative Energy installation at Benndale, Mississippi, and a large installed fleet across Latin America and the Caribbean where engines cover both baseload and peaking. INNIO Jenbacher and Caterpillar's MWM units in the 1–10 MW combined-heat-and-power market. Cummins, Kohler, and Caterpillar diesel sets as the standard data-center and hospital backup at 2–3 MW per unit with N+1 redundancy. Wärtsilä and Rolls-Royce mtu hydrogen-capable engine development as the low-carbon path, including Wärtsilä's 100% hydrogen engine power plant.

## Economic profile
Engines are a commodity product from a handful of makers (Wärtsilä, INNIO Jenbacher, Caterpillar, Cummins, Rolls-Royce mtu), sold with a long-term service agreement that is a real part of the cost, because overhauls are scheduled by running hours and a plant that runs a lot pays a lot. Capex of $700–1,500/kW is low for a thermal plant, and for anything running more than a few hundred hours a year the fuel bill dominates everything else. The 2024–26 opportunity is availability: with gas turbine slots sold into 2030–31 and reservation fees in the tens of millions, an engine plant can be ordered, delivered, and commissioned inside two years, which has pulled a lot of data-center bridge power and utility peaking demand toward them. The risk to that business is permitting rather than technology, because the same NOx and particulate rules that keep engines cheap to buy make them expensive or impossible to run in non-attainment areas.

## Videos

- https://www.youtube.com/watch?v=vqhM6GDidiA — HOW A DIESEL GENERATOR WORKS -ANIMATION (ENGINEERING SPIRIT, 3 minutes, 1m+ views)
- https://www.youtube.com/watch?v=sga-KWIVEeE — Flexible Gas Power Plant Wärtsilä 31SG | Cooperative Energy, Benndale (Wärtsilä Corporation, 7 minutes, 10k+ views)

## Further reading

[Catalog of CHP Technologies, Section 2: Technology Characterization – Reciprocating Internal Combustion Engines (US Environmental Protection Agency)](https://www.epa.gov/sites/default/files/2015-07/documents/catalog_of_chp_technologies_section_2._technology_characterization_-_reciprocating_internal_combustion_engines.pdf) · [Controlling Air Pollution from Stationary Engines (US Environmental Protection Agency)](https://www.epa.gov/stationary-engines)
