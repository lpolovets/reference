---
number: 10
name: Fc-Fusion Protein and Trap
part: 2
group: Engineered antibody formats
targets: [surface]
dosing: [monthly, weekly]
cogs: med
maturity: proven
precedent: several
---

## Description
An Fc-fusion protein joins a functional protein domain to the Fc region of an antibody. The Fc contributes two things the partner domain lacks: a long serum half-life, because Fc binds the neonatal Fc receptor and gets recycled out of the lysosomal degradation pathway, and a purification handle, since Protein A capture works on anything carrying an Fc. The fused domain does the actual work. In a trap, that domain is the extracellular part of a natural receptor, so the molecule soaks up the receptor's ligands with the receptor's own affinity and specificity. This is a different design philosophy from an antibody: rather than raising a binder against a ligand, you take the binding surface evolution already produced and give it a long half-life. Traps often bind several related ligands at once, which is an advantage when the biology is redundant and a liability when you wanted to block only one of them.

## Strengths and weaknesses
The strengths are affinity, breadth, and speed of discovery. A receptor domain usually binds its ligands with picomolar affinity, better than most antibodies raised against the same ligands, and it captures the whole ligand family without any additional engineering. Because the sequence comes from a natural human protein, discovery is short: there is no immunization, no library screening, and no affinity maturation. Manufacturing rides on the antibody platform, with CHO expression and Protein A capture. The weaknesses are that you get what the receptor gives you. If the natural receptor binds three ligands and you only wanted to block one, there is no easy way to remove the others. Fusion junctions are often the least stable part of the molecule and a common source of clipping and aggregation, which shows up as a manufacturability problem late. Glycosylation of the fused domain is frequently complex and hard to control, and it drives clearance, so batch-to-batch glycan variation matters more here than for a conventional antibody. Titers are usually lower than for an antibody, and immunogenicity against the novel junction is a real risk.

## When to use
Use a trap when you want to neutralize a ligand or a group of related ligands and a natural receptor already binds them well. Anti-VEGF therapy in ophthalmology is the clearest case: aflibercept traps several VEGF family members with very high affinity, and the redundancy that would defeat a single-ligand antibody is the point. Use an Fc fusion more generally when a short-lived protein needs a longer half-life and you want to keep the antibody manufacturing platform. Choose an antibody instead when you need to block one specific ligand out of a family, when you want a defined epitope, or when the receptor's natural ligand set does not match the biology you are targeting. Check the fusion junction for clipping early, in an accelerated stability study rather than at the end of development, because that is where this format most often fails.

## Key numbers
Serum half-life typically 1–3 weeks, from Fc recycling through the neonatal Fc receptor · trap affinity often in the low picomolar range, generally tighter than antibodies against the same ligands · CHO titers usually 1–4 g/L, lower than a monoclonal antibody · cost of goods roughly $100–250/g, somewhat above an antibody because of titer and purification losses · intravitreal dosing every 4–8 weeks for ophthalmology products, extendable to 12–16 weeks at higher doses · more than 10 approved Fc-fusion products.

## Development path
Follows the monoclonal antibody path closely, which is most of the appeal. The differences reviewers focus on are glycosylation control, because the fused domain often carries complex glycans that affect clearance and are harder to hold constant than an antibody's; product-related impurities at the fusion junction, including clipped species and aggregates; and immunogenicity, since the junction is a sequence that does not exist in nature. Where the fused domain is a receptor, reviewers will ask what else it binds and what the consequences are. CMC is otherwise conventional, and the analytical toolkit is the same one used for antibodies.

## Examples
Aflibercept (Eylea), a VEGF trap and one of the largest-selling ophthalmology products; etanercept (Enbrel), a TNF receptor fusion and one of the earliest; abatacept (Orencia) and belatacept, CTLA-4 fusions used in immunology and transplant; rilonacept, an IL-1 trap; romiplostim (Nplate), a peptide-Fc fusion for thrombocytopenia; and dulaglutide (Trulicity), a GLP-1 peptide fused to an Fc region to convert a molecule with a two-minute natural half-life into a weekly injection.

## Economic profile
Manufacturing economics sit close to a monoclonal antibody, a little worse because titers are lower and purification recovers less. The distinctive commercial feature is speed of discovery: a trap can go from concept to candidate faster than an antibody because there is no binder to find, which shortens the earliest and least fundable part of a program. Aflibercept demonstrates the ceiling, having become one of the highest-revenue biologics in the world. The competitive risk is the same as for antibodies, since biosimilars arrive on a predictable schedule and the manufacturing barrier is real but not insurmountable. For a startup, the practical attraction is that the format converts a known piece of receptor biology into a drug candidate quickly, which is a good position when the biology is already validated and a poor one when it is not.

## Videos

- https://www.youtube.com/watch?v=e6bMz5qEgEE — How does Enbrel (Etanercept) Work for Autoimmune & Inflammatory Conditions? (Dr. Rob Swanda, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=8cXnCgEjpzk — FcRn and the Long Half-Life of IgG Antibodies (The Jackson Laboratory, 2 minutes, 10k+ views)

## Further reading

[Fc-fusion proteins: new developments and future perspectives (EMBO Molecular Medicine)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3491832/)
