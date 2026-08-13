---
number: 7
name: ELISA
part: 2
group: Quantitative immunoassays
sample: [blood, fluid]
tat: [shift]
setting: hospital
reg: fda
cost: low
---

## Description
The enzyme-linked immunosorbent assay is the standard way to measure a specific protein in a fluid. In the common sandwich format, a capture antibody is bound to the bottom of a microplate well, sample is added and the target binds, a second antibody carrying an enzyme binds to a different part of the same target, and a substrate is added that the enzyme converts into a colored or luminescent product. Signal is proportional to how much target was present, read against a standard curve run on the same plate. The sandwich requires two antibodies binding different epitopes simultaneously, which is what gives the assay its specificity, and finding a good antibody pair is usually the hardest part of developing one. Competitive formats exist for targets too small to sandwich, where sample analyte competes with a labeled version for a limited number of binding sites.

## Strengths and weaknesses
The strengths are quantification, cost and maturity. A well-developed ELISA is precise, quantitative over two to three orders of magnitude, costs a few dollars per sample in a 96-well plate, and runs on equipment every laboratory owns. Decades of use mean protocols, controls and troubleshooting are thoroughly established, and it remains the reference method against which newer protein assays are compared. The weaknesses are hands-on time, dynamic range and antibody dependence. A manual plate takes several hours with multiple incubation and wash steps, which limits throughput and introduces operator variability. Dynamic range is narrower than mass spectrometry or newer immunoassay formats, so samples outside it need dilution and rerunning. Everything depends on the antibodies: a change in antibody lot changes the assay, cross-reactivity with related proteins is common and often undetected, and for many targets no good antibody pair exists at all.

## When to use
Use an ELISA when you need to quantify a known protein in a fluid, at moderate throughput, with well-understood performance. It remains the default for cytokines, hormones, biomarkers, antibody titers and antigen detection in both research and clinical settings. Use an automated chemiluminescent platform instead when clinical volume is high, since the walk-away automation and better sensitivity are worth the instrument. Use a multiplex bead assay when many analytes are needed from a small sample volume. Use single-molecule methods when the target is present below what an ELISA can see, which is the case for many neurological biomarkers. Use mass spectrometry when antibody specificity is doubtful or no antibody pair exists. Always qualify a new antibody lot against the old one, because lot-to-lot variation is the most common source of unexplained drift.

## Key numbers
Detection limits typically in the picogram to nanogram per milliliter range · quantitative over roughly 2–3 orders of magnitude, so samples outside the range need dilution · assay time 3–5 hours for a manual sandwich format with several incubations and washes · 96-well plate format is standard, with 384-well used for higher throughput · cost of a few dollars per sample including standards and controls · requires two antibodies binding distinct epitopes, which is the main development bottleneck.

## Failure modes
Antibody problems dominate. Cross-reactivity with related proteins produces results that are precise, reproducible and wrong, and it is frequently undetected because the assay has no way to report what it actually bound. Lot-to-lot variation in polyclonal antibodies shifts the standard curve, so results drift over time unless each lot is bridged against the previous one. The hook effect at very high concentrations saturates capture and detection antibodies separately, so an extremely positive sample reads low or negative. Matrix effects mean an assay validated in buffer behaves differently in serum or plasma. Interfering antibodies in patient samples, particularly heterophile antibodies, bridge the capture and detection antibodies directly and produce false positives that have caused real clinical harm.

## Examples
Cytokine and biomarker measurement across biomedical research; hepatitis B surface antigen and HIV antibody screening, historically among the highest-volume clinical uses; food allergen and contaminant testing; anti-drug antibody assays in biologics development, where the format is a regulatory requirement; and the enormous catalog of commercial research kits, which is one of the largest reagent markets in life science.

## Economic profile
A mature commodity market with many suppliers and low differentiation, in which the value has moved from the assay to the antibody. Kit prices are competitive and manufacturing is straightforward, so the durable positions belong to whoever owns well-characterized antibody pairs for commercially important targets. In clinical laboratories the manual plate format has largely been displaced by automated chemiluminescent analyzers for high-volume work, and ELISA survives in research, in lower-volume clinical testing, and in regulated applications where the method is written into a guideline. The research kit market remains large and is notably unreliable in quality, since many kits are sold with minimal validation.

## Further reading

[The enzyme-linked immunosorbent assay (ELISA) (Bulletin of the World Health Organization)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2366430/) · [Haemolysis and lipemia interfere with resistin and myeloperoxidase BioVendor ELISA assays (Biochemia Medica)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6457919/)
