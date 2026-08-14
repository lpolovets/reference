---
number: 13
name: Multi-Terminal HVDC
part: 3
group: HVDC converters
voltage: [ehv]
roles: [bulk, cong, stab]
lead: yr5
siting: corr
maturity: emerg
---

## Description
Almost every HVDC link built so far runs point to point: one converter in, one converter out, one contract. A multi-terminal scheme connects three or more converters to a shared DC network, so power can be routed rather than merely shipped. The attraction is offshore. A meshed DC grid in the North Sea would let wind farms feed whichever shore needs power, and would let the same cables carry trade between countries when the wind is low. Making it work needs DC circuit breakers, converters from different vendors that interoperate, and a protection philosophy that does not exist yet in mature form.

## Strengths and weaknesses
A shared DC network uses far fewer cables and converters than a set of radial links doing the same job, and it turns single-purpose wind export assets into interconnectors that earn between weather events. Redundancy improves because losing one terminal need not lose the whole scheme. The obstacles are interoperability and protection. A DC fault propagates across the whole DC network in milliseconds with no natural current zero to help clear it, so either every converter must ride through or DC breakers must act faster than any AC breaker. Vendors' control systems have historically not worked together, which is why nearly every scheme is single-supplier.

## When to use
Plan for multi-terminal where several offshore projects will connect in the same sea area over a decade, since designing radial links one at a time forecloses the option. Regulators in the North Sea have started requiring it for exactly that reason. Do not commit a first-of-a-kind meshed scheme to a critical delivery date, and do not assume equipment from two vendors will interoperate without a demonstrated multi-vendor test program. For a single wind farm to a single shore, a point-to-point VSC link is cheaper, simpler, and available now.

## Key numbers
Three or more converter terminals on a shared DC network · a DC fault spreads across the network in milliseconds, against tens of milliseconds for AC clearing · European offshore plans envisage tens of GW of meshed capacity by the 2030s · almost all operating schemes today are single-vendor · interoperability testing is the pacing item, not converter hardware.

## Examples
The Zhoushan and Zhangbei multi-terminal projects in China, the largest operating examples; Kriegers Flak, which links Denmark and Germany through an offshore wind farm; the North Sea Wind Power Hub and related European programs; the InterOPERA project, set up specifically to make multi-vendor HVDC work.

## Economic profile
The savings are real, but they land on a different party than the costs. A meshed scheme needs far fewer cables and converters than the radial links doing the same job, so the money is saved across a whole sea area over a decade, while the first developer pays a premium for a converter specified to be extended later and waits years for the second terminal to appear. That is why North Sea schemes are being required by regulators rather than proposed by developers: no single project sponsor captures enough of the benefit to volunteer for it. The second revenue stream is cross-border trade, since the same cables can carry power between countries when the wind is low, and that depends on market rules on both shores rather than on the hardware. For an investor the pacing item is interoperability testing rather than converter cost. A demonstrated multi-vendor scheme is what turns tens of GW of European plans into orders.

## Videos

- https://www.youtube.com/watch?v=EzuExGQSO2o — Offshore wind power plant with HVDC transmission (tutorial) (Mikel De Prada, 13 minutes, 1k+ views)
- https://www.youtube.com/watch?v=yIcuf-_sLCo — Kriegers Flak combined grid solution – a grid of the future (Hitachi Energy, 3 minutes, under 1k views)
- https://www.youtube.com/watch?v=0u6IQghsYZU — Inside Siemens Energy's HVDC Offshore Platform (Inside Energy, 3 minutes, under 1k views)

## Further reading

[Protection of Multi-Terminal HVDC Grids: A Comprehensive Review (Energies)](https://doi.org/10.3390/en15249552) · [Atlantic Offshore Wind Transmission Study (National Laboratory of the Rockies)](https://www.osti.gov/biblio/2327027)
