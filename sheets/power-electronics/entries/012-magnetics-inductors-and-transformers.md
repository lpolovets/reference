---
number: 12
name: "Magnetics: Inductors and Transformers"
part: 2
group: Packaging & passives
power: [w, mw]
voltage: [lv, mv]
uses: [it, cons, ev, grid]
maturity: comm
---

## Description
An inductor stores energy in a gap and gives it back a fraction of a cycle later; a transformer moves energy between windings and sets a voltage ratio. Both are copper wound on a magnetic core, and the core material decides the usable frequency band. Silicon steel laminations work to a few hundred hertz, amorphous and nanocrystalline ribbon to tens of kilohertz, manganese-zinc ferrite from roughly 20 kHz to 1 MHz, and nickel-zinc ferrite and powdered iron above that. The trade is saturation against loss: silicon steel saturates near 1.8–2.0 T and nanocrystalline near 1.2 T, while ferrite gives up at 0.4–0.5 T cold and closer to 0.3 T hot, but ferrite's resistivity is millions of times higher, so eddy-current loss stays manageable where the metals cook. Core loss per unit volume follows a Steinmetz fit, roughly frequency to the power 1.2–1.8 times peak flux density to the power 2–3, and those exponents come from measuring a specific material rather than from theory.

## Strengths and weaknesses
Magnetics is the only way to get galvanic isolation and a fixed voltage ratio inside a switching converter, and the cores themselves cost cents to a few dollars. The problem is size. Raising switching frequency does shrink the core, because the volt-seconds a winding absorbs each cycle fall as 1/f, but the shrink is not proportional: core loss climbs with frequency at fixed flux density, so the flux swing has to come down as frequency goes up, and loss-limited scaling lands near f^-0.5 to f^-0.75. Ten times the frequency therefore buys roughly three to five times smaller rather than ten (10^0.5 is 3.2, 10^0.75 is 5.6), and past that point the core runs out of surface area to shed the heat it still makes. Winding loss pushes the same way, since copper skin depth is 0.21 mm at 100 kHz and 0.066 mm at 1 MHz, which is why foil and litz wire appear in high-frequency designs. Predictability is the other weakness: data sheets quote core loss under sinusoidal excitation with no DC bias and real converters supply neither, so magnetics is the part most often redesigned after the first thermal test, and a saturating core loses inductance within microseconds and takes the switch with it.

## When to use
Below about 100 kHz at kilowatt scale, gapped manganese-zinc ferrite E cores with wound copper are the default and there is rarely a reason to look further. If the inductor carries a large DC bias and you would rather it saturate gradually than suddenly, which is the usual case for a PFC boost inductor, use a distributed-gap powder core. If you need high permeability in a small volume at 10–50 kHz, as in a common-mode choke or a medium-frequency transformer, nanocrystalline ribbon is worth its several-times-higher price. Pick planar (PCB traces or stamped copper through a low-profile core) when height is constrained, when every unit has to have the same leakage inductance, and when volume is high enough to pay for the extra board layers; pick wound when you need many turns, high isolation voltage, or low tooling cost. Do not raise switching frequency purely to shrink the magnetics without first checking core loss and the surface area left to cool it, because that is where the plan usually stops working.

## Key numbers
Ferrite saturates at 0.4–0.5 T cold and near 0.3 T hot, silicon steel at 1.8–2.0 T, nanocrystalline near 1.2 T · Steinmetz exponents roughly 1.2–1.8 on frequency and 2–3 on flux density · loss-limited core volume scales near f^-0.5 to f^-0.75, so 10x the frequency buys 3–5x smaller (derived from those exponents) · copper skin depth 0.21 mm at 100 kHz and 0.066 mm at 1 MHz · manganese-zinc ferrite covers roughly 20 kHz to 1 MHz · custom magnetics often 8–16 week lead times

## Examples
Ferroxcube 3C90 and 3C95 and TDK PC95 manganese-zinc power ferrites in switch-mode transformers; Magnetics Kool Mµ and Micrometals powder cores in PFC boost inductors; Proterial FINEMET and VAC Vitroperm nanocrystalline cores in common-mode chokes and medium-frequency transformers; planar transformers in server power supplies and EV on-board chargers.

## Economic profile
A ferrite core is a commodity costing cents to a few dollars, and the money in a wound magnetic is copper and labor, because winding, terminating and varnishing are hard to automate for anything but the simplest bobbin. That is why magnetics manufacturing concentrated in low-labor-cost regions, and why planar construction wins on cost once volume is high: it replaces winding labor with copper layers on a board the customer is already buying. The cost moves rather than disappearing, since a six- to twelve-layer 2 oz board is not cheap, so planar makes sense at volume and rarely on prototypes. Custom magnetics also carry 8–16 week lead times and usually no second source, which is a schedule risk that surfaces late and cannot be bought out with money. Nanocrystalline ribbon costs several times ferrite per kilogram and comes from a handful of producers, so a design that depends on it inherits their pricing. Copper passes straight through at spot price, and there is no learning curve hiding inside a wound part, which is why magnetics keeps getting more expensive relative to the semiconductors around it.

## Videos

- https://www.youtube.com/watch?v=3b8Wol-X4tE — Transformer/inductor design Part 1 (Eric Goodchild, 18 minutes, 100k+ views)
- https://www.youtube.com/watch?v=b0_4J_882LA — How to Size and Build Switching Transformers | Testing a Planar Transformer (5VLogic, 7 minutes, 10k+ views)

## Further reading

[Design of Planar Power Transformers (Ferroxcube)](https://elnamagnetics.com/wp-content/uploads/library/Ferroxcube-Documents/Design_of_Planar_Power_Transformers.pdf) · [Opportunities and Challenges in Magnetics for PV Systems (Dartmouth College)](https://www.energy.gov/sites/prod/files/2016/11/f34/Panel%202_Dartmouth_Sullivan.pdf)
