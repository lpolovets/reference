---
number: 26
name: Carbon-Fiber Composites
part: 6
group: Polymer composites
properties: [light, stiff, strong]
strength: vhigh
temperature: mod
processing: [layup, mold, am]
cost: med
---

## Description
A carbon-fiber composite is 55–65% by volume of carbon filament held in a thermoset resin, usually epoxy, and the fiber does essentially all the work. Standard-modulus fiber runs about 230 GPa and 4,000–4,900 MPa at a density of 1.8 g/cm³, and a laminate built from it lands near 1.55–1.6 g/cm³. A quasi-isotropic layup, meaning plies at 0, ±45, and 90 degrees so the panel behaves the same in every in-plane direction, reaches roughly 390 kN·m/kg of specific strength, about seven times mild steel and nearly twice titanium. The property that people get wrong is stiffness. Unidirectional carbon is genuinely in a class of its own at 85–125 GPa per g/cm³, but a quasi-isotropic laminate lands near 30, only slightly above the 26 that steel, aluminum, titanium, and magnesium all share, so the stiffness win arrives only when the load path is one direction and you can point the fibers along it. Everything gets shaped by layup, winding, or molding rather than by cutting, and the manufacturing-processes sheet covers those processes; here the point is that the process sets the fiber volume fraction, and the fiber volume fraction sets the properties.

## Strengths and weaknesses
Nothing else on this sheet gets close on strength per kilogram, and the axial thermal expansion is near zero, which is why satellite benches and metrology frames are carbon. It also does not fatigue the way aluminum does, so a well-designed carbon structure can run to its design life without the inspection interval an aluminum one needs. The weaknesses are cost, direction, and the failure mode. Standard-modulus 24k–50k tow costs $15–30/kg and aerospace-qualified intermediate-modulus prepreg $60–200/kg, before an autoclave cycle measured in hours, freezer storage at -18 °C, and an out-time clock that starts when the roll leaves the freezer. Properties in the through-thickness direction come from the resin alone, so a laminate is roughly a fiftieth as strong through its thickness as along the fibers, which is where damage lives. And there is no yielding at all: the laminate is linear to failure and then it is in pieces, so every design decision has to be made on a strain allowable rather than on a plastic reserve you can count on.

## When to use
Use carbon when mass is the binding constraint and someone will pay for it, and when the load path is well enough understood to point fibers along it: aircraft primary structure, satellite and launch structure, pressure vessels, racing, prosthetics, high-end sporting goods. A useful test is cost per kilogram of mass removed. Advanced high-strength steel takes weight out of a vehicle at roughly $2–4/kg saved, aluminum at $8–15, and carbon well above $30, which is why volume cars are still steel and airliners are not. If you are chasing stiffness rather than strength, check whether your layup can actually be unidirectional; if it has to be quasi-isotropic, aluminum with a thicker section is usually cheaper and just as stiff per kilogram. If you need corrosion resistance, radio transparency, or impact tolerance rather than specific strength, glass fiber does the job for a tenth of the fiber cost. And if the part is going to be hit, inspected by non-specialists, or repaired in the field, think hard, because none of those are carbon's strengths.

## Key numbers
Quasi-isotropic laminate around 390 kN·m/kg specific strength, roughly seven times mild steel · fiber volume fraction 30–40% for hand layup, 50–60% for infusion, 55–65% for autoclaved prepreg · standard-modulus 24k–50k tow $15–30/kg, aerospace intermediate-modulus prepreg $60–200/kg · autoclave cure measured in hours, prepreg stored at -18 °C with a shelf life and an out-time limit · axial thermal expansion near zero, against 23 ppm/K for aluminum · barely visible impact damage can remove 40–60% of compression strength.

## How it fails
Carbon laminates fail through the thickness, where there is no fiber and only resin. An impact from a dropped tool, hail, or a runway stone drives a cone of delaminations between plies while leaving a surface dent a few tenths of a millimeter deep, and that barely visible impact damage can take 40–60% off compression strength with almost nothing to see from outside. There is no yielding and no slowly growing crack, so the design method is a strain allowable low enough that undetected damage still carries limit load, backed by scheduled ultrasonic or thermographic inspection rather than visual checks. Two slower mechanisms matter as well: epoxy absorbs 1–2% water, which drops the hot-wet glass transition temperature by 20–30 °C and takes the compression allowable with it, and carbon behaves like a noble metal against aluminum, so a carbon panel bolted straight to an aluminum fitting corrodes the aluminum away at the joint unless the fasteners are titanium and a glass ply isolates the faying surface.

## Examples
The Boeing 787 and Airbus A350 are roughly half composite by weight, which is the reference application. Toray, with Zoltek for industrial-grade large tow, is the largest producer, followed by Hexcel, Mitsubishi Chemical, Teijin (Toho Tenax), SGL Carbon, Syensqo, Hyosung, and a fast-growing Chinese base led by Zhongfu Shenying and Jilin Chemical Fiber. Type IV hydrogen pressure vessels wound from carbon are the fastest-growing non-aerospace use, and SpaceX, Rocket Lab, and most satellite bus builders use carbon primary structure. BMW's i3 passenger cell was the most serious attempt at a volume automotive carbon body, and the industry's retreat from it is the clearest evidence for the cost-per-kilogram-saved argument.

## Economic profile
About half the cost of carbon fiber is the polyacrylonitrile precursor and the energy to oxidize and carbonize it, which is why the price has been sticky for two decades despite steady capacity growth: the process is slow, the lines are capital-intensive, and nobody has commercialized a cheaper precursor. Prices softened through 2025 and into 2026 as wind and industrial demand cooled against added capacity, with standard-modulus industrial tow trading in the $15–30/kg band, while aerospace-qualified grades are effectively a separate market priced on qualification rather than on cost. The part cost is where the real money goes: autoclave cycles, tooling, scrap, and inspection typically dwarf the fiber bill, and aerospace prepreg layup can turn a substantial fraction of the material into offcuts. End of life is a genuine liability, since thermoset composites cannot be remelted, pyrolysis recovers short unaligned fiber worth a few dollars a kilogram at best, and most scrap is landfilled or burned. If you are evaluating a carbon-fiber business, the durable positions are precursor and line uptime upstream, and qualified aerospace or pressure-vessel allowables downstream; the middle of the chain is the commodity.

## Videos

- https://www.youtube.com/watch?v=VNLWSu41Xts — How Carbon Fiber is Made in Factories | HOW IT'S MADE (How It's Made, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=4t1pBvTDNXE — Carbon Fiber: PAN Precursor Carbon Fiber (Innovations in Manufacturing at ORNL - Archived, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=9w6vVhRcM4U — BGA how to inspect a dent for delamination on a composite wing with a tap test (gordon macdonald, 1 minute, 10k+ views)

## Further reading

[Materials & Processes: Fibers for composites (CompositesWorld)](https://www.compositesworld.com/articles/the-fiber) · [Composite Aircraft Structure, AC 20-107B (FAA)](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC20-107B.pdf)
