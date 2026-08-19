---
number: 14
name: "Scale-up fabric"
part: 3
group: "Scale-up fabric"
workloads: [train, inf, tune]
scale: [node, rack]
power: vlow
maturity: ship
---

## Description
Scale-up fabric is the high-bandwidth interconnect joining accelerators inside a single node or rack so that they behave as one larger device. It is not a network in the usual sense: links are short, the topology is fixed at build time, and bandwidth per link is an order of magnitude above what cluster networking delivers. That bandwidth is what makes tensor parallelism viable, where a single matrix multiplication is split across several chips and partial results are exchanged on every layer. Split that way, the chips have to talk constantly, so the fabric is on the critical path of every token rather than being a background transfer.

## Strengths and weaknesses
The strength is that it turns a memory capacity problem into a solvable one. A model too large for one accelerator can be split across eight without the collapse in throughput that splitting across a slower link would cause. It also lowers latency at small batch, which is exactly where serving is hardest. The weakness is that it is proprietary and it does not extend. Bandwidth of this kind is achievable over a few meters, so the coherent domain stops at a node or a rack, and beyond that boundary the machine falls back to ordinary networking with an order of magnitude less bandwidth. That discontinuity shapes how every large model is partitioned.

## When to use
Use tensor parallelism across a scale-up domain when a model does not fit on one accelerator, and keep it inside the domain, since crossing to the slower fabric with the same parallelism strategy performs badly. Beyond the domain boundary, switch to pipeline or data parallelism, which exchange far less per step. When buying, treat the size of the coherent domain as a first-order specification rather than a detail, because it decides the largest model that can be served without a partitioning strategy that costs throughput.

## Key numbers
Per-link bandwidth roughly an order of magnitude above cluster networking · coherent domains typically spanning 8 accelerators in a node, extending to rack scale on recent designs · tensor parallelism exchanging data on every layer, so fabric latency enters every token · reach limited to a few meters, which is what sets the domain boundary · vendor-specific protocols rather than an interoperable standard.

## Examples
NVIDIA's NVLink and its rack-scale switched form are the widely deployed case. AMD's Infinity Fabric fills the same role in its accelerator nodes, and TPU pods use a purpose-built interconnect that extends further than most. Ultra Accelerator Link is the industry effort to produce an open equivalent.

## Economic profile
This is the most defensible part of an accelerator vendor's position, and it is sold as a system rather than a chip. A customer buying into a proprietary fabric is buying the node and the rack topology with it, which raises switching cost far above what the silicon alone would create, and it is why competitors have organized around an open standard rather than competing link by link. For the buyer, the practical consequence is that price comparison at the chip level is misleading: the relevant unit is the coherent domain, since that is what determines which models can be served and what the partitioning strategy has to be.

## Further reading
[TPU v4: An Optically Reconfigurable Supercomputer for Machine Learning (arXiv)](https://arxiv.org/abs/2304.01433) · [Efficiently Scaling Transformer Inference (arXiv)](https://arxiv.org/abs/2211.05102)
