---
number: 25
name: "CUDA and vendor lock-in"
part: 5
group: "Programming models"
workloads: [train, inf, tune, hpc]
scale: [chip, node, rack, cluster]
maturity: ship
---

## Description
CUDA is a programming model, a compiler, and a very large body of libraries built over nearly two decades. Its importance is not the language, which is a modest extension of C++, but everything layered above: the linear algebra, communication, and deep-learning primitive libraries that frameworks call, and the accumulated kernels written against them. A competing accelerator does not have to reproduce the language. It has to reproduce the libraries, the framework integrations, the profiling tools, and the tacit knowledge of thousands of engineers, and that is the part that has proved hard to replicate at speed.

## Strengths and weaknesses
The strength for a user is that everything works and everything is documented, which shortens the path from research to production more than any hardware advantage would. For the vendor it is the most durable competitive asset in the industry, because it compounds: more users produce more kernels, which make the platform more valuable. The weakness for a user is exactly that dependence, since it converts a hardware purchasing decision into a platform commitment. The weakness for the ecosystem is that portability layers consistently lag, so alternatives arrive with a real performance and coverage gap even when the silicon is competitive.

## When to use
For most teams this is a default rather than a decision, and the useful question is how much exposure to accept. Writing against framework-level abstractions rather than vendor primitives keeps options open at some cost in peak performance, and is worth doing where the workload is not performance-critical. Writing custom kernels is worth it where a small number of operations dominate runtime, and that work should be expected to be vendor-specific. For a buyer evaluating an alternative accelerator, the question to ask is what fraction of the stack would have to be rewritten, since that is the real switching cost.

## Key numbers
Nearly two decades of accumulated libraries, tools, and kernels rather than a language advantage · framework-level code often portable, kernel-level code rarely so · alternative platforms typically arriving with both a performance gap and an operator-coverage gap against equivalent silicon · translation layers usually reaching a fraction of native performance on unported code · the switching cost concentrated in a minority of the code that consumes the majority of runtime.

## Examples
AMD's ROCm is the closest direct equivalent and has narrowed the gap most on the frameworks rather than at the kernel level. OpenCL and SYCL are the vendor-neutral standards. Triton is the most successful practical answer, in that it lets kernels be written once at a higher level and compiled to more than one target.

## Economic profile
The software moat is worth more than any single generation of silicon, and it is the reason competing parts have repeatedly failed to take share despite competitive specifications. For an investor the useful test is where a customer's code sits: a stack written entirely against framework abstractions can move with an engineering sprint, while one with hand-tuned kernels cannot move at any reasonable cost. That distinction, rather than benchmark performance, is what predicts whether an alternative vendor can win an account. It also explains why the most credible challenges have come from organizations large enough to fund their own compiler and kernel work rather than from customers choosing on price.

## Videos

- https://www.youtube.com/watch?v=pPStdjuYzSI — Nvidia CUDA in 100 Seconds (Fireship, 3 minutes, 1m+ views)

## Further reading
[CUDA C++ Programming Guide (NVIDIA)](https://docs.nvidia.com/cuda/cuda-c-programming-guide/) · [OpenCL open standard for parallel programming (Khronos Group)](https://www.khronos.org/opencl/)
