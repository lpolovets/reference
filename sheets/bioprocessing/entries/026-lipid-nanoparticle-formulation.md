---
number: 26
name: Lipid Nanoparticle Formulation
part: 6
group: Nucleic acids
products: [vaccine, nucleic]
scale: [bench, pilot, mid]
cogs: high
maturity: proven
regulatory: validated
---

## Description
Lipid nanoparticle formulation is the step that turns mRNA into a drug, and it happens in a mixer rather than a vessel. Four lipids dissolved in ethanol (an ionizable lipid, a helper phospholipid such as DSPC, cholesterol, and a PEG-lipid) meet an acidic aqueous stream carrying the RNA in a T-junction or a microfluidic mixing element. At pH around 4 the ionizable lipid is protonated and binds the negatively charged RNA; as the streams mix and the ethanol fraction drops, the particle precipitates around its cargo in milliseconds. Tangential flow filtration then removes the ethanol and exchanges the buffer to something neutral, after which the material is sterile filtered and filled. The particle is what does the delivery work: it protects the RNA in circulation, gets taken up by cells, and releases the cargo when the endosome acidifies and the ionizable lipid becomes positively charged again. Because the whole assembly is set by mixing hydrodynamics, the mixer geometry and flow rates are the process, and changing them changes the product.

## Strengths and weaknesses
LNPs are the only nucleic acid delivery system with large-scale clinical validation, they encapsulate above 90% of the RNA, and the formulation step itself is fast, cheap in capital, and easy to run at small scale. The costs sit in the lipids. Comirnaty carries 0.43 mg of ALC-0315, 0.05 mg of PEG-lipid, 0.09 mg of DSPC, and 0.2 mg of cholesterol per 30 µg dose, so the particle weighs about 26 times what the RNA does, and GMP ionizable lipid is far more expensive per gram than the RNA it carries. The scale-up problem is real: you cannot make a bigger T-junction and get the same particle, so scaling means running more channels in parallel while holding residence time and flow ratio constant. The failure mode that surprised the field is chemical. Aldehyde impurities in the ionizable lipid react with mRNA nucleobases to form adducts that block translation, so a lipid lot within its own purity specification can still destroy the potency of the drug product.

## When to use
Use an LNP when you are delivering RNA systemically or intramuscularly and you need the current standard of evidence, which for now means there is no serious alternative for a clinical program. Design around its two constraints. If your indication requires room-temperature distribution, budget years of formulation work, because LNPs are frozen products by default and the relaxations Comirnaty eventually got came after the fact. If your target is outside liver and muscle, expect to spend most of your development effort on the lipid rather than on the RNA, because native LNP tropism goes to the liver and retargeting is an unsolved problem people keep announcing solutions to. Lock the mixer early. A mixer change after pivotal trials is a comparability exercise on a product whose critical attributes are all physical, and physical attributes are much harder to argue equivalent than a chromatogram.

## Key numbers
Encapsulation efficiency above 90% · particle diameter 60–100 nm with polydispersity index typically below 0.2 · N/P ratio around 6 · 0.77 mg of total lipid per 30 µg mRNA dose in Comirnaty, a mass ratio of roughly 26 to 1 · ethanol removed and buffer exchanged by TFF · Comirnaty shipped at -90 to -60 °C at launch, later relaxed to freezer and then refrigerated storage.

## Regulatory notes
The lipids are novel excipients with no compendial monographs, so each one needs its own specification, impurity profile, and supplier qualification, usually supported by a drug master file, and the aldehyde and nitrosamine impurity questions get asked directly. On the drug product side, the critical quality attributes are physical rather than chemical (particle size, polydispersity, encapsulation efficiency, free RNA, lipid content and degradants), and FDA's liposome drug products guidance is the closest existing framework. The practical consequence is that comparability after any change to the mixer, the flow rates, or the lipid supplier is genuinely hard, because there is no structural measurement that proves two particle populations are the same. Patents are the other filing-adjacent cost: Arbutus and Genevant have litigated LNP patents against Moderna, and Alnylam has asserted claims against both Moderna and Pfizer, so royalties are a line in the cost model rather than a footnote.

## Examples
Comirnaty, using the Acuitas-derived ionizable lipid ALC-0315 with ALC-0159 as the PEG-lipid. Spikevax, using SM-102. Onpattro (patisiran), approved in 2018 with DLin-MC3-DMA, the first approved LNP nucleic acid drug and the product that established the chemistry the vaccines built on. Equipment from Precision NanoSystems (Cytiva) NanoAssemblr for development scale and impingement-jet skids from Knauer and others for commercial scale. GMP lipid supply from CordenPharma, Croda's Avanti Polar Lipids, and Evonik, which is a short list for a critical material.

## Economic profile
The lipid is the expensive part of an mRNA drug product, and the ionizable lipid is the expensive part of the lipid. That is a supply and intellectual property story more than a chemistry one: the syntheses are unremarkable multi-step organic routes, but GMP-grade material at the purity the adduct problem demands comes from a handful of qualified suppliers who invested during the pandemic. Capital is not the constraint; a formulation suite is a skid, a TFF system, and a cold room. The cost curve bends two ways. Dose reduction helps directly, since lipid scales with RNA mass, which is a large part of why self-amplifying mRNA and better-delivering particles matter commercially. And the core patents from the 2010s are aging out, which should turn ionizable lipid from a licensed position into a chemical over the next several years. If you are modeling an mRNA product, model the lipid supply agreement and the royalty stack, not the mixer.

## Videos

- https://www.youtube.com/watch?v=kdX2IRLxO3g — How Lipid Nanoparticles (LNPs) Dutifully Deliver mRNA (Moderna, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=v_0uqm5ANNs — What are Lipid Nanoparticles (LNP)? (Dr. Rob Swanda, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=EmGn8PBuZUc — Lipid nanoparticle (LNP) production for mRNA-based vaccines (KnauerHPLC, 7 minutes, 1k+ views)

## Further reading

[Comprehensive Analysis of Lipid Nanoparticle Formulation and Preparation for RNA Delivery (International Journal of Pharmaceutics: X via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11415597/) · [Process Robustness in Lipid Nanoparticle Production: A Comparison of Microfluidic and Turbulent Jet Mixing (Molecular Pharmaceutics via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11290355/)
