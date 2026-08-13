---
number: 2
name: Avidity Sequencing
part: 1
group: Short-read platforms
role: read
length: [vshort]
apps: [wgs, targeted, rna]
cost: vlow
maturity: emerging
---

## Description
Avidity sequencing keeps the cluster-and-image architecture of conventional short-read sequencing and changes how a base is identified. Instead of incorporating one labeled nucleotide per cycle and reading its color, it uses large multivalent substrates: a polymer core carrying many copies of the same nucleotide, which binds the sequencing complex through many simultaneous contacts at once. Because binding strength grows steeply with the number of contacts, the correct base binds far more tightly than an incorrect one, and the discrimination between right and wrong is much better than single-molecule binding gives. The bound complex can then be imaged at low reagent concentration, which reduces the background that limits conventional chemistry. Separating the recognition step from the incorporation step is the structural change: the accuracy comes from binding, and the chain extension happens afterwards with unlabeled nucleotides.

## Strengths and weaknesses
The strengths are accuracy and reagent economics. Reported raw error rates are lower than conventional sequencing by synthesis by a meaningful margin, which reduces the coverage needed to make a confident call and therefore the cost of an answer rather than the cost of a base. Because the detection step uses very low nucleotide concentrations, reagent consumption per base is low. The chemistry also allows the extension step to be optimized separately from detection, which gives room to improve. The weaknesses are ecosystem and scale rather than chemistry. Read lengths are in the same short range as conventional platforms, so none of the structural limitations of short reads are addressed. Tooling, reference datasets and pipeline validation are far thinner than for the incumbent, which matters most in clinical settings where an assay has to be validated against established data. Installed base and service infrastructure are small by comparison, and throughput per instrument is below the largest production sequencers.

## When to use
Use avidity sequencing where short reads are the right answer and cost per sample or per confident call is the deciding factor, particularly in a laboratory that is not locked into an existing validated pipeline. It is a strong option for whole-genome sequencing at population scale, for RNA quantification, and for laboratories willing to trade ecosystem maturity for price. It is a weaker choice when an assay has to be validated against a body of existing data generated on another platform, or when the workflow depends on tools that assume a specific data format and error profile. As with every short-read platform, it does not address structural variation, phasing or repeat expansions, so it competes with other short-read instruments rather than with long reads.

## Key numbers
Read lengths in the same 100–300 base range as conventional short-read sequencing · reported raw accuracy better than conventional sequencing by synthesis, with vendor claims of substantially reduced error rates · multivalent binding gives far stronger discrimination between correct and incorrect bases than single-molecule binding · reagent concentrations during detection are orders of magnitude below conventional chemistry · commercially launched in the 2020s and gaining share · instrument and consumable pricing has been positioned aggressively below the incumbent.

## Failure modes
Shares the structural limitations of all short-read methods: repetitive regions align ambiguously, structural variants are invisible, and phasing over any distance is impossible. Amplification is still used to make clusters, so amplification bias against extreme base composition and duplicate reads remain. The platform-specific risks are practical rather than chemical. Pipelines tuned to another platform's error profile can behave unexpectedly, and a variant caller trained on one error model applied to another will misestimate confidence. Reference datasets and benchmarking material generated on the incumbent platform do not transfer cleanly, so a laboratory switching platforms has real revalidation work, and underestimating that work is the most common way the cost advantage fails to materialize.

## Examples
The Element Biosciences AVITI platform, which introduced the chemistry commercially and has been adopted by genome centers and service providers looking for an alternative to the incumbent; population sequencing programs that have run comparisons across platforms; and service laboratories that have added it alongside existing instruments rather than replacing them, which is the common adoption pattern.

## Economic profile
The most consequential thing about this platform may be its effect on prices rather than its own market share. A credible short-read competitor with better raw accuracy forced list price movement in a market that had been stable for a decade, which benefits every buyer regardless of what they purchase. The business model is the same razor-and-blade structure, and the strategic question is whether an alternative can accumulate enough ecosystem, pipeline validation and clinical acceptance to displace an incumbent whose real moat was never the chemistry. History in instrument markets suggests that takes longer than the specification advantage alone would predict.

## Further reading

[Comparative analysis of 7 short-read sequencing platforms using the Korean Reference Genome: MGI and Illumina sequencing benchmark for whole-genome sequencing (GigaScience)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7953489/)
