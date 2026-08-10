---
number: 19
name: ELINT collection
part: 3
group: Signals collection
functions: [search, id]
range: [long, strat]
stealth: strong
jamming: good
cost: vhigh
---

## Description
Electronic intelligence is the collection and analysis of non-communications emissions — radars, beacons, telemetry, guidance links — to characterize what equipment an opponent has and how it operates. The output is a parametric description of each emitter: frequency agility pattern, pulse repetition interval, scan rate, modulation, and the intrapulse features that distinguish one manufacturer's set from another. That parametric library is what makes radar warning receivers, jammers, and anti-radiation seekers work, so ELINT is upstream of most of electronic warfare.

## Strengths and weaknesses
ELINT is entirely passive and produces information available no other way: you cannot deduce a radar's pulse agility pattern from a photograph of its antenna. Collection at long range from aircraft, ships, and satellites gives broad coverage. The weaknesses are that it depends on the opponent transmitting, ideally in an operationally realistic mode, and opponents know this and reserve their real modes for wartime. That produces a persistent intelligence gap: the peacetime library may describe training modes rather than combat modes, and discovering the difference during a conflict is the classic failure case.

## When to use
ELINT is a continuous national activity rather than a system you select for a mission, but the relevant planning question is how much collection to task against a given emitter set and how quickly the library can be updated and distributed. If an opponent fields a new radar, the value of getting its parameters into fleet mission data files within days rather than months is very high. For a program planner, invest in the analysis and distribution pipeline at least as much as in collection platforms, since collection has rarely been the bottleneck.

## Key numbers
Collection range set by the radio horizon, roughly 400 km from a 10 km altitude aircraft and global from satellites · frequency coverage typically 0.5–40 GHz · pulse timing measured to nanoseconds and frequency to well under 1 MHz · library update target of days rather than months after a new emitter appears · platform and ground-segment cost in the hundreds of millions.

## How it is defeated
Emission control and mode discipline are the standard counters, and they are effective. Reserving wartime modes means the collected library is incomplete by design. Modern software-defined radars can change waveform parameters with a software load, which devalues a library much faster than hardware-defined emitters did. Deliberate false emissions from decoys can pollute a library. Low-probability-of-intercept waveforms reduce collection range.

## Examples
RC-135V/W Rivet Joint, the RC-135S Cobra Ball for missile telemetry, the EP-3E and its successors, the US Navy's ocean surveillance satellites, the Russian Lotos-S and Chinese Yaogan ELINT constellations, and the ground stations that support all of them.

## Economic profile
This is national-capability spending with no commercial market and very limited visibility. The costs are in platforms, ground processing, and analyst time. The important trend is that software-defined radar shortens the useful life of an ELINT library, which raises the required collection and update tempo. That favors organizations with automated parametric analysis over those relying on manual characterization, and it is one of the clearer places where machine learning has produced real operational value.

## Videos

- https://www.youtube.com/watch?v=iPNi_SKLpkE — SCEPTRE: RADAR Analysis (3dB Labs, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=trksgbRC_aQ — Pulse Analysis with VSA 2020 Release #03: Deinterleaving for Multi-emitters (Keysight Design Software, 6 minutes, 1k+ views)

## Further reading

[Intelligence Collection Programs and Systems (Federation of American Scientists)](https://irp.fas.org/program/collect/) · [The Intelligent Evolution of Radar Signal Deinterleaving: A Systematic Review from Foundational Algorithms to Cognitive AI Frontiers (Sensors via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12788255/)
