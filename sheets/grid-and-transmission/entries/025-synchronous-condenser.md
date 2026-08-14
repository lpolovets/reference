---
number: 25
name: Synchronous Condenser
part: 6
group: Stability & grid services
voltage: [hv, ehv]
roles: [volt, stab]
lead: yr
siting: fence
maturity: mature
---

## Description
A synchronous condenser is a large synchronous machine spinning on the grid with no prime mover and no load. Because it is a real rotating mass magnetically locked to system frequency, it supplies three things that power electronics do not naturally provide: inertia, which resists frequency change during the first seconds after a loss of generation; short-circuit current, which relays need in order to see a fault; and continuously variable reactive power, set by field excitation. Many installations are retired generators with the turbine disconnected, which is the cheapest way to get one.

## Strengths and weaknesses
It is the only device on this list that supplies genuine inertia and strong fault current, and it is a hundred-year-old technology with no software behind it. Reactive output is smooth and, unlike a capacitor, does not collapse when voltage sags. The costs are mechanical: it is a spinning machine with bearings, a cooling system, and an excitation system that all need maintenance, and it consumes roughly 1–2% of its rating continuously just to keep turning. Response to a step is fast but not instant, on the order of a hundred milliseconds against a STATCOM's few milliseconds.

## When to use
Add synchronous condensers where a network has retired most of its synchronous generation and now has low inertia and weak short-circuit strength, which is exactly what happened in South Australia and Ireland. They are the standard remedy when converters and relays start misbehaving because the system is too weak. Converting a retiring coal or gas unit is the cheapest route and keeps the interconnection. Do not use them where the need is purely fast reactive support, which a STATCOM does better and cheaper, and be aware that grid-forming inverters now provide part of the same service without a rotating mass.

## Key numbers
Provides real inertia, typically 2–6 MW-seconds per MVA of rating · short-circuit contribution of about 5–6 times rated current, similar to a generator · standing losses roughly 1–2% of rating · response to a voltage step in about 100 ms · converting a retired generator costs far less than a new machine and reuses the interconnection.

## Examples
South Australia's four synchronous condensers with added flywheels, installed after the 2016 system black event; EirGrid's fleet in Ireland, driven by very high wind share; several UK stability contracts that pay for inertia and short-circuit level; retired coal units in the US converted rather than demolished.

## Economic profile
Per MVAr this is one of the most expensive ways to buy reactive power, roughly 8 to 12 times a mechanically switched capacitor bank, and the standing losses of 1–2% of rating are an energy bill that runs every hour for the machine's life. Comparing it per MVAr misses the point, because it is the only device here that also supplies real inertia and 5–6 times rated fault current, and an operator whose relays are misoperating because the system is too weak has no cheaper option. Converting a retiring coal or gas unit costs far less than a new machine and keeps the existing interconnection, which is why so many recent additions are conversions. How it gets paid for varies by market: several UK contracts buy inertia and short-circuit level explicitly, while in the US the cost is more often rate-based by the transmission owner, so it reaches ratepayers rather than a bidder. Grid-forming inverters are the thing that would change these economics, and so far they cover only part of the duty, since at 1.1–1.5 times rated current they do not supply the fault current.

## Videos

- https://www.youtube.com/watch?v=T29D2npCo5A — Synchronous Condensers Are Key To Enabling Renewable Growth - but what are they? (Energy Live News, 12 minutes, 10k+ views)
- https://www.youtube.com/watch?v=UyJ2yQLxH14 — The synchronous condenser: making the use of renewable energies possible at a large scale (VINCI Energies, 3 minutes, 1k+ views)
- https://www.youtube.com/watch?v=2dWHzPHvGHY — Synchronous Condenser | Siemens Synchronous Condenser Application for System Inertia & Short Circuit (Power System Operation Slides, 13 minutes, 10k+ views)

## Further reading

[Long-Term Reliability Assessment (NERC)](https://www.nerc.com/globalassets/our-work/assessments/nerc_ltra_2025.pdf) · [2023 Inertia Report (Australian Energy Market Operator)](https://www.aemo.com.au/-/media/files/electricity/nem/security_and_reliability/system-strength-requirements/2023-inertia-report.pdf)
