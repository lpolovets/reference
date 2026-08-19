---
number: 30
name: "Training clusters"
part: 6
group: "Training deployments"
workloads: [train]
precision: [bf16, fp8]
scale: [cluster, multi]
power: high
maturity: ship
---

## Description
A training cluster is a fleet built around one job rather than many. Accelerators are joined by a high-bandwidth network, storage has to sustain the read rate the job demands, and the whole thing is scheduled as a unit because a job holding thousands of chips cannot be interleaved with other work. The distinguishing property against an inference fleet is synchronization: every step waits for the slowest participant, so a single degraded link, a thermally throttled chip, or a slow storage read holds up the entire run. That makes tail behavior rather than average performance the thing that has to be engineered.

## Strengths and weaknesses
The strength is that a single coherent fleet can train a model no smaller arrangement could, and scaling laws have made the relationship between compute spent and quality obtained predictable enough to plan around. The weaknesses are utilization and fragility. A cluster sized for one large job is poorly matched to anything else, so it is idle between runs unless deliberately shared, and failures at this scale are frequent enough that the effective throughput is materially below the nominal. Power is the binding constraint on building more, more often than capital now is.

## When to use
Build or rent one when the objective is a model that cannot be trained any other way, and when the organization can keep it busy. Rent rather than build when the training need is episodic, since idle time on an owned cluster is the most expensive form of waste in this field. Where the work is fine-tuning rather than pretraining, a much smaller allocation is usually correct, and the tendency to over-provision for the largest job an organization might one day run is the common and expensive mistake.

## Key numbers
Thousands of accelerators scheduled as one unit, since a synchronous job cannot share them · scaling efficiency of 70–90% typical, so nominal capacity overstates delivered capacity · failure rates at this scale making checkpoint and restart part of the throughput calculation rather than an exception · power in the megawatts, with grid interconnection now a common gate on expansion · published scaling laws relating compute, data, and model size closely enough to size a run in advance.

## Examples
The compute-optimal scaling work relating model size to data budget is the standard reference for sizing a pretraining run, and the earlier scaling law work established the relationships it refined. Public tracking of frontier training compute shows the trend in cluster scale over time.

## Economic profile
The dominant cost is accelerator capital and the dominant risk is idleness, which makes the utilization of a training cluster the number that decides whether it was a good purchase. Renting converts that risk into someone else's problem at a premium, and the crossover depends almost entirely on how continuously the organization trains. Power availability has become the constraint that decides where and when capacity can be added at all, ahead of both chip supply and capital in many markets. Depreciation assumptions compound the uncertainty, since hardware bought for frontier training retains value mainly through a second life serving inference.

## Further reading
[Training Compute-Optimal Large Language Models (arXiv)](https://arxiv.org/abs/2203.15556) · [Trends in Artificial Intelligence (Epoch AI)](https://epoch.ai/trends)
