---
number: 8
name: Low-Field and Portable MRI
part: 2
group: Magnetic resonance
uses: [diag]
invasiveness: [ext]
capex: mid
regclass: c2
maturity: early
---

## Description
Low-field MRI drops the static field from 1.5 T to somewhere between 0.55 T and 64 mT, which lets the magnet be a permanent neodymium array or a lightly cooled superconductor instead of a helium bath. Signal falls steeply with field, roughly as the square of the field strength for a fixed acquisition, so a 64 mT scanner starts with a small fraction of the signal a 1.5 T scanner has and buys it back with long averaging, thick slices, and trained reconstruction. The payoff is siting: a point-of-care head scanner such as the Hyperfine Swoop weighs about 630 kg, runs off a standard wall outlet, and has a 5-gauss line inside about a meter, so it rolls to the bedside with no shielded room and no quench pipe. At 64 mT a brain exam typically acquires about 1.5 mm in plane with 5 mm slices, against roughly 1 mm isotropic at 3 T. The 0.55 T tier is a different product: a whole-body scanner with an 80 cm bore holding under a liter of helium, aimed at the standard MRI market rather than at the bedside.

## Strengths and weaknesses
The physics that costs signal also buys things back. Susceptibility artifact scales with field, so low field images better next to metal implants and in the lung, T1 contrast is intrinsically better, and specific absorption rate is far lower, which loosens the restrictions on scanning patients with implanted hardware. The weakness is what the images can answer. At 64 mT the scanner reliably shows ventricle size, midline shift, hydrocephalus, large intracranial hemorrhage, and large territorial infarcts, and it does not reliably show small infarcts, microbleeds, small metastases, or posterior fossa detail. Deep learning reconstruction improves how the images look faster than it improves what they detect, which is the honest caution on every published comparison.

## When to use
Use a 64 mT point-of-care scanner where the alternative is no MRI at all: an ICU patient too unstable to move, a stroke unit that needs a repeat look at a known bleed, a field hospital, or a low-resource setting with no shielded room. Do not use it to rule out a small posterior fossa lesion or an early small infarct, because a negative scan does not carry that weight. Choose 0.55 T instead if you want a general-purpose scanner and the constraint is construction cost or ceiling height, since it covers most body imaging and needs neither a quench pipe nor heavy shielding. If the patient can travel to a conventional scanner and the question is diagnostic rather than triage, send them to 1.5 T. Before buying, confirm with your payers that a low-field exam bills under the existing MRI codes, because there is no separate code for it and no separate payment.

## Key numbers
Field 64 mT to 0.55 T against 1.5–3 T conventional · signal falls roughly with the square of field strength for a fixed acquisition · about 1.5 mm in plane and 5 mm slices at 64 mT, against roughly 1 mm isotropic at 3 T · point-of-care unit about 630 kg on a standard wall outlet, 5-gauss line inside about a meter · 0.55 T whole-body with an 80 cm bore and under a liter of helium · roughly $250k for a head-only unit and $0.5–1M for 0.55 T whole-body.

## Examples
Hyperfine Swoop, a 64 mT bedside brain scanner FDA-cleared since 2020 and deployed in ICUs, stroke units and research programs in Uganda and Malawi; Siemens Magnetom Free.Max at 0.55 T with an 80 cm bore and a sealed sub-liter helium magnet; the Open Source Imaging Initiative's OSI² ONE, a published open-hardware low-field scanner.

## Economic profile
The cost argument is siting, not the magnet. A conventional MRI project pays for a copper-lined room, a quench vent, floor reinforcement and a chiller, and a scanner that needs none of those can be installed in an existing room in days. A point-of-care head scanner runs roughly $250k against $1–3M for a conventional system, and a 0.55 T whole-body scanner roughly $0.5–1M, so the capital committee sees a different kind of decision. What is unsettled is revenue. There is no distinct CPT code for a low-field exam, so it bills as an MRI of the same body part or it does not bill at all, and a hospital buying one on a triage argument is buying avoided transport and avoided CT rather than new billing. That makes the strongest early business cases the ones where moving the patient is expensive or dangerous, and the weakest the ones that assume outpatient imaging volume will migrate down in field strength. Expect the 0.55 T tier to grow faster commercially than the 64 mT tier, because it sells into an existing reimbursed workflow.

## Videos

- https://www.youtube.com/watch?v=KY6X4T3NN3U — OSI² ONE: An Open Source Low-Field magnetic resonance imaging (MRI) Scanner (Open Source Imaging Initiative (OSI²), 12 minutes, 1k+ views)
- https://www.youtube.com/watch?v=TgHntHMWlms — Matthew Rosen: Building an MRI Scanner 60 Times Cheaper & Small Enough to Fit in an Ambulance (LDV Capital, 13 minutes, 1k+ views)

## Further reading

[Low-field MRI: Clinical promise and challenges (Journal of Magnetic Resonance Imaging)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9771987/) · [Design, Characterisation and Performance of an Improved Portable and Sustainable Low-Field MRI System (Frontiers in Physics)](https://www.frontiersin.org/articles/10.3389/fphy.2021.701157/full)
