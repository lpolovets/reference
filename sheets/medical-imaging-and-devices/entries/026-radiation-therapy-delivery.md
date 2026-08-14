---
number: 26
name: Radiation Therapy Delivery
part: 5
group: Interventional & radiotherapy
uses: [treat]
invasiveness: [ext]
capex: vhigh
regclass: c2
maturity: std
---

## Description
A clinical linear accelerator pushes electrons down a copper waveguide driven by a magnetron or klystron at about 3 GHz, reaching 6–18 MeV in roughly a meter. For photon treatment those electrons hit a tungsten target and make bremsstrahlung X-rays; a multileaf collimator of 60 to 160 tungsten leaves, each around 5 mm wide at the isocenter, shapes the beam, and the gantry rotates around the patient so dose piles up at the target while the entrance dose is spread over many directions. Intensity-modulated and volumetric arc techniques move the leaves and vary the dose rate continuously during that rotation, which is how a concave dose distribution gets wrapped around a spinal cord. A conventional course is 2 Gy a day to 60–80 Gy over 30–40 weekday fractions, though hypofractionated schedules now deliver 26 Gy in five fractions for breast cancer and about 36 Gy in five for prostate. Proton therapy replaces the linac with a cyclotron or synchrotron running to 70–250 MeV, and the Bragg peak puts most of the energy at a depth set by the beam energy with nothing beyond it, so there is no exit dose at all. The IAEA's DIRAC directory lists more than 8,500 radiotherapy centers and over 20,000 treatment units worldwide, and the overwhelming majority of those units are photon linacs.

## Strengths and weaknesses
The photon linac is the workhorse, it treats roughly half of all cancer patients at some point, and modern planning shapes dose tightly enough that the technical argument is mostly settled. Its weaknesses are the beam going in and the beam coming out, plus the fact that the patient and the tumor are in slightly different places every day. MR-linacs address that directly by imaging soft tissue during treatment and replanning on the spot, at two to four times the capital cost and with treatment slots that run 45–60 minutes instead of 10–15, which halves the number of patients a machine can treat. Protons remove exit dose entirely, which is better dosimetry by inspection, but the clinical evidence is strong mainly in pediatric, skull base and ocular tumors, and the field still plans with a fixed relative biological effectiveness of 1.1 that turned out to underestimate central nervous system damage in some pediatric medulloblastoma cases.

## When to use
Treat almost everything on a photon linac, and hypofractionate wherever the trials support it, because five visits are better for the patient than twenty even though the department is paid less for them. Use protons where the tissue behind the target cannot take any dose and the patient has decades of life left: pediatric tumors, skull base, uveal melanoma, reirradiation. Do not build a proton case around prostate cancer, since private payers deny it and the randomized evidence does not carry the argument. Consider an MR-linac when your case mix is genuinely adaptive, meaning pancreas, liver and other targets that move next to bowel, and only if you can fill the schedule at an hour a patient. If the question is one to five brain metastases, a Gamma Knife or a linac-based radiosurgery platform is usually the cheaper way to the same plan.

## Key numbers
Electrons to 6–18 MeV, RF at roughly 3 GHz, multileaf collimator leaves about 5 mm wide at isocenter · conventional course 2 Gy × 30–40 fractions to 60–80 Gy, hypofractionated 26 Gy in 5 for breast · protons at 70–250 MeV with no exit dose · a linac runs a few million dollars plus a shielded vault and typically treats 25–35 patients a day, an MR-linac costs two to four times as much, a multi-room proton center $100–200M · more than 8,500 radiotherapy centers and 20,000 units worldwide · 30 US proton centers operating in 2019 with 10 more under construction

## Examples
Varian TrueBeam and Halcyon, from the business Siemens Healthineers bought in 2021 for about $16B; Elekta Versa HD and the Unity 1.5 T MR-linac; ViewRay's MRIdian, whose maker filed for Chapter 11 in August 2023; Accuray CyberKnife and TomoTherapy; Elekta Leksell Gamma Knife; proton systems from IBA, Varian, Mevion and Hitachi.

## Economic profile
US radiation oncology is paid per fraction, which means the clinical improvement of the last decade cuts provider revenue. A breast course that used to be 25 visits is now five, and the department's payment falls roughly in proportion while its fixed costs do not, so the machine has to be filled with more patients to stand still. Medicare's answer was the Radiation Oncology Model, a prospective episode payment that would have made fraction count irrelevant, and Congress blocked its start twice before CMS delayed it to a date still to be determined, so it has never run. The base machine is not the problem: a linac runs a few million dollars plus a shielded concrete vault, and it typically treats 25 to 35 patients a day for a decade or more. Proton therapy is where the arithmetic has failed most visibly. A multi-room center costs $100–200M, 30 were operating in the US in 2019 with 10 more under construction, and Scripps in San Diego opened in 2014 against a $220M investment and a plan to treat 2,000 patients a year, treated about 1,400, and filed for bankruptcy protection in 2017; Indiana University closed its center for the same reason. Single-room systems cut the entry price by most of an order of magnitude, but they do not fix the underlying problem, which is that the high-volume simple indication that would fill a center is prostate cancer and payers will not cover protons for it. ViewRay shows what happens when the physics works and the billing does not: the MRIdian was a technically strong machine with real adaptive capability, it had no separate payment for the MR guidance, its hour-long slots cut throughput against a conventional linac, and the company filed Chapter 11 in 2023.

## Videos

- https://www.youtube.com/watch?v=jSgnWfbEx1A — How a Linear Accelerator works – Elekta (Elekta, 8 minutes, 500k+ views)
- https://www.youtube.com/watch?v=8Xd42veg7KY — How does proton radiation therapy work? (Fermilab, 7 minutes, 100k+ views)

## Further reading

[Radiation Oncology Model (Centers for Medicare & Medicaid Services)](https://www.cms.gov/priorities/innovation/innovation-models/radiation-oncology-model) · [Three discipline collaborative radiation therapy (3DCRT) special debate: The United States should build additional proton therapy facilities (Journal of Applied Clinical Medical Physics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6370982/)
