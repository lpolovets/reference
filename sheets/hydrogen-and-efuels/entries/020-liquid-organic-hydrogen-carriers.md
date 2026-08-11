---
number: 20
name: Liquid Organic Hydrogen Carriers
part: 5
group: Hydrogen carriers
sector: [exp, ref, chem]
form: [bound]
carbon: none
maturity: pilot
cost: high
---

## Description
A liquid organic hydrogen carrier is an oil that you hydrogenate at one end of a trade route and dehydrogenate at the other, so the hydrogen travels chemically bound inside an ordinary liquid at ambient temperature and pressure. The two systems with real projects behind them are toluene and its hydrogenated form methylcyclohexane, used by Chiyoda, and benzyltoluene or dibenzyltoluene, used by Hydrogenious. Both hold 5–6% hydrogen by mass and about 50–57 kg per cubic meter, which is less than ammonia's 121 but is carried in a chemical tanker with no refrigeration, no pressure, and no toxic-release scenario. Hydrogenation runs at 150–200 °C and 30–50 bar over a nickel or ruthenium catalyst and releases heat; dehydrogenation runs at 250–320 °C over platinum on alumina and absorbs it back. The carrier itself is never consumed, so the return leg of every voyage carries the lean liquid home and the whole inventory in circulation is working capital. That closed loop, and the temperature gap between the two reactions, is what decides whether an LOHC project works.

## Strengths and weaknesses
The safety and logistics case is genuinely good. Dibenzyltoluene is a commercial heat transfer fluid, not flammable at ambient conditions and not acutely toxic, so a spill is an industrial cleanup rather than an evacuation, and the liquid can sit in an unheated tank for years without losing anything. The problem is the release step. Dehydrogenation absorbs about 65–71 kJ per mole of hydrogen, which is 9–10 kWh per kg, or 27–30% of the hydrogen's heating value, and it needs that energy as heat at 250–320 °C. Hydrogenation gave the same energy back at 150–200 °C, too cool to drive the release, so the two ends do not cancel and the destination has to find clean high-grade heat it usually does not have. The failure mode is the one that follows: a project that models the release step on waste heat, then discovers the only heat available at the terminal is made by burning a quarter of the delivered hydrogen. Cycle life is the second thing to check, since the carrier degrades slowly and the make-up rate sets a real operating cost.

## When to use
Pick an LOHC when the reason ammonia is blocked is toxicity or permitting rather than cost, and when the destination has 250–320 °C of clean process heat sitting idle. A refinery or chemical site is the natural host, because it already has that heat, already handles aromatics by the tanker load, and already has a hydrogen user on the fence line. Also consider it for inventory rather than transport: dense urban sites, tunnels, and buildings that cannot permit compressed or cryogenic hydrogen can hold months of it in a diesel tank. Do not pick it for a long export route judged purely on delivered cost, because ammonia carries twice the hydrogen per cubic meter, has an existing fleet, and does not tie up a carrier inventory (entry 019 is the comparison to run). And do not pick it if the customer wants fuel-cell-grade hydrogen with no cleanup train, since the released gas carries traces of the carrier.

## Key numbers
5–6% hydrogen by mass and about 50–57 kg H2 per cubic meter, against ammonia's 121 · liquid at ambient temperature and pressure · hydrogenation at 150–200 °C and 30–50 bar, dehydrogenation at 250–320 °C · release absorbs 65–71 kJ per mole of hydrogen, 9–10 kWh/kg, 27–30% of the fuel's energy · roughly 16 tonnes of carrier in circulation per tonne of hydrogen delivered · lean dibenzyltoluene runs about EUR 2–4/kg · Chiyoda's Brunei to Kawasaki demonstration moved 210 tonnes of hydrogen.

## Energy and losses
Hydrogenation loses almost no hydrogen, since every molecule ends up in the carrier, but it dumps 9–10 kWh per kg of hydrogen as heat at 150–200 °C, which is normally rejected because nothing on a hydrogenation plant can use heat at that grade. Dehydrogenation then demands the same 9–10 kWh back at 250–320 °C, 27–30% of the hydrogen's 33.3 kWh, and if that heat comes from burning product then roughly a quarter to a third of the delivered molecules never reach the customer. Add compression at both ends and cleanup after release and an LOHC chain typically delivers 65–70% of the hydrogen energy that entered it, comparable to ammonia's round trip but concentrated almost entirely in one step at the destination.

## Examples
Chiyoda's SPERA system ran the first international hydrogen supply chain, moving 210 tonnes of hydrogen as methylcyclohexane from Brunei to Kawasaki in 2020 under the AHEAD consortium, dehydrogenating it at Toa Oil's Keihin refinery and burning the hydrogen in a gas turbine at the Mizue power plant. Chiyoda has since run an MCH dehydrogenation demonstration in Singapore. Hydrogenious LOHC Technologies is the benzyltoluene reference, with its plant at Erlangen, Project Hector at CHEMPARK Dormagen storing byproduct hydrogen, and a release hub sized at roughly 1,800 t H2/yr targeted for 2028. Ayrton Energy in Canada and Asemblon in the US are working on alternative carrier molecules. Johnson Matthey and Clariant supply the dehydrogenation catalysts.

## Economic profile
Three cost lines matter and only one of them is the plant. The carrier inventory comes first: at 6 wt% you need about 16 tonnes of liquid per tonne of hydrogen, and at EUR 2–4/kg for lean dibenzyltoluene that is EUR 32,000–64,000 of working capital per tonne of hydrogen in circulation, plus enough extra to cover both legs of every voyage and the make-up for degradation. Second is the heat at the destination, which is the operating cost that decides the delivered price, and published techno-economic studies vary by more than a factor of two on exactly this assumption, so read any LOHC cost estimate by looking at its heat source first. Third is platinum on the dehydrogenation catalyst, a smaller line but one that scales with throughput. The result is that LOHC is not a cheap way to move hydrogen and is unlikely to become one; the business it can win is the one where a customer is paying for a safety or permitting property that compressed gas, liquid hydrogen, and ammonia cannot offer.

## Videos

- https://www.youtube.com/watch?v=dDehjMOGSJQ — Chiyoda’s Hydrogen Supply Chain (千代田化工建設 Chiyoda Corporation, 3 minutes, 1k+ views)
- https://www.youtube.com/watch?v=NRJBV824UR0 — MCH Dehydrogenation Demonstration Project in Singapore (千代田化工建設 Chiyoda Corporation, 4 minutes, under 1k views)
- https://www.youtube.com/watch?v=2-HrfgobBSw — Safe and easy hydrogen handling with Hydrogenious' LOHC benzyltoluene (Hydrogenious LOHC, 2 minutes, under 1k views)

## Further reading

[Large-Scale Stationary Hydrogen Storage via Liquid Organic Hydrogen Carriers (iScience)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8382998/) · [Development of Liquid Organic Hydrogen Carriers for Hydrogen Storage and Transport (International Journal of Molecular Sciences)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10816534/)
