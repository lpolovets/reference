---
number: 24
name: Post-Quantum Cryptography
part: 6
group: Communication & security
temperature: room
uses: [sec]
horizon: now
maturity: comm
bottleneck: ctrl
---

## Description
Post-quantum cryptography is classical mathematics chosen to resist a quantum attacker. Shor's algorithm breaks RSA and elliptic curve cryptography, which is nearly all public-key cryptography deployed today, so the response is to replace those algorithms with ones based on problems no efficient quantum algorithm is known for. NIST standardized three in 2024: ML-KEM for key establishment, based on module lattices, and ML-DSA and SLH-DSA for signatures, from lattices and hash functions respectively.

## Strengths and weaknesses
It runs on existing hardware as a software change, works over the internet as it is, and needs no trusted nodes, satellites, or cryogenics, which is why the security agencies that considered both recommend it over QKD for general use. Deployment is already underway in browsers and messaging. The costs are size and confidence. Keys and signatures are considerably larger than elliptic curve equivalents, which stresses protocols with tight packet budgets, and the assumption that these problems are hard is a mathematical belief rather than a proof, as the break of the SIKE candidate in 2022 demonstrated.

## When to use
Start now, for two reasons. Migration of a large estate takes years, and "harvest now, decrypt later" means traffic captured today is exposed whenever a cryptographically relevant quantum computer arrives. Prioritize long-lived secrets and anything with a decade-plus confidentiality requirement. Deploy in hybrid mode, combining a post-quantum algorithm with a classical one, so a break in either leaves you no worse off. Build crypto-agility into the design, because the standards will evolve.

## Key numbers
NIST standardized ML-KEM, ML-DSA, and SLH-DSA in August 2024 · ML-KEM public keys are roughly 1.2 kB against 32 bytes for X25519 · hybrid deployment combining classical and post-quantum algorithms is the recommended transition · the SIKE candidate was broken classically in 2022, after years of analysis · large enterprise migrations are expected to take five to ten years.

## Examples
Chrome and Cloudflare deploying hybrid X25519 with ML-KEM at internet scale; Signal's PQXDH protocol; NSA's Commercial National Security Algorithm Suite 2.0 timeline; national migration mandates in the US and Europe.

## Videos

- https://www.youtube.com/watch?v=crPe69NeTdk — NIST's Post-Quantum Cryptography Standardization Explained (SandboxAQ, 2 minutes, 1m+ views)
- https://www.youtube.com/watch?v=uE_Y1C4QPU8 — Post-Quantum Cryptography: the Good, the Bad, and the Powerful (National Institute of Standards and Technology, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=_MoRcYLN-7U — Post Quantum Cryptography - Computerphile (Computerphile, 13 minutes, 100k+ views)

## Further reading

[Post-Quantum Cryptography (NIST Computer Security Resource Center)](https://csrc.nist.gov/projects/post-quantum-cryptography)
