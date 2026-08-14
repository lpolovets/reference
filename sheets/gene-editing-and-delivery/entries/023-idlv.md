---
number: 23
name: Integration-Deficient Lentivirus
part: 5
group: Viral vectors
acts: carrier
cargo: [mid]
reach: [exvivo, research]
maturity: early
clinical: none
---

## Description
An integration-deficient lentiviral vector is an ordinary lentiviral vector with the integrase enzyme disabled by point mutations. Everything else works: the particle enters the cell, reverse transcribes its RNA genome into DNA, and delivers that DNA to the nucleus. What it cannot do is insert into the chromosome. The DNA instead persists as an episomal circle, which is transcribed for a while and then lost, quickly in dividing cells and more slowly in cells that do not divide. The point is to keep lentivirus's transduction efficiency and 8 kilobase capacity while removing the insertional mutagenesis risk that requires 15-year follow-up. For gene editing this is a sensible pairing: the nuclease is expressed for days to weeks and then disappears with the episome, which caps off-target exposure, and there is no possibility of the nuclease coding sequence integrating and being expressed permanently.

## Strengths and weaknesses
The strengths are transient expression without insertional mutagenesis, at lentiviral capacity and efficiency. It also serves well as a donor template carrier for homology-directed repair, where you want the template present but definitely not integrated, and this is one of its more established uses. The weaknesses are expression level and durability. Episomal DNA is transcribed less efficiently than integrated DNA, so expression is lower, and it is diluted out quickly by cell division, which limits how long the editor is around to work. In rapidly dividing cells the window may be too short. Residual integration is not zero: the mutations reduce integrase activity by orders of magnitude but a low rate of illegitimate integration persists and has to be measured rather than assumed away. Manufacturing is the same expensive lentiviral process, so none of the cost advantages of non-viral delivery apply.

## When to use
Use integration-deficient lentivirus when you want lentiviral transduction efficiency and capacity for a payload that must not integrate, particularly for delivering nucleases or donor templates in ex vivo cell engineering. It is a reasonable choice when electroporation damages the cells too much, since transduction is gentler and preserves viability better, which matters for fragile cell types such as hematopoietic stem cells. Do not use it when the cells divide rapidly and the editing window would close before enough editing occurs. And weigh it against simply electroporating ribonucleoprotein, which is cheaper, faster, gives an even shorter exposure, and is the established standard in most ex vivo processes. The niche is real but narrow.

## Key numbers
Cargo capacity roughly 8 kb, same as the integrating vector · integrase activity reduced by orders of magnitude, with residual integration low but not zero and requiring measurement · episomal DNA is lost within days in dividing cells and persists longer in non-dividing ones · expression level lower than from an integrated copy · manufacturing cost matches standard lentiviral vector · no clinical use as an editing delivery vehicle.

## Off-target and safety
The purpose of the vector is to improve on integrating lentivirus, and on that axis it succeeds: dramatically reduced integration means the insertional mutagenesis risk that drives 15-year follow-up requirements is largely removed, though residual integration has to be quantified and cannot simply be asserted. For editing payloads, shorter expression means less off-target cutting than an integrating vector or AAV would give, which is the main reason to use it. What remains is standard lentiviral vector safety work: replication-competent lentivirus testing, producer cell impurities, and the immunogenicity of the envelope glycoprotein.

## Examples
Use as a donor template carrier in homology-directed repair protocols, where non-integration is essential and the vector delivers template efficiently to cells that tolerate electroporation poorly; preclinical delivery of nucleases to hematopoietic stem cells; and research applications requiring transient high-level expression in primary cells that are hard to transfect by other means.

## Economic profile
Carries lentiviral manufacturing costs without the durable-expression benefit that justifies them in cell therapy, which is an awkward economic position and explains why adoption has been limited. The competitor is electroporation of ribonucleoprotein, which costs almost nothing and achieves a shorter exposure window, and which has become the standard for ex vivo editing precisely because it is cheap and effective. Integration-deficient vectors survive in situations where cell viability after electroporation is unacceptable, which is a real problem for stem cells and some primary cells but is a narrow commercial base.

## Videos

- https://www.youtube.com/watch?v=i0nHe4OG3ns — Integrase-deficient Lentiviral Vectors for CRISPR Gene Editing | Protocol Preview (JoVE (Journal of Visualized Experiments), 2 minutes, 1k+ views)
