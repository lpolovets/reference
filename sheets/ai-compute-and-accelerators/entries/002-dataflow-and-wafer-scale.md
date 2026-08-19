---
number: 2
name: "Dataflow and wafer-scale"
part: 1
group: "Programmable accelerators"
workloads: [train, inf, hpc]
precision: [bf16, fp8]
scale: [chip, node, rack]
power: high
maturity: early
---

## Description
A dataflow architecture lays the computation out in space rather than stepping through it in time. Instead of repeatedly loading weights from external memory into a fixed set of math units, the machine holds large amounts of on-chip memory next to a very large array of processing elements and streams activations through a graph that has been compiled onto the fabric. Wafer-scale integration takes the idea to its physical limit by declining to cut the wafer into dies at all, so an entire wafer becomes one processor with on-chip bandwidth that no package-level interconnect can match. The engineering problems that follow are power delivery, heat removal, and yield: a wafer will contain defects, so the design has to route around bad regions rather than discard the part.

## Strengths and weaknesses
The strength is memory bandwidth and latency that package boundaries otherwise prevent, which directly attacks the constraint that limits most inference. Holding weights in on-chip SRAM removes the external memory read that sets the token rate on conventional parts, and a model that fits entirely on-chip can run at rates a bandwidth-bound GPU cannot approach. The weaknesses are capacity and software. On-chip memory is measured in gigabytes where HBM is measured in hundreds, so a large model has to be split across many units, and the compiler that maps a graph onto a spatial fabric is doing a harder job than one emitting kernels for a conventional device. Utilization also falls sharply when a model's shape does not match the fabric's.

## When to use
Consider it when latency at small batch is the product requirement rather than throughput at large batch, since that is exactly where conventional parts are weakest and this approach is strongest. It suits a stable model that fits the available on-chip memory, and a customer willing to work within one vendor's compiler. Avoid it when the model changes weekly, when the workload is training at cluster scale where the surrounding software matters more than the chip, or when the deployment cannot supply the power and cooling density that a wafer-scale part requires. If the model does not fit on-chip, most of the argument for the architecture disappears.

## Key numbers
On-chip SRAM in the order of gigabytes per unit against hundreds of gigabytes of HBM on a conventional accelerator · on-chip bandwidth orders of magnitude above package-level memory bandwidth · wafer-scale parts drawing well over a kilowatt and needing engineered power and cooling · redundancy designed in so that a wafer with defects still yields a working part · compilation of a model graph onto the fabric taking minutes to hours rather than seconds.

## Examples
Cerebras builds wafer-scale engines with the whole wafer as one device. Groq and SambaNova ship dataflow architectures at conventional die sizes with large on-chip memory and static compilation. All three sell access through their own clouds as well as as hardware, which is a direct response to the software adoption problem.

## Economic profile
This class competes on tokens per second per dollar at small batch rather than on peak throughput, which is a genuinely different sales argument and a narrower one. The capital cost per unit is high and the addressable workload is narrower than a GPU's, so utilization risk falls on the vendor more than on the buyer, which is much of why these companies operate their own clouds instead of only selling boxes. That model also solves the software problem commercially rather than technically: a customer using a hosted endpoint never has to port anything. The strategic question for an investor is whether the latency advantage survives the next generation of conventional memory, since HBM bandwidth has been rising quickly and the gap being sold is a gap in someone else's roadmap.

## Further reading
[Cerebras product chip overview (Cerebras)](https://www.cerebras.ai/product-chip) · [Efficiently Scaling Transformer Inference (arXiv)](https://arxiv.org/abs/2211.05102)
