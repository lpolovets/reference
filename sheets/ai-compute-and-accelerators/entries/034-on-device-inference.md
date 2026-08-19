---
number: 34
name: "On-device inference"
part: 6
group: "Inference deployments"
workloads: [inf, edge]
precision: [fp8, fp4]
scale: [chip]
power: vlow
maturity: scale
---

## Description
On-device inference runs the model on the user's hardware rather than on a server. The constraints are memory, power, and thermal: a phone has a few gigabytes available to an application and a budget of a few watts sustained before it throttles, which bounds model size to something well under what a server would run. The compensating advantages are that the inference costs the product company nothing per call, works without connectivity, and keeps data on the device, which matters for regulated categories and is increasingly a product claim in its own right.

## Strengths and weaknesses
The strength is unit economics and privacy at once, which is a rare combination. A feature that runs locally has no marginal serving cost, so usage can grow without a cost line growing with it. The weakness is capability, since the models that fit are small and quantized, and the gap against server models is large enough to be obvious on hard tasks. Fragmentation compounds it: each vendor's accelerator has its own runtime, quantization requirements, and operator coverage, so shipping across the installed base means validating several builds of the same model.

## When to use
Use it where the task is narrow enough for a small model to do well, where latency or offline operation is part of the value, or where per-call server cost would not support the usage. Wake words, transcription, image processing, and classification fit. Use a hybrid where the device handles common cases and escalates the rest, which captures most of the cost saving while preserving quality on hard inputs. Do not use it where quality is the product, or where the model must change more often than the client can be updated.

## Key numbers
A few gigabytes of memory available to an application on a phone against tens to hundreds on a server accelerator · sustained power budgets of a few watts before thermal throttling · models quantized to 8 bits or below to fit at all · zero marginal cost per inference against a per-call server cost that scales with usage · a separate runtime and validation pass per silicon vendor, so one model becomes several shipped artifacts.

## Examples
Speech recognition, keyboard prediction, and photo processing are the mature high-volume cases. Recent phone and laptop platforms ship small language models in the operating system with developer access, which moves the fragmentation problem from the application to the platform.

## Economic profile
The saving is structural rather than incremental: a feature that runs on the device has no cost line that grows with usage, which changes what can be offered for free and at what scale. For a consumer product with high call rates, that difference frequently decides whether the feature ships at all. The costs move into engineering and are paid per model rather than per user, in conversion, quantization, and per-vendor validation, and they recur every time the model is updated. The practical consequence is that on-device works best for features stable enough to amortize that pipeline across many releases.

## Further reading
[Microscaling Data Formats for Deep Learning (arXiv)](https://arxiv.org/abs/2310.10537) · [ONNX open standard for model interchange (ONNX)](https://onnx.ai/)
