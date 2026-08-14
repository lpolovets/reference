---
number: 6
name: QCCD Architectures
part: 2
group: Ions & atoms
temperature: laser
uses: [comp]
horizon: mid
maturity: proto
bottleneck: laser
---

## Description
A single ion chain stops working well past a few tens of ions, because the motional modes crowd together and gates get slower and noisier. The quantum charge-coupled device architecture solves this by moving ions instead of adding them to one line. The trap is divided into zones, some for storage and some for gates, and ions are physically shuttled between them by changing the electrode voltages, the way charge is shifted across a CCD sensor. Gates happen in a small zone with a couple of ions, where fidelity stays high.

## Strengths and weaknesses
It preserves trapped-ion fidelity while allowing far more qubits, and it keeps effective all-to-all connectivity because any two ions can be brought together. Shuttling takes tens to hundreds of microseconds and adds little error when done well. The costs are control complexity and heating. Each transport is a carefully designed voltage waveform, ions gain motional energy during transport and must be re-cooled, and the trap becomes a complex multi-layer chip with many electrodes. Throughput drops because much of the machine's time is spent moving rather than computing.

## When to use
This is the mainstream scaling path for ion traps, so if you are evaluating trapped-ion vendors you are evaluating QCCD implementations. It fits work needing high fidelity at a few tens to a few hundreds of qubits. Watch the ratio of transport time to gate time in published results, because a machine that spends most of its cycle shuttling has a wall-clock problem even if its fidelities are excellent. Beyond a few hundred ions, expect photonic interconnects between separate traps to become necessary.

## Key numbers
Gate zones hold a small number of ions, keeping fidelity near single-pair performance · transport operations take tens to hundreds of microseconds each · ions require re-cooling after transport, which consumes cycle time · traps are multi-layer chips with tens to hundreds of electrodes · demonstrated systems in the tens of qubits, with roadmaps to hundreds.

## Examples
Quantinuum's H2 system, the most developed QCCD machine; Sandia National Laboratories' surface trap fabrication, which supplies much of the field; university demonstrations of junction transport that showed ions can turn corners without losing coherence.

## Economic profile
The economics of a QCCD machine are mostly a utilization problem. Fidelity stays near single-pair performance as the machine grows, which is the reason to build one, but each transport takes tens to hundreds of microseconds and the ions have to be re-cooled afterward, so a large share of the machine's cycle goes to moving rather than computing. For a vendor selling machine time that is lost throughput, and the ratio of transport time to gate time in published results predicts revenue per system better than a qubit count does. On the capital side, the trap is a multi-layer chip with tens to hundreds of electrodes, made in low volume by a handful of suppliers, and every electrode needs its own carefully shaped voltage waveform, so control channel count grows with electrodes rather than with qubits. Scaling past a few hundred ions means paying for photonic interconnects between traps, which is a second development program rather than a larger version of the first.

## Videos

- https://www.youtube.com/watch?v=8p6P-QTQM2M — How to trap ions for quantum computing? (Professor Nano, 18 minutes, 10k+ views)
- https://www.youtube.com/watch?v=SrcuokJUZp4 — TILT: Achieving Higher Fidelity on a Trapped-Ion Linear-Tape Quantum Computing Architecture, HPCA21 (Quantum Computing, 6 minutes, under 1k views)

## Further reading

[Benchmarking a trapped-ion quantum computer with 30 qubits (Quantum)](https://quantum-journal.org/papers/q-2024-11-07-1516/) · [Demonstration of the trapped-ion quantum-CCD computer architecture (arXiv)](https://arxiv.org/abs/2003.01293)
