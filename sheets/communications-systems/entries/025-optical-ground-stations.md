---
number: 25
name: Optical Ground Stations
part: 5
group: Free-space & specialized
reach: [long, global]
capacity: [gbps]
medium: laser
latency: low
maturity: early
---

## Description
An optical ground station is the earth end of a space laser link: a telescope of roughly 0.4–1.5 m aperture on a fast mount inside a dome, a beacon laser that gives the spacecraft something to point at, a wavefront correction stage, and a receiver that is either photon-counting or coherent. The spacecraft terminal is a different problem and is covered on the space launch and satellites sheet under optical crosslinks and laser downlinks; the ground station's job is to undo the atmosphere. That atmosphere causes two separate failures with two separate fixes. Turbulence scrambles the wavefront, so the focused spot is a moving speckle pattern several times wider than the diffraction limit and only a few percent of the light couples into the single-mode fiber a coherent receiver needs. Cloud is worse and simpler: water is opaque at 1,550 nm, so a covered sky gives no link at all rather than a degraded one, and no amount of transmit power changes that. Everything else about station design follows from those two facts. The other reason operators are building them is feeder links: replacing the farm of Ka-band gateway antennas behind a very-high-throughput satellite with optical uplinks is how the industry expects to reach terabit-scale gateway capacity, and that is a ground-segment project rather than a spacecraft one.

## Strengths and weaknesses
The reason to build one is throughput per contact. NASA's Laser Communications Relay Demonstration runs each of its two optical space terminals at up to 1.2 Gbps, and the TBIRD experiment downlinked at 200 Gbps from a 6U CubeSat, rates no X-band or Ka-band pass approaches, and none of it needs a spectrum license or an ITU filing. Adaptive optics handles the turbulence well: a wavefront sensor and deformable mirror running at kilohertz rates raise single-mode fiber coupling from a few percent toward 30–50% and cut the depth of the fades. Clouds have no equivalent fix, and one site at a good high dry location gets only about 60–80% cloud-free line of sight over a year. Turbulence also has a schedule, strongest around local noon and weakest near sunrise and sunset, and it grows at low elevation angles, so an optical station has a higher minimum usable elevation than an RF antenna and gets shorter contact windows with a low-orbit satellite as a result. Several failures are purely operational: the dome stays shut in fog, high wind and after snow, the sun sweeps out seasonal keep-out zones the station cannot point into, wildfire smoke and volcanic particulate degrade links and dirty the optics, and in the US an uplink beam has to be coordinated so it is shuttered when a satellite crosses it.

## When to use
Build optical ground capability when a mission is contact-limited rather than power-limited, meaning the spacecraft collects more data than its RF passes can carry down. If you can only fund one station, you have a demonstration rather than a service, so budget for a network from the start: as a rough guide, three well-separated sites reach roughly 90–95% availability and five to ten are needed to get past 99%. Pick sites for uncorrelated weather rather than for convenience, because two stations inside the same frontal system count as one. Keep an RF path for command and telemetry regardless, since a station that cannot open its dome still has to be told what to do. Check that the site has fiber before you fall in love with its seeing, because mountaintops chosen for clear air often have nothing behind them that can absorb 100 Gbps. And plan the handover: LCRD operators found that repointing the telescopes and reacquiring the link was fast, while rerouting the terrestrial network to a different station was the slow part, which is why delay-tolerant networking is used to buffer through the switch.

## Key numbers
Telescope aperture roughly 0.4–1.5 m · adaptive optics lifts single-mode coupling from a few percent to 30–50% · one good site gives 60–80% cloud-free line of sight annually · three sites roughly 90–95% availability, five to ten needed past 99% · LCRD at 1.2 Gbps per optical terminal across two stations · TBIRD downlink at 200 Gbps from a 6U CubeSat · turbulence strongest at local noon, weakest near sunrise and sunset

## Examples
NASA's LCRD ground segment is two stations, Optical Ground Station 1 at Table Mountain in California and Optical Ground Station 2 at Haleakalā in Hawaii, plus an RF station in New Mexico for the control path; MIT Lincoln Laboratory's TBIRD used Table Mountain as well. ESA operates a 1 m optical ground station at the Teide Observatory on Tenerife, and DLR runs a fixed station at Oberpfaffenhofen and a transportable one. On the commercial side, Kongsberg Satellite Services, Viasat and Airbus are building optical sites into existing teleport networks, and Cailabs sells a receiver that uses multi-plane light conversion to couple turbulent light into fiber without a deformable mirror.

## Economic profile
The money goes into the telescope, mount and dome, the adaptive optics bench, and the site itself, and published prices are rare enough that the working figure people use is a few million dollars per station. The unusual part is the shape of the spending. Availability is bought by building more stations rather than by making one station better, so the second and third sites add the most availability per dollar and the eighth adds very little, which is the opposite of RF where a larger dish and more margin keep paying. Marginal cost per bit is close to zero once a station exists, so the whole economic question is how many sites the availability target forces. Site work is where budgets break: a mountaintop chosen for thin dry air usually has no fiber, and building a 100 Gbps path up to it can cost more than the telescope. Against that sits a Ka-band station at roughly $1–3M that works through rain with margin, which is why an operator with modest data volume has no reason to move. The buyers are relay operators and imaging constellations whose spacecraft collect far more than RF contacts can drain, and the likely structure is ground-station-as-a-service from a shared network rather than each operator building its own, for the same reason RF teleports consolidated: no single customer's traffic justifies ten sites.

## Videos

- https://www.youtube.com/watch?v=G10_dZFvfio — Optical Ground Station Oberpfaffenhofen OGSOP (DLR Institut für Kommunikation und Navigation, 8 minutes, 1k+ views)
- https://www.youtube.com/watch?v=Ck9dn36ykk4 — What is Adaptive Optics? (UCLA Galactic Center Group, 4 minutes, 10k+ views)

## Further reading

[Insights and Observations from Operating a Geostationary Laser Communication Relay Mission: Operational Lessons from NASA's Laser Communications Relay Demonstration (LCRD) and Associated Optical Ground Stations (OGSs) (NASA)](https://ntrs.nasa.gov/citations/20240010939) · [Site Diversity in Downlink Optical Satellite Networks Through Ground Station Selection (arXiv)](https://arxiv.org/abs/2010.02176)
