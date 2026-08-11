---
number: 25
name: Haber-Bosch Ammonia Synthesis
part: 6
group: Existing demand
sector: [chem, exp]
form: [gas]
carbon: none
maturity: mature
cost: low
---

## Description
Haber-Bosch is the second-largest hydrogen sink in the world, consuming about 32 Mt a year to make roughly 180 Mt of ammonia, most of which becomes fertilizer. Nitrogen from an air separation unit and hydrogen are compressed to 150–300 bar, heated to 400–500 °C, and passed over a promoted iron catalyst; only 15–20% converts on each pass, so the unreacted gas is cooled, the ammonia condensed out, and the rest recycled, which is why the synthesis loop rather than the reactor is the defining piece of hardware. Entry 019 covers ammonia as a shipped energy carrier; this entry is about the plant as a customer for hydrogen. That customer is unusually attractive because the swap is clean: take out the reformer, put in an electrolyzer, and every compressor, catalyst bed, condenser, and storage tank downstream stays exactly as it is. Nothing else in this sheet offers a drop-in that simple at 32 Mt of scale.

## Strengths and weaknesses
The strength is that the demand already exists, at a single point, in industrial quantity, with no new downstream equipment and no new customer to convince. The weakness is that the loop needs steady state and renewables do not supply it. Iron catalyst and a 150–300 bar loop are happiest at constant rate; conventional plants turn down to perhaps 50–60% and ramp in percent per hour, and thermal cycling shortens catalyst life. That leaves three ways to bridge a variable electrolyzer to a steady loop, and all three cost money: buffer hydrogen storage, oversized electrolysis running at partial load, or a smaller loop designed for 10–20% minimum load. This is the specific reason green ammonia costs two to four times gray, and it is not a learning-curve problem that goes away with scale. The failure mode is a project that sizes electrolysis on average renewable output and discovers the loop needs a floor it cannot hold overnight.

## When to use
If you are looking for the first large market a clean hydrogen plant can sell into, ammonia synthesis is the strongest candidate on technical grounds and the hardest on price. Pick it when you have firm cheap power or enough storage to hold a floor, and when the buyer faces a carbon cost on the product: CBAM on fertilizer imported into Europe, or a Japanese or Korean co-firing mandate, both of which pay for the carbon rather than the nitrogen. Do not build against the fertilizer market alone, because urea buyers price on nutrient content and will not pay a premium. If your power is intermittent and you have no storage, refinery hydroprocessing (entry 024) is the more forgiving offtaker, since a hydrotreater can take what it gets and top up from the existing hydrogen header. And if the plan is to ship the product rather than sell it locally, read entry 019 first, because the export chain changes the economics more than the synthesis loop does.

## Key numbers
About 32 Mt of hydrogen a year making roughly 180 Mt of ammonia · 178 kg of hydrogen per tonne of ammonia · synthesis at 150–300 bar and 400–500 °C over promoted iron, 15–20% conversion per pass · best gas-based plants run 28–32 GJ per tonne against a thermodynamic floor near 21, world average nearer 46 · direct emissions about 450 Mt CO2 a year, roughly 1.3% of the global total · green ammonia costs two to four times gray · Yara's Herøya unit is 24 MW making 20,000 t/yr.

## Energy and losses
A modern gas-fed plant uses 28–32 GJ per tonne of ammonia, roughly 7.8–8.9 MWh, most of it as feedstock methane rather than fuel, and the world average is nearer 46 GJ because a large share of Chinese capacity runs on coal. Build the same tonne on electrolysis and it needs 178 kg of hydrogen at 50–55 kWh/kg, which is 8.9–9.8 MWh, plus roughly 0.5–1.0 MWh for the air separation unit and the loop compressors, so call it 9.5–10.8 MWh of electricity per tonne. The number that actually decides the project is not that total but the hours behind it: a loop running 4,000 hours a year instead of 8,000 doubles the capital cost per tonne, which is why buffer storage and oversized electrolysis appear in every green ammonia budget and why the flexibility problem shows up as a cost rather than an outage.

## Examples
Yara's unit at Herøya Industrial Park in Norway is the cleanest small reference: 24 MW of electrolysis making about 10 t/day of hydrogen for 20,000 t/yr of renewable ammonia inside an existing plant. Fertiglobe's Egypt Green Hydrogen project at Ain Sokhna feeds electrolytic hydrogen into two operating ammonia plants, backed by 260 MW of solar and wind, with a 15 MW pilot running since 2022 and first export cargo in 2023. Envision's Chifeng base in Inner Mongolia is the largest built, shipping its first green ammonia cargo to LOTTE Fine Chemical in Korea in February 2026. The NEOM Green Hydrogen Project in Saudi Arabia, over 90% complete and targeting commercial production in 2027, is the largest under construction, with Air Products offtaking and Yara marketing part of the volume. Casale, Topsoe, and thyssenkrupp Uhde supply the flexible loop designs these projects depend on.

## Economic profile
Gray ammonia's cost is roughly 60–80% natural gas, so the incumbent's price tracks the gas curve and a green project is really betting on the spread between power and gas in a particular place. Electrolysis dominates green capex, but the flexibility hardware is the line that surprises people: buffer storage, oversizing, and a loop rated for deep turndown together add a substantial fraction to a plant that would otherwise be an electrolyzer with a catalyst bed behind it. The demand pull is regulatory and regional. CBAM prices the carbon in fertilizer entering the EU, Japanese and Korean power co-firing mandates create an ammonia buyer with no interest in nitrogen at all, and India's SIGHT auctions subsidize domestic production directly. The useful diligence question is not the levelized cost of hydrogen but the delivered cost per tonne of ammonia against the importer's landed gray price plus whatever carbon charge applies, since that is the comparison the buyer actually runs.

## Videos

- https://www.youtube.com/watch?v=5mXS-MTjSiw — The Haber-Bosch Process: Industrial Ammonia Synthesis (Professor Dave Explains, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=DntcnAa1pC8 — Ammonia synthesis How does it work (trkuwait, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=1JLblxEZAMo — How To Produce Green Ammonia (REVOLVE, 1 minute, 10k+ views)

## Further reading

[Ammonia Technology Roadmap: Towards More Sustainable Nitrogen Fertiliser Production (IEA)](https://iea.blob.core.windows.net/assets/6ee41bb9-8e81-4b64-8701-2acc064ff6e4/AmmoniaTechnologyRoadmap.pdf) · [Operating Envelope of Haber-Bosch Process Design for Power-to-Ammonia (RSC Advances)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9087324/)
