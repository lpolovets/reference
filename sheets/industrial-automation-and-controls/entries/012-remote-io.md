---
number: 12
name: "Remote and distributed I/O"
part: 3
group: "I/O and sensing"
layer: field
industries: [disc, proc, hybrid, log, bldg]
determinism: ms10
lockin: single
maturity: std
---

## Description
Rather than running every sensor and actuator wire back to a central cabinet, remote I/O places small modules out in the plant and connects them to the controller over a network. Each module terminates the field wiring locally and carries the signals digitally from there. The change is mostly economic: the long expensive runs are replaced by one network cable, and the field wiring becomes many short runs. Modern modules also report their own status, channel by channel, so a broken wire or a shorted output is identified rather than inferred.

## Strengths and weaknesses
The strength is installed cost. Wiring is a large share of any sizable automation project, and distributing I/O removes most of the long runs along with the enormous central cabinets that terminated them. Channel-level diagnostics are the second benefit and often the larger one over the plant's life. The weaknesses are that the network becomes a single point of failure for everything downstream unless the topology is chosen to tolerate a break, and that the modules live in the plant environment rather than in a clean cabinet, so ingress protection and temperature rating matter.

## When to use
Use it wherever field devices are spread over any distance, which is nearly all plants of size. Use a ring topology where the loss of a cable segment must not stop production, since a line topology drops everything past the break. Keep I/O central where the machine is small and self-contained, since the network and the modules cost more than the short wire runs they would save. Match the ingress and temperature rating to where the module will actually sit rather than to the cabinet it was specified from.

## Key numbers
Field wiring a large share of installation cost on any plant of size, which is what distributing I/O attacks · one network cable replacing many long parallel runs back to a central cabinet · channel-level diagnostics identifying broken wires and shorted outputs rather than leaving them to be traced · ring topologies surviving a single cable break where line topologies do not · ingress and temperature ratings becoming a selection criterion once modules leave the cabinet.

## Examples
Every controller vendor offers remote I/O families over its preferred industrial Ethernet protocol, and block I/O rated for direct machine mounting has largely displaced cabinet-mounted racks in discrete manufacturing. Process plants use the same idea with modules rated for hazardous areas.

## Economic profile
This is one of the clearest cost reductions in plant construction, and the saving is in labor and copper rather than in the electronics. Pulling and terminating a long multicore run is expensive, and reducing the count of those runs shows up directly in the installation quote. The second saving arrives over the plant's life through diagnostics, since a fault located by the system rather than by an electrician with a meter is repaired in a fraction of the time. Against both, the modules themselves cost more than plain terminal blocks, which is why very small machines still centralize.

## Further reading
[EtherNet/IP technology overview (ODVA)](https://www.odva.org/technology-standards/key-technologies/ethernet-ip/) · [Data acquisition systems and software (National Instruments)](https://www.ni.com/en/shop/data-acquisition.html)
