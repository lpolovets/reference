---
number: 9
name: Inspection Spacecraft
part: 2
group: Servicing missions
orbit: [leo, geo]
scale: [kg, hkg]
autonomy: auto
customer: [def, com, civ]
maturity: demo
---

## Description
An inspection spacecraft flies close to another object and photographs it, and two very different jobs share that name. The cooperative case is a small free flyer released from your own vehicle to look at your own hardware. NASA's Seeker 1.0 is the clearest example: a 4.2 kg free flyer with twelve cold gas nitrogen thrusters, a 35 Wh battery good for about an hour, and 5.8 m/s of delta-v in total, released from a departing Cygnus in 2019 to show that a machine-vision guidance loop can find a spacecraft and hold position on it without any cooperative markers. Its inspection requirement, set with the people who would use the images, was to resolve a 64 mm feature at 8 by 8 pixels from 10 m away. The non-cooperative case is flying up to somebody else's satellite or to a derelict and characterizing it, which Astroscale's ADRAS-J did through 2024 against an H-IIA upper stage that had been in orbit since 2009, closing to roughly 5 m. Optically the close-range job is easy and the constraints are elsewhere: the target is lit only by the sun and by Earth so half of every orbit is dark, and the binding resource is propellant, because an inspector in geostationary orbit spends weeks drifting to each new longitude, and getting there faster costs far more delta-v.

## Strengths and weaknesses
Inspection is the cheapest useful thing to do with proximity operations, because nothing has to touch anything. There is no capture mechanism, no docking load path, and no way to damage the client, which is why a 4.2 kg CubeSat can do a useful version of it while a servicer cannot weigh less than a tonne. It also answers questions no ground sensor can: a 1 m telescope working at 550 nm has a diffraction limit near 0.67 µrad, which at geostationary range is about 24 m, so the whole satellite lands inside one resolution element, while an inspector 100 m away with a 10° field across 1,024 pixels gets roughly 0.17 mrad per pixel, or 1.7 cm on the target (both figures derived here from the aperture and the field of view). The weakness is not technical. A close-approach inspector is indistinguishable in hardware from a co-orbital weapon, since the propulsion, the sensors, and the approach profile are the same and only the intent and the last few meters differ. No treaty forbids approaching another operator's satellite, there is no minimum separation and no right of way, so every case is handled diplomatically after the fact: France's defense minister publicly accused a Russian Luch/Olymp satellite of espionage in 2018 after it maneuvered near a Franco-Italian military communications satellite, and the US Space Force objected publicly in 2020 when a pair of Russian satellites shadowed an American reconnaissance satellite, one of which later released an object at high relative speed. That ambiguity is the reason inspection missions attract political attention out of proportion to their size.

## When to use
Fly a small free flyer when you need to know why your own large spacecraft is misbehaving and you cannot see the relevant surface from onboard cameras; at a few kilograms it is the cheapest anomaly-resolution tool available. If the inspection is a precursor to servicing, do not build a separate inspector, put the sensors on the servicer, because it has to make the same approach anyway. If you want persistent knowledge of somebody else's assets in geostationary orbit, you need a dedicated maneuvering spacecraft with real propellant and a program to pay for it, which in practice means a defense customer. If the question is where an object is and what it is doing rather than what it looks like, buy ground and space-based tracking instead, which is far cheaper than flying to it. And do not plan a close approach to a satellite you do not own without talking to the operator first: nothing legally stops you, but the diplomatic cost is real and consent is how the commercial operators are handling it.

## Key numbers
Seeker 1.0 at 4.2 kg, 35 Wh, about an hour of operation and 5.8 m/s of total delta-v · inspection requirement of a 64 mm feature at 8 by 8 pixels from 10 m · ADRAS-J closed to roughly 5 m on a derelict upper stage in 2024 · Mycroft started proximity operations from 3,500 m · a 1 m ground telescope resolves about 24 m at geostationary range against roughly 1.7 cm for an inspector at 100 m (both derived) · GSSAP operational since 2014

## Examples
NASA's Seeker 1.0 flew from Cygnus in 2019, following AERCam Sprint, a 15.9 kg sphere flown from the Shuttle payload bay on STS-87 in 1997, and Aerospace Corporation's AeroCube-10 pair, in which one 1.5U CubeSat imaged the other. On the defense side, AFRL flew ANGELS and then Mycroft, which began proximity operations from 3,500 m and inspected a defunct AFRL satellite in geostationary orbit, and the US Space Force's GSSAP spacecraft have operated near the geostationary belt since 2014. Astroscale's ADRAS-J is the commercial non-cooperative case, and the Space Force's Tetra-5 mission is the next scheduled multi-spacecraft demonstration.

## Economic profile
The cheap end of this category is genuinely cheap. Seeker was built from mostly commercial parts under a streamlined NASA class that fixed cost and schedule up front, and at 4.2 kg it rides as a secondary payload, so the marginal cost of adding inspection to a mission that already exists is small. The expensive end is a defense program with maneuvering spacecraft in near-geostationary drift orbits, and those are not priced publicly. The unit economics of a dedicated free-flying inspector are poor because propellant is the product: once it is spent the spacecraft has nothing left to sell, and there is no refueling service to restock it. That pushes the commercially viable versions toward two shapes, either a hosted sensor that images other spacecraft as they pass and never maneuvers at all, or an inspection capability bundled onto a servicer so one vehicle sells two things. The most likely paying commercial customer is anomaly resolution and insurance: an operator with a $300M satellite that failed to deploy an array will pay for a photograph, and today there is usually no way to get one.

## Videos

- https://www.youtube.com/watch?v=HcJMT1rW8Lg — How Real Satellites Dogfight - Proximity Operations In Space Explained (Scott Manley, 20 minutes, 100k+ views)
- https://www.youtube.com/watch?v=IavkwZi7ME8 — ADRAS-J | Active Debris Removal by Astroscale - Japan | Concept of Operations (Astroscale, 3 minutes, 10k+ views)

## Further reading

[Seeker 1.0: Prototype Robotic Free Flying Inspector Mission Overview (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20190029188) · [2026 Global Counterspace Capabilities Report (Secure World Foundation)](https://www.swfound.org/publications-and-reports/2026-global-counterspace-capabilities-report)
