---
number: 26
name: Cryogenic Control Electronics
part: 7
group: Enabling stack
temperature: k4
uses: [comp]
horizon: near
maturity: proto
bottleneck: cryo
---

## Description
Every superconducting or spin qubit needs microwave control and readout, and today that comes from room-temperature instruments connected by coaxial cables running down into the refrigerator. Each line carries heat in and takes space, and a few thousand lines is roughly where a fridge gives up. Cryogenic control electronics moves the signal generation and digitization to the 4 K stage, where the cooling power is watts rather than microwatts, so one chip can drive many qubits over a handful of digital fibers.

## Strengths and weaknesses
It attacks the wiring bottleneck directly, and that bottleneck, not qubit fabrication, is what caps a single-fridge system today. Cryo-CMOS also shortens the signal path, which reduces latency for feedback-based error correction. The costs are power and noise. Even a few milliwatts per qubit multiplies badly against a 4 K stage's cooling budget, so the design constraint is power per channel rather than performance, and a noisy controller sitting near the qubits can degrade the very coherence it was meant to enable. Transistor behavior also changes at 4 K, so the models have to be rebuilt.

## When to use
This is infrastructure rather than a purchase decision, but it is the item to watch if you are assessing whether a superconducting roadmap is credible past a few thousand qubits. Ask any vendor claiming a path to a million qubits how the control lines are handled, because the honest answers are cryogenic electronics, multiplexing, or photonic links, and each has a different maturity. Progress is measured in milliwatts per qubit and in demonstrated fidelity with the cryogenic controller in the loop.

## Key numbers
The 4 K stage offers watts of cooling against microwatts at 20 mK, which is why controllers go there · power budgets of a few milliwatts per qubit channel are the design constraint · replaces one coaxial line per qubit with a few digital fibers · transistor models must be recharacterized at cryogenic temperature · demonstrated controlling small numbers of qubits at full fidelity.

## Examples
Intel's Horse Ridge cryogenic control chip; Google and QuTech cryo-CMOS demonstrations controlling transmons; SemiQon and other startups building cryogenic CMOS; multiplexed readout schemes that share one line among many qubits as the nearer-term alternative.

## Economic profile
The cost of a superconducting machine sits in the refrigerator and the control electronics rather than in the qubit chip, so cryogenic control goes after one of the two big items and reduces the load on the other. Replacing one coaxial line per qubit with a few digital fibers cuts the bill of materials, the heat carried into the fridge, and the assembly labor at the same time. The constraint is power, and the arithmetic is easy: at a few milliwatts per channel, a thousand channels comes to a few watts, which is roughly the whole cooling budget of a 4 K stage, so the design target is milliwatts per qubit rather than performance per qubit. Nobody buys this as a product today, since the work sits inside large vendors such as Intel, Google and QuTech or in startups selling to them, and the cheaper near-term answer is multiplexed readout, which shares one line among many qubits and needs no new chip. If you are assessing a roadmap, ask at what qubit count cryogenic control is worth its development cost, because below a few thousand qubits room-temperature racks do the job and the whole case rests on what comes after that.

## Videos

- https://www.youtube.com/watch?v=wgv6p51J2eg — Solving the Control Electronics Bottleneck for Quantum Computing: CryoCMOS (Ari Noori, 10 minutes, under 1k views)
- https://www.youtube.com/watch?v=pwb9ELp4V-I — Why Quantum Computers Need Cryo-CMOS Controllers (The Cable Problem Solved) (The Honeyed Truth, 6 minutes, under 1k views)

## Further reading

[Quantum Computers Glossary (QuEra)](https://www.quera.com/glossary) · [Enabling Technologies for Scalable Superconducting Quantum Computing (arXiv)](https://arxiv.org/abs/2512.15001)
