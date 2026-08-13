---
number: 15
name: Chip-Scale Atomic Clocks
part: 5
group: Clocks
temperature: room
uses: [time]
horizon: now
maturity: comm
bottleneck: fab
---

## Description
A chip-scale atomic clock puts a cesium or rubidium vapor cell, a VCSEL, and a photodiode into a package the size of a matchbox. The laser is modulated so that two of its sidebands drive a coherent population trapping resonance in the vapor, which shows up as a sharp change in transmitted light and is used to lock the local oscillator. Everything is made with microfabrication rather than assembled by hand, which is what took atomic timekeeping from a rack to a component.

## Strengths and weaknesses
It gives atomic-clock holdover in a device drawing well under a watt, and that combination has no alternative: a good crystal oscillator drifts by microseconds within an hour, while a chip-scale clock stays within a microsecond for a day. Cost is thousands rather than tens of thousands. The weaknesses are that it is far less stable than a rack-mounted rubidium standard, sensitive to temperature and magnetic field, and the vapor cell ages, so performance drifts over years. It is a holdover device, not a primary standard.

## When to use
Use a chip-scale clock wherever GPS timing might be lost and the system must keep working: undersea sensors, seismic arrays, military radios, and network equipment needing holdover. It is also the standard choice for platforms too small for a rack-mounted standard. Use a rubidium or cesium standard where stability over days matters and there is room and power for it. And be clear about the requirement: many designs specify an atomic clock when a disciplined oscillator with occasional GPS lock would do.

## Key numbers
Package volume of roughly 15–20 cm3 and power under 1 W · holdover typically within a microsecond over a day, against microseconds per hour for a good crystal oscillator · unit cost of a few thousand dollars · far less stable than a rack rubidium standard · vapor cell aging causes slow drift over years.

## Examples
Microchip's SA.45s chip-scale atomic clock, the first commercial device of this type, developed from DARPA-funded work at NIST and Sandia; undersea seismic and sonar nodes; military handheld radios needing timing without a GPS lock; timing holdover in telecom base stations.

## Videos

- https://www.youtube.com/watch?v=CogN630jUSs — TESTED: Chip Scale Atomic Clock (Precision Timing & Frequency Reference) (Baltic Lab, 20 minutes, 10k+ views)
- https://www.youtube.com/watch?v=nQPv5xPPugE — Chip-Scale Atomic Clocks Serve Low-Power & Remote Duties (Microwaves & RF, 3 minutes, under 1k views)
- https://www.youtube.com/watch?v=hz6Q8yv91ys — Chip Scale Atomic Clock (CSAC) Designed for Extreme Environments (Microchip Technology, Inc., 1 minute, 1k+ views)

## Further reading

[Atomic Devices and Instrumentation Group (NIST)](https://www.nist.gov/pml/time-and-frequency-division/atomic-devices-and-instrumentation)
