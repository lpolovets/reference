---
number: 23
name: Additive Manufacturing on Orbit
part: 5
group: In-space assembly
orbit: [leo]
scale: [kg, hkg]
autonomy: crew
customer: [civ, com]
maturity: demo
---

## Description
Additive manufacturing on orbit means running a 3D printer inside a spacecraft so the crew can make a part instead of waiting for one to be launched. The physics is friendly, because fused-filament printing holds its melt with surface tension and bonds each layer by conduction, neither of which needs gravity, so the hard parts are the housekeeping: the machine has to be sealed against fumes in a closed cabin, fit a rack, and run on a few hundred watts. Made In Space flew the first one to the ISS in 2014 inside the Microgravity Science Glovebox, with a build volume of 6 cm by 12 cm by 6 cm, and it printed 55 acrylonitrile butadiene styrene parts between 2014 and 2016. The demonstration everyone remembers is the ratchet wrench of December 2014: designed on the ground, reviewed and approved in under a week, uplinked as a file, and printed in four hours as 104 layers, 11.4 cm long. It was then returned to Earth for testing rather than used. Redwire's Additive Manufacturing Facility replaced it in 2016 as a commercial service with a 14 cm by 10 cm by 10 cm build volume in ABS, high-density polyethylene, and PEI-PC, and it is still operating. Metal arrived much later: ESA's Airbus-built Metal 3D Printer was installed in Columbus in January 2024, melts stainless steel wire with a near-infrared laser, and its first complete sample came back to Earth in February 2025 to be cut apart and compared against an identical part printed on the same machine before launch.

## Strengths and weaknesses
The real product is schedule, not mass. A design file weighs nothing and arrives in minutes, where the same part on a cargo flight waits for a resupply slot months out, and that is genuinely useful for the long tail of small non-structural items nobody thought to manifest. It is also cheap to try, since a printer is a locker-sized box rather than a vehicle. The weaknesses are that the build volumes are small, the material list is short, and no printed part has yet been qualified and installed as a flight-critical spare, so the demonstrated capability is tools, clips, brackets, and containers. Feedstock still launches from Earth, which means the mass saving only exists if you print fewer spares than you would otherwise have flown, and nobody has shown that on a real manifest. The interesting version is closing the loop by turning the station's plastic waste back into filament, and that has been tried once: Tethers Unlimited's Refabricator went up in 2019 to recycle ULTEM 9085 parts into feedstock, hit an anomaly in the recycling system at startup, and never met its objectives.

## When to use
If you are provisioning a crewed vehicle in low Earth orbit with regular resupply, a printer is worth its rack space for the tail of the spares list, not for the items you already know you need. Print tools, jigs, containers, and adapters; do not plan on printing anything structural, pressure-bearing, or in the load path until someone has qualified one, which has not happened. If you need metal, treat it as a technology demonstration and not a supply chain, since exactly one metal printer has flown and it produced test coupons. If the mission is Mars or a long lunar stay where resupply is not an option, the calculation flips, because the value of a part you cannot otherwise get is unbounded. And if you are funding this area for the mass benefit rather than the schedule benefit, fund recycling rather than printing, because feedstock from Earth is what caps the saving and the one recycler flown so far failed at startup.

## Key numbers
First ISS printer 2014, build volume 6 cm by 12 cm by 6 cm, 55 ABS parts printed 2014–2016 · ratchet wrench designed and approved in under a week, printed in four hours as 104 layers, 11.4 cm long, then returned to Earth · Additive Manufacturing Facility from 2016, 14 cm by 10 cm by 10 cm, ABS, HDPE, and PEI-PC · ESA metal printer installed January 2024, stainless steel wire melted by laser, first sample returned February 2025 · Refabricator flown 2019 to recycle ULTEM 9085 into filament, anomaly at startup · NASA prices ISS upmass to commercial users at $20,000/kg

## Examples
Made In Space's 3D Printing in Zero-G demonstration in 2014 and the ratchet wrench that followed it; Redwire's Additive Manufacturing Facility, on the ISS since 2016 and sold as a commercial print service; Tethers Unlimited's Refabricator in 2019; Redwire Regolith Print in 2021, which extruded a regolith simulant and thermoplastic blend but hit production problems that stopped the returned coupons being analyzed; ESA and Airbus's Metal 3D Printer in Columbus from 2024; and OSAM-2, formerly Archinaut One, which would have printed a 10 m and a 6 m beam outside the spacecraft before it was canceled.

## Economic profile
This is a small business dressed as a large one. The Additive Manufacturing Facility is a commercial service with a price list, but the customers are NASA, the ISS National Lab, and researchers, so the money is agency money routed through a commercial operator. The mass arithmetic does not carry it on its own: NASA prices ISS upmass to commercial users at $20,000/kg, so a 50 g printed bracket displaces about $1,000 of cargo, which will not repay a rack, a crew procedure, and a qualification campaign. What can repay it is avoiding a whole resupply slot for a mission-stopping small part, and that value shows up rarely and unpredictably, which makes it hard to underwrite. The clearest commercial path is not printing at all but recycling, since feedstock launched from Earth caps every mass saving and station packaging waste is already up there and free. Until someone flies a working recycler and installs a printed part in a critical position, the honest read is that on-orbit printing saves a resupply slot rather than enabling anything that was previously impossible.

## Videos

- https://www.youtube.com/watch?v=ZQ3y8U6Fbd4 — Made in Space: 3-D Printing Could Change the Way Astronauts Travel | Short Film Showcase (National Geographic, 9 minutes, 50k+ views)
- https://www.youtube.com/watch?v=ir_SLjykvRE — How This Next Generation Satellite Will 3D Print Itself in Space (Seeker, 6 minutes, 100k+ views)

## Further reading

[Space Station 3-D Printer Builds Ratchet Wrench To Complete First Phase Of Operations (NASA)](https://www.nasa.gov/missions/station/space-station-3-d-printer-builds-ratchet-wrench-to-complete-first-phase-of-operations/) · [A close-up look at the first metal part made in space (ESA)](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/A_close-up_look_br_at_the_first_metal_br_part_made_in_space)
