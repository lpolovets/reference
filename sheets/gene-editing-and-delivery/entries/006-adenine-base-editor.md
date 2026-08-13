---
number: 6
name: Adenine Base Editor
part: 2
group: Base editors
acts: seq
cargo: [mid]
reach: [exvivo, liver]
maturity: emerging
clinical: trials
---

## Description
An adenine base editor converts an A-T base pair into a G-C base pair without cutting both strands of DNA. It is built from a Cas9 that has been disabled so it nicks only one strand, fused to an enzyme that chemically deaminates adenine. The Cas9 part positions the complex at the target and unwinds the DNA, exposing a short single-stranded window of about five bases; any adenine in that window is converted, and the cell's repair machinery then fixes the other strand to match. The deaminase used is engineered rather than natural, since no enzyme was known that acts on adenine in DNA, and it was evolved in the laboratory from a bacterial RNA-editing enzyme. Because there is no double-strand break, the editing is far cleaner: no random insertions and deletions, no large deletions, no translocations, and no p53 activation. This is the single most consequential difference between base editing and conventional nucleases.

## Strengths and weaknesses
The strengths are precision and safety. Editing efficiencies are high, product purity is excellent with very few unintended insertions or deletions, and the A-to-G change addresses a large fraction of known pathogenic point mutations, since G-to-A transitions caused by spontaneous deamination are the most common class of human disease mutation. Reversing them is exactly what this tool does. The weaknesses start with size: at roughly 5.2 kilobases the editor does not fit in AAV, which forces split-intein dual vectors or non-viral delivery. Bystander editing is the characteristic failure mode, where a second adenine within the same five-base window is also converted, producing an unintended change alongside the intended one. The PAM requirement has to place the target base in that narrow window, so many mutations have no usable editing site. And the deaminase can act on RNA as well as DNA, causing widespread transcriptome-wide off-target editing that is invisible to any DNA-based off-target assay.

## When to use
Use an adenine base editor when the therapeutic change is a specific G-to-A mutation that needs reverting, or when you want to install a stop codon or disrupt a splice site cleanly without a double-strand break. It is the tool of choice for point-mutation diseases where a suitable PAM exists. In practice it is also used for gene knockout by installing splice-site disruptions, which is cleaner than cutting. Check three things early: whether a PAM places the target adenine in the editing window, whether other adenines sit in that window and what the bystander edits would do, and how you will deliver 5.2 kilobases. If the target is in the liver, lipid nanoparticle delivery of messenger RNA solves the size problem entirely and is the reason most clinical base editing is hepatic.

## Key numbers
Coding sequence roughly 5.2 kb, above single-AAV capacity of about 4.7 kb · editing window typically 4–8 bases wide, centered a fixed distance from the PAM · on-target editing efficiency commonly 50–80% in vivo in liver, higher ex vivo · insertion and deletion byproducts usually under 1%, against 50% or more for a nuclease · G-to-A transitions account for roughly half of known pathogenic point mutations, which is the addressable space · first clinical dosing in 2022 · several programs in trials, none approved.

## Off-target and safety
Cleaner than a nuclease on DNA and messier in a way nucleases are not. On the DNA side, guide-dependent off-target editing occurs at sites the Cas9 domain visits, and is measured the same way as for a nuclease. There is also guide-independent DNA editing, where the deaminase acts on transiently single-stranded DNA anywhere in the genome, which requires a different assay entirely. The distinctive problem is RNA. The deaminase edits RNA promiscuously, producing thousands of transcriptome-wide changes that no DNA off-target assay detects, and engineered variants with reduced RNA activity exist and should be used. Because bystander editing within the window is expected rather than exceptional, the required characterization includes the full spectrum of products at the target site, not just the intended one, and reviewers will ask what each bystander product does to the protein.

## Examples
VERVE-101 and VERVE-102, which base-edit the PCSK9 gene in the liver to lower cholesterol permanently after a single infusion; BEAM-101 for sickle cell disease, which edits the promoter regions controlling fetal hemoglobin ex vivo; base-edited allogeneic CAR-T from Beam and from Great Ormond Street Hospital, which used base editing rather than cutting specifically to avoid translocations from multiplex edits; and the bespoke base editing therapy designed and dosed for a single infant with a urea cycle disorder within about six months of diagnosis.

## Economic profile
The delivery route determines the economics entirely. Base editing to the liver by lipid nanoparticle is cheap in manufacturing terms, a few thousand dollars a dose, off the shelf, and scalable to large populations, which is why the cardiovascular programs are the most commercially ambitious gene editing efforts in existence. Base editing anywhere else requires either ex vivo manufacturing, with cell therapy economics, or dual AAV, with gene therapy economics and a doubled vector cost. The intellectual property is concentrated and has been licensed at high value, which matters more here than for the older nucleases because the platform is newer and the patents are less contested.
