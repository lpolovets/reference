---
number: 20
name: Viral Clearance
part: 5
group: Viral safety and formulation
products: [protein, vaccine]
scale: [pilot, mid, large]
cogs: low
maturity: default
regulatory: validated
---

## Description
Mammalian cells can carry endogenous retrovirus-like particles and can pick up adventitious virus from raw materials, so any process using them has to demonstrate that the purification train would remove or inactivate virus if it were there. Three orthogonal mechanisms carry the load in a standard antibody process. A low-pH hold at pH 3.4–3.8 for 30–60 minutes inactivates enveloped virus by better than 4 logs, and it is nearly free because the Protein A eluate is already at pH 3.0–3.5 and only needs to be held. Anion-exchange flow-through removes 3–5 logs by binding virus while the product passes. A 20 nm virus filter removes better than 4 logs of both enveloped and non-enveloped virus, including parvovirus, on size alone. Total expectations are conventionally at least 12 logs against the retrovirus model X-MuLV and at least 6 against the small non-enveloped model MMV, with cumulative claims commonly landing in the 12–18 log range.

## Strengths and weaknesses
The strategy works, it is platform, and two of the three steps cost almost nothing extra because they are steps you were running anyway. The expensive piece is the virus filter, which is single-use, sized for the whole batch, and can account for up to 10% of total purification cost on its own. It is also the step most sensitive to what comes before it: aggregate and fine particulate in the feed blind a 20 nm membrane, and throughput varies enormously between products and filter types, with published mass throughputs spanning roughly 7 to 76 kg/m² in a four-hour run depending on which filter and which feed. The failure mode is a filter that plugs partway through the batch, at which point you either install pre-purchased spare area under time pressure or you stop. The other weakness is not equipment at all. Clearance is never demonstrated in the plant, because you cannot spike live virus into a GMP suite. It is demonstrated in a qualified scaled-down model at a contract lab, and every meaningful change to a claimed step means running those studies again.

## When to use
There is no choice about whether to do this if mammalian cells are involved; the decisions are which steps carry the logs and how much margin you build. Build margin deliberately, because reviewers do not let you count two steps with the same mechanism twice and they cap how much any single step may claim. If your molecule does not survive pH 3.5, you lose the cheapest 4 logs and have to find them elsewhere, usually through solvent/detergent treatment or a higher-clearance anion-exchange step, and you should discover that in early development rather than during validation. If the product is itself a virus or a viral vector, filtration is off the table on size grounds and the whole strategy changes, resting on cell bank characterization, raw material control, and orthogonal chromatography instead. Microbial, plant, and cell-free processes skip the category entirely, which is a structural cost advantage before any equipment is chosen.

## Key numbers
Low-pH hold at pH 3.4–3.8 for 30–60 minutes, over 4 logs against enveloped virus · anion-exchange flow-through at 3–5 logs · 20 nm filtration at over 4 logs against both enveloped and non-enveloped virus · cumulative targets of at least 12 logs against X-MuLV and at least 6 against MMV, commonly 12–18 in total · virus filter mass throughput of roughly 7–76 kg/m² in a four-hour run depending on filter and feed · virus filtration up to 10% of total purification cost.

## Regulatory notes
This entry is mostly regulatory burden expressed as unit operations. ICH Q5A is the governing guideline, and its 2023 revision extended it to newer modalities and gave more room for prior-knowledge and modular claims. Studies spike a panel of typically four model viruses chosen to span size, genome type, and envelope status into scaled-down feed, and each claimed step needs its own study at the extremes of its operating range. The scale-down model itself has to be qualified against the manufacturing step before any of its results count. The recurring cost is not the filters, it is the study batches, the BSL-2 contract lab time, and the calendar: a process change that touches a claimed step reopens the package, and that is one of the main reasons purification processes get frozen before pivotal trials and stay frozen.

## Examples
Filters from Asahi Kasei (Planova 20N and BioEX), Merck Millipore (Viresolve Pro and NFP), Sartorius (Virosart CPV and HF), and Pall (Pegasus). Clearance studies are run by contract labs including Charles River, Texcell, Nelson Labs, and WuXi AppTec. The case that explains why the category exists is Genzyme's Allston plant in 2009, where a Vesivirus 2117 contamination of cell culture shut down production and caused long shortages of Cerezyme and Fabrazyme for patients with no alternative therapy.

## Economic profile
Viral safety usually sits in the 5–15% band of cost of goods, with the virus filter as the largest single consumable and the validation studies as a program-level expense rather than a per-batch one. The filter cost curve has moved in a useful direction, since newer membranes carry far more mass per square metre than the first generation, and some can be flushed and reused within a batch. The validation cost curve has not moved much, because it is driven by study design and regulator expectations rather than by technology. For anyone modeling a biologics business, the practical implication is that this is a fixed structural cost of using mammalian cells: it shows up as filters, as several months of program calendar, and as a constraint on how freely you can change the process later.

## Videos

- https://www.youtube.com/watch?v=cRXO9kplJM4 — Viral Safety in Biomanufacturing Part 6 - Nanofiltration - Two Minute Tuesday Technical Training (WuXi Biologics, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=4C2dCRCt3Mo — What is Viral Inactivation? #biochemistry (METTLER TOLEDO AutoChem, 4 minutes, 5k+ views)
- https://www.youtube.com/watch?v=UNEaFufDOAE — Biopharma Virus Clearance Studies: The Fundamentals (Sartorius, 5 minutes, 1k+ views)

## Further reading

[Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin, Q5A(R2) (ICH)](https://database.ich.org/sites/default/files/ICH_Q5A%28R2%29_Guideline_2023_1101.pdf) · [Modeling Virus Filtration: Materials, Applications, and Mechanism (iScience via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11728907/)
