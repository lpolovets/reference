---
number: 27
name: AAV Vector Production
part: 6
group: Viral vectors
products: [vector]
scale: [bench, pilot, mid]
cogs: vhigh
maturity: proven
regulatory: validated
---

## Description
AAV is the delivery vehicle for in vivo gene therapy, and making it is the reason those therapies cost $2M–4M a dose. The dominant route is transient triple transfection of HEK293 cells: one plasmid carries the transgene between AAV inverted terminal repeats, one carries rep and cap, one carries the adenoviral helper functions, and all three go in on polyethylenimine. Cells are harvested 48–96 hours later, lysed, treated with nuclease, clarified, captured on an AAV-specific affinity resin, and then run through anion exchange to separate capsids that contain a genome from capsids that do not. Suspension processes yield on the order of 10¹⁴–10¹⁵ vector genomes per liter of culture, and overall downstream recovery is commonly 10–30%. Set that against the dose: Elevidys is 1.33 × 10¹⁴ vg/kg, or a fixed 9.31 × 10¹⁵ vg for a patient of 70 kg or more, and Hemgenix is 2 × 10¹³ gc/kg. One adult systemic dose therefore consumes roughly 30 to 900 liters of culture depending where in those ranges the process lands, so a 2,000 L run makes somewhere between about two doses and about sixty.

## Strengths and weaknesses
AAV is the only vector with a real record of durable in vivo gene transfer from a single administration: it does not integrate into the genome in any meaningful fraction, it transduces non-dividing cells, and serotype choice gives some control over which tissue it reaches. Everything difficult about it follows from the arithmetic above. Most of the capsid protein the cells make is wasted, because triple transfection commonly leaves only 10–30% of capsids carrying a genome, and that fraction has to be enriched downstream at a cost in yield. Note what the empty capsids do and do not cost: vector genome titer already counts only genome-containing particles, so empties are not a second multiplier on yield, but they consume the cells' capacity to make capsid, they force the anion-exchange step that loses product, and any that survive into the vial add capsid antigen without adding therapeutic effect. The clinical failure mode is dose-driven. High systemic doses have caused acute liver injury and deaths, and immune responses to capsid have driven both boxed warnings and clinical holds, so the pressure to lower dose is a safety argument as much as a cost one.

## When to use
Pick AAV when a single in vivo administration has to produce protein for years in a tissue you can reach, and when the target population is small enough or the dose low enough that the arithmetic closes. It closes easily for local delivery: Luxturna is 1.5 × 10¹¹ vg per eye, four to five orders of magnitude below a systemic dose, and subretinal, intrathecal, and intra-articular routes are all manufacturable at bench scale. It closes with difficulty for a systemic dose in an infant, as Zolgensma showed at 1.1 × 10¹⁴ vg/kg in patients weighing under 15 kg. It does not close today for a systemic dose in a large adult population, and you should treat any business plan that assumes it does as a claim about yield improvement rather than a plan. On production route: use transient triple transfection if speed to the clinic matters most, Sf9 and baculovirus if you need volumetric yield and can carry the baculovirus clearance work, and a stable producer line only if the program is large enough to pay for the two-plus years it takes to build one. Use fixed-bed adherent systems below roughly 100 L equivalent and suspension at 200–2,000 L above that.

## Key numbers
Suspension yield roughly 10¹⁴–10¹⁵ vector genomes per liter · full capsids commonly 10–30% of the total from triple transfection, enriched downstream before release · overall downstream recovery 10–30% · doses of 1.33 × 10¹⁴ vg/kg (Elevidys, or 9.31 × 10¹⁵ vg fixed above 70 kg), 1.1 × 10¹⁴ vg/kg (Zolgensma), 2 × 10¹³ gc/kg (Hemgenix), and 1.5 × 10¹¹ vg per eye (Luxturna) · roughly 30–900 liters of culture per adult systemic dose · US launch prices from $850,000 for Luxturna to $3.5M for Hemgenix.

## Regulatory notes
Everything here is heavily validated and slow. Release requires replication-competent AAV testing, residual plasmid and host cell DNA, empty-capsid content as a specification, and a potency assay that has to measure biological activity rather than particle count. FDA's long-term follow-up guidance recommends monitoring AAV recipients for up to 5 years, against up to 15 for integrating vectors. The analytics themselves are a review problem: an international comparison of vector genome titer on identical material found results varying by more than an order of magnitude between laboratories, which is why AAV2 and AAV8 reference standard materials exist at ATCC, and why a titer method change can look like a potency change. Pre-existing neutralizing antibodies to the capsid exclude a substantial share of otherwise eligible patients and make the screening assay part of the label. Add the immunogenicity findings, and the practical effect is that AAV programs carry more clinical-hold risk per patient dosed than anything else in this reference.

## Examples
Luxturna (Spark/Roche, subretinal, 2017), Zolgensma (Novartis, systemic, 2019), Roctavian (BioMarin, hemophilia A, 2023), Hemgenix (CSL and uniQure, hemophilia B, 2022, made on uniQure's Sf9 baculovirus platform), and Elevidys (Sarepta and Roche, Duchenne muscular dystrophy, 2023). On the supply side: Thermo Fisher's POROS CaptureSelect AAVX affinity resin, which most processes now capture on; Pall's iCELLis fixed-bed reactors for adherent production; Ultragenyx's HeLa-based stable producer platform as the main worked example of the third route; and CDMO capacity at Charles River, Forge Biologics, Andelyn Biosciences, Catalent, and Thermo Fisher.

## Economic profile
Cost of goods per dose is driven by volumetric yield, downstream recovery, and dose size, in that order, and none of the three has improved as fast as the field expected. Plasmid and transfection reagent for a 500–2,000 L transient run are a large materials bill on their own, which is the standing argument for producer cell lines, and the standing counterargument is that building one takes years and locks the capsid. Manufacturing capacity is no longer the constraint it was: a lot of AAV capacity was built in 2020–22, several gene therapy programs were then discontinued or withdrawn, and CDMO suites now sit underused, so pricing has softened and a small program can buy slots it could not have bought in 2021. Prices of $2M–4M are not cost-plus; they reflect tiny populations and a one-time treatment, and cost of goods is a modest fraction of them. That matters for where the money is worth spending: for a small rare-disease indication, yield improvement changes little, while for any indication with more than a few thousand adult patients, an order of magnitude in yield or a tenfold lower dose is the whole business case.

## Videos

- https://www.youtube.com/watch?v=GyCO9c2PbtU — 2) Adeno Associated Virus (AAV) - Production and Modification of AAV (Applied Biological Materials - abm, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=0Xur5f8Njk4 — AAV Purification (Addgene, 5 minutes, 10k+ views)

## Further reading

[Chemistry, Manufacturing, and Control (CMC) Information for Human Gene Therapy Investigational New Drug Applications (FDA)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/chemistry-manufacturing-and-control-cmc-information-human-gene-therapy-investigational-new-drug) · [Advancing AAV Vector Manufacturing: Challenges, Innovations, and Future Directions for Gene Therapy (Frontiers in Molecular Medicine via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12709507/)
