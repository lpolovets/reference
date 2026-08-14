---
number: 34
name: Software-Defined Networking and Slicing
part: 7
group: Networking & operations
reach: [metro, global]
capacity: [mbps, tbps]
latency: sub
maturity: scale
---

## Description
Software-defined networking means separating the control plane, which decides where traffic goes, from the forwarding plane, which moves it, and putting the decision in software that can see the whole network at once. The first widely used version was OpenFlow, published in 2008 and standardized by the Open Networking Foundation from 2011, which let a controller write forwarding rules directly into a switch. Almost no production wide-area network works that way now. What shipped instead is a controller driving standard protocols, using BGP-LS to learn the topology, PCEP or NETCONF to install paths, and segment routing to carry them, which leaves the routers able to keep forwarding when the controller is unreachable. Network slicing applies the same idea to a mobile network: a slice is an end-to-end logical network spanning radio, transport and core, identified by an S-NSSAI, with its own scheduling treatment and its own service-level agreement, and 3GPP defines standard slice types for mobile broadband, low-latency traffic, machine-type devices and vehicles. A device can be attached to at most eight slices at once. Slicing needs a 5G standalone core, because the non-standalone architecture most 5G networks launched with anchors the control plane in the LTE core and has nowhere to put a slice identifier.

## Strengths and weaknesses
A controller with a global view can do things no per-hop protocol can. Google's B4 inter-datacenter network, described publicly in 2013, keeps its links close to fully loaded by scheduling large transfers centrally, against the 30–40% average utilization typical of a wide-area network sized for its worst hour. SD-WAN, the commercial product built on the same idea, is the part of this that clearly paid: it replaced branch MPLS circuits costing roughly $600–1,500 a month with business broadband at $100–300, and used per-packet path selection to hold the application quality the private circuit used to guarantee. Slicing has produced very little revenue, and the reasons are specific rather than a matter of it being early. It needs a standalone core, which fewer than a third of commercial 5G networks have deployed; it needs devices, ordering systems and sales compensation that can express a slice; and a capacity guarantee is only worth paying for when the network is congested, which is a few hours a day in a few places. Enterprises that genuinely need a guarantee mostly buy a private cellular network instead, because they can see the equipment and nobody else can reallocate it.

## When to use
If you are buying wide-area connectivity for tens or hundreds of branch sites, use SD-WAN. It is the one part of this with an obvious payback, and the arithmetic is just the circuit bill. If your backbone carries more traffic than shortest-path routing spreads evenly, put a controller on top of segment routing and let it compute paths, but keep the routers able to run without it, because a controller outage should not be a network outage. If you are evaluating a plan whose revenue depends on selling slices, discount it heavily unless the operator already runs a standalone core, the customer's traffic really competes with consumer traffic in the same sectors, and the customer can verify what was delivered. If the requirement is guaranteed capacity at a fixed site, price a private cellular network first, since it removes the argument about who gets the spectrum when the cell fills. And if a proposed slice is a quality-of-service class under a new name, treat it as one: dedicated bearers and dedicated access point names have been available since LTE and cost less to operate.

## Key numbers
B4 keeps links close to fully loaded against 30–40% typical wide-area utilization · branch MPLS circuits at roughly $600–1,500 a month against business broadband at $100–300 · fewer than a third of commercial 5G networks run the standalone core slicing requires · a device can be attached to at most 8 slices at once · four standard 3GPP slice types, covering mobile broadband, low latency, machine-type devices and vehicles · OpenFlow published in 2008 and standardized from 2011.

## Examples
Google's B4 wide-area network, the first large software-defined backbone described in public; the Open Networking Foundation's OpenFlow specification and the ETSI NFV industry specification group, which set most of the vocabulary; SD-WAN products such as Cisco Viptela, VMware VeloCloud, Fortinet Secure SD-WAN and HPE Aruba EdgeConnect; T-Mobile US T-Priority, launched in September 2024 as a 5G slice for first responders; 3GPP TS 28.530, which defines what a slice is and what has to be managed.

## Economic profile
The two halves of this have opposite economics. SD-WAN is a straight substitution: the customer buys an appliance and a subscription, usually a few hundred dollars a month per site, and stops paying $600–1,500 for a private circuit, so the payback shows on the first bill and the market grew to a few billion dollars a year on that basis. Slicing is a large fixed cost with no matching revenue line yet. An operator has to deploy a standalone core, an orchestration layer, and changes to ordering, assurance and billing systems before anything spanning radio, transport and core can be sold at all, and none of that produces an invoice until an enterprise buys a slice. The marginal cost of one more slice is close to zero once all of it exists, which is what makes the model attractive on paper, but the fixed cost lands years earlier and the willingness to pay has been small. Where money has appeared it is in public safety and large events, where the buyer values priority during exactly the congested hour a slice is good for, and T-Mobile's first responder service is the clearest example. The useful question for an investor is which customer has a verifiable problem that a dedicated bearer or a private cellular network does not already solve more cheaply; slicing works technically, and that has not been the constraint.

## Videos

- https://www.youtube.com/watch?v=Nh2hXUuKXyQ — Software Defined Networking - Computerphile (Computerphile, 9 minutes, 100k+ views)
- https://www.youtube.com/watch?v=SEL-9-P9J8A — 5G Network Slicing Defined | Mpirical (Mpirical, 19 minutes, 50k+ views)

## Further reading

[Software-Defined Networking (SDN) Definition (Open Networking Foundation)](https://www.opennetworking.org/sdn-definition/) · [ETSI TS 128 530: Management and orchestration; Concepts, use cases and requirements (ETSI / 3GPP)](https://www.etsi.org/deliver/etsi_ts/128500_128599/128530/16.03.00_60/ts_128530v160300p.pdf)
