---
number: 25
name: Electroporation
part: 6
group: Physical and conjugate delivery
acts: carrier
cargo: [vast]
reach: [exvivo]
maturity: default
clinical: approved
---

## Description
Electroporation applies a brief high-voltage pulse to cells in suspension, which opens transient pores in the membrane and lets molecules that could never cross it walk in. It is the standard way to get editing machinery into cells outside the body, and essentially every approved and clinical-stage ex vivo editing process uses it. What makes it the default is not efficiency alone but the form of the cargo: electroporation delivers the nuclease as ribonucleoprotein, meaning the protein already loaded with its guide RNA, rather than as DNA or RNA that has to be transcribed and translated. That means the editor is active immediately, works for a few hours, and is degraded, which gives the shortest exposure window of any delivery method and correspondingly the lowest off-target editing. There is no vector, no viral sequence, no packaging limit, and the reagents cost almost nothing.

## Strengths and weaknesses
The strengths are simplicity, cost, cargo freedom and exposure control. Any payload works: ribonucleoprotein, messenger RNA, plasmid, or a transposon system with its transposase. Efficiency in T cells and hematopoietic stem cells is high, commonly above 80% with optimized conditions. Equipment is inexpensive relative to viral vector manufacturing, and the process takes minutes and suits automation, which is why decentralized and point-of-care cell therapy manufacturing is built on it. The weakness is that it damages cells. Viability losses of 10–30% are typical and can be worse for fragile cell types, and the surviving cells show stress responses that can affect expansion and function. It only works on cells in suspension outside the body, so it has no in vivo application beyond localized electrode-based delivery in specific tissues. Optimizing pulse conditions per cell type is real work and does not transfer between cell types.

## When to use
Use electroporation for any ex vivo editing process, which is where it is the default and deservedly so. It is the right answer for CAR-T manufacturing, hematopoietic stem cell editing, and any cell engineering where the cells can be taken out and put back. Deliver ribonucleoprotein rather than DNA whenever possible, since it is both more efficient per molecule and safer through shorter exposure. Consider integration-deficient lentiviral delivery instead when the cell type is too fragile to survive the pulse, which is a genuine problem for some stem cell populations. There is no in vivo version of this for systemic editing, so any program targeting tissue in the body needs a different route entirely, and electroporation's advantages do not transfer.

## Key numbers
Editing efficiency commonly above 80% in T cells and hematopoietic stem cells with optimized conditions · cell viability loss typically 10–30% · ribonucleoprotein is active immediately and degraded within roughly 24 hours, the shortest exposure window of any delivery method · no cargo size limit · reagent cost per reaction is negligible against cell processing costs · used in every approved ex vivo editing product · optimization is cell-type specific and does not transfer.

## Off-target and safety
The best off-target profile available for delivering a nuclease, and the mechanism is exposure duration. Published comparisons consistently show that ribonucleoprotein delivered by electroporation produces less off-target editing than the same nuclease expressed from DNA or a vector, because the enzyme is gone within a day rather than persisting for weeks or months. There is no vector sequence to integrate and no viral component to provoke an immune response. The safety questions that remain concern the cells rather than the genome: viability, stress responses, and whether the electroporated population still functions as intended. Where plasmid DNA is electroporated rather than protein, random integration of plasmid fragments occurs and has to be measured, which is one of the reasons ribonucleoprotein is preferred clinically.

## Examples
Casgevy manufacturing, which electroporates Cas9 ribonucleoprotein into hematopoietic stem cells; essentially all allogeneic CAR-T processes, which use it for multiplex knockout of the T-cell receptor and other genes; transposon-based CAR-T manufacturing, where both the transposase and the cargo are electroporated; and point-of-care manufacturing programs that use it specifically because the equipment is affordable and the process is short.

## Economic profile
Almost free relative to what it replaces. A device and a cuvette against viral vector at 20–40% of cell therapy manufacturing cost is the single largest cost lever available in ex vivo cell engineering, and it is why the field standardized on it for editing payloads even while continuing to use viral vectors for gene addition. The strategic consequence is that editing itself has become a cheap step in an expensive process: the money in cell therapy is in apheresis, culture, release testing and logistics, not in the editor or its delivery. Anyone claiming a cost advantage from a better editing delivery method in an ex vivo process is optimizing a small line item.
