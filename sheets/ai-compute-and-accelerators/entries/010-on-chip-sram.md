---
number: 10
name: "On-chip SRAM and scratchpad"
part: 2
group: "Memory technologies"
workloads: [train, inf, edge, hpc]
precision: [bf16, fp8, fp4]
scale: [chip]
maturity: ship
---

## Description
Every accelerator holds a working set in static memory on the die itself: register files, shared memory or scratchpad, and caches. This memory is one to two orders of magnitude faster than anything off-chip and costs no package-crossing energy, but it is measured in tens or hundreds of megabytes where external memory is measured in tens or hundreds of gigabytes. Almost all the performance engineering on an accelerator is about this gap. A kernel that keeps its working tile resident on-chip and reuses it many times runs near peak, and the same arithmetic written to fetch operands repeatedly from external memory runs at a fraction of it, on identical hardware.

## Strengths and weaknesses
The strength is that it is the only memory fast enough to keep the math units busy, which makes it the resource that skilled kernel work is really allocating. Techniques that reorganize a computation to fit its working set into on-chip memory have produced some of the largest speedups in the field without changing the mathematics at all. The weakness is capacity, and it does not scale well: SRAM has been shrinking more slowly than logic across recent process nodes, so each generation buys proportionally less on-chip memory than logic, and the imbalance the whole system suffers from gets slightly worse rather than better.

## When to use
This is not a purchasing decision so much as the thing that determines whether the hardware bought performs. The practical implication is that a workload's throughput depends on whether its kernels tile to the available on-chip memory, so a model with unusual shapes, very long sequences, or an operator without a fused implementation will underperform its specification. Where a choice does exist is architectural: dataflow parts spend far more area on SRAM and correspondingly less on external bandwidth, which suits models small enough to be held resident and suits nothing else.

## Key numbers
On-chip SRAM in the tens to low hundreds of megabytes per accelerator against tens to hundreds of gigabytes of external memory · access latency and bandwidth one to two orders of magnitude better than external DRAM · SRAM area scaling more slowly than logic on recent process nodes, so the ratio worsens each generation · fused attention implementations reporting large speedups purely by keeping tiles resident rather than by reducing arithmetic.

## Examples
FlashAttention is the clearest published case: it restructures attention so intermediate results stay in on-chip memory instead of being written out and read back, and gains substantial speed and memory savings while computing exactly the same result. Dataflow and wafer-scale architectures take the same idea to its limit by trying to hold the entire model on-chip.

## Economic profile
On-chip memory is expensive in the only currency that matters at design time, which is die area, and it competes directly with the math units for it. That tradeoff is one of the sharpest architectural decisions a vendor makes, and it is largely invisible to buyers because no specification sheet leads with SRAM capacity. Its economic significance for a customer is indirect but large: because achieving peak requires kernels tiled to this memory, the gap between a naive implementation and a tuned one is often a factor of two or more, which means engineering time substitutes for hardware purchases at a very favorable rate. Organizations without kernel expertise pay for that gap in capital instead.

## Further reading
[FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (arXiv)](https://arxiv.org/abs/2205.14135) · [FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning (arXiv)](https://arxiv.org/abs/2307.08691)
