---
number: 21
name: Two-Phase Loops and Cryocoolers
part: 4
group: Thermal control
orbit: [leo, geo, deep]
scale: [kg, hkg]
autonomy: auto
customer: [civ, def, sci]
maturity: ops
---

## Description
Radiators only work if the heat reaches them, and these are the two ways of moving it. A loop heat pipe does it passively: a sintered nickel or titanium wick with pores a couple of micrometers across sits only in the evaporator, and the capillary pressure it develops drives vapor down one smooth tube to a condenser on the radiator and pulls liquid back down another, so the loop carries hundreds of watts over several meters and around bends that a plain heat pipe cannot manage. Capillary pumped loops use the same physics with the compensation chamber separated from the evaporator, which gives finer temperature control but needs an active priming step before startup, and that is largely why loop heat pipes displaced them. Below roughly 120 K a passive path stops being enough and the heat has to be pumped uphill by a mechanical cryocooler, usually a Stirling or a pulse tube for 40–150 K, a Joule-Thomson or turbo-Brayton stage for 20 K and below. What a cryocooler costs is input power, all of which comes back out at the warm end and has to be radiated. At around 100 K a good space cooler needs roughly 10–15 W of input per watt lifted, and a small tactical unit closer to 25–40 W/W; at 40 K it is on the order of 40–80 W/W; and the JWST MIRI cooler draws about 145 W in normal science operation to hold an optical bench below 7 K. A recent NASA and Creare 20 K machine reached 24.4 W of lift at 21 K at 17.68% of the Carnot limit, and since the Carnot coefficient of performance rejecting to about 300 K is 20 over 280, or 0.071, that comes to roughly 80 W of input per watt lifted.

## Strengths and weaknesses
Loop heat pipes have no moving parts, no power draw, and decades of flight use, and they solve the problem that killed simple heat pipes on large spacecraft, which is transporting kilowatt-scale heat across a deployed joint or several meters of structure. Their limits are startup behavior and gravity: a loop that will run fine in orbit can be awkward to test on the ground in the orientation it flies, and startup can oscillate under low heat loads. Cryocoolers are the opposite trade. They work, and the flight record is better than most people expect, since the pair of pulse tube coolers on AIRS has run continuously since 2002 and the drive level needed to hold the focal plane at 55 K rose only 2–3% over nineteen years. But they burn power that becomes heat at the reject interface, they wear, and they vibrate. The compressors run near 30 Hz and their harmonics, which is exactly the band a precision-pointed instrument cares about, and that is a common reason an instrument team asks for passive cooling instead. JWST needed design mitigations plus a dedicated ground jitter campaign before flight because the near-infrared instruments sat near MIRI's cooler, and on-orbit measurements then showed no detectable effect, which is the outcome you get only by budgeting for it early.

## When to use
If you need to move a few hundred watts to a few kilowatts more than about half a meter, or across a hinge, use a loop heat pipe rather than a constant-conductance heat pipe, and accept that the startup case has to be analyzed. If the load is tens of kilowatts, a mechanically pumped single-phase loop is the honest answer despite the pump, which is what the ISS does with ammonia. For a cold detector, get as far as possible passively first with a sunshield and a dedicated radiator, since a passive path costs no power and nothing wears; add a cryocooler only for the last stretch the geometry cannot reach. If you do add one, budget three things up front: the input power, the same number again as heat into the radiator sizing in entry 20, and the exported vibration against the pointing stability of every instrument nearby. If the instrument cannot tolerate the vibration at all, look at a turbo-Brayton machine, whose continuous flow avoids the low-frequency reciprocating disturbance, and pay for it in efficiency at the smaller heat loads.

## Key numbers
Loop heat pipe wick pores a couple of micrometers across, carrying hundreds of watts over several meters passively · passive cooling runs out around 120 K · roughly 10–15 W of input per watt lifted at 100 K for a good space cooler, 25–40 W/W for a small tactical unit · on the order of 40–80 W/W at 40 K · a NASA and Creare 20 K cooler reached 17.68% of Carnot and 24.4 W of lift at 21 K, which works out near 80 W in per watt (derived above) · JWST's MIRI cooler draws about 145 W to hold its bench below 7 K · AIRS pulse tube coolers running since 2002 with the drive level up 2–3% in nineteen years · compressor disturbance near 30 Hz and its harmonics

## Examples
Loop heat pipes have flown on GOES weather satellites, ICESat, and Aura, and are the transport path for the VIPER lunar rover's thermal system; small Stirling and pulse tube coolers from Lockheed Martin, SunPower, AIM, and Ricor now fit CubeSats at 0.35–1.2 kg for 1–2 W of lift near 105–150 K; Northrop Grumman's pulse tube pair on AIRS has run continuously since 2002; and the MIRI instrument on JWST uses a four-stage hybrid pulse tube and Joule-Thomson cooler to reach below 7 K.

## Economic profile
The two halves of this entry have completely different economics. Loop heat pipes are hardware: a handful of suppliers build them for tens of thousands of dollars a unit, they are qualified once per design, and the cost of using one is engineering analysis rather than procurement. Cryocoolers are a small, concentrated, high-reliability market, with Northrop Grumman, Lockheed Martin, Ball, Creare, Thales Cryogenics, and Air Liquide covering most of the flight units in the West, and a flight-qualified cooler with its drive electronics is a multi-million-dollar item where a tactical cooler adapted for a smallsat is two orders of magnitude less. What you pay for at the top end is life. A ten-year continuous cooler runs on flexure or gas bearings so that no surface touches another, and that plus the qualification campaign is most of the price. The interesting demand shift is that the buyers are no longer only infrared astronomy and missile warning. Zero-boiloff storage of liquid hydrogen at 20 K, covered in entry 14, needs coolers an order of magnitude larger than any science instrument has asked for, and NASA has been funding that through SBIR work with Creare precisely because no commercial product existed at that capacity.

## Videos

- https://www.youtube.com/watch?v=c6Xy03L4fcs — Engineers with Markers | Loop Heat Pipe Technology Overview (Advanced Cooling Technologies Inc., 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=FfsWgpMtAdQ — Pulse Tube Cooler (Operational Facts, 5 minutes, 10k+ views)

## Further reading

[A comparative analysis of loop heat pipe based thermal architectures for spacecraft thermal control (NASA)](https://ntrs.nasa.gov/citations/20060043878) · [AIRS Pulse Tube Coolers Performance Update – Twenty Years in Space (International Cryocooler Conference)](https://cryocooler.org/resources/Documents/C22/043.pdf)
