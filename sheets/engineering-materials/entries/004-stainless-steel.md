---
number: 4
name: Stainless Steel
part: 1
group: Stainless steel
properties: [corr, tough, heat, strong]
strength: med
temperature: vhigh
processing: [form, mach, am]
cost: low
---

## Description
Stainless steel is any steel with at least 10.5% chromium, which is the threshold where the surface forms a chromium-rich oxide film a few nanometres thick that reforms within seconds of being scratched. That self-healing film is the entire product; everything else about the family follows from keeping it intact and from what the alloy has to give up to do so. Nickel is the second lever. Add enough of it and the structure stays face-centered-cubic austenite at room temperature, which is non-magnetic, extremely ductile, has no ductile-to-brittle transition, and cannot be hardened by heat treatment. Leave it out and you get ferritic stainless, cheap and magnetic; add carbon instead and you get martensitic stainless that hardens like tool steel; split the difference and you get duplex, roughly half austenite and half ferrite. The chromium costs about three to six times carbon steel's price per kilogram, and the honest framing of this entry is what that premium buys and where it does not help, because stainless is not corrosion-proof and the ways it fails are specific and predictable.

## Strengths and weaknesses
The 300-series austenitics are among the most useful engineering materials in existence: they resist most of what a food plant, a chemical plant, or a building facade throws at them, they weld and form well, they stay tough to cryogenic temperatures where carbon steel shatters, they hold their oxidation resistance in air to about 870 °C, and they are hygienic and cleanable. The trade-offs are all on the shop floor and in the specifics of the chemistry. Annealed 304 yields at only about 215 MPa, so a stainless part is often heavier than the carbon-steel one it replaces. It work-hardens under a dull tool, so machining rates are roughly half of carbon steel's and interrupted cuts glaze the surface. Its thermal conductivity is about 16 W/m·K against roughly 50 for carbon steel and its expansion is higher, so welds distort more and heat concentrates locally. Austenitic threads gall and seize against each other. And the failure that ends careers is chloride stress-corrosion cracking, which attacks 304 and 316 specifically, in hot chloride environments, with no warning and no metal loss to inspect.

## When to use
Default to 304 when the part will get wet, handled, or cleaned and a coating is impractical or cannot be maintained: food and pharmaceutical equipment, sinks, fasteners, architectural trim, tanks, and general hardware. Move to 316 when chlorides are present at all (marine air, de-icing salt, chlorinated water, brine). If chlorides, heat, and tensile stress are all present at once, do not go to 316 and hope; go to duplex 2205, a ferritic grade, or a nickel alloy, because that combination is exactly what cracks austenitics. If you need real strength out of stainless, use 17-4 PH, which machines soft and ages to about 1,310 MPa with very little distortion. If you need hardness and edge retention, use martensitic 420 or 440C and accept that it is the least corrosion-resistant of the family. If cost and nickel-price volatility matter more than weldability in thick section, ferritic 439 or 444 does most of what 304 does without the nickel. And if the environment is seawater at temperature, or a chloride process stream where even duplex is marginal, the answer is titanium (009), not another stainless.

## Key numbers
10.5% chromium minimum to form the passive film · 304 annealed around 505 MPa tensile and 215 MPa yield, 17-4 PH in the H900 condition about 1,310 MPa · specific strength roughly 65 kN·m/kg for annealed 304 up to about 170 for 17-4 PH · duplex 2205 at 450 MPa yield with a pitting resistance number near 35, against about 24 for 316 and 18 for 304 · thermal conductivity around 16 W/m·K, roughly a third of carbon steel's · $3–6/kg against about $1.25/kg for carbon steel · usable in air to about 870 °C for 304.

## How it fails
Chloride stress-corrosion cracking is the signature failure and it needs three things at once: an austenitic grade, chlorides, and tensile stress, usually above roughly 50–60 °C. The cracks branch through the grains, carry almost no corrosion product, and remove no measurable metal, so a vessel or a hanger that passes every visual and thickness inspection splits without warning. It has killed people: collapsing 316 stainless suspension rods brought down swimming-pool ceilings in Uster in 1985 and Steenwijk in 2001, in warm chlorinated air that would look harmless on a corrosion chart. The second mechanism is crevice and pitting corrosion, which happens wherever oxygen cannot reach the surface to rebuild the film, so it starts under gaskets, deposits, and lapped joints rather than on open surfaces, and pitting resistance number ranks grades against it. The third is sensitization: hold an unstabilized grade between about 425 °C and 815 °C, which any weld does somewhere in its heat-affected zone, and chromium carbides precipitate on the grain boundaries and strip the adjacent metal of chromium, so corrosion later runs in a neat band a few millimeters from the weld. Low-carbon L grades and titanium- or niobium-stabilized 321 and 347 exist for that reason. The everyday warning signs are rust bleeding from crevices and fasteners rather than from open faces, and brown heat tint left beside a weld, which is a chromium-depleted layer and needs pickling or passivation rather than a wire brush.

## Variants
### Austenitic (300 series)
18% chromium, 8% nickel, non-magnetic, and about two thirds of all stainless produced. 304 is the default and 316 adds 2–3% molybdenum for chloride resistance; 321 and 347 are stabilized for welded high-temperature service; 904L and the 6% molybdenum grades sit at the top. They cannot be hardened by heat treatment, only by cold work, and they are the grades vulnerable to chloride stress-corrosion cracking. Use them unless something specific rules them out.

### Ferritic (400 series)
Chromium with little or no nickel, so they price lower and, more usefully, price stably, because nickel is what makes stainless surcharges move. Magnetic, less formable, and hard to weld in thick section because the grains coarsen, but far more resistant to chloride stress-corrosion cracking than austenitics. 409 is automotive exhaust, 430 is appliance and trim, and 439 and 444 are the upgraded grades used where 304 would crack.

### Martensitic (410, 420, 440C)
High carbon, hardenable by quench and temper to 40–60 HRC like a tool steel, and the least corrosion-resistant of the family because the carbon ties up chromium in carbides. This is the stainless for cutlery, valve trim, pump shafts, surgical instruments, and corrosion-resistant bearings, and it is chosen when you need hardness with some corrosion resistance rather than the other way round.

### Precipitation-hardening (17-4 PH, 15-5 PH, 13-8 Mo)
Machined and welded in the soft solution-treated condition, then aged at 480–620 °C for a few hours with very little distortion, reaching about 1,310 MPa in 17-4 H900. The H-number is the aging temperature in Fahrenheit, so H1150 is much softer and tougher than H900, and picking the wrong one is a common specification error. Aerospace fittings, shafts, valve stems, and the most-used stainless in metal additive manufacturing alongside 316L.

### Duplex (2205, 2507)
Roughly half austenite and half ferrite, which gives about twice the yield strength of 304, much better chloride stress-corrosion cracking resistance, and less nickel per unit of strength, so a duplex tank can be thinner and cheaper than a 316 one. The catch is temperature: ferrite embrittles around 475 °C and sigma phase forms above roughly 600 °C, so duplex is limited to about 250–300 °C, and welding needs controlled heat input to keep the phase balance.

## Examples
304 and 316L piping, tanks, and vessels across food, dairy, brewing, and pharmaceutical plants; 316L in surgical implants, marine fittings, and architectural exteriors; 17-4 PH in aerospace fittings and as a standard powder for laser powder-bed fusion; duplex 2205 in chemical tankers, desalination plants, and flue-gas desulfurization; 409 in automotive exhaust systems and 430 in appliance trim; 440C in bearings and knife blades. The mills are Outokumpu, Acerinox (which owns North American Stainless), Aperam, POSCO, Nippon Steel Stainless, and, at much larger volume, China's Tsingshan, TISCO, and Baosteel.

## Economic profile
Stainless is sold as a base price plus an alloy surcharge that tracks the exchange prices of nickel, chromium, and molybdenum, which is why a 316 quote moves month to month while the mill's margin does not. Nickel is the swing factor: LME nickel settled around $16,750 per tonne in early August 2026, and the difference between a 300-series and a ferritic grade is mostly whether you are exposed to that number. The structural story of the past decade is Indonesian and Chinese capacity. Tsingshan's integrated nickel-pig-iron-to-stainless operations in Indonesia changed the industry's cost floor, China now makes well over half the world's stainless, and Western mills have consolidated or closed capacity in response, with trade cases and safeguard measures on top. Two practical implications: if you are designing to a budget, specifying a ferritic grade removes most of the price volatility rather than just a few dollars a kilogram, and if you are sourcing, the scrap-based supply chain means stainless carries 60% or more recycled content and retains real value at end of life, unlike a coated carbon-steel assembly.

## Videos

- https://www.youtube.com/watch?v=KHJmQdvnfPE — The Problem with Stainless Steel (The Efficient Engineer, 21 minutes, 1m+ views)
- https://www.youtube.com/watch?v=xvZdcucQDAE — Stainless Steel Grades Explained (AalcoMetals, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=J-wDJDNag90 — Stainless Steel Types - What is the diffrence between Austenitic, Martensitic, Ferritic, & Duplex (Machining Doctor, 9 minutes, 10k+ views)

## Further reading

[Introduction to stainless steels (worldstainless)](https://www.worldstainless.org/about-stainless/what-are-stainless-steels/introduction-to-stainless-steels/) · [High-Performance Stainless Steels (Nickel Institute)](https://nickelinstitute.org/en/library/technical-guides/high-performance-stainless-steels-11021/)
