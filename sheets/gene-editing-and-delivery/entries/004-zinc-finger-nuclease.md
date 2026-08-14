---
number: 4
name: Zinc Finger Nuclease
part: 1
group: Protein-guided nucleases
acts: seq
cargo: [small]
reach: [exvivo, liver]
maturity: proven
clinical: trials
---

## Description
A zinc finger nuclease is a designed protein that reads DNA directly, without a guide RNA. Zinc finger domains are natural DNA-binding modules found throughout human transcription factors, each recognizing about three base pairs, and stringing four to six of them together produces a protein that binds a chosen 12 to 18 base sequence. Fusing that array to the FokI cutting domain makes a nuclease. FokI only cuts as a dimer, so the system is built as a pair: two zinc finger proteins bind opposite strands a short distance apart, the two FokI domains meet, and the DNA is cut between them. Requiring two independent binding events is what gives the system its specificity, since a single off-target binding does nothing. Zinc finger nucleases were the first genome editing tool used clinically, roughly a decade before CRISPR entered trials, and they retain a real advantage in size.

## Strengths and weaknesses
The strengths are compactness, specificity from the dimer requirement, and a fully human protein scaffold. Zinc fingers are human-derived, so immunogenicity is far lower than for bacterial Cas proteins, which matters for in vivo delivery where an immune response against the editor limits durability and safety. The pair is small enough to fit comfortably in AAV with room for regulatory elements. There is a longer clinical safety record than for any other editing platform. The weaknesses are engineering cost and targeting flexibility. Individual zinc fingers are not truly modular, because neighboring fingers influence each other's specificity, so designing a new pair is a screening and optimization exercise rather than an ordering exercise. That takes months and specialized expertise against days for a CRISPR guide, and it is the reason the field moved. Not every sequence can be targeted well, and multiplexing is impractical since each additional site needs another engineered pair.

## When to use
Use zinc finger nucleases when in vivo delivery, low immunogenicity, and small size matter more than the ability to retarget quickly. If a program has one target it will pursue for years, the months of protein engineering amortize to nothing and the advantages are real: a human-derived protein that fits in one AAV is a better in vivo editor than a bacterial one that barely fits. They are also worth considering when a regulatory package benefits from the longest clinical history in the field. Do not choose them for research, for screening, or for any application requiring more than one or two targets, where CRISPR is faster by orders of magnitude and cheaper by more than that. In practice the platform is now concentrated in a small number of companies with the engineering capability.

## Key numbers
Each zinc finger recognizes about 3 base pairs, with 4–6 fingers per protein giving a 12–18 base target · used as a pair, so the combined recognition site is 24–36 bases, which is longer than most CRISPR targets · coding sequence for a pair is small enough for a single AAV alongside regulatory elements · design and optimization takes months against days for a CRISPR guide · human-derived scaffold, so much lower immunogenicity than bacterial nucleases · first clinical use in 2009, roughly a decade before CRISPR · no approved product.

## Off-target and safety
The obligate dimer architecture is a genuine specificity advantage, since cutting requires two correct binding events at the right spacing, and a single mismatched binding produces nothing. Obligate heterodimer FokI variants further reduce the chance of a single protein homodimerizing and cutting at a half-site. Against that, off-target detection for zinc fingers is harder than for CRISPR, because there is no guide sequence to search the genome against computationally, so identification relies more heavily on unbiased experimental methods. The low immunogenicity of the human scaffold is a real safety advantage in vivo, where an immune response against a bacterial editor can eliminate the edited cells. The same double-strand break consequences apply as for any cutting nuclease.

## Examples
The SB-728 program targeting CCR5 in T cells as an HIV therapy, which was the first genome editing therapy in humans; the SB-913 and SB-318 in vivo programs for mucopolysaccharidosis, which delivered zinc finger nucleases to the liver by AAV to insert a therapeutic gene at the albumin locus; and continuing work using zinc finger repressors rather than nucleases, where the DNA-binding domain is fused to a repressor to turn a gene down without cutting it.

## Economic profile
The engineering barrier concentrates this platform in very few hands, which is both its commercial weakness and its remaining moat. A company that can design zinc fingers reliably has something competitors cannot buy off a website, unlike a CRISPR guide, but the addressable market is limited to applications where the in vivo advantages justify the design cost. The clinical results have been mixed, with the mucopolysaccharidosis in vivo programs producing disappointing efficacy, and the field's capital has largely followed CRISPR. The most durable use of the zinc finger scaffold now looks likely to be as a DNA-binding domain for expression control rather than as a nuclease.

## Videos

- https://www.youtube.com/watch?v=JArLDYv0Qw4 — ZINC FINGER NUCLEASES - GENE EDITING EXPLAINED! (Genomics Gurus, 12 minutes, 50k+ views)
- https://www.youtube.com/watch?v=zDkUFzZoQAs — Method of the Year 2011: Gene-editing nucleases - by Nature Video (nature video, 4 minutes, 100k+ views)

## Further reading

[Recent developments and clinical studies utilizing engineered zinc finger nuclease technology (Cellular and Molecular Life Sciences)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11113831/) · [Zinc-finger nucleases for somatic gene therapy: the next frontier (Human Gene Therapy)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3159524/)
