---
number: 8
name: Silicon Spin Qubits
part: 3
group: Solid-state spins
temperature: mk
uses: [comp]
horizon: far
maturity: res
bottleneck: fab
---

## Description
A silicon spin qubit stores information in the spin of a single electron confined in a quantum dot, an electrostatically defined puddle a few tens of nanometers across in a silicon or silicon-germanium heterostructure. Gate electrodes above the dot hold the electron and tune its energy; a magnetic field splits the spin states; microwave or electrical pulses rotate the spin. Two-qubit gates use the exchange interaction between neighboring dots. The device looks and is fabricated like a very small transistor.

## Strengths and weaknesses
Size and manufacturability are the case. A spin qubit is roughly 100 nm across against a transmon's hundreds of microns, so millions could fit on a die, and isotopically purified silicon-28 removes the nuclear spins that would otherwise decohere it, giving coherence beyond a second. Fabrication runs in a CMOS fab. The problems are uniformity and wiring. Dot-to-dot variability is severe at these dimensions, exchange coupling is very short range so connectivity is strictly nearest-neighbor, and each dot needs several gate electrodes, which recreates the wiring problem at smaller scale.

## When to use
Follow this as the long-horizon bet with the best endgame: if spin qubits become uniform enough to fabricate by the million, the scaling argument is stronger than any other platform's. Do not expect useful systems before the late 2030s, since demonstrations are still at six to twelve qubits. It is also the platform where progress in semiconductor manufacturing, rather than in physics, moves the needle, so watch foundry involvement as the leading indicator rather than qubit counts.

## Key numbers
Quantum dots roughly 50–100 nm across, against hundreds of microns for a transmon · coherence beyond a second in isotopically purified silicon-28 · single and two-qubit fidelities above 99% demonstrated · operates at 10–100 mK, though some devices work above 1 K, which would ease cooling · demonstrated arrays remain in the single digits to low tens of qubits.

## Examples
Intel's Tunnel Falls 12-qubit research chip made on 300 mm wafers; Delft and QuTech's spin qubit work, including operation above 1 K; Diraq and Quantum Motion commercializing CMOS-compatible designs; UNSW's donor-based qubits in silicon.

## Economic profile
The case here is amortization. If a spin qubit can be made in a CMOS fab on 300 mm wafers, the tooling is already built and paid for by the logic industry, and nobody has to fund a dedicated process line the way every other solid-state platform does. Whether that works comes down to yield, the same way it does at any advanced node, and dot-to-dot variability at 50–100 nm is severe enough that cost per working array, not cost per wafer, is the number to watch. Two other line items survive the move to a fab. Each dot needs several gate electrodes, so the wiring cost that caps a transmon fridge comes back at smaller scale, and the device still sits at 10–100 mK inside a dilution refrigerator costing several hundred thousand dollars to over a million. That last item is why operation above 1 K matters more than it sounds, since it would move cooling from the most expensive part of the system to something far cheaper. Useful systems are unlikely before the late 2030s, so an investor here is underwriting a decade of process development, and foundry involvement is the leading indicator rather than qubit count.

## Videos

- https://www.youtube.com/watch?v=vQnA05VnGis — Quantum Dot Qubits (QuTech Academy, 6 minutes, 5k+ views)
- https://www.youtube.com/watch?v=y9dt5uTvsEM — Spin qubits | QuTech Academy (QuTech Academy, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=fao-hMe6Cws — Spin Qubits Explained: Quantum Computing with Silicon (CodeLucky, 4 minutes, under 1k views)

## Further reading

[Quantum information science (NIST)](https://www.nist.gov/quantum-information-science) · [Semiconductor Spin Qubits (arXiv)](https://arxiv.org/abs/2112.08863)
