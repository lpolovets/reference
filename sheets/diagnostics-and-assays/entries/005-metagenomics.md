---
number: 5
name: Metagenomic Sequencing
part: 1
group: Sequence-based detection
sample: [blood, fluid, tissue, swab]
tat: [days]
setting: reference
reg: ldt
cost: high
---

## Description
Metagenomic sequencing does not ask whether a specific organism is present. It sequences everything nucleic acid in a sample and works out afterwards what was there, by comparing the reads against databases of known organisms. The human DNA usually dominates, often overwhelmingly, so the practical challenge is depleting host material or sequencing deeply enough that the pathogen's small share is still visible. Both DNA and RNA workflows exist, which matters because RNA viruses are invisible to a DNA-only protocol. The output is a list of organisms with read counts, which then has to be interpreted against what would normally be present, since every clinical sample contains commensal organisms and every laboratory reagent contains some background microbial DNA. That interpretation step is where the difficulty lives, and it is more of a clinical judgment than a laboratory result.

## Strengths and weaknesses
The strength is that it can find anything, including organisms nobody suspected, organisms that do not grow in culture, and organisms with no available targeted test. For a patient with an undiagnosed infection after conventional testing has failed, it is often the only remaining option and has produced diagnoses that changed management. It also gives resistance genes and strain-level information from the same data. The weaknesses are cost, turnaround and interpretation. It is far more expensive than targeted testing and takes days rather than hours, so it is a second-line test by economics as much as by design. Sensitivity is lower than a targeted assay for the same organism, because the pathogen's reads compete with host and background. Distinguishing infection from colonization and from contamination is genuinely hard, and a positive result for a plausible organism does not establish causation.

## When to use
Use metagenomic sequencing when conventional testing has failed and the clinical picture still suggests infection, which is its established niche: culture-negative endocarditis, undiagnosed encephalitis and meningitis, immunocompromised patients with unexplained illness. Cerebrospinal fluid is the best-validated application, partly because it is normally sterile, which makes interpretation far easier than for a sample full of commensals. Use targeted testing first in almost every case, since it is cheaper, faster and more sensitive for the organisms it covers. Involve infectious disease clinicians in interpretation rather than reporting an organism list, because the difference between a pathogen and a passenger is a clinical question that the assay cannot answer.

## Key numbers
Sequences all nucleic acid present, with human material typically dominating and requiring depletion or deep sequencing · turnaround typically 1–3 days including analysis, against hours for targeted testing · cost per sample in the high hundreds of dollars · sensitivity for a given organism is generally below a targeted assay for that organism · both DNA and RNA workflows are needed for full coverage, since RNA viruses are invisible to DNA-only protocols · cerebrospinal fluid is the best-validated sample type because it is normally sterile.

## Failure modes
Interpretation is where this assay goes wrong, and it goes wrong in both directions. Reagent and environmental contamination introduces microbial DNA into every run, so a low-level positive for a common environmental organism is more likely to be contamination than infection, and distinguishing them requires careful negative controls and a laboratory that tracks its own background. Commensal organisms appear in any non-sterile site and can be reported as findings. Conversely, host material can swamp a real pathogen present at low abundance, producing a false negative in exactly the difficult case the test was ordered for. Database limitations mean an organism absent from the reference is unrecognized. And the temptation to attribute causation to whatever organism was reported is a real clinical hazard.

## Examples
Clinical metagenomic sequencing of cerebrospinal fluid for undiagnosed encephalitis, the best-established application and the subject of the strongest published evidence; plasma microbial cell-free DNA testing for sepsis and culture-negative endocarditis; outbreak investigation where the causative organism is unknown; and the identification of novel pathogens, including the initial characterization of SARS-CoV-2, which was a metagenomic result.

## Economic profile
An expensive second-line test whose economics depend on being ordered for the right patients, which has been the main commercial challenge rather than the technology. Reimbursement has been inconsistent, and the value case rests on avoided costs from shortened diagnostic odysseys and stopped empirical therapy rather than on the test price itself, which is a harder argument to make to a payer. Falling sequencing costs improve the picture steadily. The most defensible commercial positions have been in specific well-validated indications rather than in general-purpose pathogen detection, because a test that could find anything is difficult to define a reimbursable use for.
