---
number: 1
name: Real-Time PCR
part: 1
group: Amplification methods
sample: [blood, swab, tissue, fluid]
tat: [hour, shift]
setting: hospital
reg: fda
cost: low
---

## Description
Real-time PCR is the workhorse of molecular diagnostics. It copies a chosen DNA sequence exponentially through repeated cycles of heating and cooling, and reports the amount of product after every cycle using a fluorescent probe, so the answer is read as the reaction proceeds rather than afterwards. The cycle at which fluorescence crosses a threshold is proportional to how much target was in the sample, which makes the assay quantitative over several orders of magnitude. Reverse transcription in front of the reaction extends it to RNA targets, which is how respiratory virus testing works. Multiplexing several probes with different fluorophores lets one reaction ask about several targets at once, typically up to four or five before the color channels run out, and multiplex respiratory panels stack many reactions in parallel instead.

## Strengths and weaknesses
The strengths are sensitivity, speed, cost and ubiquity. Detection down to a handful of target copies is routine, results arrive in one to two hours, reagent cost per reaction is a few dollars, and essentially every hospital laboratory in the world can run it. The dynamic range covers the concentrations that matter clinically, and the technique is thoroughly understood. The weaknesses are that it only finds what you asked for and that its quantification is relative rather than absolute. A pathogen not on the panel is invisible, so a negative respiratory panel does not mean no infection. Quantification requires a standard curve and is sensitive to amplification efficiency, so comparing values across laboratories is unreliable without a common calibrator. Inhibitors carried over from blood, stool and other difficult samples suppress amplification and produce false negatives unless an internal control catches them. Contamination with previous amplification product is the classic laboratory disaster.

## When to use
Use real-time PCR when you know which organism or sequence you are looking for, need an answer within a shift, and want the lowest cost per result. It is the correct default for infectious disease detection, viral load monitoring, and any targeted nucleic acid question in a hospital laboratory. Use digital PCR instead when you need absolute quantification without a standard curve or need to detect a rare variant against a large background. Use metagenomic sequencing when the organism is unknown and the panel has come back negative. Use an isothermal method when the setting has no thermal cycler, which is the situation at the point of care and in the field. Always include an internal amplification control, because inhibition is common and silent.

## Key numbers
Detection limits typically in the range of a few to tens of target copies per reaction · quantitative across roughly 6–7 orders of magnitude with a standard curve · run time commonly 1–2 hours, with fast protocols under 30 minutes · reagent cost of a few dollars per reaction · multiplexing to roughly 4–5 targets per reaction before fluorescence channels are exhausted · thermal cycling between roughly 95 °C for denaturation and 55–60 °C for annealing, repeated 35–45 times.

## Failure modes
Contamination is the failure that closes laboratories. Amplification produces enormous numbers of copies of the target, and a single aerosol carrying them into a subsequent reaction makes it positive; this is why molecular laboratories use unidirectional workflows and physically separate pre- and post-amplification areas. Inhibition from sample matrix suppresses amplification and gives a false negative that looks exactly like a true negative unless an internal control is included, which is why the control is not optional. Primer or probe mismatches caused by pathogen evolution silently reduce sensitivity, and several assays have failed as variants emerged. Quantification drifts between laboratories and platforms without a common calibrator, which is why viral load results are not comparable across sites.

## Examples
SARS-CoV-2 testing, which was overwhelmingly real-time PCR and defined public understanding of the method; HIV and hepatitis viral load monitoring, where quantification guides therapy; respiratory and gastrointestinal multiplex panels; Group B streptococcus and other perinatal screening; and the very large body of clinical microbiology testing that replaced culture for organisms that grow slowly or not at all.

## Economic profile
A mature, competitive, low-margin reagent business that became briefly and enormously profitable during the COVID-19 pandemic and then contracted sharply, which is a useful lesson about diagnostics revenue: volume driven by a public health emergency does not persist. Instruments are widely installed and largely commoditized. The margin now sits in multiplex panels, which bundle many targets into one billable test with a much better reimbursement per sample than a single-target assay, and in the closed cartridge systems that trade reagent cost for simplicity. Cost per reaction has fallen to the point that it is rarely the constraint; reimbursement and laboratory labor are.
