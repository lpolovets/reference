---
number: 35
name: PUE & WUE
part: 7
group: Racks & operations
density: [low, ext]
where: [hyper, colo, ent, edge]
water: low
retrofit: drop
maturity: mature
---

## Description
Power usage effectiveness is total facility energy divided by IT energy. A PUE of 1.5 means half a watt of overhead for every watt of computing. Water usage effectiveness is the same idea in liters per kilowatt-hour of IT load. Both are ratios, which is their strength and their weakness: they compare a facility against itself over time honestly, and they compare two facilities against each other only if measured the same way, at the same boundary, over the same period.

## Strengths and weaknesses
PUE drove a genuine decade of improvement, because it gave operators one number to manage and a clear target. It is easy to measure once the metering exists, and annualized PUE is hard to game. The weaknesses are what it excludes. PUE says nothing about whether the IT is doing useful work, so replacing servers with more efficient ones makes PUE worse while cutting total energy. It ignores water entirely, which is why WUE exists and why a site can improve PUE by moving to evaporative cooling while making its water position worse. Industry average PUE has been flat near 1.5 for six years.

## When to use
Measure annualized PUE and WUE at consistent boundaries and use them to track your own facility. Do not use them to rank facilities in different climates, and do not let a PUE target drive a decision that raises total resource use. For anything about compute efficiency, use a work-per-energy measure instead, since PUE deliberately says nothing about it. When comparing vendor claims, ask what was included, over what period, and at what load, because a design-day figure at full load is a different number from an annualized one.

## Key numbers
PUE is total facility energy divided by IT energy; WUE is liters of water per kWh of IT energy · industry weighted average PUE was about 1.54 in 2025, roughly unchanged for six years · large hyperscale sites report trailing PUE around 1.1 · a partly loaded facility has a worse PUE than the same facility at full load · annualized measurement is the only fair basis for comparison.

## Examples
The Green Grid's original PUE definition and its later standardization in ISO/IEC 30134; Google's published fleet-wide trailing PUE, among the lowest reported; Uptime Institute survey data showing the industry average stalled; European regulations now requiring reporting of both energy and water for large facilities.

## Videos

- https://www.youtube.com/watch?v=DQ-SVFxE8lE — What is PUE? - Data Center Efficiency (FLUIXAI, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=4guq_7MDXAU — What is PUE, Why Important ? Power Usage Effectiveness Explained | Data Center Efficiency Simplified (Cyber Project Manager EN, 5 minutes, under 1k views)
- https://www.youtube.com/watch?v=gIekA9-suAM — What is PUE Final (lknoxie7, 5 minutes, 1k+ views)

## Further reading

[Power usage effectiveness (Google Data Centers)](https://datacenters.google/efficiency/) · [Electrical Efficiency Measurement for Data Centers, White Paper 154 (Schneider Electric)](https://download.schneider-electric.com/files?p_File_Name=NRAN-72754V_R2_EN.pdf&p_Doc_Ref=SPD_NRAN-72754V_EN)
