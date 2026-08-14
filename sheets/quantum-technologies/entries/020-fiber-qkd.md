---
number: 20
name: Fiber QKD
part: 6
group: Communication & security
temperature: k4
uses: [sec, net]
horizon: now
maturity: comm
bottleneck: laser
---

## Description
Quantum key distribution lets two parties generate a shared secret key whose security rests on physics rather than on computational hardness. In the BB84 protocol the sender encodes random bits on single photons in randomly chosen bases and the receiver measures in randomly chosen bases; they compare bases publicly, keep the matching cases, and estimate the error rate. Any eavesdropper measuring the photons disturbs them and raises that error rate, so interception is detectable. Commercial systems have existed for two decades.

## Strengths and weaknesses
The security argument does not weaken as computers improve, which is the entire appeal against a future quantum attacker. Systems are commercially available and interoperate over standard fiber. The weaknesses are practical and have kept adoption narrow. Fiber loss caps range at 100–200 km without a trusted node, key rates fall exponentially with distance, and the security proof covers the protocol rather than the hardware, so side-channel attacks on real detectors and sources have repeatedly been demonstrated. Trusted-node networks reintroduce exactly the trust QKD was meant to remove.

## When to use
Consider fiber QKD for a short, fixed, high-value link where you control both endpoints and the fiber between them, and where a physics-based argument has institutional value: a bank between two datacenters, a government link between two buildings. For anything else, national security agencies including the NSA and the UK NCSC recommend post-quantum cryptography instead, on the grounds that it needs no new hardware and no trusted nodes. Treat QKD as a complement for specific links, not as a replacement for cryptography.

## Key numbers
Practical range 100–200 km of fiber without trusted nodes, with key rate falling exponentially with distance · key rates of kilobits to megabits per second at short range, dropping to bits per second at the limit · needs dedicated or carefully managed fiber · single-photon detectors usually require cooling · security proofs cover protocols, and implementation side channels have been exploited repeatedly.

## Examples
ID Quantique and Toshiba commercial systems; China's 2,000 km Beijing-Shanghai backbone, which relies on trusted relay nodes; banking and government links in Switzerland, Korea, and Singapore; the published guidance from NSA and NCSC recommending post-quantum cryptography over QKD for general use.

## Economic profile
The competition sets the price here, and the competition is a software update. Post-quantum cryptography costs one migration program and then covers every link an organization has, while QKD costs a pair of endpoint boxes, cooled single-photon detectors, and a dedicated fiber for each link protected. That fiber is usually the largest recurring line and it does not fall with volume, so total cost grows with the number of links while the software cost stays roughly flat. Past 100–200 km the bill grows again, because that is where range without a trusted node ends, and every trusted relay is a physically secured site with staff, which is both a cost and the assumption QKD was meant to remove. That leaves a narrow market: one or two short high-value links where the buyer owns both ends and a physics-based argument carries institutional or regulatory weight, plus national programs buying for reasons other than cost. Vendors have sold into that market for two decades without it widening, and the NSA and NCSC guidance recommending post-quantum cryptography for general use is a large part of why.

## Videos

- https://www.youtube.com/watch?v=V3WzH2up7Os — How Quantum Key Distribution Works (BB84 & E91) (Improbable Matter, 13 minutes, 50k+ views)
- https://www.youtube.com/watch?v=R0SOqLwLOR0 — Outsmarting Hackers: Quantum Key Distribution Explained (Qiskit, 17 minutes, 10k+ views)
- https://www.youtube.com/watch?v=MfTXwVMi0uE — Quantum Key Distribution (QKD) Explained step by step, Request a Demo from QNu Labs (QNu Labs, 4 minutes, 10k+ views)

## Further reading

[Quantum networking technologies (UK National Cyber Security Centre)](https://www.ncsc.gov.uk/paper/quantum-networking-technologies) · [Quantum Key Distribution (QKD) and Quantum Cryptography QC (NSA)](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)
