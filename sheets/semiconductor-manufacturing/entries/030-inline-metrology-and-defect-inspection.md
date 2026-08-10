---
number: 30
name: Inline metrology and defect inspection
part: 7
group: Test and metrology
devices: [logic, memory, analog, power, rf, photonic]
node: [mature, adv, lead, front]
wafer: [w200, w300]
toolcost: med
suppliers: duo
---

## Description
A fab cannot improve a yield it cannot see, so at a leading node it measures something after a large fraction of its thousand-odd process steps. Two different jobs hide under the same heading. Metrology asks whether the process is on target: is the critical dimension what it should be, is the film the right thickness, did this layer land on the one below it? Scatterometry infers dimensions from how a periodic structure diffracts light, CD-SEM images features directly, and optical overlay tools read alignment marks. Inspection asks a different question, which is whether anything is there that should not be. Brightfield and darkfield optical scanners sweep a whole wafer looking for anything that differs from the neighbouring die, and e-beam review then goes back to the coordinates optics flagged and images them at resolution good enough to say what the defect actually is. Both feed the same loop: measure, find the drifting or failing step, correct it, and drive defect density down.

## Strengths and weaknesses
Process control is what makes a fab profitable rather than merely functional, because yield learning is the difference between a ramp that pays for the tools and one that does not. The fundamental limitation is a throughput-versus-sensitivity trade that has no way around it. An optical inspector scans a whole wafer but can only see defects near or above its wavelength, and turning up sensitivity slows it down and buries the engineer in nuisance detections. An e-beam tool sees essentially everything and inspects almost nothing per hour, so it is a sampling instrument, not a screen. The result is that no fab inspects everything, and the practical failure mode is a systematic defect that the sampling plan happens to miss, which then shows up weeks later as a yield cliff on lots already deep in the line. The second failure mode is a metrology tool that drifts, since a measurement error feeds straight into a process correction and moves the process off target with high confidence.

## When to use
Every fab runs both, so the real decision is how much and where. As a rule of thumb, spend inspection capacity where a defect is both likely and fatal (lithography, high-aspect-ratio etch, CMP, and any bonding step) and spend metrology where the process window is tightest (overlay at multi-patterned layers, gate and channel dimensions, film thickness on anything conformal). Early in a ramp, inspect far more than makes economic sense at maturity, because the information is worth more than the throughput. Sample rather than screen once the process is stable and defect density has settled. If you are planning a fab, budget process control as a permanent operating capability rather than a startup cost, because a fab without inspection capacity cannot diagnose its own yield and will lose the learning race to one that can.

## Key numbers
Defect density runs roughly 0.05–0.15 defects/cm² on a mature process against 0.2–0.5 early in a leading-edge ramp · a 1 cm² die at 0.1 defects/cm² yields about 90%, while a 6 cm² die at 0.4 yields under 20% · a leading-edge flow has something like a thousand process steps, with measurement after a large share of them · top-end patterned-wafer inspectors in the tens of millions of dollars each · e-beam review sees what optics cannot, at a small fraction of the area per hour.

## Supply chain
Process control is the most concentrated equipment segment after lithography. KLA is the dominant supplier of patterned-wafer inspection and holds strong positions across metrology as well, with Applied Materials the main alternative in inspection and e-beam review, Hitachi High-Tech supplying most CD-SEMs, and ASML selling multi-beam e-beam inspection through its HMI unit. Onto Innovation, Nova, and Camtek fill out the optical metrology and packaging inspection tiers. Published figures for how much of wafer fab equipment spending goes to process control vary widely and are not worth quoting, but the concentration itself is not in dispute: for the highest-sensitivity inspection there is no broad second source. That has a practical consequence for anyone trying to build a fab outside the export-control perimeter, because inspection tools are on the restricted list alongside lithography and etch, and a fab that cannot inspect can still make wafers but cannot learn its way to competitive yield. Chinese suppliers such as Skyverse are the visible domestic effort, and they are furthest behind at the high-sensitivity end.

## Examples
KLA's brightfield and darkfield patterned-wafer inspectors and its overlay metrology line are the industry references. Applied Materials sells the SEMVision e-beam review and Prizm CD-SEM lines. Hitachi High-Tech supplies most of the CD-SEM installed base. ASML's HMI multi-beam e-beam inspection tools target the sensitivity gap optics cannot close. Onto Innovation and Camtek dominate advanced-packaging inspection, where bump and RDL metrology on reconstituted wafers is a distinct problem. Nova supplies optical CD and materials metrology.

## Economic profile
Process control tools do not add value to a wafer, which makes them permanently easy to under-buy and permanently the wrong thing to cut. The payback is entirely in yield learning speed, and yield learning speed compounds: a fab that finds a systematic defect two weeks earlier saves the material in the line plus the two weeks of ramp. That is why leading-edge fabs buy far more inspection per wafer start than mature ones, and why the segment's revenue tracks new-node ramps rather than total wafer volume. For investors the interesting structural feature is that the dominant supplier's position rests on defect-classification data and algorithms accumulated across decades of customer fabs, which is a harder thing to copy than a mechanism. Competing on the optics is possible; competing on knowing which of ten thousand detections matter is much harder.

## Videos

- https://www.youtube.com/watch?v=7muPttN8GRU — How Semiconductor Yields Vastly Improved (Asianometry, 17 minutes, 100k+ views)
- https://www.youtube.com/watch?v=e46Bla8ziqE — How a Scanning Electron Microscope (SEM) Works - 2026 (Microscopy Specialist, 10 minutes, 10k+ views)

## Further reading

[Metrology for Nanolithography (NIST)](https://www.nist.gov/programs-projects/metrology-nanolithography) · [Scanning Electron Microscopy-based Automatic Defect Inspection for Semiconductor Manufacturing: A Systematic Review (arXiv)](https://arxiv.org/abs/2409.06833)
