---
number: 34
name: Medium-Voltage Drives
part: 6
group: Drives & traction
power: [mw]
voltage: [mv]
semiconductor: [si]
uses: [ind]
maturity: comm
---

## Description
A medium-voltage drive gives variable speed to motors that run at 2.3–13.8 kV and 0.2–40 MW, which is where large fans, pumps, compressors, mine hoists and mill drives live. The obvious approach, stacking IGBTs in series until they block 6.6 kV, does not work in practice: leakage currents and gate timing differ device to device, so one transistor in a string takes more than its share of the voltage and fails, and holding a string balanced needs matched devices, snubbers and nanosecond-accurate gate drives that then have to survive 20 years. The industry's answer is to stack whole converter cells instead of bare devices. A cascaded H-bridge drive puts a phase-shifting transformer at the input with many isolated secondary windings, feeds each winding to an identical low-voltage power cell (a diode rectifier, a capacitor and an H-bridge of 1.7 kV IGBTs), and connects five or six cells in series per phase to make 6.6 kV, so no device ever sees more than its own cell voltage. The alternative is a three-level neutral-point-clamped converter built from 3.3–6.5 kV IGBTs or IGCTs, which needs no phase-shifting transformer but puts the whole stress on far fewer, far more expensive devices.

## Strengths and weaknesses
Stacking cells produces many output voltage levels, so the waveform is close to sinusoidal, the dV/dt at the motor terminals is low, and a standard motor with standard insulation can usually be driven through long cable runs with no output filter. The multi-winding transformer does double duty: phase-shifting its secondaries turns the cells' diode rectifiers into an 18-, 24- or 36-pulse front end, which keeps line harmonics inside IEEE 519 without a separate filter, and it provides the galvanic isolation the topology needs. Cell redundancy is a real operational advantage, since a failed cell can be bypassed and the drive keeps running at reduced output voltage until the next shutdown. The weaknesses follow from the same structure: the transformer is over half the material cost and most of the weight and floor space, cell count means hundreds of components and thousands of connections, and overall efficiency of 96–98% includes about a point lost in the transformer alone. Cost per kilowatt is several times that of a low-voltage drive, which is a rule of thumb rather than a published figure, and it is the single biggest reason most medium-voltage motors still run across the line.

## When to use
If the motor is above roughly 1 MW and the plant already distributes at 4.16, 6.6 or 11 kV, a medium-voltage drive is the practical answer, because the alternative means a step-down transformer plus a very large low-voltage drive plus the copper to carry thousands of amps. Between about 500 kW and 2 MW, price both routes: a 690 V drive with a transformer often wins on capital cost and always wins on spares commonality. Justify the drive on a variable-flow fan, pump or compressor running continuously, since that is where the cube law on shaft power pays back a seven-figure installation. If all you need is to limit starting current on a motor that then runs at fixed speed, buy a medium-voltage soft starter or an autotransformer starter for a fraction of the price. If the load can drive the motor backwards, as a downhill conveyor or a test stand does, specify an active front end and accept that it costs more and gives up the diode rectifier's harmonic advantage.

## Key numbers
2.3–13.8 kV and 0.2–40 MW · cascaded H-bridge cells built from 1.7 kV IGBTs, five or six cells per phase at 6.6 kV · 18-, 24- or 36-pulse rectification from the transformer secondaries · efficiency 96–98%, with about a point of that lost in the transformer · the transformer is over half the material cost · world market on the order of 11,000 units a year

## Examples
ABB ACS1000 and ACS5000, Siemens Sinamics Perfect Harmony GH180, Rockwell Automation PowerFlex 6000 and 7000, TMEIC Dura-Bilt and Eaton SC9000 are the mainstream products; typical installations are induced-draft fans and boiler feed pumps in power plants, electric-drive compressors on LNG trains, and hoists and grinding mills in mining.

## Economic profile
A medium-voltage drive is sold as an engineered project rather than a catalog item: the price includes an application study, a harmonic study, factory testing with the customer present, site commissioning and often a multi-year service agreement, and those services are a large share of what the buyer pays. Inside the cabinet, NREL's cost model of a 1 MW silicon-carbide drive found material costs were the largest single category and that over half of the materials were the transformers, with the power modules the next largest item. Volume does almost nothing to that cost, because assembly is largely manual and each drive is semi-customized, which is why NREL modeled 1,000 units a year without a big learning effect. The market is small in units, on the order of 11,000 a year worldwide as of 2015 (the report treats 23,000 a year as roughly double the market, so the halved figure is inferred here), which is why a handful of suppliers hold it and why prices are negotiated rather than listed. Customers are conservative and buy on reliability and local service, so a new entrant has to beat an installed base with 20-year references, not just a spec sheet. The demand driver is retrofit: most large motors in service still run at fixed speed, and every one of them on a variable-flow load is a candidate whenever electricity prices or emissions rules move.

## Videos

- https://www.youtube.com/watch?v=XdDqUBmHkCA — Medium Voltage Drive Basics (Yaskawa America - Drives & Motion Division, 29 minutes, 10k+ views)
- https://www.youtube.com/watch?v=VhUjqYAoz_o — Medium voltage motor controls | Eaton PSEC (Eaton, 9 minutes, 5k+ views)

## Further reading

[The Reliability of Neutral Point Clamped vs. Cascaded H-Bridge Inverters (Eaton)](https://www.eaton.com/content/dam/eaton/products/medium-voltage-power-distribution-control-systems/motor-control/literature/other-docs/sc9000-npc-vs-hbridge-topology-reliability-white-paper-td02000001e.pdf) · [A Manufacturing Cost and Supply Chain Analysis of SiC Power Electronics Applicable to Medium-Voltage Motor Drives (National Renewable Energy Laboratory)](https://www.osti.gov/biblio/1349212)
