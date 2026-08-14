---
number: 2
name: Fluxonium Qubits
part: 1
group: Superconducting
temperature: mk
uses: [comp]
horizon: mid
maturity: res
bottleneck: fab
---

## Description
A fluxonium replaces the transmon's large capacitor with a large inductance, built from a long array of Josephson junctions. That changes the energy landscape: the qubit frequency drops to a few hundred megahertz to 1 GHz, and the two computational states have very different wavefunctions, which suppresses the dielectric loss channel that limits transmon coherence. The result is coherence times an order of magnitude longer than a transmon's, at the cost of a more complicated circuit and harder control.

## Strengths and weaknesses
Coherence of a millisecond or more, against a few hundred microseconds for transmons, is a large enough gap to change the error-correction arithmetic, and demonstrated two-qubit fidelities above 99.9% are among the best on any solid-state platform. Higher anharmonicity also allows shorter pulses without leakage. The obstacles are complexity and consistency. The junction array must be fabricated uniformly, the low frequency makes thermal population and readout harder, and the parameter space is larger, so calibration is more involved. Very few groups have shown it at more than a handful of qubits.

## When to use
Watch fluxonium as the most credible challenger inside the superconducting family. It matters if coherence rather than count turns out to be the binding constraint, which is the bet several startups have made. Do not plan a near-term deployment around it, since the largest demonstrations are far behind transmon devices. When comparing to transmons, look at the product of coherence time and gate speed rather than either alone, because fluxonium's longer coherence comes with slower gates.

## Key numbers
Coherence times reaching 1 ms and beyond, roughly an order of magnitude above transmons · qubit frequency typically 0.1–1 GHz, well below a transmon's 4–8 GHz · two-qubit fidelities demonstrated above 99.9% · requires an array of many Josephson junctions per qubit · demonstrated systems remain in the single or low double digits of qubits.

## Examples
Google's published comparison of transmon and fluxonium architectures; Atlantic Quantum and Alice & Bob among the startups pursuing non-transmon superconducting qubits; university groups at Maryland and Yale, where much of the fluxonium work originated.

## Economic profile
A fluxonium machine costs about what a transmon machine costs, because it needs the same dilution refrigerator at several hundred thousand dollars to over a million, and the same racks of control electronics. The chip is the cheap part either way. What changes is how much computing fits inside one fridge. At roughly 1,000 physical qubits per logical one, with overhead falling superlinearly as fidelity improves, you get more logical qubits from the same wiring budget at a two-qubit fidelity above 99.9% than at a transmon's 99.5%, and that is the whole economic argument for fluxonium. Against it, the junction array has to come out uniform and the larger parameter space has to be calibrated per device, which is an operating cost that does not fall with volume. Nobody has shown fluxonium above a handful of qubits, so an investor here is funding process development rather than buying a machine, and if transmon fidelities reach the same place first, that extra process risk was paid for nothing.

## Videos

- https://www.youtube.com/watch?v=Cnqh6QKTcnA — Qubit Types | Part 1 | Superconducting Qubits (Quantum Leap, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=x5APLeO9p_M — Fluxonium Qubit (Ziqi Qu, 12 minutes, under 1k views)
- https://www.youtube.com/watch?v=zNzzGgr2mhk — How To Make a Quantum Bit (Veritasium, 8 minutes, 1m+ views)

## Further reading

[Millisecond coherence in a superconducting qubit (arXiv)](https://arxiv.org/abs/2103.08578) · [The high-coherence fluxonium qubit (arXiv)](https://arxiv.org/abs/1810.11006)
