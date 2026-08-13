---
number: 16
name: Optically Pumped Magnetometers
part: 5
group: Field & inertial sensing
temperature: room
uses: [sense]
horizon: now
maturity: comm
bottleneck: fab
---

## Description
An optically pumped magnetometer measures magnetic field through atomic spins in a vapor cell. A laser polarizes the alkali atoms, usually rubidium or cesium, and the field causes those spins to precess, which changes how much light the vapor transmits. Run the cell hot and in a very low field and spin-exchange collisions stop dephasing the atoms, the regime called SERF, where sensitivity reaches a few femtotesla per root hertz. That is comparable to a SQUID, without liquid helium.

## Strengths and weaknesses
Matching SQUID sensitivity without cryogenics is what made these commercially important: a magnetoencephalography system built from OPM sensors can sit on a subject's head like a helmet instead of requiring them to stay motionless under a fixed dewar, which finally allows brain imaging of children and of people moving. Sensors are small and cheap enough to array. The limits are field range and environment. SERF operation needs the ambient field nulled to nanotesla, so shielding or active compensation is mandatory, and the cells run at 150 °C, which complicates wearable designs.

## When to use
Use OPMs where you need very weak magnetic fields measured without cryogenics: biomagnetic imaging, magnetic anomaly detection, and non-destructive testing. They are the clear successor to SQUIDs in magnetoencephalography. Use a fluxgate or Hall sensor where the field is strong and the requirement is ruggedness rather than sensitivity, since those are orders of magnitude cheaper. And plan the shielding, because in an unshielded room a SERF magnetometer measures the building, not the sample.

## Key numbers
Sensitivity of a few femtotesla per root hertz in SERF operation, comparable to a SQUID · needs no cryogenics, against liquid helium for SQUIDs · requires ambient field nulled to the nanotesla level · vapor cells operate near 150 °C · sensor heads small enough to array by the hundreds on a wearable helmet.

## Examples
Cerca Magnetics and QuSpin wearable magnetoencephalography systems; magnetic anomaly detection for submarine and unexploded ordnance survey; SandboxAQ's magnetic navigation work; the SERF technique developed at Princeton, which made the sensitivity possible.

## Videos

- https://www.youtube.com/watch?v=BLfwZ1NPNKY — Magnetoencephalography: measuring brain activity with magnetism (Alt Shift X, 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=xlIzI_VAsm4 — Quantum Sensing Explained: Optically Pumped Magnetometers, Vapor Cells, and Brain Imaging (HAMAMATSU PHOTONICS, 2 minutes, under 1k views)
- https://www.youtube.com/watch?v=ldbWH9NBG0s — MEGIN discusses Optically Pumped Magnetometers (OPMs) and conventional Squid-based MEG utilization. (MEGIN, 8 minutes, 1k+ views)

## Further reading

[Atomic Devices and Instrumentation Group (NIST)](https://www.nist.gov/pml/time-and-frequency-division/atomic-devices-and-instrumentation)
