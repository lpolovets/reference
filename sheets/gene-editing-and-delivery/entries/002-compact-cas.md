---
number: 2
name: Compact Cas Nucleases
part: 1
group: Cas nucleases
acts: seq
cargo: [small]
reach: [exvivo, liver, muscle, eye]
maturity: emerging
clinical: trials
---

## Description
Compact Cas nucleases exist because SpCas9 does not fit comfortably in AAV. At roughly 4.2 kilobases it leaves almost nothing for a promoter, a guide RNA cassette, and the regulatory sequences a vector needs, and AAV holds about 4.7 kilobases in total. The smaller nucleases solve that arithmetic. SaCas9 from Staphylococcus aureus is about 3.2 kilobases and was the first widely used alternative. CjCas9 from Campylobacter jejuni is smaller still at roughly 2.9 kilobases. The engineered miniature systems, including CasMINI and the Cas12f family, come in under 2 kilobases, which leaves room for a base editor or several guides in one vector. The price of compactness is usually PAM: smaller proteins tend to require longer and more restrictive recognition motifs, so fewer positions in the genome are targetable, and some of the engineered miniatures have lower activity than their full-size counterparts.

## Strengths and weaknesses
The strength is fitting in a single AAV with room to spare, which is what makes in vivo editing of muscle, eye and central nervous system practical, since those tissues have no good non-viral delivery route. A single-vector product is simpler to manufacture and to dose than a dual-vector system, and it avoids the requirement that both vectors reach the same cell. Smaller proteins may also be less immunogenic, though this is not well established. The weaknesses are targeting range and activity. A more restrictive PAM can mean the specific base you need to reach has no usable target site nearby, which is a hard constraint rather than an efficiency penalty. Activity for the miniature nucleases is often below SpCas9, sometimes substantially, and the engineering to raise it is ongoing. There is far less accumulated data on off-target behavior, guide design rules, and clinical performance, so a program using one of these is working with thinner tooling than an SpCas9 program.

## When to use
Use a compact nuclease when the delivery route is AAV and the cargo has to fit in one vector. That is the deciding factor almost every time, and it applies most to muscle, retina and central nervous system targets. SaCas9 is the conservative choice, with the most data and clinical experience behind it. The miniature systems are worth considering when you also need to fit an effector domain or several guide cassettes, and worth avoiding when on-target efficiency is already marginal. Check PAM availability at the specific site you need before committing to a nuclease, because discovering that the required base has no accessible PAM after choosing the vector is an expensive way to restart. If delivery is by lipid nanoparticle or electroporation, size is not a constraint and SpCas9 is usually the better tool.

## Key numbers
SaCas9 about 3.2 kb, CjCas9 about 2.9 kb, Cas12f and engineered miniatures under 2 kb, against SpCas9 at 4.2 kb and AAV capacity of about 4.7 kb · SaCas9 requires a longer PAM than SpCas9, reducing targetable positions · guide RNA lengths differ from SpCas9, so guides are not interchangeable · editing efficiency for miniature systems is often below SpCas9 in the same cell type · several clinical programs use SaCas9, none approved to date.

## Off-target and safety
The same double-strand-break risks as SpCas9, with two differences. Longer and more restrictive PAMs mean fewer closely matching sequences exist in the genome, which tends to improve specificity, and this is a genuine advantage rather than a marketing claim. Against that, the off-target profiling tools and guide design rules were developed on SpCas9, so predictions transfer imperfectly and empirical measurement matters more. Delivery by AAV creates a specific and important problem: the vector expresses the nuclease for months or years rather than for days, so the nuclease keeps cutting long after the intended edit is made, and off-target editing accumulates with exposure. Self-limiting designs that include a guide against the vector itself are one answer, and they are worth building in from the start rather than retrofitting.

## Examples
EDIT-101, which delivered SaCas9 by AAV directly into the retina to remove a mutation causing Leber congenital amaurosis, the first in vivo CRISPR trial in humans; AAV-delivered SaCas9 programs for Duchenne muscular dystrophy exon skipping, where the muscle target makes AAV the only realistic route; and the engineered Cas12f and CasMINI systems, which are largely preclinical and are being developed specifically to leave room for base and prime editing machinery inside a single vector.

## Economic profile
Same as SpCas9 on reagent cost, which is to say negligible, but the intellectual property position is different and matters. The foundational SpCas9 patents have been heavily contested and licensed, while several compact nucleases were discovered later and carry cleaner or differently held rights, which has made them attractive for reasons that have nothing to do with biology. The real economic argument remains delivery: fitting into one AAV avoids a dual-vector product, and dual-vector AAV roughly doubles the manufacturing cost per patient of an already very expensive modality while requiring both vectors to land in the same cell.

## Further reading

[Comprehensive assessment of miniature CRISPR-Cas12f nucleases for gene disruption (Nature Communications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9509373/)
