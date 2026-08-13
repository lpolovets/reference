---
number: 29
name: Benchmarking & Metrics
part: 7
group: Enabling stack
temperature: room
uses: [comp]
horizon: now
maturity: early
bottleneck: ctrl
---

## Description
Qubit count is the number quoted in headlines and the least informative one available. A machine's usefulness depends on how many operations it can run before errors accumulate, which means gate fidelity, connectivity, coherence, speed, and how well the whole system holds calibration. Several metrics try to capture this. Quantum volume combines width and depth into a single number that rewards fidelity and connectivity. CLOPS measures circuit throughput. Algorithmic benchmarks time actual problems. Randomized benchmarking isolates average gate error from state preparation and measurement error.

## Strengths and weaknesses
Composite metrics stop the qubit-count arms race from driving hardware decisions in the wrong direction, and randomized benchmarking gives a clean, platform-independent gate error figure. Algorithmic benchmarks measure what a user would actually experience. The weaknesses are gaming and scope. Any single number can be optimized for rather than earned, quantum volume saturates for machines with many qubits, and vendors naturally report the metric on which they lead. There is also no agreed way to compare an analog simulator against a gate-based machine.

## When to use
Ask for three numbers together and refuse to evaluate on one: two-qubit gate fidelity, connectivity, and gate time. Those determine how deep a circuit can run and how long it takes. Then ask for an algorithmic benchmark on a problem resembling yours, run end to end including compilation and calibration overhead. Treat any comparison that leads with qubit count as marketing. DARPA's Quantum Benchmarking Initiative exists because the field needed independent assessment rather than vendor self-report.

## Key numbers
Two-qubit gate fidelity, connectivity, and gate time together determine achievable circuit depth · quantum volume combines width and depth but saturates on wide machines · randomized benchmarking separates gate error from state preparation and measurement error · algorithmic benchmarks include compilation and calibration overhead, which vendor numbers often exclude · no accepted metric compares analog simulators with gate-based machines.

## Examples
IBM's scale, quality, and speed framing with quantum volume and CLOPS; the QED-C and Metriq benchmark suites; DARPA's Quantum Benchmarking Initiative assessing vendor claims independently; the repeated pattern of quantum advantage claims later matched by improved classical simulation.

## Videos

- https://www.youtube.com/watch?v=UpKseR066DQ — Three Metrics for Quantum Computing Performance: Scale, Quality and Speed (IBM Research, 10 minutes, 5k+ views)
- https://www.youtube.com/watch?v=E98zLxB7EQs — Quantum Benchmarking Initiative - Overview (DARPAtv, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=DD-JCi0lcLo — Benchmarking near-term quantum computers* (IBM Research, 13 minutes, 1k+ views)

## Further reading

[Benchmarking a trapped-ion quantum computer with 30 qubits (Quantum)](https://quantum-journal.org/papers/q-2024-11-07-1516/)
