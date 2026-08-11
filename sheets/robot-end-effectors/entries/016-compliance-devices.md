---
number: 16
name: Compliance Devices (RCC & Active)
part: 6
group: Infrastructure
tasks: [asm]
versatility: mod
reliability: proven
maturity: common
cost: med
---

## Description
These devices build forgiveness into the tool mount. A remote-center-compliance (RCC) device is an elastomer-and-shim structure between the wrist and the tool. It puts the compliance's rotation point at the part's tip, so a slightly-misaligned peg self-centers into its hole and jamming contact forces turn into corrective motion. The design is purely passive, was invented at Draper Labs in the 1970s, and still solves insertion problems that vision and force control handle with far more expense. Active versions (voice-coil or pneumatic axes) add controlled compliance and position feedback.

## Strengths and weaknesses
It solves peg-in-hole misalignment mechanically, in microseconds, with zero sensing, zero programming, and zero compute, and the hardware is cheap, robust, and maintenance-light. The catch is that each device is tuned per task: the compliance center's location depends on part length, so a tool change may need a device change. Passive also means uncontrolled, since it always complies, including when you wish it wouldn't. The misalignment capture range is limited, elastomers age, and modern force-controlled robots absorb some of its role in software.

## When to use
Pick an RCC for defined, repeated insertions with small misalignment (connectors, dowels, bearings, shafts), where a $1–3k passive device replaces a $15k force-control package and reacts in microseconds instead of control-loop time. Size the compliance center to the part length and it simply works. Crash-protector variants are cheap insurance on any tool worth more than they are. If you have varied insertion families, each part length needs its own tuning, which gets awkward. If misalignment runs past the capture range, you need a search strategy anyway. And if the arm's built-in force control already handles the insertion, you may not need one, though check the passive device's price before assuming software is cheaper.

## Key numbers
Lateral compliance roughly ±1–3 mm and angular ±1–3° · compliance center projected 50–300 mm ahead of the mount, matched to part length · reacts mechanically in microseconds, against milliseconds for a control loop · payload 1–30 kg · passive device $1–3k, against about $15k for a force-control package.

## Examples
ATI and Schunk RCC lines descended from the Draper design, insertion stations in connector and bearing assembly, active compliance flanges (FerRobotics, PushCorp — shared with finishing), spring-loaded "crash protectors" (the RCC's cousin that saves tools from collisions), dowel and shaft-fitting cells everywhere.

## Economic profile
This is a small, permanent market with the best cost-benefit ratio in assembly automation, since a $1–3k passive device routinely replaces a $15k force-control package for defined insertions. Its intellectual legacy is larger than its revenue. The RCC's lesson (put intelligence in the mechanics when you can) is the founding argument for underactuated hands and soft robotics, which covers a good share of this sheet.

## Videos

- https://www.youtube.com/watch?v=qFTUFHGGZIg — ATI Industrial Automation Compensator Remote Center Compliance Device (A3 Robotics, 1 minute, 10k+ views)
- https://www.youtube.com/watch?v=9jjtZlPWMiY — Compliant Peg-in-Hole Assembly Using a Very Soft Wrist (Kensuke Harada, 2 minutes, 1k+ views)

## Further reading

[How Remote Center Compliance Compensators Work (ATI Industrial Automation)](https://www.ati-ia.com/products/compliance/Compensator_product_desc.aspx) · [Selecting a Compensator: Misalignment and Clearance Calculation (ATI Industrial Automation)](https://www.ati-ia.com/products/compliance/compensator_selection_1.aspx)
