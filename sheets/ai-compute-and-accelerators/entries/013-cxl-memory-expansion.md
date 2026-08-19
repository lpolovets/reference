---
number: 13
name: "CXL memory expansion"
part: 2
group: "Bandwidth and capacity limits"
workloads: [inf, hpc]
scale: [node, rack]
power: vlow
maturity: early
---

## Description
Compute Express Link is a cache-coherent protocol that runs over the PCIe physical layer and lets memory sit behind a link rather than on a processor's own channels. That allows capacity to be added to a node without adding sockets, and allows a pool of memory to be shared between hosts and reallocated as workloads need it. For machine learning the attraction is capacity rather than speed: CXL-attached memory has bandwidth and latency closer to a distant DRAM channel than to HBM, so it is a tier below system memory rather than a competitor to on-package memory.

## Strengths and weaknesses
The strength is that it attacks stranded capacity, which is a real and measurable waste in large fleets where memory is provisioned per server for a peak that rarely arrives. Pooling lets that headroom be shared. For inference, it offers somewhere to put a KV cache or model weights that would otherwise not fit, at a cost far below refusing the request. The weakness is that the latency and bandwidth penalty is real, so anything placed there has to be genuinely cold or the performance loss exceeds the capacity gain. Adoption has also been slower than the specifications suggested, since the benefit depends on software that understands memory tiering.

## When to use
Use it when capacity rather than bandwidth is what runs out, and when the data placed there is accessed rarely enough to tolerate the extra latency. Offloading a KV cache for paused or long-idle conversations is the clearest inference case, since the alternative is evicting the conversation entirely. Fleet-level pooling makes sense at a scale where stranded memory is a large enough number to justify the integration work. Avoid it for anything on the critical path of token generation, and avoid assuming a roadmap benefit that depends on tiering software that is not yet in place.

## Key numbers
Runs over the PCIe physical layer, so bandwidth per link is far below on-package memory · latency higher than local DRAM and far higher than HBM, placing it as a distinct memory tier · capacity addable without adding CPU sockets · pooling intended to recover memory stranded by per-server provisioning · adoption still early relative to specification maturity, with the benefit gated on tiering-aware software.

## Examples
The Compute Express Link Consortium publishes the specification and the member list, which now includes every major processor and memory vendor. Early deployments are mostly memory expansion within a server rather than the shared pools the specification enables, which is the simpler case and the one that needs least software support.

## Economic profile
The pitch is recovering money already spent. In a large fleet, memory provisioned per server for peak demand sits idle most of the time, and pooling converts that stranded capacity into usable capacity without new purchases, which is a rare kind of saving in this market. Against that, the switches, controllers, and integration work are real costs, and the benefit only appears at a fleet size where stranded memory is a large number. For inference specifically the value is narrower than the general case: it provides somewhere cheap to put cold state, which raises the number of conversations a machine can hold without raising the number it can actively serve.

## Further reading
[Compute Express Link specification and overview (CXL Consortium)](https://computeexpresslink.org/) · [Efficient Memory Management for Large Language Model Serving with PagedAttention (arXiv)](https://arxiv.org/abs/2309.06180)
