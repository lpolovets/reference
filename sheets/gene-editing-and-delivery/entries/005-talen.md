---
number: 5
name: TALEN
part: 1
group: Protein-guided nucleases
acts: seq
cargo: [mid]
reach: [exvivo]
maturity: proven
clinical: trials
---

## Description
A TALEN is a transcription activator-like effector nuclease, built from DNA-binding proteins that bacteria of the genus Xanthomonas use to manipulate plant genes. The useful property is that these proteins are genuinely modular: each repeat unit of about 34 amino acids recognizes exactly one DNA base, and which base it recognizes is determined by two amino acids at fixed positions. Stringing repeats together in the right order produces a protein that binds any sequence you choose, with a simple one-repeat-per-base code and none of the context dependence that makes zinc fingers difficult. Like zinc finger nucleases, TALENs are fused to the FokI cutting domain and work as pairs, so cutting requires two binding events. They recognize a much longer sequence than any CRISPR system, typically 30 to 40 bases across the pair, which is where their specificity comes from.

## Strengths and weaknesses
The strengths are a very long recognition site, straightforward design, and access to chromatin that CRISPR reaches poorly. TALENs bind methylated and densely packed DNA better than Cas9 does, which matters at some loci. The recognition length makes off-target sites genuinely rare, and TALENs have the cleanest specificity record of the cutting nucleases. They have a substantial clinical history in allogeneic cell therapy. The weaknesses are size and cloning. The repeats are highly similar to each other, which makes the DNA encoding them hard to synthesize and hard to package in viruses, since repetitive sequence recombines. A TALEN pair runs to roughly 6 kilobases, too large for a single AAV. Construction, while conceptually simple, is a real laboratory exercise compared with ordering a guide RNA. Multiplexing is impractical. The practical consequence is that TALENs are used almost entirely ex vivo, delivered as messenger RNA by electroporation, where size and repetitiveness stop mattering.

## When to use
Use TALENs for ex vivo cell engineering where specificity is the priority and delivery is by electroporation, which is exactly where they have found their clinical niche. Allogeneic CAR-T manufacturing is the main case, and several clinical programs have used them for multiplex knockout of the T-cell receptor and other genes. They are also worth considering when the target sits in heterochromatin or a methylated region where Cas9 performs poorly, which is a real and underappreciated advantage. Do not use them for in vivo work requiring viral delivery, because the size and the repetitive sequence both work against you. And do not use them for research applications where you need to test many targets quickly, since construction time makes that painful.

## Key numbers
Each repeat of about 34 amino acids recognizes exactly one base, with specificity set by two amino acids · a pair recognizes 30–40 bases combined, far longer than a CRISPR target · coding sequence for a pair is roughly 6 kb, above single-AAV capacity · binds methylated and compacted DNA better than Cas9 · off-target sites are rare because of the recognition length · delivered clinically as messenger RNA by electroporation · used in several clinical trials, none approved.

## Off-target and safety
The best specificity profile among the cutting nucleases, for a simple reason: a 30 to 40 base recognition site occurs once in a genome of three billion bases with a very large margin, and the obligate dimer requirement adds another layer. That said, off-target discovery is harder than for CRISPR because there is no guide sequence to search against, so unbiased methods carry the whole burden. The double-strand break consequences are the same as for any nuclease, and the multiplex translocation risk applies with equal force in allogeneic manufacturing. Delivery as messenger RNA is a meaningful safety feature: the protein is present for a day or two and then gone, which caps off-target exposure in a way that AAV-driven expression does not.

## Examples
The UCART19 program, which used TALENs to knock out the T-cell receptor and CD52 in donor T cells and produced the first successful allogeneic CAR-T treatments in infants with leukemia; subsequent TALEN-edited allogeneic products from Cellectis and its partners; and TALEN use in agriculture, where the simpler regulatory position of non-transgenic edits made them attractive.

## Economic profile
A platform with a real technical advantage that lost the broader market to CRISPR on convenience, and then found a defensible niche in allogeneic cell therapy where its specificity and messenger RNA delivery fit the manufacturing model. The intellectual property is held by a small number of parties, which supports a licensing business but limits adoption. The commercial lesson generalizes: in tool markets, ease of use routinely beats performance, and a tool that takes weeks to retarget loses to one that takes days even when it is more accurate. TALENs survive commercially where the target is fixed, the volume is clinical rather than experimental, and specificity is worth paying for.
