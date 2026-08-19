---
number: 23
name: "Functional safety (SIL and PL)"
part: 5
group: "Machine safety"
layer: control
industries: [disc, proc, hybrid, log]
determinism: ms10
lockin: open
maturity: std
---

## Description
Functional safety is the discipline of establishing how reliable a protective function has to be and then demonstrating that the implementation meets it. A risk assessment considers the severity of the harm, how often people are exposed, and whether the hazard can be avoided, and produces a required level: a safety integrity level in the process world, a performance level in the machinery world. The implementation is then evaluated against that target using the components' failure rate data, the architecture's redundancy, the proportion of faults the design detects, and how often it is proof tested.

## Strengths and weaknesses
The strength is that it converts an argument about whether something is safe enough into a calculation with stated assumptions, which can be reviewed and challenged. It also allocates effort sensibly, since a low-risk function does not have to be engineered like a high-risk one. The weaknesses are that the calculation rests on failure rate data whose provenance is often weak, and that a required level determined by a conservative assessor can add cost out of proportion to the actual risk. Proof testing is the commonly neglected part, since a calculation assuming annual testing is invalid if nobody tests.

## When to use
It applies to any protective function on machinery or process plant, and the level follows from the assessment rather than from preference. Do the assessment before selecting equipment, since the required level determines architecture, and retrofitting a higher level is expensive. Record the assumptions, particularly the proof test interval and the demand rate, because those are what an auditor will check and what a later modification will invalidate. Keep the safety function as simple as the risk allows, since complexity is itself a source of failure.

## Key numbers
Risk assessment inputs of severity, frequency of exposure, and possibility of avoidance, which together set the required level · higher levels demanding redundancy, higher diagnostic coverage, or both · component failure rate data and diagnostic coverage as the inputs to the verification calculation · proof test interval an explicit assumption in the calculation, so missed testing invalidates the result · IEC 61508 the base standard, with sector-specific standards derived from it for machinery and process.

## Examples
IEC 61508 is the parent standard, with IEC 62061 and ISO 13849 covering machinery and IEC 61511 covering the process industries. Third-party assessors certify both components and complete installations, and component manufacturers publish the failure rate data their customers need for the verification.

## Economic profile
Compliance is not optional, so the economics are about doing it efficiently rather than about whether to do it. The largest avoidable cost is a risk assessment done late, because a required level discovered after equipment selection forces rework of both hardware and validation. The second is over-specification, since assessors defaulting to a higher level than the risk warrants add redundancy and testing that costs money every year thereafter. Against both, the cost of an incident is large enough and the legal exposure direct enough that under-specification is not a rational saving.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [Machine guarding overview (US Occupational Safety and Health Administration)](https://www.osha.gov/machine-guarding)
