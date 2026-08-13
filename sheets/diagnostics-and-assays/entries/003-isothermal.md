---
number: 3
name: Isothermal Amplification
part: 1
group: Amplification methods
sample: [swab, blood, fluid]
tat: [mins, hour]
setting: poc
reg: waived
cost: low
---

## Description
Isothermal amplification copies a target sequence at one constant temperature, removing the thermal cycler that PCR requires. Several chemistries achieve this by different means. LAMP uses four to six primers that recognize six regions of the target and a strand-displacing polymerase, producing a cascade of looped products at around 60 to 65 degrees; the extra primers make it both fast and unusually specific. Recombinase polymerase amplification runs at body temperature using proteins that pry open double-stranded DNA so primers can invade, which means a reaction can run in a pocket. Nicking enzyme and helicase-dependent methods take other routes to the same goal. Because no cycling hardware is needed, the instrument can be a heater block, a chemical warmer, or nothing at all, which is what makes genuinely portable molecular testing possible.

## Strengths and weaknesses
The strengths are speed, simplicity and tolerance. Reactions complete in 10 to 30 minutes against one to two hours for PCR, hardware is minimal, and the chemistries tolerate crude samples much better than PCR does, so minimal or no nucleic acid extraction is often sufficient. Results can be read by eye through a color change, which removes the instrument entirely. The weaknesses are design difficulty and quantification. Designing a LAMP primer set is far harder than designing PCR primers, because six regions must be targeted with strict spacing constraints, and many targets have no good design. Multiplexing is difficult, since the products are complex and hard to distinguish, so most isothermal assays test for one or a few targets. Quantification is poor. And the same properties that make the reaction fast and robust make non-specific amplification common, so unoptimized assays produce false positives that a colorimetric readout cannot distinguish from real ones.

## When to use
Use isothermal amplification when the test has to happen where the patient is and molecular sensitivity is required: point-of-care infectious disease testing, field and outbreak surveillance, at-home molecular tests, and low-resource settings without laboratory infrastructure. It is the right choice when speed and portability matter more than multiplexing or quantification. Use PCR when the assay must detect many targets, quantify, or run in a laboratory that already has cyclers. Invest heavily in assay design and validation, because the false-positive risk from non-specific amplification is the main way these assays fail in the field, and it is much easier to catch during development than after deployment.

## Key numbers
Runs at a single constant temperature, roughly 60–65 °C for LAMP and near body temperature for recombinase polymerase amplification · reaction time typically 10–30 minutes against 1–2 hours for PCR · LAMP uses 4–6 primers covering 6 regions of the target, against 2 for PCR · sensitivity approaching PCR for well-designed assays, generally somewhat below · tolerates crude samples, often with minimal or no extraction · readable by color change without an instrument · multiplexing limited, typically 1–3 targets.

## Failure modes
Non-specific amplification is the characteristic problem. The strand-displacing chemistry and multiple primers that make the reaction fast also make primer interactions likely, and once amplification starts it proceeds regardless of whether it began from the target. With a colorimetric readout there is no way to tell a real product from a spurious one, which is why probe-based or sequence-specific readouts are worth the added complexity in clinical use. Carryover contamination is worse than for PCR because amplification is so efficient and because these assays are run in uncontrolled settings without the unidirectional workflow a molecular laboratory uses. Primer design failure means many targets simply have no workable assay, which is a development risk rather than a field one.

## Examples
The at-home and point-of-care molecular COVID-19 tests, several of which used isothermal chemistry to deliver a result in about 15 minutes; LAMP-based tuberculosis and malaria testing in low-resource settings; field surveillance for agricultural and veterinary pathogens; the Abbott ID NOW platform; and CRISPR-based detection systems, which typically use an isothermal amplification step in front of the CRISPR readout to reach clinical sensitivity.

## Economic profile
The chemistry that makes decentralized molecular testing economically possible, because removing the thermal cycler removes both the instrument cost and the requirement for a laboratory. That has opened markets that PCR cannot serve at all: pharmacy testing, home testing, and diagnostics in settings with no laboratory infrastructure. The commercial pattern in this category is closed cartridge systems that hide the chemistry's fragility behind engineering, which raises the cost per test well above the reagent cost but is what makes CLIA-waived operation possible. Reimbursement for point-of-care molecular testing has been the main determinant of adoption, more than the technology.
