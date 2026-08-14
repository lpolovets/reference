---
number: 13
name: Radiotracers and Isotope Supply
part: 3
group: Nuclear medicine
uses: [diag]
invasiveness: [inj]
capex: high
maturity: std
---

## Description
A radiotracer is a molecule that goes where you want to look, carrying an atom that announces its arrival. These are drugs rather than devices, approved by FDA's drug center under an NDA or ANDA with PET production held to the 21 CFR 212 rules for PET drugs, so there is no 510(k) path and no FDA device class, which is why this entry carries none. Every tracer inherits the logistics of its isotope. Technetium-99m, which labels most nuclear medicine studies, has a 6-hour half-life and is milked on demand from a shielded column of molybdenum-99, whose own 66-hour half-life is short enough that the generator is a weekly delivery and long enough that it can cross an ocean. Fluorine-18 for PET has a half-life of 110 minutes and is made in a 16–18 MeV cyclotron by driving protons into oxygen-18 enriched water, then converted to FDG, tested, and driven to the scanner the same morning. Therapeutic isotopes sit at the other end of the scale: lutetium-177 lasts 6.6 days and ships worldwide, actinium-225 lasts 9.9 days and barely exists.

## Strengths and weaknesses
Half-life is the whole design constraint, and it cuts both ways. A short half-life means low patient dose and a clean scan, and it also means nothing can be stockpiled, so the supply chain runs with no inventory buffer and a production outage shows up in clinics within days. Molybdenum-99 is made by fissioning uranium targets in a handful of aging research reactors, and when Canada's NRU and the Netherlands' HFR were both offline in 2009 and 2010, world supply fell by roughly half for months and hospitals rationed scans. Molybdenum-99 loses about 1% of its activity per hour, which is why it is sold in six-day curies, the activity still present six days after processing, rather than by mass. Fluorine-18 is the opposite problem: it cannot be shipped far at all, so the map of PET scanners follows the map of cyclotrons.

## When to use
If you are designing a tracer, pick the isotope for the biology first and then check whether its supply exists at clinical scale, because a beautiful agent on an isotope nobody makes is a research program rather than a product. Use technetium-99m when a generator in the hospital hot lab is the advantage you want, and accept its coarser imaging. Use fluorine-18 when you need PET resolution and your sites are within a few hours of a radiopharmacy, and use a gallium-68 generator instead when they are not, since a germanium-68 parent lasts 271 days and makes the site independent of daily delivery. For therapy, treat lutetium-177 as available and actinium-225 as allocated, and build a clinical program around the second only with a written supply agreement. If you are investing in production, the durable position is in isotopes with proven demand and structurally short supply rather than in another tracer for an isotope already made in quantity.

## Key numbers
Technetium-99m half-life 6 hours from a molybdenum-99 parent at 66 hours · fluorine-18 half-life 110 minutes from a 16–18 MeV cyclotron · gallium-68 at 68 minutes from a germanium-68 parent lasting 271 days · lutetium-177 at 6.6 days, actinium-225 at 9.9 days · molybdenum-99 decays about 1% per hour and is sold in six-day curies · the 2009–2010 reactor outages cut world molybdenum-99 supply by roughly half · global actinium-225 production about 68 GBq per year.

## Examples
HFR Petten, BR2 in Belgium, SAFARI-1 in South Africa, OPAL in Australia and LVR-15 in the Czech Republic supply most of the world's molybdenum-99, all converted from highly enriched to low-enriched uranium targets; NorthStar Medical Radioisotopes restarted US domestic molybdenum-99 supply in 2018 and SHINE Technologies is building accelerator-driven production; Oak Ridge National Laboratory, JRC Karlsruhe and IPPE Obninsk are the three thorium-229 sources that between them make roughly 68 GBq of actinium-225 a year.

## Economic profile
The isotope is usually a small part of what a scan costs and the entire reason a scan can happen. A technetium generator costs a hospital a few thousand dollars a week and covers a department's studies, while an FDG dose costs a few hundred dollars and rises with distance from the cyclotron because the producer has to make extra activity to cover decay in transit. Molybdenum-99 was sold below its production cost for decades, since the reactors making it were funded as research facilities and treated isotope output as a byproduct, and the OECD Nuclear Energy Agency's push for full cost recovery after the 2009 shortage raised prices several-fold without adding much capacity. A 16–18 MeV cyclotron costs roughly $2–3M, and the vault, hot cells and radiochemistry around it bring a production facility to $5–10M, which is why a handful of radiopharmacy networks supply most US PET doses rather than hospitals making their own. Therapeutic isotopes have the better margins and the worse supply: a lutetium-177 dose is priced as part of a drug selling for tens of thousands of dollars per course, and actinium-225 output is allocated against demand that clinical trial enrollment alone could exhaust. That mismatch is what has drawn DOE, national labs and several startups into accelerator production routes.

## Videos

- https://www.youtube.com/watch?v=ropA_PuUqSs — Technetium generator | Everything you need to know (Dr. Paulien Moyaert, 5 minutes, 50k+ views)
- https://www.youtube.com/watch?v=uLNazQthGkc — Production of Technetium 99m (A Level Physics HQ, 3 minutes, 50k+ views)

## Further reading

[Molybdenum-99 for Medical Imaging (National Academies of Sciences, Engineering, and Medicine)](https://nap.nationalacademies.org/catalog/23563/molybdenum-99-for-medical-imaging) · [Challenges and future options for the production of lutetium-177 (European Journal of Nuclear Medicine and Molecular Imaging)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8241800/)
