---
number: 18
name: Hydrophobic Interaction and Mixed-Mode Chromatography
part: 4
group: Chromatography
products: [protein, vaccine, nucleic]
scale: [pilot, mid, large]
cogs: low
maturity: proven
regulatory: routine
---

## Description
These are the polishing steps you reach for when ion exchange cannot separate what you need to remove. Hydrophobic interaction chromatography works on exposed hydrophobic patches rather than charge. Adding a kosmotropic salt (ammonium sulfate, sodium citrate, potassium phosphate) strips ordered water from the protein surface and drives it onto a mildly hydrophobic ligand; lowering the salt releases it. That is the reverse of every other step in the train, which is precisely the point: it is mechanistically orthogonal to ion exchange and to affinity, so it sees differences those steps are blind to. Mixed-mode resins put charge and hydrophobic groups on the same ligand. Capto MMC and Capto adhere combine ion exchange with hydrophobic interaction, and ceramic hydroxyapatite combines cation exchange with calcium-mediated metal affinity. They buy similar selectivity at much lower salt, at the cost of a smaller operating window.

## Strengths and weaknesses
Orthogonality is the whole argument. Aggregate coming off a Protein A column can be as high as 10% for some antibodies, and a HIC polish with a phenyl resin will take it below 1%, which a second ion exchanger often cannot. Mixed-mode does comparable work with real numbers behind it: Capto MMC has been reported at 19–25 g/L dynamic binding capacity with recovery of 85% and better and up to a threefold cut in soluble aggregate. The costs are salt, buffer, and yield. One molar ammonium sulfate is 132 g/L, so conditioning a 500 L load takes 66 kg of salt before you count equilibration and wash buffers, and the disposal and corrosion that come with it are real. A HIC step tuned hard for aggregate removal generally gives up more product than an ion-exchange polish would. The failure mode for HIC is precipitation at the mixing point: concentrated salt added into a concentrated protein pool with poor mixing crashes product out before it ever reaches the column. Mixed-mode's failure mode is the narrow window, where a normal batch-to-batch shift in feed conductivity moves the step off its validated operating range.

## When to use
Do not start here. Run Protein A or another capture, then an ion-exchange polish, and only add HIC or mixed-mode when a specific impurity survives that and screening pH and conductivity has already failed. When you do add a step, the reason should be a different mechanism, not more purity from the same one. Choose HIC when the product is stable in high salt and you have the buffer capacity to handle it, and check early whether the molecule precipitates under the loading conditions. Choose mixed-mode when salt handling is the constraint, or when you also want the step to lower conductivity going into the next one, and budget more development time because the design space is smaller. Choose ceramic hydroxyapatite for the hard separations, particularly bispecific antibody mispairing and closely related product variants, where nothing else resolves them.

## Key numbers
Capto MMC dynamic binding capacity 19–25 g/L at 85% and better recovery, with up to a threefold cut in soluble aggregate · post-Protein A aggregate as high as 10% on some antibodies · HIC polishing taking aggregate below 1% · 1 M ammonium sulfate is 132 g/L, so conditioning a 500 L load takes 66 kg of salt · ceramic hydroxyapatite unstable below roughly pH 6.5 · resin cost well under Protein A's $8,000–15,000 per litre.

## Regulatory notes
Routine GMP, with two extras over ion exchange. HIC is frequently credited with clearance of endogenous retrovirus-like particles as well as host cell protein and leached Protein A, and any clearance you claim needs its own scaled-down spiking study. Second, the salt is a raw material: ammonium sulfate and sodium citrate need a compendial grade, a supplier qualification, and a residual test if they can carry into drug substance. Mixed-mode's narrow operating window translates into tighter proven acceptable ranges in the filing, so ordinary process variation is more likely to produce an out-of-range excursion that has to be investigated. Ceramic hydroxyapatite carries a specific operating constraint, since the matrix dissolves below roughly pH 6.5 and needs phosphate in the buffers to protect it, which means calcium and phosphate monitoring on the pool.

## Examples
Cytiva Capto Phenyl and Phenyl Sepharose for HIC, and Capto MMC and Capto adhere for mixed-mode; Bio-Rad CHT ceramic hydroxyapatite and Nuvia cPrime; Tosoh Toyopearl Phenyl-650 and the MX-Trp-650M mixed-mode resin. Published bispecific antibody processes have leaned on ceramic hydroxyapatite specifically for removing mispaired species that ion exchange leaves behind, which is the clearest real-world case for paying the development cost.

## Economic profile
The resin is not the expense. HIC and mixed-mode media cost a fraction of Protein A and last hundreds of cycles, so the cost of adding one of these steps is salt, buffer volume, tank and floor space, and the several months of development it takes to find an operating window. There is also a hidden cost that shows up in every added unit operation: another hold step, another filter, another cleaning cycle, another set of in-process tests, and another few percent of yield off the end-to-end recovery. Because downstream yields multiply, a fourth chromatography step at 88% costs you 12% of everything upstream of it. That arithmetic is the reason platform antibody processes have converged on two polishing steps and treat a third as a failure of the first two.

## Videos

- https://www.youtube.com/watch?v=aqO-p8terxY — Introduction to Hydrophobic Interaction Chromatography (Chromatography & Mass Spectrometry Solutions, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=d8P04atG9Fs — Principles of hydrophobic interaction chromatography (Cytiva, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Mtqyj0kzK7Q — Principles of Multimodal Chromatography (MMC) (Cytiva, 3 minutes, 5k+ views)

## Further reading

[Antibody Aggregate Removal by Multimodal Chromatography (Molecules via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12156806/) · [Removal of Aggregates During Bispecific Antibody Purification Using Hydrophobic Interaction Chromatography (Membranes via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12566258/)
