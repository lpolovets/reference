---
number: 1
name: Brushed DC Motor
part: 1
group: Electric rotary
applications: [mobile, soft]
density: low
backdrive: good
precision: coarse
cost: vlow
---

## Description
This is the simplest motor that works. Current flows through a wound rotor, and carbon brushes riding on a copper ring handle commutation mechanically. You get two wires, torque proportional to current, and no drive electronics beyond an H-bridge. Brushed DC did most of the twentieth century's actuation, and it still owns the bottom of the market, where a motor has to cost a dollar and spin as soon as you connect a battery.

## Strengths and weaknesses
It's about as simple and cheap as actuation gets. Torque is proportional to current, no commutation electronics are needed, and reversing or controlling it is easy. On the weakness side, brushes wear out after hundreds to thousands of hours, they arc, and they generate EMI and dust. Heat ends up in the rotor, which is the hardest place to remove it from, so continuous torque is capped. At any performance level that matters, a BLDC now beats brushed DC on every axis except price and simplicity.

## When to use
Pick brushed DC when the axis is intermittent-duty, cost-dominated, and coarse: a few hundred to a few thousand hours of life is acceptable, the BOM allows single dollars, and control is an H-bridge off a battery. Typical cases are toys, lids, low-end grippers, and prototype drivetrains. The coreless variant is worth its premium at low power when you need zero cogging and smooth motion, as in medical pumps and micro-mechanisms. Avoid brushed DC for continuous duty, tight thermal budgets, or any joint you plan to iterate toward higher performance, because rotor-trapped heat caps sustained torque and brush wear turns into a maintenance item. If you outgrow it, the usual upgrade is a small BLDC with a commodity FOC drive.

## Key numbers
Brush life several hundred to a few thousand hours · peak efficiency roughly 50–75% in small sizes, higher on coreless types · no-load speed typically 3,000–15,000 rpm · continuous torque well under the stall rating, since the heat sits in the rotor · unit cost under $1 at volume, $100 and up for precision coreless motors.

## Examples
Toys, seat adjusters, and appliance actuators by the billion; hobby gearmotors (Pololu-class) in education and prototyping robots; coreless brushed micromotors (Faulhaber, Maxon DCX) surviving in medical devices and precision niches where their zero-cogging smoothness matters.

## Economic profile
The industry is fully commoditized, with sub-dollar units at volume. The premium coreless niche (Maxon, Faulhaber) holds its margins through quality and documentation. In robotics BOMs the brushed motor is usually the placeholder that gets designed out as requirements harden, though for low-duty, cost-dominated axes it stays the rational choice.

## Suppliers
[maxon](https://www.maxongroup.com/) — premium coreless brushed and BLDC micromotors · [FAULHABER](https://www.faulhaber.com/) — precision micro drive systems

## Videos

- https://www.youtube.com/watch?v=CWulQ1ZSE3c — How does an Electric Motor work? (DC Motor) (Jared Owen, 10 minutes, 5m+ views)
- https://www.youtube.com/watch?v=8XF3LHvjieM — Basics of Brushed DC Motors - Another Teaching Moment | Digi-Key Electronics (DigiKey, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=wAtN3SEYSco — Brushed vs Brushless Motors - What's the difference? (CircuitBread, 5 minutes, 100k+ views)

## Further reading

[Motor Tutorials: Coreless DC Motor and Drive Basics (FAULHABER)](https://www.faulhaber.com/en/know-how/tutorials/)
