---
number: 6
name: Insect Cell and Baculovirus Expression
part: 1
group: Animal-cell hosts
products: [protein, vaccine, vector]
scale: [pilot, mid, large]
cogs: med
maturity: proven
regulatory: routine
---

## Description
In the baculovirus expression vector system the cells are the factory and the virus is the cell line. Sf9 or Sf21 cells from Spodoptera frugiperda, or High Five cells from Trichoplusia ni, grow in serum-free suspension at 27–28 °C with no CO₂ control, and are infected with a recombinant baculovirus carrying the gene of interest behind the very strong polyhedrin or p10 promoter. Infection happens at a multiplicity of roughly 0.1–1 once the culture reaches a few million cells per milliliter, and harvest follows 48–96 hours later as the infected culture lyses on schedule. Changing product means building a new baculovirus stock, which takes weeks, against the 6–12 months a stable mammalian cell line takes. That speed is why the system became the platform for recombinant influenza antigen, virus-like particle vaccines, and the Sf9 route to AAV, and why it suits facilities that run several different products a year at 1,000–2,000 L.

## Strengths and weaknesses
Campaign flexibility is the real product here, together with strong expression of large multi-subunit assemblies such as VLPs and viral capsids, cheap culture conditions, and no mammalian virus in the process. The trade is glycosylation and harvest discipline. Insect N-glycans are paucimannose and lack terminal sialic acid, so any therapeutic glycoprotein whose glycan is a critical quality attribute is out unless you use a glyco-engineered line. The culture lyses by design, which means the feed to downstream is a lysate full of host protein, DNA, and baculovirus particles, all of which have to be cleared and tested for. The failure mode that catches programs is baculovirus stock quality: defective interfering particles accumulate with passage, so a stock that gave full yield at passage 3 gives much less at passage 10, and because the drop is gradual it is usually diagnosed only after a batch misses spec. Passage limits on the virus seed are not paperwork; they are the control for a real degradation mechanism.

## When to use
Pick baculovirus when you need many different products out of the same suite, or when the product is a large self-assembling particle. A seasonal influenza antigen that changes every year is the clearest case, and a VLP panel or a structural biology pipeline is the same argument at smaller scale. Also pick it for AAV when you want volumetric yield and a process with no mammalian cells in it. Do not pick it when glycan structure is a critical quality attribute, and do not pick it for a single high-mass product, where CHO's titer and platform downstream win comfortably. Against HEK293 for AAV specifically, the choice is scalability and yield on one side against capsid quality and a baculovirus clearance burden on the other, and it usually gets decided by which analytics package the program already has.

## Key numbers
Infection at a multiplicity of roughly 0.1–1 · harvest 48–96 hours post-infection · culture at 27–28 °C in serum-free suspension without CO₂ control · commercial scale 1,000–2,000 L · a new product needs a new baculovirus stock in weeks, against 6–12 months for a stable mammalian line · roughly 15–35% of finished cost of goods.

## Regulatory notes
Routine GMP with real precedent: licensed vaccines and a licensed gene therapy have all cleared this route, so reviewers know the questions. The system-specific asks are the baculovirus itself and the cell substrate. You have to qualify the baculovirus seed stock like a cell bank, with defined passage limits and identity and purity testing, demonstrate clearance of baculovirus particles and residual baculovirus DNA through the downstream train with validated assays, and characterize the insect-type glycans as a product attribute rather than an impurity. There is no mammalian adventitious-virus clearance expectation, so the 12-log convention does not apply, which is a genuine saving. Insect cells are not free of the category, though: the discovery of a latent rhabdovirus in Sf9 cells in 2014 prompted agency questions across the field and is the reason insect cell banks now carry their own adventitious agent testing rationale.

## Examples
Flublok and Supemtek (Sanofi), the only recombinant influenza vaccines, with haemagglutinin made in Sf9; Cervarix (GSK), whose HPV virus-like particles are made in High Five cells; Nuvaxovid (Novavax), a COVID-19 spike nanoparticle made in Sf9; Hemgenix (uniQure), an AAV5 haemophilia B gene therapy made by the Sf9 baculovirus route, following Glybera on the same platform; Ingelvac CircoFLEX and other high-volume veterinary VLP vaccines. Cells, media, and vector kits come from Thermo Fisher (Sf-900 media, Bac-to-Bac), Sartorius, and Oxford Expression Technologies (flashBAC).

## Economic profile
Culture is cheap: serum-free insect medium costs less than mammalian medium, the incubation needs no CO₂ and less heating, and cell growth is fast. The economics are really about how many products a facility turns over. A BEVS suite running six campaigns a year beats a larger single-product mammalian suite when each product's demand is modest, because the changeover cost is a new virus stock rather than a new cell line and a new comparability package. The offsetting cost is downstream: a lysate feed needs more clarification and more polishing than a secreted one, and the baculovirus clearance step is extra. Demand for the platform grew mainly on the back of AAV, so its trajectory now tracks the gene therapy market more than the vaccine market. For anyone building here, the useful question is how much of the facility's value is the flexibility rather than the throughput, because that flexibility is what a CHO plant cannot match.

## Videos

- https://www.youtube.com/watch?v=P_X0qThd1cI — Recombinant Protein Expression in Baculovirus Insect Cell lines (Bio-Resource, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=PltQqNNpnrw — BACULOVIRUS EXPRESSION SYSTEM (life science with KMD, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=NQqoo99I1zk — Baculovirus Expression System for Recombinant Proteins Expression | Protocol Preview (JoVE (Journal of Visualized Experiments), 2 minutes, 5k+ views)

## Further reading

[Application of Baculovirus Expression Vector System (BEVS) in Vaccine Development (Vaccines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10386281/) · [Genetic engineering of baculovirus-insect cell system to improve protein production (Frontiers in Bioengineering and Biotechnology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9530357/)
