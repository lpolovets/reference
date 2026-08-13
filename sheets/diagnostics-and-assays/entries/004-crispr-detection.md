---
number: 4
name: CRISPR-Based Detection
part: 1
group: Sequence-based detection
sample: [swab, blood, fluid]
tat: [mins, hour]
setting: poc
reg: fda
cost: low
---

## Description
CRISPR-based detection uses a Cas protein as a sequence-recognition element rather than as an editing tool. Cas12 and Cas13 both have a useful property: once a guide RNA has directed them to their target and they have engaged it, they begin cutting nearby single-stranded nucleic acid indiscriminately. Supplying a short labeled reporter oligonucleotide turns that collateral cutting into a signal, since the reporter is only cleaved if the target was present. Cas13 acts on RNA and Cas12 on DNA, which covers both classes of target. The recognition step is very specific, capable of discriminating single-base differences, which is the main argument for the approach over an ordinary probe. In practice, target concentrations in clinical samples are too low for the readout alone, so almost every deployed assay puts an isothermal amplification step in front and uses CRISPR as the detection layer.

## Strengths and weaknesses
The strengths are specificity and format flexibility. Single-nucleotide discrimination without careful thermal optimization is genuinely useful for distinguishing variants and resistance mutations, which probe-based assays achieve less easily. The readout can be fluorescence, a lateral flow strip, or an electrochemical signal, so the same chemistry serves a laboratory instrument or a paper strip. Reagents are inexpensive and lyophilizable, which suits distribution without a cold chain. The weaknesses are that the standalone sensitivity is inadequate and that the amplification step reintroduces everything it was supposed to avoid. Once an amplification reaction is in front, the assay inherits its contamination risk, its design difficulty and much of its complexity, and the marginal advantage over a well-designed probe-based isothermal assay narrows considerably. Multiplexing is limited by the number of distinguishable reporters. The technology has attracted attention out of proportion to its deployed clinical footprint.

## When to use
Use CRISPR-based detection when discriminating a single-base difference is the point: identifying resistance mutations, distinguishing closely related variants, or genotyping at the point of care. It is also a reasonable choice when a lyophilized, instrument-free format matters and the design benefits from the guide RNA's specificity. Compare honestly against a probe-based isothermal assay for the same target, because for straightforward pathogen detection the older approach is usually simpler, cheaper and equally sensitive, and the CRISPR layer is added complexity. If the assay needs amplification anyway, be clear about what the CRISPR step is buying, and if the answer is only specificity that a probe would also provide, it is not buying much.

## Key numbers
Standalone collateral-cleavage detection is generally not sensitive enough for clinical samples, so most assays add isothermal amplification in front · single-nucleotide discrimination is achievable, which is the main advantage over probe-based detection · total assay time typically 20–60 minutes including the amplification step · Cas12 targets DNA and Cas13 targets RNA · readouts include fluorescence, lateral flow strips, and electrochemical sensors · reagents are inexpensive and can be lyophilized for distribution without cold chain.

## Failure modes
Inheriting the amplification step's problems is the structural issue: contamination risk, primer design difficulty, and non-specific amplification all come along, and a spurious amplification product that happens to be recognized produces a false positive that the CRISPR layer does not prevent. Collateral cleavage is a one-shot signal amplifier rather than an exponential one, so the dynamic range is narrow and quantification is poor. Reporter degradation from nucleases in the sample creates background. And the most common practical failure is a comparison problem rather than a technical one: assays are frequently benchmarked against poorly optimized PCR rather than against a good isothermal assay, which overstates the advantage.

## Examples
The SHERLOCK and DETECTR platforms, which established the approach and were among the first CRISPR diagnostics to receive emergency authorization during the COVID-19 pandemic; assays for distinguishing SARS-CoV-2 variants by single-base differences; tuberculosis drug resistance detection, where identifying specific resistance mutations at the point of care would be genuinely valuable; and human papillomavirus genotyping.

## Economic profile
A technology whose scientific profile has run well ahead of its commercial footprint. Substantial investment followed the initial publications and the pandemic authorizations, and the deployed clinical volume remains small relative to conventional molecular testing. The honest assessment is that the diagnostics market rewards workflow and reimbursement far more than it rewards elegant chemistry, and an assay that requires amplification anyway has to justify its extra layer against an incumbent that is cheap, fast and already installed. The clearest durable niche is genotyping at the point of care, where single-base discrimination in a simple format is a real capability that conventional rapid tests do not offer.

## Further reading

[Towards deployable CRISPR-based nucleic acid detection (Progress in Biomedical Engineering)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13227110/)
