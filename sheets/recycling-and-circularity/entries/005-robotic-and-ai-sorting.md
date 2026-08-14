---
number: 5
name: Robotic and AI Sorting
part: 1
group: Collection & sorting
output: closed
economics: thin
feed: dirty
drivers: [val, reg]
maturity: scale
---

## Description
A robotic sorting cell is a camera over a belt, a neural network that labels every object it sees, and a delta or gantry robot with a suction gripper that reaches down and drops the targets into chutes. The vision stack usually pairs an RGB line-scan camera with a near-infrared sensor, because color, shape and printed branding identify a format while the spectrum identifies the polymer. A cell picks 60–80 items a minute in normal operation, with the fastest two-arm units quoted up to 120, against 30–40 a minute for a person who cannot hold that rate across a full shift. Installed cost is roughly $200,000–400,000 a cell, or about $5,000–7,000 a month under a robots-as-a-service contract. The difference from an air-jet optical sorter is that the robot picks individual objects rather than ejecting a whole class, which is what makes it useful on quality-control lines and on residue where the target is a small share of a dirty stream.

## Strengths and weaknesses
Robotic cells fit the two places air jets do not: the end-of-line quality check, where a handful of items have to come out of an almost-clean flow, and the residue line, where the target is a few percent of what passes. They also produce a per-item record of everything that went by, which is the first real composition data most MRFs have ever had and is directly useful for extended producer responsibility reporting. The binding limit is pick rate. A belt carrying 4 tons an hour of containers presents thousands of items a minute, and a cell touching 70 of them is a cleanup device rather than a bulk sorter. Uptime is the second limit and the one that decides the money: suction cups wear and foul on film and liquid, wet cardboard and tangled material defeat the gripper, and a jam stops the cell entirely. Recognition accuracy is the number vendors lead with and the least binding of the three, because moving a model from 95% to 99% changes bale purity slightly while a cell running six hours of a ten-hour shift changes whether the capital comes back at all.

## When to use
Put the first cell on quality control, where the item count per minute is closest to what a robot can actually pick, and where a small purity gain moves a whole bale into a higher grade. Add a second on the residue line only after the composition data shows recoverable material at more than roughly 5% of that stream. Do not buy a robot for a job an air-jet sorter does: if the target is a large share of the stream by count, an optical sorter at $150,000–400,000 handles far more tons per dollar. Justify the purchase on labor you cannot hire rather than on purity, since sorter turnover above 100% a year is normal and an unfilled position is a line running slower. When you evaluate a vendor, ask for picks per hour over a month of real production and the uptime that produced it, and treat benchmark accuracy figures as the least informative number in the quote.

## Key numbers
Pick rate 60–80 items a minute typical and up to 120 quoted, against 30–40 for a person · installed cost roughly $200,000–400,000 a cell, or $5,000–7,000 a month as a service · fully loaded US sorter position $35,000–55,000 a year, so $70,000–110,000 across two shifts · derived simple payback 2–4 years at high uptime · published techno-economics put AI-based sortation at $28.7 a tonne against $28.0 for optical sortation · sorter turnover above 100% a year is normal

## Examples
AMP Robotics cells in US MRFs, plus the company's own secondary sortation facilities built around them; Machinex SamurAI, sold as a retrofit onto an existing sorting line; ZenRobotics, the Finnish system now owned by Terex, which started on construction and demolition waste; Recycleye, Glacier and EverestLabs selling cells and the composition data that comes with them.

## Economic profile
The case rests on labor arithmetic that is easy to check and easy to get wrong. A fully loaded US sorter position costs $35,000–55,000 a year, and a two-shift plant staffs each position twice, so removing one position saves $70,000–110,000 a year. Against $200,000–400,000 for an installed cell that is a simple payback of roughly two to four years, derived here rather than quoted, and it holds only at high uptime, because annual picks scale directly with hours run. Robots-as-a-service at $5,000–7,000 a month works out to $60,000–84,000 a year, which is close to one two-shift position, so the vendor has priced the cell at the labor it displaces and taken the downtime risk onto its own balance sheet. That pricing is a fair signal of where the margin sits. Published techno-economic work on AI-driven municipal waste sortation puts it at $28.7 a tonne against $28.0 for optical sortation, meaning the cost per ton is roughly a wash and the argument has to be won on output purity feeding downstream processing, not on cheaper sorting. The composition data is a real second revenue line for producer responsibility reporting and commodity negotiation, and it is the part of the offering that does not depend on the gripper working.

## Videos

- https://www.youtube.com/watch?v=HUW2WIBVUJk — How Robots Could Save $6+ Billion Worth Of Recyclables A Year | AI In Action (Business Insider, 11 minutes, 1m+ views)
- https://www.youtube.com/watch?v=0uZbZbxfIx0 — SamurAI™ Robotic Sorter in Single Stream Recycling Facilities (MachinexInc, 2 minutes, 1k+ views)

## Further reading

[Artificial intelligence-driven municipal solid waste sortation and its significance on downstream waste valorization in the United States: Techno-economic and life cycle assessment (Resources, Conservation and Recycling)](https://www.osti.gov/servlets/purl/3028285) · [ZeroWaste Dataset: Towards Deformable Object Segmentation in Cluttered Scenes (arXiv)](https://arxiv.org/abs/2106.02740)
