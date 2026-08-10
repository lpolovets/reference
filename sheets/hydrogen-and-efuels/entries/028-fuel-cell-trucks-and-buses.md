---
number: 28
name: Fuel-cell Trucks and Buses
part: 7
group: Transport
sector: [veh]
form: [hp, liq]
carbon: none
maturity: comm
cost: med
---

## Description
A fuel-cell truck carries hydrogen at 700 bar or as a cryogenic liquid, runs it through a PEM stack that converts 50–60% of its energy into electricity, and drives an electric motor through a small buffer battery that handles peaks and regenerative braking. The stack is the same technology as a PEM electrolyzer run backwards, which is why the two share a supply chain and a platinum-loading problem. A Class 8 truck uses roughly 7–9 kg of hydrogen per 100 km, so a 60–70 kg tank set gives 300–600 miles, and refueling takes 10–20 minutes against five for diesel. That combination is the pitch: battery-like driveline, diesel-like range and turnaround, no depot dwell time. The reason the pitch has worked for buses and not for trucks comes down to where the vehicle sleeps. A bus fleet returns to one depot every night, so a single dispenser serves fifty vehicles and runs at high utilization; a long-haul truck needs a station network that nobody has built.

## Strengths and weaknesses
On the vehicle itself the engineering works. Hydrogen storage is lighter than the equivalent battery, so a fuel-cell truck keeps more payload on long routes, and it refuels fast enough not to disturb a driver's hours of service. The weakness is the fuel price and the station network, and they reinforce each other: few stations means low throughput, low throughput means high prices, and high prices mean nobody buys the trucks. California retail hydrogen has been near $30/kg while the economics need roughly $4–6/kg, a gap of five times rather than a few percent. Durability is the third issue: the US Department of Energy's heavy-duty target is 25,000 stack hours, about a million miles at highway speed, and fielded stacks are still working toward it against diesel engines that reach that routinely. The failure mode is a company that raised capital on truck orders and discovered its customers could not fuel them. Nikola filed for bankruptcy in February 2025 and Hyzon's board voted to liquidate the same month.

## When to use
Pick fuel-cell if the fleet returns to one or two depots nightly, runs a predictable daily distance above what a battery comfortably covers, and cannot afford the dwell time or the grid connection that megawatt charging needs. Transit buses fit that description exactly, and so do some regional distribution fleets and refuse operations. Do not pick it for long-haul over routes with no station, and do not model the fuel at a price your supplier has not contracted, because retail hydrogen and contracted hydrogen differ by a factor of three or more. Compare against battery-electric first in almost every case: energy per mile is roughly two and a half times cheaper, megawatt charging is arriving, and the depot grid upgrade is usually cheaper than a hydrogen station. If you want hydrogen's fuel logistics but not the fuel cell's capital cost, entry 030 covers hydrogen internal combustion, which trades 20–40% more fuel for a much cheaper powertrain.

## Key numbers
PEM stack systems run 50–60% efficient · storage at 700 bar or as liquid hydrogen · roughly 7–9 kg of hydrogen per 100 km for a Class 8 truck · 300–600 miles of range and 10–20 minute refueling · about 30% of the input electricity reaches the wheels, against 70–80% for battery-electric · economics need roughly $4–6/kg against California retail near $30/kg · DOE heavy-duty stack durability target of 25,000 hours.

## Energy and losses
Trace the electricity and the case gets hard: 50–55 kWh makes a kg of hydrogen, 3–4 kWh more compresses it to 700 bar, the fuel cell converts 50–60% of the 33.3 kWh in that kg, and the drivetrain takes another 10%, so roughly 30% of the original electricity reaches the wheels. A battery-electric truck delivers 70–80% of what it charges. At $0.15/kWh that is about $0.30 per mile for the battery truck against $0.77 for hydrogen at $6/kg, or $3.90 at a $30/kg retail pump, with diesel at 6.5 mpg and $4/gal sitting near $0.62. Nothing about stack efficiency closes a factor-of-two-and-a-half gap in energy, so the fuel-cell case has to be made on refueling time, payload, and depot infrastructure cost.

## Examples
Hyundai's XCIENT Fuel Cell is the most-driven heavy fleet in the world: 165 trucks across five European countries had covered 20 million km by January 2026, starting from the Swiss Hyundai Hydrogen Mobility program, with a new North American version launched in 2025. Toyota and Kenworth ran the Port of Los Angeles drayage demonstration and Toyota now supplies powertrains to Hyroad, which bought 117 trucks and the IP out of Nikola's bankruptcy auction in 2025. Buses are where the volume is: Skyworth delivered 249 fuel-cell buses to Guangzhou Public Transport, Bologna's TPER is deploying 127, and Solaris expanded hydrogen bus production for German, French, and Scandinavian orders, with Asia-Pacific taking roughly two-thirds of the global market. Ballard Power and Toyota supply most of the stacks that go into other people's buses.

## Economic profile
The vehicle costs more than a diesel and much more than a battery-electric equivalent, but capital cost is not what decides this market, because at $30/kg the fuel alone outweighs the entire purchase price difference within a year of heavy use. The cost structure that matters is the station's: a hydrogen dispenser is expensive and its price per kg falls steeply with throughput, so the only configurations that work are ones where many vehicles share one dispenser. That is why buses succeed and long-haul trucking does not, and it is a structural feature rather than a stage on a cost curve. Anyone building here should sell into captive depot fleets with a delivered-hydrogen contract in hand and treat the retail station network as somebody else's problem. Subsidies decide the rest: California's HVIP and LCFS, the EU's Alternative Fuels Infrastructure Regulation, and Chinese municipal fleet programs are what every deployment in the examples above is standing on.

## Videos

- https://www.youtube.com/watch?v=0JC72KL4om0 — How to build a Hydrogen Fuel Cell Semi Truck? - Hydrotec Factory Tour (JerryRigEverything, 10 minutes, 100k+ views)
- https://www.youtube.com/watch?v=w5E_MAZdO-k — Fuel cell stack explained (Pragma Industries, 13 minutes, 100k+ views)
- https://www.youtube.com/watch?v=R6AdX-bdDaw — How Do Hydrogen Fuel Cells Work? (Reactions, 8 minutes, 500k+ views)

## Further reading

[Fuel Cell Electric Bus Status Report 2025 (National Laboratory of the Rockies)](https://docs.nlr.gov/docs/fy26osti/97796.pdf) · [Hydrogen Class 8 Long Haul Truck Targets (US Department of Energy Hydrogen Program)](https://www.hydrogen.energy.gov/docs/hydrogenprogramlibraries/pdfs/19006_hydrogen_class8_long_haul_truck_targets.pdf)
