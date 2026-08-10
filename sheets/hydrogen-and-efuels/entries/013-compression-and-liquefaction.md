---
number: 13
name: Compression and Liquefaction
part: 4
group: Conditioning and delivery
sector: [veh, mar, exp, pwr]
form: [hp, liq]
carbon: none
maturity: mature
cost: low
---

## Description
Hydrogen leaves an electrolyzer at 1–30 bar and a reformer at 20–30 bar, and almost nobody uses it there, so nearly every delivered kilogram passes through a compressor, a liquefier, or both. Compression is mechanical and mature: multi-stage reciprocating or diaphragm machines take gas to 200 bar for a steel tube trailer, 500 bar for a composite one, or 900 bar for the cascade bank behind a 700 bar dispenser. Liquefaction is a cryogenic plant that cools hydrogen to -253 °C with nitrogen pre-cooling and a helium or hydrogen refrigeration cycle, and it is expensive for a reason peculiar to this molecule. Room-temperature hydrogen is 75% ortho and 25% para; the equilibrium at 20 K is essentially all para; and the ortho-to-para conversion releases 527 kJ/kg against a latent heat of vaporization of only 446 kJ/kg. Left alone, freshly made liquid hydrogen boils itself away, so liquefiers stage catalytic converters through the cold box to do the conversion where the refrigeration can absorb it. This entry also owns cryogenic storage: vacuum-jacketed dewars that lose 0.1–0.3% a day in large tanks and several times that in small ones, because the surface-to-volume ratio is worse.

## Strengths and weaknesses
Compression is cheap, fast, and boring: 3–4 kWh/kg from 30 to 700 bar, $0.3–1/kg, and nothing is lost while the gas sits. Its limit is density, since even at 700 bar hydrogen is only about 40 kg/m3, which caps a steel tube trailer at 300–400 kg of cargo. Liquefaction buys density (71 kg/m3, and a tanker carries 3,500–4,000 kg) and pays 10–13 kWh/kg for it, roughly 30% of the fuel's own energy, plus $1–2.5/kg. The theoretical minimum is under 4 kWh/kg, so there is real headroom, and most of the gap is plant scale: units typically run 5–30 t/day, small enough that fixed inefficiencies dominate. The two failure modes differ in kind. Compressors fail mechanically, and reciprocating and diaphragm machines are the leading maintenance item at refueling stations, so a station with one compressor is a station that goes dark. Liquid fails by evaporating: inventory shrinks every day and eventually vents, which is why liquid supply suits high-throughput sites and punishes anything parked.

## When to use
If the customer takes gas below 500 bar and sits within a few hundred kilometers, compress. If you are moving more than roughly a tonne a day over long distances by road, or supplying a site that turns its inventory in days, liquid usually wins on delivered cost despite the 30% energy penalty, because one tanker replaces about ten steel tube trailers. The deciding question between them is throughput rather than distance: a station dispensing 100 kg/day should never take liquid, because boil-off eats the advantage before the fuel is sold. If a pipeline exists, use it and skip this decision, since pipe costs a fraction of either path. Watch electrochemical compression (a PEM stack run in reverse, no moving parts, and it purifies while it compresses) for small quiet duty, but it is not yet an answer at throughput.

## Key numbers
Compression from 30 to 700 bar costs 3–4 kWh/kg and $0.3–1/kg · liquefaction 10–13 kWh/kg and $1–2.5/kg against a theoretical minimum under 4 kWh/kg · liquid hydrogen at -253 °C and 71 kg/m3, against 40 kg/m3 for 700 bar gas · ortho-to-para conversion releases 527 kJ/kg against a 446 kJ/kg latent heat · boil-off 0.1–0.3% a day in large tanks · liquefiers typically 5–30 t/day.

## Energy and losses
A kilogram of hydrogen holds 33.3 kWh on a lower-heating-value basis. Compression to 700 bar spends 3–4 kWh of electricity, about 10–12% of that, and nothing more. Liquefaction spends 10–13 kWh, about 30–40%, and then the fuel loses 0.1–0.3% of itself per day in the tank, so a month of storage costs another 3–9%. Chain it: electrolysis at 50–55 kWh/kg, then liquefaction, then a week in a dewar, and you have spent 60–68 kWh of electricity to deliver a kilogram worth 33.3.

## Examples
Air Products, Linde, Air Liquide, and Plug Power own most of the world's liquefaction capacity; Linde's McIntosh plant in Alabama runs up to 30 t/day, and Plug Power operates roughly 45 t/day across its sites. Kawasaki Heavy Industries built the Suiso Frontier, the first liquid hydrogen carrier ship, for the Australia–Japan demonstration voyage. Compressor suppliers include Howden's Burton Corblin diaphragm machines, Burckhardt Compression, PDC Machines, and Linde's ionic compressor, which Linde quotes at 2.7 kWh/kg from 50 to 900 bar including auxiliaries. HyET Hydrogen and Skyre are the electrochemical compression names; Chart Industries and Linde supply the vacuum-jacketed cryogenic tanks.

## Economic profile
Conditioning is capex-heavy and scale-driven. A liquefier's cost per tonne per day falls steeply with size, which is why the industry keeps proposing 30–100 t/day plants and keeps building 5–30 t/day ones: the volume is not there, and the plants that exist were sized for merchant industrial gas and aerospace rather than for fuel. Compression is a different business, with commoditized equipment, margin in service contracts, and operators buying availability rather than efficiency. For anyone modeling delivered cost, this is the step most often left out of a $/kg headline and it can double it. The curve bends with volume rather than with new physics: liquefier efficiency improves as plants get bigger, and compressor prices track the same industrial machinery market they always have.

## Videos

- https://www.youtube.com/watch?v=RoCBvUbnVA4 — Linde - Your experts for hydrogen liquefaction (Linde, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=vltFK4dg1yw — Diaphragm Compressor Animation | Burton Corblin | Howden (Howden, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=T-6R5exBUCo — Introduction to Cryogenics (Chart Industries, 18 minutes, 100k+ views)

## Further reading

[Hydrogen Delivery (US Department of Energy)](https://www.energy.gov/eere/fuelcells/hydrogen-delivery) · [Hydrogen liquefaction: a review of the fundamental physics, engineering practice and future opportunities (UWA Research Repository)](https://research-repository.uwa.edu.au/en/publications/hydrogen-liquefaction-a-review-of-the-fundamental-physics-enginee/)
