---
number: 15
name: Automatic Tool Changers
part: 6
group: Infrastructure
tasks: [proc, asm, pick]
versatility: univ
reliability: proven
maturity: std
cost: med
---

## Description
A tool changer is a locking coupler between the wrist and the tool. It passes mechanical load, air, power, signals, and fieldbus through a repeatable interface, so one robot can swap between gripper, torch, and spindle in seconds. That turns the effector decision from an either/or into a portfolio: a docked rack of tools makes a single robot a multi-process cell. In humanoid strategy debates, the changer is the standing counterargument to the universal hand.

## Strengths and weaknesses
One robot can run many processes, which transforms capital utilization. Repeatability of microns preserves calibration across swaps, pass-through utilities avoid re-cabling, and manual versions serve low-frequency changeover cheaply. On the weak side, every coupling is a failure point, and pass-through pins and seals multiply the count (contamination in the interface is the classic fault). Swap time of 5–15 s taxes cycle-driven applications. Tool racks consume floor space, and the tool inventory multiplies cost. Dropped-tool safety logic has to be engineered rather than assumed.

## When to use
Pick a changer when one robot must run multiple processes (weld then handle, machine-tend then deburr) or serve a part mix no single tool covers, and when changeover happens every few minutes to hours rather than every cycle. Manual changers cover low-frequency swaps at a fraction of the cost. Engineer the dropped-tool safety and keep the pass-through interface clean, since contaminated pins are the classic fault. In cycle-time-critical single-process cells the 5–15 s swap and the added failure interfaces are pure tax, so bolt the one right tool on permanently, or add a second robot before you add a tool rack.

## Key numbers
Payload 5 kg on cobot-size couplers to over 1,000 kg on press-tending units · swap time 5–15 s automatic, a minute or more for a manual changer · repeatability of a few microns across swaps · rated for millions of lock cycles · coupler pair $500–5k, before the tools and the rack.

## Examples
ATI (the category leader) and Schunk/Stäubli changer lines from cobot-size to 1-tonne press-tending units, Kosmek and BL Autotec in Asia, OnRobot's quick changers for the cobot ecosystem, multi-tool welding-plus-handling cells throughout automotive.

## Economic profile
This is a quietly excellent components business: high margins, proven demand, and a position that wins regardless of which effector fashion prevails, because more tools per robot means more changers. The cobot wave added a low-end volume tier. Its strategic meaning in the humanoid era is real: if task-specific tools plus changers stay cheaper than dexterous generality, the changer takes the role of the hand.

## Videos

- https://www.youtube.com/watch?v=IRvmR05c074 — ATI Tool Changer Locking Mechanism -- How it Works (ATI Industrial Automation, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=kDP-oofDn4w — Why ATI Tool Changers? (ATI Industrial Automation, 6 minutes, 100k+ views)
- https://www.youtube.com/watch?v=-3SS8rRB5sA — Robot System Products Product Introduction, Tool Changers (Essential Robot Products, 3 minutes, 100k+ views)

## Further reading

[Robotic Tool Changer Selection Guide (ATI Industrial Automation)](https://www.ati-ia.com/products/toolchanger/tool_changer_selection.aspx) · [Tool Changer Applications and Engineering Considerations (ATI Industrial Automation)](https://www.ati-ia.com/products/toolchanger/applications/qc20article1.aspx)
