---
number: 12
name: Continuous-Variable Photonics
part: 4
group: Photonic & topological
temperature: k4
uses: [comp, sim, sense]
horizon: mid
maturity: res
bottleneck: fab
---

## Description
Instead of counting photons, the continuous-variable approach encodes information in the amplitude and phase quadratures of a light field, the same variables a radio engineer would recognize. Squeezed light sources reduce the quantum noise in one quadrature at the expense of the other, and measurement is homodyne detection with an ordinary fast photodiode rather than a single-photon counter. Large entangled cluster states can be generated deterministically in time or frequency, which sidesteps the probabilistic gate problem of the photon-counting approach.

## Strengths and weaknesses
Deterministic entanglement generation and room-temperature homodyne detection are real advantages, and cluster states with very large numbers of modes have been demonstrated. Squeezed light is also directly useful outside computing: it is what improved LIGO's sensitivity. The weakness is that fault tolerance requires encoding qubits into these continuous variables through GKP states, and generating high-quality GKP states optically is extremely hard. Finite squeezing puts a floor under the error rate, and the squeezing levels demonstrated remain short of the fault-tolerance threshold.

## When to use
Treat this as research with one deployed application. Squeezed light is already used in gravitational-wave detection and is a credible route to improved optical sensing, so the sensing case stands on its own. For computing, follow the squeezing figure in decibels and the quality of demonstrated GKP states, because those are the two numbers that decide whether the architecture can ever be fault tolerant. Do not compare it to gate-based platforms by qubit count; the resource is modes and squeezing, not qubits.

## Key numbers
Information encoded in field quadratures rather than photon number · homodyne detection uses ordinary fast photodiodes at room temperature · entangled cluster states of thousands to millions of modes demonstrated · squeezing of roughly 10–15 dB achieved, below the level fault tolerance is thought to need · squeezed light is already deployed in gravitational-wave detectors.

## Examples
Xanadu's Borealis and Aurora machines; the University of Tokyo and DTU cluster state experiments; squeezed light injection in LIGO and Virgo, which improved their range measurably; continuous-variable QKD systems using the same detection technique.

## Videos

- https://www.youtube.com/watch?v=vbkUSiWXikw — Quantum frontiers | Xanadu’s photonic approach to quantum computing (Xanadu, 1 minute, 1k+ views)

## Further reading

[About (Quantum, the open journal for quantum science)](https://quantum-journal.org/about/)
