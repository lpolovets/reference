---
number: 24
name: Plasmid DNA Manufacturing
part: 6
group: Nucleic acids
products: [nucleic, vector, cell]
scale: [pilot, mid, large]
cogs: med
maturity: proven
regulatory: validated
---

## Description
Plasmid DNA is the critical starting material under mRNA, AAV, lentivirus, and every ex vivo cell therapy, and it is made in E. coli by fermentation like any other microbial product. A high-copy pUC-origin plasmid in a DH5α- or DH10B-type strain reaches roughly 0.5–1.5 g of plasmid per litre of culture, with published processes spanning about 0.2–2.1 g/L. The cells are then lysed with sodium hydroxide and SDS, which denatures genomic DNA and protein while leaving the small covalently closed plasmid intact, and the lysate is neutralized so the debris flocculates out. Alkaline lysis is the hard part at scale: the plasmid shears if you mix too hard and the lysis is incomplete if you mix too gently, and doing that gently and uniformly in a 500 L tank is a genuine engineering problem that bench protocols hide. What follows is a purification train, usually anion exchange plus a hydrophobic interaction or size-exclusion step, sized to hit specifications on supercoiled content, residual RNA, genomic DNA, protein, and endotoxin. Plasmid comes in a grade ladder, from research material through "high quality" non-GMP up to full GMP, and each rung costs several times the one below it.

## Strengths and weaknesses
The fermentation is cheap, fast, and completely understood, and the product is chemically stable, so plasmid supply is one of the few things in the vector chain that scales by building more of what already works. The weakness is that the value is almost entirely in the purification and the paperwork, not the biology. Yields per batch are measured in grams to a few kilograms, so fixed costs of lot release, facility time, and documentation dominate the price. The failure mode people actually hit is supercoiled content: nicking during lysis or purification converts supercoiled plasmid to open-circular, and a batch that comes in below its supercoiled specification is out of spec even though the sequence is perfect. During the 2020–22 vector boom the other failure mode was schedule. GMP plasmid lead times stretched past a year, and programs sat idle waiting for a material that costs almost nothing to ferment.

## When to use
You need plasmid whenever a vector, an mRNA template, or a transfection is involved, so the decision is which grade to buy and when to switch. Use research-grade or high-quality non-GMP material for process development and most preclinical work; buying full GMP for a tox study wastes money on documentation nobody will read. Switch to GMP plasmid for the batch that makes clinical material, and switch earlier than feels necessary, because the lead time is 3–9 months and a plasmid change late in development means bridging data on the vector it feeds. If the plasmid is itself injected into patients, as in a DNA vaccine or a nucleic acid therapeutic, it is the drug substance and full GMP applies from the start. If your program is large enough that plasmid is a real fraction of your vector cost, look at enzymatic and linear DNA alternatives, but treat them as a change of starting material with its own comparability work rather than as a drop-in.

## Key numbers
Fermentation titer roughly 0.5–1.5 g of plasmid per litre, with published processes spanning 0.2–2.1 g/L · supercoiled content specified at roughly 85–90% and up · endotoxin typically below 10 EU/mg · GMP plasmid at $1,000/g and up · roughly 10–30% of the cost of goods of the vector or mRNA it feeds · GMP lead time 3–9 months, and worse than a year during the 2021 crunch.

## Regulatory notes
Plasmid used to make a vector is a critical starting material rather than a drug substance, so it is not licensed on its own, but FDA and EMA both expect a documented quality standard, a traceable cell bank, and release testing appropriate to how the material is used. That gives sponsors real latitude early and very little late, which is why "GMP-like" plasmid so often has to be re-made under full GMP before a pivotal trial. Two specifics matter more than they look. Regulators discourage beta-lactam selection markers because residual ampicillin carries a hypersensitivity risk, so kanamycin markers are the norm and antibiotic residue is a tested attribute. And a plasmid change is a change to the starting material of everything downstream, so it drags comparability work onto the vector, the drug substance, and sometimes the clinical data.

## Examples
Aldevron's Fargo, North Dakota plant, built out during the pandemic and the supplier of template plasmid to Moderna. VGXI, Cobra Biologics (now Charles River), PlasmidFactory, and Waisman Biomanufacturing on the clinical-supply side; Thermo Fisher and Catalent as integrated CDMO options. Nature Technology's Nanoplasmid vectors, which shrink the antibiotic-free backbone. Touchlight's doggybone DNA, an enzymatically amplified linear closed construct made without bacteria at all, which is the most developed of the alternatives to fermented plasmid.

## Economic profile
The fermentation is a rounding error and the rest is fixed cost, which is why plasmid prices per gram fall steeply with batch size and barely at all with strain improvement. A GMP lot is a facility slot, a lysis skid, a purification train, and a release panel, and those cost roughly the same for 5 g as for 50 g. The 2021–22 shortage pulled a lot of capital into plasmid capacity at Aldevron, Thermo, Charles River, and a dozen smaller CDMOs, and then the gene therapy funding cycle turned. Capacity went from scarce to loose within about two years, prices came down, and lead times normalized. For anyone building on plasmid, the practical consequence is that supply risk has moved from "can I get it" to "can I get it from a second source without redoing comparability," and dual-sourcing a starting material is much harder than dual-sourcing a resin.

## Videos

- https://www.youtube.com/watch?v=SdqJFA6mOkI — What is a Plasmid? - Plasmids 101 (Addgene, 5 minutes, 500k+ views)
- https://www.youtube.com/watch?v=cifimuc9mhs — Plasmid DNA Technology: Aldevron's Manufacturing Process (Aldevron, 5 minutes, 1k+ views)
- https://www.youtube.com/watch?v=nvttgCm6CNs — GMP Manufacturing Walkthrough (Touchlight Genetics, 6 minutes, 1k+ views)

## Further reading

[Considerations for Plasmid DNA Vaccines for Infectious Disease Indications (FDA)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-plasmid-dna-vaccines-infectious-disease-indications) · [Manufacturing DNA in E. coli Yields Higher-Fidelity DNA Than In Vitro Enzymatic Synthesis (Molecular Therapy: Methods and Clinical Development via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10951457/)
