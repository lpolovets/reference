---
number: 4
name: Vacuum Cup Grippers
part: 2
group: Suction & field
tasks: [pick, food]
versatility: broad
reliability: proven
maturity: std
cost: low
---

## Description
Vacuum cups do most of the picking in world logistics. Elastomer cups press against a surface, and vacuum from a venturi ejector or a pump lets atmospheric pressure itself clamp the object. One accessible face is the entire requirement. Cups attach in milliseconds, tolerate centimeters of positioning error, weigh grams, and cost dollars, and arrays of them lift everything from single envelopes to full appliance panels. Modern picking systems pair cup arrays with vision and flow sensing so each cup's grip can be verified.

## Strengths and weaknesses
Cups attach faster than any other gripping method, need only one accessible face, tolerate large pose errors, and add almost no moving mass. Failures are cheap because cups are consumables, and arrays scale the approach from grams to hundreds of kilos. The weaknesses mostly come down to leaks: porous, curved, dusty, oily, or crumpled surfaces don't hold vacuum. The compressed-air bill is real (venturis are convenient and thermodynamically wasteful). Grip is normal-force only, so shear and peel are the directions in which it fails. The hiss and the dust movement rule cups out of some cleanrooms. And in e-commerce, every dropped parcel is a leak that beat the grip.

## When to use
Default to cups for anything with one accessible, nonporous, reasonably smooth face (cartons, cases, panels, glass, sheet, most e-commerce goods), especially when attach speed and pose tolerance drive throughput. Arrays with per-cup flow sensing scale from envelopes to appliance panels. If the surface is porous, oily, crumpled, or perforated, or if the move loads the grip in shear or peel, look elsewhere: mechanical jaws for structured parts, foam-area vacuum for rough surfaces, magnets for ferrous sheet. Budget the compressed-air bill honestly, since smart ejectors do pay back, and track leak-driven drop rates per thousand picks as the real performance metric.

## Key numbers
Cup diameter 5–200 mm · vacuum 60–85% of atmosphere · holding force roughly 20–40 N per 40 mm cup after a safety factor of 2–4 · attach time 20–100 ms · array payloads from a few grams to several hundred kg · cups $2–50 each, ejector or pump $100–2k.

## Examples
Piab, Schmalz, and SMC ecosystems (cups, ejectors, sensors); Amazon Robin/Cardinal/Sparrow's suction arrays; every palletizer and carton erector; sheet-metal and glass handling lines; egg and produce packing with food-grade silicone cups.

## Economic profile
This is a consumables-rich oligopoly (Piab, Schmalz) with razor-blade economics, since cups wear out by design. On top of that sits an energy-efficiency upgrade cycle: smart ejectors with air-saving control, sold on opex reduction. Vacuum is the incumbent technology of robotic picking, so it's the benchmark. Any novel gripper pitch should state precisely which objects vacuum fails on and how many of those show up per thousand picks.

## Videos

- https://www.youtube.com/watch?v=7HVvyvJr_EM — Vacuum Suction Cups | How do they work & Selection guide | Tameson (Tameson, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=l-wZYJXpVFg — How VACUUM GENERATOR works? |Vacuum Ejector| (Animation | Sub) (Ms. Pneumatic, 8 minutes, 50k+ views)
- https://www.youtube.com/watch?v=VCGC-0mrN9I — Finding the Perfect Suction Cup for Your Application (Piab Vacuum Automation, 11 minutes, 1k+ views)

## Further reading

[Vacuum Knowledge Base: System Design and Suction Cup Theory (Schmalz)](https://www.schmalz.com/en-us/vacuum-knowledge/) · [Grasp Failure Constraints for Multi-Suction-Cup Grippers (arXiv)](https://arxiv.org/abs/2408.03498)
