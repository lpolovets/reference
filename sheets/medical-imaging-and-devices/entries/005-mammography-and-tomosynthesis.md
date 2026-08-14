---
number: 5
name: Mammography and Tomosynthesis
part: 1
group: X-ray & CT
uses: [screen, diag]
invasiveness: [ext]
capex: high
regclass: c3
maturity: std
---

## Description
A mammography unit is an X-ray system tuned for one tissue. It runs a tungsten or molybdenum anode at 25–35 kV through a rhodium or silver filter, compresses the breast to 4–6 cm with a paddle to cut thickness, scatter and motion together, and reads the beam on an amorphous selenium direct-conversion detector with 70–100 µm pixels. Two-dimensional full-field digital mammography takes two views of each breast. Digital breast tomosynthesis sweeps the tube through an arc of roughly 15–50 degrees, takes 9–25 low-dose projections along the way, and reconstructs a stack of 1 mm slices, which pulls apart the overlapping fibroglandular tissue that hides a real mass or fakes one on a flat projection. Dose is regulated more tightly here than anywhere else in imaging: the Mammography Quality Standards Act caps mean glandular dose at 3 mGy per view for a standard 4.2 cm compressed breast, and a four-view screening exam works out to about 0.28 mSv of effective dose in 2D and 0.34 mSv with tomosynthesis, against roughly 3 mSv a year of natural background.

## Strengths and weaknesses
Screening mammography is the only breast imaging with randomized mortality evidence behind it, which is why it is the population test and why everything else is supplemental. Tomosynthesis improves on it by a real but modest margin in community practice: recall rates fall by roughly 1–2 percentage points and cancer detection rises by roughly 1 per 1,000 screens, with most of the benefit in the first screening round and in women with heterogeneously dense breasts. It does much less in extremely dense breasts, where cancer and fibroglandular tissue attenuate similarly from every angle, so no amount of geometry separates them. Reading time roughly doubles with tomosynthesis, which is a genuine operational cost when a radiologist reads a hundred screens in a session. The dense-breast gap is closed with ultrasound or MRI rather than with a better mammogram.

## When to use
Screen with mammography as the default, following the USPSTF recommendation of biennial screening from age 40 to 74, and use tomosynthesis as the acquisition wherever you have it, since it costs the patient a small extra dose and lowers the chance of an unnecessary callback. Add supplemental ultrasound or MRI for women with dense breasts or high lifetime risk instead of expecting more from the mammogram itself. If a woman has a palpable lump or a nipple discharge, order diagnostic mammography plus ultrasound rather than a screening exam, because the codes, the workflow and the evidence standards are all different. If you are building a device and want a screening claim, budget for outcome data in an asymptomatic population, which is the most expensive trial design in medicine; if you can live with a diagnostic claim, a reader study is a far cheaper path.

## Key numbers
25–35 kV, amorphous selenium detector at 70–100 µm pixels, breast compressed to 4–6 cm · tomosynthesis sweeps 15–50 degrees in 9–25 projections and reconstructs 1 mm slices · MQSA caps mean glandular dose at 3 mGy per view · 0.28 mSv per screening exam in 2D and 0.34 mSv with tomosynthesis against 3 mSv a year of background · recall down roughly 1–2 percentage points, detection up roughly 1 per 1,000 · 9,118 certified US facilities and 27,692 accredited units, 13,515 of them tomosynthesis · roughly 45 million mammograms a year in the US · 2D unit $80–150k, tomosynthesis-capable unit $250–400k.

## Examples
Hologic Selenia Dimensions and 3Dimensions, approved by premarket approval in February 2011 (P080003); GE SenoClaire (P130020, August 2014); Siemens Mammomat Revelation and B.brilliant (P140011); Fujifilm Aspire Cristalle (P160031, January 2017); the ECOG-ACRIN TMIST randomized trial; the FDA rule requiring breast density notification, effective September 2024.

## Economic profile
The commercial split that matters here is screening versus diagnosis. A diagnostic claim can be supported by a multi-reader study on a few hundred cases; a screening claim in asymptomatic women needs outcome data, which is the most expensive kind of trial in medicine. FDA took a middle path with tomosynthesis, which is why the adoption path is worth studying closely. Hologic's Selenia Dimensions was approved as a Class III device by premarket approval in February 2011 on a reader study rather than a mortality trial, and because tomosynthesis is classified Class III, every competitor had to file its own PMA instead of a 510(k): GE's SenoClaire followed in August 2014 and Fujifilm's Aspire Cristalle in January 2017, giving Hologic roughly a three-year exclusive window that a predicate-based pathway would never have allowed. Then CMS created an add-on code for screening tomosynthesis worth roughly $50 on top of the roughly $140 it pays for a bilateral screening mammogram, and the purchase arithmetic became easy: a unit doing 25 screens a day for 250 days is 6,250 exams a year, so the add-on alone is about $310k a year against a $150–250k premium for the tomosynthesis-capable machine. Adoption followed the code, and 8,638 of 9,118 US certified facilities now have at least one tomosynthesis unit. TMIST, the randomized trial that would actually settle whether tomosynthesis reduces advanced cancers, enrolled roughly 129,000 women and only finished accrual in 2025, more than a decade after the technology became standard practice.

## Videos

- https://www.youtube.com/watch?v=YLaIlLxTlVQ — Tomosynthesis: New Breast Cancer Screening - Mayo Clinic (Mayo Clinic, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=y3zs4jJPUWg — Tomosynthesis (Does it offer 3D Mammography) (How Radiology Works, 15 minutes, 10k+ views)

## Further reading

[Recommendation: Breast Cancer: Screening (United States Preventive Services Taskforce)](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening) · [Screening Performance of Digital Breast Tomosynthesis vs Digital Mammography in Community Practice by Patient Age, Screening Round, and Breast Density (JAMA Network Open)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7388021/)
