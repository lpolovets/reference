---
number: 4
name: Back-contact cells (IBC and xBC)
part: 1
group: Crystalline silicon
dispatch: var
lcoe: low
cf: low
capex: med
build: med
---

## Description
Back-contact cells move both polarities to the rear, interdigitated as alternating p and n strips, so the front face carries no metal at all. That recovers the 4–6% of incident light a conventional front grid shades, and it lets the front surface be optimized purely for optics and passivation. The price is that carriers generated near the front have to reach the rear without recombining, so the design needs high-lifetime n-type wafers, excellent front passivation, and alignment-critical patterning of two doped regions plus two isolated metal grids on the back. Modern products are hybrids rather than pure IBC: LONGi's HPBC combines back contacts with a TOPCon-style passivated contact, Aiko's ABC is its own stack, and the highest research cells combine back contacts with heterojunction passivation, which is where silicon single-junction records above 27% have come from. Commercial modules land at roughly 24–25%, the highest available, in a panel with no visible gridlines.

## Strengths and weaknesses
Back contact gives the highest module efficiency on the market, about 24–25% against 22–24% for TOPCon, in a uniform black panel, which is why it owns the premium residential segment. Vendors also claim better behavior under partial shading from the way the rear metallization is segmented; treat that as a claim to test on the actual roof rather than as a spec. The weakness is manufacturing. Back contact adds masking and alignment steps to a flow TOPCon deliberately kept short, demands tighter wafer quality, and yields lower, which shows up as cost per watt rather than as a field failure. The failure mode that has actually cost buyers money is corporate: SunPower, the company that commercialized IBC, filed for Chapter 11 in 2024, and Maxeon, its spun-out manufacturing arm, had to be recapitalized under TCL Zhonghuan's control. A 25-year warranty is only as good as the entity behind it, and this segment has failed that test repeatedly.

## When to use
Choose back contact when roof area is fixed and worth more watts: a house with one small south-facing plane, a commercial roof with a hard kWh target, a carport, or any job where mounting and labour per module dominate the module price. In those cases roughly 15% more watts per square meter is worth a real premium, because you save a proportional share of racking, wiring, and install labour. Don't choose it for a utility project, where land is cheap and $/W is the only number that matters; TOPCon wins there and will keep winning. Whichever you pick, diligence the warranty counterparty as carefully as the module, because the back-contact segment's insolvency record is worse than its technology record.

## Key numbers
Module efficiency roughly 24–25%, the highest commercially available, against 22–24% for TOPCon · about 240–250 W/m² against 210–220 for a mainstream module · recovers the 4–6% of light a front metal grid shades · silicon single-junction cell records above 27% come from back-contact designs · more masking and alignment steps and lower yield than any other silicon cell.

## Grid integration
These modules mostly sit behind the meter, so the grid question is the service connection and the distribution feeder rather than the transmission system. Fitting 15% more kW onto an area-capped roof means 15% more midday export through the same connection, and on a circuit already carrying a lot of rooftop solar the binding limit becomes hosting capacity and voltage rise, not anything at the array. Where the utility caps export rather than installed capacity, or where the tariff pays little for exported energy, those extra watts are worth much less than the datasheet implies, so read the interconnection rule before paying the premium. As with all PV, the inverter decides what grid services the system provides, and IEEE 1547-2018 now requires volt-VAR control and ride-through that older installations do not have.

## Examples
Aiko Solar's ABC modules and LONGi's Hi-MO 9, built on HPBC 2.0, are the volume products, both aimed at premium rooftop in Europe, Japan, and Australia. Maxeon 7 descends from the SunPower IBC cell that ran from the mid-2000s onward. JinkoSolar has shown a back-contact product of its own, which is the signal that the format is moving from a niche toward a second mainstream option rather than staying a specialty.

## Economic profile
The cost problem is process steps, and it is stubborn: even after crediting the higher efficiency, back contact costs more per watt than TOPCon, and the gap only closes where area carries a price. That is why the market splits cleanly, with back contact taking premium residential and small commercial while utility projects stay on TOPCon. The industry's own answer is to fold back contacts into lines that already exist, which is what LONGi's HPBC 2.0 is; if that works at scale the format becomes a feature of mainstream cells rather than a separate product with a separate cost base. The historical warning for investors is that every pure-play back-contact company so far has struggled to fund its next line, so treat manufacturing scale and balance sheet as the diligence items, not cell efficiency.

## Videos

- https://www.youtube.com/watch?v=5Jny4t4U4gI — Sunpower IBC cell: process flow (nanolearning, 14 minutes, 10k+ views)
- https://www.youtube.com/watch?v=tQoV4Qj0NQs — How the Back of a New Solar Panel Just Changed Everything (Undecided with Matt Ferrell, 13 minutes, 100k+ views)

## Further reading

[Technology development for silicon solar cells (ISFH)](https://isfh.de/en/technologieentwicklung-si-solarzellen) · [Crystalline Silicon Photovoltaics Research (US Department of Energy)](https://www.energy.gov/cmei/systems/crystalline-silicon-photovoltaics-research)
