---
number: 25
name: "Hazardous-area protection"
part: 5
group: "Certification and hazardous areas"
layer: field
industries: [proc, hybrid]
determinism: slow
lockin: open
maturity: std
---

## Description
Where flammable gas, vapor, or dust may be present, electrical equipment must not be able to ignite it, and there are several accepted ways to guarantee that. Intrinsic safety limits the energy in the circuit so that no spark or hot surface can carry enough energy to ignite the atmosphere, which is why it is preferred for instrumentation: the equipment can be worked on live. Explosion-proof enclosures take the opposite approach, containing an internal explosion and cooling the escaping gases below the ignition temperature. Purging maintains a clean overpressure inside an enclosure so the hazardous atmosphere never enters.

## Strengths and weaknesses
Intrinsic safety's strength is that maintenance can be done without a permit to work in the live circuit, which saves an enormous amount of time over a plant's life. Its weakness is the energy limit, which restricts what the circuit can do and requires barriers and careful loop calculation. Explosion-proof equipment is unrestricted in power, and its weakness is that it is heavy, expensive, and must be shut down and de-energized before opening, so every maintenance task becomes a permit job. Purged enclosures suit large equipment and add a utility dependency, since a purge failure requires shutdown.

## When to use
Use intrinsic safety for field instrumentation and anything that will be maintained regularly, since the operational saving compounds. Use explosion-proof construction where the power required exceeds what intrinsic safety allows, such as motors and heavy equipment. Use purging for large panels and analyzers where neither alternative is practical. Establish the area classification first, since the zone and the gas group determine what is acceptable, and equipment certified for one classification is not automatically acceptable in another.

## Key numbers
Area classified by how often a flammable atmosphere is present, which determines the protection required · intrinsic safety limiting circuit energy below the ignition energy of the specified gas group, allowing live maintenance · explosion-proof enclosures containing an internal explosion and cooling escaping gases below ignition temperature · purged enclosures requiring a maintained overpressure, with shutdown on purge failure · equipment certification specific to zone, gas group, and temperature class rather than general.

## Examples
Refineries, chemical plants, grain handling, and paint facilities are the common classified environments. Intrinsic safety barriers and isolators sit between the safe-area control system and the field device, and are what makes the instrumentation loop intrinsically safe as a system rather than only at the instrument.

## Economic profile
Hazardous-area equipment costs several times the general-purpose equivalent, and the installation costs more again through conduit, sealing, and certification documentation. The larger and less visible cost is operational: every maintenance task in a classified area carries permit requirements and time that a safe-area task does not, which is the strongest argument for choosing intrinsic safety wherever the power budget allows it. Getting area classification right is worth real money in both directions, since an over-classified area buys unnecessary equipment forever and an under-classified one is a serious incident waiting to happen.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [Control of hazardous energy, lockout and tagout (US Occupational Safety and Health Administration)](https://www.osha.gov/control-hazardous-energy)
