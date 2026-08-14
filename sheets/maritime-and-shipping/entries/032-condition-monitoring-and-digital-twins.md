---
number: 32
name: Condition Monitoring and Digital Twins
part: 6
group: Digital & autonomy
applies: [retro, ops]
emissions: small
segments: [cont, bulk, tank, gas]
capex: low
maturity: grow
---

## Description
Condition monitoring instruments the machinery that can stop a ship and streams the readings ashore. The usual set on a large two-stroke is cylinder pressure, exhaust gas temperature per cylinder, turbocharger speed and vibration, main and crankpin bearing temperatures, shaft torque and thrust, and lube oil sampling for wear metals and water. Sampling runs from one second to one minute rather than the single noon report that used to be the whole dataset, and the link ashore is now usually low-earth-orbit broadband at roughly $250–2,000 a month instead of a metered VSAT channel. A performance layer sits on top: measured shaft power for a given speed and draft is compared against an expected value, following ISO 19030 for hull and propeller performance, which is how fouling becomes visible months before the next drydock. Most products sold as marine digital twins are this plus a 3D view and a physics model of one subsystem; genuinely coupled twins exist for hull structural fatigue and inside a few engine makers' own diagnostics, and the honest description of the rest is condition monitoring with a better interface.

## Strengths and weaknesses
The value is concentrated in a short list of failures that strand a ship: turbocharger failure, scavenge fire, liner scuffing and a wiped bearing. A main engine breakdown mid-ocean means a tow, a repair berth and off-hire at roughly $20,000–60,000 a day for a large ship, so one avoided event pays for the system several times over. The second payback is regulatory rather than mechanical, because class societies will approve a condition-based maintenance scheme that lets an owner skip opening machinery at survey when the data supports it, which removes work instead of adding a dashboard. The weaknesses are ordinary: sensors drift and few crews recalibrate them, alarm volume outruns the attention available on a 20-person ship, and most predictive claims rest on models trained on too few real failures to predict anything, so what works in practice is trending against a known-good baseline. The performance half is worth 1–3% of fuel on its own, which is real but small beside a single avoided breakdown, and the platform costs money every month whether or not a failure was ever coming.

## When to use
If the ship has a large two-stroke and long ocean legs, start with main-engine and turbocharger monitoring plus lube oil analysis, because those are the failures with the biggest bill behind them; budget $30,000–150,000 per ship for the sensors and gateways and $1,000–5,000 a month for the software and the link. If the ships are on time charter and the charterer buys the bunkers, do not pay for the fuel-performance half of the product, since the saving goes to someone else; buy the reliability half, which the owner keeps. If a vendor is selling a digital twin, ask which physics is actually modeled, on which subsystem, and what it predicts that a trend line against a baseline does not. And if the system has to pay for itself on paper, go after the class condition-based maintenance notation, which is the only part of this that reliably takes cost out rather than adding it.

## Key numbers
Sensor and platform retrofit roughly $30,000–150,000 per ship · $1,000–5,000 per ship per month for software and connectivity · off-hire $20,000–60,000 a day for a large ship · sampling at 1 second to 1 minute against one noon report a day · performance monitoring typically worth 1–3% of fuel · low-earth-orbit broadband at roughly $250–2,000 a month per ship

## Examples
MAN Energy Solutions PrimeServ Assist and CEON; WinGD's WiDE engine diagnostics; Kongsberg Vessel Insight; ABB Ability Tekomar XPERT; Wärtsilä Expert Insight; ISO 19030 for hull and propeller performance measurement; condition-based maintenance notations from DNV, Lloyd's Register and ABS.

## Economic profile
This is one of the few digital items on a ship where the owner both spends the money and keeps the benefit, because maintenance and off-hire sit on the owner's side of a time charter while fuel does not. The capital is small against the asset: $30,000–150,000 of sensors and gateways on a ship worth $50–200M, plus $1,000–5,000 a month for the software and the link. Connectivity used to be the blocker, since a metered VSAT channel made high-rate telemetry expensive per megabyte; low-earth-orbit plans at roughly $250–2,000 a month for tens of megabits removed that constraint and are most of why continuous monitoring spread across the fleet after 2023. The vendors make their margin on subscription rather than hardware, which is why nearly every engine maker and integrator now sells a platform and why the feature lists look alike. On the buyer's side the return is lumpy: one avoided main-engine failure at $20,000–60,000 a day of off-hire covers years of subscription, and a condition-based maintenance scheme takes recurring survey work out, while the 1–3% fuel saving from performance monitoring is real but usually credited to whoever pays for the bunkers.

## Videos

- https://www.youtube.com/watch?v=2_o1SDy6__U — Predictive Maintenance Explained (RealPars, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=5NLgbP04PzI — Digital Twin in action: Advanced real time diagnostics for WinGD engines (SAFETY4SEA, 16 minutes, under 1k views)

## Further reading

[A performance degradation evaluation method for a turbocharger in a diesel engine (Royal Society Open Science)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6281929/) · [Research and application of digital twin technology in waterway transportation (Chinese Journal of Ship Research)](https://www.ship-research.com/en/article/doi/10.19693/j.issn.1673-3185.02451)
