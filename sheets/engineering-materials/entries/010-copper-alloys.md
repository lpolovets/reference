---
number: 10
name: Copper Alloys
part: 2
group: Copper and high-temperature alloys
properties: [elec, therm, corr]
strength: low
temperature: high
processing: [form, mach, cast]
cost: med
---

## Description
Copper is bought for conductivity and then alloyed away from it. Pure C11000 sets the electrical benchmark at 100% IACS and carries about 400 W/m·K of heat at 8.96 g/cm³, and every addition that makes it stronger, more machinable, or more corrosion-resistant scatters electrons and takes conductivity with it. Free-cutting brass lands near 26% IACS, beryllium copper near 22%. That trade is the organizing idea of the whole family. Brass is copper and zinc, cheap and easy to machine and form. Bronze is copper and tin or aluminum, used where a bearing surface or seawater is involved. Cupronickel is copper and nickel, which resists seawater and biofouling well enough to run condenser tubing for decades. Beryllium copper is the outlier, precipitation hardening to about 1,300 MPa, which makes it the only copper alloy with real spring properties and the standard for non-sparking tools. Copper alloys are also unusually pleasant to make parts from, since they form, machine, cast, braze, and solder easily.

## Strengths and weaknesses
Nothing practical beats copper on conductivity except silver, which costs far too much, so for wire, busbar, windings, and heat spreaders it is effectively the reference material. It is ductile, joins by soldering or brazing without special equipment, resists corrosion in fresh water and most atmospheres, and is antimicrobial enough that copper touch surfaces are EPA-registered. The weaknesses are weight, price, and heat. At 8.96 g/cm³ copper is heavier than steel, and its specific strength in the annealed condition is around 25 kN·m/kg, so it is never a structural choice. It anneals and creeps at modest temperatures, which is why the alloys are used hot as electrodes and heat sinks but not as load-carrying parts above roughly 200–300 °C. Price has become a live design constraint rather than a background number, with LME copper settling near $14,200 per tonne in early August 2026. And two specific chemistries bite: brass cracks in ammonia and dezincifies in aggressive water, and beryllium copper carries an occupational exposure limit strict enough to change who is willing to machine it.

## When to use
Use copper where the specification is conductance, and choose the alloy from the second requirement. If you need maximum conductivity, use C11000 and accept that it is soft. If the part will be machined in volume and conductivity is secondary, use free-cutting brass, or one of the silicon-brass replacements if it touches drinking water. If it is a spring, a connector contact, or a tool that must not spark, use beryllium copper and plan for the machining controls. If it runs in seawater, use 90/10 or 70/30 cupronickel, or aluminum bronze for propellers and bushings. If it is a plain bearing, leaded or tin bronze is still the default. The comparison that decides the big-volume cases is aluminum: at 61% IACS and 2.70 g/cm³ an aluminum conductor carries roughly twice the current per kilogram and about 60% per unit volume, so aluminum wins wherever there is room and the terminations are engineered for it (overhead lines, medium-voltage cable, busbar, some motor rotors), and copper wins wherever space is tight. And do not use copper alloys as structure; they are not chosen for strength and they will not surprise you by having any.

## Key numbers
Pure copper at 100% IACS, about 400 W/m·K, and 8.96 g/cm³, with annealed specific strength around 25 kN·m/kg · free-cutting brass about 26% IACS and beryllium copper about 22% · beryllium copper aged to roughly 1,300 MPa · aluminum conductor at 61% IACS and 2.70 g/cm³, so roughly twice the conductance per kilogram and about 60% per unit volume · LME copper cash settlement near $14,200 per tonne in early August 2026, about $14/kg, with mill product carrying a fabrication premium on top · lead capped at a 0.25% weighted average of wetted surfaces in US drinking-water hardware.

## How it fails
Brass has two failure modes that both look like manufacturing defects and are not. Season cracking is stress-corrosion cracking in ammonia or amine environments, and it needs only the residual tension left by drawing or bending, so a formed brass part cracks along its grain boundaries weeks or months after it was made, under no service load at all; the name comes from brass cartridge cases cracking in storage near stables, and the cure is a stress-relief anneal rather than a better alloy. Dezincification is the other: in stagnant or aggressive water, zinc leaches out of high-zinc brass and leaves a porous copper skeleton that holds the part's exact shape while losing nearly all of its strength, so a fitting passes inspection and then splits under pressure. Dezincification-resistant brass with an arsenic inhibitor exists for exactly this. In copper tube, the mechanism is erosion-corrosion: above roughly 1.5 m/s in water the flow strips the protective film and cuts horseshoe-shaped pits immediately downstream of elbows and burred cut ends, which is why plumbing codes cap velocity. And in electrical service the failure is thermal rather than chemical. A terminal loosens as the copper creeps under the screw, contact resistance rises, the joint heats, oxidation raises resistance further, and it runs away, which is why infrared surveys of switchgear look for warm connections rather than for corroded ones.

## Examples
C11000 in building wire, busbar, and motor windings; C36000 free-cutting brass in machined fittings and valves, now displaced from potable plumbing by C69300 and similar silicon brasses; C46400 naval brass in marine hardware; C95400 aluminum bronze in bushings, valve seats, and ship propellers; C93200 leaded tin bronze in plain bearings; C70600 and C71500 cupronickel in seawater piping and heat-exchanger tubing; C18150 chromium-zirconium copper in resistance-welding electrodes; C17200 beryllium copper in connector contacts, springs, plastic-mold inserts, and non-sparking tools, with Materion as the dominant producer.

## Economic profile
Copper is priced on the exchange, so a fabricator sells metal plus a conversion charge and hedges the metal, which means the interesting question about any copper business is the conversion margin rather than the copper price. The demand side is the strongest structural story in base metals: grid buildout, renewables, and data centers all need conductor, and a battery-electric vehicle uses roughly three to four times the copper of a combustion car. Supply responds slowly, because a new mine takes ten to twenty years from discovery to production and ore grades at existing mines keep falling, which is why the price has run well above its historical band. Scrap covers roughly a third of consumption and copper recycles without any loss of properties, so the secondary market is a genuine buffer rather than a downcycle. Two regulatory shifts matter to anyone specifying copper parts. US drinking-water rules capping lead at a 0.25% weighted average of wetted surfaces removed leaded free-cutting brass from plumbing and pushed the industry onto silicon brasses that machine noticeably worse, so machining cost went up across a whole product category. And the beryllium exposure limit of 0.2 µg/m³ has concentrated beryllium-copper machining into shops set up for it, which shows up as lead time rather than as price.

## Videos

- https://www.youtube.com/watch?v=XN0LF2t-tf0 — Copper, Brass & Bronze alloys explained (AalcoMetals, 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=ysInnHOoouc — The Difference Between Copper, Brass and Bronze (Metal Supermarkets, 3 minutes, 1m+ views)

## Further reading

[Copper 101 (Copper Development Association)](https://copper.org/resources/copper-101/) · [Copper for Busbars: Guidance for Design and Installation (Copper Development Association)](https://www.kupfer.de/wp-content/uploads/2019/11/Copper-for-Busbars.pdf)
