---
number: 10
name: HDR Knock-In
part: 2
group: Templated editing
acts: seq
cargo: [small, large]
reach: [exvivo]
maturity: proven
clinical: trials
---

## Description
Homology-directed repair knock-in uses the cell's own high-fidelity repair pathway to write a supplied sequence into the genome. A nuclease cuts the target site, and a donor template carrying the desired sequence flanked by arms matching the DNA on either side of the cut is provided alongside. The cell repairs the break by copying from the template, installing whatever the template contains. This was the original way to make a precise edit and it remains the standard method for inserting anything larger than prime editing can handle, from a tagged protein in a research cell line to a full chimeric antigen receptor gene placed at a chosen locus in a T cell. The donor can be a short single-stranded oligonucleotide for small changes or a long double-stranded template, delivered as plasmid, as PCR product, or packaged in AAV, for inserting a whole gene.

## Strengths and weaknesses
The strength is cargo size: this is the only well-established way to insert several kilobases at a defined location, and inserting a CAR gene at a chosen site rather than letting a virus put it somewhere random is a real advantage for consistency and safety. The template can carry anything. The weakness that governs everything is that homology-directed repair only operates in dividing cells, during the S and G2 phases of the cell cycle, and it competes with the much faster non-homologous end joining pathway. In practice that means efficiency is low, typically well under 20% and often single digits, with the majority of edited alleles receiving a disruptive insertion or deletion instead of the intended sequence. In non-dividing cells such as neurons, muscle and hepatocytes, the pathway is essentially unavailable, which removes most in vivo applications. Delivering a long donor template is its own problem, and AAV-delivered donors add cost and immunogenicity.

## When to use
Use homology-directed repair knock-in when you need to insert more than about a hundred bases at a specific site and the cells divide, which in practice means ex vivo work. Placing a CAR gene at a defined locus is the main clinical application and it is a good one, because it removes the random integration risk of lentiviral delivery and gives more uniform expression. For research, it remains the standard method for tagging endogenous proteins. Do not plan on it for non-dividing tissue in vivo, where the pathway does not function and a serine integrase or a conventional gene addition approach is the realistic route. If the change is smaller than about a hundred bases, prime editing is usually better: comparable or higher efficiency, far cleaner products, no donor template, and it works in non-dividing cells.

## Key numbers
Only active in dividing cells, during S and G2 phase · efficiency commonly under 20% and often in single digits, with disruptive insertions and deletions on most other alleles · single-stranded oligonucleotide donors work for changes up to roughly 100 bases; longer inserts need double-stranded templates or AAV delivery · insert sizes of several kilobases are routine, which is the main reason to use it · small-molecule inhibitors of the competing repair pathway can raise efficiency several-fold, at some cost in toxicity · used in several clinical cell therapy programs.

## Off-target and safety
Carries all the risks of the nuclease that makes the cut, since a double-strand break is required, plus donor-specific problems. Random integration of the donor template elsewhere in the genome occurs and has to be measured, and it is the reason plasmid donors are avoided clinically. Because the majority outcome at the target site is usually an insertion or deletion rather than the intended edit, the product is a mixed population and both the correctly edited and the disrupted alleles need characterization. Large deletions and loss of heterozygosity at the cut site are documented consequences that short-read sequencing misses. Where AAV is used to deliver the donor, integration of vector sequence at the cut site is common and must be assessed.

## Examples
CAR-T products with the receptor inserted at the T-cell receptor locus, which simultaneously knocks out the endogenous receptor and places the CAR under its natural regulation; the zinc finger programs that inserted a therapeutic gene at the albumin locus in liver, which showed how hard the approach is in non-dividing tissue; correction of sickle cell mutations in hematopoietic stem cells ex vivo; and the very large body of research use for endogenous protein tagging and isogenic line construction.

## Economic profile
Not a platform in itself so much as a technique used inside cell therapy manufacturing, so its economics are the economics of the cell process it sits in. The commercially interesting point is what it replaces: putting a CAR at a defined site by knock-in avoids lentiviral vector, which is typically 20–40% of cell therapy manufacturing cost and a recurring supply constraint. That saving is real but is partly given back by the low efficiency, since more starting cells and longer culture are needed to reach the same dose. Whether the trade is worth it depends on the specific process, and it is one of the more consequential manufacturing decisions in a cell therapy program.

## Further reading

[Methods for Enhancing Clustered Regularly Interspaced Short Palindromic Repeats/Cas9-Mediated Homology-Directed Repair Efficiency (Frontiers in Genetics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6590329/)
