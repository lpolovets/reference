---
number: 3
name: "CPU inference"
part: 1
group: "Programmable accelerators"
workloads: [inf, edge]
precision: [fp32, bf16, fp8, fp4]
scale: [chip, node]
power: low
maturity: ship
---

## Description
Server CPUs now carry matrix extensions that make them a usable inference device rather than only a host. The instructions operate on small tiles held in dedicated registers, which raises throughput on matrix multiplication by roughly an order of magnitude over the vector units that preceded them. What a CPU still lacks is memory bandwidth: server DRAM delivers hundreds of gigabytes per second where HBM delivers terabytes, so a CPU running a decode workload is bandwidth-starved for the same reasons any other device is, only sooner. The compensating advantage is capacity, since a server can hold far more DRAM than any accelerator holds HBM, and a large model that will not fit on one accelerator often fits in system memory without partitioning.

## Strengths and weaknesses
The strength is that the hardware is already bought and already idle. Inference on spare CPU capacity has no acquisition cost, no allocation queue, and no separate operational story, which makes it the obvious first deployment for a workload whose volume is unproven. It also runs anything, since there is no kernel coverage question on a CPU. The weakness is throughput per watt, which is poor enough that any workload with sustained volume moves to an accelerator on cost alone. Batch efficiency is limited by bandwidth rather than compute, so the usual trick of batching harder returns less than it would on a GPU.

## When to use
Use it for low-volume, latency-tolerant inference, for small models, and for the period before a workload's demand is known well enough to justify buying accelerators. It is also the right answer when the model must sit next to a large amount of data already in system memory, or when a deployment cannot host accelerators at all. Move to an accelerator once the workload runs continuously, since at that point the power and rack space consumed by CPU inference costs more than the accelerator would. Avoid it entirely for training beyond toy scale.

## Key numbers
Server DRAM bandwidth in the hundreds of GB/s against low single-digit TB/s for HBM · system memory capacity into the terabytes per socket against tens to hundreds of gigabytes of accelerator memory · matrix extensions raising matrix throughput by roughly an order of magnitude over prior vector units · typical server sockets at 200–400 W · no acquisition cost where existing fleet capacity is idle.

## Examples
Intel's AMX extensions and Arm's matrix and vector extensions are the two main lines. Hugging Face and ONNX Runtime both ship CPU execution paths that are the usual way this capacity actually gets used, and llama.cpp made quantized CPU inference ordinary on consumer hardware.

## Economic profile
The economics are unusual because the marginal cost of the hardware is often zero: a fleet already sized for peak web traffic has idle sockets most of the day, and inference is a way to fill them. That makes CPU inference cheap in exactly the situation where volume is low and unpredictable, and it stops being cheap the moment the workload is steady, because sustained CPU inference consumes power and rack space that an accelerator would use far more efficiently. The useful rule of thumb is that CPU inference wins on capital and loses on operating cost, so the crossover is set by duty cycle rather than by model size. For a vendor, this is a defensive market rather than a growth one, since it is sold as a use for hardware the customer already owns.

## Further reading
[GPU and CPU inference optimization (Hugging Face)](https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one) · [ONNX open standard for model interchange (ONNX)](https://onnx.ai/)
