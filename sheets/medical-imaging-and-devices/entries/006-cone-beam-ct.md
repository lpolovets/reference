---
number: 6
name: Cone-Beam CT
part: 1
group: X-ray & CT
uses: [guide, diag]
invasiveness: [ext]
capex: high
regclass: c2
maturity: grow
---

## Description
Cone-beam CT replaces the fan beam and detector arc of a medical CT with a cone-shaped beam and a single flat-panel detector, so one rotation of 180–360 degrees captures the whole volume in 150–600 projections and reconstructs it with the Feldkamp algorithm. The payoff is isotropic voxels, 75–200 µm in dental units and 0.2–0.5 mm in interventional and radiotherapy systems, where a medical CT's in-plane resolution is much finer than its slice thickness. The price is scatter. With a wide cone angle the scatter-to-primary ratio at the detector can exceed 1, which flattens low-contrast detectability and makes the reconstructed values unreliable, so cone-beam numbers are not true Hounsfield units and cannot be used for tissue characterization or for radiotherapy dose calculation without correction. Dose sits between plain radiography and CT: a dental cone-beam scan is roughly 0.18 mSv, about seven times a panoramic radiograph at 0.025 mSv and roughly a tenth of a head CT at 1.6 mSv.

## Strengths and weaknesses
Because the hardware is just a tube and a flat panel on a rotating arm, cone-beam CT can be built into places a CT gantry cannot go: a chairside dental unit, a C-arm in an angiography suite, a linear accelerator gantry, a mobile ring in an operating room, and a standing extremity scanner that images a joint under load. Bone, teeth and metal hardware all image well, and the geometry is accurate enough to plan an implant or register a navigation system. The weakness is soft tissue: low-contrast detectability is roughly an order of magnitude worse than diagnostic CT because of scatter and detector lag, so this is a geometry instrument rather than a tissue instrument. Cone-beam artifacts also worsen away from the central plane, and acquisitions of 5–30 seconds make the image sensitive to patient motion in a way a sub-second CT is not.

## When to use
Reach for cone-beam CT when you need three-dimensional geometry at the point of care and the question is about bone, hardware or position. Planning a dental implant, treating a tooth with suspected extra canals, or assessing sinus anatomy are all good fits. If you are positioning a patient on a linear accelerator before each fraction, cone-beam CT is already built into the machine and there is no decision to make. Order a diagnostic CT instead whenever the question is soft tissue, an abscess, a tumor margin, or anything that needs reliable Hounsfield units. Do not use dental cone-beam CT as a routine screening exam: ADA and AAOMR guidance is explicit that it should be selected for a specific clinical question, because the dose is several times a panoramic view's and the field of view often covers structures nobody intended to read.

## Key numbers
150–600 projections in one 180–360 degree rotation, reconstructed by Feldkamp · isotropic voxels 75–200 µm dental, 0.2–0.5 mm interventional and radiotherapy · scatter-to-primary ratio can exceed 1, so values are not true Hounsfield units · dental scan roughly 0.18 mSv against 0.025 mSv panoramic and 1.6 mSv head CT · acquisition 5–30 seconds · dental unit $50–120k, extremity scanner $300–500k, C-arm option on a $1–2.5M angiography suite · dental scan billed at roughly $150–400.

## Examples
Planmeca ProMax and Carestream CS 9600 dental units; Medtronic O-arm for spine navigation; syngo DynaCT on Siemens Artis and XperCT on Philips Azurion in interventional suites; kV cone-beam imaging built into Varian and Elekta linear accelerators for daily patient positioning; Planmed Verity and CurveBeam weight-bearing extremity scanners; the ADA and AAOMR patient selection recommendations for dental radiography and cone-beam CT.

## Economic profile
The most instructive thing about cone-beam CT is who signs the purchase order. A dental unit costs $50–120k and is bought by a single practice out of operating cash flow, with no capital committee and no construction project, which makes it the only tomographic imaging sold that way. Dental scans are billed to dental plans or paid by the patient at roughly $150–400, so the payback is direct arithmetic: a $90k unit at $250 a scan needs about 360 scans to cover the box, and a practice doing three a week bills $36k a year, which clears the machine in about two and a half years. That self-funded path is why the dental installed base grew faster than any hospital modality. The hospital side works the opposite way. Cone-beam capability on an interventional C-arm is a detector-and-software option on a $1–2.5M angiography suite, and kV cone-beam imaging on a linear accelerator is standard equipment with no separate payment at all, since image guidance is bundled into the radiotherapy episode. Extremity and weight-bearing scanners at $300–500k sit in between and have the best margin story of the three: they bill under the same CT codes as a full scanner while costing a fifth as much, which is a real advantage for an orthopedic practice that owns its own imaging.

## Videos

- https://www.youtube.com/watch?v=RqW-6xCje44 — Difference Between CT and CBCT |CT and CBCT basic understanding| Fan beam vs Cone beam| (Dento Radiology, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=0eoYdtAmr8s — How CBCT Helps Endodontists Expose the Source of Tooth Pain (American Association of Endodontists, 3 minutes, 50k+ views)

## Further reading

[Dental Cone-beam Computed Tomography (FDA)](https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography) · [Mobile C-arm cone-beam CT for guidance of spine surgery: image quality, radiation dose, and integration with interventional guidance (Medical Physics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3161502/)
