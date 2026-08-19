---
number: 35
name: "Commissioning and acceptance testing"
part: 7
group: "Lifecycle"
layer: ent
industries: [disc, proc, hybrid, log, bldg]
determinism: nrt
lockin: open
maturity: std
---

## Description
Commissioning is the sequence that takes a built system to a producing one, and it is conventionally staged. A factory acceptance test exercises the system at the integrator's premises against simulated or partial I/O, so that faults are found where the engineers and their tools are. A site acceptance test repeats the relevant parts once installed, with real field devices. Loop checking verifies every signal individually from the field device to the display, which is tedious and is where most wiring and configuration errors are actually caught.

## Strengths and weaknesses
The strength of staged acceptance is that faults are found in the cheapest available place. A logic error found at a factory test costs engineering time; the same error found during startup costs production. Loop checking in particular has an unglamorous but consistently high yield. The weakness is that these tests are compressed when the project is late, and they are the easiest thing to compress because their value is invisible until skipped. A factory test run against a system that is not finished tests nothing and provides false assurance.

## When to use
Run a factory acceptance test on anything complex enough that finding faults on site would be expensive, and insist that the system actually be complete for it. Check every loop rather than sampling, since the errors are individually trivial and collectively guarantee a bad startup. Protect the acceptance schedule when the project slips, because compressing it moves fault-finding into the most expensive phase. Require the plant's own operators and maintenance staff to participate, since acceptance is also the point at which knowledge transfers.

## Key numbers
Faults found at factory test costing engineering time and the same faults found at startup costing production · loop checking verifying every signal end to end rather than sampling, which is where most wiring errors surface · acceptance testing the first activity compressed when a project runs late, and the most expensive one to compress · operator and maintenance participation the practical mechanism of knowledge transfer · documentation completeness at handover determining whether the plant can maintain the system independently.

## Examples
Staged factory and site acceptance testing is standard practice on process control projects and less consistently applied in discrete manufacturing, where machines are more often shipped and commissioned in one step. Regulated industries add qualification stages on top with formal documentation requirements.

## Economic profile
Commissioning is the phase where project overruns actually materialize, because it is last and absorbs every delay upstream. Money spent on preparation, rehearsal, and complete factory testing reliably returns more than its cost by shortening the on-site phase, which is the expensive one. The other economic function of commissioning is knowledge transfer, and skipping it produces a plant that depends on the integrator indefinitely, which is a recurring cost that appears in the maintenance budget for years and is never attributed to the decision that caused it.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [Manufacturing Enterprise Solutions Association (MESA International)](https://www.mesa.org/)
