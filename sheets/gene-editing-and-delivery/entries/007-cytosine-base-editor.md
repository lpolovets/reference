---
number: 7
name: Cytosine Base Editor
part: 2
group: Base editors
acts: seq
cargo: [mid]
reach: [exvivo, liver]
maturity: emerging
clinical: trials
---

## Description
A cytosine base editor converts a C-G base pair into a T-A base pair. It was the first base editor built, and its architecture is the template the adenine editors followed: a Cas9 nickase positions the complex and exposes a short single-stranded window, a cytidine deaminase converts any cytosine in that window to uracil, and the cell reads uracil as thymine. One extra component is needed that the adenine editors do not require. Cells have a repair enzyme, uracil DNA glycosylase, whose job is to find and remove exactly this kind of damage, so a cytosine editor includes a uracil glycosylase inhibitor to block it. Without that inhibitor the edit is largely reversed before it can be fixed into the genome. Unlike the adenine deaminase, which had to be evolved from scratch, natural cytidine deaminases were already known, which is why cytosine editing arrived first.

## Strengths and weaknesses
The strengths are the same clean chemistry as adenine editing: high efficiency, very few insertions and deletions, no double-strand break, and no translocation risk in multiplex use. C-to-T editing is particularly useful for installing stop codons, which is a precise way to knock out a gene without cutting it, and for disrupting splice sites. The weaknesses are more serious than for adenine editors on the safety side. The cytidine deaminases used are members of the APOBEC family, which cells use as antiviral defenses and which are implicated in mutational signatures found in human cancers. They cause guide-independent off-target editing of both DNA and RNA at rates that have been measured and are not trivial. Bystander editing within the window applies equally, and the same size and PAM constraints hold. In direct comparisons, cytosine editors have generally shown a worse guide-independent off-target profile than adenine editors, which is why more clinical programs use adenine editing.

## When to use
Use a cytosine base editor when the therapeutic change is a C-to-T conversion, when you want to install a premature stop codon to knock out a gene cleanly, or when you need to disrupt a splice site. Installing stop codons is the most common use in cell therapy manufacturing, where it removes genes without the translocation risk of multiplex cutting. Prefer an adenine editor when either would work, because the off-target profile is better. Use an engineered deaminase variant with reduced guide-independent activity rather than the original APOBEC constructs, and measure guide-independent editing directly with an orthogonal assay, since the standard guide-based off-target methods will not see it. As with adenine editors, plan delivery around 5.2 kilobases from the beginning.

## Key numbers
Coding sequence roughly 5.2 kb including the uracil glycosylase inhibitor, above single-AAV capacity · editing window typically 4–8 bases · on-target efficiency commonly 50–80% · insertion and deletion byproducts usually under 1% · requires a uracil glycosylase inhibitor, without which most edits are reversed · guide-independent off-target editing is measurably higher than for adenine editors in published comparisons · several clinical programs, none approved.

## Off-target and safety
The most scrutinized safety question in base editing. Three distinct off-target mechanisms operate: guide-dependent DNA editing at sites the Cas9 domain visits, guide-independent DNA editing where the deaminase acts on transiently exposed single-stranded DNA anywhere in the genome, and RNA editing across the transcriptome. Only the first is detected by conventional CRISPR off-target methods. The APOBEC connection to cancer mutational signatures makes the guide-independent DNA editing a specific concern rather than a theoretical one, and engineered deaminases with narrowed activity have been developed for this reason and should be the default choice. Bystander editing at other cytosines in the window is expected, so full product characterization at the target site is required, and reviewers will want to know the functional consequence of every significant byproduct.

## Examples
The original base editors from the Liu laboratory, which established the architecture; BEAM-201, a base-edited allogeneic CAR-T product using multiplex cytosine editing to remove several genes without cutting; the Great Ormond Street Hospital base-edited CAR-T treatment for refractory T-cell leukemia, which used cytosine editing to make an allogeneic product and treated patients who had exhausted other options; and agricultural applications, where installing stop codons is a straightforward way to remove a trait.

## Economic profile
Shares the base editing platform economics: cheap to make, with the delivery route determining everything. The commercial position differs from adenine editing mainly through intellectual property and safety perception. Because adenine editors have a better guide-independent off-target profile, several companies have moved their clinical priorities toward them, which has concentrated cytosine editing in applications where the specific C-to-T chemistry is required. The stop-codon knockout use case in ex vivo cell therapy is where it remains clearly the right tool, and that is a manufacturing application where the editing cost is negligible against the cell processing cost.
