---
number: 33
name: Nickel-Hydrogen (Ni-H2)
part: 4
group: Nickel
applications: [aero, grid]
energy: low
cycles: vhigh
cost: med
maturity: comm
---

## Description
Part battery, part fuel cell: a nickel positive electrode paired with a hydrogen gas electrode, with the hydrogen stored at pressure inside the cell vessel itself. Charging generates hydrogen and discharging consumes it, so the "electrode" can't wear out, because it's a gas. That gives Ni-H2 the longest demonstrated cycle life of any battery, which is why it powered the Hubble Space Telescope and the ISS through decades of daily orbital cycling.

## Strengths and weaknesses
Cycle life runs beyond 30,000 deep cycles. The cells tolerate overcharge and reversal, work across a wide temperature range, carry no fire risk, and let you read state of charge straight off the gas pressure. The weaknesses: volumetric energy density is low (a pressure vessel is mostly empty space), the classic aerospace designs were extremely expensive with Inconel vessels and platinum catalysts, and hydrogen leakage causes self-discharge.

## When to use
Pick Ni-H2 when the duty is decades of daily deep cycles with zero fire risk and floor space is nearly free. That's the EnerVenue-style 20-to-30-year stationary case, plus legacy spacecraft where it's already qualified. Underwrite it on levelized cost across 30,000 cycles rather than on $/kWh, and stress-test the capex assumptions on vessel manufacturing. Avoid it wherever volumetric footprint or upfront cost is the binding constraint, in short-lived projects that never reach the cycle count, and in new spacecraft, where Li-ion has taken the design wins.

## Key numbers
Nominal cell voltage about 1.25 V · specific energy roughly 40–75 Wh/kg · energy density roughly 60–100 Wh/L, since most of the cell is pressure vessel · 30,000+ deep cycles over a 20-to-30-year life · internal hydrogen pressure runs to roughly 60–80 bar at full charge and doubles as the state-of-charge gauge.

## Examples
Hubble, ISS, and GEO communication satellites (largely superseded by Li-ion in new spacecraft); EnerVenue's terrestrial reboot using cheap vessels and catalyst substitutions for stationary storage.

## Economic profile
In space, cost didn't matter. On the ground, the whole bet (EnerVenue) is that stripping out the aerospace-grade materials leaves a ~30,000-cycle battery cheap enough to amortize better than LFP over 20+ years. The levelized-cost argument is genuinely interesting. The risks are capex per kWh and volumetric footprint, both measured against lithium that keeps getting cheaper.

## Videos

- https://www.youtube.com/watch?v=2zG-ZrC4BO0 — Why This NASA Battery May Be The Future of Energy Storage (Undecided with Matt Ferrell, 14 minutes, 1m+ views)
- https://www.youtube.com/watch?v=so8Ki5hrYWc — Will this nickel-hydrogen battery replace lithium? Used in SPACE for Decades. (Solartime with Martyna, 9 minutes, 10k+ views)

## Further reading

[Hubble Battery Tech Holds Power on Earth (NASA Spinoff)](https://spinoff.nasa.gov/Hubble_Battery_Tech_Holds_Power_on_Earth) · [Overview of the Design, Development, and Application of Nickel-Hydrogen Batteries (NASA NTRS)](https://ntrs.nasa.gov/citations/20030062140)
