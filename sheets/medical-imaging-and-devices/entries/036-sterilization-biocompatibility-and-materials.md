---
number: 36
name: Sterilization, Biocompatibility and Materials
part: 7
group: Regulation & software
uses: [treat]
invasiveness: [cath, impl]
maturity: std
---

## Description
Anything labeled sterile has to reach a sterility assurance level of 10^-6, meaning no more than one chance in a million that a given unit carries a viable organism, and industry gets there by four main routes. Ethylene oxide gas alkylates microbial DNA, runs at 37 to 63 °C with roughly 1 to 6 hours of exposure at 450 to 1200 mg/L and 40 to 80% humidity, penetrates sealed packaging and long lumens, and then needs days of aeration to drive residuals down to the limits in ISO 10993-7. Gamma irradiation from cobalt-60 and electron or X-ray beams work by free-radical damage, need no residual removal, and typically deliver 15 to 45 kGy with 25 kGy as the industry default. Steam at 121 to 134 °C is the cheapest of all and destroys anything thermoplastic, electronic, or protein-based. The FDA treats moist heat, dry heat, EtO and radiation as established methods that can be validated against recognized consensus standards, and puts a heavier evidence burden on anything novel. EtO does about half of all sterile devices sold in the US, which EPA puts at 20 billion units a year across 88 commercial sterilizers.

## Strengths and weaknesses
EtO is often the only method that sterilizes a finished device without ruining it, which is why catheters, multi-layer packaging, and heat-sensitive polymer assemblies still go through it. It is also a carcinogen, and the plants are where people get exposed. EPA's April 2024 air toxics rule would have cut emissions from commercial sterilizers by over 90%, facilities said they could not meet the deadlines, a presidential exemption process was created in January 2025, and in March 2026 EPA proposed repealing the 2024 rule with comments closing that May. For a manufacturer, the concentration matters more than the rule: half the country's sterile output moves through 88 sites, and losing one is a supply interruption rather than an inconvenience. Radiation has no residuals and no plant siting fight, and it damages materials instead: irradiation of ultra-high-molecular-weight polyethylene generates free radicals that oxidize the chains, which caused increased wear and premature failure in joint implants until manufacturers moved to irradiating under vacuum or inert gas with radical scavengers. Cobalt-60 also decays with a 5.27-year half-life, so the operator of a gamma facility replaces source every year whether the plant runs or not.

## When to use
Choose the sterilization method while you are still choosing materials, not after the design freeze, because the method constrains the polymer and the packaging more than the other way round. If the device is a heat-sensitive assembly with lumens or dead spaces, plan on EtO and design the packaging for gas exchange and aeration. If it is a simple, radiation-stable polymer or metal in a sealed pouch, use gamma, e-beam or X-ray and skip the residuals work entirely, but qualify the material at the maximum dose rather than the nominal 25 kGy. If it is reusable metal instrumentation, steam is cheaper than anything else and you should not be arguing about it. Second-source the sterilization site from the start if you can, because a single-site dependency on a Class III device is the most expensive kind: FDA's master file pilot, opened in November 2019, exists specifically so that PMA holders can change EtO site through a post-approval report instead of a PMA supplement.

## Key numbers
Sterility assurance level 10^-6 · EtO at 37–63 °C, 1–6 hours exposure, 450–1200 mg/L, 40–80% humidity, plus days of aeration · radiation 15–45 kGy with 25 kGy the default · steam at 121–134 °C · EtO handles about half of US sterile devices, roughly 20 billion units a year, across 88 commercial sterilizers · EPA's 2024 rule targeted a 90%-plus emissions cut and was proposed for repeal in March 2026 · cobalt-60 half-life 5.27 years · ISO 10993-1 sorts devices by surface, external-communicating or implant contact and by limited, prolonged or long-term duration.

## Examples
ISO 11135 for EtO process validation, ISO 11137 for radiation and ISO 10993-7 for EtO residuals, all recognized by the FDA; the July 2019 FDA innovation challenges for new sterilization methods and lower EtO emissions; the November 2019 EtO Sterilization Master File pilot, whose participants include Boston Scientific, Becton Dickinson, Steris, Oscor and Medtronic; the FDA's September 2023 guidance recognizing ISO 10993-1 for biological evaluation.

## Economic profile
Contract sterilization itself is cheap, usually cents to a few dollars a unit, and the cost that matters is qualification and dependency. Biocompatibility is the schedule item. ISO 10993-1, which the FDA recognized in its September 2023 guidance, is a risk-based framework rather than a fixed list: you classify the device by contact type (surface, external-communicating or implant) and by contact duration (limited, prolonged or long-term), then justify which endpoints need data, starting with chemical characterization and a toxicological risk assessment and adding cytotoxicity, sensitization, irritation, systemic toxicity, hemocompatibility, genotoxicity and implantation as the contact gets longer. The trap is that the testing has to run on the final finished device, in its final material, made by the final process, and sterilized by the final method, so nothing can start until the design is frozen, and for a long-term implant the panel typically runs six to eighteen months and costs into the hundreds of thousands of dollars (a planning rule of thumb, not a published rate). That puts a strong economic argument behind reusing materials with an existing history of use, because choosing a novel polymer means paying for the full battery plus the risk of a finding that sends the design back. Changing sterilization method or site on a marketed device costs the same way: revalidation, possibly new biocompatibility data if residuals or material properties shift, and on a PMA device either a supplement at $86,891 or the master file route. Plan a year for that change and treat single-source sterilization as a real supply risk rather than a procurement detail.

## Videos

- https://www.youtube.com/watch?v=B4LXolcvyO0 — Medical Device Sterilization: ETO, Radiation, and SAL 6 Explained (StarFish Medical, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=TrUJUmWuxII — EO Sterilization Process (SOLSTEO, 2 minutes, 10k+ views)

## Further reading

[Sterilization for Medical Devices (FDA)](https://www.fda.gov/medical-devices/general-hospital-devices-and-supplies/sterilization-medical-devices) · [Sterilization of Polymeric Implants: Challenges and Opportunities (ACS Applied Bio Materials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9691608/)
