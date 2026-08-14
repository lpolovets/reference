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

## Economic profile
There is no product and no revenue here, so the money question is who funds the work and what the result would have to beat. Funding is government and consortium: the Quantum Internet Alliance in Europe, national programs elsewhere, university groups. The bar is high, because trusted-node networks and satellite links already move keys today, and the agencies that would buy a quantum network mostly recommend post-quantum cryptography for the general case, so removing the trusted nodes has to be worth paying for on its own. The technical gap is a cost gap too: demonstrated entanglement rates between separated nodes are hertz or below against the megahertz a useful link needs, a factor of roughly a million, and closing it is a materials problem rather than an engineering scale-up. What is sellable in the meantime are the components, quantum memories and the frequency converters that move photons to a telecom wavelength, both of which have customers in other quantum work. Treat a repeater program as a science budget with a payoff in the 2040s, and if a network business plan depends on repeaters before then, it depends on something nobody controls.

## Videos

- https://www.youtube.com/watch?v=mr-kAG6KwMA — Quantum Repeaters (Mazzi, 4 minutes, 5k+ views)
- https://www.youtube.com/watch?v=1zVvoADzXs4 — 12-3 Reaching for distance: Entanglement swapping (Q-Leap Edu Quantum Communications, 9 minutes, 5k+ views)

## Further reading

[Quantum information science (NIST)](https://www.nist.gov/quantum-information-science) · [Quantum repeaters: From quantum networks to the quantum internet (arXiv)](https://arxiv.org/abs/2212.10820)
