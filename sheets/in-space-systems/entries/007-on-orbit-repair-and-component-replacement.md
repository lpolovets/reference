---
number: 7
name: On-Orbit Repair and Component Replacement
part: 2
group: Servicing missions
orbit: [leo, geo]
scale: [hkg, t]
autonomy: crew
customer: [civ, def]
maturity: demo
---

## Description
On-orbit repair means opening up a spacecraft that is already flying and replacing something inside it. Astronauts have done this well and robots have barely done it at all. The serious record is Hubble: five Space Shuttle missions between 1993 and 2009, all crewed, on a telescope deliberately built to be serviced, with a grapple fixture for the Shuttle arm, handrails, foot restraint sockets, and instruments packaged as orbital replacement units on captive bolts. Servicing Mission 1 in 1993 installed the COSTAR corrective optics and Wide Field and Planetary Camera 2 to compensate for the primary mirror's figure error, and Servicing Mission 4 in 2009 replaced three rate sensor units, all six battery modules, and a fine guidance sensor, and swapped in Wide Field Camera 3, across five spacewalks. SM4 also carried out two repairs nobody had designed for: the Advanced Camera for Surveys and the Space Telescope Imaging Spectrograph were opened and had circuit boards replaced, which meant taking an aluminum front panel off in a pressure suit by removing 111 fasteners of several head types, many of them thread-locked, behind a purpose-built capture plate that trapped each screw as it came free. Robotically the record is much thinner. Japan's ETS-VII flew the first robotic arm on an uncrewed spacecraft in 1997, and DARPA's Orbital Express transferred and installed an orbital replacement unit between two spacecraft in 2007, but those two spacecraft were designed together to make it work.

## Strengths and weaknesses
Repair is the only servicing option that restores capability rather than just extending life, and Hubble is the proof: a telescope that cost roughly $1.5B to build was a partial failure for three years and became the most productive observatory ever flown after one spacewalking crew installed corrective optics. Astronauts are good at this because they diagnose, improvise, and feel what they are doing. The limits are geography and cost. Crew can reach low Earth orbit and nothing else, so every satellite in GEO is out of reach of the only repair method with a track record, and each Shuttle servicing flight cost on the order of $1B. Robotic repair runs into four problems at once: client spacecraft have no grapple fixtures or visual fiducials, their fasteners are staked or lockwired and a single escaped screw becomes debris in a valuable orbit, thermal blankets have to be cut open before anything underneath can be reached, and the operator cannot close a force loop from the ground. Round-trip light time to GEO is about 0.24 s before you add relay hops and ground processing, while contact dynamics need control at tens to hundreds of hertz, so the arm has to be compliant and largely autonomous at the point of contact and the ground can only supervise. That is why every robotic task demonstrated so far was rehearsed for months against a full-scale mockup, and why improvisation is not on the menu.

## When to use
Repair is worth attempting when one spacecraft carries a large share of a mission's value, the failure is a replaceable box rather than a design flaw, and the orbit is reachable. If you are running a large constellation of cheap satellites, replace the failed unit and do not think about repair, because the cost of a servicing mission exceeds the cost of the satellite. If the problem is an empty propellant tank rather than a broken box, buy life extension instead; it is an operational product and repair is not. If you are designing a spacecraft today and want the option later, spend the mass now on a grapple fixture, a few visual fiducials, and captive robot-compatible fasteners over the boxes most likely to fail, because none of that can be added after launch and its absence is what makes unprepared servicing so expensive. And if you are counting on robotic repair at GEO for a business plan, note that no vehicle has performed one yet; the Mission Robotic Vehicle is the first one in position to try.

## Key numbers
Five crewed Hubble servicing missions between 1993 and 2009 · Servicing Mission 4 replaced three rate sensor units, six battery modules, and a fine guidance sensor over five spacewalks · 111 fasteners removed behind a capture plate to reach one STIS circuit board · Hubble built for roughly $1.5B, with each Shuttle servicing flight on the order of $1B · GEO round-trip light time about 0.24 s against contact control loops needing tens to hundreds of hertz · one robotic orbital replacement unit transfer flown, on Orbital Express in 2007

## Examples
Hubble Servicing Mission 1 in 1993 and Servicing Mission 4 in 2009 are the flight record for crewed repair; Japan's ETS-VII in 1997 and DARPA's Orbital Express in 2007 are the robotic ones. The Robotic Refueling Mission experiments on the ISS between 2011 and 2015 used Dextre and custom tools to cut lockwire and work fill and drain valves designed for a technician on the ground, NASA's OSAM-1 would have refueled and relocated the unprepared Landsat 7 before it was canceled in 2024, and Northrop Grumman's Mission Robotic Vehicle carries the first dexterous arms sent to GEO.

## Economic profile
Crewed repair is priced by the ride, and the ride is the whole cost. A Shuttle servicing flight ran on the order of $1B, which was clearly worth it once for a $1.5B telescope that was not working and is not worth it for anything routine. Robotic repair has no price because it has no product: the funded vehicles are government-backed, with DARPA paying for the Mission Robotic Vehicle's arms through RSGS and NASA canceling OSAM-1 in 2024 after cost growth. The cost structure is dominated by non-recurring engineering per task rather than by hardware, since an unprepared repair means designing a tool, building a full-scale mockup, and rehearsing the sequence for months, and none of that amortizes onto the next client unless the next client has the same interface. That is the whole argument for building servicing interfaces into satellites while they are still on the ground, which is the subject of the next entry. Until then the buyers are civil and defense agencies paying for capability demonstrations, there is no commercial repair customer, and the honest read is that this is a research program with two flight results, not a market.

## Videos

- https://www.youtube.com/watch?v=2X0Hghl3SYk — Hubble’s Servicing Mission 1 (NASA Goddard, 5 minutes, 50k+ views)
- https://www.youtube.com/watch?v=xgbUbdC6kbo — Hubble’s Servicing Mission 4 (NASA Goddard, 7 minutes, 10k+ views)

## Further reading

[Astronaut Missions to Hubble (NASA Science)](https://science.nasa.gov/mission/hubble/observatory/missions-to-hubble/) · [Fastener Capture Plate Technology to Contain On-Orbit Debris (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20100021929)
