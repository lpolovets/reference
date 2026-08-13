---
number: 23
name: Synchrophasors
part: 5
group: Protection & control
voltage: [hv, uhv]
roles: [vis, stab]
lead: fast
siting: fence
maturity: est
---

## Description
A phasor measurement unit samples voltage and current 30 to 120 times a second and stamps each measurement with GPS time, accurate to about a microsecond. Because every unit shares the same clock, measurements from hundreds of substations can be compared directly, and the phase angle between two ends of the system becomes a directly observed quantity rather than something a state estimator infers. That changes what operators can see: oscillations, angular separation, and the early signs of instability all live at timescales a four-second SCADA scan cannot resolve.

## Strengths and weaknesses
Synchrophasors make dynamics visible. They catch inter-area oscillations, verify generator models against real disturbances, and give post-event analysis a millisecond-resolution record instead of a set of sequence-of-events logs. The obstacles are data and use. A modest deployment produces terabytes a year, most of which nobody looks at, and the value comes from applications built on the stream rather than from the sensors. The other constraint is the clock: GPS timing is the single point of dependence, and spoofing or jamming corrupts the measurement in a way that looks like a real phase shift.

## When to use
Deploy synchrophasors where dynamics matter: long interconnections prone to inter-area oscillation, systems with a high share of inverter-based generation, and any network where model validation has become a recurring problem. Budget for the applications and the analysts, not just the units, since a deployment that produces archives nobody uses is common. Do not expect them to replace SCADA, which remains the control path. And plan alternate timing, because a system that depends entirely on GPS for measurement validity has a known single failure mode.

## Key numbers
30–120 samples per second, against a two to four second SCADA scan · time accuracy of about one microsecond, needed because one degree at 60 Hz is 46 microseconds · roughly 2,500 units across North America, up from a handful before 2009 · a single unit generates gigabytes per month · GPS is the usual time source and the usual dependency.

## Examples
The North American SynchroPhasor Initiative, which coordinated deployment and standards after the 2003 blackout; the 2016 Blue Cut fire event in California, whose inverter behavior was reconstructed from synchrophasor data; oscillation detection tools now running in several US control rooms.

## Videos

- https://www.youtube.com/watch?v=WiEbo62x2eQ — Understanding Synchrophasors (pjminterconnection, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=QyjmQjT3I74 — Synchrophasor Technology | Wide Area Monitoring System WAMS | Phasor Measurement Unit PMU (Power System Operation Slides, 15 minutes, 1k+ views)
- https://www.youtube.com/watch?v=nDQOsoDEfCs — Wide Area Monitoring Systems | Phasor Measurement Units | Wide Area Power System Protection (Power System Operation Slides, 8 minutes, 1k+ views)

## Further reading

[Time Synchronization in the Electric Power System (NASPI and PNNL)](https://www.naspi.org/sites/default/files/reference_documents/tstf_electric_power_system_report_pnnl_26331_march_2017_0.pdf)
