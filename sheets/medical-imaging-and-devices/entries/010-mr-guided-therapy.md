---
number: 10
name: MR-Guided Therapy
part: 2
group: Magnetic resonance
uses: [treat, guide]
invasiveness: [ext]
capex: vhigh
regclass: c3
maturity: grow
---

## Description
MR-guided therapy puts a treatment device inside an MRI scanner so the target can be seen while it is being treated, rather than only before and after. The largest version is the MR-linac, which combines a whole-body magnet with a megavoltage linear accelerator on a ring gantry: Elekta Unity pairs a 1.5 T magnet with a 7 MV beam, and ViewRay MRIdian pairs 0.35 T with a 6 MV beam. Cine imaging during delivery runs at a few frames per second, and the beam holds automatically when the target drifts outside a drawn boundary, which is what allows planning margins to shrink. The second family is thermal ablation guided by MR thermometry, which reads temperature from the proton resonance frequency shift of about 0.01 ppm per degree C and maps heating to roughly 1 degree C in tissue. That measurement is what makes laser interstitial thermal therapy and transcranial focused ultrasound controllable, because the operator watches the thermal dose accumulate instead of inferring it.

## Strengths and weaknesses
Seeing soft tissue during treatment lets margins shrink, and the MIRAGE randomized trial showed what that is worth: 156 prostate patients treated to 40 Gy in 5 fractions with 2 mm margins under MRI guidance had acute grade 2 or worse genitourinary toxicity of 24.4% against 43.4% with 4 mm margins under CT guidance. The costs are throughput and physics. An adaptive fraction that re-plans on the day's anatomy takes 45 to 60 minutes with a physician and physicist present, against about 15 minutes on a conventional linac, so one MR-linac treats a fraction of the patients one conventional machine does. The magnetic field also bends secondary electrons, and the resulting electron return effect deposits extra dose at tissue-air interfaces, which the planning system has to model rather than ignore. Ablation guidance carries its own limit, since thermometry works well in water-rich tissue and poorly in fat and bone.

## When to use
Use an MR-linac when the target moves or sits against something you cannot afford to irradiate: pancreas, liver, adrenal, prostate against the urethra and rectum, and oligometastases in the abdomen. Do not buy one to treat routine breast or prostate volumes that a conventional linac with cone-beam CT handles in 15 minutes, because you will pay several times the capital and treat fewer patients for the same reimbursement. If the case for daily online adaptation is real in your practice, run the numbers on physician and physicist time first, since that is the binding cost rather than the machine. For ablation, choose MR guidance when you need a temperature map to know you have treated the target and stopped short of the structure next to it, and choose ultrasound or CT guidance when a simpler endpoint will do. Verify what your payers reimburse for adaptive planning before signing, because the codes were written for a workflow that took far less time.

## Key numbers
Elekta Unity at 1.5 T with a 7 MV beam, ViewRay MRIdian at 0.35 T with 6 MV · cine imaging at a few frames per second with automatic beam hold · MR thermometry accurate to roughly 1 degree C from a 0.01 ppm per degree C frequency shift · MIRAGE: 2 mm versus 4 mm margins, acute grade 2+ genitourinary toxicity 24.4% versus 43.4% in 156 patients · adaptive fraction 45–60 minutes against about 15 on a conventional linac · MR-linac roughly $8–10M installed against $3–5M for a conventional linac plus vault.

## Examples
Elekta Unity and ViewRay MRIdian are the two MR-linac platforms, and ViewRay's Chapter 11 filing in 2023 is the clearest evidence of how hard the business model is; Medtronic Visualase and Monteris NeuroBlate deliver MR-guided laser ablation for epilepsy foci and deep brain tumors; Insightec Exablate Neuro performs transcranial focused ultrasound thalamotomy under MR thermometry.

## Economic profile
An MR-linac runs roughly $8–10M installed against $3–5M for a conventional linac plus its vault, and the vault still has to be built with RF shielding on top of the concrete. The revenue side does not move with it. Radiation therapy is reimbursed per fraction and per plan under codes written for conventional delivery, so a center delivering five adaptive fractions is paid roughly what a center delivering five conventional ones is paid, while spending three times the machine time and adding a physicist to every fraction. That gap is why ViewRay filed for Chapter 11 in 2023 despite a working, cleared product with published outcomes, and it is the single most useful case study on this sheet for anyone selling capital equipment into oncology. The systems that do pencil out are at high-volume academic centers treating pancreas and liver SBRT, where the alternative is a case they would not treat at all. Ablation is a better business: a laser or ultrasound system costs $1–3M, the disposable applicator is a per-case consumable, and the procedures have established codes.

## Videos

- https://www.youtube.com/watch?v=2c97TQIlWM0 — MRI-Guided Radiation Therapy (UW Health, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=MbnE291POwk — The MIRAGE Trial: MRI-Guided Versus CT-Guided SBRT for Prostate Cancer (GU Oncology Now, 8 minutes, 5k+ views)

## Further reading

[Clinical Applications of Magnetic Resonance-Guided Radiotherapy: A Narrative Review (Cancers)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10251893/) · [A narrative review of MRI acquisition for MR-guided-radiotherapy in prostate cancer (Quantitative Imaging in Medicine and Surgery)](https://doi.org/10.21037/qims-21-697)
