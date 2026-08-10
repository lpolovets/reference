---
number: 27
name: Optical crosslink and laser downlink
part: 6
group: Links and traffic
orbits: [leo, meo, geo, deep, gnd]
mass: [nano]
buyer: [com, def]
maturity: service
cost: vlow
---

## Description
An optical terminal moves data between spacecraft, or from a spacecraft to the ground, on an infrared laser beam instead of a radio wave. The reason it works so much better is beam width. A radio antenna a few tens of centimetres across spreads its energy over degrees, so almost all of the transmitted power misses the receiver; a small telescope at 1,550 nm produces a beam tens of microradians wide, which puts nearly all of the power on the far terminal and buys orders of magnitude of link margin for the same watts. That margin is spent on data rate, and optical links now run at about 100 Gbps against a few Gbps for a good RF link. The cost of a narrow beam is that both ends have to find each other and stay pointed while separated by thousands of kilometres and closing at several kilometres a second, which makes acquisition and tracking the hard engineering problem rather than the optics or the modem. On a crosslink between satellites there is no atmosphere in the way and the link is excellent; on a downlink the beam has to come through cloud and turbulence, and cloud is opaque at these wavelengths, so the ground segment becomes a network of geographically separated sites rather than one antenna.

## Strengths and weaknesses
Three things make optical worth the trouble. It needs no spectrum license, so it sidesteps the coordination process that gates every RF service. It is very hard to jam or intercept, because an adversary has to physically be inside a beam that is metres wide at useful ranges. And a mesh of crosslinks decouples coverage from ground infrastructure, so a satellite over open ocean can still deliver its data by routing through neighbors. The weaknesses are pointing, weather, and supply. Acquisition takes seconds and a broken link has to be reacquired, so links across a moving constellation need constant re-planning; a cloudy ground site is a dead site, and getting to high availability takes five to ten stations spread far enough apart to be uncorrelated in weather; and the terminals themselves have been the bottleneck, because building thousands of precision optomechanical assemblies a year is a manufacturing problem the industry underestimated. The failure mode that bites operators is not a lost link but a link budget that closes in the lab and not in orbit, since vibration from reaction wheels and thermal distortion of the optical bench both degrade pointing in ways ground testing does not reproduce.

## When to use
Use optical crosslinks whenever the constellation has to move data faster than it can fly it to a ground station, or when the traffic must not touch a foreign teleport. That is why every large low-orbit system has adopted them and why the military tracking and transport layers specified them. Use a laser downlink when a single high-rate satellite is collection-limited by contact time, since one optical pass can move what a dozen X-band passes would, but only if you can also fund several ground sites — a single optical ground station is a demonstration, not a service. Stick with RF when availability matters more than throughput, when the spacecraft is too small or too jittery to hold arcsecond pointing, or when the link has to work to a mobile user on the ground, because a laser cannot track a phone. In practice most systems fly both and use RF as the always-available control path with optical carrying the bulk data.

## Key numbers
About 100 Gbps per optical link, with Starlink links reported peaking near 200 Gbps · three laser terminals per Starlink satellite and tens of thousands flying · more than 42 petabytes a day carried across that mesh · NASA's TBIRD downlinking at 200 Gbps from a 6U CubeSat in 2023 · deep-space optical returning 267 Mbps from about 31 million km · five to ten separated optical ground stations needed for high availability.

## Regulatory and spectrum
Optical links sit above 3,000 GHz, outside the frequency range the ITU allocates and coordinates, so a laser crosslink needs no filing, no coordination, and no spectrum fee. The flip side is that it gets no protection either: nobody has to coordinate with you, and there is no regulatory remedy if someone else's beam or a bright source interferes. What does bind is safety and space-object protection on the ground leg. In the US, anyone transmitting a laser upward has to coordinate with the Laser Clearinghouse so the beam is shuttered when a satellite crosses it, and lasers projected into navigable airspace require notification to the aviation authority, which is a per-site operational constraint rather than a one-time approval. Export control applies to the hardware: laser communication terminals are controlled items, which limits who can supply whom and is one reason the US, Europe, and Japan each built separate supplier bases. Standards have done the work that regulation usually does, with the Space Development Agency publishing an optical terminal specification so that terminals from different vendors interoperate, and that specification has effectively become the reference for the Western merchant market.

## Examples
Starlink is the largest deployment by a wide margin, with three terminals per satellite, links running at about 100 Gbps, and more than 42 petabytes a day moving across the mesh; SpaceX has also built a smaller terminal for third-party spacecraft, rated around 25 Gbps at up to 4,000 km, with Muon Space among the first outside users. The Space Development Agency's Transport and Tracking layers require standards-compliant terminals across every vendor. The European Data Relay System uses geostationary laser relays to get Sentinel imagery down without waiting for a polar pass. On the demonstration side, NASA and MIT Lincoln Laboratory's TBIRD downlinked at 200 Gbps from a 6U CubeSat in 2023, and the Deep Space Optical Communications payload on Psyche returned 267 Mbps from roughly 31 million km, which is a rate no deep-space radio link approaches.

## Economic profile
The terminal is a small, cheap-sounding box that has been very hard to build in quantity, and that gap defines the market. Constellation operators need thousands of units a year at prices that fit a satellite costing tens of millions, and the merchant suppliers built for tens of units a year at prices that fit a flagship mission. Mynaric, the best-known independent supplier and the source of terminals for Rocket Lab's $1.3B Space Development Agency satellite contracts, ran into exactly that squeeze and was bought by Rocket Lab in a deal announced in March 2025 and completed in April 2026 for about $155M, explicitly to fix a production constraint. The pattern is the same one that shows up elsewhere in this sheet: the operators that need the most terminals end up owning the factory. For anyone else, the practical question is whether a supplier can hold price and yield at rate, because a terminal that is 20% late or 20% over budget stops a satellite line, and there are only a handful of qualified sources. Long term, optical is the main threat to the wideband ground-station business, since a laser downlink moves in seconds what an X-band pass moves in ten minutes.

## Videos

- https://www.youtube.com/watch?v=kJyDBmvBVz4 — Free-Space Optical Communications - TRENDING IN OPTICS (Edmund Optics, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=VsKgYmQS-Kw — Testing Space Lasers for Deep Space Optical Communications (Mission Overview) (NASA Jet Propulsion Laboratory, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=qNrM-3zY1Ns — Lunar Laser Communications Demonstration (LLCD) (MIT Lincoln Laboratory, 4 minutes, 1k+ views)

## Further reading

[State-of-the-Art of Small Spacecraft Technology: 9.0 Communications (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/soa-communications/) · [Non-Coherent Optical Communications Physical Layer, CCSDS 141.0-B-2 (CCSDS)](https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2026/03/141x0b2.pdf)
