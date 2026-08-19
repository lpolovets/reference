---
number: 38
name: "Export controls and compliance"
part: 7
group: "Supply and constraints"
workloads: [train, inf]
scale: [cluster, multi]
maturity: ship
---

## Description
Advanced accelerators are subject to export restrictions that limit which parts may be sold into which countries, and the thresholds are written against measurable device characteristics such as processing performance and interconnect bandwidth. Because the rules key on specifications rather than on product names, vendors have repeatedly designed parts that fall below a threshold in order to keep serving a restricted market, and regulators have repeatedly revised the thresholds in response. The result is a moving boundary that both hardware roadmaps and deployment plans have to be built around.

## Strengths and weaknesses
For a compliance function the strength of specification-based rules is that they are testable: a part's status can be determined from its datasheet rather than from a case-by-case judgment. The weakness is instability. A design taped out against one threshold can arrive after the threshold has moved, which is a two-to-three year exposure against a rule that has changed more often than that. Restrictions also extend beyond chips to the equipment that makes them and, in some formulations, to remote access, which broadens the compliance surface well past the hardware itself.

## When to use
Anyone selling, deploying, or investing in this hardware across borders has to track it. Check where a product sits relative to current thresholds and how much margin it has, since a design close to a limit carries risk that is invisible in its performance figures. For deployment planning, confirm whether restrictions apply to the hardware, the service, or both, since cloud access has been treated differently from physical export at various times. Treat compliance advice as a legal function rather than a technical one.

## Key numbers
Thresholds written against measurable characteristics such as processing performance and interconnect bandwidth rather than product names · rules revised several times, on a cadence shorter than a chip design cycle · a two-to-three year design-to-volume timeline against that shorter revision cadence · controls extending to manufacturing equipment and, in some formulations, to remote access to controlled hardware · compliance status determinable from specifications, which is what makes design-to-threshold possible.

## Examples
Successive US rules on advanced computing have adjusted the thresholds and closed gaps that earlier versions left, and vendors have shipped market-specific parts in response each time. The published guidance from the administering agency is the authoritative source, and it changes often enough that a citation is a snapshot rather than a standing description.

## Economic profile
Export policy has become a first-order input to hardware roadmaps rather than a downstream compliance matter, and it shows up in the economics three ways. It removes addressable market, which affects volume assumptions directly. It creates design work for market-specific parts that carry the same fixed cost across smaller volumes. And it has driven substantial state-backed investment in domestic alternatives inside restricted markets, which changes the competitive landscape on a longer horizon than the restrictions themselves. For an investor the practical question is how much of a company's forecast depends on markets that policy could close.

## Further reading
[Trends in Artificial Intelligence (Epoch AI)](https://epoch.ai/trends) · [MLPerf Inference: Datacenter benchmark results (MLCommons)](https://mlcommons.org/benchmarks/inference-datacenter/)
