---
number: 12
name: "KV cache"
part: 2
group: "Bandwidth and capacity limits"
workloads: [inf]
precision: [bf16, fp8, fp4]
scale: [chip, node]
maturity: ship
---

## Description
Generating text one token at a time would require recomputing attention over the entire preceding sequence at every step. The key-value cache avoids that by storing the key and value tensors for tokens already processed, so each new token attends against stored state rather than recomputing it. The cost is memory, and it grows with sequence length and with the number of concurrent requests. On a long-context serving workload the cache can exceed the size of the model weights, at which point the binding constraint on how many users a machine serves is not the model at all but the accumulated conversation state behind them.

## Strengths and weaknesses
The strength is that it converts a quadratic recomputation into a linear read, which is what makes autoregressive generation practical at all. The weakness is that its memory grows without bound as conversations lengthen, and naive implementations reserve a contiguous block sized for the maximum possible length, which wastes most of it. That waste is severe enough that fixing it was worth a research contribution: paging the cache into fixed-size blocks, allocated on demand and shared between requests with common prefixes, raised achievable batch sizes substantially on unchanged hardware.

## When to use
The cache is not optional in production serving; the decisions are how to store it and when to discard it. Quantize it when memory is the constraint and quality has been measured, since it is more sensitive than weight quantization and degradation shows up on long context first. Page it rather than reserving contiguous blocks. Share prefixes when many requests begin with the same system prompt, which is common enough in production to be worth engineering for. Offload it to host memory only when the alternative is refusing the request, since the transfer cost is high.

## Key numbers
Cache size growing linearly with sequence length and with concurrent requests · at long context it can exceed the model weights, becoming the limit on concurrency · naive contiguous allocation wasting a large fraction of reserved memory, since most requests do not reach the maximum length · paged allocation with prefix sharing reported to raise serving throughput by a large multiple at unchanged hardware · quantizing the cache to 8 bits roughly halving its footprint, with quality effects that have to be measured on long context.

## Examples
vLLM's paged attention is the reference implementation and is now standard in most serving stacks. Prefix caching across requests that share a system prompt is a common production optimization, and grouped-query attention is the architectural response, reducing the number of key-value heads and therefore the cache directly.

## Economic profile
This is where serving cost is quietly decided. Concurrency per accelerator sets cost per request, and on long-context workloads concurrency is limited by cache memory rather than by weights or arithmetic, so an engineering change to how the cache is allocated moves unit economics as much as a hardware upgrade would. The paged-allocation result is the clearest example available of software returning a large multiple on throughput from hardware already bought. It also explains a pricing pattern visible across inference providers: long-context requests cost disproportionately more than their token count suggests, because they occupy scarce cache memory for the whole duration of the conversation.

## Videos

- https://www.youtube.com/watch?v=80bIUggRJf4 — The KV Cache: Memory Usage in Transformers (Efficient NLP, 9 minutes, 100k+ views)
- https://www.youtube.com/watch?v=o0gkdZBtwEg — How KV Cache Speeds Up LLMs for Faster AI Models on GPUs (IBM Technology, 11 minutes, 100k+ views)

## Further reading
[Efficient Memory Management for Large Language Model Serving with PagedAttention (arXiv)](https://arxiv.org/abs/2309.06180) · [vLLM documentation (vLLM)](https://docs.vllm.ai/en/latest/)
