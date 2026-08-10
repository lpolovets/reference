---
number: 23
name: Pneumatic Artificial Muscles (McKibben)
part: 7
group: Artificial muscle
applications: [soft, legged]
density: high
backdrive: exc
precision: coarse
cost: vlow
---

## Description
A McKibben muscle is a rubber bladder in a braided sleeve. Inflate it and the braid geometry converts radial expansion into axial contraction, up to ~25% strain, with force-per-weight far above what electric motors manage. It was invented for prosthetics in the 1950s (McKibben). The pneumatic muscle contracts, softens, and springs like the biological original, and it costs almost nothing to make. It remains soft robotics' default power source and the usual "muscle" in biomimetic projects.

## Strengths and weaknesses
Force density and inherent compliance are both excellent, the muscle is naturally safe around humans, it tolerates misalignment (it's a rope that pulls), it's water- and dirt-proof, and it's extremely cheap. The weaknesses: it needs compressed air, so the compressor, valves, and tether are the real system. Force fades nonlinearly as the muscle contracts. You need antagonistic pairs to move in both directions. Hysteresis and air compressibility make precision very hard. And bladder fatigue is a genuine wear item.

## When to use
Use McKibben muscles when compliance and force-per-gram dominate, precision doesn't, and compressed air is already on site or a tether is acceptable: compliant tensioning and special machines on factory air, wearable and rehabilitation prototypes, bio-inspired research where muscle-like springiness is the point. Design in antagonistic pairs and treat bladder fatigue as a scheduled consumable. Avoid them on untethered robots, where the compressor, valves, and hoses are the real system and cancel the mass advantage. Avoid them for anything needing repeatable position or force, too, since hysteresis and air compressibility get in the way. In that case use electric QDD joints or plain cylinders running to stops.

## Key numbers
Contraction up to about 25% of length · operating pressure 4–6 bar on plant air · peak pull roughly 600 N at 10 mm muscle diameter to 6 kN at 40 mm · force falls toward zero as contraction approaches its limit · the muscle costs a few dollars, and the compressor and valves are the real system cost.

## Examples
Festo's Fluidic Muscle (the industrial productization) and its Airic's-arm demos, Shadow Robot's original air-muscle hand, countless bio-inspired legged and wearable prototypes, exosuit research (Harvard's soft exosuit lineage uses related pneumatics), Bridgestone's 1980s "rubbertuators."

## Economic profile
The muscle itself is nearly free. The pneumatic infrastructure is the entire cost, and it's the reason no untethered robot uses them at scale. Commercially they persist in the niches Festo serves (compliant tensioning, special machines) and in research. The investable adjacency is the valve and micro-compressor problem: whoever makes soft-robot pneumatics battery-portable would bring this whole class back.

## Suppliers
[Festo](https://www.festo.com/) — the Fluidic Muscle, the industrial McKibben productization

## Videos

- https://www.youtube.com/watch?v=oBkdKeTJ5NY — McKibben Artificial Muscle - opensoftmachines (Open Soft Machines, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=sAHNJdxF6Cw — How to Build a McKibben Air Muscle (XYZAidan, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=PYSqkEhVe6k — Active Textile made of Thin McKibben Muscles (Suzumori Endo Robotics Laboratory, 2 minutes, 10k+ views)

## Further reading

[A Review of Pneumatic Artificial Muscle Actuators: Force Model and Application (Actuators via Virginia Tech)](https://vtechworks.lib.vt.edu/items/39bcc6a1-ad15-45ed-81d4-3e456070338b)
