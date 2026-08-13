---
number: 21
name: Protective Relaying
part: 5
group: Protection & control
voltage: [lv, uhv]
roles: [prot]
lead: fast
siting: fence
maturity: mature
---

## Description
Protective relays decide, in milliseconds, whether what they are measuring is a fault and which breaker should open. On transmission lines the workhorse is distance protection, which computes apparent impedance from voltage and current: a fault looks like a much lower impedance than load, and how low tells the relay roughly how far away it is. Differential protection compares current in against current out of a transformer, bus, or line, and trips on any difference. Overcurrent protection, the oldest scheme, simply trips above a threshold with a time delay that coordinates with devices downstream.

## Strengths and weaknesses
Modern microprocessor relays are cheap for what they do, self-monitoring, and pack line protection, metering, fault recording, and communications into one box. They are the reason a modern grid clears a fault in three cycles. The difficulty is coordination rather than hardware. Settings must trip for every fault in a zone and never for anything outside it, across all system configurations, and a large utility maintains tens of thousands of settings files. Inverter-based resources break assumptions built into these schemes: they contribute little fault current, and their current is controlled by software rather than by physics, so distance elements can under-reach or misjudge direction.

## When to use
Protection is not optional, so the real choices are scheme and communications. Use line differential where a fiber channel exists between the two ends, since it is the most selective and fastest scheme available. Use distance protection with a communications-assisted trip where fiber is not available end to end. Reserve plain time-overcurrent for radial distribution. Wherever a line terminates near a large inverter-based plant, re-study the settings rather than reusing them, because that is where the recent misoperation reports cluster.

## Key numbers
Fault clearing in two to three cycles, roughly 40–50 ms, including breaker time · distance relays typically set with a zone 1 reaching 80–90% of line length · line differential needs a fiber channel with sub-10 ms latency · inverter-based resources contribute roughly 1.1–1.5 times rated current against 5–6 times for a synchronous machine · a large utility manages tens of thousands of settings files.

## Examples
The SEL-421 and equivalent transmission-class relays that define current practice; NERC's disturbance reports on inverter-based resource misoperation in the Western Interconnection, which drove new performance requirements; digital substations where relays exchange sampled values over Ethernet rather than copper.

## Videos

- https://www.youtube.com/watch?v=DiHJ9ehpbNg — Protective relay basics | Eaton PSEC (Eaton, 10 minutes, 10k+ views)
- https://www.youtube.com/watch?v=CNbaxtxCnNQ — F1 Distance Protection: Basics (iMooX at, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=kTm-LrvdnBk — Distance Protection of Transmission Lines | Example Using the SEL-421 Protection Relay (Romero Engineering Company, 19 minutes, 10k+ views)

## Further reading

[Reliability Guideline: BPS-Connected Inverter-Based Resource Performance (NERC)](https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/irpwg/inverter-based_resource_performance_guideline.pdf)
