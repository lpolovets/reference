---
number: 7
name: "Edge NPUs"
part: 1
group: "Fixed-function and specialized"
workloads: [inf, edge]
precision: [fp8, fp4]
scale: [chip]
power: vlow
maturity: ship
---

## Description
An edge neural processing unit is a block on a phone, laptop, or embedded system-on-chip that runs models within a power budget measured in watts rather than hundreds of watts. The design constraints are different in kind from a datacenter part: there is no HBM, memory is shared with the rest of the system, and the thermal budget is whatever the enclosure can shed without a fan. Efficiency therefore comes from low precision, from keeping weights in on-chip memory where possible, and from operator sets tuned to the small models these devices actually run. Nearly every recent phone and laptop silicon carries one, so the installed base is enormous and mostly idle.

## Strengths and weaknesses
The strengths are power, latency, and privacy. Inference on the device costs no network round trip and no server capacity, keeps data local, and works without connectivity, which matters for a growing set of regulated and consumer applications. The weakness is capacity. Shared LPDDR bandwidth and a few gigabytes of usable memory bound what can run, so on-device models are small, quantized, and specialized rather than general. Fragmentation is the other real weakness: every vendor's NPU has its own runtime and quantization requirements, so shipping one model across the installed base means shipping and validating several conversions.

## When to use
Use it when latency, privacy, offline operation, or per-inference server cost are what the product is about, and when a small quantized model is genuinely sufficient for the task. It is the right home for wake words, transcription, image processing, and classification. Route to a server when the task needs a large model, when quality is the product, or when the model has to be updated more often than the client can be. The common pattern is a hybrid, where the device handles what it can and escalates the rest, and the hard engineering is in deciding which is which.

## Key numbers
Power budgets from well under a watt on embedded parts to a few watts on laptop silicon · shared system memory rather than dedicated HBM, so bandwidth is a fraction of a datacenter part's · models typically quantized to 8 bits or below to fit · a separate runtime and conversion path per vendor, so one model becomes several validated builds · installed base in the billions of devices across phones and laptops.

## Examples
Apple's Neural Engine, Qualcomm's Hexagon, and the NPU blocks in recent laptop silicon from Intel, AMD, and Qualcomm are the volume examples. Embedded parts from Arm and a long tail of microcontroller vendors carry much smaller versions for always-on sensing.

## Economic profile
The silicon is effectively free to the developer, since it ships inside a device the customer already bought, and that is the whole economic argument: an inference that runs on the handset costs the product company nothing per call, where the same inference on a server has a marginal cost that scales with usage. For a consumer product with millions of users and a high call rate, moving work on-device can be the difference between a viable margin and none. The cost sits in engineering instead, in the conversion, quantization, and per-vendor validation needed to ship across a fragmented installed base, and that cost is paid per model rather than per user.

## Further reading
[Microscaling Data Formats for Deep Learning (arXiv)](https://arxiv.org/abs/2310.10537) · [ONNX open standard for model interchange (ONNX)](https://onnx.ai/)
