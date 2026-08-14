---
number: 8
name: Ultra-Wide-Bandgap Devices
part: 1
group: Wide bandgap switches
power: [kw, mw]
voltage: [mains, mv, hv]
semiconductor: [uwbg]
uses: [grid, aero]
maturity: res
---

## Description
Ultra-wide-bandgap means a bandgap wider than silicon carbide's 3.3 eV and gallium nitride's 3.4 eV. Four materials are in play: beta-phase gallium oxide at about 4.8 eV, diamond at 5.5 eV, aluminum nitride at 6.2 eV, and vertical GaN, which is the same material as a GaN HEMT but built to block voltage through the thickness of a bulk GaN wafer instead of across a surface. A wider gap allows a higher critical electric field, and the drift region's resistance falls roughly with the cube of that field, so beta-Ga2O3's estimated 8 MV/cm gives it a Baliga figure of merit near 3,300, about ten times 4H-SiC's and four times GaN's. None of these ships as a commercial power switch. Gallium oxide has no usable p-type dopant, so there are no p-n junctions and no bipolar structures to build with, and its thermal conductivity of 10–30 W/m·K is roughly a fortieth of 4H-SiC's 490, so the heat made in a very small die has nowhere to go. Diamond has the opposite profile, around 2,000 W/m·K and a critical field near 10 MV/cm, but its n-type donors sit about 0.6 eV below the conduction band, so almost none of them ionize at room temperature.

## Strengths and weaknesses
On paper these are the best power semiconductors known, and in pulsed and photoconductive switching, where the duty cycle is low and average heat is small, gallium oxide and diamond already work in the laboratory at voltages SiC cannot reach. The weaknesses are structural rather than incremental. Gallium oxide's low thermal conductivity means a real design has to flip the die onto a diamond or SiC heat spreader, which gives back the packaging simplicity the material was supposed to buy. The absence of p-type doping rules out the structures that make silicon and SiC devices rugged, including the body diode and the implanted field shields that keep a gate oxide alive. Diamond single crystals are still about a centimeter across and AlN substrates only reached 100 mm in 2023, so neither has a wafer a converter plant could buy. Vertical GaN is the closest to a product and is held back by the price of bulk GaN wafers rather than by any physics.

## When to use
Do not design a product around any of this today. Track it if you are building something where a switch above 10 kV, an ambient above 300 °C, or radiation hardness is what decides the system, because those are the places SiC runs out and where the research money comes from. If you need a very high voltage switch now, series-connect SiC devices or use a multilevel topology; both are engineering problems with published answers. If you are investing rather than designing, ask about the substrate rather than the device, because the substrate is what decides whether the material can ever undercut SiC. And treat any demonstration reported without a thermal measurement as incomplete, since heat is the binding constraint for gallium oxide in particular.

## Key numbers
Bandgap about 4.8 eV for beta-Ga2O3, 5.5 eV for diamond and 6.2 eV for AlN, against 3.3 eV for SiC and 3.4 eV for GaN · Ga2O3 critical field about 8 MV/cm, Baliga figure of merit near 3,300, roughly 10x 4H-SiC · Ga2O3 thermal conductivity 10–30 W/m·K against 490 for 4H-SiC and about 2,000 for diamond · diamond n-type donors about 0.6 eV deep, so almost none ionize at room temperature · diamond crystals about a centimeter across, AlN substrates at 100 mm since 2023 · projected 150 mm Ga2O3 epi-wafer cost around $320 by edge-defined film-fed growth against about $620 by Czochralski

## Examples
ARPA-E's ULTRAFAST program, which funds optically triggered diamond and gallium oxide switches at Sandia, the University of Illinois and RTX; Novel Crystal Technology in Japan, the main merchant supplier of beta-Ga2O3 substrates and sample Schottky diodes; Flosfia, which grows alpha-phase Ga2O3 on 100 mm sapphire and has demonstrated vertical Schottky diodes on it; NREL's cost model for edge-defined film-fed gallium oxide wafers; HexaTech and Crystal IS AlN substrates, whose paying market is ultraviolet LEDs rather than power electronics.

## Economic profile
The substrate is what decides whether any of this becomes a business. SiC boules are grown by physical vapor transport, a sublimation process above 2,000 °C that adds a few tenths of a millimeter an hour, so a boule takes days, and that slowness is most of the reason a SiC wafer costs what it does. Beta-Ga2O3 melts at about 1,800 °C and can be pulled from the melt by edge-defined film-fed growth or Czochralski, the same class of process that made silicon and sapphire cheap, and that is the entire investment case for the material. NREL's cost model puts a 150 mm gallium oxide epi-wafer near $320 by edge-defined film-fed growth against about $620 by Czochralski, with the iridium crucible one of the two biggest line items in both, which is why crucible size and reuse matter more here than growth speed does. Against that, the device side is unsolved, the addressable market is a handful of niches, and qualifying a grid or aerospace part takes a decade. Diamond and AlN have no comparable route: both grow slowly on small seeds, and there is no path in sight to a 150 mm wafer at a price a converter builder would pay. Almost all of the money in this field is public: ARPA-E, DOE and defense programs rather than customers placing orders.

## Videos

- https://www.youtube.com/watch?v=SpQBnCFIVGA — R&D 100 Winner 2017: Ultra-Wide Bandgap Power Electronic Devices (Sandia National Labs, 4 minutes, 1k+ views)
- https://www.youtube.com/watch?v=GKbPeWXaEgc — Features of β-Ga₂O₃ (ノベルクリスタルテクノロジー / Novel Crystal Technology, 3 minutes, 1k+ views)

## Further reading

[Projected Cost of Gallium Oxide Wafers from Edge-Defined Film-Fed Crystal Growth (National Renewable Energy Laboratory)](https://www.osti.gov/biblio/1879587) · [A Review of β-Ga2O3 Power Diodes (Materials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11052528/)
