---
number: 4
name: Photon-Counting CT
part: 1
group: X-ray & CT
uses: [diag]
invasiveness: [ext, inj]
capex: vhigh
regclass: c2
maturity: early
---

## Description
A conventional CT detector integrates energy: a ceramic scintillator turns X-rays into light, a photodiode turns the light into current, and every photon arriving during a reading is summed together with the high-energy ones counted more heavily than they should be. A photon-counting detector replaces that chain with a single thick semiconductor, cadmium telluride or cadmium zinc telluride roughly 1.6–2 mm deep under a bias field of several hundred volts per millimeter, which converts each X-ray directly into a charge pulse. Fast pulse-processing electronics count each pulse individually and sort it into 2–8 energy bins. Three things follow from that. Electronic noise falls below the counting threshold and drops out of the image entirely, which is what helps most in low-dose and large-patient scanning. The detector needs no reflective septa between elements, so pixels can be subdivided far more finely, reaching about 0.15 mm at isocenter against roughly 0.5 mm on a conventional scanner. And every scan carries spectral information without a second tube, a second rotation, or a decision made before the patient arrives.

## Strengths and weaknesses
What that buys clinically is specific rather than general: ultra-high-resolution scanning that resolves the inside of a coronary stent and fine lung interstitium, iodine contrast-to-noise improvement of roughly 20–40% that a site can spend either as less contrast agent or as less dose, and virtual monoenergetic and material-decomposition images from a routine acquisition, which help most where calcium blooming or metal artifact currently ruins the study. The limits are physical and industrial. At clinical flux a pixel sees up to about 10⁹ photons per mm² per second, and overlapping pulses distort the energy measurement, so pixels have to be both small and fast, and charge shared between neighboring pixels degrades exactly the energy resolution the design exists to provide. Large-area, defect-free cadmium telluride and cadmium zinc telluride crystals grow slowly at low yield, and that crystal supply is the main reason the scanner costs what it does.

## When to use
Buy one if you are a high-volume cardiac or thoracic center where resolution and spectral data change decisions: heavily calcified coronaries, stent-in-stent restenosis, interstitial lung disease, and patients in whom contrast volume or dose has to be minimized. Do not buy one as a general-purpose replacement in a community hospital, because the same CPT code pays the same amount for a photon-counting scan as for a conventional one and the extra $1M does not come back on volume. If your constraint is throughput, two conventional scanners beat one photon-counting scanner every time. If your constraint is one specific spectral question, a dual-energy conventional scanner does much of the same work for a fraction of the premium. Treat any purchase now as an early-adopter position: the technology works, and the evidence that it changes outcomes rather than images is still being collected.

## Key numbers
Cadmium telluride or cadmium zinc telluride 1.6–2 mm thick, several hundred volts per millimeter bias · 2–8 energy bins, no electronic noise above threshold · about 0.15 mm resolution at isocenter against roughly 0.5 mm conventional · iodine contrast-to-noise up roughly 20–40% · flux up to about 10⁹ photons per mm² per second before pile-up · list price roughly $3–4M, a premium of about 30–50% over a premium conventional scanner · installed base in the hundreds worldwide against tens of thousands of conventional scanners · no separate CPT code.

## Examples
Siemens NAEOTOM Alpha, the first cleared system, which went through the FDA as a 510(k) in September 2021 (K211591) under the same product code as any other CT scanner, followed by the Alpha.Peak, .Pro and .Prime clearances in February 2025 (K243523); Canon's 2021 acquisition of Redlen Technologies, a cadmium zinc telluride crystal house; GE's deep-silicon detector program built on its purchase of Prismatic Sensors; Kromek and Acrorad as the other significant crystal suppliers.

## Economic profile
The regulatory story here is the good news and the problem at once. Photon-counting CT cleared as a Class II device through 510(k) against conventional CT as the predicate, which cost months rather than the years a premarket approval would have taken, and no new CPT code came with it. A photon-counting scan bills exactly like any other CT scan, so the whole premium has to be recovered from referral capture, from contrast and dose savings, or from studies a conventional scanner cannot do at all. Against a list price of roughly $3–4M and a premium conventional scanner at $2–2.5M, that is $1M or more to justify on soft revenue, and a hospital capital committee will ask for the referral argument in writing. The cost curve runs through the crystals: yield on large defect-free cadmium telluride wafers is the binding constraint, which is why Canon bought Redlen outright and why GE went after silicon instead, where the material is cheap and the physics is harder. Expect the installed base, currently in the hundreds worldwide, to grow with crystal yield rather than with clinical evidence.

## Videos

- https://www.youtube.com/watch?v=ykOHBVVCwDo — Photon-counting CT explained - part 1 (Siemens Healthineers, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=AzVGjH1j6sE — What's so great about photon-counting CT? (Aunt Minnie, 7 minutes, 1k+ views)

## Further reading

[Technical Basics and Clinical Benefits of Photon-Counting CT (Investigative Radiology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10259209/) · [510(k) Premarket Notification K211591, NAEOTOM Alpha (FDA)](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K211591)
