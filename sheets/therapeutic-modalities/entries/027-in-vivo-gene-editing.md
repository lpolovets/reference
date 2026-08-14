---
number: 27
name: In Vivo Gene Editing
part: 6
group: In vivo gene therapy
targets: [gene]
dosing: [once]
cogs: high
maturity: emerging
precedent: none
---

## Description
In vivo gene editing changes a patient's DNA inside their body rather than in a laboratory. The editing machinery, most often a CRISPR nuclease or a base editor together with a guide RNA, is delivered systemically, usually as messenger RNA in a lipid nanoparticle aimed at the liver, and the edit is made in the patient's own cells. The therapeutic result is permanent because DNA changes are inherited by daughter cells, but the editing machinery itself is transient, present for hours to days and then degraded, which is a deliberate design choice: the shorter the nuclease persists, the less opportunity there is for off-target cutting. The most advanced applications knock a gene out, which is the simplest edit to make and the easiest to verify. Correcting a gene precisely is harder in vivo, which is why base editing, which chemically converts one DNA letter to another without cutting both strands, has moved quickly into the clinic for point-mutation diseases.

## Strengths and weaknesses
The strengths are permanence without cell collection, conditioning chemotherapy, or per-patient manufacturing. A single infusion produces a lasting change, and because the product is an off-the-shelf lipid nanoparticle rather than a patient-specific cell product, it scales the way a conventional drug does. Cost of goods is far below any ex vivo cell therapy. The weaknesses start with irreversibility: an off-target edit cannot be undone, which sets a much higher safety bar than for any drug that can simply be stopped. Off-target analysis is expected to be exhaustive, and the methods for finding rare edits in a patient are imperfect. Delivery is essentially limited to the liver for systemic administration, the same constraint as siRNA, so most in vivo editing programs are hepatic. Immune responses to bacterial-derived Cas proteins are a real concern, and a significant fraction of people have pre-existing immunity to Cas9 from common bacterial exposure. Long-term consequences are unknown by construction, since the modality is roughly a decade old.

## When to use
Use in vivo editing when the therapeutic goal is achievable by knocking out or correcting a gene in the liver, and when permanence is worth the irreversibility. Transthyretin amyloidosis is the model case: knocking out a liver gene that produces a toxic protein is a clean, verifiable edit with a measurable pharmacodynamic readout. It is also compelling as a competitor to chronic silencing therapies, since one infusion replaces lifelong siRNA or antisense dosing. Do not choose it where a reversible therapy achieves the same effect and the disease is not severe, because regulators and patients will both weigh permanence heavily. Treat any extrahepatic delivery claim as the central technical risk, and require in vivo editing data in the target tissue rather than particle biodistribution. Plan off-target characterization as a major program workstream from the beginning rather than as an IND-enabling task.

## Key numbers
Editing efficiency in liver of roughly 60–70% of target alleles has been reported clinically for knockout applications · target protein reduction above 90% sustained for years after a single dose in transthyretin amyloidosis · editing machinery present for hours to days, while the DNA change is permanent · cost of goods commonly $5,000–30,000 per dose, roughly an order of magnitude below AAV and two below autologous cell therapy · pre-existing anti-Cas9 immunity is present in a substantial fraction of adults · no approved in vivo editing product to date, with the most advanced programs in Phase 3 · first in-human CRISPR editing was in 2020.

## Development path
The least settled path on this sheet, and the one where regulators are most actively developing their thinking. Expectations include comprehensive off-target assessment using multiple orthogonal methods, both computational prediction and unbiased experimental detection; germline transmission assessment; long-term follow-up measured in years to decades; and immunogenicity work covering the nuclease protein. FDA has created a platform designation route that can allow reuse of delivery and nuclease data across programs, which materially helps a company with several candidates on one platform. The single-patient personalized editing case has now been demonstrated clinically, which is pushing regulators toward frameworks for bespoke products that cannot follow conventional batch logic.

## Examples
Nexiguran ziclumeran (nex-z) and earlier NTLA-2001 for transthyretin amyloidosis, the furthest-advanced in vivo editing programs, knocking out the TTR gene in liver; VERVE-102 and related programs base-editing PCSK9 for cardiovascular risk, aiming at a one-time treatment replacing chronic lipid-lowering therapy; and the bespoke base-editing therapy made for an individual infant with a urea cycle disorder within months of diagnosis, which is the clearest demonstration of what a platform plus a regulatory framework can do for an ultra-rare case.

## Economic profile
The most attractive economics of any durable genetic medicine, which is why so much capital has moved here. Manufacturing is a lipid nanoparticle and synthetic RNA, so cost of goods is thousands rather than hundreds of thousands, and the product is off-the-shelf, so there is no per-patient manufacturing slot and no cold-chain-limited distribution model. That combination makes large indications plausible in a way it is not for AAV or cell therapy: a one-time treatment for cardiovascular risk would address tens of millions of people, and the manufacturing could supply them. The unresolved questions are pricing a one-time therapy in a large population, where the payer arithmetic that works for a rare disease at $2M does not transfer, and whether regulators will accept a permanent edit in patients who are not severely ill.

## Videos

- https://www.youtube.com/watch?v=EPTeaXMVcyY — Gene Editing Inside the Body Using CRISPR (JAMA Network, 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=NyRrMCkPZbA — How to deliver CRISPR machinery in patients? (in vivo approaches) | Prof David Liu (The Sheekey Science Show, 4 minutes, 1k+ views)
- https://www.youtube.com/watch?v=r8gR9wnDQPE — Intellia and the #NewEraOfMedicine (in vivo CRISPR) (The Sheekey Science Show, 10 minutes, 5k+ views)

## Further reading

[In vivo delivery strategies for therapeutic CRISPR genome editing (International Journal of Biological Sciences)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13412194/)
