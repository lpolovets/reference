---
number: 19
name: AAV Vector
part: 5
group: Viral vectors
acts: carrier
cargo: [small]
reach: [liver, cns, muscle, eye]
maturity: default
clinical: approved
---

## Description
Adeno-associated virus is the default vehicle for delivering genetic material into non-dividing tissue in the body. The wild virus is small, causes no known disease, and does not replicate on its own. As a vector it is stripped to just the two inverted terminal repeat sequences at each end, and everything between them is replaced with the therapeutic cargo. Which tissue the vector reaches is set by the capsid, the protein shell, and different natural serotypes have different tropism: AAV8 and AAV9 favor liver, AAV9 crosses into the central nervous system, AAV2 is the retinal workhorse, and AAV1, AAV6 and AAV9 reach muscle. Engineered capsids selected from directed evolution libraries push this further, and capsid engineering is now the most active area in the field because it determines both which tissue is reachable and how much dose is required. The delivered DNA stays episomal, so it persists in cells that do not divide and dilutes away in cells that do.

## Strengths and weaknesses
The strengths are in vivo reach and durability. Nothing else on this sheet gets genetic material into neurons, retinal cells, muscle and heart in a living person, and expression from a single dose has lasted years to a decade in favorable tissue. There are approved products, so the regulatory path exists. The weaknesses are the ones every AAV program confronts in the same order. Capacity is about 4.7 kilobases including all regulatory elements, which excludes any base or prime editor and most large genes. Roughly 30–60% of adults carry neutralizing antibodies to common serotypes, excluding them from treatment, and because the infusion generates a strong antibody response, nobody can be dosed twice. High systemic doses have caused deaths from liver toxicity, complement activation and thrombotic microangiopathy. Manufacturing yields are low and a large fraction of capsids come out empty. And for editing specifically, AAV expresses the nuclease for months, so off-target editing accumulates the whole time.

## When to use
Use AAV when the target tissue is liver, muscle, retina or central nervous system, the cargo fits in 4.7 kilobases, and the patient population is not excluded by pre-existing antibodies. For editing, use it when non-viral delivery to that tissue does not exist, which is most tissues other than liver. If the cargo does not fit, the options are a compact nuclease, a split-intein dual vector at roughly double the manufacturing cost, or a different delivery route. For any editing payload delivered by AAV, build in a self-limiting design that shuts the nuclease off, because sustained expression is the specific mechanism by which AAV-delivered editors accumulate off-target edits. Screen the patient population for neutralizing antibodies early, since seroprevalence sets the addressable market and is usually larger than expected.

## Key numbers
Packaging capacity about 4.7 kb including promoter, cargo and regulatory elements · systemic doses commonly 10^13 to 10^14 vector genomes per kilogram · neutralizing antibody seroprevalence roughly 30–60% in adults, varying by serotype and geography · manufacturing typically yields 10–30% full capsids from triple transfection, with the empties requiring separation · cost of goods commonly $100,000–500,000 per systemic dose · expression durable 5–10 years or more in non-dividing tissue · roughly 10 approved products worldwide.

## Off-target and safety
Two distinct problem sets. The vector itself carries dose-limiting hepatotoxicity, complement activation, and thrombotic microangiopathy at high systemic doses, and these have caused clinical holds and patient deaths across multiple programs. Dorsal root ganglion toxicity is a recognized finding in central nervous system programs. The editing-specific problem is exposure duration: AAV drives expression for months to years, so a nuclease delivered this way keeps cutting long after the intended edit is made, and measured off-target editing rises with time in a way it does not with transient delivery. Self-limiting constructs that include a guide against the vector, or tissue-restricted promoters, are the standard mitigations and should be designed in rather than added later. Residual host cell DNA, plasmid sequence and replication-competent AAV are all release-testing concerns.

## Examples
Luxturna, Zolgensma, Hemgenix, Roctavian and Elevidys among approved gene therapy products; EDIT-101, which delivered a compact nuclease into the retina; the capsid engineering programs producing central nervous system-tropic variants that reach the brain at far lower doses than AAV9; and dual-vector split-intein approaches used to deliver base editors that cannot fit in one capsid.

## Economic profile
The most expensive delivery route on this sheet by a wide margin, and the cost is genuine rather than a pricing artifact: low yields, empty capsid separation, and doses measured in the hundreds of trillions of vector genomes per patient add up to six figures of manufacturing cost. Capacity is available from specialized contract manufacturers and is a real constraint for a company without its own. The strategic implication for an editing program is that AAV should be the choice when no alternative reaches the tissue, not the default, because every other delivery route on this sheet is at least an order of magnitude cheaper and most of them can be redosed.

## Videos

- https://www.youtube.com/watch?v=hYHbfQe5h-Q — 1) Adeno Associated Virus (AAV) - An Introduction (Applied Biological Materials - abm, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=KDGM8YVCioU — AAV Transfer Plasmids - Viral Vectors 101 (Addgene, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=CMFUbSfUEYk — How AAV Gene Transfer Works - Expert Audience (uniQure, 3 minutes, 10k+ views)

## Further reading

[AAV vector development, back to the future (Molecular Therapy)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12126818/) · [Redirecting AAV vectors to extrahepatic tissues (Molecular Therapy)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10727976/)
