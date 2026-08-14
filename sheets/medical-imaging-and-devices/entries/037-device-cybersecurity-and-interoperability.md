---
number: 37
name: Device Cybersecurity and Interoperability
part: 7
group: Regulation & software
uses: [monitor, treat]
invasiveness: [ext, impl]
maturity: grow
---

## Description
Section 524B of the Federal Food, Drug, and Cosmetic Act, added by the Consolidated Appropriations Act of 2023 and effective March 29 that year, made cybersecurity a statutory content requirement for premarket submissions. It applies to a cyber device, defined as one that includes software the sponsor validated, installed or authorized, can connect to the internet, and has characteristics that could be vulnerable to cybersecurity threats. Three things have to be in the submission: a plan to monitor, identify and address postmarket vulnerabilities and exploits in a reasonable time, including coordinated vulnerability disclosure; processes that give reasonable assurance the device and related systems are cybersecure, along with a way to make postmarket updates and patches available; and a software bill of materials covering commercial, open-source and off-the-shelf components. The requirement covers 510(k), De Novo, PMA, PDP and HDE submissions and their supplements, and since October 1, 2023 an eSTAR submission is put on technical screening hold if the cybersecurity section is incomplete, which makes this an admissibility gate rather than a review comment. The FDA's current final guidance on the subject is dated June 27, 2025. Interoperability is the other half of the same problem: a connected device has to speak DICOM for images, HL7 v2 or FHIR for clinical data, and the relevant IHE profiles for the workflow, or every hospital becomes its own integration project.

## Strengths and weaknesses
The strength of 524B is that it forces an inventory. A software bill of materials lets a hospital answer whether it owns anything containing a newly disclosed library without calling twenty vendors, and a published disclosure policy gives researchers somewhere to send a finding other than a conference talk. The weakness is that the law is prospective only, since it does not apply to submissions filed before March 29, 2023, so it does nothing for the installed base. That base is the actual problem. An imaging system or an infusion pump has a 10 to 20 year service life against operating system support windows of roughly half that, and the software image is validated as part of the device, so a hospital cannot patch it the way it patches a laptop; the change has to be validated by the manufacturer against the device's intended use. For devices that are past support or whose vendor is gone, there is no patch at any price, and the only mitigations left are network segmentation, monitoring, and taking the device off the network. On the interoperability side, a proprietary interface is a hidden cost that shows up in the sales cycle rather than the bill of materials, because each site needs its own integration work.

## When to use
Assume 524B applies if the device connects to anything at all, and generate the software bill of materials out of the build system rather than assembling one by hand at submission time, because it has to stay current for the life of the product. Design for patchability from the start: signed updates, a rollback path, and a written revalidation scope that says which classes of change can ship in days rather than months. Publish a coordinated vulnerability disclosure policy and a security contact before you need one, since the first serious report is a bad time to invent the process. Choose DICOM, HL7 FHIR and the applicable IHE profiles over a proprietary API even when the proprietary one is easier, because the cost of a custom integration per hospital usually exceeds the engineering cost of conformance within a handful of sites. If you sell into an existing fleet, expect a security questionnaire and a segmentation requirement before purchasing, and treat the answers as a sales asset rather than a compliance chore.

## Key numbers
Section 524B effective March 29, 2023, with three required elements: a postmarket vulnerability plan, patch and update processes, and a software bill of materials · eSTAR submissions on technical screening hold for incomplete cybersecurity sections since October 1, 2023 · current FDA final guidance dated June 27, 2025 · requirement applies to 510(k), De Novo, PMA, PDP and HDE plus supplements, and not to anything submitted before March 29, 2023 · device service life 10 to 20 years against operating system support windows of roughly half that · interoperability standards in practice are DICOM, HL7 v2 and FHIR, plus IHE profiles.

## Examples
FDA's June 2025 final guidance on cybersecurity quality system considerations and premarket content; the MITRE and FDA legacy medical device report and the Medical Device Cybersecurity Regional Incident Preparedness and Response Playbook; MITRE's 2024 and 2026 white papers on normalizing software bill of materials data, which exist because SBOMs from different vendors are not comparable as shipped; DICOM and HL7 FHIR as the two interfaces almost every clinical buyer will ask about.

## Economic profile
Security is a permanent engineering line rather than a submission cost. Threat modeling, penetration testing, SBOM tooling, vulnerability monitoring and a release pipeline all have to stay staffed for the device's whole service life, which for hardware means 10 to 20 years of patch obligations against a single sale. That mismatch is one of the reasons vendors keep moving from one-time capital sales toward service contracts and subscriptions, since a recurring payment is the only structure that funds a recurring obligation. Nobody pays a premium for a secure device, so the return shows up as deals that do not stall: a hospital's security review is a gate in front of the purchase order, and a vendor who can hand over an SBOM, a disclosure policy and a patch history clears it in weeks instead of quarters. On the hospital side the cost of a legacy fleet is real and mostly invisible, showing up as segmentation projects, monitoring, cyber insurance premiums, and eventually capital replacement of equipment that still works clinically but can no longer be defended. Interoperability pays back the same way: a device that ships standards conformance drops into an existing workflow, while a proprietary interface adds an integration project per site and usually turns a three-month sales cycle into a year.

## Videos

- https://www.youtube.com/watch?v=EyqwUFJKZo0 — Protecting Medical Devices from Cyberharm | Stephanie Domas | TEDxColumbus (TEDx Talks, 10 minutes, 10k+ views)
- https://www.youtube.com/watch?v=smhPhmNsvVc — How medical devices like pacemakers, insulin pumps can be hacked (CBS Mornings, 6 minutes, 5k+ views)

## Further reading

[Cybersecurity (FDA)](https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity) · [Cybersecurity requirements for medical devices in the EU and US - A comparison and gap analysis of the MDCG 2019-16 and FDA premarket cybersecurity guidance (Computational and Structural Biotechnology Journal)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12301760/)
