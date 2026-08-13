---
number: 9
name: Prime Editing
part: 2
group: Templated editing
acts: seq
cargo: [mid]
reach: [exvivo, liver, research]
maturity: emerging
clinical: trials
---

## Description
Prime editing writes a chosen sequence into the genome without a double-strand break and without a separate repair template. The machinery is a Cas9 nickase fused to a reverse transcriptase, guided by an extended RNA that does two jobs at once: it targets the site like an ordinary guide, and it carries the sequence to be written. The nickase cuts one strand, the exposed end anneals to the guide's template region, and the reverse transcriptase copies the new sequence directly from the RNA into the DNA. The cell then resolves the resulting flap, and a second nick on the opposite strand biases that resolution toward keeping the edit. Because the new sequence comes from the guide RNA, prime editing can make any of the twelve base substitutions and can insert or delete up to roughly a hundred bases, which is more editing versatility than every other tool on this sheet combined.

## Strengths and weaknesses
The strengths are versatility and product purity. Any substitution, small insertion, or small deletion is available from one platform, with no double-strand break, no donor template to deliver, and byproducts at low single-digit percentages. It works in non-dividing cells, unlike homology-directed repair, which is what makes it relevant for liver, muscle and neurons. There is no editing window and no bystander problem, because only the sequence written into the guide is installed. The weaknesses are size, efficiency, and complexity. At roughly 6.3 kilobases the editor is the largest on this sheet and needs split delivery or non-viral routes. Efficiency has historically been well below base editing, though the successive generations of the system have improved it substantially, and it varies a great deal between sites in ways that are still hard to predict. The extended guide RNA is long and structured, so it is harder to synthesize and more sensitive to design, and guide optimization is a real workstream rather than an afternoon.

## When to use
Use prime editing when the required change is not one of the two transitions a base editor makes, when the target base has no usable PAM to place it in a base editor's window, when bystander editing would cause a problem, or when the change is a small insertion or deletion rather than a substitution. It is the only tool that handles all of those, and for a disease caused by a small insertion or deletion it is often the only realistic option. Prefer a base editor when either would work, because efficiency is generally higher and the tooling is more mature. Budget serious time for guide optimization, since prime editing efficiency at a given site can vary from excellent to negligible and there is no reliable way to predict it yet. And plan delivery around a very large cargo from the start.

## Key numbers
Coding sequence roughly 6.3 kb, the largest editor here and well above single-AAV capacity · makes all 12 base substitutions, plus insertions and deletions up to roughly 100 bases · no editing window, so no bystander edits · byproduct insertions and deletions typically low single-digit percent · efficiency varies widely by site and has improved substantially across successive generations of the system, from low single digits initially to much higher with current designs · extended guide RNA is roughly 140–200 bases against about 100 for a standard guide · first clinical dosing in 2024.

## Off-target and safety
Structurally the safest editing mechanism on this sheet, and the reason is architectural. Three separate events must all be correct for an edit to occur: the guide must bind the target, the primer binding site must anneal, and the reverse transcriptase must copy the template. An off-target site would have to satisfy all three, which is far less likely than satisfying one. Measured off-target rates are correspondingly very low. There is no deaminase, so none of the guide-independent DNA or RNA editing that complicates base editing applies. The remaining concerns are the byproducts at the on-target site, which need full characterization, and the possibility of the reverse transcriptase producing unintended sequence. The immunogenicity of a large fusion protein containing a viral reverse transcriptase has had less clinical study than Cas9 alone.

## Examples
The first clinical prime editing program, in chronic granulomatous disease, which corrects a point mutation in hematopoietic stem cells ex vivo; preclinical work in cystic fibrosis, where the common mutation is a three-base deletion that base editors cannot address; liver-directed programs delivering prime editors by lipid nanoparticle; and extensive research use, where the ability to install any variant has made it the standard tool for building isogenic disease models.

## Economic profile
The platform argument is strong and the delivery problem is the constraint. A single system that makes any small edit is worth more than several systems that each make one, because a company can build one delivery, manufacturing and regulatory package and reuse it across many indications, which is the closest thing to a real platform in this field. Against that, 6.3 kilobases rules out single AAV entirely, so the addressable tissues are those reachable by lipid nanoparticle or ex vivo manipulation, which today means liver and blood. The intellectual property is concentrated and highly valued. The commercial question is whether efficiency and delivery improve fast enough for prime editing to take the indications base editing is currently claiming.

## Further reading

[Prime editing in mammals: From promise to practicalities (Molecular Therapy: Nucleic Acids)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12550301/) · [Prime Editing: An All-Rounder for Genome Editing (International Journal of Molecular Sciences)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9456398/)
