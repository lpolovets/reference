---
number: 11
name: DC-Link Capacitors
part: 2
group: Packaging & passives
power: [w, mw]
voltage: [lv, mv]
uses: [ev, ind, grid]
maturity: comm
---

## Description
The DC link is the capacitor bank across the DC bus, between a rectifier or a battery and the switching bridge. It does two things: it holds the bus voltage steady while the bridge draws current in pulses, and it supplies those pulses locally so they do not have to travel down the inductance of the busbar. Three technologies compete for the job. Aluminum electrolytic packs the most capacitance into a can and costs the least per microfarad, but it has high equivalent series resistance and it wears out as electrolyte escapes through the seal. Metallized polypropylene film has roughly a tenth the ESR, self-heals when the dielectric punctures, and has no comparable wear-out mechanism, at three to five times the volume per microfarad. Multi-layer ceramic is small and has the lowest inductance of the three, which makes it the right part directly at the module terminals, but its capacitance falls 50–80% under DC bias and a cracked part fails short.

## Strengths and weaknesses
The real sizing constraint is ripple current rather than capacitance. Dissipation in the capacitor is the rms ripple current squared times the ESR, and the allowed dissipation is whatever keeps the hot spot inside its temperature rating, so a designer usually ends up buying two or three times the microfarads that the voltage-ripple calculation asked for, just to carry the current. That is where film wins: low ESR buys more amps per liter even though it holds fewer microfarads per liter. Electrolytic wears out in a well-understood way, since the electrolyte dries, ESR rises, self-heating rises with it, and the can eventually vents; rated life is 2,000–10,000 hours at 105 °C and roughly doubles for every 10 °C cooler it runs. Film's end of life is gentler, because each self-healing event burns away a patch of metallization and drops capacitance slightly, and the usual end-of-life definition is a 5% capacitance loss rather than a short.

## When to use
If the box is sealed, sits at a high ambient temperature, and has to last 10–15 years without service, use metallized polypropylene film and accept the volume. The standard case is an automotive traction inverter, typically 500–1,000 µF at 400–800 V swallowing 100–200 A rms of ripple, where an electrolytic's temperature-driven wear-out is exactly the wrong failure mechanism to carry into a warranty. If instead it is a cost-driven industrial drive at 400–600 V with a fan and an accepted mid-life service visit, aluminum electrolytic is still cheaper per joule, so budget for the replacement rather than paying for film. Above roughly 600 V, film also saves you from series-stacking electrolytics with balancing resistors, which adds parts and another thing to fail. Size the bank on ripple current first and check voltage ripple second; doing it the other way round produces a bank that overheats. Whichever bulk technology you pick, put a few microfarads of ceramic or low-inductance film right at the module terminals, because the bulk capacitor is centimeters away and those centimeters are inductance.

## Key numbers
Automotive DC links typically 500–1,000 µF at 400–800 V carrying 100–200 A rms ripple · film runs 3–5x the volume per microfarad of electrolytic at roughly a tenth the ESR · electrolytic rated life 2,000–10,000 h at 105 °C, roughly doubling per 10 °C cooler · film end of life is usually a 5% capacitance loss, not a short · ceramics lose 50–80% of nameplate capacitance under DC bias · 5–15% of an inverter's bill of materials

## Examples
TDK Electronics' xEVCap film capacitors and KEMET's C4AK automotive-grade film series, both aimed at traction inverters; Vishay, Cornell Dubilier and Electronicon film ranges in industrial and solar inverters; aluminum electrolytic banks on the DC bus of low-cost variable-frequency drives; multi-layer ceramics used as decoupling directly at power-module terminals.

## Economic profile
The DC link is usually 5–15% of an inverter's bill of materials and often the largest passive part by volume, so it competes with the heatsink for space. Film costs several times more per joule than electrolytic, and most of that cost is the polypropylene film itself, drawn to roughly 2–6 µm and supplied by a short list of manufacturers. That supply is why film prices fall slowly: there is no semiconductor-style learning curve, and the improvement comes from thinner film and higher-temperature grades, worth a few percent a year. Automotive is where the margin sits, because AEC-Q200 qualification plus a 15-year warranty keeps the approved supplier list to a handful of names, while commodity electrolytics are priced by the reel. For the buyer the trade is capital against service: an electrolytic bank is cheaper to install and gets replaced once during the drive's life, and a film bank costs more up front and usually outlives the converter around it.

## Videos

- https://www.youtube.com/watch?v=2v8zBj7_sxg — How to choose the right capacitor type for a circuit?! || Film vs. Ceramic vs. Electrolytic (GreatScott!, 12 minutes, 500k+ views)
- https://www.youtube.com/watch?v=kH7W5R8Ygcg — Electrolytic capacitors lifetime and ripple current (Sam Ben-Yaakov, 17 minutes, 5k+ views)

## Further reading

[Film Capacitors: General technical information (TDK Electronics)](https://www.tdk-electronics.tdk.com/download/530754/480aeb04c789e45ef5bb9681513474ba/pdf-generaltechnicalinformation.pdf) · [Reliability of Capacitors for DC-Link Applications in Power Electronic Converters: An Overview (Aalborg University)](https://vbn.aau.dk/en/publications/reliability-of-capacitors-for-dc-link-applications-in-power-elect/)
