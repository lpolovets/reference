---
number: 12
name: Optical Genome Mapping
part: 3
group: Array and mapping methods
role: read
length: [ultra]
apps: [struct]
cost: med
maturity: emerging
---

## Description
Optical genome mapping produces a picture of genome structure without reading a single base. Very long DNA molecules, hundreds of kilobases to megabases, are labeled at every occurrence of a specific short sequence motif, then stretched out in nanochannels and imaged. What you get per molecule is the pattern of distances between labels, which is a fingerprint that can be aligned to a reference map. Because the molecules are enormous compared with any sequencing read, rearrangements that span hundreds of kilobases are visible directly rather than inferred from breakpoint evidence. The method replaces karyotyping, fluorescence in situ hybridization and chromosomal microarray with one assay, and it detects balanced translocations and inversions, which microarrays cannot see at all because no material is gained or lost.

## Strengths and weaknesses
The strengths are the size of what it can see and its coverage of balanced events. Molecules in the megabase range span rearrangements that no sequencing read approaches, and detection of balanced translocations and inversions fills a genuine gap between microarray, which misses them entirely, and karyotyping, which sees them at very low resolution. Resolution is far better than karyotyping and the workflow is simpler than running three separate cytogenetic assays. The weaknesses are that it produces no sequence. There is no base-level information, so point mutations are invisible and a breakpoint is localized to a region rather than to a base, which matters when the exact junction is clinically relevant. Ultra-high-molecular-weight DNA extraction is required and is genuinely demanding, which limits which sample types work and rules out most degraded or fixed material. Repetitive regions with dense or sparse labeling are harder. The installed base is small and the ecosystem is thin.

## When to use
Use optical genome mapping when the question is structural and large: hematological malignancy characterization, constitutional disorders where a balanced rearrangement is suspected, repeat expansion sizing, and any case where karyotyping plus fluorescence in situ hybridization plus microarray is the current standard and could be replaced by one assay. It is a strong complement to short-read sequencing, which handles the small variants it cannot see, and the pair covers most of the diagnostic space. Do not use it as a discovery method for point mutations or as a standalone comprehensive test. Confirm that your sample types can yield ultra-high-molecular-weight DNA before planning a service around it, because extraction is the practical gate and fixed or degraded samples will not work.

## Key numbers
Molecules typically hundreds of kilobases to megabases in length, far beyond any sequencing read · resolution for structural variants substantially better than karyotyping · detects balanced translocations and inversions, which chromosomal microarray cannot see · produces no base-level sequence, so point mutations are invisible · requires ultra-high-molecular-weight DNA, which rules out most fixed and degraded samples · replaces three conventional cytogenetic assays with one workflow · small installed base relative to sequencing platforms.

## Failure modes
Sample preparation is the recurring failure, and it is unforgiving: the assay depends on molecules that ordinary extraction methods shear, so a laboratory that has not solved ultra-high-molecular-weight extraction for its sample types will get poor results and may attribute them to the platform. Fixed tissue generally does not work. Regions with unusually dense or sparse label sites are poorly resolved, so coverage of the genome is not uniform in the way sequencing coverage is. Breakpoints are localized to a window rather than a base, so a result often needs sequencing follow-up to characterize the junction, which means the assay is frequently a first step rather than a final answer. Interpretation requires cytogenetics expertise that not every molecular laboratory has.

## Examples
Adoption in hematological malignancy workups, where it has been compared directly against the standard combination of karyotype, fluorescence in situ hybridization and microarray and found comparable or better for structural findings; constitutional genetic testing for balanced rearrangements; repeat expansion sizing in disorders where the expansion is too large for sequencing to size accurately; and the Bionano platform, which is the main commercial implementation.

## Economic profile
A niche instrument business competing against both an entrenched conventional workflow and an improving alternative. The value proposition against cytogenetics is real, consolidating three assays into one with better resolution, and reimbursement and laboratory practice change slowly, which has made adoption gradual. The longer-term pressure comes from long-read sequencing, which is closing the gap on structural variant detection while also providing base-level sequence, and which would make a structure-only assay harder to justify. The durable case is where molecule length beyond even long reads is what matters, which is a real but narrow requirement.
