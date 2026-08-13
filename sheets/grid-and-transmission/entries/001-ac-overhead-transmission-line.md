---
number: 1
name: AC Overhead Transmission Line
part: 1
group: Overhead lines
voltage: [hv, uhv]
roles: [bulk, cong]
lead: yr5
siting: row
maturity: mature
---

## Description
The overhead AC line is how almost all bulk power moves: bare aluminum conductors strung between insulator-hung structures, using air as the insulation. Voltage is what makes it work. Power is volts times amps, and losses go as current squared, so a 765 kV line carries several times the power of a 345 kV line on similar conductors with a fraction of the loss per MW. A single 765 kV circuit moves roughly 2–4 GW. Everything else in this sheet exists because an overhead line is either not enough, not allowed, or not possible.

## Strengths and weaknesses
Nothing is close on cost per MW-mile, air self-heals after a flashover, and a damaged line can be repaired in days. Capacity scales with voltage, so the same corridor can be uprated later. The weaknesses are all about the corridor rather than the wire. AC power flow follows impedance rather than contracts, so power takes unscheduled paths through neighboring systems; series reactance limits how much a long AC line can carry well below its thermal rating; and a new right of way needs agreement from every landowner and jurisdiction it crosses. Losses run roughly 2–4% per 1,000 km at 765 kV, higher at lower voltage.

## When to use
Default to overhead AC for anything on land under about 600 km. It is cheaper, faster, and more repairable than any alternative, and the whole protection and operations toolkit already assumes it. Reach past it in three situations: when the route is longer than roughly 600 km, where HVDC's lack of reactive charging current wins; when the line has to cross water or dense city, where cable is the only option; and when you cannot get a new corridor, which is the common case in the US, and where reconductoring an existing line usually beats a new one. If the project schedule assumes a greenfield right of way in under seven years, check the assumption before anything else.

## Key numbers
Common classes 138, 230, 345, 500, and 765 kV, with 800–1,100 kV UHV in China and India · a 765 kV circuit carries roughly 2–4 GW · losses about 2–4% per 1,000 km · roughly $2–6M per mile for a 500 kV double-circuit line in the US, higher in difficult terrain · right of way 45–60 m wide at EHV · typical development-to-energization 7–12 years, most of it permitting.

## Examples
The 765 kV AEP network in the eastern US, the highest AC voltage in commercial North American service; State Grid's 1,000 kV UHV AC lines in China; the TransWest Express and Grain Belt Express projects, both of which took over a decade to permit; the Ten West Link, whose schedule was set by federal land review rather than construction.

## Economic profile
Cost per MW-mile falls with voltage, which is why utilities standardize on a few classes and build the highest one the load justifies. What has changed is that construction is no longer the long pole. On a typical US project, engineering and construction take two to four years and siting, permitting, and litigation take five or more, so the interest cost of the delay can rival the steel. That imbalance is the reason reconductoring and dynamic ratings have become interesting: they buy capacity inside a corridor that is already approved.

## Videos

- https://www.youtube.com/watch?v=qjY31x0m3d8 — How do Electric Transmission Lines Work? (Practical Engineering, 10 minutes, 1m+ views)
- https://www.youtube.com/watch?v=R_Z-A9KZr58 — How do transmission lines work (50Hertz Transmission GmbH, 3 minutes, 500k+ views)

## Further reading

[National Transmission Needs Study (US Department of Energy)](https://www.energy.gov/oe/national-transmission-needs-study) · [Long-Term Reliability Assessment (NERC)](https://www.nerc.com/globalassets/our-work/assessments/nerc_ltra_2025.pdf)
