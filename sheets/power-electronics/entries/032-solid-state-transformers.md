---
number: 32
name: Solid-State Transformers
part: 5
group: Grid converters
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [sic]
uses: [grid, ev]
maturity: early
---

## Description
A solid-state transformer replaces a 50 or 60 Hz iron-and-copper transformer with a chain of converters wrapped around a small medium-frequency transformer. Medium-voltage AC goes into a rectifier, a dual active bridge switches it at several kilohertz through the isolating transformer, and an inverter produces low-voltage AC or DC on the far side. Raising the transformer's operating frequency from 60 Hz to 10–20 kHz shrinks the core and windings by roughly a factor of ten, and that is the whole physical argument for the idea. Since no single device blocks 13.8 kV, the medium-voltage side is normally built as a stack of series-connected H-bridge cells, each with its own isolated DC-DC stage, and the cell count falls as the blocking voltage of available silicon carbide MOSFETs climbs from 1.7 kV toward 10 kV. In exchange for all that hardware the owner gets functions a passive transformer cannot provide: voltage regulation, power-factor control, fault-current limiting, a DC port, and controlled power flow in both directions.

## Strengths and weaknesses
The functions are real, and so is the problem with them. A distribution transformer is roughly 99–99.5% efficient, costs on the order of tens of dollars per kVA, has no fans, firmware, or capacitors, and routinely runs 30–40 years on a pole with no maintenance at all. Demonstrated solid-state transformers reach about 96–98%, so they multiply the standing loss by four to eight times, and that loss runs every hour for the asset's whole life. The reliability comparison is worse than the efficiency comparison: hundreds to thousands of semiconductor dies, gate drivers, capacitors, and control boards against a part whose main failure mechanism is insulation aging. Cost is the third gap, with silicon carbide devices, isolation, and cooling putting current hardware at several times the cost per kVA of the transformer it would replace. None of that is a criticism of the engineering; it is the bar the converter has to clear.

## When to use
If all you need is a voltage ratio and galvanic isolation, buy the transformer. The case for a solid-state transformer only opens when the alternative is a transformer plus a converter you were going to buy anyway, so compare the whole conversion chain rather than the transformer on its own. That holds for medium-voltage EV charging hubs, where the site needs AC-DC conversion regardless and an SST removes both the 480 V transformer and a conversion stage; for rail traction, where an on-board 16.7 Hz transformer weighs several tonnes and runs at 90–95%, so weight and loss are both worth money to remove; and increasingly for data centers taking medium voltage down to an 800 V DC bus. If the equipment has to sit unattended for 30 years with no service visit, do not specify one yet.

## Key numbers
Medium-frequency link at 10–20 kHz against 50/60 Hz, shrinking the magnetics by roughly 10x · demonstrated efficiency about 96–98% against 99–99.5% for a passive distribution transformer, so four to eight times the loss · passive transformer life 30–40 years with no maintenance · silicon carbide blocking voltage of 1.7–10 kV sets the number of series cells · on-board traction transformers at 16.7 Hz weigh several tonnes and run at 90–95% · current SST hardware costs several times the passive transformer's cost per kVA.

## Examples
ABB's power electronic traction transformer, demonstrated on a Swiss shunting locomotive; Delta and Resilient Power building medium-voltage-connected fast-charging units; Oak Ridge National Laboratory's solid-state power substation work and the DOE Office of Electricity roadmap funding it; medium-frequency transformer development at Siemens and Hitachi Energy. None of these are catalog products you can order by the pallet yet.

## Economic profile
The competition is a commodity made of steel and copper by an industry that has been refining it for a century, which is most of the reason nothing has shipped in volume. On efficiency alone, swapping 0.5% loss for 2–4% loss costs the owner energy every hour for decades, and the extra functions have to be worth more than that before the arithmetic works. Two things could change the comparison. The first is silicon carbide, where device cost falls with wafer size and volume, and higher blocking voltages cut the cell count and with it the part count that drives both cost and failure rate. The second is the transformer shortage: lead times for distribution and power transformers stretched into years and prices rose sharply from 2021, which narrows the price gap and makes a product built in a semiconductor supply chain rather than a winding shop worth something on delivery time alone. The realistic first markets are the ones already paying for a converter, so the money today is in EV charging and traction rather than in replacing pole-mounted transformers. A startup pitching the latter should be asked what its efficiency is at 30% load and who pays for the first field failure.

## Videos

- https://www.youtube.com/watch?v=EHo3jxk9alc — Solid State Transformer - [FastEngineering] (Fooncy, 10 minutes, 5k+ views)
- https://www.youtube.com/watch?v=4fB_1pnGXOc — Solid-State Transformer-based EV Charging Station (IEEE Industrial Electronics Society, 3 minutes, 1k+ views)

## Further reading

[Solid State Power Substation Technology Roadmap (US Department of Energy Office of Electricity)](https://www.energy.gov/sites/prod/files/2020/06/f75/2020%20Solid%20State%20Power%20Substation%20Technology%20Roadmap.pdf) · [Solid State Power Substations (SSPS): A Multi-Hierarchical Architecture from Substation to Grid Edge (Oak Ridge National Laboratory)](https://www.osti.gov/biblio/1897850)
