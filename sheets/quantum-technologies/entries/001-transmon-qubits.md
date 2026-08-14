---
number: 1
name: Transmon Qubits
part: 1
group: Superconducting
temperature: mk
uses: [comp, sim]
horizon: mid
maturity: proto
bottleneck: fab
---

## Description
A transmon is a superconducting circuit that behaves as an artificial atom. A Josephson junction supplies nonlinear inductance, a large shunt capacitor suppresses sensitivity to charge noise, and the resulting anharmonic oscillator has two lowest levels that serve as the qubit. It is controlled with microwave pulses at 4–8 GHz and read out through a coupled resonator. Everything lives on a chip at the bottom of a dilution refrigerator at 10–20 mK, because the qubit energy has to be far above the thermal noise.

## Strengths and weaknesses
Gates run in tens of nanoseconds, which is thousands of times faster than trapped ions, and the devices are made with lithography, so scaling is a fabrication problem rather than an assembly problem. The whole semiconductor toolkit applies. The weaknesses are coherence and uniformity. Coherence times of 100–300 microseconds are short in absolute terms, no two fabricated qubits are quite identical so each needs individual calibration, and connectivity is nearest-neighbor on a planar chip. Every qubit also needs its own control lines into the fridge, which is the wiring problem that caps how large one refrigerator can go.

## When to use
This is the platform with the most industrial investment and the clearest path to large physical qubit counts, so it is the default assumption in most roadmaps. Bet on it if you believe error correction overhead can be paid down by fabrication scale. Be skeptical of qubit-count announcements without two-qubit fidelity and connectivity alongside, since a chip with more qubits and worse errors is worse. If your interest is algorithms that need all-to-all connectivity or very deep circuits, trapped ions currently deliver better fidelity per gate.

## Key numbers
Operates at 10–20 mK in a dilution refrigerator · qubit frequencies 4–8 GHz · coherence times typically 100–300 microseconds · two-qubit gates in 20–100 ns with fidelities around 99.5–99.9% · chips of 100–1,000+ physical qubits, each needing its own control lines.

## Examples
Google's Willow processor and its surface code error correction results; IBM's Heron and Condor devices; Rigetti's multi-chip modules; the 2019 Sycamore random circuit sampling experiment that started the current investment cycle.

## Economic profile
Superconducting qubits attract the most capital because they look like a semiconductor business: design, fabricate, test, repeat. The cost structure is dominated by the dilution refrigerator and the control electronics rather than by the chip, which is why a 1,000-qubit system costs roughly what a 100-qubit one does plus wiring. That also means the economics improve sharply if cryogenic control electronics work, which is why every large player funds that work.

## Videos

- https://www.youtube.com/watch?v=cb_f9KpYipk — The transmon qubit | QuTech Academy (QuTech Academy, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=xsdleM-f0i8 — How to Turn Superconductors Into A Quantum Computer | Superconducting Qubits 1 (Lukas's Lab, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=2pB87H3_F_c — A Qubit in the Making (IBM Research, 2 minutes, 50k+ views)

## Further reading

[Quantum Computing: Progress and Prospects (National Academies)](https://nap.nationalacademies.org/catalog/25196/quantum-computing-progress-and-prospects) · [A Quantum Engineer's Guide to Superconducting Qubits (arXiv)](https://arxiv.org/abs/1904.06560)
