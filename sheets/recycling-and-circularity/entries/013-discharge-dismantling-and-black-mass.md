---
number: 13
name: Discharge, Dismantling and Black Mass
part: 3
group: Battery recycling
output: feed
economics: thin
feed: mixed
drivers: [val, reg]
maturity: scale
---

## Description
Mechanical preprocessing is the shared front end of battery recycling, and its job is to turn a pack into a powder that costs a fraction as much to ship and can be fed to a chemical plant. A pack arrives at some unknown state of charge, so the first step is discharge: a resistive load takes cells below about 2 V each in thirty minutes to several hours, while soaking cells in brine, which small operators still use, takes days and leaves a salty contaminated effluent behind. Next the pack is opened and the cooling plates, wiring harness, bolted structure, and modules come out, which is manual work running roughly two to eight hours per pack because no two pack designs are alike. Modules or bare cells are then shredded, either under an inert atmosphere or wet, both of which exist to keep residual charge from starting a fire and to capture the electrolyte and the hydrogen fluoride it forms with moisture. Screening, magnetic separation, eddy-current separation, and air classification then pull out the steel casing, the copper and aluminum foil and busbars, and the plastics. What is left is black mass: cathode and anode powder, binder, and residual electrolyte, at roughly 25–40% of the original pack mass.

## Strengths and weaknesses
The logistics saving is the whole argument. A pack is mostly steel, aluminum, plastic, and void, so shredding it near where it was collected and shipping only the powder to a central refinery is the single largest cost reduction available in the chain, and it is what makes a network of regional shredders feeding one chemical plant work. The weaknesses are labor, safety, and the fact that nothing is actually separated chemically. Manual disassembly is the most expensive step in the front end and resists automation because pack designs change every model year. Shredding a charged cell can start a fire, so inert or wet processing plus dust and offgas capture is mandatory rather than optional. And blending chemistries into one powder is irreversible: aluminum and fluorine carried into the black mass both cause trouble in a downstream leach, and a mixed-chemistry powder can no longer be fed to a direct recycling process at all.

## When to use
Shred almost always, and do it ahead of any hydrometallurgical or direct route. If you are building a network, put the shredders close to the collection points and the refinery in one place, because black mass concentrates roughly three to four times the value per tonne of the pack it came from. If your feed is production scrap from a single gigafactory line, keep the streams segregated by chemistry from the start, since that is the only realistic way to preserve the option of direct recycling. If the packs are damaged, wet, or of unknown state of charge, skip manual disassembly and use wet or inert shredding at the module level, which is safer and much cheaper per pack. If you can sell whole modules to a smelter that will take them, mechanical preprocessing can be skipped entirely, and for hazardous or unsortable feed that is often the right answer.

## Key numbers
Discharge below about 2 V per cell in 30 minutes to several hours · manual pack disassembly roughly 2–8 hours per pack · black mass is 25–40% of pack mass and about three to four times the value per tonne · NMC black mass runs roughly 20% nickel, 5% cobalt, and 3.5% lithium, worth about $6,000–8,000 a tonne contained · payables 60–75% of contained nickel and cobalt with lithium often unpaid, so NMC black mass sells at roughly $2,500–4,000 a tonne · LFP black mass $0–500 a tonne, and LFP packs usually move on a gate fee of $1,000–3,000 a tonne · US shredding capacity around 155,000 t in 2023 against roughly 90,000 t of available feed.

## Examples
Li-Cycle's spoke plants shred submerged in liquid and were built specifically to decouple shredding from refining; Redwood Materials takes whole packs and consumer cells at its Nevada site; Cirba Solutions, Ecobat, Altilium in the UK, Tozero in Germany, and SungEel HiTech in Korea run comparable front ends. Duesenfeld in Germany is the process worth knowing for one detail: it recovers the electrolyte by vacuum distillation instead of burning it, which almost no other route does. Metso and Andritz sell the shredding and separation equipment as a packaged line.

## Economic profile
Black mass trades as a payable percentage of contained metal, not at a headline price, so the seller carries the metal cycle whether it wants to or not. Take a tonne of NMC black mass at roughly 20% nickel, 5% cobalt, and 3.5% lithium: that is about 200 kg of nickel, worth roughly $3,200 at $16,000 a tonne, plus 50 kg of cobalt and 35 kg of lithium, which is around 185 kg of lithium carbonate equivalent. Add those up at recent prices and contained value lands near $6,000–8,000 a tonne, of which the seller typically receives 60–75% of the nickel and cobalt and frequently nothing for the lithium, so the check is roughly $2,500–4,000. Now do the same for LFP: about 3% lithium, or 160 kg of carbonate equivalent worth $1,500–2,500, and iron and phosphate worth almost nothing, which is why LFP black mass trades at $0–500 a tonne and LFP packs usually move on a gate fee of $1,000–3,000 a tonne instead. That gap is the largest change in this industry's economics in the past five years, because LFP went from roughly 15% of global electric-vehicle cell output in 2020 to more than half by 2025. The second economic fact is that shredding is cheap and refining is not, so the shredding side got built first and got overbuilt: US shredding capacity was around 155,000 t in 2023 against roughly 90,000 t of feed actually available, which compressed gate fees and put several operators out of business. Policy now moves the price as well, since the EU classified black mass as hazardous waste effective 5 March 2025, restricting export outside the OECD, while China lifted its import ban on 1 August 2025.

## Videos

- https://www.youtube.com/watch?v=XW_lkttv-g4 — How Millions Of Batteries Are Recycled Every Day - Inside Battery Recycling Mega Factory (The Factoran, 16 minutes, 100k+ views)
- https://www.youtube.com/watch?v=AB1cia0zCf8 — Recycling of Lithium ion Battery: Shredding and Separating Line (Henan Recycle Env Protection Equipment Co., Ltd, 7 minutes, 50k+ views)

## Further reading

[Review on Preprocessing Strategies, Deactivation, Thermal Safety, and Future Perspectives in Lithium-Ion Battery Recycling (National Energy Technology Laboratory)](https://www.osti.gov/biblio/3000484) · [Lithium-Ion Battery Recycling (US EPA)](https://www.epa.gov/hw/lithium-ion-battery-recycling)
