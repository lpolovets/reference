---
number: 1
name: "GPU (SIMT)"
part: 1
group: "Programmable accelerators"
workloads: [train, inf, tune, hpc]
precision: [fp32, bf16, fp8, fp4]
scale: [chip, node, rack, cluster]
power: mid
maturity: ship
---

## Description
A GPU runs thousands of threads in lockstep groups, a model usually called single instruction, multiple threads. Threads are scheduled in warps of 32, and the hardware hides memory latency by switching between warps rather than by caching aggressively, which is why a GPU tolerates a memory system that would starve a CPU. Modern parts pair that general shader machinery with dedicated matrix units that multiply small tiles in a single instruction, and those units supply almost all the throughput on machine-learning work. The general cores remain because real models are not only matrix multiplies: normalization, activation, sampling, and the data movement between kernels all run on the same device, and a design that could only multiply matrices would hand those back to the host across a slow link.

## Strengths and weaknesses
The strength is that it is programmable and everybody already targets it. A new model architecture runs on day one, badly if necessary, and a kernel can be written to make it run well. That flexibility is why research happens on GPUs even when a fixed-function part would serve a shipped workload more cheaply. The weakness is that generality costs area and power: a large fraction of the die is scheduling, register file, and cache that a dedicated matrix engine would not need, and the power budget per package has climbed past what air cooling handles. The other weakness is economic rather than technical, in that the parts are allocated rather than simply sold, so a buyer's throughput is often set by what was delivered rather than by what was designed.

## When to use
Use a GPU when the workload is still changing, when the team needs one target for both training and inference, or when the software the product depends on exists only in a vendor-specific form. Use it for training almost unconditionally at present, because the distributed training stack is mature here and immature nearly everywhere else. Move away from it for a stable, high-volume inference workload where a fixed-function part gives more tokens per watt, and for on-device work where the power budget rules it out entirely. If the model is small enough to be bandwidth-bound at batch one, check a cheaper part with comparable memory bandwidth before buying peak FLOPS that the workload cannot reach.

## Key numbers
Warps of 32 threads as the scheduling unit · datacenter packages drawing roughly 400 W to over 1 kW, with liquid cooling usual past about 700 W · HBM bandwidth in the low single-digit TB/s on current parts · matrix units supplying the large majority of peak throughput on transformer work · model FLOPs utilization commonly 30–50% on well-tuned training runs, lower on inference · native support spanning FP32 down to FP8 and FP4 on recent generations.

## Examples
NVIDIA's datacenter parts are the reference point and the bulk of the installed base; AMD's Instinct line is the closest architectural equivalent with a different software stack. Consumer parts from both vendors run the same programming model at lower memory capacity, which is why so much open-source inference work targets them.

## Economic profile
The chip is the single largest line in a cluster's capital, and everything else is a fraction of it. What complicates the arithmetic is that peak specifications describe a machine nobody reaches: model FLOPs utilization of 30–50% on a tuned training run means half the hardware paid for is idle at any moment, and that gap is closed with engineering rather than capital. Depreciation assumption matters more than list price, because a part that keeps serving inference for years after it stops being competitive for training has a very different cost per token in year five than in year one. Supply allocation has repeatedly been the binding constraint on what an operator can deploy, which puts terms of access, rather than unit price, at the center of most real negotiations.

## Videos

- https://www.youtube.com/watch?v=LfdK-v0SbGI — GPUs: Explained (IBM Technology, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=6stDhEA0wFQ — CUDA Explained - Why Deep Learning uses GPUs (deeplizard, 14 minutes, 100k+ views)

## Further reading
[CUDA C++ Programming Guide (NVIDIA)](https://docs.nvidia.com/cuda/cuda-c-programming-guide/) · [Efficiently Scaling Transformer Inference (arXiv)](https://arxiv.org/abs/2211.05102)
