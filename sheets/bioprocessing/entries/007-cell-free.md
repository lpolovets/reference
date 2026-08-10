---
number: 7
name: Cell-Free Protein Synthesis
part: 1
group: Alternative hosts
products: [protein, vaccine]
scale: [bench, pilot]
cogs: vhigh
maturity: early
regulatory: novel
---

## Description
Cell-free protein synthesis takes the translation machinery out of the cell and runs it in a tank. A crude lysate, usually E. coli S30 but also wheat germ, insect, CHO, or Pichia, supplies ribosomes, tRNAs, and translation factors; you add a DNA or mRNA template, amino acids, and an energy regeneration system, and protein appears in hours instead of days. Because the reaction is open, you can do things a living host will not tolerate: incorporate non-natural amino acids at defined positions using an orthogonal tRNA pair, set the redox potential so disulfide bonds form correctly, express a protein that would kill a host cell, and sample the reaction whenever you like. Yields in optimized E. coli lysate systems reach a few grams per liter, though most published work sits below 2 g/L. The site-specific non-natural amino acid capability is the commercially interesting one, because it gives homogeneous antibody-drug conjugates with a defined drug-to-antibody ratio rather than the statistical mixture that conventional conjugation chemistry produces.

## Strengths and weaknesses
Speed, open chemistry, and defined-position conjugation are real advantages, and there is no cell to keep alive, no growth phase, and no adventitious virus. The blocker is reagent cost, and it is not close. Energy substrates, nucleotides, amino acids, and lysate preparation are essentially the entire cost of goods, and reported figures sit an order of magnitude or more above fermentation per gram of protein. Optimized low-cost formulations have been reported at roughly $39–60 per gram, but at 15 µL to 4 mL reaction scale, and milliliter economics do not extrapolate. The failure mode is the lysate. It is a biological reagent with its own batch-to-batch variability, so a reaction that gave 2 g/L on last quarter's lysate can give 0.8 g/L on this quarter's, and you have quietly acquired a second manufacturing process (making and qualifying lysate) that has to be controlled as tightly as the first one. That second process is where most of the scale-up difficulty actually lives.

## When to use
Use cell-free today when speed or chemistry is the point rather than cost per gram. That means screening hundreds of protein variants in parallel, making a protein that is toxic to a host, and building conjugates that need non-natural amino acids at defined sites. Sutro's antibody-drug conjugate programs are the honest commercial case, and they work because an ADC's value per gram is high enough to absorb the reagent bill. Do not use cell-free to make a commodity protein, and do not model a cost curve on vendor figures without asking what reaction scale produced them. If you need grams cheaply, fermentation wins by one to two orders of magnitude and will keep winning until lysate and energy substrate costs fall with volume. That single variable is the thing to watch, because it is the only one that would change the answer.

## Key numbers
Protein in hours rather than days · a few grams per liter in optimized E. coli lysate systems, with most published work below 2 g/L · reagents are essentially all of the cost of goods · roughly $39–60/g reported for optimized formulations, but at 15 µL to 4 mL scale, against $10–100/g for microbial fermentation at production scale · no licensed product is manufactured this way yet · above 60% of finished cost of goods.

## Regulatory notes
Precedent-setting, because there is no template filing to copy. Reviewers have to be satisfied on things a fermentation dossier never raises: the lysate as a raw material with its own bank, characterization, and lot release; residual host cell protein and nucleic acid, which arrive at much higher levels than they would from a secreted process because the lysate is the reagent; the identity, purity, and toxicology of non-natural amino acids as novel process inputs; and a control strategy for a reaction that has no growth phase or viable cell count to normalize against. The offsetting saving is real: no live cells means no adventitious virus package, no cell substrate stability program, and no generation-limit study. Sutro Biopharma and Boehringer Ingelheim BioXcellence have now run the platform at commercial GMP scale for luveltamab tazevibulin, which is the closest thing the field has to a precedent, and the first filing that clears review will make the second one much cheaper.

## Examples
Sutro Biopharma's XpressCF and XpressCF+ platforms, built on E. coli lysate with non-natural amino acid incorporation, used for luveltamab tazevibulin (an FRα-targeting ADC) and manufactured at commercial scale with Boehringer Ingelheim BioXcellence. Research-scale protein-on-demand comes from Nuclera, LenioBio's ALiCE tobacco-based lysate, and Tierra Biosciences. Reconstituted systems, where every component is purified rather than taken from a lysate, are sold as PURExpress by New England Biolabs and by GeneFrontier; they are cleaner and far more expensive. Academic work on freeze-dried, on-demand conjugate vaccine reactions is the other line of development worth tracking.

## Economic profile
Capital is trivial and reagents are everything, which is unusual in this sheet and makes the investment question a supply chain question rather than an engineering one. A cell-free reactor is a stirred tank without the sterility-for-growth constraints, so the plant is cheap and fast to build. Energy cocktails, nucleotides, and lysate preparation dominate the bill and have been reported at up to 70% of production cost. If those inputs fall an order of magnitude at manufacturing volume, high-value products move first (ADCs, non-natural amino acid biologics, on-demand biologics for field use) and commodity proteins never move at all. Treat every published per-gram figure with the reaction scale attached, treat lysate supply as a single-source risk, and note that the platform's commercial validation so far is one molecule made with one large partner, not a market.

## Videos

- https://www.youtube.com/watch?v=D3Zc7tvdXGU — An Introduction to Cell-Free Protein Expression (The Scientist Creative Services Division, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=pTAozxV2rKo — NEB TV Ep. 30 - Cell-free Protein Synthesis (New England Biolabs, 14 minutes, 5k+ views)
- https://www.youtube.com/watch?v=JfzZxKRIiu0 — Cell Free Protein Synthesis | Cell Free Protein Expression | CFPS | Cell Free Technology | (BMH learning, 2 minutes, 5k+ views)

## Further reading

[A User's Guide to Cell-Free Protein Synthesis (Methods and Protocols)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6481089/) · [Cell-Free Protein Synthesis: A Promising Option for Future Drug Development (BioDrugs)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7211207/)
