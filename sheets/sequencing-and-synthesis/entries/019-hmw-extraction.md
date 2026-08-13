---
number: 19
name: High-Molecular-Weight Extraction
part: 5
group: Accuracy and extraction
role: prep
length: [long, ultra]
apps: [struct, wgs]
cost: low
maturity: proven
---

## Description
Long-read sequencers read whatever length of molecule they are given, so read length is set by extraction rather than by the instrument. Ordinary DNA extraction methods, designed decades ago for short-read applications, shear DNA into fragments of tens of kilobases through pipetting, vortexing and column binding, which is invisible and harmless for short-read work and destroys the entire value proposition of a long-read platform. High-molecular-weight extraction avoids shear at every step: cells are lysed gently, mixing is done by slow inversion rather than pipetting, wide-bore tips are used, and DNA is bound to magnetic disks or recovered by precipitation rather than pulled through a silica column. For the longest reads, cells are embedded in agarose plugs so the DNA is never handled in free solution at all, and size selection removes the short fragments that would otherwise dominate the sequencing pores.

## Strengths and weaknesses
The strength is that it is the cheapest way to improve long-read data, usually by a large margin. Doubling read length by fixing extraction costs almost nothing compared with buying more sequencing, and it improves assembly contiguity and structural variant detection more than any downstream change. The weakness is that it is slow, manual and sample-dependent. Plug-based methods take days. Yields are lower than column methods because gentle handling recovers less. It cannot rescue material that is already degraded, so archival, fixed and long-stored samples are permanently limited regardless of technique. Blood and cultured cells work well; solid tissue is harder; formalin-fixed tissue is essentially hopeless for long reads. Automation is limited precisely because the thing being avoided, mechanical stress, is what automated liquid handling applies.

## When to use
Use high-molecular-weight extraction whenever the downstream method is long-read sequencing or optical mapping, which is to say whenever molecule length is the point. Treat it as part of the assay rather than as sample preparation, and validate it on your actual sample types before committing to a platform, because the read lengths in a vendor's specification were achieved on their choice of material. Use size selection to remove short fragments when maximum read length matters, accepting the yield loss, since short molecules occupy sequencing capacity that long ones would use better. Do not attempt long-read sequencing on fixed or degraded material and expect long reads: choose short-read methods for those samples rather than paying long-read prices for short-read data.

## Key numbers
Ordinary column-based extraction typically yields fragments of tens of kilobases, capping long-read length at that regardless of instrument · gentle methods routinely reach hundreds of kilobases, and agarose plug methods reach megabases · size selection removes short fragments at a cost in total yield · plug-based protocols take days against hours for column methods · fresh blood and cultured cells give the best results; solid tissue is harder; formalin-fixed material is unsuitable · read length improvements from better extraction typically exceed anything achievable by changing sequencing chemistry.

## Failure modes
The dominant failure is not recognizing that extraction is the limiting step. A laboratory gets shorter reads than expected, concludes the sequencer underperforms, and optimizes the wrong thing, sometimes for months. Mechanical shear is cumulative and invisible: every pipetting step, every vortex, every column passage shortens the distribution a little, and the damage does not show up until sequencing. Contaminants that ordinary extraction tolerates, including residual protein, polysaccharide and phenol, inhibit long-read library preparation and block pores, so purity requirements are stricter than for short-read work. Freeze-thaw cycles shear DNA. And samples collected and stored under protocols designed for short-read sequencing are usually already too degraded, which is a planning failure that cannot be fixed at the bench.

## Examples
The telomere-to-telomere human genome assembly, which depended on ultra-long reads that required specialized extraction to obtain; reference genome projects across many species, where extraction protocol development is often a substantial part of the work; clinical long-read programs that had to redesign sample collection before sequencing could work; and the commercial extraction kits and instruments developed specifically for this purpose, which is a small but growing segment.

## Economic profile
A small consumables and instrument market with outsized influence on the value of a much larger one, since it determines whether an expensive long-read platform delivers what it promised. The cost of getting extraction right is trivial next to the cost of the sequencing it enables, which makes it one of the highest-return investments in a genomics workflow and one that is routinely underfunded because it looks like sample preparation rather than like the assay. For a service provider, extraction expertise is a genuine differentiator that is hard to copy quickly, because it is process knowledge rather than a purchasable kit.
