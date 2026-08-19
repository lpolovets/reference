---
number: 27
name: "Kernel libraries"
part: 5
group: "Programming models"
workloads: [train, inf, tune, hpc]
scale: [chip]
maturity: ship
---

## Description
Beneath every framework sits a set of hand-written kernels for the operations that dominate runtime: matrix multiplication, attention, normalization, and the collective primitives. These are written by specialists against a specific architecture's memory hierarchy and instruction set, and the difference between a competent implementation and an expert one is routinely a factor of two or more on identical hardware. Attention is the clearest case. Restructuring it so that tiles remain in on-chip memory, rather than materializing the full attention matrix in external memory, produced large speed and memory improvements while computing exactly the same result.

## Strengths and weaknesses
The strength is leverage: a handful of kernels account for most of the runtime of most models, so effort concentrated there returns more than effort spread across a framework. Because the improvements are mathematically exact, they carry no quality tradeoff to evaluate. The weakness is that this work is architecture-specific and perishable. A kernel tuned for one generation's memory hierarchy needs revisiting for the next, and the pool of engineers who can do it well is small, which is a real constraint on how fast any alternative hardware platform can close its performance gap.

## When to use
Use the vendor or community library version of every standard operation rather than a naive implementation, since the gap is large and the libraries are free. Write a custom kernel when profiling shows a single operation dominating runtime and no library version fits the shape, and expect the effort to be measured in engineer-weeks and to need maintenance across hardware generations. For unusual model architectures, budget for kernel work explicitly rather than assuming the library covers it.

## Key numbers
A small number of operations accounting for most of the runtime of a typical model · expert kernels routinely delivering a factor of two or more over competent naive implementations · fused attention reporting substantial speedups and memory savings while producing identical results · kernels needing revision each hardware generation as the memory hierarchy changes · the supply of engineers able to do this work being a practical constraint on alternative platforms.

## Examples
FlashAttention and its successor are the best-documented examples of the technique and are now standard across serving and training stacks. Vendor libraries for linear algebra, deep-learning primitives, and collectives are the layer that frameworks call by default, and community kernel collections have grown to cover much of what the vendor libraries do not.

## Economic profile
Kernel engineering is the highest-leverage spending available to a large operator, because the gains apply to hardware already bought and require no additional capital. An engineer who improves a dominant kernel by 30% has effectively added 30% to the fleet's capacity for that workload. The constraint is people rather than money, since the skill is scarce and takes years to develop, which is why this capability concentrates in a small number of organizations and why open-sourced kernels have had outsized influence on the industry's overall efficiency.

## Further reading
[FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning (arXiv)](https://arxiv.org/abs/2307.08691) · [Triton documentation (Triton)](https://triton-lang.org/main/index.html)
