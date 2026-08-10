---
number: 28
name: Lentiviral Vector Production
part: 6
group: Viral vectors
products: [vector, cell]
scale: [bench, pilot, mid]
cogs: vhigh
maturity: proven
regulatory: validated
---

## Description
Lentiviral vector is the reagent that makes CAR-T possible, and it is usually the single most expensive input in an autologous process. It is made by transiently transfecting HEK293T cells with three or four plasmids that split the virus into pieces that cannot recombine into anything replicating: the transfer plasmid carrying the transgene between self-inactivating long terminal repeats, gag-pol, rev, and a separate VSV-G envelope. The cells then bud vector particles into the medium, so harvest is the supernatant rather than the cells. Particle half-life at 37 °C is only about 6–12 hours, which means the harvest has to be collected repeatedly or continuously and moved to cold quickly, rather than accumulated over days the way a protein would be. Downstream is nuclease treatment, clarification, anion exchange or an affinity capture, TFF to concentrate and diafilter, and sterile filtration. Unlike AAV, lentivirus integrates into the target cell's genome, which is exactly why it is used for cell therapy: the CAR is inherited by every daughter cell as the T cells expand in the patient.

## Strengths and weaknesses
Lentivirus transduces non-dividing and slowly dividing cells, carries a large payload of around 8–9 kb, and integrates, so a single ex vivo treatment permanently modifies a stem cell or a T cell. Against that, the process loses most of what it makes. Titers in unconcentrated harvest are low, downstream recovery is often 20–40% and some published processes come in under 20%, and the terminal 0.2 µm sterile filtration alone can cost 30–50% of functional titer because the particles are large and fragile. The measurement that matters is transducing units, not physical particles, and the ratio between them varies by orders of magnitude across processes, so a vector lot that looks fine by particle count can be useless. The clinical failure mode is insertional mutagenesis: the vector integrates semi-randomly, and integration near a proto-oncogene can cause a malignancy years later. That is not theoretical, and it is why every recipient is followed for 15 years.

## When to use
Use lentivirus when the modification has to be permanent and heritable within the treated cell population, which in practice means ex vivo T cell and hematopoietic stem cell therapy. Do not use it for in vivo delivery to a solid tissue; AAV is the vector with that record, and lentivirus brings integration risk with none of AAV's tissue targeting. If your payload fits and the target cell divides reliably, gammaretroviral vectors are a cheaper and equally well-precedented alternative, and two approved CAR-T products use them. If the edit can be transient or made with a nuclease, electroporation of mRNA or a ribonucleoprotein avoids the vector, the integration risk, and the 15-year follow-up entirely, which is the main reason non-viral delivery keeps taking share in new programs. On the make-versus-buy question: build a stable packaging line only if you will run more than a handful of campaigns a year, because inducible systems are needed to keep the cytotoxic VSV-G from killing the producer cells and getting one working takes years.

## Key numbers
Three- or four-plasmid transient transfection of HEK293T · particle half-life roughly 6–12 hours at 37 °C, so harvest is repeated or continuous · downstream recovery commonly 20–40%, sometimes under 20% · terminal 0.2 µm filtration alone costing 30–50% of functional titer · a published process-economics model puts vector at roughly $19,000 per dose from a 50 L batch and roughly $1,500 per dose from a 2,000 L batch at a 2 × 10⁹ transducing unit dose · vector at roughly two-thirds of raw material cost in an autologous process · 15-year long-term follow-up for recipients.

## Regulatory notes
Integration is what drives the filing burden. Every vector lot needs replication-competent lentivirus testing, and so, at least during development, do the transduced cells; FDA's long-term follow-up guidance recommends up to 15 years of monitoring for integrating vectors against up to 5 for AAV; and vector copy number per cell is a release specification because more integrations mean more chance of hitting something. The risk has materialized. Hematologic malignancies attributed to insertional oncogenesis appeared in recipients of Skysona, and in January 2024 FDA required a class boxed warning for secondary T-cell malignancies across approved BCMA- and CD19-directed CAR-T products. Expect integration site analysis, clonal expansion monitoring, and a registry commitment as standard parts of the package, and budget for the fact that those obligations run for a decade and a half after the last patient is dosed.

## Examples
Kymriah, Breyanzi, Abecma, Carvykti, and Aucatzyl are lentiviral CAR-T products; Yescarta and Tecartus use gammaretroviral vectors instead, which is a useful reminder that lentivirus is not the only option. Zynteglo, Skysona, Lyfgenia, and Lenmeldy are lentiviral ex vivo hematopoietic stem cell therapies, and Lenmeldy's $4.25M US list price makes it one of the most expensive drugs ever launched. On the manufacturing side: Oxford Biomedica, whose whole business was built on lentiviral vector supply, plus Lonza, Charles River, WuXi Advanced Therapies, and Andelyn; and Cytiva's ELEVECTA inducible stable producer lines as the main commercial attempt to get out of transient transfection.

## Economic profile
Vector cost per dose falls steeply with batch scale and hardly at all with anything else, which is the central fact of lentiviral economics. The same model that gives roughly $1,500 per dose at 2,000 L gives roughly $19,000 per dose at 50 L, and clinical programs run at the small end because that is what their patient numbers justify. So an early-stage autologous therapy pays tens of thousands of dollars in vector for each patient, and only gets relief if the product succeeds enough to justify large campaigns. Plasmid and transfection reagent are the largest materials line inside that, which is why plasmid supply and vector supply are the same problem. Vector availability, not clinical demand, has gated several cell therapy launches, and bluebird's products are the clearest case. If you are building here, the two levers that matter are batch scale and a stable producer line, and the second one only pays back at a volume most programs never reach.

## Videos

- https://www.youtube.com/watch?v=kJSsZMdA8Sk — The Basics of the Recombinant Lentivirus System (Applied Biological Materials - abm, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=LzgsgVO5WYI — The Basics of Lentivirus Production/Packaging: Protocol, Tips, and more! (Applied Biological Materials - abm, 6 minutes, 50k+ views)

## Further reading

[Large-Scale Production of Lentiviral Vectors: Current Perspectives and Challenges (Pharmaceutics via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7693937/) · [Testing of Retroviral Vector-Based Human Gene Therapy Products for Replication Competent Retrovirus (FDA)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/testing-retroviral-vector-based-human-gene-therapy-products-replication-competent-retrovirus-during)
