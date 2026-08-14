---
number: 13
name: Single-Cell RNA Sequencing
part: 4
group: Single-cell methods
role: prep
length: [vshort]
apps: [rna]
cost: high
maturity: default
---

## Description
Single-cell RNA sequencing measures gene expression one cell at a time instead of averaging across a tissue. The dominant approach partitions cells into droplets, each containing one cell and one bead carrying millions of copies of a barcode unique to that droplet. Inside the droplet the cell is lysed and its messenger RNA is captured and tagged with that barcode plus a molecular identifier unique to each original transcript. Everything is then pooled and sequenced together, and the barcodes sort the reads back into cells computationally. The result is a matrix of tens of thousands of cells by tens of thousands of genes. Bulk RNA sequencing tells you the average expression of a tissue, which for a mixture of cell types is a number that may describe no cell in it; single-cell resolves the actual populations, which is why it displaced bulk methods for any question about heterogeneity.

## Strengths and weaknesses
The strengths are resolution and discovery. Cell types and states can be identified without knowing in advance what to look for, rare populations become visible, and developmental trajectories can be reconstructed from a single snapshot. The technique has reshaped immunology, developmental biology and tumor biology in about a decade. The weaknesses are cost, sparsity and sample handling. Only a fraction of each cell's transcripts is captured, so the data are sparse and most genes in most cells read as zero, which makes distinguishing genuine absence from a capture failure a persistent analytical problem. Cost per sample is high, which pushes experiments toward too few biological replicates and toward treating cells as independent samples when they are not. Tissue dissociation is the biggest practical problem: making a single-cell suspension kills fragile cell types, biases the population toward robust ones, and induces stress responses that appear in the data as real biology.

## When to use
Use single-cell RNA sequencing when the question is about composition or heterogeneity: which cell types are present, how their proportions change, what states exist within a population, and which cells express a target. It is the right tool for immune profiling, tumor microenvironment work, and developmental atlases. Use bulk RNA sequencing when the sample is homogeneous or when the question is about overall expression with many replicates, because bulk is far cheaper and better powered for differential expression across conditions. Use single-nucleus sequencing when the tissue does not dissociate well, which includes brain, muscle, heart and frozen archival material. Budget for biological replicates rather than for more cells, since cells within a sample are not independent observations and analyses that treat them as such produce confident nonsense.

## Key numbers
Typically thousands to tens of thousands of cells per run, with high-throughput protocols reaching hundreds of thousands · a few thousand genes detected per cell, out of roughly 20,000 expressed, so the matrix is mostly zeros · capture efficiency of transcripts per cell is a fraction rather than a majority · cost per sample in the hundreds to low thousands of dollars, plus sequencing · doublet rates rise with loading concentration and are typically a few percent · sequencing depth of tens of thousands of reads per cell is a common target.

## Failure modes
Dissociation bias is the failure that most often invalidates conclusions, because it is invisible in the data: cell types that do not survive dissociation are simply absent, and a paper reporting their proportions is describing the dissociation protocol rather than the tissue. Stress and immediate-early gene induction during dissociation appear as genuine transcriptional states. Ambient RNA from lysed cells contaminates every droplet, creating apparent low-level expression of markers in cells that do not express them. Doublets, two cells in one droplet, look like hybrid cell types and have fooled published analyses. And the statistical error of treating thousands of cells from three mice as thousands of independent samples inflates significance dramatically; the unit of replication is the animal or the donor, not the cell.

## Examples
The Human Cell Atlas and the many tissue atlases built on this technology; tumor microenvironment studies that revealed the composition of immune infiltrates and their relationship to checkpoint inhibitor response; developmental trajectory reconstructions across organisms; the 10x Genomics Chromium platform, which dominates commercially; and combinatorial indexing methods, which barcode cells through rounds of splitting and pooling rather than in droplets and reach much higher cell numbers at lower cost.

## Economic profile
A large and profitable consumables business built on a proprietary microfluidic cartridge, and one that has been the subject of extensive patent litigation, which is worth noting because it has shaped which alternatives are available. Cost per experiment remains high enough to constrain experimental design, and that constraint distorts the science toward underpowered studies. The trend is toward higher cell numbers at lower cost per cell, through combinatorial indexing and through cheaper sequencing, and the practical effect is that experiments are gradually shifting from a few samples with many cells toward many samples with fewer cells each, which is the statistically correct direction.

## Videos

- https://www.youtube.com/watch?v=6UVOdCc1Q7I — Single-cell sequencing explained in 2 minutes (Sanbomics, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=vL7ptq2Dcf0 — Drop-seq: Droplet barcoding of single cells (Harvard Medical School, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=k9VFNLLQP8c — Single Cell Sequencing - Eric Chow (UCSF) (iBiology Techniques, 25 minutes, 100k+ views)

## Further reading

[Pitfalls in analysis and interpretation of single-cell RNA-seq data in cancer (Neuro-Oncology Advances)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12946769/)
