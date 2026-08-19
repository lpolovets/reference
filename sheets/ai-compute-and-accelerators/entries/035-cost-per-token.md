---
number: 35
name: "Cost per token"
part: 7
group: "Unit economics"
workloads: [inf]
scale: [node, rack, cluster]
maturity: ship
---

## Description
Cost per token is the unit economic of inference, and it is built from four numbers: what the hardware cost, how long it is depreciated over, how many tokens per second it produces on the actual workload, and how many hours a day it is busy. The first is public and the other three are not, which is why published comparisons of chips rarely predict what an operator actually pays. Prefill and decode also have to be costed separately, since prompt tokens are processed in parallel and generated tokens are not, and pricing that charges the same for both is averaging over a large underlying difference.

## Strengths and weaknesses
The strength of the metric is that it aggregates every other decision on this sheet into one comparable number, which is what makes it the right target for optimization. Its weakness is that it is easy to quote misleadingly. A figure computed at full utilization, maximum batch size, and a generous depreciation life describes a machine nobody runs, and the same hardware in production can cost several times more per token. Comparisons are only meaningful when utilization, batch size, precision, context length, and depreciation are stated together.

## When to use
Use it as the objective when optimizing a serving fleet, and decompose it when it looks wrong, since the fix is usually in utilization or batch size rather than in the hardware. Use it with caution when comparing vendors, and insist on the four underlying assumptions. For build-versus-buy decisions, compare against a provider's batch tier rather than its interactive price, since that is closer to the underlying cost of the work.

## Key numbers
Four inputs: acquisition cost, depreciation life, achieved tokens per second, and utilization · a three-year against a six-year depreciation assumption changing the capital component by roughly a factor of two · a fleet at 40% utilization costing roughly double per token against the same fleet at 80% · prefill and decode differing enough in cost that pricing them identically averages over a large gap · quantization from 16 to 8 bits roughly doubling decode throughput on bandwidth-bound work, and therefore roughly halving its share of cost.

## Examples
Published inference pricing across providers spans a wide range for comparable models, and much of that spread reflects utilization and batching rather than hardware or margin. MLPerf inference results are the closest thing to a standardized throughput comparison, though they measure a benchmark rather than a production workload.

## Economic profile
The largest levers are not the ones most discussed. Utilization and batching typically move cost per token more than the choice of accelerator does, and both are operational. Depreciation assumption moves it as much again and is a finance decision rather than a technical one. Hardware selection matters, but it enters as one term among four, which is why two operators running identical chips can report costs differing by a factor of two or more without either being wrong. For anyone evaluating a business in this market, the honest first question is what utilization the quoted economics assume.

## Further reading
[MLPerf Inference: Datacenter benchmark results (MLCommons)](https://mlcommons.org/benchmarks/inference-datacenter/) · [Efficiently Scaling Transformer Inference (arXiv)](https://arxiv.org/abs/2211.05102)
