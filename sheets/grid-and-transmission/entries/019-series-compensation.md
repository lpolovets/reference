---
number: 19
name: Series Compensation
part: 4
group: Substation apparatus
voltage: [ehv]
roles: [bulk, cong, stab]
lead: yr
siting: fence
maturity: mature
---

## Description
A long AC line's capacity is limited by its series inductive reactance, not by how hot the conductor gets. Putting capacitors in series with the line cancels part of that reactance, which shortens the line electrically. Compensating 40% of a line's reactance raises its stable transfer capability by roughly 40–70% and pulls flow onto that line and away from parallel paths. Thyristor-controlled series capacitors add a controllable reactor across part of the bank so the compensation level can be varied in real time, which also damps power oscillations.

## Strengths and weaknesses
It is by far the cheapest way to raise the capability of an existing long line, typically a few percent of the cost of building a parallel circuit, and it fits inside an existing substation. Controlled versions damp inter-area oscillations that would otherwise limit transfers. The risk is subsynchronous resonance: a series-compensated line can exchange energy with the torsional modes of a nearby turbine-generator shaft and, in the worst case, damage it. The 1970 and 1971 Mohave shaft failures in Nevada are the reference cases. Any scheme therefore needs a subsynchronous study, and sometimes filters or protective relaying, before it goes in.

## When to use
Use series compensation on long EHV lines that are stability-limited rather than thermally limited, which describes most 500 kV corridors over about 300 km. It is the standard fix when a line's transfer limit is well below its thermal rating. Check for thermal generation with long shafts near the compensated line and run the subsynchronous study early, since it can rule the scheme out. If the line is thermally limited instead, series capacitors do nothing, and the answers are reconductoring or dynamic ratings.

## Key numbers
Compensation typically 25–70% of line reactance · raises stable transfer capability by roughly 40–70% at 40% compensation · costs a few percent of building a parallel line · thyristor-controlled versions vary compensation within a cycle and damp oscillations · subsynchronous resonance study is mandatory near steam turbine generators.

## Examples
The Kayenta thyristor-controlled series capacitor in Arizona, the first of its type; extensive series compensation on Brazil's north-south interconnection and on Sweden's 400 kV network; the New York Power Authority's Marcy South project; India's 765 kV corridors, most of which are series-compensated.

## Videos

- https://www.youtube.com/watch?v=B7s9ms6BPNE — Series Compensation - Part 1 (Dr Nimal Madhu, 15 minutes, 5k+ views)
- https://www.youtube.com/watch?v=U8o2YBGqq48 — Transmission Line Compensation (The Animated Engineer, 6 minutes, 5k+ views)
- https://www.youtube.com/watch?v=smOqSxFBvVU — Series compensation of long transmission lines [circuit simulator] (Georg Schett, 4 minutes, 5k+ views)

## Further reading

[Technical brochures (CIGRE)](https://www.cigre.org/GB/publications/technical-brochures)
