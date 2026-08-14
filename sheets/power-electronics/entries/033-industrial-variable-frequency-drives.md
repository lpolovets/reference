---
number: 33
name: Industrial Variable-Frequency Drives
part: 6
group: Drives & traction
power: [kw, mw]
voltage: [mains]
semiconductor: [si]
uses: [ind]
maturity: comm
---

## Description
A variable-frequency drive takes fixed 50 or 60 Hz mains and synthesizes AC at whatever frequency and voltage a motor needs, which is how an ordinary induction motor gets variable speed. The standard low-voltage drive is three blocks in series: a six-pulse diode rectifier, a DC link held up by electrolytic capacitors, and a three-phase IGBT inverter switching at 2–16 kHz under pulse-width modulation. Control holds the volts-per-hertz ratio roughly constant below base speed so motor flux stays where it belongs; better drives close a current loop with field-oriented control instead. Ratings run from about 0.75 kW to a few megawatts at 200–690 V, and up to roughly 100 kW the whole thing is a wall-mounted box. Because the front end is a diode bridge, power flows one way only, so braking energy piles up on the DC link and has to be burned in a resistor unless the buyer pays for an active front end.

## Strengths and weaknesses
The reason to fit one is usually energy: on a centrifugal fan or pump with little static head, flow is proportional to speed and shaft power to the cube of speed, so running at 80% speed takes about half the power (0.8 cubed is 0.51), while a damper or throttle valve at the same flow dissipates the difference as heat and noise. That cube relationship is also the trap, because it only holds when the system curve passes near the origin, and a pump lifting water 30 m has to make that head at any flow, so the savings shrink and can nearly disappear. The drive itself is 96–98% efficient, so for every hour the motor runs at full speed the plant pays 2–4% more than it would across the line. The diode front end draws current in pulses and puts fifth and seventh harmonics on the supply, and the inverter's fast dV/dt stresses motor insulation and pushes current through the bearings, which is why long motor cables need inverter-duty windings or an output filter. Electrolytic DC-link capacitors dry out with heat and are usually the first thing to fail, typically after 8–10 years in a warm cabinet.

## When to use
If the load is a centrifugal fan or pump, the flow varies, the static head is low, and the machine runs thousands of hours a year, fit a drive and expect a short payback. If flow is nearly constant or the equipment runs a few hundred hours a year, skip it, because the drive's own 2–4% loss and its purchase price will not come back. For constant-torque loads such as conveyors, extruders and positive-displacement pumps, a drive buys process control and gentle starting rather than energy, so justify it on those terms. If all you need is to limit inrush on a motor that then runs at full speed, a soft starter costs a fraction of a drive. Check the cable run before ordering: past roughly 30 m, specify inverter-duty motor insulation or a dV/dt filter, and add a line reactor or an 18-pulse front end if the plant's harmonic budget is tight.

## Key numbers
Flow proportional to speed and shaft power to the cube of speed on low-static-head centrifugal loads · 80% speed takes about 51% of the power · drive efficiency 96–98% · switching 2–16 kHz · ratings 0.75 kW to a few MW at 200–690 V · US motor systems of 1 hp and up consume about 1,079 TWh a year, roughly 29% of grid load · 16% of industrial motor system capacity is on a drive and 74% has no load control at all

## Examples
ABB ACS580 and ACS880, Siemens Sinamics G120, Rockwell Automation PowerFlex 525 and 755, Danfoss VLT, Yaskawa GA800 and Schneider Electric Altivar cover most of the installed base; DOE's Better Plants program and utility custom-incentive programs are the usual route by which a US plant gets a retrofit paid for.

## Economic profile
Hardware runs roughly $50–150/kW at low voltage and falls as ratings rise, though those are typical street prices rather than a published figure. At higher ratings most of the bill of materials is the IGBT module, the DC-link capacitors and the heatsink; below about 10 kW the enclosure, the control board and the EMC filter dominate. The value is a smaller electricity bill for the plant, and the arithmetic is easy to check: a 75 kW fan running 6,000 hours a year at $0.08/kWh costs about $36,000 a year at full speed, and holding it at 80% speed takes 51% of that, saving roughly $17,000 against a drive costing $5,000–10,000 installed. That calculation is worked here rather than quoted, and real duty cycles are mixed, so a one to three year payback is the honest range. It is also why only 16% of US industrial motor system capacity sits on a drive while 74% has no load control at all: the easy retrofits went first, and the rest have low hours, high static head or constant flow. The product is a commodity with half a dozen large suppliers, sold mostly through distributors and machine builders, second-sourced by every serious buyer and discounted heavily off list. Margin has moved to what surrounds the box, meaning fieldbus and safety options, energy monitoring, and the service contract.

## Videos

- https://www.youtube.com/watch?v=yEPe7RDtkgo — Variable Frequency Drives Explained - VFD Basics IGBT inverter (The Engineering Mindset, 15 minutes, 1m+ views)
- https://www.youtube.com/watch?v=g7jFGOn6xfU — What is a VFD? (Variable Frequency Drive) (RealPars, 5 minutes, 1m+ views)

## Further reading

[Improving Motor and Drive System Performance: A Sourcebook for Industry (U.S. Department of Energy)](https://www.energy.gov/sites/prod/files/2014/04/f15/amo_motors_sourcebook_web.pdf) · [U.S. Industrial and Commercial Motor System Market Assessment Report, Volume 1: Characteristics of the Installed Base (Lawrence Berkeley National Laboratory)](https://eta-publications.lbl.gov/sites/default/files/u.s._industrial_and_commercial_motor_system_market_assessment_report_volume_1-_characteristics_of_the_installed_base_p_rao.pdf)
