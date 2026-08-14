---
number: 18
name: Homology-Independent Targeted Integration
part: 4
group: Programmable insertion
acts: seq
cargo: [small]
reach: [eye, cns, research]
maturity: early
clinical: none
---

## Description
Homology-independent targeted integration inserts a gene at a chosen site using the repair pathway that is always available, rather than the one that only works in dividing cells. A nuclease cuts the genome at the target site and also cuts the donor DNA, and non-homologous end joining, the cell's fast and always-active repair pathway, ligates the donor into the break. Because it does not use homology-directed repair, it works in neurons, retinal cells, muscle and other post-mitotic tissue where conventional knock-in fails completely. That is the entire reason the method exists. The donor is designed with cut sites arranged so that the intended forward-orientation insertion destroys the recognition sites and stops being cut again, while a backward insertion leaves them intact and gets cut out and retried, which biases the outcome toward the correct orientation without any homology arms.

## Strengths and weaknesses
The strength is working in non-dividing cells, which covers most of the tissue that gene therapy targets and where knock-in efficiency is effectively zero. Efficiency in post-mitotic cells has been reported at levels well above homology-directed repair in the same setting. The donor is simpler than a homology-arm donor, since no arms are needed, which makes it easier to package. The weaknesses come from using an error-prone repair pathway on purpose. Junctions are imprecise, with small insertions and deletions at the boundaries between donor and genome, which is acceptable when inserting a whole gene with its own regulatory elements and unacceptable when a precise in-frame fusion is required. Orientation is biased but not guaranteed, so a fraction of insertions go in backwards. Concatemers, where several donor copies insert together, occur. And the method requires double-strand breaks in both the genome and the donor, so all the usual break-related risks apply and are multiplied.

## When to use
Use homology-independent integration when a gene has to go into non-dividing tissue at a defined site and the junction sequence does not need to be exact. Retina and central nervous system are the natural applications, and inserting a gene under the control of an endogenous promoter at a safe-harbor or tissue-specific locus is the typical design. It is a reasonable alternative to conventional AAV gene addition when integration matters for durability. Do not use it where a precise fusion is needed, where imprecise junctions would disrupt the reading frame, or where concatemer formation would be a problem. If the cells divide, homology-directed repair gives cleaner junctions and is the better choice, and if the insert is under about a hundred bases, prime editing is cleaner than either.

## Key numbers
Works in post-mitotic cells, where homology-directed repair efficiency is effectively zero · reported integration efficiency in non-dividing tissue substantially above homology-directed repair in the same setting, though absolute rates vary widely · junction sequences carry small insertions and deletions from the repair pathway · orientation is biased toward correct by design but not absolute · requires double-strand breaks in both genome and donor · no clinical use to date.

## Off-target and safety
Inherits everything from the nuclease, and adds donor-related risks. Because the donor is linear DNA with cut ends, it can integrate at off-target break sites elsewhere in the genome, and it can form concatemers at the target. Both need unbiased measurement rather than targeted assays. The double-strand break in the genome brings the usual large deletion and translocation risks, and cutting both the genome and the donor at once increases the number of free DNA ends available to be joined incorrectly. Junction characterization by long-read sequencing is the appropriate assay, since short reads cannot span an insert and will miss concatemers and inversions entirely. This is a case where the standard editing assay set is inadequate and a program needs to plan for long-read work.

## Examples
The original demonstrations restoring vision in animal models of retinitis pigmentosa by inserting a corrective sequence into non-dividing retinal cells, which established that targeted integration in post-mitotic tissue was possible at useful rates; subsequent work in central nervous system and muscle; and applications inserting reporter genes at endogenous loci in neurons for research, where the imprecise junction does not matter.

## Economic profile
Preclinical, and its commercial relevance depends on whether integration is worth the added complexity over conventional AAV gene addition. AAV gene addition is approved, well understood, and simpler, and its weakness is that the episome dilutes in dividing cells. In the tissues where homology-independent integration works best, namely retina and neurons, cells largely do not divide, which is precisely where AAV's weakness matters least. That is an awkward position: the method is best where the problem it solves is smallest. The stronger case is durability in tissues with slow turnover and applications where placing the gene under endogenous regulation is therapeutically important rather than incidental.

## Videos

- https://www.youtube.com/watch?v=7-pyDQ1akSM — New gene-editing technology partially restores vision in blind animals (Salk Institute, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=I4EdWb37-Y0 — Plug-and-play protein modification using Homology-independent Universal Genome Engineering (HiUGE) (AJE Video Bytes, 4 minutes, 1k+ views)
- https://www.youtube.com/watch?v=31stiofJjYw — Non-homologous end joining (Oxford Academic (Oxford University Press), 2 minutes, 100k+ views)

## Further reading

[Therapeutic homology-independent targeted integration in retina and liver (Nature Communications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9005519/) · [Homology-independent targeted insertion (HITI) enables guided CAR knock-in and efficient clinical scale CAR-T cell manufacturing (Molecular Cancer)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10291796/)
