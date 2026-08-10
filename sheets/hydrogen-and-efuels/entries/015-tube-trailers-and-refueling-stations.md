---
number: 15
name: Tube Trailers and Refueling Stations
part: 4
group: Conditioning and delivery
sector: [veh, mar]
form: [gas, hp, liq]
carbon: none
maturity: comm
cost: high
---

## Description
This is how hydrogen reaches anyone without a pipeline, and it explains why retail hydrogen costs what it does. A 200 bar steel tube trailer carries only 300–400 kg; a 500 bar composite trailer carries roughly 560–1,100 kg; a liquid tanker carries 3,500–4,000 kg. At the far end, a 700 bar station takes delivery into low-pressure storage, compresses to a cascade bank at around 900 bar, chills the gas to -40 °C so the vehicle tank stays under 85 °C during a three-to-five minute fill, and dispenses under the SAE J2601 protocol. Compression and chilled cascade storage dominate the station's capital cost. About 1,160 stations were operating worldwide at the end of 2024, 748 of them in Asia (384 in China, 198 in South Korea, 161 in Japan) and 294 in Europe, of which 113 are in Germany.

## Strengths and weaknesses
Trucking works anywhere, needs no right-of-way, and scales one trailer at a time, which is the only reason hydrogen mobility exists at all outside a few industrial corridors. The weakness is payload. Hydrogen is so light that a full 200 bar steel trailer weighs tens of tonnes to carry 300–400 kg of cargo, so the truck is mostly hauling its own pressure vessels, and delivery adds $1–4/kg over a few hundred kilometers. Composite trailers and liquid tankers fix the payload problem and add their own: composite tubes are expensive, and liquid boils off. The station is the harder half. Capital equipment ran $1,200–3,000 per kg/day of capacity across 111 California station awards reviewed by the Department of Energy, so a 1 t/day site is $1–3 million of equipment before installation, and the failure mode is availability rather than cost. Stations are compressor-limited, single-compressor sites go offline when the machine does, and California drivers spent 2023 and 2024 finding pumps down and prices at records.

## When to use
Truck compressed gas when a customer takes under about 500 kg/day and sits within a few hundred kilometers of supply. Switch to liquid when daily volume passes roughly a tonne and inventory turns in days, because one tanker replaces about ten steel trailers. Build a station only where the fleet is captive and the utilization is known in advance: a bus or truck depot with a single dispenser serving 20 or more vehicles a day amortizes the compressor, while a public retail site depends on a vehicle population that mostly has not shown up. If the customer's volume ever justifies a pipeline, take the pipeline, since it costs a tenth as much per kg. On-site electrolysis at the station is the other alternative, and it trades delivery cost for a much worse capacity factor on the stack, so it usually only wins where trucking is long and power is cheap.

## Key numbers
200 bar steel tube trailer 300–400 kg, 500 bar composite trailer 560–1,100 kg, liquid tanker 3,500–4,000 kg · trucking adds $1–4/kg over a few hundred kilometers · station capital equipment $1,200–3,000 per kg/day of capacity, so $1–3 million for a 1 t/day site · dispensing at 700 bar with -40 °C pre-cooling under SAE J2601 · about 1,160 stations worldwide at the end of 2024 · California retail averaged $33.49/kg across 2024.

## Energy and losses
Dispensing costs more of the fuel's energy than most people expect. A 700 bar station compresses to a roughly 900 bar cascade at 3–4 kWh/kg and pre-cools the gas to -40 °C at about another 0.15 kWh/kg, so roughly 10–13% of the kilogram's 33.3 kWh goes into putting it in the vehicle. Trucking adds little energy and a lot of cost, because a 200 bar steel trailer moves 300–400 kg of hydrogen inside tens of tonnes of steel. Stack the chain and it shows: 50–55 kWh/kg to electrolyze, 3–4 to compress for the trailer, 3–4 more at the station, and the vehicle receives a kilogram worth 33.3 kWh.

## Examples
TrueZero, California's largest operator with 37 stations, charged $36/kg through late 2024 and early 2025. Shell permanently closed all seven of its California light-duty stations in February 2024, citing supply problems and market conditions. Iwatani, Air Liquide, and Nel supply station equipment; Hexagon Purus and FIBA Technologies build composite and steel trailers; Burckhardt Compression and PDC Machines supply the compressors. South Korea's and China's networks, which together hold about half the world's stations, are built around bus and commercial-fleet depots rather than passenger retail.

## Economic profile
Retail hydrogen is expensive for four stacked reasons, only one of which is the molecule: production, trucking at $1–4/kg, station capital amortized over utilization that rarely reaches design, and retail margin. That is how a kilogram produced in the low single digits reaches $33.49 on average at a California pump. The cost curve improves mainly through utilization, so the economics work first where a depot guarantees throughput and last in public retail, which is why the operators that quit (Shell) quit the light-duty side. For anyone building here, the durable positions are the depot contract and the composite-trailer supply chain, not the dispenser. And if a business case assumes $4–6/kg at the nozzle, ask which station has ever charged it.

## Videos

- https://www.youtube.com/watch?v=EPnT8kRYNWI — Explainer video - Hydrogen Refuelling Station - CMB.TECH (CMB. TECH, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hRaa4vkIMgc — Tech Talk - Hydrogen Refueling Station - Hydrogen Fuel Cell Technology Explained - Hyfindr Mariacher (Hyfindr - Hydrogen & Fuel Cell Technology, 20 minutes, 5k+ views)

## Further reading

[Hydrogen Fueling Stations (Alternative Fuels Data Center)](https://afdc.energy.gov/fuels/hydrogen-stations) · [2025 Annual Evaluation of Fuel Cell Electric Vehicle Deployment and Hydrogen Fuel Station Network Development (California Air Resources Board)](https://ww2.arb.ca.gov/sites/default/files/2025-12/AB-126-Report-2025-Final.pdf)
