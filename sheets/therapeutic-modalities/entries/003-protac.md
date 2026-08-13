---
number: 3
name: PROTAC Degrader
part: 1
group: Targeted degraders
targets: [intra, surface]
dosing: [daily]
cogs: vlow
maturity: emerging
precedent: none
---

## Description
A PROTAC is a single molecule with two binding ends joined by a linker. One end binds the target protein, the other binds an E3 ubiquitin ligase, and holding the two together lets the ligase tag the target for destruction by the proteasome. The molecule then comes off and does it again, so one PROTAC molecule can destroy many copies of the target. That catalytic behavior is the central difference from an inhibitor, which has to occupy the protein continuously to have any effect. Because the mechanism only needs a binding handle rather than a functional pocket, a weak binder at a site that does nothing on its own can still produce complete protein removal. Molecules run 700–1,100 daltons, well outside conventional oral drug space, and getting oral bioavailability out of something that size is the main chemistry problem the field has spent a decade on. Roughly 600 human E3 ligases exist and the great majority of clinical work uses just two of them, cereblon and VHL.

## Strengths and weaknesses
The strengths are reach and depth of effect. Removing a protein eliminates its scaffolding and protein-protein interaction functions, not only its enzymatic activity, which matters for targets where the enzymatic function was never the disease driver. Catalytic turnover means efficacy at sub-stoichiometric exposure, and the effect persists after the drug clears because the cell has to resynthesize the protein. Targets with no functional pocket become accessible, which is the entire argument for the modality. The weaknesses are pharmacokinetics and mechanism fragility. Molecules this large tend to have poor permeability and high efflux, so oral exposure is hard-won and often variable. The hook effect is a real dosing hazard: at high concentration the PROTAC saturates target and ligase separately instead of bridging them, so efficacy falls as dose rises, which inverts normal dose-finding. Resistance emerges through loss of the E3 ligase machinery rather than mutation of the target, so a tumor can escape by downregulating cereblon and become cross-resistant to every cereblon-based degrader at once. And ligase expression varies by tissue, which is both a selectivity opportunity and a source of unpredictable exposure-response.

## When to use
Use a degrader when the target is intracellular, disease-relevant, and either has no druggable pocket or has a non-enzymatic function that inhibition leaves intact. Scaffolding proteins and transcription factors are the natural cases. It is also worth considering when an approved inhibitor exists but resistance mutations have made it useless, since degradation often survives mutations that break inhibition. Do not reach for it when a conventional inhibitor already works: the chemistry is harder, the oral exposure is worse, and you inherit an unproven regulatory path for no benefit. Check that a suitable E3 ligase is expressed in the target tissue before starting, and plan for the hook effect in Phase 1 dose escalation, because a standard escalation design can walk straight past the effective dose and conclude the drug does not work.

## Key numbers
Molecular weight typically 700–1,100 Da, roughly double a conventional oral drug · about 600 human E3 ligases, with cereblon and VHL accounting for most clinical programs · catalytic, so target degradation is achievable well below 1:1 stoichiometry · degradation typically 80–95% of target protein at effective doses, with recovery over 24–72 hours as the cell resynthesizes · first PROTAC entered clinical trials in 2019 · no FDA approval as of this writing, with several programs in Phase 3 · cost of goods remains small-molecule scale, under a few dollars per dose.

## Development path
The least settled part of the modality. No PROTAC has been approved, so the first filings will establish what reviewers expect, and that uncertainty is a real cost for a program planning its pivotal package. The specific open questions are how much degradation-selectivity data is required across the proteome, how the hook effect should be characterized in dose-finding, and how to handle the fact that pharmacodynamics and pharmacokinetics are decoupled, which makes conventional exposure-response modeling misleading. CMC is ordinary small-molecule work apart from the synthesis being longer and lower-yielding than a typical drug. Expect the path to look like a conventional small molecule once two or three approvals exist, and expect the first movers to spend real calendar time on questions later programs will get for free.

## Examples
Vepdegestrant against the estrogen receptor and BMS-986365 against the androgen receptor are among the most advanced clinical programs. Arvinas, C4 Therapeutics, Kymera, and Nurix are the companies most associated with the approach, and essentially every large pharmaceutical company now has a degradation group. The intellectual ancestor is thalidomide, which turned out to work by redirecting cereblon to destroy transcription factors, a mechanism nobody understood until roughly 50 years after the drug was first sold.

## Economic profile
Cost of goods behaves like a small molecule, so the economics rest on development risk and target access. The strategic argument is the interesting one: degraders open targets that competitors cannot address at all, so a successful program starts with an unusually defensible position rather than as one of six inhibitors chasing the same kinase. Against that, the field has absorbed well over a decade of investment without an approval, and the clinical attrition so far has come from pharmacokinetics and tolerability rather than from the mechanism failing. For a company, the practical question is whether you have chemistry that can deliver oral exposure at 900 daltons, because that capability, and not the biology, is what has separated programs that reached Phase 3 from programs that stalled.

## Further reading

[Targeted protein degradation: elements of PROTAC design (Current Opinion in Chemical Biology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6930012/) · [Induced protein degradation for therapeutics: past, present, and future (Journal of Clinical Investigation)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10760958/)
