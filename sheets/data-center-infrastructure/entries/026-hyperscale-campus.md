---
number: 26
name: Hyperscale Campus
part: 6
group: Facility & siting
density: [med, ext]
where: [hyper, ai]
water: med
retrofit: new
maturity: mature
---

## Description
A hyperscale campus is a purpose-built site of several buildings, each 30–150 MW, sharing a substation, a water supply, and a security perimeter. Design is standardized and repeated: the same hall, the same electrical block, the same mechanical arrangement, built again and again so construction becomes a manufacturing exercise rather than a bespoke project. The operator owns the compute, so the building can be optimized against its own hardware rather than against a generic tenant specification.

## Strengths and weaknesses
Repetition drives everything good about it: cost per megawatt falls, construction schedules compress to 12–24 months per building, and operating practice transfers between sites. Because the operator controls the IT, it can run hot aisle containment at aggressive set points, standardize on one cooling architecture, and design power around its own rack specification. The downsides are concentration and inflexibility. A campus is a very large bet on one location's power, water, and politics, and a standardized design that assumed 30 kW racks is expensive to convert when the next generation needs 130 kW.

## When to use
This model belongs to operators with enough demand to fill several buildings and enough control over the hardware to design for it. If you are that buyer, the leverage comes from standardizing early and building repeatedly, and from securing power and water before land. If you are not, colocation or a build-to-suit lease gets similar economics without the balance sheet. The genuine risk to plan for is generational: assume the density specification will change during the campus's life, and pipe for liquid cooling even where the first buildings do not need it.

## Key numbers
Individual buildings typically 30–150 MW, campuses 100 MW to over 1 GW · construction of 12–24 months per building once the design repeats · standardized design cuts cost per MW substantially against bespoke construction · US data center electricity reached about 176 TWh in 2023 and is projected to roughly double or triple by 2028 · retrofitting a hall designed for air to liquid is a major cost.

## Examples
Meta's Prineville and Odense campuses; Microsoft's Boydton and San Antonio sites; the Amazon campus in Indiana built for Anthropic workloads; Google's Council Bluffs campus, one of the largest single sites in the US.

## Economic profile
Hyperscale economics come from repetition and from owning the whole stack, so a saved dollar per watt shows up dozens of times. The dominant risk has shifted from construction to inputs: power availability, transformer lead time, and now GPU supply set the schedule, not concrete. That is why operators are signing power purchase agreements and reserving equipment years ahead, and why "powered land" trades at a premium over ordinary industrial land.

## Videos

- https://www.youtube.com/watch?v=80aK2_iwMOs — Microsoft reveals its MASSIVE data center (Full Tour) (CNET Highlights, 4 minutes, 500k+ views)
- https://www.youtube.com/watch?v=vnGC4YS36gU — No Nvidia Chips Needed! Amazon’s New AI Data Center For Anthropic Is Truly Massive (CNBC, 17 minutes, 1m+ views)
- https://www.youtube.com/watch?v=HkOG_nFYosk — The Full Tour: Wisconsin’s First Hyperscale Data Center Construction (RCNFRD, 22 minutes, 1k+ views)

## Further reading

[2024 United States Data Center Energy Usage Report (Berkeley Lab)](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf) · [Key Questions on Energy and AI (IEA)](https://iea.blob.core.windows.net/assets/3179f7f8-01f6-4dd6-bffa-c9f7b73f1dc9/KeyQuestionsonEnergyandAI.pdf)
