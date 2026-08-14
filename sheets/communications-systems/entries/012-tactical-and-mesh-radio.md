---
number: 12
name: Tactical and Mesh Radio
part: 2
group: Fixed & tactical wireless
reach: [short, metro]
capacity: [kbps, mbps]
medium: rf
latency: low
maturity: dep
---

## Description
A tactical radio network has to work with no towers, no fiber and no fixed plan, so every radio is both an endpoint and a router. That is what a mobile ad hoc network is: nodes discover their neighbors, build routes across each other, and repair those routes as everything moves. Routing splits into two families. Proactive link-state protocols such as OLSRv2 flood topology continuously so a route is ready the instant it is needed, using multipoint relays so that only a chosen subset of neighbors rebroadcasts each update. Reactive protocols such as AODV find a route only when traffic appears, which saves overhead and costs delay on the first packet. Military waveforms mostly use proprietary variants of these ideas, with spread spectrum and frequency hopping layered underneath for jam resistance. The hardware ranges from legacy VHF sets like SINCGARS at 30–88 MHz carrying 16 kbps, up to modern MIMO mesh radios running 5–20 MHz channels in the UHF, L and S bands that deliver tens of megabits on a single hop. Alongside the mesh sits a different design, the pre-scheduled data link, of which Link 16 is the one everything else is compared to: a 12-second frame divided into 1,536 time slots, with each participant given slots in advance, hopping across 51 frequencies between 969 and 1206 MHz at roughly 77,000 hops per second.

## Strengths and weaknesses
The strength is that the network exists wherever the radios are, survives losing any node, and needs nobody to have surveyed the site first. The weakness is what relaying costs. A single-radio node is half duplex, so it must receive a packet and then retransmit it, which roughly halves usable throughput per hop, and interference makes it worse: a transmitting node also silences neighbors two hops away, so end-to-end throughput in a linear chain falls to about a third of the single-hop rate by two hops and settles near a quarter beyond about four. Across a whole network the scaling is worse again, with per-node capacity falling roughly as one over the square root of the node count, so a 50 Mbps radio can look like a few megabits per user once fifty of them are sharing the same air. The second weakness is that a mesh which beacons constantly is easy to find with direction-finding equipment, so low probability of detection and network liveness pull against each other. Size, weight and power is the third: a manpack transmitting 5–20 W is limited by battery, not by protocol.

## When to use
Use a MANET when the nodes move, the infrastructure is absent or expected to be destroyed, and the traffic is video, sensor feeds or file transfer that can tolerate variable rate. Size it by hop count rather than by radio specification, and assume a quarter of the single-hop rate once any path runs past three or four hops; if that is not enough, add a directional backhaul link or a dual-radio node on a separate channel rather than more mesh nodes. Use a slot-based network like Link 16 when many platforms must share one agreed picture with bounded, predictable latency and the message is small: it carries about 26.9 kbps in its standard format and up to roughly 107 kbps packed, over about 300 nautical miles of line of sight, but access is scheduled rather than contended, so it does not degrade when the network gets busy or when routing has to reconverge. Keep both. Nearly every unit that runs a wideband mesh also carries a narrowband link and a satellite or HF path behind it, because the failure modes are different and the cheapest insurance against a jammed band is a link on another one. If your application needs a guaranteed message within a known time, do not build it on a contention-based mesh.

## Key numbers
SINCGARS at 30–88 MHz carries 16 kbps; modern MIMO mesh radios on 5–20 MHz channels deliver tens of megabits on one hop · each relay hop roughly halves throughput, and a linear chain settles near a quarter of the single-hop rate beyond about four hops · per-node capacity across a network falls roughly as one over the square root of the node count · Link 16 uses a 12-second frame of 1,536 time slots, carrying about 26.9 kbps in the standard format and up to roughly 107 kbps packed, over about 300 nautical miles line of sight · it hops across 51 frequencies between 969 and 1206 MHz at roughly 77,000 hops per second · a manpack transmits 5–20 W · commercial mesh nodes run $5,000–20,000 against $30,000–80,000 for a certified military manpack.

## Examples
OLSRv2 (RFC 7181) and AODV, the two reference points every proprietary mesh protocol is described against; TrellisWare's TSM, Persistent Systems' Wave Relay, Silvus StreamCaster and Rajant InstaMesh, which are the mesh waveforms actually fielded; the US Army's Integrated Tactical Network and its two-channel manpack and leader radios from L3Harris and Collins Aerospace; Link 16 and its MIDS terminals, carried by thousands of aircraft, ships and ground stations across more than 30 nations, with TTNT and Link 22 as the higher-rate follow-ons.

## Economic profile
Two very different cost structures sit inside this category. Commercial mesh radios are a volume business now driven by drones and robotics rather than by infantry, and a Silvus- or Doodle-class node runs $5,000–20,000. A military radio with the same silicon inside costs several times that, $30,000–80,000 for a certified two-channel manpack, and the difference is almost entirely certification, environmental qualification and low volume rather than performance. Link 16 sits in a third bracket, with terminal installations historically running into the hundreds of thousands of dollars per platform, and that is exactly why it persists: the cost of replacing it is the cost of touching every aircraft, ship and command post in the alliance at once, which no capacity argument has been able to justify. What a buyer is actually paying for at the top of the range is the shared message catalog, since a track picture that thirty nations interpret identically is worth more than bandwidth. The commercial pull-through runs the other way and is the interesting part for an investor: uncrewed systems buy mesh radios in quantities infantry never did, which is funding waveform and MIMO development that then gets certified back into military programs.

## Videos

- https://www.youtube.com/watch?v=tYLU755T6_I — How Mesh Networks Work (The Berkman Klein Center for Internet & Society, 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=hKtvem2mE7o — Data Link Processing and Management (Northrop Grumman, 8 minutes, 10k+ views)

## Further reading

[RFC 7181: The Optimized Link State Routing Protocol Version 2 (Internet Engineering Task Force)](https://www.rfc-editor.org/rfc/rfc7181.html) · [Multifunctional Information Distribution System-Low Volume Terminal (MIDS-LVT) (Federation of American Scientists)](https://man.fas.org/dod-101/sys/ac/equip/mids-lvt.htm)
