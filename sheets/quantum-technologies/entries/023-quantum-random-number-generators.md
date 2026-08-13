---
number: 23
name: Quantum Random Number Generators
part: 6
group: Communication & security
temperature: room
uses: [sec]
horizon: now
maturity: comm
bottleneck: fab
---

## Description
Cryptography needs randomness, and classical sources are deterministic processes that merely look random. A quantum random number generator takes its entropy from a measurement whose outcome is fundamentally undetermined: which way a photon goes at a beamsplitter, when a photon arrives, or the vacuum fluctuations measured by homodyne detection. The last of these is the commercially dominant approach, because it needs only a laser, a beamsplitter, and a fast photodiode, all of which fit on a chip.

## Strengths and weaknesses
The entropy source is provably unpredictable rather than merely hard to predict, which is a stronger claim than any classical generator can make, and modern devices deliver gigabits per second in a package small enough for a phone. Cost has fallen to the point where the technology is shipping in consumer hardware. The weakness is that the claim applies to the physics, not to the device. Real generators have classical noise mixed in, and a device that is not continuously health-tested can degrade silently. Certification schemes exist precisely because "quantum" on the label is not by itself an assurance.

## When to use
Use a QRNG where entropy quality is a genuine risk: key generation at scale, hardware security modules, gaming and lottery systems, and any environment where a virtual machine's classical entropy pool is thin. Insist on a certified device with continuous health testing and a documented extractor, since that is what distinguishes a real product from a marketing claim. For most applications a well-seeded operating system generator is entirely adequate, and the failures in practice come from seeding rather than from the algorithm.

## Key numbers
Entropy from an inherently indeterminate quantum measurement rather than from a deterministic process · commercial rates from megabits to tens of gigabits per second · chip-scale devices now integrated into phones and security modules · output must pass continuous health tests and a randomness extractor · certification under standards such as NIST SP 800-90B is what makes the claim auditable.

## Examples
ID Quantique's chip-scale generators, shipped in Samsung phones; Quantinuum and Quside commercial units; QRNG modules inside hardware security modules used by banks; NIST's Randomness Beacon, which publishes public random values.

## Videos

- https://www.youtube.com/watch?v=KXDxFCRgPoQ — Quantum Random Number Generation - Do we really need it? (Cryptosense, 9 minutes, 5k+ views)
- https://www.youtube.com/watch?v=sdocg5lcB38 — What Is a Quantum Random Number Generator (QRNG)? True Randomness for Modern Cryptography (Cyberpedia by Palo Alto Networks, 3 minutes, under 1k views)
- https://www.youtube.com/watch?v=BFGfnfuIJEk — Quantum Randomness and Random Number Generation (Quantum Data World, 3 minutes, under 1k views)

## Further reading

[Quantum information science (NIST)](https://www.nist.gov/quantum-information-science)
