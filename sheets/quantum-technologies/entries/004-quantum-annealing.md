---
number: 4
name: Quantum Annealing
part: 1
group: Superconducting
temperature: mk
uses: [sim, comp]
horizon: now
maturity: comm
bottleneck: ctrl
---

## Description
A quantum annealer is not a gate-based computer. It encodes an optimization problem as the ground state of a coupled spin system, initializes the hardware in an easy-to-prepare state, and then slowly changes the Hamiltonian toward the problem one, so the system ideally follows its ground state to the answer. The hardware is superconducting flux qubits with programmable couplings, thousands of them on a chip in a dilution refrigerator. It has been commercially available longer than any gate-based machine.

## Strengths and weaknesses
Machines exist, are large by qubit count, and are usable over the cloud today, which no gate-based platform matches for optimization work. For certain problems the mapping is natural and results come back in milliseconds. The weaknesses are the ones that have made this contested for a decade. Annealing addresses a narrow class of problems, connectivity is limited so an embedded problem uses many physical qubits per logical variable, and rigorous evidence of a general speedup against good classical heuristics remains scarce. Most reported advantages have later been matched classically.

## When to use
Try an annealer when your problem is genuinely a quadratic unconstrained binary optimization and you can benchmark it honestly against simulated annealing and modern classical solvers on the same instances. It is cheap to test over the cloud. Do not assume that a fast answer is a quantum speedup; run the classical baseline first, and check how many physical qubits each logical variable consumed after embedding. For simulating quantum systems, analog neutral-atom and ion platforms have the stronger recent record.

## Key numbers
Thousands of flux qubits on a chip, with limited fixed connectivity · operates at 10–20 mK like other superconducting hardware · embedding a densely connected problem costs many physical qubits per logical variable · available commercially over the cloud since 2011 · claims of speedup have repeatedly been matched by improved classical algorithms.

## Examples
D-Wave's Advantage and Advantage2 systems; logistics and scheduling pilots at Volkswagen, Denso, and several utilities; the long series of academic papers testing and often deflating specific speedup claims.

## Videos

- https://www.youtube.com/watch?v=zvfkXjzzYOo — What is Quantum Annealing? (D-Wave, 6 minutes, 100k+ views)
- https://www.youtube.com/watch?v=UV_RlCAc5Zs — How The Quantum Annealing Process Works (D-Wave, 6 minutes, 100k+ views)
- https://www.youtube.com/watch?v=6BxlolQdI3s — Adiabatic Quantum Computer Explanation D-Wave Systems (PlusUltraTech, 5 minutes, 5k+ views)

## Further reading

[Quantum Computing Applications (D-Wave)](https://www.dwavequantum.com/learn/quantum-computing/) · [Quantum Computing: Progress and Prospects (National Academies)](https://nap.nationalacademies.org/catalog/25196/quantum-computing-progress-and-prospects)
