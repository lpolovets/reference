---
number: 23
name: Enzymatic DNA Synthesis
part: 6
group: Oligo synthesis
role: write
length: [vshort, short]
apps: [build]
cost: med
maturity: emerging
---

## Description
Enzymatic synthesis builds DNA with an enzyme in water instead of with phosphoramidite chemistry in organic solvent. The enzyme used is terminal deoxynucleotidyl transferase, which naturally adds nucleotides to the end of a DNA strand without needing a template. Left alone it would add many bases at once, so control comes from blocking each added nucleotide so that exactly one goes on per cycle, then removing the block before the next. Two designs exist: attaching the nucleotide to the enzyme itself, so one enzyme adds one base and then stalls until it is cleaved away, or using a chemically blocked nucleotide with a small reversible group. Either way the cycle is add, wash, deblock, wash, in aqueous buffer at mild pH. The attraction is that DNA is much more stable in these conditions than under the repeated acid exposure of phosphoramidite chemistry, which is what limits conventional synthesis length.

## Strengths and weaknesses
The strengths are potential length, environmental profile and compatibility with biology. Removing acidic deprotection removes depurination, which is the damage that caps phosphoramidite length, so longer products should be achievable in principle. The process runs in water with no acetonitrile and no hazardous solvent waste, which matters increasingly at industrial scale and is a genuine regulatory and cost advantage. Aqueous mild conditions are compatible with enzymatic assembly and with benchtop instruments that do not need solvent handling. The weaknesses are that the promise is largely unrealized commercially. Per-cycle efficiency has been harder to push to phosphoramidite levels than expected, and since yield is efficiency to the power of length, a small deficit compounds badly. Modified backbones such as phosphorothioates, which the therapeutic oligonucleotide industry depends on, are not straightforward enzymatically. Products and error rates from shipping systems have not yet clearly beaten the incumbent.

## When to use
Today, use enzymatic synthesis where its practical advantages apply rather than where its theoretical ones do: benchtop instruments that let a laboratory make its own oligos overnight without solvent infrastructure, and applications where avoiding hazardous waste matters. Continue to use phosphoramidite chemistry for anything requiring modified backbones, high purity per sequence, or established regulatory precedent, which covers all therapeutic oligonucleotides. Watch per-cycle efficiency as the number that decides whether the technology displaces the incumbent, since it determines achievable length, and treat length claims without a stated efficiency and full-length yield as marketing. For a laboratory considering a benchtop synthesizer, the question is turnaround time against outsourcing, not cost per base, because at low volume the fixed costs dominate either way.

## Key numbers
Runs in aqueous buffer at mild pH with no organic solvent, against large acetonitrile volumes for phosphoramidite chemistry · removing acidic deprotection removes depurination, which is what caps conventional synthesis length · per-cycle efficiency must approach phosphoramidite's very high figures to compete, since full-length yield is efficiency to the power of length · modified backbones including phosphorothioates are difficult enzymatically · benchtop systems deliver oligos overnight without solvent infrastructure · commercial products exist but have not displaced phosphoramidite for any major application.

## Failure modes
The compounding arithmetic is unforgiving and is where most optimism has foundered: an enzymatic cycle a fraction of a percent less efficient than a chemical one gives dramatically less full-length product at 200 bases, so "comparable efficiency" is not comparable at length. Incomplete deblocking leaves chains unable to extend, producing truncations, and the capping step that makes phosphoramidite truncations clean is not straightforward to replicate enzymatically, so deletion mutants are a bigger risk. Enzyme activity varies with sequence, particularly with secondary structure and homopolymers. Scaling from a demonstration to reproducible manufacturing has been the practical barrier, and several well-funded efforts have taken far longer than projected.

## Examples
DNA Script's benchtop synthesizers, which put overnight oligo production in a laboratory without solvent handling; Ansa Biotechnologies and Molecular Assemblies, pursuing longer products and different blocking strategies; Twist and other established suppliers investing in enzymatic routes alongside their array businesses; and the DNA data storage efforts, which need synthesis cost far below anything current chemistry offers and are a major driver of interest in the approach.

## Economic profile
A technology that has attracted substantial investment on a clear thesis, replacing a forty-year-old chemistry with a cleaner and potentially longer one, and has consistently taken longer to deliver than expected. The environmental argument is strengthening as oligonucleotide therapeutics scale and solvent waste becomes a real manufacturing cost. The market it would unlock, DNA data storage, needs cost reductions of several orders of magnitude that no current approach achieves. For an investor, the discriminating question is per-cycle efficiency and full-length yield at a stated length, not cost per base in isolation, because those two numbers determine whether the technology can address any of the applications that matter.
