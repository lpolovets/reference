---
number: 7
name: Superconducting MRI
part: 2
group: Magnetic resonance
uses: [diag, screen]
invasiveness: [ext, inj]
capex: vhigh
regclass: c2
maturity: std
---

## Description
An MRI scanner puts the patient inside a strong static magnetic field, tips the hydrogen nuclei in tissue with a radiofrequency pulse, and listens to the signal they give off as they realign. The field comes from a niobium-titanium solenoid cooled to about 4 K, where the wire carries current with no resistance, so once the magnet is ramped the current circulates in a closed loop with the power supply disconnected. Clinical systems run at 1.5 T or 3 T with a 60 cm or 70 cm patient bore, and the magnet alone weighs 3 to 6 metric tons. Signal rises roughly linearly with field strength, which is why 3 T became standard for neuro and musculoskeletal work and why 7 T systems are cleared in the US for head and knee imaging only. Many exams add an injected gadolinium contrast agent, which shortens T1 locally and makes vascular and enhancing tissue stand out. If any part of the winding goes normal, the stored energy dumps into the coil and boils the helium, and the resulting quench vents several thousand cubic meters of cold gas that has to leave the building through a dedicated pipe.

## Strengths and weaknesses
MRI gives the best soft-tissue contrast of any modality and uses no ionizing radiation, so it can be repeated on the same patient without a dose budget, and changing the pulse sequence changes the contrast mechanism without changing the hardware. The weaknesses are cost, throughput, and infrastructure. A scan takes 20 to 45 minutes against about 10 seconds for CT, so a busy scanner does 10 to 12 patients a day rather than 40. The magnet is always on, which means a permanent 5-gauss safety perimeter, a ferrous-object screening process, and a real injury mechanism when screening fails. Older magnets hold 1,500 to 2,000 liters of liquid helium and lose some to boil-off, and MRI accounts for roughly 17% of US helium consumption, so a supply squeeze shows up as a cryogen bill rather than a shortage of scanners.

## When to use
Buy 1.5 T as the default: it covers nearly every clinical indication, it is more forgiving of implants and metal artifact, and it costs roughly a third less than 3 T. Go to 3 T if your volume is weighted toward neuro, prostate, or research spectroscopy, where the extra signal buys either resolution or scan time. If your building cannot take a 6-metric-ton magnet, a quench pipe to the roof, and a copper-lined RF room, price the construction before the scanner, because siting often costs as much as the magnet. Choose a sealed low-helium magnet if you are in a region where cryogen delivery is unreliable or expensive, and accept that the magnet cannot then be serviced by topping it up. If the question is bone detail, acute trauma, or anything that has to be answered in under a minute, use CT instead.

## Key numbers
1.5 T and 3 T clinical standard, 7 T cleared for head and knee · magnet at about 4 K weighing 3–6 metric tons · bore 60 or 70 cm · conventional magnets hold 1,500–2,000 liters of liquid helium, sealed designs under 10 · MRI is roughly 17% of US helium consumption · 20–45 minute exams, 10–12 patients per scanner per day · scanner $1–3M with siting often the same again.

## Examples
Siemens Magnetom, GE Signa and Philips Ingenia platforms cover most of the installed base; Philips BlueSeal ships a sealed magnet holding under 10 liters of helium instead of 1,500; Siemens Magnetom Terra was the first 7 T system cleared in the US, for head and knee imaging.

## Economic profile
A 1.5 T scanner lists around $1M and a 3 T around $2–3M, but the project cost is what matters: RF shielding, a quench vent to outside air, floor reinforcement for a 6-metric-ton magnet, a chiller loop, and the construction to put all of that in an existing building routinely add as much again. Service contracts run about 8–12% of capital per year, so a $2M scanner carries a $160–240k annual line before staff. Revenue comes from volume against a fixed cost base: Medicare pays a few hundred dollars for a typical outpatient MRI, so a scanner needs roughly 10 to 12 exams a day to work, and utilization rather than image quality decides whether the room pays. That is why hospitals extend hours rather than buy a second magnet, and why an imaging center's business case is mostly a scheduling argument. Helium is a small operating line for a modern zero-boil-off magnet and a large one-time cost if a magnet quenches and has to be refilled and re-ramped, which is the case sealed magnets are sold against. The installed base is enormous and slow to turn over, magnets last 15 to 20 years, and most competition happens on the console and the coils rather than on the magnet.

## Videos

- https://www.youtube.com/watch?v=NlYXqRG7lus — The Insane Engineering of MRI Machines (Real Engineering, 18 minutes, 1m+ views)
- https://www.youtube.com/watch?v=_-e12TPIFxw — What Is an MRI Quench? (Block Imaging, 4 minutes, 10k+ views)

## Further reading

[A Narrative Review of Advancements in Magnetic Resonance Imaging (MRI) Technology: Evaluating the Shift From Helium-Cooled to Helium-Free Systems (Cureus)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12701844/) · [Helium: Mineral Commodity Summaries 2025 (U.S. Geological Survey)](https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-helium.pdf)
