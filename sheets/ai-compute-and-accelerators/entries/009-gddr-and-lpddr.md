---
number: 9
name: "GDDR and LPDDR"
part: 2
group: "Memory technologies"
workloads: [inf, edge]
precision: [bf16, fp8, fp4]
scale: [chip]
power: vlow
maturity: ship
---

## Description
GDDR is graphics DRAM soldered around a processor on the board, trading HBM's extreme width for higher per-pin signaling rates and far simpler packaging. LPDDR is the low-power mobile line, shared with the rest of a system-on-chip and optimized for energy per bit rather than peak throughput. Neither approaches HBM's bandwidth, and both cost a fraction as much per gigabyte and need no advanced packaging step. For a large class of inference work that tradeoff is the right one, because the workload is limited by capacity or by cost rather than by the last increment of bandwidth.

## Strengths and weaknesses
The strengths are price, availability, and capacity per dollar. A part using GDDR can ship in volume without competing for the packaging capacity that gates HBM, which in a constrained market is a commercial advantage rather than only a technical one. The weakness is bandwidth, which is the specification that sets decode rate, so a GDDR-equipped part serving a large model at small batch will be slower in direct proportion. LPDDR adds a further constraint in that bandwidth is shared with everything else on the chip, so the memory available to the model depends on what the rest of the system is doing.

## When to use
Use GDDR where cost per unit of capacity matters more than peak bandwidth: smaller models, batch workloads that can amortize weight reads across many sequences, and consumer or workstation deployments. Use LPDDR wherever the power budget rules out everything else, which in practice means every phone, laptop, and embedded device. Move to HBM when the workload is genuinely bandwidth-bound at the batch size the product needs, since below that point the extra cost buys throughput the workload cannot use.

## Key numbers
Per-part bandwidth in the hundreds of GB/s against low single-digit TB/s for HBM · cost per gigabyte a fraction of HBM's · no advanced packaging requirement, so supply follows ordinary DRAM capacity · LPDDR bandwidth shared with the rest of the system-on-chip rather than dedicated to the accelerator · capacity per board often higher than an HBM part of similar price.

## Examples
Consumer and workstation graphics parts use GDDR and are widely used for inference and for small-scale fine-tuning. LPDDR sits behind every phone and laptop NPU. Several inference-focused datacenter parts have chosen GDDR deliberately to avoid the HBM supply queue.

## Economic profile
The argument is capacity per dollar and availability, and in a market where HBM is rationed the second matters as much as the first. A part that ships because its memory is not supply-constrained can take share from a better part that cannot be bought, which is a commercial dynamic rather than a technical one and has repeatedly decided outcomes in this market. For the buyer, the honest comparison is tokens per second per dollar at the batch size actually used, since GDDR closes much of the gap under batching and closes none of it at batch one. For consumer hardware, LPDDR's economics are simply the device's economics, since the memory is bought for the whole system rather than for the model.

## Further reading
[GPU and CPU inference optimization (Hugging Face)](https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one) · [Microscaling Data Formats for Deep Learning (arXiv)](https://arxiv.org/abs/2310.10537)
