---
number: 7
name: Neutral Atom Arrays
part: 2
group: Ions & atoms
temperature: laser
uses: [comp, sim]
horizon: near
maturity: proto
bottleneck: laser
---

## Description
Neutral atom machines hold uncharged atoms, usually rubidium or a strontium isotope, in arrays of optical tweezers: tightly focused laser spots, each holding one atom, arranged by a spatial light modulator or an acousto-optic deflector into any geometry you like. Because the atoms are neutral they do not repel each other, so thousands can be packed close together. Two-qubit gates use the Rydberg blockade: exciting one atom to a huge orbital shifts its neighbor's energy levels enough to prevent the same excitation, which is a conditional interaction.

## Strengths and weaknesses
Scale is the headline. Arrays of thousands of atoms have been assembled, and rearranging them into arbitrary geometries is a software change rather than a fabrication run, which is why neutral atoms dominate analog quantum simulation. Atoms are identical by nature. The weaknesses are loss and speed. Atoms escape the traps over seconds and must be reloaded, gate fidelities lag trapped ions, and measurement destroys the atom in most schemes, so mid-circuit measurement, which error correction needs, is hard. Everything depends on a large and stable laser system.

## When to use
Use neutral atoms for analog quantum simulation of many-body physics now, where they are the leading platform and produce results classical methods struggle to match. For gate-based computing, treat them as the fastest-improving platform: the first logical-qubit demonstrations on this hardware appeared in 2024 and the trajectory has been steep. Weigh the laser system honestly, since a machine that needs dozens of stabilized lasers has a reliability profile more like a physics experiment than an appliance.

## Key numbers
Arrays of thousands of atoms assembled in arbitrary two- and three-dimensional geometries · atom lifetime in the trap of seconds, requiring reloading · two-qubit fidelities around 99.5%, behind trapped ions · gates in the hundreds of nanoseconds to microseconds via Rydberg blockade · everything rests on a large stabilized laser system.

## Examples
QuEra's Aquila analog simulator, available over the cloud; Harvard and MIT's logical qubit demonstrations; Atom Computing's arrays exceeding a thousand qubits; Pasqal's systems in Europe.

## Videos

- https://www.youtube.com/watch?v=JmnZVhQc-H8 — Neutral Atom Quantum Computers - Concept of Operation | QuEra (QuEra Computing, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=fPJmOYO1PlY — The Rise of the Neutral Atom Quantum Computer (The Quantum Bull, 10 minutes, 1k+ views)
- https://www.youtube.com/watch?v=G_tYoSUwv1w — 6 Quantum Computing with Rydberg atoms - Prof Jonathan Pritchard (QSimFP, 6 minutes, under 1k views)

## Further reading

[Neutral Atom Quantum Computing: Principles, Routes, Progress, and Challenges (arXiv)](https://arxiv.org/abs/2608.05010) · [Fault-tolerant quantum computation with a neutral atom processor (arXiv)](https://arxiv.org/abs/2411.11822)
