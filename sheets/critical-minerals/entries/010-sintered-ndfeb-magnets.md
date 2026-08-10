---
number: 10
name: Sintered NdFeB Magnets
part: 2
group: Permanent magnets
use: [mag, aero, grid]
refining: mono
substitution: poor
volatility: high
---

## Description
A sintered neodymium-iron-boron magnet is the strongest permanent magnet made at commercial scale, with energy products in the 35–50 MGOe range, and it is a powder-metallurgy part rather than a cast one. The alloy is strip cast into thin flake to control grain structure, then charged with hydrogen, which forces its way into the lattice and shatters the flake into coarse powder — hydrogen decrepitation. That powder is jet milled to a few microns, aligned in a magnetic field while it is pressed so the grains' easy axes point the same way, sintered near 1,080 °C, annealed, machined to final dimensions, and coated, usually nickel-copper-nickel or epoxy, because the alloy corrodes readily. Most automotive and industrial grades then get grain-boundary diffusion: dysprosium or terbium is painted on the surface and diffused along the grain boundaries where it does the most good, which buys the same high-temperature performance as bulk alloying while using 50–80% less heavy rare earth. The finished magnet is where all the upstream concentration in this chain finally lands.

## Strengths and weaknesses
Nothing else gives you this much field in this little mass, which is why NdFeB is in essentially every EV traction motor, every hard drive, every robot joint, and every direct-drive wind turbine. The design consequence is that motors built around it are smaller and lighter than any alternative at the same torque, and swapping the magnet out is a machine-level redesign rather than a part substitution. The weaknesses are all physical and all well known: the alloy corrodes, so it must be coated and the coating is a warranty item; it is brittle and chips in handling; and its magnetization falls with temperature, so a grade that works at 80 °C may fail at 150 °C. That last one is what drives the heavy rare-earth content. The failure mode that has actually bitten manufacturers is not technical, though. It is a magnet grade specified with dysprosium in it becoming an export-licensed item, which happened in April 2025 and idled vehicle assembly lines within weeks.

## When to use
Default to sintered NdFeB whenever torque density or power density is the binding constraint and the operating temperature is manageable: traction motors, servo and robot actuators, generators, precision positioning. Specify the lowest grade that meets your thermal envelope, and ask for grain-boundary diffusion rather than a bulk heavy rare-earth alloy, because it gets you the same rating for a fraction of the dysprosium. Go to bonded NdFeB when the part is small and complex enough that machining a sintered block is wasteful, and accept roughly half the energy product. Go to ferrite or samarium-cobalt only when you cannot use NdFeB at all: the temperature is above what it holds, corrosion resistance without coating is required, or rare-earth exposure is itself the thing you have been told to eliminate. Read the next entry before you commit to that, because the penalty is larger than it sounds.

## Key numbers
Energy product 35–50 MGOe · about 94% of world sintered magnet output is Chinese · strip cast, hydrogen decrepitated, jet milled to a few microns, aligned and pressed in a field, sintered near 1,080 °C, then machined and coated · grain-boundary diffusion cuts heavy rare-earth content by 50–80% for the same temperature rating · 1–3 kg of magnet per EV traction motor, a few kg spread across a humanoid robot's joints, and hundreds of kg per MW in a direct-drive wind turbine · MP Materials' 10X campus in Northlake, Texas is a $1.25B build commissioning from 2028 toward roughly 10,000 t/yr.

## Chokepoint
This is the most concentrated step on the whole sheet: about 94% of world sintered magnet production is Chinese. Everything upstream compounds into it, since a magnet plant needs separated oxide, metal, and alloy, and those are roughly 91% Chinese too. When China's April 2025 controls covered magnets containing the seven listed medium and heavy elements, shipments stopped while licenses were processed, and automakers in the US, Europe, and India idled lines within weeks — that is what a disruption at this step looks like, and it took about a quarter to work through. The Western build is finally real and it is slow. MP Materials' Independence plant in Fort Worth began commercial metal production in 2024 and made its first alloy flake and finished magnets on commercial equipment in 2025; its 10X campus in Northlake, Texas is a $1.25 billion project commissioning from 2028 and taking MP toward roughly 10,000 t/yr, with the output committed to the Pentagon for ten years. e-VAC is building in Sumter, South Carolina, Noveon runs in San Marcos, Texas, and Neo Performance Materials has a plant in Estonia. Total announced non-Chinese capacity is on the order of tens of thousands of tonnes a year against a world market several times that.

## Examples
JL MAG, Ningbo Yunsheng, and Zhongke Sanhuan, the largest Chinese magnet makers; Shin-Etsu and Proterial in Japan, the main non-Chinese incumbents and the source of much of the grain-boundary-diffusion patent estate; MP Materials' Independence plant in Fort Worth and the 10X campus in Northlake, Texas; e-VAC Magnetics in Sumter, South Carolina, supplying General Motors; Noveon Magnetics in San Marcos, Texas; Neo Performance Materials' plant in Narva, Estonia; Vacuumschmelze in Germany.

## Economic profile
Magnet pricing is roughly the rare-earth content at prevailing oxide prices plus a conversion charge, so the magnet price tracks NdPr with a lag and the maker's margin is the conversion piece. That structure means a magnet plant does not make money on rare-earth price spikes; it makes money on utilization, yield, and the grades it can hit. Chinese producers have scale, an integrated supply of alloy, and enough capacity that they can compete on price whenever a Western entrant appears, which is why every Western plant announced since 2022 has a long-term offtake, a government contract, or both underneath it. The unit economics are also sensitive to machining scrap: a sintered block cut to a finished shape can lose a substantial fraction of its mass, and whether that swarf is recovered in-house changes the cost meaningfully. If you are evaluating a magnet business, look for a signed multi-year offtake at a stated price, a secured alloy supply, and evidence that the grain-boundary-diffusion process is qualified, because that is the grade automotive actually buys.

## Videos

- https://www.youtube.com/watch?v=vXqOcZDNSfg — Rare Earth Magnets - HOW they're made (MP Materials, 5 minutes, 50k+ views)
- https://www.youtube.com/watch?v=Egmi22VONS0 — How the World’s Strongest Magnets Are Made (Neodymium Explained) (Worldnite Journey, 9 minutes, 100k+ views)
- https://www.youtube.com/watch?v=XZZDy_R2h7E — Neodymium Magnets: How They Work and Why They’re Everywhere! (History of Simple Things, 9 minutes, 100k+ views)

## Further reading

[Manufacture of Modern Permanent Magnet Materials (Arnold Magnetic Technologies)](https://www.arnoldmagnetics.com/wp-content/uploads/2017/10/Manufacture-of-Modern-Permanent-Magnet-Materials-Constantinides-PowderMet-2014-ppr.pdf) · [Rare Earth Magnets and Motors: A European Call for Action (European Raw Materials Alliance)](https://eitrawmaterials.eu/sites/default/files/2024-11/2021_07-13_REE%20Cluster%20Report.pdf)
