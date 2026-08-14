---
number: 20
name: Lentiviral Vector
part: 5
group: Viral vectors
acts: carrier
cargo: [mid]
reach: [exvivo]
maturity: default
clinical: approved
---

## Description
Lentiviral vectors are engineered from HIV-1, stripped of everything that makes it a pathogen and keeping the machinery that gets genetic material into a cell and integrates it into the chromosome. Integration is the defining property: the cargo becomes a permanent part of the genome and is inherited by every daughter cell, which is why a corrected hematopoietic stem cell repopulates the entire blood system for life. Lentiviruses also transduce non-dividing cells, which the older gamma-retroviral vectors could not, and they carry roughly 8 kilobases, comfortably more than AAV. Modern vectors are third-generation and self-inactivating: the viral genes are split across separate plasmids so that recombination cannot reconstitute a replicating virus, and the promoter in the long terminal repeat is deleted so the integrated cargo cannot switch on neighboring genes the way the early gamma-retroviral vectors did. Almost all clinical use is ex vivo, because systemic administration is inefficient and the safety case is much harder.

## Strengths and weaknesses
The strengths are permanence, capacity and a real clinical record. Integration means one treatment lasts a lifetime in a dividing tissue, which AAV cannot do. Eight kilobases holds a chimeric antigen receptor with room to spare, and holds most editing payloads. There are approved products in both cell therapy and gene therapy, so the regulatory expectations are settled. The weaknesses are insertional mutagenesis, cost and the ex vivo constraint. Integration is semi-random with a preference for active genes, and cases of myelodysplasia and leukemia have been reported after lentiviral therapy, which is why 15-year follow-up is required. Vector manufacturing is expensive and has been a recurring industry-wide supply bottleneck, typically accounting for 20–40% of cell therapy manufacturing cost. For editing payloads specifically, permanent expression of a nuclease is exactly the wrong property, so integration-deficient variants are used instead when transient editing is the goal.

## When to use
Use lentiviral vectors when you need permanent gene addition in a dividing tissue and the cells can be treated outside the body. Hematopoietic stem cell gene therapy and CAR-T manufacturing are the two established applications and they cover most of the clinical use. For editing, the standard integrating vector is the wrong tool, because it will express the nuclease forever; use it to deliver a receptor or a therapeutic gene, and deliver the editor by electroporation of protein or messenger RNA in the same manufacturing process. If the goal is transient editing delivered virally, use the integration-deficient variant. Consider transposons or targeted knock-in when vector cost or supply is the binding constraint, understanding that you are trading a well-characterized integration profile for a less characterized one.

## Key numbers
Cargo capacity roughly 8 kb, against 4.7 kb for AAV · integrates permanently, so the cargo survives cell division · transduces non-dividing cells, unlike gamma-retroviral vectors · vector copy number per cell is a release specification, typically held below about 5 · vector is commonly 20–40% of cell therapy manufacturing cost · 15-year long-term follow-up required for insertional oncogenesis · several approved products in cell and gene therapy.

## Off-target and safety
Insertional mutagenesis is the defining risk and the reason for the long follow-up requirement. Lentiviral integration favors the bodies of actively transcribed genes rather than promoter regions, which is meaningfully safer than the gamma-retroviral pattern that caused leukemias in the early SCID trials, but it is not risk-free and malignancies have occurred in lentiviral programs. Required work includes integration site analysis, vector copy number control, clonal tracking over years, and replication-competent lentivirus testing on every batch. Because the vector derives from HIV, that last test is both a technical requirement and a perception issue that programs have to address explicitly. Where the payload is an editor, permanent expression compounds every off-target concern, which is the argument for not using an integrating vector for that purpose.

## Examples
The approved hematopoietic stem cell gene therapies Zynteglo, Lyfgenia, Skysona and Libmeldy; the CAR-T products Kymriah, Breyanzi, Abecma and Carvykti, all of which use lentiviral transduction to install the receptor; integration-deficient lentiviral vectors used to deliver editing machinery transiently; and the very large research literature using lentivirus for stable expression in cell lines.

## Economic profile
Vector manufacturing is the story. Producing clinical-grade lentivirus requires large-scale transient transfection of packaging cells, purification of a fragile enveloped particle, and extensive release testing, and the resulting cost and lead time have been a genuine industry constraint that has delayed clinical programs. Contract capacity expanded substantially through the 2020s and the shortage eased, but vector remains the largest single input cost in cell therapy manufacturing. That fact is what drives interest in transposons, targeted knock-in and non-viral methods, and it is the main economic lever anyone trying to reduce cell therapy cost is pulling on.

## Videos

- https://www.youtube.com/watch?v=kJSsZMdA8Sk — The Basics of the Recombinant Lentivirus System (Applied Biological Materials - abm, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=LzgsgVO5WYI — The Basics of Lentivirus Production/Packaging: Protocol, Tips, and more! (Applied Biological Materials - abm, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=LVsBMm0rX-c — Lentivirus Transduction Protocol: Infecting your target cells (Applied Biological Materials - abm, 10 minutes, 50k+ views)

## Further reading

[Clinical use of lentiviral vectors (Leukemia)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6035154/) · [Lentiviral Vector Bioprocessing (Viruses)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7916122/)
