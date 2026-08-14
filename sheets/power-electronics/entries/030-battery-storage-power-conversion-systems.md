---
number: 30
name: Battery Storage Power Conversion Systems
part: 5
group: Grid converters
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [si, sic]
uses: [grid]
maturity: comm
---

## Description
The power conversion system is the bidirectional inverter sitting between a battery's DC bus and the AC grid. Physically it is a 1.5–4 MW skid or a container-mounted cabinet holding a three-phase IGBT bridge, an LCL filter, controls, and cooling, feeding a step-up transformer that takes the plant to 34.5 kV at the point of interconnection. The DC side runs at 1,000–1,500 V and in most utility designs connects straight to the battery with no DC-DC stage, because letting the DC link follow the pack voltage is cheaper and removes a conversion. Large plants are now built in DC blocks, where each battery container gets its own PCS, so capacity scales by repeating a unit instead of wiring many containers into one large inverter. The PCS is also what makes a battery a grid resource rather than a chemistry experiment: it sets real and reactive power independently, responds to a frequency event in under 100 ms, and can supply reactive power at zero real power, which is the same job a STATCOM does.

## Strengths and weaknesses
Round-trip efficiency and grid-code compliance both live in this box. PNNL's 2022 assessment puts a lithium-ion system at 89.6% round trip measured DC to DC, 86.0% measured at the inverter terminals, and 82.6% after the medium-voltage transformer, so the converter costs about 3.5 points and the transformer another 3.4. That is a large share of the loss for a part the same assessment prices at about $73/kW, which is a small share of a four-hour system's cost. The duty is harder than a solar inverter's, because a storage PCS can be told to run at full power in either direction for hours, so its thermal design and its hot-ambient derating curve set the plant's usable rating on exactly the days the grid is short. Its current limit, typically 1.1–1.5 times rated, means it contributes very little fault current, which is a protection problem for the interconnection rather than a control problem for the plant.

## When to use
Specify the PCS by power rating and duty cycle rather than by matching the battery's energy. If the application is frequency response or fast reserve at 1C or above, the converter is a large fraction of the cost and it is worth paying for a higher continuous rating and a better derating curve in heat. If the application is four-hour energy shifting, buy the cheapest compliant unit that clears the grid code, because the cells dominate the price. Confirm the certifications the interconnection actually demands before you sign anything: UL 1741 SB with IEEE 1547-2018 for a distribution-connected plant, and IEEE 2800 plus the local ride-through rules for anything on the transmission system. Order grid-forming capability at procurement if the market has any prospect of requiring it, since adding it to a plant already in service costs far more than specifying it up front.

## Key numbers
PCS units of 1.5–4 MW, DC bus 1,000–1,500 V, stepping up to 34.5 kV · lithium-ion round trip 89.6% DC-to-DC, 86.0% at the inverter terminals, 82.6% after the transformer (PNNL, 2022) · PCS priced at about $73/kW in that assessment · frequency response in under 100 ms · current limit 1.1–1.5 times rating, so very little fault current · roughly 6% of a four-hour system's capex, derived here from $73/kW against about $1,200/kW.

## Examples
Sungrow, Power Electronics, EPC Power, Dynapower, and SMA supplying utility-scale conversion systems; Tesla's Megapack, which folds cells, PCS, and thermal management into one unit sold by the megawatt-hour; Hornsdale in South Australia and the Moss Landing complex in California; UL 1741 SB, IEEE 1547-2018, and IEEE 2800 as the certification path in the US.

## Economic profile
Power-related cost and energy-related cost scale on different axes, and the PCS is the clearest example of it. PNNL's 2022 assessment prices a power conversion system at about $73/kW, which against a four-hour lithium-ion system costing on the order of $1,200/kW is roughly 6% of capex; that ratio is arithmetic done here rather than a published figure. Stretch the same plant to eight hours and the PCS share halves, because you buy more cells and reuse the same inverter. Compress it to a one-hour frequency-response asset and the converter becomes one of the largest single line items, which is why short-duration projects shop converters hard and long-duration projects mostly do not. The margin in this business sits with the integrators rather than the converter vendors, because Tesla, Sungrow, and Fluence sell an assembled system with one warranty and one performance guarantee, and the PCS inside it is a bought-in part competing against several credible suppliers. What surprises owners is not the price but the availability, since a converter fault takes a whole DC block out of the market until someone fixes it, and in a capacity market that unavailability is deducted from the payment directly.

## Videos

- https://www.youtube.com/watch?v=YhDIp_Bjk-I — Battery Energy Storage System (BESS) Explained | Layout, PCS, EMS, BMS & Working Principle (Circuit Masterclass, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=F3jejrRfems — Intro to Power Conversion Systems (PCS) for battery energy storage systems (BESS) | Infineon (Infineon Technologies, 12 minutes, 1k+ views)

## Further reading

[2022 Grid Energy Storage Technology Cost and Performance Assessment (Pacific Northwest National Laboratory)](https://www.energy.gov/sites/default/files/2022-09/2022%20Grid%20Energy%20Storage%20Technology%20Cost%20and%20Performance%20Assessment.pdf) · [Reliability Guideline: BPS-Connected Inverter-Based Resource Performance (NERC)](https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/irpwg/inverter-based_resource_performance_guideline.pdf)
