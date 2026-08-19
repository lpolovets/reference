---
number: 29
name: "Distributed training frameworks"
part: 5
group: "Serving and runtime"
workloads: [train, tune]
precision: [bf16, fp8]
scale: [node, rack, cluster, multi]
maturity: ship
---

## Description
Training a model larger than one accelerator's memory requires splitting it, and there are three ways to do so that combine rather than compete. Data parallelism replicates the model and splits the batch, exchanging gradients each step. Tensor parallelism splits individual layers across chips, exchanging activations within every layer. Pipeline parallelism assigns different layers to different chips and streams microbatches through them. A fourth technique shards the optimizer state, gradients, and parameters across data-parallel ranks rather than replicating them, which removes the largest memory cost in training without changing the mathematics.

## Strengths and weaknesses
The strength is that the combination makes training at cluster scale possible at all, and the frameworks encapsulate enough of it that a team can run a large job without writing distribution code. Sharding optimizer state in particular removes a memory burden that is several times the model itself under common optimizers. The weakness is that the right combination depends on the model shape, the cluster topology, and the interconnect at every level, so the configuration space is large and the penalty for a poor choice is severe. Fault tolerance is the other weakness: at thousands of chips, failures are frequent enough that checkpointing strategy becomes part of the training plan.

## When to use
Keep tensor parallelism inside the scale-up domain where bandwidth supports per-layer exchange. Use pipeline parallelism to cross slower boundaries, accepting the bubble that pipelining introduces. Use data parallelism outermost, with sharded optimizer state when memory rather than bandwidth is the constraint. Beyond that, follow the framework's published guidance for the model shape rather than deriving it fresh, and validate scaling efficiency on a small run before committing a large one.

## Key numbers
Optimizer state under common optimizers costing several times the model's own parameter memory, which is what sharding removes · tensor parallelism exchanging data per layer and data parallelism per step, a difference of orders of magnitude in communication frequency · pipeline parallelism introducing an idle bubble that shrinks as microbatch count rises · scaling efficiency of 70–90% typical on well-configured large runs · failures frequent enough at thousands of chips that checkpoint interval is a planned tradeoff.

## Examples
Megatron-LM established the tensor and pipeline parallel implementations most stacks still follow, and ZeRO established optimizer state sharding. Both are integrated into the major frameworks, and JAX offers a different route in which the partitioning is expressed as annotations and the compiler generates the communication.

## Economic profile
The configuration chosen here decides how much of a cluster's capital delivers useful work, and the spread is wide enough to dominate hardware differences: a run at 60% scaling efficiency wastes a third of a fleet that a run at 90% would use. Because that gap is closed with expertise rather than equipment, organizations with strong systems teams get materially more out of identical hardware, and this is one of the clearest places where that advantage compounds. Checkpointing cost is the other economic term, since restart time after a failure is capacity lost, and at scale failures are routine rather than exceptional.

## Further reading
[ZeRO: Memory Optimizations Toward Training Trillion Parameter Models (arXiv)](https://arxiv.org/abs/1910.02054) · [JAX documentation (JAX)](https://docs.jax.dev/en/latest/)
