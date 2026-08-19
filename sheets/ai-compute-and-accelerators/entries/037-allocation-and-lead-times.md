---
number: 37
name: "Allocation and lead times"
part: 7
group: "Supply and constraints"
workloads: [train, inf]
scale: [cluster, multi]
maturity: ship
---

## Description
Datacenter accelerators are allocated rather than simply sold. Supply is gated by advanced packaging and high-bandwidth memory capacity rather than by logic wafer starts, and both of those expand on timescales of quarters to years, so demand above supply resolves through queueing rather than through price alone. The consequence is that an operator's capacity is often set by what it was allocated rather than by what it could afford, and terms of access, including prepayment and multi-year commitment, become the substance of the negotiation.

## Strengths and weaknesses
For the vendor this is a strong position and it has held longer than most such positions do, because the constraint is physical rather than commercial. For a buyer the practical strength is that a committed allocation is itself an asset and a competitive advantage. The weakness on both sides is planning risk. Committing to multi-year volumes in a field where model architecture and precision requirements shift within a year means committing to hardware whose suitability is uncertain, and the alternative of not committing means having no capacity at all.

## When to use
Treat allocation as a strategic function rather than a procurement one at any scale where it binds. Where a workload can tolerate older hardware, buying previous-generation parts that are not allocation-constrained is frequently the better economics, particularly for inference. Renting capacity converts the allocation problem into a pricing problem and is usually correct for episodic demand. Diversifying across vendors has a real software cost, so it is worth doing before it is urgent rather than after.

## Key numbers
Supply gated by advanced packaging and high-bandwidth memory rather than by logic capacity · lead times measured in quarters, with expansions of packaging capacity measured in years · multi-year commitments and prepayment common as terms of access · previous-generation parts frequently available without allocation constraints and adequate for much inference · capacity, rather than capital, repeatedly the binding constraint on operator growth.

## Examples
The concentration of high-bandwidth memory supply among three vendors, and of advanced packaging among a smaller number of providers, is the structural reason the constraint persists across cycles. The semiconductor manufacturing sheet covers the packaging steps that create it.

## Economic profile
When supply is the constraint, the ability to buy is worth more than the ability to pay, which inverts the usual relationship between capital and capacity. That has favored operators with long-standing supplier relationships and those willing to commit early, and it has made secured allocation a component of company valuation in a way that would be unusual in most hardware markets. The risk sitting under it is that the constraint eases: an operator holding multi-year commitments into a market with available supply has bought expensive capacity that competitors can now match at spot prices.

## Further reading
[High-bandwidth memory (Micron)](https://www.micron.com/products/memory/hbm) · [Trends in Artificial Intelligence (Epoch AI)](https://epoch.ai/trends)
