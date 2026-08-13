---
number: 10
name: Single-Molecule Immunoassay
part: 2
group: Quantitative immunoassays
sample: [blood, fluid]
tat: [shift]
setting: reference
reg: ldt
cost: med
---

## Description
A single-molecule immunoassay counts individual protein molecules instead of measuring bulk signal. The trick is confinement. An ordinary sandwich immunoassay is built on a bead, but instead of pooling the beads and reading total fluorescence, each bead is sealed into a femtoliter-sized well, so small that a single enzyme label generates enough product within that tiny volume to make the well visibly fluorescent. At low analyte concentrations most wells are empty and a few are bright, and counting the bright fraction gives a digital measurement. At higher concentrations the assay reverts to reading average intensity. Confining the reaction raises the effective local concentration by orders of magnitude, which is what lets the method reach detection limits roughly a thousandfold below a conventional immunoassay and measure proteins in blood that were previously only detectable in cerebrospinal fluid.

## Strengths and weaknesses
The strength is sensitivity, and it has opened genuinely new clinical territory. Measuring neurofilament light chain and phosphorylated tau in plasma, rather than requiring a lumbar puncture, has made blood-based neurological biomarkers practical, which is the clearest example of an assay's detection limit creating a clinical field rather than merely improving one. Precision at low concentrations is good and dynamic range is wide. The weaknesses are cost, throughput and the fact that better sensitivity does not resolve specificity. The antibodies are the same ones a conventional assay would use, so cross-reactivity and interference carry over unchanged, and measuring a wrong thing very sensitively is still measuring the wrong thing. Instruments are expensive and throughput is modest. Reagent cost per sample is well above a plate ELISA. Standardization across platforms is poor, which matters as these assays move toward clinical decision thresholds.

## When to use
Use a single-molecule immunoassay when the target is present below what conventional immunoassay can detect and the measurement matters, which today means principally neurological biomarkers in blood, low-abundance cytokines, and early detection applications. It is the right tool when moving a measurement from cerebrospinal fluid to plasma would change clinical practice. Use a conventional automated platform when the analyte is abundant enough to measure there, since it is cheaper, faster and better standardized. Be careful about interpreting very low concentrations near the detection limit, and establish reference ranges on the specific platform rather than borrowing them, because inter-platform agreement is currently inadequate for shared thresholds.

## Key numbers
Detection limits roughly a thousandfold below conventional immunoassay, reaching femtogram per milliliter concentrations · femtoliter-scale wells are what raise the effective local concentration enough to detect one enzyme label · digital counting at low concentrations, transitioning to analog intensity reading at higher ones · sample volume of tens of microliters · assay time several hours · reagent cost per sample well above a plate ELISA · inter-platform standardization is poor for most analytes.

## Failure modes
Sensitivity without specificity is the structural trap: the antibodies are the limiting element, and an assay that detects femtogram concentrations of a cross-reacting protein is worse than a less sensitive one, because the result looks authoritative. Interference from heterophile antibodies and biotin applies as it does to any immunoassay. At concentrations near the detection limit, small differences in sample handling, freeze-thaw cycles and hemolysis produce meaningful shifts, so pre-analytical variables that never mattered before become critical. Reference ranges established on one platform do not transfer to another, and using a published threshold with a different assay is a real and growing source of error as these markers enter clinical use.

## Examples
Plasma neurofilament light chain as a marker of neuronal injury across multiple neurological diseases; phosphorylated tau species in plasma for Alzheimer's disease, which have moved amyloid-related diagnosis from imaging and lumbar puncture toward a blood test; low-abundance cytokine measurement in immunology; cardiac troponin at concentrations below conventional high-sensitivity assays; and the Simoa platform, which established the approach commercially.

## Economic profile
A research instrument business that is being pulled into clinical diagnostics by the neurological biomarker field, which is the most important development in the category. If blood-based Alzheimer's biomarkers become routine, the volume implications are large and the requirements change: clinical use demands standardization, regulatory clearance and much higher throughput than current research platforms provide, which favors the large automated immunoassay manufacturers who are developing their own high-sensitivity versions. The likely outcome is that the technology's clinical value accrues substantially to the incumbent platform vendors rather than to the specialist instrument companies that pioneered it.
