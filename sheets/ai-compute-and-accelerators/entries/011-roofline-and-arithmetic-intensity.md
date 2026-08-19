---
number: 11
name: "Roofline and arithmetic intensity"
part: 2
group: "Bandwidth and capacity limits"
workloads: [train, inf, tune, hpc]
scale: [chip, node]
maturity: ship
---

## Description
Arithmetic intensity is the ratio of operations performed to bytes moved from memory. Every machine has its own ratio of peak arithmetic to peak bandwidth, and comparing the two tells you which resource a kernel exhausts first: below the machine's ratio the kernel is bandwidth-bound and adding arithmetic capability changes nothing, above it the kernel is compute-bound and bandwidth is not the problem. Plotted, this gives the roofline, a ceiling that slopes with bandwidth at low intensity and flattens at peak throughput. It is the single most useful piece of analysis for deciding what hardware to buy, and it is routinely skipped in favor of comparing peak specifications that most workloads never approach.

## Strengths and weaknesses
The strength of the model is that it is simple, cheap to apply, and usually right about the first-order question. Knowing that a workload sits on the sloped part of the roofline immediately rules out a whole category of purchases and points at quantization and batching instead. The weakness is that it is a first-order model: it ignores cache behavior, occupancy, launch overheads, and the fact that real workloads are a sequence of kernels with different intensities. It tells you which wall you are against, not how close to that wall an implementation gets.

## When to use
Apply it before any hardware comparison. Measure or estimate the bytes moved and the operations performed for the workload's dominant kernels, compare against candidate machines' ratios, and only then look at specifications. It is most valuable when a purchase decision is being made on peak FLOPS, because that is exactly the situation where it most often overturns the conclusion. It is less useful for tuning a single kernel that is already near its ceiling, where profiling tools give better information.

## Key numbers
Transformer decoding at batch one having very low arithmetic intensity, since each token reads the whole weight set to produce one output · prefill and training having high intensity because the same weights serve many tokens at once · batching raising intensity roughly in proportion to batch size until the KV cache exhausts memory · a worked example, derived here rather than published: a 70-billion-parameter model at BF16 occupies about 140 GB, so a 3 TB/s memory system reads it roughly 21 times a second and caps an unbatched stream near 21 tokens a second regardless of arithmetic throughput.

## Examples
The published analyses of transformer inference scaling apply this reasoning explicitly to decide partitioning strategies and batch sizes. The same arithmetic explains why quantization is so effective on decode and so unhelpful on prefill, and why serving systems work hard to batch requests that arrive independently.

## Economic profile
This is analysis rather than a product, and its economic value is in purchases avoided. A buyer who establishes that a serving workload is bandwidth-bound stops paying for arithmetic that cannot be reached, and typically finds that a cheaper part with comparable memory bandwidth delivers the same tokens per second for less money. The same analysis redirects effort toward quantization and batching, both of which are engineering rather than capital. Getting this wrong is expensive in a specific and common way: fleets sized on peak FLOPS comparisons are routinely over-provisioned in arithmetic and under-provisioned in memory, and neither error is visible until the workload runs.

## Further reading
[Efficiently Scaling Transformer Inference (arXiv)](https://arxiv.org/abs/2211.05102) · [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (arXiv)](https://arxiv.org/abs/2205.14135)
