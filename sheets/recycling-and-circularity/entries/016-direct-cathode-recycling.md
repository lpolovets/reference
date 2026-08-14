---
number: 16
name: Direct Cathode Recycling
part: 3
group: Battery recycling
output: closed
economics: sub
feed: clean
drivers: [carbon, supply]
maturity: pilot
related: [battery-chemistries#lithium-iron-phosphate-lfp]
---

## Description
Direct recycling keeps the cathode crystal structure intact instead of dissolving it back to elements, so the product is cathode powder rather than metal salts. The cathode coating is first separated from its aluminum foil, either by dissolving the PVDF binder in a solvent, by a thermal step that burns it off, or by froth flotation that also splits the cathode powder from the graphite it was shredded with. The recovered powder has lost lithium and some of its layered order during service, so it is relithiated, typically hydrothermally in a lithium hydroxide solution at 180–220 °C or in a molten lithium salt, and then annealed at 700–900 °C to restore the structure. Better than 90% of the active material comes through, and a well-run relithiation returns capacity within a few percent of virgin material. Because the separation and re-synthesis steps of a hydrometallurgical circuit disappear, energy and reagent cost run roughly 30–50% below that route. What does not disappear is the feed requirement: the process cannot fix a powder that is two chemistries mixed together, because there is no single anneal that produces a defined cathode from a blend.

## Strengths and weaknesses
The output is worth several times what black mass is worth, since cathode active material sells at roughly $10,000–25,000 a tonne for nickel-rich NMC against $2,500–4,000 a tonne for the black mass it came from, and the emissions and reagent savings are genuine rather than accounting. Two things hold it back. The first is feed: it needs a single chemistry of known composition and low contamination, which in practice means production scrap from one factory line, and the current vehicle fleet supplies mixed-chemistry packs that a shredder blends into one powder. The second is obsolescence. Cathode formulations change every few years, so material recovered from a 2016 cell comes back as NMC111, which no cell maker is buying in 2026, and a recovered powder still has to pass 12–24 months of qualification at a customer before it is a product. Upcycling, which adds nickel during relithiation to convert an older cathode to a current one, is the research answer to that and is not yet commercial.

## When to use
If your feed is trim scrap and reject electrodes from one gigafactory line, direct recycling is the right route and it is the only one that captures the full value of the cathode you already paid to make. If your feed is end-of-life packs from a mixed fleet, do not plan on it, because the sorting the process assumes does not exist and paying for it separately usually costs more than the value uplift. If the chemistry is LFP, look here first: hydrometallurgy cannot pay on LFP and a smelter will not recover anything from it, so relithiating LFP back to LFP is the one route with an economic case. If you are modeling this, count the sorting cost inside the process cost rather than assuming somebody else pays it, and check whether a cell maker has actually qualified the output rather than tested it. As a default, treat published direct-recycling economics as valid only for the fraction of the feed that is genuinely single-chemistry scrap, and ask what that fraction is.

## Key numbers
Relithiation at 180–220 °C hydrothermally or in molten salt, then annealing at 700–900 °C · better than 90% of active material recovered, at capacity within a few percent of virgin · energy and reagent cost roughly 30–50% below the hydrometallurgical route · cathode active material sells at roughly $10,000–25,000 a tonne for nickel-rich NMC against $2,500–4,000 a tonne for black mass · 12–24 months of qualification at a customer before the powder is a product · production scrap runs 5–10% of gigafactory output at maturity and 20–30% during a ramp.

## Examples
The US Department of Energy's ReCell Center, led by Argonne National Laboratory, is the reference program and published most of the relithiation and cathode-healing work the startups build on. Princeton NuEnergy runs a plasma-assisted separation and regeneration process at pilot scale in Texas; OnTo Technology in Oregon has worked on direct cathode recovery longer than almost anyone; Ascend Elements' Hydro-to-Cathode process is the closest commercial relative, though it dissolves the cathode and rebuilds precursor rather than preserving the crystal.

## Economic profile
The value case is straightforward and the feed case is why nobody has closed it yet. Cathode active material at $10,000–25,000 a tonne against black mass at $2,500–4,000 means a direct route keeps value that the hydrometallurgical route passes downstream to whoever makes the precursor, and it does so on roughly 30–50% less energy and reagent cost. That is the largest per-tonne prize in battery recycling. The problem is that the addressable feed today is manufacturing scrap, which is 5–10% of gigafactory output once a line is running well and 20–30% while it is ramping, and that number falls as cell makers get better, so the feed shrinks exactly as the plants scale. End-of-life packs will eventually be the larger stream, but they arrive mixed, and nothing in the collection system sorts them by cathode chemistry. So the economics currently rest on a bilateral arrangement with a cell maker plus public funding, which is what the ReCell Center and the DOE grant programs have supplied, and no plant is yet running on the value of its output alone. The one place the arithmetic could flip on its own is LFP: there is no metal value to chase, so no other route pays, and returning a $5,000–8,000 a tonne cathode from material a recycler would otherwise charge a gate fee to take is a real business if the qualification holds.

## Videos

- https://www.youtube.com/watch?v=QRMO3e2-AVM — Relithiation: The Future of Lithium Battery Recycling? (Electrified, 5 minutes, 1k+ views)
- https://www.youtube.com/watch?v=vw5D6DtizRs — A Novel Way to Recycle Lithium-ion Batteries (WPI, 2 minutes, 1k+ views)

## Further reading

[A Review of Direct Recycling Processes for Lithium-Ion Battery Cells (Materials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12734468/) · [EverBatt: A Closed-loop Battery Recycling Cost and Environmental Impacts Model (Argonne National Laboratory)](https://www.osti.gov/biblio/1530874)
