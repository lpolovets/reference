---
number: 31
name: Wafer sort and known-good die
part: 7
group: Test and metrology
devices: [logic, memory, analog, power, rf]
node: [mature, adv, lead, front]
wafer: [w200, w300]
toolcost: low
suppliers: few
---

## Description
Wafer sort tests every die while it is still on the wafer, so that packaging money is only spent on dies that work. A prober steps the wafer under a probe card, the card lands thousands of needles or MEMS contacts on pads a few tens of microns across, and a tester exercises the die electrically and writes the result into a wafer map. Bad dies get inked or recorded and are discarded at dicing. This used to be a simple economic filter, worth doing because a package costs more than the test. Chiplets and stacked memory changed what it is for. When several dies are bonded into one package that cannot be reworked, sort is no longer screening out cheap losses, it is certifying that a die is good enough to bond, which is what "known-good die" means. The arithmetic behind that shift is the whole subject of this entry.

## Strengths and weaknesses
Sort is the cheapest place in the whole flow to find a bad die, since everything downstream adds cost you then throw away. Its limits are physical and statistical. Probing is a mechanical operation on a delicate surface, so pads get damaged, probe marks interfere with later bonding, and fine-pitch pads on a hybrid-bonded die may not tolerate probing at all. Test coverage at sort is also incomplete: the die is at wafer temperature, not at its operating temperature, and some failures only appear at speed in a real package. The failure mode that costs the most money is escape, a die that passes sort and fails later inside a bonded stack, which scraps every other die in the package. The opposite error costs money too, since tightening limits to catch escapes throws away good dies, and at leading-edge wafer prices a percentage point of overkill is expensive.

## When to use
Every product gets sort; the decision is how much. Use light sort (a fast functional and continuity screen) when the package is cheap and the part gets a full final test anyway, which covers most mature-node products. Use full known-good-die testing, including at-speed and often at-temperature coverage, whenever the die goes into something unreworkable: an HBM stack, a chiplet assembly, a hybrid-bonded product. The test is economic, so run the numbers: if the value at risk in the assembled package exceeds the cost of deeper sort by a wide margin, test harder. On a 12-high HBM stack or a four-chiplet accelerator, it always does. If you are buying or selling chiplets, settle in the contract who eats the loss when a die that passed the seller's sort fails in the buyer's package, because that clause is now a real commercial term.

## Key numbers
Four chiplets at 95% each give an 81% assembly · twelve DRAM dies at 99% each give an 89% stack · a twenty-die stack at 95% per die gives 35% · the probe-card market ran roughly $3B in 2025 · MEMS and vertical probe cards reach sub-40 µm and sub-20 µm pad pitch · HBM probing now runs above 3 GHz.

## Supply chain
Probe cards are a consumable designed per product, which makes this one of the healthier supply positions on the sheet. FormFactor and Technoprobe lead a field that also includes Micronics Japan, Japan Electronic Materials, MPI, and SV Probe, so most designs have several qualified vendors, though the highest-frequency HBM and fine-pitch advanced-node cards come from a shorter list. Probers themselves are more concentrated, with Tokyo Electron and Tokyo Seimitsu holding most of the market. The genuine risk here is not being cut off but lead time: a probe card is custom to the die's pad layout, costs real money, and takes weeks to build, so a design change that moves pads has a schedule consequence most teams underestimate. Published unit prices for probe cards are unreliable enough that the useful planning number is the market size and the lead time rather than a price per card.

## Examples
FormFactor's MEMS and vertical probe cards serve logic and DRAM sort, and its SUMMIT engineering probe stations are the lab equivalent. Technoprobe supplies a large share of the vertical probe cards used on advanced logic. Tokyo Electron's Precio and Tokyo Seimitsu's UF-series probers make up most of the installed prober base. On the buyer side, every HBM vendor runs full known-good-die and known-good-stack testing before bonding, and AMD, Intel, and the AI accelerator vendors all specify chiplet-level KGD criteria to their foundries and OSATs.

## Economic profile
The cost of sort is machine time, and machine time is priced per second, so the lever every test engineer pulls is test time per die and how many dies can be tested in parallel. Memory sort runs hundreds of dies at once because the patterns are regular; complex logic parallelizes far less, so its sort cost per die is higher. The compound-yield arithmetic is what has changed the spending. At four chiplets and 95% each you lose 19% of assemblies; at twelve dies and 99% each you lose 11% of stacks, and each scrapped stack contains eleven good dies. Once a package holds $2,000 of silicon, spending several extra seconds per die at sort is obviously correct, which is why test spending per part has been rising for exactly the products where packaging costs the most. It is also why the probe-card business grew into a $3B market: cards for HBM and advanced logic are more complex, wear out, and get redesigned every product generation.

## Videos

- https://www.youtube.com/watch?v=mRqbDnv9yk8 — What is a probe card (in 120 seconds) - Technoprobe (Technoprobe, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Otf1ZO6-IfA — Automated Wafer Probing with Vertical Probe Cards on the SUMMIT200 Probe Station – FormFactor (FormFactor Inc., 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=C9MtcvD7Gk8 — Lecture 32 (CHE 323) Semiconductor Manufacturing Yield (Chris Mack, 22 minutes, 10k+ views)

## Further reading

[Heterogeneous Integration Roadmap 2025, Chapter 17: Test Technology (IEEE Electronics Packaging Society)](https://eps.ieee.org/wp-content/uploads/2026/05/HIR_17_Test_Technology_0.9-1.pdf)
