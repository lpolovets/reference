---
number: 30
name: Hydrogen Internal Combustion Engines
part: 7
group: Transport
sector: [veh, mar, pwr]
form: [gas, hp]
carbon: none
maturity: pilot
cost: med
---

## Description
A hydrogen internal combustion engine is a diesel or gas engine block with a new fuel system, ignition, and control strategy, burning hydrogen with air the way it would burn methane. Brake thermal efficiency lands at 35–45%, against 50–60% for a fuel cell, but the engine costs a fraction as much, uses the same castings, bearings, and turbochargers as the diesel it came from, and can be serviced by any mechanic who has worked on one. Two injection choices define the design. Port injection puts hydrogen into the intake manifold at around 10 bar, which is simple and cheap but lets the gas displace roughly a third of the intake air, cutting power density; direct injection at high pressure recovers it and is what Cummins uses on the X15H. Combustion runs lean, with substantial excess air, which cuts flame temperature and therefore thermal NOx, though not to zero. The result is a powertrain that is worse than a fuel cell on fuel and much better on capital cost, supply chain, and fuel purity.

## Strengths and weaknesses
The strengths are practical rather than thermodynamic. The engine tolerates hydrogen that would poison a PEM stack, which matters when the supply is byproduct gas that would otherwise need expensive cleanup to reach ISO 14687 fuel-cell grade. It keeps the existing manufacturing base, dealer network, and service skills, and it costs far less to buy. The weaknesses are fuel consumption and combustion behavior. Burning 20–40% more hydrogen per mile than a fuel cell is a permanent operating penalty. Hydrogen's minimum ignition energy is about 0.02 mJ against gasoline's 0.28, and its flammability range is 4–75% in air, so a hot exhaust valve, a carbon deposit, or a film of lubricating oil can light the charge before the spark does. Pre-ignition and backfire into the intake are the classic failure modes, and crankcase blow-by needs active ventilation because hydrogen accumulates there. NOx aftertreatment is still required to meet Euro VII or EPA 2027.

## When to use
The deciding variable is annual utilization, not the technology. A fuel cell's 20–40% fuel saving has to pay back its capital premium, so the higher the annual hours or miles, the more the fuel cell wins; below that crossover the engine is cheaper over the life of the machine. Construction and agricultural equipment sits well below it, which is why JCB went this way, and long-haul line-haul trucking sits above it. Also pick the engine when the hydrogen you can get is impure, when the duty cycle involves shock loading and dust that a fuel cell's air handling would struggle with, or when the customer will not accept a service network that does not exist yet. Compare against entry 028 on total cost per mile at your actual mileage, and against a diesel with renewable fuel, which usually beats both on cost and loses only on tailpipe carbon.

## Key numbers
Brake thermal efficiency 35–45%, against 50–60% for a PEM fuel cell · burns 20–40% more hydrogen per mile than a fuel cell · roughly 22–27% of the input electricity reaches the wheels, against about 30% for a fuel cell and 70–80% for a battery · hydrogen's minimum ignition energy about 0.02 mJ against gasoline's 0.28, flammability range 4–75% in air · port injection displaces about a third of the intake air · Cummins X15H rated 400–530 hp and 2,600 Nm at about 44% thermal efficiency · JCB's production engine is 55 kW.

## Energy and losses
An engine converts 35–45% of a kilogram's 33.3 kWh into shaft work where a fuel cell converts 50–60%, so a hydrogen engine burns 20–40% more fuel for the same job, and across the whole chain roughly 22–27% of the electricity that made the hydrogen reaches the wheels. What the engine avoids is purification loss and cost. A PEM stack needs hydrogen at ISO 14687 grade, with carbon monoxide below 0.2 ppm and sulfur below 0.004 ppm, and getting a byproduct or reformer stream to that specification is a real energy and capital charge; an engine will run on gas that never sees a final polishing step. On lean-burn calibration the engine also gives up some power density to hold NOx down, so the efficiency figures quoted at rated power are usually not the ones you get at the calibration a fleet actually runs.

## Examples
JCB is the most committed developer: over GBP 100 million invested, a 55 kW production engine approved for commercial sale in Europe in January 2025, hydrogen backhoes and telehandlers in customer hands, and a twin-engine 1,600 hp land speed record car built from the same block. Cummins built hydrogen into its fuel-agnostic X-series platform, with the 15-litre X15H rated at 400–530 hp and 2,600 Nm, over 1,000 km of range on 700 bar storage, 15-minute refueling, and full production expected in 2027; Werner has signed for 500. Deutz sells the six-cylinder TCG 7.8 H2 at 200 kW and has paired it with RheinEnergie for stationary power. Toyota has run hydrogen-engine Corollas in Japan's Super Taikyu series since 2021. On water, MAN Energy Solutions, Wärtsilä, and Rolls-Royce mtu all offer hydrogen or hydrogen-blend versions of existing engine families.

## Economic profile
This is a cheaper powertrain built from an existing supply chain, which changes the shape of the business rather than the size of the market. Development cost is modest compared with a fuel cell program because the block, the crank, and most of the accessories already exist and are already in volume production, so an engine maker can bring a hydrogen variant to market for a fraction of what a stack platform costs. That also means there is little proprietary advantage to accumulate: every major diesel manufacturer can do this, and several have. The market is therefore set by hydrogen price and by regulation, not by engine technology. In Europe, where CO2 standards for heavy vehicles count tailpipe emissions, a hydrogen engine qualifies as zero-emission and a renewable-diesel engine does not, which is most of the commercial argument for it. If that regulatory treatment changed, most of these programs would lose their business case overnight.

## Videos

- https://www.youtube.com/watch?v=YTV1-aJGm8A — JCB's new Hydrogen powered engine explained by Engineering Director, Ryan Ballard (Content With Media, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=bfS012FC8yM — JCB shows off its hydrogen internal combustion engine (LandPowerTV, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=HvPAUh-VSJ4 — Cummins hydrogen ICE truck powered by B6.7H (Cummins, 2 minutes, 10k+ views)

## Further reading

[Overview of Hydrogen Internal Combustion Engine (H2ICE) Technologies (US Department of Energy)](https://www.energy.gov/sites/default/files/2023-07/h2iqhour-02222023-2.pdf) · [Research and Development of Hydrogen-Fueled Internal Combustion Engines in China (ACS Omega)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10753572/)
