---
number: 22
name: Quantum Repeaters
part: 6
group: Communication & security
temperature: k4
uses: [net, sec]
horizon: far
maturity: res
bottleneck: mat
---

## Description
A classical repeater amplifies a signal, and quantum information cannot be copied, so that approach is unavailable. A quantum repeater instead divides a long link into segments, entangles adjacent nodes over each segment, and then performs entanglement swapping at each node so that the end points end up entangled with each other without any photon having traveled the whole distance. Each node needs a quantum memory that holds its half of the entanglement while neighboring segments are established, and purification to clean up accumulated errors.

## Strengths and weaknesses
Repeaters would remove the trusted-node problem that limits every deployed quantum network and would let distributed quantum computing and long-baseline quantum sensing work at all. Nothing else does that. The obstacles are memory and rate. A memory has to hold coherence for at least the classical communication time across a segment, tens of milliseconds for 100 km, while also having an efficient optical interface at a wavelength fiber transmits, and no material yet gives all three at once. Demonstrated entanglement rates between separated nodes are hertz or below.

## When to use
Treat repeaters as pre-competitive research whose progress is worth tracking through two numbers: memory coherence time against segment latency, and entanglement rate between physically separated nodes. Those decide feasibility more than any announcement of a new node type. Do not plan a quantum network deployment on repeaters before the 2040s. In the meantime, trusted-node networks and satellite links are what exist, and both make security compromises repeaters are meant to remove.

## Key numbers
Memory must hold coherence longer than the classical signaling time across a segment, roughly 0.5 ms per 100 km each way · demonstrated entanglement rates between separated nodes are hertz or below, against the megahertz a useful link needs · requires an optical interface at a fiber-friendly wavelength, usually via frequency conversion · no material yet combines long memory, efficient interface, and telecom wavelength.

## Examples
Delft's entanglement between three network nodes, the first multi-node quantum network; Harvard's silicon-vacancy memory nodes on deployed Boston fiber; the Quantum Internet Alliance in Europe; erbium and rare-earth memories pursued specifically for telecom compatibility.

## Videos

- https://www.youtube.com/watch?v=mr-kAG6KwMA — Quantum Repeaters (Mazzi, 4 minutes, 5k+ views)
- https://www.youtube.com/watch?v=1zVvoADzXs4 — 12-3 Reaching for distance: Entanglement swapping (Q-Leap Edu Quantum Communications, 9 minutes, 5k+ views)

## Further reading

[Quantum information science (NIST)](https://www.nist.gov/quantum-information-science)
