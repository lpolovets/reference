---
number: 23
name: "Sparsity"
part: 4
group: "Model-level techniques"
workloads: [inf, train]
precision: [bf16, fp8]
scale: [chip]
maturity: scale
---

## Description
Most trained networks contain many weights that contribute little, and removing them reduces both storage and arithmetic. The difficulty is that unstructured sparsity, where any weight may be zero, does not help hardware built around dense matrix tiles: the zeros still occupy lanes. Structured sparsity solves this by constraining the pattern so hardware can exploit it, most commonly by requiring that exactly two of every four consecutive weights are zero, which allows the hardware to store only the non-zeros plus a small index and to skip the rest. That constraint costs some accuracy relative to unstructured pruning, and buys a speedup that actually appears.

## Strengths and weaknesses
The strength is a genuine reduction in both memory and arithmetic on supported hardware, composable with quantization, so the savings multiply rather than compete. The weakness is that the accuracy recovery usually requires retraining or fine-tuning after pruning, which is far more expensive than post-training quantization and puts it out of reach for teams that only have inference infrastructure. The achieved speedup is also well below the nominal ratio, because only the matrix multiplications benefit and the rest of the model does not.

## When to use
Use it where the model is stable, the volume is high enough to repay a fine-tuning run, and the hardware supports the structured pattern natively. It suits an organization serving its own model at scale far better than one serving many third-party models, since each would need its own pruning and recovery. Prefer quantization first, since it is cheaper and gives a larger saving on bandwidth-bound work, and add sparsity on top only where the additional gain justifies the retraining.

## Key numbers
Two-of-four structured pattern the common hardware-supported form, giving nominal halving of stored weights and matrix operations · realized speedup well below the nominal figure, since only matrix multiplication benefits · accuracy recovery typically requiring fine-tuning after pruning rather than being free · composable with quantization, so the memory savings multiply · unstructured sparsity giving better accuracy at a given ratio but no speedup on dense hardware.

## Examples
The two-of-four pattern supported in recent accelerator generations is the widely deployed structured form, with published recipes for pruning and recovering accuracy. Mixture-of-experts routing is a different and now more influential kind of sparsity, applied at the level of whole subnetworks rather than individual weights.

## Economic profile
Sparsity has delivered less than it once promised, and the reason is instructive: the saving is in arithmetic, while most inference is limited by memory bandwidth, so halving the operations on a bandwidth-bound workload changes little. Its economics are therefore best on compute-bound work, which is training and prefill rather than decode, and that is exactly where the retraining cost is hardest to justify. The result is a technique with real but narrow value, and it is largely why attention has shifted to quantization and to expert-level sparsity, both of which reduce bytes moved rather than operations performed.

## Further reading
[Accelerating Sparse Deep Neural Networks (arXiv)](https://arxiv.org/abs/2104.08378) · [Efficiently Scaling Transformer Inference (arXiv)](https://arxiv.org/abs/2211.05102)
