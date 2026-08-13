---
number: 15
name: Serine Integrase
part: 4
group: Programmable insertion
acts: seq
cargo: [large]
reach: [liver, research]
maturity: early
clinical: none
---

## Description
Serine integrases are enzymes that bacteriophages use to insert their entire genome into a bacterial chromosome. They recognize two short sequences, one on the phage DNA and one on the host chromosome, bring them together, cut both, and rejoin them so the phage DNA ends up integrated. The reaction is unidirectional and requires no host repair machinery, no double-strand break repair pathway, and no cell division. For genome engineering that is an unusually clean mechanism: give a cell an integrase and a circular DNA carrying the recognition site, and the whole circle goes in at the matching site, however large it is. The limitation is that human genomes contain no natural recognition sites, so one has to be installed first. The current approach, called PASTE and related methods, uses a prime editor to write a short landing site at a chosen location, then uses the integrase to drop a full gene onto it, combining the addressability of prime editing with the cargo capacity of an integrase.

## Strengths and weaknesses
The strengths are cargo size and mechanism. Integrases place tens of kilobases at a defined location without a double-strand break in the genome and without depending on homology-directed repair, which means they work in non-dividing cells where knock-in does not. That combination is unique on this sheet: nothing else inserts a whole gene precisely into a neuron or a hepatocyte. Insertion is unidirectional, so the reaction does not reverse. The weaknesses are that it takes two steps and neither is fully efficient. Writing the landing site with a prime editor is itself only partly efficient, and the integration step multiplies against it, so overall efficiency is the product of two imperfect processes and has been low in published work. The machinery is large: a prime editor plus an integrase plus a donor is far beyond any single vector, so delivery is a serious problem. The whole approach is preclinical.

## When to use
Consider serine integrases when you need to insert a full gene at a defined site in tissue that does not divide, which is the case no other tool covers. Diseases where many different mutations occur across one large gene are the natural application, because inserting a whole working copy addresses every patient with one product, rather than needing a different base or prime edit per mutation. That mutation-agnostic property is the strongest argument for the approach. Do not plan a near-term program on it: efficiency, delivery of three components, and the absence of clinical precedent make this a research direction rather than a development path today. If a whole gene is needed and the tissue is reachable, conventional AAV gene addition remains the practical answer, with the understanding that it does not integrate and will dilute in dividing tissue.

## Key numbers
Insert sizes of tens of kilobases are achievable, against roughly 100 bases for prime editing and a few kilobases for practical knock-in · no double-strand break in the genome and no dependence on homology-directed repair, so it works in non-dividing cells · unidirectional, so the reaction does not reverse · requires a landing site that human genomes do not naturally contain, hence the two-step approach · overall efficiency is the product of the landing-site step and the integration step, and has been low in published work · combined machinery is far too large for any single vector · no clinical use.

## Off-target and safety
Attractive in principle for a reason that is structural: the integrase only acts at its recognition sequence, which does not occur in the human genome, so there is no natural off-target site for it to find. Specificity therefore reduces to the specificity of the prime editing step that writes the landing site, which is itself the most specific editing mechanism available. The risks that remain are pseudo-sites, meaning genomic sequences similar enough to the recognition site for the integrase to act on them at low frequency, which have been observed and need measurement. Because the insert is large and integrated, insertional mutagenesis at the landing site is a consideration, though a deliberately chosen safe-harbor site is much better controlled than a viral vector's semi-random integration.

## Examples
The PASTE system, which combines prime editing with a Bxb1 integrase to insert genes of several kilobases at chosen sites; earlier phiC31 integrase work, which used naturally occurring pseudo-sites in the human genome and was limited by their unpredictability; Tome Biosciences and other companies formed to develop the approach; and extensive use of Bxb1 recognition sites in synthetic biology and in engineered cell lines, where landing pads are installed deliberately and then reused.

## Economic profile
Early, and the commercial thesis is mutation-agnostic treatment. A therapy that inserts a working copy of a gene works for every patient with that disease regardless of which mutation they carry, which converts a set of tiny per-mutation markets into one addressable population, and that is a much better business than sequential bespoke edits. It is also the argument that justifies the technical difficulty. The counterweight is that conventional AAV gene addition already delivers a working gene copy without any of this complexity, and beats it on maturity everywhere except durability in dividing tissue. The technology has to earn its complexity on that specific axis, and it has not yet done so in a patient.
