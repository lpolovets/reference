---
number: 22
name: Iridium and Ruthenium
part: 5
group: Platinum group
use: [cat, semi]
refining: dom
mining: mono
substitution: poor
volatility: high
---

## Description
Iridium and ruthenium are the smallest products of the same Bushveld reefs that yield platinum, palladium, and rhodium. They are not mined for their own sake and cannot be: they arrive in fixed proportion with the platinum, are separated out at the end of the precious-metal refining sequence, and their annual supply is set by how much platinum the world happens to be producing. Iridium output is on the order of 7–8 tonnes a year, with South Africa supplying more than 80% of it, roughly 6–7 tonnes. Ruthenium is four to five times more available. Iridium's properties are extreme — the most corrosion-resistant metal known, melting at 2,466 °C — and in oxide form it is the only catalyst that survives the acidic, highly oxidizing conditions at the oxygen-evolution anode of a proton-exchange-membrane electrolyzer. Ruthenium goes into hard-disk magnetic layers, chip metallization at advanced nodes, thick-film resistors, and the dimensionally stable anodes in chlorine cells.

## Strengths and weaknesses
Iridium oxide does a job nothing else does at a useful lifetime: it catalyzes water splitting on the anode side of a PEM stack, which is the acidic half-cell where every cheaper candidate corrodes away. Ruthenium is unusually versatile for its price, and in the last few years it has become the metal semiconductor makers reach for as copper interconnect liners stop scaling. The weakness both share is that supply cannot respond to demand at any price. A tenfold rise in the iridium price produces very little extra iridium, because it would require a tenfold rise in platinum mining, and platinum demand does not justify that. The failure mode for anyone scaling PEM electrolysis is arithmetic rather than engineering: the metal simply does not exist in the quantities the hydrogen roadmaps assume.

## When to use
Do the arithmetic before you commit a stack architecture. At legacy loadings of roughly 1–2 g of iridium per kilowatt, the entire world's annual iridium supply would build somewhere in the low single-digit gigawatts of PEM capacity a year, and that assumes every gram goes to electrolyzers instead of to spark plugs, crucibles, and electrodes. So if your plan calls for tens of gigawatts, you need one of three things: loadings cut to roughly 0.1–0.3 g/kW, which several catalyst suppliers have now demonstrated, an alkaline or anion-exchange-membrane stack that avoids iridium entirely, or a very large recycling loop. Pick PEM anyway when you need fast dynamic response to variable renewable power, high current density, and high-pressure output, since alkaline is slower and bulkier. Pick alkaline when you have steady power and want to avoid the platinum-group exposure altogether. For ruthenium, there is no design decision at the chip level; there is a procurement decision, and the right one is a long-term contract rather than spot buying.

## Key numbers
World iridium supply on the order of 7–8 t/yr, with South Africa over 80% · ruthenium roughly four to five times more available · legacy PEM anode loadings roughly 1–2 g of iridium per kW, with demonstrated catalysts down to about 0.3 g/kW · iridium averaged about $5,160/oz in 2021, about $4,400/oz in 2025, and traded near $8,700/oz in April 2026 · ruthenium averaged about $451/oz in 2024 and about $690/oz in 2025, then reached roughly $1,750/oz by March 2026 · iridium melts at 2,466 °C.

## Chokepoint
South African mining, and it is tighter than the platinum figure because these are minor coproducts of a coproduct. Over 80% of iridium comes from South Africa, and more than 90% of ruthenium comes from South Africa and Russia combined. Refining is held by the same short list of precious-metal refiners that handle the rest of the platinum-group chain. What makes this chokepoint different from every other one on the sheet is that no policy decision created it and none can relieve it. There is no export licence to lift and no second country with an idle deposit; the only way to make more iridium is to mine more platinum, and platinum's own demand decides that. The price history shows how the constraint transmits. Iridium's annual average actually fell about 9% in 2025, which the USGS attributes partly to increased production and partly to fading investor enthusiasm for hydrogen — a supply-constrained metal getting cheaper because the demand story slipped. Ruthenium went the other way, up about 53% in 2025 and roughly tripling in the year to March 2026 as AI data-center buildouts pulled hard-disk and chip-metallization demand, with Metals Focus forecasting a 203,000 oz deficit for 2026. The Western answer is thrifting and recycling, both of which work: catalyst loadings have already come down by most of an order of magnitude, and precious-metal refiners recover these metals efficiently when the scrap is collected.

## Examples
Anglo American Platinum (Valterra), Impala, and Sibanye-Stillwater produce the iridium and ruthenium that reach the market; Heraeus, Johnson Matthey, and Umicore refine them and sell the catalysts. Heraeus has commercialized PEM anode catalysts at loadings near 0.3 g of iridium per kilowatt. Siemens Energy, Plug Power, Cummins, and ITM Power build PEM stacks and all publish iridium reduction roadmaps; thyssenkrupp nucera and John Cockerill sell alkaline stacks that avoid iridium. On the ruthenium side, Seagate and Western Digital consume it in hard-disk media, and advanced-node ruthenium interconnect and liner work at TSMC, Intel, and Samsung is what turned a quiet byproduct into a contested metal.

## Economic profile
Both metals are assessed by refiners and price-reporting agencies rather than traded on an exchange, with wide bid-offer spreads and physical availability that can vanish while a quoted price sits still. The markets are small: single-digit tonnes a year for iridium and tens of tonnes for ruthenium, worth a few hundred million dollars each at typical prices. Supply is a byproduct credit on someone else's mine plan, so the cost of production tells you nothing about the price, and the price tells the producer nothing worth acting on. That combination produces the same pattern as the larger platinum-group metals, only sharper: violent moves, no supply response, and a market that clears through demand destruction and thrifting. For anyone building a hydrogen business, the practical consequence is that iridium intensity per kilowatt belongs in the model as a hard constraint alongside capital cost, and a stack design that cannot reach roughly 0.3 g/kW is not scalable to gigawatts regardless of what it costs. For anyone in semiconductors, the ruthenium move into 2026 is a reminder that a byproduct with a new structural demand source reprices very quickly.

## Videos

- https://www.youtube.com/watch?v=l_hp-DV4Nmw — PEM electrolysis at Bosch | Scaling production of green hydrogen (Bosch Hydrogen Energy, 4 minutes, 10k+ views)

## Further reading

[PGM market report, May 2026 (Johnson Matthey)](https://matthey.com/documents/161599/509428/pgm-market-report-26.pdf/a2d115af-bf7c-f589-29e9-6beacf8a4452) · [Is iridium demand a potential bottleneck in the realization of large-scale PEM water electrolysis? (International Journal of Hydrogen Energy)](https://repo.uni-hannover.de/handle/123456789/12494)
