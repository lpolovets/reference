---
number: 34
name: Software as a Medical Device and Clinical AI
part: 7
group: Regulation & software
uses: [diag, screen, monitor]
invasiveness: [ext]
capex: cheap
regclass: c2
maturity: grow
---

## Description
Software as a medical device is software intended for a medical purpose that achieves that purpose on its own, rather than by driving a piece of hardware, and the FDA regulates it through the same three pathways as any other device. Almost all of it is Class II and clears by 510(k). The FDA publishes an AI-Enabled Medical Device List, which held 1,524 authorizations at its March 2026 update: 1,466 cleared through 510(k), 39 granted through De Novo and 19 approved as PMAs. Radiology accounts for 76% of the list, cardiovascular 10% and neurology 5%, and the rate is climbing fast, with 333 authorizations in calendar 2025 against 18 in 2016. What these products actually do is narrower than the label suggests: they segment an organ, measure an ejection fraction, or flag a suspected large-vessel occlusion on a CT angiogram and page the stroke team. The FDA's De Novo order for the first stroke-triage product said in as many words that identifying the suspected finding is not for diagnostic use beyond the notification, which is a fair description of most of the category.

## Strengths and weaknesses
The cost structure is the attraction. There is no bill of materials, no sterilization, no service contract, and a cleared model ships as a container that talks to the hospital's existing PACS. Regulatory load is lighter than hardware too: across the machine-learning devices authorized in 2024, median review time was 162 days, 151 days for the 510(k)s and 372 for the De Novos. The weakness is that the evidence behind a clearance is often thin and hard to check. Of those 2024 authorizations, only 29.2% reported both sensitivity and specificity in the public summary and 15.5% reported any demographic breakdown of the test set, while the median predicate was 2.2 years old and 64.5% of predicates were themselves machine-learning devices, so the substantial-equivalence chain increasingly compares one algorithm with another. Postmarket performance shows the consequence: a 2026 JAMA Network Open cohort of 903 AI-enabled devices authorized through August 2024 found 43 of them recalled, a median of 458 days after authorization, with recall rates highest among devices that had no clinical performance study behind them.

## When to use
If the product is a fixed model doing one measurable task on data a hospital already collects, treat it as a Class II 510(k) and spend your effort finding a predicate with the indication you want. If you intend to retrain the model after launch, write a predetermined change control plan into the original submission: section 515C of the FD&C Act and FDA's December 2024 guidance let you specify the modifications, the data and methods used to make them, and the impact assessment up front, and then make those changes without a new marketing submission. Uptake is still low, at 16.7% of 2024 machine-learning device summaries, so this is currently a differentiator rather than table stakes. If the software makes an autonomous decision with no clinician in the loop, expect De Novo and a prospective trial in the intended-use population, not a 510(k). And settle how the product gets paid before you build it, because a cleared algorithm with no billing code and no labor it visibly replaces is a very hard sale.

## Key numbers
1,524 AI-enabled devices on FDA's list at the March 2026 update, 96% of them 510(k) clearances · 76% radiology, 10% cardiovascular · 333 authorizations in 2025 against 18 in 2016 · median review 162 days, 151 for 510(k) and 372 for De Novo · 29.2% of 2024 authorizations reported both sensitivity and specificity, 15.5% reported demographics · PCCPs in 16.7% of 2024 summaries · 43 of 903 AI devices recalled, median 458 days after authorization · ContaCT's add-on payment capped at $1,040 per case.

## Examples
Viz.ai's ContaCT, authorized by De Novo in February 2018 and the first AI product to get a Medicare new technology add-on payment, capped at $1,040 per case for FY2021 and requiring its own ICD-10-PCS code (4A03X5D) before the payment could be billed; IDx-DR, authorized by De Novo in April 2018 for autonomous diabetic retinopathy screening and now billed under CPT 92229; Paige Prostate, the first De Novo for AI in pathology, in September 2021; FDA's December 2024 guidance on predetermined change control plans for AI-enabled device software functions.

## Economic profile
Development cost is mostly people and clinical data, and the marginal cost of the thousandth deployment is close to zero, so the whole question is revenue. There are only three ways an algorithm gets paid in the US, and each has a defect. It can be folded into an existing procedure code, in which case there is no incremental revenue and the buyer pays out of an operating budget. It can get its own CPT code, which is usually a Category III tracking code with no national value, so payment is at each contractor's discretion. Or it can get a temporary add-on payment, which is what Viz.ai obtained and which expires after two or three years. CPT 92229, one of the few Category I codes written for an autonomous algorithm, has no professional component at all, because no physician interprets the image, and CMS has said publicly that it is still evaluating how services involving assistive technology should be valued. That is the unresolved part: the fee schedule pays for physician work, and an algorithm that removes physician work removes the basis of the payment. In the meantime most vendors sell a per-study subscription to a radiology group or a hospital, where the return to the buyer is throughput and turnaround time rather than new revenue, which caps the price at roughly what the labor saved is worth.

## Videos

- https://www.youtube.com/watch?v=dCDuMyzWS8Q — Using artificial intelligence in radiology clinical practice (Mayo Clinic, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=iiw4j-Frljo — Artificial Intelligence in medical imaging: From research to clinical practice – Koen Van Leemput (Aalto University, 15 minutes, 5k+ views)

## Further reading

[Artificial Intelligence-Enabled Medical Devices (FDA)](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices) · [Machine Learning-Enabled Medical Devices Authorized by the US Food and Drug Administration in 2024: Regulatory Characteristics, Predicate Lineage, and Transparency Reporting (Biomedicines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12730494/)
