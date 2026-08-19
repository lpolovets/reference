---
number: 31
name: "OT cybersecurity"
part: 6
group: "Analytics and security"
layer: super
industries: [disc, proc, hybrid, log, bldg]
determinism: nrt
lockin: open
maturity: grow
---

## Description
Operational technology security protects the systems that run physical processes, and it differs from information technology security in what it prioritizes. In an office the ordering is confidentiality, integrity, availability; in a plant it is close to the reverse, because a control system that stops is a process that stops and possibly a hazard. That inversion drives everything else: patching windows are rare, systems run long past vendor support because replacing them means shutting production, and a scanning tool that probes a controller can knock it offline, so techniques routine in an enterprise are not acceptable here.

## Strengths and weaknesses
The strength of the established approach is that it is architectural rather than reliant on the endpoints: segmenting the plant into zones with controlled conduits between them limits what an intrusion reaches, and it works even though the devices inside cannot be patched or hardened. Passive monitoring builds an asset inventory and detects anomalies without touching the equipment. The weakness is that legacy protocols have no authentication at all, so anything with network access to a controller can command it, and segmentation is the only defense available for that.

## When to use
It applies everywhere, and the practical starting point is an asset inventory, since most plants cannot list what is connected. Segment the control network from the business network with a controlled boundary rather than a flat connection. Prefer passive monitoring over active scanning inside the control zone. Treat remote access for vendors and integrators as the highest-risk path, because it is the one most commonly exploited and the one most often left permanently enabled after a commissioning visit.

## Key numbers
Availability ranking above confidentiality, which inverts the usual security priorities · patching windows measured in scheduled outages per year rather than in days · legacy control protocols carrying no authentication, so network access equals command authority · zone and conduit segmentation the primary architectural control, since endpoint hardening is largely unavailable · vendor and integrator remote access a recurring intrusion path, frequently left enabled after the work is finished.

## Examples
The ISA/IEC 62443 series is the reference standard for this domain and defines the zone and conduit model. National agencies publish advisories and guidance specifically for industrial control systems, and the documented incidents affecting physical processes are the reason this became a board-level topic rather than a technical one.

## Economic profile
Spending here is driven by regulation and by insurance more than by demonstrated return, which is normal for a risk whose cost is a rare large event. The direct costs are segmentation hardware, monitoring, and the engineering to design zones without breaking the process. The cost that gets missed is operational: security controls that make routine work harder get bypassed, so a design that ignores how maintenance actually happens produces a documented architecture and an undocumented reality. For an investor, the sector has grown quickly because the installed base is enormous, largely unpatched, and increasingly connected, and none of those three conditions is changing soon.

## Further reading
[Guide to Operational Technology (OT) Security (NIST)](https://www.nist.gov/publications/guide-operational-technology-ot-security) · [Industrial Control Systems resources (CISA)](https://www.cisa.gov/topics/industrial-control-systems)
