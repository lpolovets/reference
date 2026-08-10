---
number: 14
name: Mass-produced constellation bus
part: 3
group: Constellation buses
orbits: [leo, sso]
mass: [small, med]
buyer: [com, def]
maturity: service
cost: low
---

## Description
A constellation bus is a spacecraft designed around the production line rather than around the mission. The satellite is flat so it stacks without a dispenser, the harness and avionics are simplified to cut touch labor, parts are commercial or automotive grade instead of rad-hard, and the design is frozen for a production block and then revised in place, the way a car model gets a facelift. SpaceX's IPO filing put the Redmond line at about 70 Starlink satellites a week between December 2025 and April 2026, which is roughly 3,600 a year, and the current V2 Mini is a 740–800 kg spacecraft. The consequence for engineering is that reliability targets move from the unit to the fleet: you accept a five-year design life, expect to lose a percentage every year, and design the constellation so losing any one satellite is invisible to users. Roughly 12,600 Starlink satellites had been launched by August 2026 against about 10,900 still on orbit, which is the same statement expressed as attrition.

## Strengths and weaknesses
Building at rate is the only way to field thousands of satellites, and it drops unit cost by an order of magnitude compared with a bespoke bus. It also compresses technology cycles: a line that turns over its whole fleet every five years can put a new generation on orbit while a traditional program is still in critical design review. The weaknesses are the mirror image. Per-unit reliability is genuinely lower, so a design flaw discovered on orbit is a flaw in hundreds of satellites at once and the only fix is to build the next block differently. Commercial parts limit you to benign radiation environments, which is why this approach works in LEO and not at 20,000 km. And the failure mode that gets missed in business plans is not a satellite failing, it is the line stopping: a constellation with an idle factory is a depreciating asset with a hard expiry date.

## When to use
Choose a production-line bus when the mission needs more than roughly a hundred spacecraft and the value comes from coverage, revisit, or capacity rather than from any individual satellite's capability. That means broadband, data transport meshes, proliferated missile tracking, and high-revisit sensing. Do not use it for anything that needs a large aperture, high radiation tolerance, or a 15-year life, because the design choices that make the line fast are the ones that cap those. The financial test is whether you can fund the steady state, not the first build: if the constellation is 6,000 satellites on a five-year life, you need to produce and launch about 1,200 satellites a year forever, and a plan that treats deployment as a one-time capital event has understated the business by a large multiple. If the fleet is under about 50 spacecraft, buy a merchant small satellite bus instead; the line will never pay for itself.

## Key numbers
Starlink V2 Mini launch mass roughly 740–800 kg · about 70 satellites a week off the Redmond line from December 2025 to April 2026, near 3,600 a year · roughly 12,600 Starlink satellites launched all-time against about 10,900 on orbit in August 2026 · five-year design life · SDA Transport Layer vehicles averaging about $14M on Tranche 1 and about $21.5M on later awards · a 6,000-satellite fleet on a five-year life needs about 1,200 replacements a year.

## Regulatory and spectrum
License milestones turn directly into a manufacturing schedule, which is the regulatory fact that matters most here. An FCC NGSO authorization requires 50% of the authorized satellites on orbit within six years of grant and 100% within nine, and the ITU's milestone regime under Resolution 35 requires 10% of the system deployed within two years of the end of the seven-year bringing-into-use period, 50% within five years, and 100% within seven, with a missed milestone capping the recorded assignment at the number actually flown. So a 3,000-satellite filing is a commitment to a build rate before it is a commitment to a market. Disposal is the other per-unit cost: the FCC's 2022 rule expects LEO satellites to be gone within five years of mission end, so every spacecraft carries deorbit propellant and every unit cost includes it. US government constellations sidestep the FCC entirely, since federal systems get their spectrum through NTIA rather than a commercial license, which trades milestone pressure for appropriations risk.

## Examples
SpaceX's Starlink line in Redmond, Washington; Amazon Leo's production facility in Kirkland; Airbus OneWeb Satellites in Florida, which built roughly 650 spacecraft for the OneWeb constellation; the Space Development Agency's Transport Layer, with more than 60 Tranche 1 vehicles on orbit by July 2026 from York Space Systems, Lockheed Martin, Northrop Grumman, and Rocket Lab, and a 2026 award of about $1.5B to Lockheed and Northrop for 72 more; and China's Guowang and Qianfan constellations, which are scaling their own lines.

## Economic profile
Unit cost falls with cumulative volume, but the learning curve is shallower on government programs than commercial ones because requirements churn: SDA's Transport Layer averaged roughly $14M per space vehicle on Tranche 1 and about $21.5M on later awards, against a program goal near $15M. The structural feature investors most often miss is that replacement capex never stops, so the right way to model a constellation is as a factory with a depreciating installed base rather than as infrastructure that gets built once. That in turn explains the vertical integration: if you own the launch vehicle, the satellite line, and the user terminal, the recurring cost of standing still is yours to compress, and if you rent any of them, someone else prices your steady state. When diligencing a constellation, the questions worth asking are what a marginal satellite costs today, how that has moved over the last hundred units, and what the launch cost per satellite is at the current stacking density.

## Videos

- https://www.youtube.com/watch?v=sGcptyp9LJY — The Spacecraft Assembly Line (SSPIVideo, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Kx5nF3rKd_A — Airbus OneWeb Satellite Manufacturing (Clark Lindsey, 1 minute, 10k+ views)

## Further reading

[Key Technology, Programmatic Drivers, and Lessons Learned for Production of Proliferated Small Satellite Constellations (Small Satellite Conference)](https://digitalcommons.usu.edu/smallsat/2019/all2019/263/) · [Satellite Constellations 2026 - Survey, Trends and Economic Viability (Small Satellite Conference)](https://digitalcommons.usu.edu/smallsat/2026/all2026/53/)
