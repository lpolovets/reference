---
number: 9
name: Antibody Fragment and Nanobody
part: 2
group: Engineered antibody formats
targets: [surface]
dosing: [daily, weekly]
cogs: low
maturity: proven
precedent: few
---

## Description
An antibody fragment keeps the binding function of an antibody and discards the rest. The common formats are the Fab at about 50 kilodaltons, the single-chain variable fragment at about 25 kilodaltons, and the single-domain antibody, often called a nanobody, at about 15 kilodaltons. Single-domain antibodies come from camelids and sharks, whose immune systems produce heavy-chain-only antibodies, so a single small domain does all the binding. Removing the Fc region changes almost everything about how the molecule behaves. It clears through the kidney in hours instead of weeks, it penetrates tissue far better because it is a fraction of the size, it recruits no immune effector functions, and it can be made in E. coli or yeast rather than mammalian cells, which cuts manufacturing cost by roughly an order of magnitude. Fragments are also unusually stable and are easy to string together, so they are the standard building block for multispecific constructs and for engineered cell therapy binding domains.

## Strengths and weaknesses
The strengths are penetration, cost, and modularity. A nanobody reaches into dense tissue and into epitopes a full antibody cannot access, such as enzyme active sites and receptor clefts, because it presents a small convex binding surface rather than a large flat one. Microbial manufacturing removes the mammalian cell culture cost and the viral clearance burden together. Their stability supports formats no full antibody tolerates, including inhaled and topical delivery. The weaknesses follow from the same properties. Half-life is hours rather than weeks, so anything chronic needs half-life extension through albumin binding, PEGylation, or fusion to an Fc region, which gives back some of the size advantage. There are no effector functions, which is a feature when you want pure blockade and a problem when you need target cell killing. Immunogenicity is a genuine concern for camelid-derived sequences, so humanization is standard, and caplacizumab carries anti-drug antibody rates that matter clinically. Renal accumulation is high, which makes the kidney a toxicity concern for anything with a payload.

## When to use
Use a fragment when tissue penetration or a hard-to-reach epitope is the problem, when you need rapid clearance for a safety reason, or when the delivery route rules out a large molecule. Imaging agents are a natural fit because fast clearance produces clean images within hours instead of days. Local delivery to the lung or eye suits the format, since the molecule is small and stable and systemic exposure is short. Fragments are also the default binding domain for CAR constructs and for multispecific engineering. Do not use one for a chronic systemic indication without a half-life extension strategy, or you will be dosing daily for a target that an ordinary antibody covers monthly. And if you need antibody-dependent cellular cytotoxicity or complement activation, this is the wrong format.

## Key numbers
Molecular weight about 15 kDa for a single-domain antibody, 25 kDa for a single-chain variable fragment, 50 kDa for a Fab, against 150 kDa for a full antibody · serum half-life typically 2–6 hours without extension, and days to weeks with albumin binding or Fc fusion · renal filtration cutoff is roughly 60 kDa, which is why everything below it clears fast · microbial expression at 1–10 g/L, with cost of goods roughly $5–20/g against $50–150/g for a mammalian antibody · tumor penetration several times deeper than a full antibody in tissue models · thermal stability often above 60 °C, supporting nebulization and long shelf life.

## Development path
Ordinary biologic requirements with a lighter CMC burden when the host is microbial, because there is no mammalian viral clearance package and no glycosylation to control. Endotoxin becomes a release specification instead. The two areas reviewers focus on are immunogenicity, given the non-human origin of the framework, and renal handling, since these molecules concentrate in the kidney and any conjugated payload concentrates with them. For inhaled or ocular products the device and the formulation become a substantial part of the filing. Precedent exists but is thinner than for monoclonal antibodies, with a modest number of approvals rather than hundreds.

## Examples
Caplacizumab (Cablivi), a nanobody against von Willebrand factor for acquired thrombotic thrombocytopenic purpura; ozoralizumab, a TNF-targeting nanobody approved in Japan; certolizumab pegol (Cimzia), a PEGylated Fab against TNF; ranibizumab (Lucentis), a Fab for intravitreal use in macular degeneration, where fast systemic clearance is a safety advantage; abciximab, an early Fab; and, outside therapeutics, the single-domain binders used in most CAR-T constructs and in a growing set of PET imaging agents.

## Economic profile
The cheapest antibody-derived format to manufacture by a wide margin, because microbial fermentation replaces mammalian cell culture and Protein A. That matters most where price sensitivity is real: large chronic populations, global health indications, and markets outside the US. It matters less in oncology, where cost of goods is a rounding error against price. The commercial history of the format is a caution: the technical advantages are genuine but the approvals are few, and several well-funded platform companies built on fragments have struggled to convert the platform into products. The most durable value has come from fragments used as components, in CAR constructs, bispecifics, and imaging agents, rather than as standalone drugs.
