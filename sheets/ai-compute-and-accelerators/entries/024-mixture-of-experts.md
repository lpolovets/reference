---
number: 24
name: "Mixture-of-experts routing"
part: 4
group: "Model-level techniques"
workloads: [train, inf, tune]
precision: [bf16, fp8]
scale: [node, rack, cluster]
maturity: ship
---

## Description
A mixture-of-experts layer replaces one feed-forward block with many, and a small router selects a couple of them per token. Total parameters rise while the arithmetic per token stays close to that of a much smaller dense model, which decouples model capacity from compute cost. The catch is that capacity and compute are decoupled but memory is not: every expert has to be resident somewhere, so the full parameter count still has to be held even though only a fraction is used per token. That turns a compute problem into a memory and communication problem, which is the trade the architecture actually makes.

## Strengths and weaknesses
The strength is quality per unit of compute. A sparse model with far more total parameters can match or exceed a dense model while costing similar arithmetic per token, which is why the largest deployed models use this structure. The weaknesses are systems problems. Experts are distributed across accelerators, so routing sends tokens across the fabric and back on every such layer, and the resulting all-to-all traffic is sensitive to the interconnect. Load imbalance is the other persistent problem: routers concentrate tokens on popular experts unless deliberately regularized, leaving some accelerators idle while others queue.

## When to use
Use it where quality per unit of training and serving compute is the objective and the deployment has a fast interconnect and enough aggregate memory to hold all experts. It suits large-scale providers and suits constrained deployments poorly, since the memory requirement does not shrink with the compute. For serving, batch size matters more than usual, because a small batch touches few experts and wastes the memory holding the rest.

## Key numbers
Typically one or two experts activated per token out of many, so active parameters are a fraction of total · total memory set by all experts regardless of how few are used per token · all-to-all communication on every mixture layer, making the fabric part of the critical path · load-balancing regularization required, or routing concentrates on a subset of experts · published models reaching dense-equivalent quality at substantially lower compute per token.

## Examples
GShard and Switch Transformers established the approach at scale and documented the load-balancing problem directly. Mixtral is a widely available open model using the structure, and most current frontier models are believed to use some version of it.

## Economic profile
This is the main architectural reason serving costs have not risen in step with model capability. Decoupling parameters from arithmetic means a provider can raise quality without raising compute per token proportionally, and that shows up directly in price per token. The costs move rather than disappear: memory per served model goes up, the interconnect requirement goes up, and utilization becomes harder because imbalanced routing leaves hardware idle. The net has been strongly favorable at large scale and unfavorable at small scale, which is part of why serving economics increasingly favor operators large enough to keep every expert busy.

## Videos

- https://www.youtube.com/watch?v=sYDlVVyJYn4 — What is Mixture of Experts? (IBM Technology, 8 minutes, 50k+ views)
- https://www.youtube.com/watch?v=sOPDGQjFcuM — A Visual Guide to Mixture of Experts (MoE) in LLMs (Maarten Grootendorst, 20 minutes, 50k+ views)

## Further reading
[Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity (arXiv)](https://arxiv.org/abs/2101.03961) · [Mixtral of Experts (arXiv)](https://arxiv.org/abs/2401.04088)
