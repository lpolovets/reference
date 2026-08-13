---
number: 16
name: CRISPR-Associated Transposase
part: 4
group: Programmable insertion
acts: seq
cargo: [large]
reach: [research]
maturity: early
clinical: none
---

## Description
CRISPR-associated transposases are natural systems in which bacteria have fused a CRISPR targeting module to a transposon's insertion machinery. The CRISPR part finds a site under guide RNA direction but does not cut it; instead it recruits the transposase, which inserts a DNA cargo a fixed distance away. The appeal is obvious: programmable targeting from CRISPR, large cargo capacity from the transposon, and no double-strand break requiring cellular repair, all in one system that evolved to work together rather than being engineered to. It also does not need homology-directed repair, so in principle it works in non-dividing cells. These systems were characterized in bacteria in 2019 and work well there, with insertion efficiencies that make them useful for bacterial genome engineering. Translating them into human cells has proven much harder than the bacterial results suggested, and that gap is the whole story of the technology so far.

## Strengths and weaknesses
The strength is architectural elegance: one system that targets programmably and inserts large cargo, with no double-strand break and no dependence on the repair pathway that limits knock-in. In bacteria it works well and is genuinely useful. The weaknesses are that the systems are complex and that they have not translated. Several protein components must be expressed at the right relative levels, which is difficult to arrange in a mammalian cell and makes delivery a multi-component problem. Efficiency in human cells has been low in published work, and off-target insertion at unintended sites has been a persistent finding rather than a rare one. Substantial engineering effort has gone into improving both, with progress, but the technology remains preclinical. Compared with the serine integrase route, which achieves a similar goal through a two-step process that is better understood, the case for CAST in human cells is currently weaker.

## When to use
Use CRISPR-associated transposases for bacterial genome engineering, where they work well and are the most convenient way to insert cargo at a chosen site. For human cells, treat this as a research direction rather than a development path: efficiency and specificity in mammalian systems are not yet at a level that supports a therapeutic program, and a company building on it should be evaluated on the mammalian data specifically rather than on the bacterial results, which are not predictive. If the goal is targeted insertion of a large cargo in human cells, the serine integrase approach is further along, and conventional homology-directed repair knock-in is the established answer where the cells divide.

## Key numbers
Insert sizes of roughly 10 kb or more are within the mechanism's capability · requires several protein components expressed in the right ratios, which is the main mammalian translation problem · no double-strand break and no dependence on homology-directed repair · insertion efficiency in bacteria is high, and in human cells has been low in published work · off-target insertion has been a recurring finding in mammalian systems · discovered in 2019 · no clinical use.

## Off-target and safety
The main published concern is unintended insertion at sites the guide did not specify, which for a system that installs kilobases of DNA is a more consequential off-target event than a mis-cut, since the insert can disrupt whatever gene it lands in. Measuring it requires unbiased insertion site mapping rather than amplicon sequencing at predicted sites. The absence of a double-strand break removes the deletion and translocation risks that nucleases carry, which is a real advantage. Multi-component expression creates its own risk, since imbalanced component levels change behavior in ways that are hard to control across cell types and doses. For any human application the immunogenicity of several bacterial proteins expressed together would need assessment.

## Examples
The Type I-F and Type V-K CRISPR-associated transposase systems characterized in 2019, which established the mechanism; engineering efforts to raise mammalian efficiency and specificity, including reconstituted and simplified variants; and bacterial applications where the systems are used routinely for strain engineering and multiplexed insertion.

## Economic profile
Not yet a business. The intellectual property is real and held by a small number of academic institutions and their spinouts, and the strategic value would be significant if mammalian efficiency were solved, because targeted large-cargo insertion without a double-strand break is a genuinely valuable capability. The realistic assessment is that this competes with serine integrases for the same application, is behind them, and would need a step change in mammalian performance to become the preferred route. Bacterial genome engineering is a real but small market that does not on its own justify a therapeutics valuation.

## Further reading

[Integration of therapeutic cargo into the human genome with programmable type V-K CAST (Nature Communications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11906591/) · [Genome editing using CRISPR, CAST, and Fanzor systems (Molecules and Cells)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11278801/)
