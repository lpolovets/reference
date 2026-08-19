---
number: 18
name: "Cluster network topology"
part: 3
group: "Scale-out networking"
workloads: [train, hpc]
scale: [cluster, multi]
maturity: ship
---

## Description
How the switches are wired decides what the collectives can achieve. A fat tree provides uniform bandwidth between any pair of endpoints and is the general-purpose answer, at the cost of a large amount of switching in the upper layers. Machine-learning traffic is not general purpose: it is dominated by a small number of predictable collective patterns, which allows a topology tuned to those patterns to deliver comparable performance with less switching. Rail-optimized designs exploit this by connecting each accelerator's network port to a separate switch plane, so a collective across corresponding ranks stays within one plane and never contends with the others.

## Strengths and weaknesses
The strength of a tuned topology is cost: matching the wiring to the traffic removes switching that a general-purpose design would need, and the savings at cluster scale are substantial. Placement-aware scheduling then keeps a job's ranks in positions where its collectives stay local. The weakness is rigidity. A topology tuned for one parallelism strategy performs worse on another, and a cluster shared between training and inference, or between teams with different strategies, gives back much of the benefit. Reconfigurable optical switching is one answer to that, at the cost of a great deal of complexity.

## When to use
Tune the topology when the cluster is dedicated to training with a known parallelism strategy and is large enough for switching cost to matter, which usually means thousands of accelerators. Keep a conventional fat tree when the fleet is shared, mixed, or expected to run workloads that are not yet defined, since the flexibility is worth more than the switching saved. In every case, match job placement to the topology, because an optimal wiring with careless scheduling performs like neither.

## Key numbers
Fat tree providing uniform bandwidth between all endpoints at the cost of substantial upper-layer switching · rail-optimized designs keeping each collective within one switch plane, cutting the switching required · machine-learning traffic dominated by a few predictable collective patterns rather than arbitrary pairs · optically reconfigurable topologies used at large scale to reshape the network per job · placement-aware scheduling required for any tuned topology to deliver its advantage.

## Examples
The published TPU v4 work describes optical circuit switching used to reconfigure the topology for individual jobs, which is the most documented example of a network that changes shape to match the workload. Rail-optimized designs are now common in large GPU clusters, and most operators publish little about their exact layouts.

## Economic profile
Switching is a real fraction of network capital, and network is a real fraction of cluster capital, so topology decisions move the total by a visible amount at scale. The deeper economic effect is on utilization rather than capital: a topology that forces jobs into poor placements leaves accelerators waiting on collectives, and idle accelerators are the most expensive thing in the building. That is why large operators invest in placement and scheduling well beyond what the hardware cost alone would justify, and why the flexibility of a general topology is often worth its extra switching in a fleet whose workloads keep changing.

## Further reading
[TPU v4: An Optically Reconfigurable Supercomputer for Machine Learning (arXiv)](https://arxiv.org/abs/2304.01433) · [NVIDIA Collective Communications Library (NVIDIA)](https://developer.nvidia.com/nccl)
