---
number: 33
name: "Retrofit versus greenfield"
part: 7
group: "Delivery"
layer: ent
industries: [disc, proc, hybrid, log, bldg]
determinism: nrt
lockin: multi
maturity: std
---

## Description
A greenfield project designs the control system alongside the plant, so architecture, cable routes, and standards can be chosen freely. A retrofit installs new controls into a plant that is running, which changes almost every constraint: the existing installation has to be surveyed because the drawings are wrong, the new system has to interface with equipment that will not be replaced, and the cutover has to happen inside a shutdown window that production will not extend. Most automation spending is retrofit, because most plants already exist.

## Strengths and weaknesses
Greenfield's strength is that the right answer is available: a coherent architecture, one platform, and documentation that matches reality. Its weakness is that everything must be decided before anything is known about how the plant actually runs. Retrofit's strength is that the process is understood and the improvement can be aimed precisely at a known problem. Its weaknesses are the survey, the interfaces, and the window, and the third is usually what determines whether the project succeeds, since a cutover that overruns costs production directly.

## When to use
Plan retrofits around the shutdown calendar rather than around the engineering, and stage the work so that each shutdown delivers something complete rather than leaving a partial system running. Survey the existing installation properly and budget for it, because drawings that do not match the plant are the normal case and discovering that during cutover is the expensive way to find out. Run the new and old systems in parallel where the architecture allows it, since that converts a hard cutover into a switchover that can be reversed.

## Key numbers
Most automation spending going into existing plants rather than new ones, since most plants already exist · as-built drawings frequently inaccurate, making a physical survey a required rather than optional cost · cutover confined to a scheduled shutdown window that production will not extend · parallel running possible in some architectures, which converts an irreversible cutover into a reversible switchover · staged delivery across several shutdowns the usual arrangement on large retrofits.

## Examples
Control system migrations in process plants are the archetype, typically staged over several annual shutdowns with gateways connecting old and new during the transition. Machine retrofits in discrete manufacturing more often happen in a single weekend, which makes preparation and rehearsal the whole project.

## Economic profile
Retrofit engineering costs more per unit of function than greenfield, and the difference is survey, interfacing, and the constraints of working around production. What justifies it is that the alternative is not a greenfield plant but no improvement at all. The dominant financial risk is the cutover, since an overrun consumes production at full margin and can exceed the project's entire budget in a few days. That asymmetry is why experienced buyers pay for rehearsal, parallel running, and contingency that look expensive on paper and are cheap against the exposure.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [Open Process Automation Forum (The Open Group)](https://www.opengroup.org/forum/open-process-automation-forum)
