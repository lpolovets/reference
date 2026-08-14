---
number: 3
name: Computed Tomography
part: 1
group: X-ray & CT
uses: [diag, screen, guide]
invasiveness: [ext, inj]
capex: high
regclass: c2
maturity: std
---

## Description
A CT scanner spins an X-ray tube and an arc of detectors around the patient on a slip-ring gantry, typically one rotation every 0.25–0.5 seconds, while the table moves through the bore. Thousands of projections are reconstructed into cross-sections, historically by filtered back projection and now usually by iterative or deep-learning reconstruction, giving 0.4–0.6 mm in-plane resolution and slices down to 0.5 mm. Modern scanners carry 64–320 detector rows covering 40–160 mm per rotation, so a chest scan takes a few seconds and a whole-body trauma scan under a minute. Most body imaging uses intravenous iodinated contrast, which is why the invasiveness here runs from external to injected. Dose is measured on the machine as CTDIvol in mGy and dose-length product in mGy·cm, then converted to effective dose with a body-region factor; a chest CT comes out around 6.1 mSv and an abdomen-and-pelvis CT around 7.7 mSv, against roughly 3 mSv a year of natural background and about 0.1 mSv for a chest radiograph.

## Strengths and weaknesses
CT is fast, available around the clock, and answers most acute clinical questions in one pass, which is why it became the backbone of emergency medicine. The cost is radiation. Roughly 93 million CT examinations were performed in the US in 2023, and a 2025 modeling study projected on the order of 100,000 future cancers from that single year of scanning; the estimate is contested, but the scale of population exposure is not. CT also separates tissue only by electron density, so its soft-tissue contrast is far worse than MRI: it cannot distinguish gray from white matter usefully, or characterize a soft-tissue tumor the way MRI can. Dense metal and heavy calcification cause beam-hardening and streak artifacts that can make an implant or a calcified coronary segment unreadable.

## When to use
Make CT the default for trauma, acute abdominal pain, suspected pulmonary embolism, stroke triage, and staging most solid tumors, because speed and availability matter more than tissue contrast in all of those. Pick MRI when the question is soft tissue, bone marrow, or the brain beyond ruling out hemorrhage, and pick ultrasound first in children and in pregnancy, where the dose argument is strongest. Before ordering a CT in a young patient, ask whether the same study will be repeated ten times over the next decade, because the cumulative dose is the number that matters rather than the single exam. For screening, only low-dose CT in high-risk smokers has both outcome evidence and a reimbursement pathway, and that protocol runs about 1.5 mSv rather than the 6.1 mSv of a diagnostic chest CT.

## Key numbers
0.25–0.5 s gantry rotation, 64–320 detector rows, 40–160 mm coverage per rotation · 0.4–0.6 mm in-plane resolution, 0.5 mm slices · chest CT 6.1 mSv, abdomen and pelvis 7.7 mSv, low-dose lung screening 1.5 mSv, chest radiograph 0.1 mSv, natural background 3 mSv a year · roughly 93 million US CT examinations in 2023 · $80–150k refurbished 16-slice to above $3M list for a premium system, plus $200–500k of siting · service contract 8–12% of capital a year · 20–40 studies a day.

## Examples
GE Revolution, Siemens Somatom Force and X.cite, Philips Incisive CT, Canon Aquilion ONE; the National Lung Screening Trial and the low-dose CT screening program built on it; the ACR Dose Index Registry, which lets a hospital compare its own CTDIvol against national distributions.

## Economic profile
The price range is wide enough that "a CT scanner" means very little on its own: a refurbished 16-slice sells for $80–150k, a new mid-range 64-slice for roughly $400–800k, and a premium wide-detector or dual-source system lists above $3M before the discount every buyer negotiates. Siting adds $200–500k, since the room needs lead shielding, three-phase power, chilled air and a floor rated for the gantry. Service contracts run 8–12% of capital a year and mostly buy tubes. Revenue arrives per study: Medicare pays roughly $250–350 for a contrast-enhanced abdomen-and-pelvis CT in a hospital outpatient department, of which roughly $60–80 is the radiologist's professional component, and a freestanding imaging center is paid less for the same scan. Run the arithmetic and the business model is obvious: 25 studies a day, 300 days a year, at $300 a study is about $2.25M of technical revenue, so utilization drives the purchase far more than image quality does. That is also why the second scanner in a hospital is a much harder sale than the first, and why a new entrant selling image quality alone has no argument against an installed base of tens of thousands of adequate scanners.

## Videos

- https://www.youtube.com/watch?v=l9swbAtRRbg — How Does a CT Scan Work? (NIBIB, 1 minute, 1m+ views)
- https://www.youtube.com/watch?v=mvMO7CsU2To — CT physics overview | Computed Tomography Physics Course | Radiology Physics Course Lesson #1 (Radiology Tutorials, 20 minutes, 50k+ views)

## Further reading

[The Measurement, Reporting, and Management of Radiation Dose in CT (AAPM Report No. 96)](https://www.aapm.org/pubs/reports/RPT_96.pdf) · [Projected Lifetime Cancer Risks From Current Computed Tomography Imaging (JAMA Internal Medicine)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11997853/)
