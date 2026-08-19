---
number: 6
name: "Inference ASICs"
part: 1
group: "Fixed-function and specialized"
workloads: [inf]
precision: [fp8, fp4]
scale: [chip, node, rack]
power: low
maturity: scale
---

## Description
An inference ASIC is silicon designed for one job: running trained models forward, usually at low precision, usually with a memory system sized for the weights rather than for training's activation traffic. Dropping training removes a great deal of hardware, since there is no need for the wider precision, the gradient storage, or the collective operations that a training chip must support. What remains can be spent on the units that matter for serving. The design bet is that the shape of the workload holds still long enough for a chip taped out today to be relevant when it ships, which is a two-to-three year proposition in a field that has repeatedly changed direction inside that window.

## Strengths and weaknesses
The strength is efficiency: for a workload the part was designed around, tokens per watt and tokens per dollar can be substantially better than a general accelerator, because none of the die is spent on flexibility the job never uses. The weakness is exactly the same property. A model with an operator the chip lacks either runs on a fallback path or does not run, and the fallback is usually slow enough to erase the advantage. Software is the harder problem in practice: the chip has to be reachable from the frameworks customers use, and building that support costs more and takes longer than most hardware teams plan for.

## When to use
Use one when the serving workload is high volume, stable, and understood well enough to be confident about the operator set two years out, and when the power or cost per token of a general accelerator is genuinely the constraint on the business. It suits inference providers at scale and product companies with one dominant model. Avoid it while model architecture is still moving, when the team cannot absorb a second software stack, and when the volume is low enough that the general-purpose part's higher unit cost is cheaper than the integration effort.

## Key numbers
Non-recurring engineering for a leading-edge design in the tens of millions of dollars and up, with mask sets a large part of it · two to three years from design start to volume availability · precision usually FP8 and below, since training range is not required · power per part commonly in the 100–400 W band rather than the kilowatt class · efficiency advantages over general accelerators reported as multiples on matched workloads, contingent on the workload matching.

## Examples
Amazon's Inferentia, Meta's MTIA, and a number of startup parts target this position, as do the inference-only configurations several vendors ship alongside training silicon. Almost all are deployed by the organization that commissioned them rather than sold on the open market.

## Economic profile
The capital structure is the opposite of a GPU purchase: a large fixed cost up front in design and masks, then a low marginal cost per part. That only works at volume, and the volume has to be committed before the chip exists, which is why the successful examples are nearly all captive to a hyperscaler with a known internal workload. The risk that kills these projects is not fabrication but timing, since a part designed around a model shape that stops being used arrives efficient at the wrong thing. Software is the second risk and the more common one: a chip that cannot be reached from the framework customers already use has no market at any efficiency.

## Further reading
[MLPerf Inference: Datacenter benchmark results (MLCommons)](https://mlcommons.org/benchmarks/inference-datacenter/) · [MLPerf Inference Benchmark (arXiv)](https://arxiv.org/abs/1911.02549)
