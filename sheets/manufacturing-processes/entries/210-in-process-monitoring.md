---
number: 210
name: "In-process monitoring"
part: 7
group: "Inspection & Process Control"
materials: [multi]
volumes: []
tooling: none
---

## Description

Sensors measure force, vibration, acoustic emission, temperature, dimensional drift, melt-pool behavior, pressure, or other signals during production.

## Strengths and weaknesses

Can detect defects early, reduce scrap, support traceability, and enable closed-loop control. Signals must be validated against actual part quality, often process by process.

## When to use

Invest in in-process monitoring where post-process inspection is expensive, slow, or cannot see the defect at all: additive builds running for days, welds and molded parts whose internal quality only CT or sectioning would reveal, unattended lights-out machining where a broken tool ruins hours of production, and regulated industries needing per-part traceability. It pays best when scrap cost per event is high, or when catching drift mid-run saves an entire batch. Do not deploy it on an unstable process, since sensors on an out-of-control process just document the variation without fixing it. Expect a real validation campaign correlating signals with destructive or CT ground truth before you grant the system any accept/reject authority. For cheap parts with fast, easy end-of-line checks, conventional inspection plus SPC is usually the better investment.

## Key numbers

Sampling rates from 1 kHz for spindle load and cavity pressure up to 100 kHz for melt-pool photodiodes and 1 MHz for acoustic emission · detection latency milliseconds for tool breakage, seconds to minutes for process drift · melt-pool monitoring generates roughly 1–10 GB per build hour, so terabytes over a multi-day build · retrofit tool monitoring $5–20k per spindle, cavity-pressure instrumentation $5–15k per tool, OEM melt-pool packages $50–250k · validation typically takes dozens of correlated builds or coupons before the system gets accept/reject authority.

## Examples

CNC tool-wear monitoring, additive melt-pool monitoring, molding cavity pressure, weld monitoring, coating inspection.

## Economic profile

Hardware is cheap relative to what it protects: $5–20k per spindle for tool monitoring against a machine worth far more and a crash that stops the line. The expensive part is validation, which typically takes dozens of correlated builds or coupons before the system is allowed to accept or reject anything. Until then it is an alarm a person has to adjudicate, which is a labor cost rather than a saving. Storage at 1–10 GB per build hour is a standing bill.

## Videos

- https://www.youtube.com/watch?v=ItJT5AhdlSQ — Adaptive CNC Tool Monitoring System: Detect Wear and Breakage in Real-time (Caron Engineering, 3 minutes, 1k+ views)
- https://www.youtube.com/watch?v=VvgyFf16J0c — SLM® - Laser Power Monitoring and Melt Pool Monitoring (english) (Nikon SLM Solutions, 2 minutes, 5k+ views)
- https://www.youtube.com/watch?v=Jkz2Xndney0 — In situ X-ray imaging of defect and molten pool dynamics in laser additive… (ScienceVio, 2 minutes, 5k+ views)

## Further reading

[Cavity Pressure Monitoring in Injection Molding (Kistler)](https://www.kistler.com/INT/en/cavity-pressure/C00000099) · [Measurement Science for Real-Time Control of Powder Bed Fusion, NISTIR 8036 (NIST)](https://nvlpubs.nist.gov/nistpubs/ir/2015/NIST.IR.8036.pdf)
