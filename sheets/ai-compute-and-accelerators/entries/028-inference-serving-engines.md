---
number: 28
name: "Inference serving engines"
part: 5
group: "Serving and runtime"
workloads: [inf]
precision: [bf16, fp8, fp4]
scale: [chip, node, rack]
maturity: ship
---

## Description
A serving engine turns a model file into a service that answers many concurrent requests efficiently. The work it does is scheduling rather than arithmetic. Requests arrive independently, at different prompt lengths, and finish at different times, so a naive server that groups them into fixed batches wastes most of its capacity waiting for the slowest member. Continuous batching instead admits new requests into the running batch as others complete, keeping the accelerator busy. Combined with paged key-value cache allocation and prefix sharing, these scheduling decisions determine throughput far more than the choice of framework underneath.

## Strengths and weaknesses
The strength is that these are pure software gains against hardware already bought, and they are large: published results for paged allocation with continuous batching report multiples of throughput improvement over earlier serving approaches at equal quality. The engines also absorb quantization, speculative decoding, and distributed serving behind one interface. The weakness is operational complexity, since the scheduler now has many interacting parameters and the failure modes are subtle: a configuration that maximizes throughput can produce latency variance that a product cannot accept, and the tradeoff is not visible in a single number.

## When to use
Use one for any production serving deployment; writing a scheduler by hand is not a reasonable use of engineering time. Choose based on the features that match the workload rather than on headline throughput: prefix sharing matters when many requests share a system prompt, structured output support matters when the product needs it, and multi-node serving matters only if the model does not fit on one machine. Measure the latency distribution rather than the mean, since the scheduling decisions that raise throughput usually widen the tail.

## Key numbers
Continuous batching admitting new requests as others finish, rather than waiting for a whole batch · paged cache allocation with prefix sharing reported to raise serving throughput by a large multiple at unchanged hardware · time to first token governed by prefill and inter-token latency by decode, so the two have different bottlenecks · throughput and tail latency trading off against each other through batch size and admission policy · quantization, speculative decoding, and parallelism all exposed as engine configuration rather than model changes.

## Examples
vLLM is the widely used open implementation and the origin of paged attention. TensorRT-LLM, SGLang, and several vendor stacks occupy the same position with different strengths. Most commercial inference providers run a modified version of one of these rather than something written from scratch.

## Economic profile
This layer decides cost per token more directly than the hardware does, because it sets how many concurrent requests a given accelerator serves. Moving from naive batching to a modern engine has repeatedly delivered improvements that would otherwise have required several times the hardware, which makes it the first place to look when serving costs are too high. The reason it is not universally exploited is that tuning it well requires understanding the workload's arrival pattern and length distribution, and that knowledge sits with the product team rather than the infrastructure team, so the gains go unclaimed where the two do not talk.

## Further reading
[vLLM documentation (vLLM)](https://docs.vllm.ai/en/latest/) · [Efficient Memory Management for Large Language Model Serving with PagedAttention (arXiv)](https://arxiv.org/abs/2309.06180)
