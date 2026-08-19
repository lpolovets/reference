---
number: 32
name: "Disaggregated prefill and decode"
part: 6
group: "Inference deployments"
workloads: [inf]
precision: [bf16, fp8]
scale: [node, rack, cluster]
maturity: scale
---

## Description
The two phases of generating a response have opposite characteristics. Prefill reads the prompt and computes its key-value state in one pass, doing a great deal of arithmetic per byte fetched, so it is compute-bound. Decode then produces tokens one at a time, reading the whole weight set per token, so it is bandwidth-bound. Running both on the same machine means each phase interferes with the other: a long prefill blocks decoding for waiting users, and interleaving them leaves whichever resource the current phase does not need idle. Disaggregation runs the two on separate pools, transferring the computed cache between them.

## Strengths and weaknesses
The strength is that each pool can be sized and configured for one job. Prefill machines can be chosen for arithmetic, decode machines for memory bandwidth and capacity, and neither phase's latency is held hostage by the other, which improves both time to first token and inter-token latency at the same time. The weakness is the transfer: the key-value state computed during prefill has to move to the decode machine, and that state is large, so the interconnect between pools becomes a design constraint. The architecture also adds operational complexity and only pays back at a scale where both pools stay busy.

## When to use
Use it when serving at a scale where both pools can be kept loaded, and when the workload mixes long prompts with sustained generation, which is exactly where interference is worst. It suits inference providers and large product deployments. Avoid it at small scale, where the added complexity and the transfer cost exceed the interference being avoided, and where a single well-configured pool with continuous batching captures most of the available gain.

## Key numbers
Prefill compute-bound and decode bandwidth-bound, so the two phases stress opposite resources · time to first token set by prefill and inter-token latency by decode, allowing each to be optimized separately · key-value state transferred between pools on every request, making the link between them a sizing constraint · published results reporting substantial improvements in serving goodput under latency constraints against colocated execution · benefit contingent on both pools staying busy, so it degrades at low utilization.

## Examples
Splitwise and DistServe are the two published systems that established the approach and quantified the gain. Several commercial inference providers now run some version of it, and the major open serving engines have added support.

## Economic profile
This is a scheduling change that converts into hardware savings, and the mechanism is straightforward: separating the phases lets each pool run near its own limit rather than each holding the other back, so the same request rate needs fewer machines. It also allows genuinely different hardware in each pool, which opens the possibility of buying cheaper high-bandwidth parts for decode and compute-dense parts for prefill rather than one part that compromises on both. That flexibility is the more interesting long-term consequence, because it creates a market position for silicon that would be uncompetitive as a general accelerator.

## Further reading
[Splitwise: Efficient generative LLM inference using phase splitting (arXiv)](https://arxiv.org/abs/2311.18677) · [DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving (arXiv)](https://arxiv.org/abs/2401.09670)
