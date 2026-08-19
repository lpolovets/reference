---
number: 15
name: "Rack-scale coherent domains"
part: 3
group: "Scale-up fabric"
workloads: [train, inf]
scale: [rack]
power: high
maturity: scale
---

## Description
Recent designs extend the scale-up domain from a node to a whole rack, joining dozens of accelerators through a switched fabric so that they present as one very large pool of memory and compute. Doing so pushes several engineering problems at once: the rack draws power measured in tens of kilowatts, the fabric switches themselves consume significant power and space, and the cabling has to carry aggregate bandwidth that would be impractical over any longer distance. Liquid cooling stops being optional at this density. What is bought in exchange is a coherent domain large enough to hold models that no node-scale domain can serve without falling back to slower networking.

## Strengths and weaknesses
The strength is that it moves the discontinuity outward. Models that would have required cluster-level partitioning fit inside one fast domain, and both training efficiency and serving latency improve accordingly. Larger domains also raise the batch sizes that fit, which improves the arithmetic intensity of decode directly. The weaknesses are facility-level. A rack at this power density cannot be installed in most existing datacenter halls without changes to power distribution and cooling, so the deployable market is narrower than the addressable one, and the failure domain grows: losing a rack now means losing a much larger unit of capacity.

## When to use
It suits frontier training and high-volume serving of large models, where the domain size is the binding constraint and the operator controls a facility that can host it. It suits organizations that are power-constrained rather than capital-constrained less well, since the density concentrates demand rather than reducing it. Where an existing hall cannot supply the power or the liquid cooling, a larger number of conventional nodes is the realistic option even though it performs worse per chip.

## Key numbers
Dozens of accelerators inside one coherent domain against roughly eight in a conventional node · rack power in the tens of kilowatts, well beyond the few kilowatts a traditional rack was designed for · liquid cooling required rather than optional · fabric switches consuming meaningful power and rack space themselves · failure domain expanding from a node to a rack, which changes checkpointing strategy.

## Examples
NVIDIA's rack-scale systems are the most visible, and TPU pods have used large coherent domains for longer. The Open Compute Project's rack and power standards are the vehicle through which much of the facility side gets standardized, and the data-center infrastructure sheet covers the cooling and power delivery that these racks depend on.

## Economic profile
The cost is not only the hardware but the building that can accept it. An operator with halls designed for a few kilowatts per rack faces a retrofit before deploying any of this, and that retrofit competes for the same capital, which is why deployment has concentrated among operators building new capacity rather than filling existing space. Against that, the density improves performance per dollar of chip meaningfully, so the comparison is between two very different capital structures rather than two prices. Grid interconnection is the constraint sitting behind all of it: at these densities, a site's available power decides how much can be deployed long before the budget does.

## Further reading
[TPU v4: An Optically Reconfigurable Supercomputer for Machine Learning (arXiv)](https://arxiv.org/abs/2304.01433) · [Trends in Artificial Intelligence (Epoch AI)](https://epoch.ai/trends)
