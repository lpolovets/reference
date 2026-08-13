---
number: 28
name: Quantum Error Correction
part: 7
group: Enabling stack
temperature: mk
uses: [comp]
horizon: mid
maturity: proto
bottleneck: ctrl
---

## Description
Physical qubits fail far too often to run a useful algorithm, so information is spread across many of them in a code whose syndrome measurements reveal what error occurred without revealing the data. The surface code is the leading choice for planar hardware because it needs only nearest-neighbor connections and tolerates physical error rates below about 1%, the highest threshold of any practical code. Its cost is overhead: roughly a thousand physical qubits per logical qubit at realistic error rates, and more for the magic states that non-Clifford gates require.

## Strengths and weaknesses
It is what turns a noisy device into a computer, and 2023–2024 brought the first demonstrations that adding qubits actually reduces logical error rather than increasing it, which was the load-bearing assumption. Newer qLDPC codes cut the overhead severalfold at the cost of requiring longer-range connections, which some platforms can provide. The costs are the numbers. A thousand-to-one overhead means a machine factoring RSA-2048 needs millions of physical qubits, and the decoder has to identify errors faster than they accumulate, which is a real-time classical computing problem in its own right.

## When to use
Error correction is the lens for reading any quantum computing claim. A useful machine is described by logical qubits and logical error rate, not by physical qubit count, and a platform that improves fidelity reduces overhead superlinearly, which is why a 99.9% platform with fewer qubits can beat a 99% platform with many more. When someone announces a milestone, ask whether the logical error rate went down as the code grew, since that is the only result that indicates a path to scale.

## Key numbers
Surface code threshold near 1% physical error rate, the highest of any practical code · roughly 1,000 physical qubits per logical qubit at realistic error rates · qLDPC codes cut that severalfold but need longer-range connectivity · decoders must run in real time, within microseconds for superconducting hardware · cryptographically relevant algorithms imply millions of physical qubits.

## Examples
Google's Willow result showing logical error falling as the surface code distance grew; Quantinuum and Microsoft's logical qubit demonstrations on trapped ions; Harvard and QuEra's logical operations on neutral atoms; IBM's shift toward qLDPC codes in its published roadmap.

## Videos

- https://www.youtube.com/watch?v=dVkLNwSTBU0 — Suppressing quantum errors by scaling a surface code logical qubit (Google Quantum AI, 17 minutes, 5k+ views)
- https://www.youtube.com/watch?v=4hWUIGZh6WE — Quantum error correction codes | QuTech Academy (QuTech Academy, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Jjm2C6RVzKQ — Parameters of a surface code | QuTech Academy (QuTech Academy, 5 minutes, 10k+ views)

## Further reading

[Quantum Computing: Progress and Prospects (National Academies)](https://nap.nationalacademies.org/catalog/25196/quantum-computing-progress-and-prospects)
