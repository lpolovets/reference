---
number: 24
name: Single-Photon Detectors
part: 5
group: Detectors
band: [vis, swir]
apps: [metro, sense, med, def]
form: mod
cost: u100k
maturity: est
---

## Description
Two technologies count individual photons. A single-photon avalanche diode is an APD biased above breakdown, so one absorbed photon triggers a self-sustaining avalanche that produces a large digital pulse; a quench circuit then resets it. A superconducting nanowire single-photon detector is a meander of superconducting wire held near 1 K and biased just below its critical current, where one photon creates a resistive hotspot and a voltage pulse. The two occupy opposite ends of the performance and cost range.

## Strengths and weaknesses
SPADs are compact, work at or near room temperature, cost tens of dollars, and are made in CMOS arrays for direct time-of-flight imaging. Superconducting nanowires reach 90–98% detection efficiency at 1,550 nm with dark counts of a few per second and timing jitter under 20 picoseconds, which is far beyond any semiconductor device. The costs mirror that. SPADs at telecom wavelengths have poor efficiency and high dark counts, and both types have dead time after each detection that limits count rate. A nanowire system needs a cryostat and costs six figures.

## When to use
Use SPADs where integration and cost dominate: direct time-of-flight LiDAR, fluorescence lifetime imaging, and consumer proximity sensing. Use superconducting nanowires where efficiency and timing at 1,550 nm decide the experiment, which means quantum key distribution, quantum networking, and photon-starved astronomy, and accept the cryostat. Check dead time against the expected count rate in both cases, since a detector that saturates gives a nonlinear answer rather than a noisy one.

## Key numbers
SPAD detection efficiency 30–50% in the visible, much lower at 1,550 nm · superconducting nanowires reach 90–98% at 1,550 nm with jitter under 20 ps · nanowire dark counts of a few per second against thousands for a SPAD · dead time of tens of nanoseconds limits count rate · nanowire systems need cooling to around 1 K and cost well into six figures.

## Examples
SPAD arrays in smartphone time-of-flight sensors and in automotive LiDAR; superconducting nanowire detectors in quantum key distribution links and in NASA's deep-space optical communication receivers; fluorescence lifetime imaging systems built on SPAD arrays.

## Economic profile
These two technologies sit four orders of magnitude apart on price, and neither number is really about the detector. A SPAD is CMOS, so smartphone proximity sensing and time-of-flight paid for the process development and an array now costs tens of dollars; counting photons is not expensive once the counting happens on a silicon die. A superconducting nanowire is also a cheap piece of film, and the six figures a system costs are the closed-cycle cryostat holding it near 1 K, the bias and readout electronics, and the integration labor. That has a useful consequence for anyone budgeting one: the marginal cost of another channel is far below the cost of the first, which is why quantum networking testbeds and deep-space optical receivers are built with many channels rather than one. The economics improve only if cryocoolers get cheaper, so compare cooler options and channel count before comparing nanowire specifications. If the photons are visible rather than at 1,550 nm, a SPAD does the job for tens of dollars and the question does not arise.

## Videos

- https://www.youtube.com/watch?v=pea1Uftrujc — The Basics of Single Photon Avalanche Diodes (Kevin Zhang, 12 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hL2pUtGWCFg — Superconducting Nanowire Single Photon Detectors (Erick Elizalde, 14 minutes, under 1k views)
- https://www.youtube.com/watch?v=fQ-5fHYOxrI — Single Photon Avalanche Diode (SPAD) – Complete Explanation | Principle, Construction & Working (GHS, 5 minutes, under 1k views)

## Further reading

[Sensor Science Division (NIST)](https://www.nist.gov/pml/sensor-science) · [Superconducting nanowire single-photon detectors: physics and applications (arXiv)](https://arxiv.org/abs/1204.5560)
