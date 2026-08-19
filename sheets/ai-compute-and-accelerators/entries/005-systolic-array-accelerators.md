---
number: 5
name: "Systolic array accelerators"
part: 1
group: "Fixed-function and specialized"
workloads: [train, inf, tune]
precision: [bf16, fp8]
scale: [chip, node, rack, cluster, multi]
power: mid
maturity: ship
---

## Description
A systolic array is a grid of multiply-accumulate cells wired so that operands flow from one cell to its neighbors on each clock rather than being fetched individually from memory. A weight value loaded into a cell is reused by every activation that passes through it, so one memory read serves many operations, and that reuse is the point: it attacks the bandwidth constraint by moving less data rather than by moving data faster. The tradeoff is rigidity. The array has a fixed shape, and a matrix multiplication whose dimensions do not match it leaves cells idle, so the compiler spends much of its effort tiling and padding real model shapes onto the hardware's shape.

## Strengths and weaknesses
The strength is efficiency on the operation that dominates transformer workloads: for large, well-shaped matrix multiplications this is close to the most arithmetic per watt any programmable approach delivers, and it needs less control logic and register file than a general processor. Coupled with a purpose-built interconnect, it scales to very large training jobs. The weaknesses are utilization on awkward shapes, and everything that is not a matrix multiply. Attention, normalization, and sampling all have to run somewhere, and a design that under-provisions those units finds them limiting the whole pipeline. Availability is the other practical weakness, since the significant deployments are captive to the companies that built them.

## When to use
Use it where the workload is dominated by large matrix multiplications and the model shape is known well enough to be compiled onto the array efficiently, which describes most large-scale training and much high-volume serving. It suits organizations willing to work in a framework the vendor supports well rather than at the kernel level. Avoid it for research on unusual architectures where shapes change constantly, for workloads that are mostly attention rather than dense matrix multiplication, and where the hardware is only available as a cloud service in a region the product cannot use.

## Key numbers
Weight reuse across the array so that one memory read serves many multiply-accumulate operations · utilization falling sharply when matrix dimensions do not divide evenly into the array shape · deployments scaling to thousands of chips joined by a purpose-built fabric · precision typically BF16 and FP8 rather than the full range a GPU supports · the original datacenter TPU study reporting large efficiency gains over contemporary CPUs and GPUs on production inference.

## Examples
Google's TPU is the canonical example and the most documented, with published architecture papers from the first generation through v4. Amazon's Trainium and Inferentia and several Chinese datacenter accelerators use related structures. The published TPU work is the best public description of how such a machine is actually built and scheduled.

## Economic profile
Most of the significant systolic-array capacity was built by companies to serve their own workloads, which changes the economics from a product sale into an avoided purchase. That vertical position removes the software adoption problem, since the same organization owns the model, the framework, and the chip, and it removes the margin a merchant vendor would take. It also means published pricing reflects a cloud service rather than silicon, so comparing it against a GPU list price compares two different things. For an investor the question is whether a merchant market exists at all, since the two largest deployments are captive and the parts are rented rather than sold.

## Videos

- https://www.youtube.com/watch?v=GKQz4-esU5M — Tensor Processing Units (TPUs) Explained (The Coding Gopher, 17 minutes, 50k+ views)
- https://www.youtube.com/watch?v=RBmOgQi4Fr0 — How Nvidia GPUs Compare To Google’s And Amazon’s AI Chips (CNBC, 16 minutes, 1m+ views)

## Further reading
[In-Datacenter Performance Analysis of a Tensor Processing Unit (arXiv)](https://arxiv.org/abs/1704.04760) · [Introduction to Cloud TPU (Google Cloud)](https://cloud.google.com/tpu/docs/intro-to-tpu)
