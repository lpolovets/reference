---
number: 12
name: SPECT and Gamma Cameras
part: 3
group: Nuclear medicine
uses: [diag]
invasiveness: [inj]
capex: high
regclass: c2
maturity: std
---

## Description
A gamma camera images single photons rather than annihilation pairs, so it needs a physical collimator to know where each one came from. A lead plate drilled with thousands of parallel holes sits in front of a sodium iodide crystal, absorbing every photon that is not traveling nearly along a hole axis, and the flashes that get through are located by an array of photomultipliers behind the crystal. Most of the work is done at 140 keV, the gamma energy of technetium-99m, which labels the majority of nuclear medicine studies. SPECT rotates two camera heads around the patient and reconstructs a tomographic volume, typically in 15 to 30 minutes at 10–15 mm resolution, and adding a CT gives attenuation correction and an anatomic map. Newer cardiac-dedicated cameras replace the crystal and photomultipliers with pixelated cadmium zinc telluride, which converts gamma photons directly to charge and gives roughly 5–6% energy resolution against 9–10% for sodium iodide.

## Strengths and weaknesses
The collimator is both what makes the camera work and what limits it, since it discards well over 99.9% of the emitted photons to gain direction information, which is why SPECT sensitivity is orders of magnitude below PET and its resolution is millimeters coarser. What SPECT has instead is a supply chain that works: technetium-99m comes from a generator sitting in the hospital's hot lab and is eluted on demand, so no cyclotron and no same-day delivery are involved. That makes SPECT by far the most common nuclear medicine study worldwide. CZT cameras with focused multi-pinhole geometry recover a large part of the sensitivity gap for cardiac work, cutting a 15-minute acquisition to a few minutes or the injected dose by a similar factor, but they are heart-shaped and do not serve general imaging.

## When to use
Use SPECT when a technetium-99m or iodine-123 tracer answers the question and you want a study any hospital hot lab can run: bone scans, renal function, parathyroid localization, dopamine transporter imaging for parkinsonism, and post-therapy dosimetry after lutetium-177. Use PET instead when you need quantitative uptake, better resolution, or a tracer that only exists as a positron emitter, and accept the delivery dependency that comes with it. For a cardiology practice doing mostly myocardial perfusion, a CZT cardiac camera is the better buy, since the throughput and dose reduction are real and the machine costs less than a PET/CT. If you are buying general-purpose, buy SPECT/CT rather than SPECT, because attenuation correction and anatomic localization change the read on a large minority of studies. Before committing capital, look at whether your perfusion volume is migrating to cardiac CT or rubidium-82 PET, because that shift is underway.

## Key numbers
140 keV imaging energy for technetium-99m · parallel-hole collimation discards well over 99.9% of emitted photons · SPECT resolution 10–15 mm against 4–5 mm for PET · acquisition 15–30 minutes, a few minutes on a CZT cardiac camera · CZT energy resolution about 5–6% against 9–10% for sodium iodide · general-purpose SPECT/CT roughly $400–900k, CZT cardiac cameras $500–700k.

## Examples
GE Discovery NM/CT and Siemens Symbia are the general-purpose SPECT/CT workhorses; Spectrum Dynamics D-SPECT and GE Discovery NM 530c are the CZT cardiac cameras; DaTscan with iodine-123 ioflupane and technetium-99m MDP bone scans are the highest-volume non-cardiac studies.

## Economic profile
A general-purpose SPECT/CT costs roughly $400–900k and a CZT cardiac camera $500–700k, which puts nuclear medicine within reach of a community hospital in a way PET/CT is not. Operating cost is dominated by the technetium generator, a shielded column of molybdenum-99 delivered weekly that a technologist elutes each morning, priced in the low thousands of dollars and sized to the department's expected volume, so a slow week wastes activity that has already decayed. Medicare pays roughly $1,000–1,300 for a hospital outpatient myocardial perfusion study, and cardiac perfusion has historically been the volume that paid for the department. That volume is now contested by coronary CT angiography and by rubidium-82 and flurpiridaz PET, all of which read better in obese patients, so the growth case for a new general-purpose camera is weaker than the installed base suggests. The clearest new demand is post-therapy imaging: every patient treated with lutetium-177 needs quantitative SPECT for dosimetry, which is turning a mature scanner into a companion device for a growing drug class.

## Videos

- https://www.youtube.com/watch?v=QoS1H7J-86w — Gamma camera | Components & Function l Visual explanation (Dr. Paulien Moyaert, 5 minutes, 50k+ views)
- https://www.youtube.com/watch?v=2z_BBCVRD8Q — SPECT/CT Scan animation (ANSTO, 3 minutes, 100k+ views)

## Further reading

[Nuclear Medicine (National Institute of Biomedical Imaging and Bioengineering)](https://www.nibib.nih.gov/science-education/science-topics/nuclear-medicine) · [Technological Advances in SPECT and SPECT/CT Imaging (Diagnostics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11241697/)
