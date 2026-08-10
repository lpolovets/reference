---
number: 29
name: Autologous Cell Therapy Manufacturing
part: 7
group: Cell therapy
products: [cell]
scale: [bench]
cogs: vhigh
maturity: proven
regulatory: validated
---

## Description
In autologous cell therapy the batch is one patient, so the manufacturing curve never bends. A leukapheresis collection is shipped to the plant, T cells are selected, activated on anti-CD3/CD28 beads or a soluble equivalent, gene-modified by lentiviral transduction or by electroporation with a nuclease, expanded for 7–14 days, washed into a cryoprotectant, filled into a bag, frozen, tested, and shipped back to the same patient. Newer rapid processes cut the expansion to 1–3 days by infusing less differentiated cells and letting them expand in the patient instead. Manufacturing is the short part: testing, release, and logistics push vein-to-vein time to roughly 3–5 weeks, and patients need bridging therapy while they wait. Doses are small in absolute terms, on the order of 10⁸ cells in a bag of under 100 mL, and the reported cost of goods is $30,000–100,000 per dose, with a widely cited 2019 process-economics model landing at about $95,800. Everything unusual about this process follows from batch size one.

## Strengths and weaknesses
The clinical results are the strength, and they are not small: durable complete remissions in blood cancers that had no other option. The manufacturing has properties nothing else in this reference does. Incoming material varies because patients vary, and heavily pretreated patients often supply T cells that will not expand, so the process has a failure rate driven by the biology of the starting material rather than by the plant. A failed batch cannot be remade from a bank; you have to re-collect from a sick patient, if there is time. Yields do not improve with scale, because there is no scale, only more suites and more operators. And the compendial sterility test takes 14 days against a product with a much shorter useful window, so release depends on interim results and rapid methods with the 14-day test reading out after the patient is already infused. The failure mode that actually costs money is a suite occupied for two weeks by a batch that will be discarded for out-of-specification cell counts or viability.

## When to use
Autologous is the right answer when the therapy needs the patient's own cells and there is no approved allogeneic equivalent, which today covers essentially all CAR-T. Choose it deliberately rather than by default, and check three things. First, can the patient wait 3–5 weeks, because if not, the therapy is unusable regardless of how well it works. Second, will the patient's cells expand, because apheresis quality drives both the failure rate and the dose you can make. Third, is the indication small enough that suite-by-suite manufacturing can supply it, since a plant scales by adding rooms and staff in direct proportion to patients. If any of those fails, the alternatives are allogeneic products off a bank or in vivo approaches that skip manufacturing cells altogether. On the process itself: use a closed automated system if labor and contamination risk dominate your cost model, and consider decentralized point-of-care manufacturing if logistics and turnaround dominate instead. They solve different problems and you should know which one you have.

## Key numbers
Batch size one patient · expansion 7–14 days, or 1–3 days on rapid processes · vein-to-vein roughly 3–5 weeks · doses of 2 × 10⁶ CAR-positive T cells/kg up to 2 × 10⁸ cells (Yescarta) and 0.5–1.0 × 10⁶/kg up to 1 × 10⁸ (Carvykti) · cost of goods $30,000–100,000 per dose, with a 2019 model at about $95,800 · US list prices from roughly $373,000 to over $500,000 · compendial sterility test 14 days, longer than the product's useful shelf life.

## Regulatory notes
These are licensed biologics reviewed by CBER, and the validation burden is unusual in three ways. Chain of identity and chain of custody are patient-safety controls rather than paperwork, because infusing the wrong bag is an adverse event with no remedy, so labeling and tracking are audited as critical process steps. Sterility assurance has to be argued rather than tested, since the compendial method outruns the product; alternative rapid methods, in-process bioburden, and closed processing carry the case. And potency has to be defined on a living, variable product, which is why FDA issued dedicated potency assurance guidance for cell and gene therapy in December 2023. On top of that sit a class boxed warning for secondary T-cell malignancies added in January 2024 for approved BCMA- and CD19-directed CAR-T, and 15-year long-term follow-up because the vector integrates. A decentralized model multiplies all of this, since every hospital site becomes a manufacturing site needing its own qualification and comparability data.

## Examples
The approved US CAR-T products include Kymriah, Yescarta, Tecartus, Breyanzi, Abecma, Carvykti, and Aucatzyl. Closed automated platforms: Miltenyi's CliniMACS Prodigy, Lonza's Cocoon, and Cellares' Cell Shuttle, each aiming at the labor and cleanroom-occupancy lines rather than at materials. On the decentralized side, Spain's ARI-0001 was authorized under a hospital exemption at Hospital Clínic de Barcelona, and ImmunoACT's NexCAR19 in India reached market at a small fraction of Western prices, which is the clearest existing evidence about how much of the cost is process and how much is overhead.

## Economic profile
Cost of goods splits roughly into vector, labor, cleanroom occupancy, and QC, and none of them falls with volume the way materials normally do. A suite makes one dose at a time, so capacity is rooms multiplied by cycle time, and the QC panel costs about what it costs for a 10 kg antibody batch even though it is releasing a single bag. Automation attacks labor and suite count and is the main thing large manufacturers are spending on; decentralized manufacturing attacks logistics and turnaround but multiplies the regulatory footprint. Neither has yet produced a published order-of-magnitude reduction at commercial scale, though ImmunoACT's Indian pricing suggests a large part of the Western number is not physics. The honest summary is that autologous cell therapy is the one modality in this reference where scaling up does not help, and the credible paths to a cheaper product are a shorter process, fewer manual steps, and eventually a switch to allogeneic or in vivo manufacture rather than a better version of this one.

## Videos

- https://www.youtube.com/watch?v=eOStU5kaCpk — CAR T-cell Therapy explained (Manufacturing process & how it works) (Henrik's Lab, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=lmXQvyV-V0k — The Cell Therapy Process (BMS Cell Therapy Manufacturing Tour) (Bristol Myers Squibb, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=PFWoVN5wafo — Automated CAR T cell manufacturing (Miltenyi Biotec, 5 minutes, 10k+ views)

## Further reading

[Considerations for the Development of Chimeric Antigen Receptor (CAR) T Cell Products (FDA)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-development-chimeric-antigen-receptor-car-t-cell-products) · [Cost-Effective Strategies for CAR-T Cell Therapy Manufacturing (Molecular Therapy: Oncology via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12022644/)
