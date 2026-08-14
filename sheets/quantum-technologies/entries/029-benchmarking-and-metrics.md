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

## Economic profile
Almost nobody sells benchmarking, for a straightforward reason: a benchmark the vendor pays for is worth less than one it does not control, so the work is funded by government and consortia such as DARPA's Quantum Benchmarking Initiative, QED-C and Metriq. Its economic function is diligence. A buyer evaluating on qubit count pays for capability that is not there, and finding out costs machine time plus people who can run an algorithmic benchmark end to end, including the compilation and calibration overhead that vendor numbers usually exclude. That expense is most of why component numbers get published and end-to-end numbers do not. If you are buying access, pay for a benchmark on your own problem before you pay for the machine; if you are investing, the independent assessments are the cheapest diligence available on this field, and a vendor's chosen metric mainly tells you which metric it leads on.

## Videos

- https://www.youtube.com/watch?v=UpKseR066DQ — Three Metrics for Quantum Computing Performance: Scale, Quality and Speed (IBM Research, 10 minutes, 5k+ views)
- https://www.youtube.com/watch?v=E98zLxB7EQs — Quantum Benchmarking Initiative - Overview (DARPAtv, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=DD-JCi0lcLo — Benchmarking near-term quantum computers* (IBM Research, 13 minutes, 1k+ views)

## Further reading

[Benchmarking a trapped-ion quantum computer with 30 qubits (Quantum)](https://quantum-journal.org/papers/q-2024-11-07-1516/) · [Quantum Benchmarking Initiative (DARPA)](https://www.darpa.mil/research/programs/quantum-benchmarking-initiative)
