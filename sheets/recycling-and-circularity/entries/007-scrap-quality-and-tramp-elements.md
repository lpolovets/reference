---
number: 7
name: Scrap Quality and Tramp Elements
part: 2
group: Bulk metals
output: open
economics: profit
feed: mixed
drivers: [val, carbon]
maturity: comm
---

## Description
A tramp element is anything that arrives with the scrap and cannot be taken back out, and copper is the one that decides how much of the steel industry can run on recycled metal. Steelmaking strips carbon, silicon, manganese, phosphorus and sulfur by oxidation, because all of them oxidize more readily than iron and report to the slag. Copper is nobler than iron, so blowing oxygen puts iron into the slag before it touches the copper, and there is no economical way to remove it from a liquid bath. Vacuum distillation, sulfide fluxing, and chlorination have all been demonstrated since the 1970s and none of them has reached a production plant. The damage shows up later, in hot rolling: reheating a slab to about 1,200 °C oxidizes surface iron into scale while the copper stays behind, and since copper melts at 1,085 °C the enriched layer under the scale is liquid, wets the austenite grain boundaries, and tears the surface open as the slab is rolled. Tin and antimony make it worse by lowering that layer's melting point, and nickel helps by raising it, which is why the classic fix is a nickel addition of roughly half the copper content. Nickel costs several times what the steel does, so almost nobody uses it.

## Strengths and weaknesses
Two things actually work, and both have a hard ceiling. Sorting works up front: pulling motors, wiring harnesses and radiators before the shredder is why shredded auto scrap runs 0.2–0.4% copper instead of the roughly 1.3% a whole car would give, since a combustion car carries about 20 kg of copper against perhaps 1,500 kg of steel. Grade segregation works too, and No. 1 busheling from stamping plants runs around 0.02–0.06% copper, which is why a sheet mill will pay up for it. Dilution is the third tool and the only one that has no technical limit, but it consumes primary iron units, which is the input scrap was meant to displace. The weakness is that both trends are moving the wrong way at once: an electric vehicle carries 60–83 kg of copper against 20 kg for a combustion car, so future shredded scrap will be dirtier, and as ore-based ironmaking shrinks the pool of clean diluent shrinks with it.

## When to use
If you are making rebar, merchant bar, or structural sections, ignore this entirely and buy the cheapest shredded scrap available, because those grades tolerate 0.4% copper and more. If you are making exposed automotive sheet, tinplate, or anything deep-drawn, budget for a low-residual iron source before you commit to the mill: a charge of 0.30% copper scrap diluted with copper-free iron has to be one part scrap to two parts iron to reach 0.10% copper, and one part to four to reach 0.06% (that ratio is arithmetic on the numbers here, not a published figure). If you are buying sorting equipment, price it against the scrap grade spread rather than against the copper content, since the only thing that pays is moving a bale from one published grade into a better one. If you are modeling how far a national industry can decarbonize on scrap, model the product mix, because flat products are where the constraint binds and long products are where it does not.

## Key numbers
Shredded auto scrap 0.2–0.4% copper · deep-drawing and exposed sheet needs well under 0.1% · No. 1 busheling roughly 0.02–0.06% · rebar and merchant bar tolerate 0.4% and above · one part 0.30% scrap to two parts copper-free iron gives 0.10%, one part to four gives 0.06% (derived here) · copper melts at 1,085 °C against a 1,200 °C slab reheat · about 20 kg of copper in a combustion car against 60–83 kg in an electric one

## Examples
The ReMA specifications in North America and the EU-27 Steel Scrap Specification write copper and tin limits into the grade definitions, which is how the constraint gets priced. Three plants exist mainly to supply low-residual iron units to electric furnaces: Nucor's direct-reduced iron plant in St. James Parish, Louisiana, Cleveland-Cliffs' hot-briquetted iron plant in Toledo, Ohio, and voestalpine's HBI plant near Corpus Christi, Texas. The European Union's End-of-Life Vehicles Directive requires depollution and component removal before a car is shredded, which is one reason European shredded scrap is cleaner than the US equivalent.

## Economic profile
The market prices this constraint openly, as the spread between scrap grades. Against a No. 1 heavy melting composite that averaged $319 per tonne delivered in the US during 2025, prime busheling usually trades tens of dollars a tonne higher, and the gap widens whenever sheet mills are running hard, because that is exactly when the clean scrap is scarce. Imported pig iron and hot-briquetted iron normally cost roughly $100–200 a tonne more than shredded scrap, and a mill buying them is paying that premium purely for the absence of copper. Who pays depends on the product: a rebar mill is indifferent and a flat-rolled mill is not, which is why the two ends of the industry have completely different views on whether scrap supply is tight. Sensor sorting of shredded fractions is the technology most often proposed as the fix, and the test it has to pass is simple, since it only pays if it moves a bale into a higher published grade rather than merely lowering copper by some amount inside the same grade. The long-run consequence is worth stating plainly: a steel industry running entirely on scrap could not make every product it makes today, so some primary ironmaking has to survive, and the argument is about how much rather than whether.

## Further reading

[Scrap use in the steel industry (World Steel Association)](https://worldsteel.org/wp-content/uploads/Fact-sheet-on-scrap_2021.pdf) · [Copper contamination in end-of-life steel recycling, developing a new strategy from million-tonnes to milligrams (University of Cambridge)](https://www.repository.cam.ac.uk/handle/1810/292944)
