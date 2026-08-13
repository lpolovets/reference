---
number: 6
name: On-Site Prime Power
part: 2
group: Standby generation
density: [high, ext]
where: [ai, hyper]
water: low
retrofit: new
maturity: emerg
---

## Description
Prime power means the site generates most of its own electricity continuously rather than waiting for an outage. For data centers that currently means reciprocating gas engines or aeroderivative gas turbines behind the meter, sized in the tens to hundreds of megawatts, often with a grid connection retained as backup rather than as the primary supply. The driver is not cost; it is that the interconnection queue in the target market is longer than the business can wait, and gas generation can be permitted and built in 12–24 months.

## Strengths and weaknesses
Speed is the product: gas engines arrive as containerized modules and a plant can be running long before a transmission upgrade would finish. The site controls its own capacity and is not exposed to a utility's schedule. Against that, delivered electricity costs more than utility service in most markets once fuel, maintenance, and capital are counted, the site now runs a power plant with the staffing that implies, gas supply needs a pipeline connection with its own lead time, and the air permit for continuous operation is far harder than for standby. Emissions are a live public issue in every jurisdiction where this has been tried.

## When to use
Consider prime power where the alternative is waiting years for interconnection and the compute has to be online sooner, and where gas supply and air permits are genuinely obtainable. It also works as a bridge: run on gas now, connect to the grid when the upgrade lands, and keep the plant for backup and peak shaving. Do not choose it where power price drives the model, where the operator has no appetite to run generation, or where the site's emissions profile is a reputational problem. Fuel cells cover a similar niche with lower emissions and higher cost.

## Key numbers
Gas engine plants of 10–500 MW, built in 12–24 months against multi-year interconnection waits · reciprocating engines around 40–45% efficient, aeroderivative turbines similar in simple cycle · delivered cost typically above utility rates once fuel and capital are counted · continuous-run air permits are far more restrictive than standby permits · gas pipeline connection carries its own multi-year lead time.

## Examples
Texas data centers built with behind-the-meter gas generation while awaiting ERCOT interconnection; xAI's Memphis site, whose gas turbines drew air-permit scrutiny; VoltaGrid and similar modular gas fleets marketed specifically for bridge power; several announced projects pairing gas today with a grid connection later.

## Videos

- https://www.youtube.com/watch?v=vY70DYcDrJ0 — Inside Climate News: Data Centers Are Building Their Own Gas Power Plants in Texas (KXAN, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=rQu_8zcOaZU — Powering a Data Center Off the Grid: Part 1 – Natural Gas Solutions (VoltaGrid, 4 minutes, under 1k views)
- https://www.youtube.com/watch?v=8W0KD4eDyao — VoltaGrid's Data Center Solution (VoltaGrid, 1 minute, 5k+ views)

## Further reading

[Key Questions on Energy and AI (IEA)](https://iea.blob.core.windows.net/assets/3179f7f8-01f6-4dd6-bffa-c9f7b73f1dc9/KeyQuestionsonEnergyandAI.pdf) · [AI: Five charts that put data-centre energy use - and emissions - into context (Carbon Brief)](https://www.carbonbrief.org/ai-five-charts-that-put-data-centre-energy-use-and-emissions-into-context)
