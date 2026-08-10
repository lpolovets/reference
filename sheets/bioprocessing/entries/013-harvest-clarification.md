---
number: 13
name: Harvest Clarification
part: 3
group: Primary recovery
products: [protein, vaccine, nucleic, vector]
scale: [pilot, mid, large, bulk]
cogs: vlow
maturity: default
regulatory: routine
---

## Description
Clarification turns a cloudy 2,000 L harvest into a stream clear enough to load onto a chromatography column. Three routes compete. A disc-stack centrifuge spins the culture at a few thousand up to roughly 15,000 g equivalent and throws out whole cells and large debris by density, but it cannot reliably catch particles under about 1 µm, so it is always followed by depth filtration. Depth filters are graded beds of cellulose and diatomaceous earth that trap sub-micron debris, colloids, and some DNA and host cell protein through the thickness of the medium rather than at a surface. The third route skips the centrifuge entirely and runs depth filtration alone, sometimes with a flocculant added to the harvest to agglomerate fines first. A 0.2 µm sterile filter finishes the job in all three cases. The mechanism that decides the design is shear: the centrifuge feed zone lyses a fraction of the cells, and every lysed cell adds host cell protein and DNA that the polishing steps then have to remove.

## Strengths and weaknesses
Clarification is cheap, it recovers 90–98% of the product, and it scales predictably. What it costs is filter area, buffer, and risk. The failure mode is blinding: you size the depth filter train from a scale-down model run on a representative harvest, and on the day the culture may crash to 60% viability and produce far more debris than the model saw. When a filter blinds at 70% of the batch you either install more area mid-process, which means opening a sterile boundary under time pressure, or you stop and lose the pool. The centrifuge has the opposite problem. Spin harder and the supernatant is cleaner but the impurity load rises because more cells burst, and that shows up two steps later as host cell protein the polish has to clear. High-density fed-batch and perfusion push both problems the wrong way, since filter area scales roughly with the mass of solids you have to remove.

## When to use
Below about 2,000 L, use depth filtration alone. It needs no capital, suits a single-use suite, and the filter cost is tolerable. Between 2,000 and 5,000 L, continuous centrifugation followed by depth filtration is the usual answer, and above about 4,000 L a filter-only train stops being practical on cost and floor space, so a centrifuge is effectively mandatory. If you are running one product through many batches a year, the centrifuge's capital cost amortizes and it wins; if you are a multi-product suite doing a handful of batches per product, the filters win because they need no cleaning validation between products. If cell density is high enough that filter area is getting absurd, add flocculation or an acoustic step ahead of the filters rather than buying more area.

## Key numbers
Disc-stack centrifuges at a few thousand up to roughly 15,000 g equivalent · depth filter capacity roughly 40–200 L/m², commonly 100 L/m² or better downstream of a centrifuge · filter-only trains practical to about 4,000 L of culture · centrifuge plus depth filtration the usual choice from 2,000 to 5,000 L · step recovery usually 90–98% · under 5% of cost of goods.

## Regulatory notes
Routine GMP and one of the lighter validation burdens in the train, because no viral clearance is claimed here and the step has no product-quality specification of its own. What you do owe is extractables and leachables data on the depth filter media and the single-use flow path, endotoxin and bioburden control on the clarified pool, and a hold-time study establishing how long that pool can sit before capture. Depth filters made of cellulose and diatomaceous earth need a flush validation, since they can release turbidity and metal ions into the first litres through. A centrifuge is shared equipment, so it carries cleaning validation and changeover data that disposable filters do not. Filters are also a supply-chain filing risk: qualifying a second source for a depth filter grade means repeating the sizing work and the extractables package.

## Examples
Disc-stack centrifuges from GEA (Westfalia CSC and CSE series) and Alfa Laval (Culturefuge). Depth filter families from Merck Millipore (Millistak+ and the Clarisolve grades intended for flocculated or high-density feeds), Sartorius (Sartoclear), 3M (Zeta Plus and Harvest RC), and Pall (Stax). Single-use centrifuge options such as the kSep fluidized-bed system have found more use in vector and cell-therapy work than in large mammalian harvest.

## Economic profile
This step is under 5% of cost of goods, and it stays there as long as nothing goes wrong. The interesting economics are the shape of the spend. The centrifuge route is capital-heavy and consumable-light, so it rewards high utilization and punishes multi-product suites through cleaning validation and changeover time. The filter-only route is the reverse, with essentially no capital and a per-batch filter bill that grows with cell density. Because titers rose while cell densities rose with them, filter area per gram of product has not improved much, which is why flocculation and high-capacity filter grades keep getting sold. If your process economics are sensitive to this step at all, that is usually a signal that cell density has outrun the clarification design rather than that the filters are overpriced.

## Videos

- https://www.youtube.com/watch?v=VKpthcW1llU — Bioprocessing Part 2: Separation / Recovery (BioNetwork, 11 minutes, 100k+ views)
- https://www.youtube.com/watch?v=jtv7-DSzczU — How our centrifugal clarifying separator works (GEA Group, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Zi7s7I-rYzs — Harvest: Overview of the Harvest Process (AbbVie Contract Manufacturing, 2 minutes, 10k+ views)

## Further reading

[Depth filter material process interaction in the harvest of mammalian cells (Biotechnology Progress)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10909467/) · [Development of a novel and efficient cell culture flocculation process using a stimulus responsive polymer to streamline antibody purification processes (Biotechnology and Bioengineering)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3812681/)
