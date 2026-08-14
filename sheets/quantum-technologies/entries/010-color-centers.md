---
number: 10
name: Color Centers & Rare-Earth Ions
part: 3
group: Solid-state spins
temperature: k4
uses: [net, sense, comp]
horizon: mid
maturity: res
bottleneck: mat
---

## Description
The NV center is one of many optically active defects. Silicon carbide hosts divacancy and silicon-vacancy centers in a material that already has a commercial wafer industry. Group IV defects in diamond, tin-vacancy and silicon-vacancy, emit a much larger fraction of their photons into a sharp line, which is what a network needs, at the cost of requiring a few kelvin rather than room temperature. Rare-earth ions in crystals, erbium especially, emit at 1,550 nm, so their photons travel down existing telecom fiber.

## Strengths and weaknesses
These defects exist to fix the NV center's specific weaknesses: photon indistinguishability for group IV centers, telecom wavelength for erbium, and an industrial substrate for silicon carbide. Erbium at 1,550 nm is the only solid-state spin that can talk to the deployed fiber network without conversion. The weaknesses are that each fix trades something away. Group IV centers need 1–4 K cooling, erbium's optical transition is weak so it needs a resonator to be useful, and defect placement and yield remain unsolved for all of them.

## When to use
Track these as the materials answer to quantum networking rather than as computing platforms. If your interest is a repeater node that connects to installed fiber, erbium and telecom-compatible defects are the ones to watch. If it is a room-temperature sensor, stay with NV. Judge progress by photon indistinguishability and by entanglement rate between two separated nodes, since those are the numbers that decide whether a network is possible, and both are far below what a useful repeater needs.

## Key numbers
Group IV diamond defects emit a large fraction of photons into the zero-phonon line, against a few percent for NV · they require 1–4 K rather than room temperature · erbium emits at 1,550 nm, matching the fiber loss minimum · silicon carbide brings an existing 150 and 200 mm wafer industry · deterministic defect placement remains the limiting fabrication problem.

## Examples
Tin-vacancy centers in diamond demonstrating high-fidelity spin-photon interfaces; erbium-doped crystals and silicon devices for telecom-band memories; commercial silicon carbide wafers repurposed for defect qubits; Photonic Inc.'s silicon T centers, which emit near the telecom band.

## Economic profile
Each of these fixes one of the NV center's weaknesses and costs something else in exchange, and which cost is tolerable decides which one becomes a product. With erbium at 1,550 nm you buy no wavelength conversion and pay no extra loss for sitting off the fiber minimum, which matters because loss is what sets how far apart the nodes can be. Silicon carbide starts from a commodity substrate on existing 150 and 200 mm lines instead of specialty diamond growth, so the wafer is not the expensive part. Group IV diamond centers need 1–4 K, and a cryocooler at that temperature is far cheaper than a dilution refrigerator, but a network needs one per node, so that cost multiplies with node count rather than sitting in a single machine room. None of them has solved deterministic defect placement, and until that works, yield on a good emitter sets the cost of everything built from it. There is nothing to buy here yet, so judge progress by cost per entangled bit per second across a real link rather than by cost per node.

## Videos

- https://www.youtube.com/watch?v=72pprrSSDK0 — Quantum Color (Fermilab, 6 minutes, 100k+ views)
- https://www.youtube.com/watch?v=hwePZkk2L2I — Color center: Nitrogen vacancy center in diamond (정규석, 6 minutes, 1k+ views)

## Further reading

[Qubit guidelines for solid-state spin defects (arXiv)](https://arxiv.org/abs/2010.16395) · [Surveying optically addressable spin qubits for quantum information and sensing technology (arXiv)](https://arxiv.org/abs/2412.11232)
