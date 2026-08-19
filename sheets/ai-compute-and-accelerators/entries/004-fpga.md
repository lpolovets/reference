---
number: 4
name: "FPGA"
part: 1
group: "Programmable accelerators"
workloads: [inf, edge, hpc]
precision: [bf16, fp8, fp4]
scale: [chip, node]
power: low
maturity: ship
---

## Description
An FPGA is an array of configurable logic blocks, arithmetic slices, and on-chip memory joined by a programmable interconnect, so the hardware itself is defined after manufacture. For machine learning that means the arithmetic can be built at whatever precision the model actually needs rather than at the precision a fixed device happens to offer, and a pipeline can be laid out to match one specific network with no instruction fetch or scheduling overhead. The cost is that building that pipeline is a hardware design task. Vendor toolchains now accept models from ordinary frameworks and generate the configuration, which has narrowed the gap, but a design that reaches the part's potential still involves engineering closer to chip design than to software.

## Strengths and weaknesses
The strengths are deterministic latency, arbitrary precision, and the ability to put custom logic next to the model, which is why FPGAs persist in signal processing, networking, and instrumentation where the inference is one stage of a larger real-time pipeline. Because the datapath is built rather than scheduled, per-inference latency is predictable in a way that a GPU's is not. The weaknesses are throughput per dollar against a comparable ASIC or GPU, and development cost. Reconfiguration is also slow enough that switching between models is a deployment event rather than a runtime decision.

## When to use
Use an FPGA when the inference has to happen inside an existing real-time pipeline, when latency has to be bounded rather than merely low on average, or when the precision or operator set is unusual enough that fixed hardware wastes most of its throughput. It suits low and medium volumes where an ASIC's mask cost cannot be justified. Avoid it for large language model serving at scale, where memory bandwidth rather than arithmetic flexibility is the constraint and an FPGA has no bandwidth advantage, and avoid it wherever a team without hardware engineers has to maintain the result.

## Key numbers
On-chip memory in the tens of megabytes, far below any HBM-equipped accelerator · deterministic per-inference latency, typically bounded to within microseconds by design · reconfiguration taking milliseconds to seconds, so model switching is not a runtime operation · arbitrary precision, including formats no fixed accelerator supports · development effort measured in engineer-months where a GPU port is measured in days.

## Examples
AMD's Vitis AI and Intel's OpenVINO FPGA paths are the two mainstream toolchains. The common production use is in network appliances, medical instruments, and defense systems where the model is one block in a pipeline that also does filtering, protocol handling, or sensor fusion.

## Economic profile
Unit cost is high relative to throughput, and the case is almost never made on tokens per dollar. It is made on the system: an FPGA that absorbs the inference plus the signal processing plus the interface logic replaces several components, and the comparison is against that whole bill of materials rather than against an accelerator. Development cost is the number that decides the outcome, and it is large enough that the volume has to be low for the mask cost of an ASIC to remain unjustified while high enough to repay the engineering. That squeeze is narrow, which is why the FPGA share of machine-learning inference has stayed modest even as the tools improved.

## Further reading
[Vitis AI development environment (AMD)](https://www.xilinx.com/products/design-tools/vitis/vitis-ai.html) · [OpenCL open standard for heterogeneous programming (Khronos Group)](https://www.khronos.org/opencl/)
