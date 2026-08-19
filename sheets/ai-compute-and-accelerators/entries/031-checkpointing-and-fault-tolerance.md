---
number: 31
name: "Checkpointing and fault tolerance"
part: 6
group: "Training deployments"
workloads: [train]
scale: [cluster, multi]
maturity: ship
---

## Description
At thousands of accelerators running for weeks, component failures are routine rather than exceptional, and a synchronous training job cannot survive losing a participant. The standard response is periodic checkpointing: the model, optimizer state, and data position are written to storage often enough that a failure costs only the work since the last write. That write is not small, because optimizer state is several times the size of the model, so checkpointing is a substantial and recurring load on the storage system. The interval is a straightforward tradeoff, between time lost writing checkpoints and time lost redoing work after a failure.

## Strengths and weaknesses
The strength of frequent checkpointing is bounded loss: a failure costs at most one interval of progress. The weakness is that writing is expensive and, in the simplest implementation, synchronous, so the whole cluster waits. Asynchronous and sharded checkpointing address that by writing in the background and distributing the write across ranks, which is now standard. The remaining weakness is detection: a chip that has failed outright is easy to find, while one producing wrong results quietly or running slowly is not, and the second kind can corrupt a run or halve its speed without an obvious alarm.

## When to use
Checkpoint on any run long enough that losing its progress would matter, which at cluster scale means all of them. Set the interval from the observed failure rate and the checkpoint cost rather than by convention, since both vary widely between fleets. Use asynchronous sharded writes if the framework supports them. Invest in detecting slow and silently faulty nodes separately from failed ones, because stragglers cost throughput continuously where a hard failure costs it once.

## Key numbers
Optimizer state several times the model's size, so a checkpoint is much larger than the parameter count suggests · checkpoint interval set by balancing write cost against expected work lost per failure · asynchronous and sharded writing removing most of the synchronous stall · silent faults and stragglers harder to detect than hard failures and more damaging over a long run · storage bandwidth for checkpointing a real sizing input for the cluster rather than an afterthought.

## Examples
The optimizer state sharding techniques used to reduce training memory also shard the checkpoint, which is why the two are usually implemented together. Every major training framework now ships asynchronous checkpointing, and large operators publish little about their failure rates, which makes this one of the harder areas to benchmark externally.

## Economic profile
Fault tolerance is unglamorous and it directly sets the delivered throughput of an expensive asset. A cluster losing a meaningful share of its hours to restarts and stragglers is buying capacity it does not receive, and the fix is engineering and monitoring rather than more hardware. Storage sized for checkpoint bandwidth is a real capital line that gets underestimated in cluster budgets, and undersizing it converts into lost accelerator hours at a poor exchange rate. The strongest operators treat failure rate as a tracked metric with an owner, which is the practical difference between a cluster that delivers most of its nominal capacity and one that does not.

## Further reading
[ZeRO: Memory Optimizations Toward Training Trillion Parameter Models (arXiv)](https://arxiv.org/abs/1910.02054) · [Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism (arXiv)](https://arxiv.org/abs/1909.08053)
