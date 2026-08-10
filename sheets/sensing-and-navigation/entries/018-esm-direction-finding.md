---
number: 18
name: Electronic support and direction finding
part: 3
group: Warning and support
functions: [search, track, id]
range: [long, strat]
stealth: strong
jamming: good
cost: vhigh
---

## Description
Electronic support measures detect, characterize, and locate emitters. Direction finding gives a bearing, and a bearing from two or more receivers gives a fix. Modern systems use time difference of arrival and frequency difference of arrival between spatially separated receivers, which produces geolocation accuracy far better than amplitude comparison — hundreds of meters rather than tens of kilometers, given adequate baselines and precise time synchronization. Everything is passive, so the emitting side gets no indication it has been located.

## Strengths and weaknesses
Passive geolocation of emitters is enormously valuable: it builds the electronic order of battle, cues other sensors, and produces targets for anti-radiation weapons. Range is limited only by line of sight and receiver sensitivity, so an airborne or space-based receiver covers a very large area. The weaknesses are that the target has to transmit — emission control defeats the whole approach — and that accuracy depends on geometry, requiring several well-separated platforms with precise time and position knowledge. Dense emitter environments make sorting and association hard, and modern low-probability-of-intercept waveforms are difficult to detect at all.

## When to use
Use electronic support as the persistent, always-on layer of any surveillance architecture, because it costs nothing to leave running and it reveals what the opponent is doing. It is the standard cueing sensor for suppression of enemy air defenses. If the target set is deliberately silent, this approach contributes nothing and you need active or optical sensing. Multi-platform geolocation is where the accuracy comes from, so budget for the constellation and the time synchronization rather than for a single very good receiver.

## Key numbers
Detection range limited by line of sight, roughly 400 km from an airborne or elevated receiver · amplitude-comparison bearing accuracy 10–30°, interferometer arrays 1–3° · TDOA and FDOA geolocation to hundreds of meters against tens of kilometers for single-platform methods · three or more receivers with time synchronization to a few nanoseconds · national system cost in the hundreds of millions.

## How it is defeated
Emission control is the complete counter: a radar that is off cannot be located. Operating briefly and shutting down before a fix converges works, which is why modern air-defense doctrine emphasizes short illumination periods and rapid displacement. Decoy emitters draw fixes onto empty ground cheaply. Low-probability-of-intercept and spread-spectrum waveforms reduce detection range substantially, and networked systems that share tracks over directional datalinks emit far less than legacy ones.

## Examples
The Czech VERA-NG and Ukrainian Kolchuga passive tracking systems, the RC-135V/W Rivet Joint and EP-3E aircraft, the US Navy's Ocean Surveillance satellites and their successors, HawkEye 360's commercial RF geolocation constellation, and the ESM suites on most warships.

## Economic profile
The most significant recent change is commercial: HawkEye 360, Kleos, Unseenlabs, and others sell RF geolocation from smallsat clusters, which puts a capability that was strictly national into a subscription product. Maritime applications — finding vessels that have turned off their transponders — drive most of the commercial revenue. Costs for a national system remain in the hundreds of millions, but the commercial layer now provides a useful and much cheaper baseline that many governments buy alongside their own.

## Videos

- https://www.youtube.com/watch?v=Km4TU17b05s — Stefan Scholl, DC9ST: Introduction and Experiments on Transmitter Localization with TDOA (Software Defined Radio Academy, 19 minutes, 10k+ views)
- https://www.youtube.com/watch?v=y9YkFZDCyeo — Track Down Radio Transmitters / KrakenSDR (sn0ren, 14 minutes, 100k+ views)
- https://www.youtube.com/watch?v=MXd5j9elxNM — Introduction to TDOA geolocation with RFeye Site (CRFS - Extraordinary RF Technology, 3 minutes, 5k+ views)

## Further reading

[An Introduction to Direction Finding Methodologies (Rohde & Schwarz)](https://cdn.rohde-schwarz.com/am/us/campaigns_2/a_d/Intro-to-direction-finding-methodologies.pdf) · [Emitter Location with Azimuth and Elevation Measurements Using a Single Aerial Platform for Electronic Support Missions (Sensors via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8228559/)
