---
number: 14
name: Single-Cell Multiome and ATAC
part: 4
group: Single-cell methods
role: prep
length: [vshort]
apps: [epi, rna]
cost: high
maturity: emerging
---

## Description
Single-cell ATAC sequencing measures which parts of the genome are physically open in each cell, using an enzyme that inserts sequencing adapters preferentially into accessible chromatin. Open regions are where transcription factors can bind, so the profile is a readout of regulatory state rather than of expression, and it identifies which regulatory elements are active in which cells. Multiome methods measure accessibility and gene expression in the same cell, which is the important advance: rather than profiling two populations separately and correlating them statistically, you observe both layers in one nucleus and can link a regulatory element directly to the gene it controls in that specific cell type. Because these methods work on nuclei rather than whole cells, they also solve a practical problem, since nuclei can be isolated from frozen and difficult tissue that will not survive dissociation into intact cells.

## Strengths and weaknesses
The strengths are mechanism and sample compatibility. Expression tells you what a cell is doing; accessibility tells you something about why, and measuring both in one nucleus removes the inference step that separate assays require. Working from nuclei makes brain, heart, muscle, kidney and frozen archival tissue accessible, which are exactly the tissues where whole-cell dissociation fails. The weaknesses are sparsity and cost. Accessibility data are much sparser than expression data, because each cell has only two copies of each genomic region to sample rather than many transcripts, so a single cell's profile is nearly binary and almost all analysis depends on aggregating cells into groups first. That aggregation limits how much can be said about rare populations. Multiome kits cost more per sample than either assay alone, analysis is considerably harder, and nuclei preparations lose cytoplasmic RNA, which changes the expression profile relative to whole-cell data.

## When to use
Use single-cell ATAC when the question is regulatory: which enhancers are active, which transcription factors are driving a state, or how chromatin changes during differentiation or disease. Use multiome when you need to link regulation to expression within a cell type, which is the main reason to pay for it. Use nucleus-based methods whenever the tissue does not dissociate cleanly or the material is frozen, which is a practical rather than a scientific reason and is often the deciding one. Prefer whole-cell RNA sequencing when the question is only about expression and cell type composition, since it is cheaper, denser and easier to analyze. Plan for aggregation-based analysis from the start, and do not expect single-cell resolution of accessibility in rare populations.

## Key numbers
Accessibility data are near-binary per cell, since only two genomic copies are available to sample per region · typically a few thousand to tens of thousands of nuclei per run · fragments per cell in the low thousands, far sparser than transcript counts · multiome kits cost more per sample than either single assay · works on frozen and archival tissue where whole-cell dissociation fails · analysis requires aggregating cells into groups before most inference is possible.

## Failure modes
Sparsity is the structural problem and it drives most analytical errors: treating a per-cell accessibility profile as a measurement rather than as a very noisy sample leads to overinterpretation, and clustering on accessibility alone is far less stable than clustering on expression. Nuclei preparations differ systematically from whole cells because cytoplasmic transcripts are lost, so multiome expression data are not directly comparable to whole-cell single-cell data, and combining datasets across those protocols introduces batch effects that look like biology. Ambient DNA contamination affects accessibility the way ambient RNA affects expression. And the biggest interpretive trap is assuming that an accessible region is an active one, since accessibility is necessary for regulation and not sufficient.

## Examples
Brain atlases built on single-nucleus multiome data, where whole-cell dissociation is impossible and the regulatory question is central; immune cell differentiation studies linking enhancer accessibility to lineage commitment; tumor studies identifying transcription factor programs driving resistance states; and the commercial multiome kits that made the paired assay routine rather than a specialist protocol.

## Economic profile
A premium extension of the single-cell consumables business, sold at a higher price per sample on the argument that paired measurement answers questions neither assay answers alone. Adoption has been slower than for single-cell RNA sequencing because the analysis burden is real and the biological payoff is less immediate: expression data yield cell types straight away, while accessibility data yield regulatory hypotheses that need follow-up. The most durable driver of adoption has been practical rather than scientific, since nucleus-based protocols unlock frozen biobank material that whole-cell methods cannot use, and that material is abundant and already collected.

## Further reading

[Computational Analyses and Challenges of Single-cell ATAC-seq (Genomics, Proteomics & Bioinformatics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12753137/)
