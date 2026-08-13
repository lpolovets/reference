---
number: 13
name: CRISPR Interference
part: 3
group: Expression control
acts: expr
cargo: [mid]
reach: [research, exvivo]
maturity: emerging
clinical: none
---

## Description
CRISPR interference turns a gene down without changing a single base. It uses a Cas9 with both nuclease domains disabled, so the protein still finds and binds its target under guide RNA direction but cannot cut. Binding alone at a promoter physically blocks the transcription machinery, and fusing a repressor domain such as KRAB to the dead Cas9 makes the silencing much stronger by recruiting the cell's own repressive chromatin machinery. The result is a programmable dimmer switch: choose a guide, get 80–95% knockdown of that gene's expression, with the DNA sequence untouched. Because the mechanism is binding rather than cutting, several genes can be repressed at once by supplying several guides, with none of the translocation risk that multiplex cutting creates. It is one of the most widely used tools in functional genomics, because a genome-scale library of guides can knock down every gene in the genome one cell at a time.

## Strengths and weaknesses
The strengths are reversibility, multiplexing, and dose control. Nothing permanent happens, so removing the machinery restores normal expression, and the degree of knockdown can be tuned by guide choice rather than being all or nothing. Multiplexing is genuinely safe here, unlike with nucleases. It also silences non-coding elements and regulatory regions that a knockout cannot address cleanly. The weaknesses are that it requires continuous presence and that it is a research tool clinically. Sustained repression means sustained expression of a large bacterial fusion protein, which is an immunogenicity problem in vivo and requires a vector that keeps expressing. At roughly 5 kilobases for dead Cas9 plus a repressor domain, it does not fit in AAV with a guide cassette. Off-target binding is more permissive than off-target cutting, because binding tolerates more mismatches than cutting does, so specificity assessment differs from a nuclease's.

## When to use
Use CRISPR interference in research whenever you want to reduce a gene's expression reversibly, and particularly for genome-scale screens, where it has largely replaced RNA interference because the knockdown is stronger and the off-target profile is better understood. It is the right tool for essential genes, where a knockout kills the cell before you can measure anything, and for studying regulatory elements. For therapeutics, the honest position is that the epigenetic editing approach described separately is the more credible clinical route, because it makes a durable change and then goes away, while CRISPR interference has to stay resident. If continuous repression is genuinely what you want in a patient, the immunogenicity and delivery burden of a permanently expressed bacterial protein is the problem to solve first.

## Key numbers
Dead Cas9 plus a KRAB repressor is roughly 5 kb, above single-AAV capacity with a guide cassette · knockdown typically 80–95% of transcript, tunable by guide position relative to the transcription start site · effect requires continuous presence of the machinery and reverses when it is removed · multiplexes freely, with no translocation risk since nothing is cut · genome-scale libraries cover every gene, which is the dominant research application · no clinical programs using persistent CRISPR interference.

## Off-target and safety
The safety picture is dominated by what is absent: no double-strand breaks, so no insertions and deletions, no large deletions, no translocations, and no p53 activation. What replaces it is binding specificity, which behaves differently from cutting specificity. Dead Cas9 binds many more sites than a nuclease cuts, because binding tolerates mismatches that prevent cleavage, so the relevant assay is chromatin immunoprecipitation sequencing to find binding sites rather than a cutting off-target assay. Most of that off-target binding has no functional consequence, since binding away from a promoter usually does not change expression, but the assessment is different work. For any in vivo use, sustained expression of the bacterial protein is the main safety concern.

## Examples
Genome-scale CRISPR interference screens, which are now standard in functional genomics and have mapped essential genes across hundreds of cell lines; Perturb-seq and related methods that combine CRISPR interference with single-cell RNA sequencing to read the full transcriptional consequence of knocking down each gene; and inducible systems where the repression can be switched on and off with a small molecule, used to study genes whose loss is lethal.

## Economic profile
Primarily a research tools market rather than a therapeutic one, and a large and healthy one: guide libraries, screening services, and the associated sequencing are a real business, and the technology has become infrastructure for target discovery across the industry. The therapeutic value is mostly indirect, through the targets that screens identify, rather than through CRISPR interference itself becoming a drug. Companies positioning it as a therapeutic platform generally end up moving toward epigenetic editing, because a hit-and-run mechanism that leaves nothing behind is a far better product than one requiring permanent expression of a foreign protein.
