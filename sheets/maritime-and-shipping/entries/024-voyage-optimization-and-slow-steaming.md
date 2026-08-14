---
number: 24
name: Voyage Optimization and Slow Steaming
part: 4
group: Wind & operations
applies: [ops]
emissions: mid
segments: [cont, bulk, tank, gas, roro]
capex: low
maturity: std
---

## Description
This bundles two levers that need no hardware: how fast the ship runs, and how the voyage is planned around weather, trim and arrival time. Speed is by far the larger one, because resistance on a displacement hull rises roughly with the square of speed and the propulsion power to overcome it rises roughly with the cube. Work the arithmetic through and it is the most useful calculation on this sheet. Cut speed 10% and power goes to 0.9³, which is 0.729, so the ship burns about 27% less fuel per day; but the voyage now takes 1/0.9, about 11% longer, so fuel per tonne-mile falls by 1 − 0.729/0.9, about 19% rather than 27%. Those two figures are derived here from the cube law rather than quoted from a study, and the gap between them is the thing most speed-saving claims leave out. The rest of voyage optimization is smaller and additive: weather routing is worth roughly 2–4%, trim optimization 1–3%, and slowing the approach leg to hit a berth window rather than waiting at anchor is worth more again on the leg it applies to. The cube law does flatter very deep cuts, because a two-stroke's specific fuel consumption is roughly flat between about 50% and 85% of rated power and worsens below about 40%.

## Strengths and weaknesses
Nothing else on this sheet cuts 20% or more with no capital and no yard time, and it works on every ship trading today rather than on the small share that can be retrofitted. It is also the fastest lever on a CII rating, since a speed change shows up in this year's carbon intensity number while a fuel switch takes a newbuild cycle. The weaknesses are commercial rather than technical. Holding the same service frequency at a lower speed takes more ships, cargo spends longer at sea, and on a time charter the charterer directs the speed while most charterparties still oblige the master to proceed with utmost dispatch, so the owner cannot simply slow down. Very deep cuts also run into engine and machinery limits, with turbocharger and scavenge fouling on prolonged low load and periodic load-ups required to clear it.

## When to use
Slow down when freight rates are weak, when bunkers are expensive relative to the value of an extra round trip, or when a CII rating has to move inside the year. Speed up when rates spike, because one extra voyage can be worth more than the fuel it costs; that trade-off, not the engineering, is what actually sets fleet speeds. Before touching speed, take the free measures: weather routing, trim optimization against the ship's own loading condition, and a berth window agreed with the port so the ship is not burning fuel to wait. If the ship is on time charter, get the speed and consumption warranty and the emissions clauses right at fixture, since the party that saves the fuel and the party that loses the time are usually different companies. Treat a limit on engine power as a separate instrument: it caps the top of the range for compliance and does nothing about how the ship is run day to day.

## Key numbers
Power roughly proportional to the cube of speed · 10% slower gives 0.9³ = 0.729, so about 27% less fuel a day · the voyage takes about 11% longer, so fuel per tonne-mile falls about 19%, both derived here · weather routing 2–4% · trim optimization 1–3% · specific fuel consumption roughly flat from 50% to 85% of rated power · a weekly service on a 35-day round trip needs 5 ships, and 6 once the round trip stretches to 39 days · an extra ship costs $30–60k a day in hire and crew

## Examples
The container fleet's shift from roughly 25 knots before 2008 to 17–19 knots afterward, and Maersk's super-slow steaming program from 2009; engine power limitation, fitted across most of the existing fleet to comply with the IMO's EEXI rather than by changing anything physical; the IMO's CII, which rates ships on grams of CO2 per deadweight-mile and responds to speed within a single reporting year; weather-routing services from StormGeo, Wärtsilä and DTN; the Blue Visby Solution for coordinating arrival times across competing ships.

## Economic profile
Fuel is 50–70% of voyage cost at $550 a tonne, so speed is where an operator's money actually is, and the decision is commercial rather than technical. Two costs sit against the fuel saving. The first is ships: a weekly service on a 35-day round trip takes 5 vessels, and slowing 10% stretches the round trip to about 39 days and takes 6, so the operator adds a ship at $30–60k a day in hire and crew to save the fuel. The second is cargo capital, which is smaller than people assume: a $20,000 container of goods costs about $5.50 a day at a 10% cost of capital, so four extra days is roughly $22 a box, against a fuel saving on the order of $50 a box for the same ship. Both of those are derived here rather than quoted. The party that pays is decided by the charter: on a voyage charter the owner buys the bunkers and captures the saving, while on a time charter the charterer buys them and the owner carries the schedule risk. Slower steaming also absorbs fleet capacity, which supports freight rates, and that side effect is a large part of why liner operators use it deliberately in weak markets.

## Videos

- https://www.youtube.com/watch?v=VjpGidILzb0 — What does "Slow Steaming" mean? (Casual Navigation, 6 minutes, 1m+ views)
- https://www.youtube.com/watch?v=tchWf313Va0 — Slow steaming (Maersk, 5 minutes, 10k+ views)

## Further reading

[Slow steaming (Wärtsilä Encyclopedia of Marine and Energy Technology)](https://www.wartsila.com/encyclopedia/term/slow-steaming) · [Regulating speed: a short-term measure to reduce maritime GHG emissions (CE Delft)](https://cedelft.eu/publications/regulating-speed-a-short-term-measure-to-reduce-maritime-ghg-emissions/)
