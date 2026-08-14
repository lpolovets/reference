---
number: 19
name: Fission Surface and Space Power
part: 4
group: Power generation & storage
orbit: [cis, surf]
scale: [t, ht]
autonomy: ground
customer: [civ, def]
maturity: planned
---

## Description
A fission surface power system is a small reactor that makes tens of kilowatts of electricity continuously, regardless of sunlight. NASA's specification for the lunar unit is at least 40 kWe for ten years under about 6,000 kg of launch mass, which works out to 150 kg per kilowatt, or roughly 7 W/kg. The design approach that came out of NASA's Compass studies is a heat-pipe reactor fueled with high-assay low-enriched uranium and moderated with yttrium hydride, coupled to free-piston Stirling convertors and deployable radiators derived from ISS hardware, with power sent to the users at ±2,800 VDC over about a kilometer so the reactor's radiation shadow does not have to cover the base. Conversion runs around 25–30%, so 40 kWe means roughly 140–160 kW of reactor heat and radiators sized to shed three to four times the electrical output. The only US space reactor ever flown was SNAP-10A in 1965; the closest recent hardware is KRUSTY, a 2018 ground test at Nevada that ran a real fission core against Stirling convertors for 28 hours. This entry is about the power system as a mission element; the reactor physics and the terrestrial microreactor lineage are covered by Space & Heat-Pipe Reactors on the nuclear reactors sheet.

## Strengths and weaknesses
The case for it is one piece of arithmetic that nothing else answers. A lunar night is 354 hours, so carrying a 40 kW load through it on batteries takes 40 kW times 354 hours, or 14,160 kWh; at 100 Wh/kg of pack that is about 142 tonnes, and even at a full depth of discharge nobody would allow. The reactor is roughly 6 tonnes for the same job, which is a factor of about 24 on mass, and the gap widens as the load grows because a reactor's mass scales far better than a battery's. Against that, three weaknesses are real. Nothing in this class has flown, so every performance number is an analysis rather than a measurement. The radiators are large and have to deploy, which puts a single-point failure on the heat rejection path rather than on the reactor. And launch authorization is a schedule item measured in years: under the 2019 presidential memorandum on launching space nuclear systems, a low-enriched fission system falls in Tier II, which requires a mission safety analysis report and an Interagency Nuclear Safety Review Board evaluation before the agency head can authorize, while anything not low-enriched falls in Tier III and needs the President's own authorization. That distinction is why the current designs are built around HALEU rather than the highly enriched uranium a compact reactor would otherwise prefer.

## When to use
Choose fission when you need kilowatts continuously through a long dark period and the load is above a few kilowatts, which on the Moon means anything past a small science station and certainly means in-situ resource production. Below about 1 kW, radioisotope units in entry 18 are simpler and have flight heritage, though the plutonium supply may not have a unit for you. Between those, run the battery arithmetic honestly at the depth of discharge you can defend and see where the crossover lands for your night length and load; on the Moon it usually falls in the low single-digit kilowatts. If you pick fission, budget the launch approval from the start rather than treating it as paperwork, and design to Tier II by using low-enriched fuel unless there is a compelling reason not to. Check the radiator layout early as well, because at 25–30% conversion the heat rejection hardware is physically larger than the reactor and it is what constrains where the system can sit.

## Key numbers
At least 40 kWe for ten years under about 6,000 kg, which is 150 kg per kilowatt or roughly 7 W/kg · 25–30% Stirling conversion, so 140–160 kW of reactor heat and radiators shedding three to four times the electrical output · 354-hour lunar night, so 14,160 kWh for a 40 kW load and about 142 tonnes of battery at 100 Wh/kg, a factor of about 24 on mass (derived here) · power distributed at ±2,800 VDC over about a kilometer · KRUSTY ran 28 hours in 2018; SNAP-10A in 1965 is the only US space reactor flown · low-enriched systems in Tier II of the 2019 launch authorization memorandum, everything else in Tier III

## Examples
NASA and the Department of Energy selected three fission surface power design concepts in June 2022, from teams led by Lockheed Martin, Westinghouse, and Intuitive Machines with X-energy, targeting a lunar demonstration in the early 2030s. KRUSTY, run at the Nevada National Security Site in 2018, is the ground demonstration the concepts descend from. Historic flight hardware is Soviet: about thirty BES-5 reactors on RORSAT ocean surveillance satellites, and two TOPAZ units flown in 1987.

## Economic profile
This is a government program with no commercial buyer, and the first-unit cost is not public. The design concept awards were roughly $5M each for twelve months of work, which is study money rather than build money, and the real cost lands when someone funds fuel fabrication, a ground qualification article, and a nuclear-certified launch campaign. The value case is easiest to see from the alternative. Delivering 142 tonnes of battery to the lunar surface at CLPS task-order prices of $0.5–1.2M/kg is $70–170B, which is several years of NASA's entire budget, so past a few kilowatts of continuous night load there is no competing option at any price. That does not make a reactor cheap, only unavoidable, and the history of this field is that programs die before flight rather than over budget: SP-100 was canceled in 1994, Prometheus in 2005, and DRACO wound down in 2025. The exposure an investor can actually buy is in the supply chain rather than the mission, since HALEU fuel fabrication, refractory cladding, Stirling convertors, and compact shielding all cross over into terrestrial microreactors, and that crossover is where the same components have a second customer.

## Videos

- https://www.youtube.com/watch?v=0TL7eUh4yuI — NASA's New Space Reactor Is Powered by Nuclear Fission (Seeker, 7 minutes, 1m+ views)
- https://www.youtube.com/watch?v=RWL2efggMY0 — Why We’re Putting Nuclear Reactors on the Moon (StarTalk, 15 minutes, 1m+ views)

## Further reading

[A Deployable 40 kWe Lunar Fission Surface Power Concept (NASA)](https://ntrs.nasa.gov/citations/20220004670) · [Presidential Memorandum on Launch of Spacecraft Containing Space Nuclear Systems (The White House)](https://trumpwhitehouse.archives.gov/presidential-actions/presidential-memorandum-launch-spacecraft-containing-space-nuclear-systems/)
