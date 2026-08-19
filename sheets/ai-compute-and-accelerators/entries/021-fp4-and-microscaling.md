---
number: 21
name: "FP4 and microscaling formats"
part: 4
group: "Numeric formats"
workloads: [inf, edge]
precision: [fp4]
scale: [chip]
maturity: scale
---

## Description
Four bits allow sixteen distinct values, which is far too few to represent a tensor with a single scale factor. Microscaling formats make it work by attaching a shared exponent to each small block of values, typically 32 elements, so the scale adapts across the tensor rather than being fixed for the whole of it. The block scale is stored alongside the data and costs a small overhead, giving an effective width somewhat above four bits. This is the arrangement that has made sub-8-bit inference practical on real models rather than only on benchmarks, and recent hardware implements it natively rather than emulating it.

## Strengths and weaknesses
The strength is memory and bandwidth: a quarter of 16-bit, which on a bandwidth-bound decode translates almost directly into tokens per second and decides whether a large model fits on one accelerator at all. The weakness is accuracy, and at this width it is no longer negligible. Weight-only quantization to four bits is tolerable for many models; taking activations down as well is materially harder, and the KV cache is more sensitive again. Formats also differ between vendors and tools, so a quantized artifact is less portable than a 16-bit one.

## When to use
Use it when capacity or bandwidth is the binding constraint and an evaluation on the real task shows acceptable quality: serving a large model on fewer accelerators, or fitting a model onto edge hardware that could not otherwise hold it. Prefer weight-only quantization first, and treat activation and cache quantization as separate decisions with separate evidence. Avoid it for training, where the range and precision are insufficient, and avoid it where output quality is the product and the evaluation budget is not there.

## Key numbers
Four bits giving sixteen representable values, with a shared scale per block of typically 32 elements · effective width somewhat above 4 bits once block scales are counted · a quarter of the memory of 16-bit, so a 70-billion-parameter model occupies roughly 35 GB · weight-only quantization to 4 bits close to lossless on many models, with activation and cache quantization progressively harder · native hardware support recent rather than established.

## Examples
The microscaling formats were specified by a group of hardware and software vendors and are supported in recent accelerators. GPTQ and AWQ are the two widely used weight-only quantization methods that made 4-bit serving ordinary, and both are available in mainstream inference stacks.

## Economic profile
This is the lever that decides how many accelerators a given model needs, and the arithmetic is stark: a model that fits on one accelerator at four bits and requires two at eight bits has roughly half the serving cost, before any throughput difference. For edge deployment it is often the difference between running on the device and not running at all. The cost is evaluation and the risk of quiet quality loss, which is why the technique spread fastest among operators serving their own products, where the quality tradeoff is theirs to make, and slower among vendors serving customers who specified a model rather than a quality level.

## Further reading
[Microscaling Data Formats for Deep Learning (arXiv)](https://arxiv.org/abs/2310.10537) · [AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration (arXiv)](https://arxiv.org/abs/2306.00978)
