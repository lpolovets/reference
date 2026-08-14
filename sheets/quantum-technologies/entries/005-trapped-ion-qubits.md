---
number: 5
name: Trapped-Ion Qubits
part: 2
group: Ions & atoms
temperature: laser
uses: [comp, sim]
horizon: mid
maturity: proto
bottleneck: laser
---

## Description
A trapped-ion computer holds individual charged atoms, usually ytterbium or barium, in ultra-high vacuum using oscillating electric fields from a chip trap. Laser cooling brings them nearly to rest in a line. Qubit states are two long-lived internal levels of the ion, addressed with lasers or microwaves, and two-qubit gates work by coupling internal states through the ions' shared motion in the trap. Every ion of a given species is identical, which removes the calibration problem that dogs solid-state qubits.

## Strengths and weaknesses
Fidelity and connectivity are the advantages. Two-qubit gate fidelities above 99.9% are routine, coherence lasts seconds to minutes, and because all ions share the same motional modes, any pair can interact directly, giving all-to-all connectivity that saves enormous numbers of swap operations. The costs are speed and optics. Gates take tens to hundreds of microseconds, thousands of times slower than superconducting, and every ion needs precisely controlled laser beams, so the system is fundamentally an optics engineering problem that gets harder with each added ion.

## When to use
Choose trapped ions when circuit depth and gate quality matter more than raw speed, which describes most near-term algorithm work: a machine with 30 excellent all-to-all qubits runs deeper useful circuits than one with 100 noisy nearest-neighbor ones. Assume the scaling path runs through shuttling architectures or photonic links between traps rather than through longer chains, because a single chain becomes unmanageable past a few tens of ions. Check gate speed against your circuit depth, since slow gates plus deep circuits means long wall-clock runtimes.

## Key numbers
Two-qubit gate fidelities above 99.9%, the best demonstrated on any platform · coherence times of seconds to minutes · gate times of tens to hundreds of microseconds · all-to-all connectivity within one ion chain · practical chain lengths of a few tens of ions before motional modes become unmanageable.

## Examples
Quantinuum's H-series systems, which hold most fidelity records; IonQ's Forte and Tempo machines; the NIST and Innsbruck groups where ion trapping for computing was developed; the 2012 Nobel Prize in Physics for the underlying trapping and measurement techniques.

## Economic profile
There is no dilution refrigerator in a trapped-ion machine, which takes several hundred thousand dollars to over a million out of the capital bill, and the laser and optics stack takes its place: five or more stabilized wavelengths, filling several optical tables in research systems. That stack grows with ion count, since every ion needs its own precisely controlled beams, so cost per qubit falls more slowly here than on a chip platform where more qubits mostly means a bigger die. Two things push the other way. Two-qubit fidelity above 99.9% cuts error-correction overhead superlinearly, so a customer pays for fewer physical qubits per logical one, and ions of a given species are identical, which removes the per-device calibration labor that solid-state platforms require indefinitely. The line item that hurts an operator is speed: gates of tens to hundreds of microseconds are thousands of times slower than superconducting, so a machine sold by the hour finishes far fewer jobs a day, and that shows up directly in revenue per system.

## Videos

- https://www.youtube.com/watch?v=f80y85GGyfE — Learn Quantum: What is Trapped Ion Quantum Computing? (IonQ, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ec3Bs6Wam8w — How Trapped-Ion Quantum Computers Work (Quantinuum, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=aV1wL5jsfRU — What is an Ion Trap Quantum Computer? (Simon Benjamin, 3 minutes, 10k+ views)

## Further reading

[Benchmarking a trapped-ion quantum computer with 30 qubits (Quantum)](https://quantum-journal.org/papers/q-2024-11-07-1516/) · [Quantum information science (NIST)](https://www.nist.gov/quantum-information-science)
