---
number: 11
name: PET/CT
part: 3
group: Nuclear medicine
uses: [diag, screen]
invasiveness: [inj]
capex: vhigh
regclass: c2
maturity: std
---

## Description
PET images a molecule rather than an anatomy. The patient is injected with a tracer carrying a positron emitter, usually about 370 MBq of fluorine-18 fluorodeoxyglucose, and each positron annihilates with an electron to produce two 511 keV photons flying apart in opposite directions. A ring of scintillator crystals, now usually LYSO read out by silicon photomultipliers, records pairs of hits within a few nanoseconds of each other and reconstructs the line each annihilation happened on. Timing resolution of 200–400 ps lets a time-of-flight system place the event within a few centimeters along that line, which sharpens the image without changing the crystals. The CT half of the scanner does two jobs: it supplies the anatomic map the physician reads the tracer against, and it measures tissue density for attenuation correction, without which the PET numbers are wrong. Clinical spatial resolution is 4–5 mm, so PET says where a molecule concentrates and CT says what structure that is.

## Strengths and weaknesses
PET is the only routine way to see metabolism, receptor expression, or protein deposition in a living patient, which is why it has become the staging test in most solid tumors and the eligibility test for anti-amyloid drugs in Alzheimer's disease. Its central weakness is not the scanner but the tracer, because fluorine-18 has a half-life of 110 minutes and starts decaying the moment it is made. Resolution is coarse compared with CT or MRI, uptake is not specific to cancer so infection and inflammation light up too, and the patient sits for a 60-minute uptake period before a 20-minute scan, which caps throughput near 10 to 12 patients a day. Long axial field-of-view systems change that arithmetic: the uEXPLORER covers 194 cm at once instead of 20–25 cm, with roughly 40 times the sensitivity, so the same study can be done in a fraction of the time or a fraction of the dose.

## When to use
Order PET/CT when the clinical question is whether disease is present somewhere you have not looked, or whether a known lesion is metabolically active, and use CT or MRI when the question is anatomic. Site the scanner where a tracer can reach it: four hours of driving is 240 minutes, or 2.2 half-lives at 110 minutes each, so a dose arrives at about 22% of what was made and the producer has to start with roughly 4.5 times the activity, which is why the delivered cost per dose rises with distance. If you are more than about four hours' drive from a commercial radiopharmacy, price an on-site cyclotron or plan around generator-produced gallium-68 instead. Buy a long axial field-of-view system only if you have the volume to fill it or a research program that needs dynamic whole-body imaging, since it costs several times a conventional scanner. If your PET volume is mostly cardiac perfusion, look at rubidium-82 from a strontium-82 generator, which removes the cyclotron dependence entirely.

## Key numbers
511 keV photon pairs detected in coincidence · fluorine-18 half-life 110 minutes · typical FDG dose about 370 MBq · time-of-flight timing resolution 200–400 ps · clinical resolution 4–5 mm · 60-minute uptake plus a 20-minute scan, 10–12 patients per day · long axial field-of-view 194 cm against 20–25 cm conventional, roughly 40 times the sensitivity · scanner $1.5–3M, total-body systems above $7M.

## Examples
Siemens Biograph Vision, GE Omni Legend and Philips Vereos are the mainstream digital PET/CT platforms; United Imaging uEXPLORER was the first 194 cm total-body scanner, installed at UC Davis; FDG remains the volume tracer, with PSMA agents for prostate cancer and amyloid and tau agents for dementia growing fastest.

## Economic profile
A digital PET/CT costs $1.5–3M and needs a shielded room, a hot lab, and a licensed radiation safety program, so the capital decision is close to the MRI decision. The distinguishing cost is the tracer. FDG is a per-dose consumable that a site buys from a commercial radiopharmacy for a few hundred dollars, and because it decays in transit the supplier prices in the extra activity that has to be made, which is why doses cost more the farther a site sits from a cyclotron. Medicare pays roughly $1,200–1,400 for a hospital outpatient PET/CT study, so at 10 to 12 patients a day the scanner covers its capital and the dose cost with room to spare, and utilization is again what decides. A long axial field-of-view system costs above $7M, which is why the installed count is still in the dozens rather than the thousands. A 16–18 MeV cyclotron plus hot cells and a vault runs $5–10M, which only makes sense for a network serving many scanners or a center running research tracers, and that concentration is why a handful of radiopharmacy chains supply most US PET doses. The growth is coming from new tracers rather than new scanners, since each approved agent brings its own indication and its own payment.

## Videos

- https://www.youtube.com/watch?v=GHLBcCv4rqk — How Does a PET Scan Work? (NIBIB, 2 minutes, 1m+ views)
- https://www.youtube.com/watch?v=yrTy03O0gWw — How does a PET scan work? (Imperial College London, 4 minutes, 500k+ views)

## Further reading

[PET/CT - Positron Emission Tomography/Computed Tomography (RadiologyInfo.org, ACR and RSNA)](https://www.radiologyinfo.org/en/info/pet) · [Innovations in Instrumentation for Positron Emission Tomography (Seminars in Nuclear Medicine)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5986096/)
