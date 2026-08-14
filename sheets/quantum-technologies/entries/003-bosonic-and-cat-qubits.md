---
number: 3
name: Bosonic & Cat Qubits
part: 1
group: Superconducting
temperature: mk
uses: [comp]
horizon: mid
maturity: res
bottleneck: ctrl
---

## Description
Most qubits encode information in a two-level system and then need many physical copies to protect one logical bit. A bosonic qubit instead encodes information in the many levels of a single microwave resonator, choosing states whose errors are easy to detect and correct. Cat qubits use two coherent states of opposite phase, stabilized by a two-photon drive, which makes bit-flip errors exponentially rare in photon number while leaving phase flips as the only error to correct. GKP codes do something similar with a grid of states in phase space.

## Strengths and weaknesses
Biasing the noise so that one error type essentially disappears changes the error-correction budget dramatically: a code that only has to correct phase flips needs far fewer physical qubits than a surface code correcting both. Demonstrated bit-flip times reach minutes. The costs are control complexity and the fact that the theory advantage has to survive engineering. Stabilizing the cat state requires continuous nonlinear drive and careful engineering of loss channels, readout is harder than for a transmon, and the largest demonstrations are single logical qubits rather than systems.

## When to use
Follow this as a strategy bet rather than a product. It matters because it attacks the overhead problem directly instead of trying to build ten million physical qubits, and if the noise bias holds up at scale, the resource estimates for useful algorithms fall by an order of magnitude. Do not plan a deployment around it before the mid-2030s. When evaluating claims, ask for the bit-flip time and the phase-flip time separately, since the whole argument rests on the ratio between them.

## Key numbers
Encodes a logical qubit in one resonator rather than in many two-level systems · demonstrated bit-flip times of minutes, with phase flips remaining the dominant error · noise bias reduces the physical qubit overhead for error correction substantially · requires continuous stabilizing drive · largest demonstrations are single logical qubits.

## Examples
Alice & Bob's cat qubit processors and their published bit-flip lifetimes; AWS's Ocelot chip, which combines cat qubits with a repetition code; Yale's original bosonic code experiments, where the approach was invented.

## Economic profile
The case for bosonic encodings is capital avoided rather than revenue earned. A surface-code machine needs roughly 1,000 physical qubits per logical one, each with its own control line into a fridge that costs several hundred thousand dollars to over a million and accepts only so many lines, so overhead is what decides how many fridges a useful machine takes. If biasing the noise cuts that overhead by an order of magnitude, the same computation fits in a fraction of the hardware, which is worth funding even at research maturity. The offset is that every cat qubit needs a continuous stabilizing drive and harder readout, so part of the qubit saving comes back as control channels and calibration. That is why the number to ask for is physical qubits and control lines per logical qubit end to end, measured against a surface code on comparable hardware, rather than a bit-flip time on its own. There is nothing to buy here before the mid-2030s, so this is a research position, which is how AWS and Alice & Bob are treating it.

## Videos

- https://www.youtube.com/watch?v=nI0Yg-QRAns — Cat Qubits and LDPC Codes, a New Step Towards Quantum Error Correction (Alice & Bob, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=BiBezQUnXdI — What is QUANTUM ERROR CORRECTION (QEC)? 💊 Quantum Pill #4 (QPlayLearn, 4 minutes, 1k+ views)

## Further reading

[Quantum Computers Glossary (QuEra)](https://www.quera.com/glossary) · [Quantum computation with cat qubits (arXiv)](https://arxiv.org/abs/2203.03222)
