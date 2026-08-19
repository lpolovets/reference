---
number: 10
name: "Industrial wireless"
part: 2
group: "Wireless and interoperability"
layer: field
industries: [proc, log, bldg, disc]
determinism: slow
lockin: multi
maturity: grow
---

## Description
Wireless in a plant covers several distinct technologies serving different jobs. Mesh protocols built for process instrumentation carry slow measurements from sensors where running cable would cost more than the instrument. Wireless local networks serve mobile equipment, handhelds, and vehicles. Private cellular networks, increasingly built on 5G, offer wide coverage with managed quality of service across a large site. What they share is that radio is a shared and variable medium, so none of them is used where a control loop's deadline must be met.

## Strengths and weaknesses
The strength is the avoided cable. In a process plant, installing a wired instrument in a remote location can cost several times the instrument, and wireless removes most of that, which is why it took hold in monitoring first. Mobility is the second strength, and it is the reason logistics operations depend on it. The weaknesses are determinism, power, and security. Radio conditions change as the plant changes, battery-powered devices need a maintenance routine of their own, and a wireless network is reachable from outside the fence in a way that cable is not.

## When to use
Use it for monitoring, for rotating or mobile equipment, and for locations where cable installation is disproportionate to the value of the measurement. Use private cellular where a large site needs consistent coverage and prioritization that ordinary wireless local networks cannot guarantee. Do not use it for a control loop with a hard deadline or for a safety function, since neither can accept a variable medium. Plan battery replacement as a maintenance activity from the start, because a fleet of dead sensors is the common failure of these projects.

## Key numbers
Installed cost of a wired process instrument in a remote location often several times the instrument itself, which is the saving wireless captures · battery lives typically measured in years and dependent on reporting rate · latency variable rather than bounded, which rules out hard real-time control · private cellular offering site-wide coverage with managed quality of service against the best-effort behavior of wireless local networks · additional attack surface requiring the same segmentation discipline as any other plant network.

## Examples
WirelessHART and ISA100 are the established process instrumentation meshes. Wireless local networks carry the bulk of handheld and vehicle traffic in warehouses. Private 5G deployments have grown in large plants and ports where coverage and prioritization matter more than cost.

## Economic profile
The case is almost always avoided installation cost rather than the device, and it is strongest exactly where cable is most expensive: long distances, hazardous areas, and anything that moves. That makes wireless a retrofit technology more than a new-build one, since a greenfield plant is being cabled anyway. The recurring costs are batteries and the radio survey work that keeps a network reliable as the plant's layout changes, and both are routinely underestimated at the point the project is approved.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [Industrial Control Systems resources (CISA)](https://www.cisa.gov/topics/industrial-control-systems)
