---
number: 24
name: Lipid Nanoparticle
part: 6
group: Particle delivery
acts: carrier
cargo: [vast]
reach: [liver]
maturity: default
clinical: approved
---

## Description
A lipid nanoparticle is a small fatty sphere, roughly 80 to 100 nanometers across, that carries RNA into cells. Four components do the work. An ionizable lipid is the critical one: it is neutral at blood pH, so the particle does not damage membranes as it circulates, and becomes positively charged in the acidic endosome after the cell takes it up, which disrupts the endosome and releases the RNA into the cytoplasm. Cholesterol and a helper phospholipid provide structure, and a PEG-lipid controls particle size and circulation time. Given intravenously, the particles adsorb apolipoprotein E from blood and are taken up by hepatocytes through the LDL receptor, which is why they go to the liver by default rather than by design. For gene editing this is the delivery route of choice wherever the liver is the target, because it carries editing machinery of any size as messenger RNA, is off the shelf, and can be redosed.

## Strengths and weaknesses
The strengths are cargo flexibility, transience, and manufacturing. There is no packaging limit that matters, so a prime editor at 6.3 kilobases is no harder to deliver than a small nuclease, which removes the size constraint that governs every AAV decision. Messenger RNA is translated for a day or two and then gone, so the editor's exposure window is short and off-target editing is correspondingly low. Manufacturing is a mixing process, sequence-agnostic, with capacity left over from the COVID-19 vaccine buildout, and cost of goods is thousands rather than hundreds of thousands per dose. Redosing works. The weaknesses reduce mostly to one: it goes to the liver. Extrahepatic delivery is the field's central unsolved problem, and while selective organ targeting through added charged lipids and antibody-conjugated particles has shown real progress in animals, the human data is thin. Infusion reactions, complement activation and hepatotoxicity are dose-limiting, and anti-PEG antibodies may reduce exposure on repeat dosing.

## When to use
Use lipid nanoparticles whenever the target is the liver. That is not a limitation so much as a description of where the technology currently works, and a great deal of important biology is hepatic: lipid metabolism, clotting factors, transthyretin, alpha-1 antitrypsin, urea cycle enzymes. It is also the right choice for delivering any editing payload too large for AAV, and for any program where redosing or a short exposure window matters. For ex vivo work, electroporation is usually simpler and cheaper. If the target is outside the liver, treat the delivery claim as the central technical risk of the program and require in vivo editing data in the target tissue at a manufacturable dose, not particle biodistribution, which routinely overstates functional delivery.

## Key numbers
Particle diameter roughly 80–100 nm · four lipid components, with the ionizable lipid doing the endosomal escape · no meaningful cargo size limit, so a 6.3 kb prime editor is as deliverable as a 4 kb nuclease · the great majority of an intravenous dose goes to liver · messenger RNA is translated for roughly 1–3 days, then cleared · liver editing efficiencies of 60–70% of target alleles have been reported clinically · cost of goods commonly $1,000–5,000 per dose, against $100,000 or more for AAV · redosing is possible.

## Off-target and safety
The delivery system's own toxicity dominates. Infusion reactions and complement activation are the acute problems, managed with premedication and infusion rate control, and hepatotoxicity is the dose-limiting finding. Anti-PEG antibodies develop and may reduce exposure on repeat dosing, which is a specific concern for a redosable product and is not fully characterized. For the editing payload, the short expression window is the main safety feature: measured off-target editing is lower than for the same editor delivered by AAV, because the enzyme is present for days rather than months. Biodistribution to spleen and other tissues is real but functional delivery there is low, which is worth keeping straight because particle accumulation and productive delivery are different measurements and are often conflated.

## Examples
The COVID-19 mRNA vaccines, which established the manufacturing base and the safety database for the lipid components; patisiran, the first approved lipid nanoparticle RNA drug; NTLA-2001 and its successors, which deliver Cas9 messenger RNA and a guide to knock out a liver gene in transthyretin amyloidosis and produced the first clear clinical demonstration of in vivo CRISPR editing; the VERVE base editing programs for cholesterol; and the bespoke base editing therapy for a single infant, which used this route.

## Economic profile
The best economics of any in vivo genetic medicine delivery route by a wide margin, and that is what makes large indications plausible. Manufacturing is mixing lipids with synthetic RNA, capacity exists from the vaccine buildout, and cost of goods in the low thousands per dose supports treating millions of people rather than thousands. This is the specific reason in vivo editing of cardiovascular targets is a credible business where AAV gene therapy for the same target would not be. The main commercial exposure is intellectual property on the ionizable lipids, which has been extensively litigated and where freedom to operate is a real diligence item rather than a formality.

## Videos

- https://www.youtube.com/watch?v=v_0uqm5ANNs — What are Lipid Nanoparticles (LNP)? (Dr. Rob Swanda, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=49ASLuxOSIY — Ionizable Lipids to Optimize RNA-LNP Delivery (Precision NanoSystems is now part of Cytiva, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=ebXowbSqAfk — How do LNPs work? Gene editing delivery video series (2/3) (Kevin Curran, 20 minutes, under 1k views)

## Further reading

[Lipid nanoparticles for mRNA delivery (Nature Reviews Materials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8353930/)
