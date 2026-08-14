---
number: 24
name: Grid-Forming and Grid-Following Control
part: 4
group: Control & protection
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [si, sic]
uses: [grid]
maturity: scale
---

## Description
The difference is whether the converter measures the grid's phase or sets its own. A grid-following converter runs a phase-locked loop on the measured terminal voltage, takes that angle as its reference, and controls current, so it acts as a current source injecting commanded active and reactive power into a voltage somebody else is holding up. A grid-forming converter runs its own internal oscillator, sets voltage magnitude and angle directly, and lets current fall out of the difference between its internal voltage and the grid's, which is how a synchronous generator behaves. Frequency droop, virtual synchronous machine control and dispatchable virtual oscillator control are three ways of deciding how that internal angle moves as power changes. Almost every installed solar and battery inverter is grid-following, because it is simpler and because for decades there were enough synchronous machines online to supply the voltage to follow. As synchronous generation retires that assumption stops holding, and in a network where nearly everything follows, there is no longer a strong voltage for the phase-locked loops to lock to.

## Strengths and weaknesses
Grid-following control is mature, cheap and well understood, and it tracks a power command precisely as long as the grid around it is stiff. It degrades as short-circuit strength falls: below a short-circuit ratio of roughly 3 the phase-locked loop begins interacting with the network impedance, and several following converters in one weak area can oscillate against each other. Grid-forming control avoids that by needing no external reference, and it responds to a frequency or voltage disturbance within a couple of milliseconds rather than waiting for a phase-locked loop to detect it. Its limit is current. A converter can supply only about 1.1–1.5 times rated current before the switches reach their limit, against 5–7 times rated for a synchronous machine with the thermal mass to absorb a fault, so during a close fault a grid-forming converter has to abandon voltage-source behavior and go into current limit. Managing that transition, and coming back out of it without losing synchronism, is the hardest open part of the control problem and the reason model validation takes so long.

## When to use
Specify grid-forming for any battery plant that has to black start, island, or hold up a weak corner of the network, and for anything connecting where the short-circuit ratio is under about 3. Keep grid-following for solar and storage on a strong network, since it is cheaper, the models are already accepted, and interconnection studies move faster. If you are procuring storage that commissions after about 2027, specify grid-forming capability anyway, because the marginal cost is control software plus some converter headroom and grid codes are moving in one direction. Do not assume grid-forming means the plant rides through a nearby fault the way a generator does, since the converter still limits current at roughly its rating. And do not treat the label as a specification: vendors apply it to a wide range of behaviors, so ask for the measured response to a phase jump, a voltage step and an islanding event.

## Key numbers
Grid-following needs a phase-locked loop and degrades below a short-circuit ratio of roughly 3 · grid-forming needs none and responds within a couple of milliseconds · converter fault current limited to about 1.1–1.5 times rated, against 5–7 times for a synchronous machine · grid-forming headroom usually costs 10–20% of converter rating or reserved state of charge · IEEE P2800.1 was authorized in December 2025 and is not yet published; NERC's grid-forming functional specification is a 2023 white paper · AGL's Broken Hill battery is 50 MW/50 MWh grid-forming, its Liddell battery 250 MW.

## Examples
AGL's Broken Hill battery in New South Wales, 50 MW/50 MWh of Fluence grid-forming storage built so the town can be islanded, and AGL's 250 MW Liddell battery. On the standards side, IEEE 2800-2022 covers inverter-based resources on transmission without requiring grid-forming, IEEE P2800.1 was authorized in December 2025 to fill that gap, NERC published a grid-forming functional specification for bulk-system batteries as a 2023 white paper, and the UNIFI Consortium, co-led by the National Laboratory of the Rockies, UT Austin and EPRI, maintains the leading voluntary specification.

## Economic profile
Grid-forming control is firmware, so the direct cost is small and every serious inverter vendor now offers it. The real costs are headroom and paperwork. Holding a voltage source behind an impedance means keeping current and energy in reserve for disturbances, which usually means oversizing the converter by something like 10–20% or reserving state of charge, and reserved capacity is capacity not being sold into the energy market. On top of that sits the interconnection burden: an electromagnetic-transient model of the plant, validated against hardware, plus studies a transmission planner will accept, which routinely adds months to a project schedule. Who pays for all this is still being worked out, and that is the actual bottleneck rather than the technology. In Australia, system-strength frameworks and procurement contracts have made grid-forming a normal requirement for new batteries; in the United States there is no market product that pays for it, so a developer buying the headroom is mostly buying a smoother interconnection study.

## Videos

- https://www.youtube.com/watch?v=2SOqdEX1-gA — How GRID FORMING INVERTERS are paving the way for 100% renewable energy. (Just Have a Think, 11 minutes, 100k+ views)
- https://www.youtube.com/watch?v=AJBrZhdHlLs — From Follower to Leader: How Grid-Forming Technology Puts Renewables at the Front of Grid Stability (National Laboratory of the Rockies, 3 minutes, 10k+ views)

## Further reading

[White Paper: Grid Forming Functional Specifications for BPS-Connected Battery Energy Storage Systems (NERC)](https://www.nerc.com/comm/RSTC_Reliability_Guidelines/White_Paper_GFM_Functional_Specification.pdf) · [Research Roadmap on Grid-Forming Inverters (National Renewable Energy Laboratory)](https://docs.nlr.gov/docs/fy21osti/73476.pdf)
