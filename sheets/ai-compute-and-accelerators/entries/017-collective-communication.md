---
number: 17
name: "Collective communication"
part: 3
group: "Scale-out networking"
workloads: [train, tune]
scale: [node, rack, cluster, multi]
maturity: ship
---

## Description
Distributed training is built from a small set of collective operations, of which all-reduce is the most important: every participant contributes a tensor, the values are summed, and every participant receives the result. Implemented naively that costs bandwidth proportional to the number of participants. Implemented as a ring, where each rank sends to its neighbor in two passes, the bandwidth each rank moves is roughly twice the tensor size regardless of how many ranks there are, which is what allows training to scale to thousands of chips. Tree and hierarchical variants trade bandwidth for latency on small messages, and libraries choose between them at runtime based on message size and topology.

## Strengths and weaknesses
The strength is that a well-implemented collective library hides an enormous amount of topology-specific engineering behind a stable interface, and gets most of the achievable performance without the model author knowing the network layout. Overlapping communication with computation, so gradients for early layers transfer while later layers are still computing, is what keeps scaling efficiency high. The weakness is that the abstraction leaks under stress: a slow link, a misconfigured congestion setting, or a straggler rank shows up as a collective that takes far longer than its size suggests, and diagnosing it requires exactly the topology knowledge the library exists to hide.

## When to use
Any training run past one node depends on this, so the decision is which strategy generates the collectives rather than whether to use them. Keep tensor parallelism inside the scale-up domain, where the all-reduce per layer is affordable, and use data or pipeline parallelism across the slower cluster fabric, where the exchange happens per step rather than per layer. Profile the collectives directly when scaling efficiency disappoints, since the cause is more often a network or straggler problem than a compute one.

## Key numbers
Ring all-reduce moving roughly twice the tensor size per rank regardless of rank count, which is what makes large-scale training tractable · tree and hierarchical algorithms chosen at runtime for small messages where latency dominates · overlapping communication with computation as the main lever on scaling efficiency · one straggler rank able to hold up an entire collective, so tail latency rather than average bandwidth sets the step time.

## Examples
NCCL is the standard implementation on NVIDIA hardware and the reference for how these algorithms are selected in practice; RCCL is the equivalent elsewhere. Megatron-LM and ZeRO are the two published strategies that most production training stacks build on, and each generates a distinctly different collective pattern.

## Economic profile
Collectives are where a cluster's advertised capacity turns into delivered capacity, and the gap is large. Scaling efficiency of 70% against 90% is a difference of roughly a quarter of the fleet, and it is recovered through library tuning, topology-aware placement, and stragglers being found and removed, all of which are operational rather than capital. That makes this one of the highest-return areas for engineering effort in large-scale training, and it is also why organizations without deep systems teams get less out of identical hardware than those with them.

## Further reading
[NVIDIA Collective Communications Library (NVIDIA)](https://developer.nvidia.com/nccl) · [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism (arXiv)](https://arxiv.org/abs/1909.08053)
