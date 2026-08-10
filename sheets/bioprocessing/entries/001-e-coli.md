---
number: 1
name: E. coli Expression
part: 1
group: Microbial hosts
products: [protein, nucleic, indus]
scale: [pilot, mid, large]
cogs: low
maturity: default
regulatory: routine
---

## Description
E. coli is the cheapest and fastest way to make a protein that does not need glycosylation, and it is the host that made recombinant insulin and growth hormone possible. It doubles in about 20 minutes, and high-cell-density fed-batch fermentation on glucose, ammonia, and salts reaches 50–100 g/L dry cell weight, so a run goes from inoculum to harvest in 1–3 days instead of the two weeks a mammalian fed-batch takes. After induction the product ends up in one of three places, and which one decides the whole rest of the process: soluble in the cytoplasm, exported to the periplasm where disulfide bonds can form, or dumped into inclusion bodies as dense misfolded aggregate. Inclusion bodies give the highest apparent titer, 2–10 g/L, but the protein then has to be solubilized in 6 M guanidine or 8 M urea and refolded by dilution at 0.1–1 g/L, which recovers only 15–40%. E. coli barely secretes, so lysis is mandatory in every configuration except engineered secretion strains. It is also the host for plasmid DNA, which puts it underneath mRNA, AAV, lentivirus, and every ex vivo cell therapy.

## Strengths and weaknesses
The medium is glucose and salts, the genetic toolbox is the largest of any organism, the fermentation is short, and there is no mammalian virus in the process, so the entire viral clearance category disappears along with its validation studies. The weaknesses come from the same biology: no glycosylation, a reducing cytoplasm that will not form disulfide bonds reliably, lipopolysaccharide endotoxin in every lysate that has to be cleared to a parenteral limit, and poor secretion. The failure mode worth naming is the inclusion-body trap. A strain expresses beautifully at 5 g/L, the program books that as the titer, and then refolding returns 20% and the real process yield is 1 g/L against tank volumes measured in tens of cubic metres. Refolding has to run dilute or the protein re-aggregates, so the vessel size scales with product mass rather than with culture volume, and that step is frequently the single largest cost line in the process.

## When to use
Pick E. coli when the molecule is small (roughly under 60 kDa), needs no glycans, and either tolerates refolding or folds correctly in the periplasm. It is the default for peptides, insulin and insulin analogs, growth hormone, antibody fragments such as Fabs and nanobodies, industrial and research enzymes, and plasmid DNA. Do not pick it for a full IgG, for anything where glycan structure is a critical quality attribute, or where a 20% refolding recovery would break the cost model. If you need eukaryotic folding and secretion but not human glycans, Pichia is the alternative and it skips lysis and refolding entirely. If you need human-like glycosylation, go to CHO and accept roughly an order of magnitude more cost per gram in medium and reactor time.

## Key numbers
Doubling time about 20 minutes · high-cell-density fermentation to 50–100 g/L dry cell weight · fermentation 1–3 days to harvest · inclusion bodies 2–10 g/L, refolded at 0.1–1 g/L for 15–40% recovery · solubilization in 6 M guanidine or 8 M urea · roughly 5–15% of finished cost of goods.

## Regulatory notes
Routine GMP on the oldest path in biotechnology: Humulin was approved in 1982, so regulators have seen E. coli filings for over forty years. The big saving is that a bacterial process needs no mammalian adventitious-virus clearance package, which removes the scaled-down spiking studies, the 12-log expectation, and a category of review risk. What you do have to control is host cell protein down to single-digit parts per million by an E. coli-specific immunoassay, residual host DNA against the conventional 10 ng per dose and sub-200 bp median fragment size, and endotoxin, which is where this host specifically costs you, since LPS is in every lysate and parenteral limits are set per kilogram of patient weight per hour. If the process refolds, the refold is a critical step with its own validated hold times, redox conditions, and comparability exposure, because a change there can move the aggregate and disulfide-scrambled species profile.

## Examples
Humulin (Eli Lilly and Genentech, 1982, inclusion bodies and refolding) and the insulin analogs that followed it; Nutropin and Genotropin somatropin; Neupogen (filgrastim); Lucentis (ranibizumab) and Cimzia (certolizumab pegol), both antibody fragments made periplasmically because an E. coli Fab needs no Fc glycan; most GMP plasmid DNA. Contract capacity comes from Lonza, Fujifilm Diosynth, Boehringer Ingelheim, Richter-Helm, and Wacker, whose ESETEC strains secrete into the medium to avoid the lysis-and-refold sequence.

## Economic profile
Upstream is close to free by biologics standards. Glucose, ammonia, and mineral salts cost well under a dollar per liter of medium, the fermentation occupies a vessel for two days rather than two weeks, and microbial fermenters are cheaper per liter than mammalian ones. So the cost moves downstream, into high-pressure homogenization, the tank volume that dilute refolding demands, and the chromatography needed to hit endotoxin and host cell protein specifications. The business question for any E. coli process is therefore whether you can avoid refolding, because a periplasmic or secreted configuration at 1 g/L often beats an inclusion-body configuration at 5 g/L on delivered grams per dollar. The technology itself is flat: it is forty years old, the improvements are strain-level and incremental, and nobody should model a cost curve on it.

## Videos

- https://www.youtube.com/watch?v=DVy3Y-0F5bQ — Diabetes and Insulin: A Triumph for Recombinant DNA Technology (Professor Dave Explains, 13 minutes, 50k+ views)
- https://www.youtube.com/watch?v=olTL9mIrTB8 — Refolding of Inclusion Body Proteins from E Coli (Creative BioMart, 13 minutes, 10k+ views)
- https://www.youtube.com/watch?v=YJr_Xtji5NE — QMUL Science Alive: Protein expression and purification (QMULOfficial, 11 minutes, 50k+ views)

## Further reading

[Recombinant protein expression in Escherichia coli: advances and challenges (Frontiers in Microbiology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4029002/) · [Cell factories for insulin production (Microbial Cell Factories)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4203937/)
