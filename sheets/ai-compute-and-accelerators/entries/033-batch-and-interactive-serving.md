---
number: 33
name: "Batch and interactive serving"
part: 6
group: "Inference deployments"
workloads: [inf]
precision: [bf16, fp8, fp4]
scale: [chip, node, rack]
maturity: ship
---

## Description
The same model serves two economically different products. Interactive serving answers a user who is waiting, so latency is the specification and batch size is limited by how long requests may be held for company. Batch serving processes work with no one waiting, so requests can be accumulated into very large batches, and the arithmetic intensity of decode rises with them. Because decode at batch one is bandwidth-bound and batching amortizes the weight read across the whole batch, the cost per token of batch work is a fraction of the interactive cost on identical hardware.

## Strengths and weaknesses
The strength of batch serving is that it uses hardware efficiently, and it can be scheduled into whatever capacity interactive traffic leaves idle, which is substantial in any fleet sized for peak. The strength of interactive serving is that it is what most products need. The weakness of batching is that it is only available where the work is genuinely asynchronous, and the weakness of interactive serving is that the latency requirement forces small batches, which leaves the accelerator underused for reasons no configuration change can fix.

## When to use
Route work to batch whenever the user is not waiting: evaluations, document processing, embedding generation, synthetic data, and offline classification all qualify and are frequently run interactively out of habit. Keep interactive serving for anything with a person on the other end, and use the latency budget deliberately, since even a few hundred milliseconds of admission delay allows meaningfully larger batches. Fill idle interactive capacity with batch work rather than letting it sit, which is the single largest efficiency gain available to a mixed fleet.

## Key numbers
Cost per token on batch work a fraction of interactive cost on the same hardware, driven by batch size rather than any hardware difference · decode arithmetic intensity rising roughly in proportion to batch size until the key-value cache exhausts memory · interactive batch size bounded by the admission delay the product tolerates · fleets sized for peak interactive traffic leaving large idle capacity off-peak · commercial batch pricing commonly set at a substantial discount to interactive, reflecting the underlying difference.

## Examples
Every major inference provider offers a discounted batch tier alongside interactive endpoints, and the discount is a direct reflection of the batching economics rather than a marketing choice. Internally, most large operators backfill idle serving capacity with evaluation and data-generation work for the same reason.

## Economic profile
The gap between these two modes is one of the largest cost differences in serving, and it is available to anyone willing to classify their workload honestly. A great deal of work that is run interactively has no one waiting for it, and moving it to a batch path reduces its cost substantially with no change to hardware, model, or quality. The second lever is temporal: interactive demand has a daily shape, and the capacity provisioned for the peak is idle for much of the day unless batch work is queued to absorb it. Operators who do both run materially cheaper fleets than those who do neither.

## Further reading
[Efficiently Scaling Transformer Inference (arXiv)](https://arxiv.org/abs/2211.05102) · [vLLM documentation (vLLM)](https://docs.vllm.ai/en/latest/)
