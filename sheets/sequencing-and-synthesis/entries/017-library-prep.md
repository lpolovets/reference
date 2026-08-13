---
number: 17
name: Library Preparation Chemistry
part: 5
group: Library chemistry
role: prep
length: [vshort, short]
apps: [wgs, targeted, rna, epi]
cost: low
maturity: default
---

## Description
A sequencer cannot read raw DNA. Library preparation converts a sample into fragments of the right size carrying the adapter sequences the instrument needs to bind, prime and index them. Two chemistries dominate. Ligation-based preparation shears DNA mechanically or enzymatically, repairs the ends, adds a single overhanging base, and ligates adapters on. Tagmentation uses a transposase loaded with adapter sequences, which cuts the DNA and inserts adapters in one step, collapsing several enzymatic reactions into one and cutting hands-on time substantially. Ligation gives more even and predictable fragmentation and works over a wider input range; tagmentation is faster, needs less input, and introduces a small sequence bias at insertion sites. Both then usually amplify, which is where most library artifacts originate, and PCR-free protocols exist for applications where that bias is unacceptable.

## Strengths and weaknesses
The strengths of good library preparation are invisible when it works: even coverage, faithful representation of the original molecules, and low duplicate rates. Tagmentation in particular has made library construction fast enough and cheap enough to run thousands of samples, which changed what experiments are affordable. The weaknesses are that this step silently determines what the sequencer can see. Amplification introduces bias against fragments of extreme base composition, so coverage drops in regions that may be exactly the ones of interest, and it creates duplicates that inflate apparent depth. Fragment size distribution caps insert size and therefore how much information paired reads carry. Adapter dimers consume sequencing capacity and produce useless reads. Every one of these problems is easier to prevent at the bench than to correct computationally, and most sequencing failures attributed to the instrument originate here.

## When to use
Choose ligation-based preparation when input is plentiful, when coverage uniformity matters most, or when insert size needs tight control. Choose tagmentation when throughput, hands-on time, or low input dominate, which covers most high-volume applications. Choose a PCR-free protocol when input allows and coverage uniformity is critical, which is the case for high-quality whole genome sequencing and for anything where regions of extreme base composition matter clinically. Match the fragment size to the read length: paying for long inserts that the read length cannot span wastes information, and inserts shorter than the read length cause the two reads of a pair to overlap and read the same bases twice. Quantify libraries accurately before pooling, because unequal pooling wastes capacity on samples that did not need it.

## Key numbers
Ligation-based preparation works over a wide input range from nanograms to micrograms; tagmentation works from picogram to nanogram inputs · tagmentation collapses fragmentation, end repair and adapter addition into one step, cutting hands-on time substantially · PCR amplification introduces coverage bias against fragments of very high or very low base composition · PCR-free protocols require higher input, typically hundreds of nanograms to a microgram · adapter dimers produce short useless reads and are removed by size selection · insert size should be matched to read length to avoid wasted or redundant sequencing.

## Failure modes
Almost every downstream problem traces back here. Amplification bias produces systematically low coverage in regions of extreme base composition, and because the pipeline reports what it saw rather than what it missed, those regions look uninformative rather than untested. Duplicate reads inflate apparent depth and, if not removed, make a PCR error look like a supported variant. Adapter dimers can consume a large fraction of a run if size selection fails. Incorrect library quantification leads to over- or under-clustering, which reduces quality or wastes capacity. Index hopping between multiplexed samples assigns reads to the wrong sample, which matters most for low-frequency variant detection and is controlled with unique dual indexes. Cross-contamination between samples during preparation is common and is the reason negative controls belong in every batch.

## Examples
Nextera and related tagmentation kits, which made high-throughput library construction practical; TruSeq and other ligation-based chemistries, still preferred where uniformity matters; PCR-free whole genome protocols used in reference-quality sequencing and in large population programs; automated library preparation on liquid handlers, which is how genome centers achieve consistency at scale; and the single-cell workflows that embed a specialized library preparation inside a larger protocol.

## Economic profile
Library preparation kits are a substantial and profitable consumables market, and one where the instrument vendors compete directly with independent suppliers. Cost per library has fallen and matters increasingly as sequencing itself gets cheaper: when sequencing was the dominant cost, library preparation was a rounding error, and at current prices it can be a comparable line item for small genomes and targeted assays. That has driven miniaturization onto acoustic liquid handlers and nanoliter-scale reactions, which cut reagent cost by an order of magnitude for laboratories with the automation to run them, and it is one of the few places where capital investment in automation pays back quickly.
