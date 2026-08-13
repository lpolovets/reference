---
number: 11
name: Photonic Qubits
part: 4
group: Photonic & topological
temperature: k4
uses: [comp, net]
horizon: mid
maturity: res
bottleneck: fab
---

## Description
A photonic quantum computer encodes qubits in single photons, in polarization, path, or time bin, and processes them with beamsplitters, phase shifters, and detectors on a photonic integrated circuit. Photons do not interact with each other, so two-qubit gates are made probabilistically through measurement: entangle, measure, and keep the runs that worked. The practical architecture is fusion-based or measurement-based computing, which builds a large entangled resource state from small ones and then computes by measuring it in a chosen order.

## Strengths and weaknesses
Photons do not decohere in the usual sense, they run at room temperature in the waveguides, and the chips can be made in existing silicon photonics foundries, which is a manufacturing base no other platform has. Networking is native, since the qubit is already a photon. The costs are loss and detectors. Every optical component loses some photons, and loss is the dominant error, so components must reach fractions of a decibel; the single-photon detectors that make it work are superconducting nanowires needing cryogenics, so the system is not really cryogenics-free.

## When to use
Follow photonics as the platform whose scaling argument is manufacturing rather than physics: if a foundry can print millions of low-loss components, the architecture works, and if it cannot, it does not. That makes progress legible through component loss figures and photon source efficiency rather than through qubit counts. It is also the natural technology for quantum networking. Do not expect an intermediate small-scale useful machine, because this architecture is designed for fault tolerance at large scale rather than for noisy intermediate devices.

## Key numbers
Qubits are single photons; the waveguides run at room temperature while the detectors need cryogenics · loss is the dominant error, so components must reach fractions of a dB · two-qubit gates are probabilistic, requiring many attempts and heralding · fabricated in commercial silicon photonics foundries · architecture targets fault tolerance directly rather than a noisy intermediate stage.

## Examples
PsiQuantum's foundry-based fusion architecture, built with GlobalFoundries; Xanadu's Aurora and its photonic error-correction demonstrations; Chinese Jiuzhang boson sampling experiments; the same silicon photonics platform used for datacenter transceivers.

## Videos

- https://www.youtube.com/watch?v=v7iAqcFCTQQ — How Xanadu’s Photonic Quantum Computers Work (Xanadu, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=34-sK81i7-s — Xanadu Demonstrates World's First Error-Resistant Photonic Qubit (Xanadu, 2 minutes, 5k+ views)
- https://www.youtube.com/watch?v=Re8YnX1ciXc — Xanadu [CHAC] Goes Public | The First Photonic Quantum Computing Stock Explained (The Quantum Bull, 12 minutes, 1k+ views)

## Further reading

[Quantum Flagship](https://qt.eu/)
