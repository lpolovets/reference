---
number: 6
name: SiC Schottky Diode
part: 1
group: Wide bandgap switches
power: [w, kw]
voltage: [mains]
semiconductor: [sic]
uses: [it, grid, ev]
maturity: comm
---

## Description
A Schottky diode conducts across a metal-to-semiconductor barrier instead of a p-n junction, so only majority carriers move and almost no charge is stored in the drift region while it conducts. Turn-off is therefore nearly instantaneous. In silicon the idea stops being useful above roughly 100–200 V, because the drift region needed to block more than that adds too much resistance and leaks too much. Silicon carbide's critical field is about ten times silicon's, so the same blocking voltage needs a drift region roughly a tenth as thick, and Schottky diodes become practical at 650 V, 1,200 V and 1,700 V. Production parts use a junction barrier Schottky structure, where p+ implants between the Schottky contacts shield the metal interface from the peak field and cut reverse leakage, and where those same p-n junctions inject carriers under a current surge and hold the forward voltage down. Forward drop is around 1.5 V at rated current and rises with temperature, so parts in parallel share current without help.

## Strengths and weaknesses
The entire value is in what happens at turn-off. A 650 V, 10 A SiC diode gives back roughly 10–30 nC of capacitive charge, against several hundred nanocoulombs to a few microcoulombs of stored minority-carrier charge in a silicon fast-recovery diode of the same rating, and the silicon figure roughly doubles between 25 °C and 150 °C while the SiC figure barely moves. That charge is burned in the transistor that is turning on, so removing it cuts the switch's loss as well as the diode's, which is why the diode swap shows up in the transistor's temperature. The costs are price and leakage: a SiC diode runs several times the price of a silicon ultrafast part with the same rating, and reverse leakage is higher and climbs with temperature. Surge is the failure mode to watch, since a plain Schottky has no conductivity modulation to fall back on when a fault or an inrush event drives many times rated current through it, and that is the reason the junction barrier structure exists at all.

## When to use
Use a SiC diode wherever a silicon diode is recovering hard and the recovery is costing you, which in practice means a continuous-conduction-mode boost power factor correction stage, the freewheel path of a hard-switched leg, and the output rectifier of a high-voltage converter. Swapping the boost diode alone typically buys about half a point of efficiency with nothing else changed, and more if you then raise the switching frequency to shrink the inductor. If the converter is soft-switched or runs in critical conduction mode, the diode never recovers hard and a silicon part is the cheaper answer. If the stage sees repeated surges, an unprotected input rectifier for instance, check the surge rating rather than assuming the junction barrier structure covers it. Below about 200 V, use a silicon Schottky, which costs a fraction as much and does the same job.

## Key numbers
Silicon Schottky practical only to roughly 100–200 V, SiC at 650 V, 1,200 V and 1,700 V · SiC critical field about 10x silicon's, so the drift region is about a tenth as thick · 10–30 nC recovered from a 650 V, 10 A SiC part against several hundred nC to a few µC for silicon fast recovery · forward drop about 1.5 V at rated current, rising with temperature · roughly half a point of efficiency from a boost PFC diode swap · several times the price of the silicon ultrafast diode it replaces

## Examples
Infineon's CoolSiC Schottky diode families at 600 V, 650 V and 1,200 V and Wolfspeed's C3D and C4D series, both sold mainly as the boost diode in server and telecom power factor correction stages; SiC diodes co-packaged as the freewheeling diode in SiC MOSFET half-bridge modules; Toshiba's merged PiN Schottky variants, sold specifically on surge robustness.

## Economic profile
This was the first silicon carbide device to reach real volume, and it still sells because the customer's calculation is short: one component changes, and the supply gains about half a point of efficiency. A 650 V, 10 A part costs several times the silicon ultrafast diode it replaces, so the swap only pays where efficiency is regulated or billed, which is why 80 PLUS Titanium server supplies and telecom rectifiers took it first and cheap consumer supplies still have not. Die cost tracks die area and a diode is a small die, so falling SiC wafer prices reach the diode price faster than they reach a 1,200 V MOSFET's. Margin sits with the die makers, and the diode market is more competitive than the SiC MOSFET market because the process is simpler and more fabs can run it. The long-run risk to the product line is that the diode disappears into the transistor: a SiC MOSFET with a good enough body diode, or a GaN transistor with no body diode at all, deletes the part from the bill of materials.

## Videos

- https://www.youtube.com/watch?v=RWVpvi2tlcA — Why are Silicon CARBIDE Schottky diodes so great? (ElectronicsNotes, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=SBqLOrlA7QI — #201: Basics of Reverse Recovery Time in a Diode (w2aew, 12 minutes, 50k+ views)

## Further reading

[Improved junction barrier Schottky (JBS) structure to reduce the leakage current and increase the surge current capability: SiC Schottky barrier diodes (SiC SBDs) (Toshiba)](https://toshiba.semicon-storage.com/us/semiconductor/product/diodes/sic-schottky-barrier-diodes/articles/improved-jbs-structure-to-reduce-the-leakage-current-and-increase-the-surge-current-capability.html) · [The Impact of Process Conditions on Surge Current Capability of 1.2 kV SiC JBS and MPS Diodes (Materials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7867016/)
