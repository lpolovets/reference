---
number: 36
name: "Utilization and depreciation"
part: 7
group: "Unit economics"
workloads: [train, inf]
scale: [cluster, multi]
maturity: ship
---

## Description
Accelerators are the largest capital item in this industry and they are idle a great deal of the time. Two distinct measures matter and are often confused. Model FLOPs utilization is how much of a chip's peak a running job achieves, commonly 30–50% on a well-tuned training run. Fleet utilization is what fraction of the day the chips are running anything at all, and in fleets sized for peak interactive demand it can be considerably lower. Multiplying the two gives the fraction of purchased capability that turns into work, and that product is usually a much smaller number than either factor suggests.

## Strengths and weaknesses
Utilization is the cheapest capacity available, because raising it costs engineering rather than capital and the hardware is already paid for. Backfilling idle interactive capacity with batch work, improving kernels, and scheduling jobs to fit the topology all add effective capacity at a fraction of the cost of buying more. The weakness of pursuing it is that some idleness is deliberate: headroom for demand spikes and for failures is a service-level requirement rather than waste, and a fleet run at very high utilization has no margin when something breaks.

## When to use
Measure both numbers before buying hardware, since the common outcome is that a fleet has more capacity than its utilization suggests. Treat a low model FLOPs utilization as a software problem and a low fleet utilization as a scheduling and product-mix problem, because the fixes are entirely different. Depreciation assumptions should be tested against how long hardware has actually stayed in service in the fleet rather than against an accounting default.

## Key numbers
Model FLOPs utilization commonly 30–50% on tuned training runs and often lower on inference · fleet utilization in interactive-only fleets limited by the daily demand shape · the product of the two being the fraction of purchased capability that does useful work · depreciation over three against six years changing the capital cost per hour by roughly a factor of two · older accelerators retaining usefulness for inference well past the point they stop being competitive for training.

## Examples
The pattern of retiring accelerators from training into inference service is what makes longer depreciation schedules defensible, and it is now standard practice among large operators. Public tracking of frontier compute gives some visibility into how long hardware generations stay in service.

## Economic profile
Depreciation is where the accounting and the physics disagree, and the disagreement is worth money. A three-year schedule reflects competitive obsolescence for training; a six-year schedule reflects the physical life of a part that keeps serving inference. Which is right depends on whether a second life exists for the hardware, and that in turn depends on demand for older-generation inference capacity, which has so far been strong. An operator assuming a long life while the resale and reuse market weakens is overstating margin, and this is one of the clearer places where an investor can test whether reported economics are conservative.

## Further reading
[Trends in Artificial Intelligence (Epoch AI)](https://epoch.ai/trends) · [MLPerf Inference: Datacenter benchmark results (MLCommons)](https://mlcommons.org/benchmarks/inference-datacenter/)
