---
number: 29
name: "MES and manufacturing operations management"
part: 6
group: "Operations software"
layer: ent
industries: [disc, proc, hybrid, log]
determinism: nrt
lockin: single
maturity: std
---

## Description
A manufacturing execution system sits between the control layer and the enterprise resource planning system, converting an order into work instructions and reporting back what was actually made. It tracks material genealogy, enforces the route a product must take, records who did what, and provides the electronic batch record that regulated industries require. The reference model that structures this layer defines the boundary between business planning and manufacturing operations, and that boundary is the useful part: it says what belongs in the enterprise system and what belongs on the plant floor.

## Strengths and weaknesses
The strength is traceability and enforcement. In a regulated plant the system is what makes a batch releasable, and in any plant it is what allows a defect found later to be traced to a specific lot, machine, and operator. The weakness is that these projects are hard, and the difficulty is organizational rather than technical: the system encodes how a plant actually works, so implementing one surfaces every undocumented practice and every disagreement about who owns a decision. Projects fail on that far more often than on software.

## When to use
Use one where traceability is required by regulation, where recall exposure is significant, or where scheduling and material movement are complex enough that spreadsheets have stopped working. Implement it in stages against specific problems rather than as a plant-wide program, since the staged approach delivers value earlier and surfaces the organizational disagreements in smaller pieces. Make sure the plant's actual process is documented before automating it, because encoding a process nobody agrees on produces a system nobody uses.

## Key numbers
Sits between the enterprise system and the control layer, with the reference model defining that boundary explicitly · electronic batch records required in regulated manufacturing rather than optional · material genealogy linking finished product back to lot, machine, and operator, which is what bounds a recall · implementation timelines measured in quarters to years, dominated by process definition rather than by software · the most common failure mode being organizational disagreement rather than technical shortfall.

## Examples
Pharmaceutical and food manufacturers use these systems for batch records and traceability under regulatory requirement. Automotive and electronics manufacturers use them for genealogy and for enforcing assembly sequence. The ISA-95 model is the common reference for the layer boundaries.

## Economic profile
The return comes from three places: recall scope reduced by better genealogy, quality escapes caught earlier, and scheduling improved by knowing what is actually happening rather than what was planned. The first is the largest and the least predictable, since a recall bounded to one lot rather than a month's production is a difference of orders of magnitude in cost. Against that, implementation is expensive and the failure rate is high, and the projects that succeed are consistently the ones scoped to a specific measurable problem rather than sold as a plant-wide transformation.

## Further reading
[Manufacturing Enterprise Solutions Association (MESA International)](https://www.mesa.org/) · [ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards)
