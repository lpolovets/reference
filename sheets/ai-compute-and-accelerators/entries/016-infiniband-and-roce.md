---
number: 16
name: "InfiniBand and RoCE"
part: 3
group: "Scale-out networking"
workloads: [train, hpc]
scale: [cluster, multi]
power: vlow
maturity: ship
---

## Description
Beyond the scale-up domain, accelerators are joined by a cluster network. Two options dominate: InfiniBand, a purpose-built lossless fabric with its own protocol stack, and RDMA over Converged Ethernet, which carries the same remote memory access semantics over Ethernet. Both let one machine read and write another's memory without involving the remote processor, which is what keeps latency low enough for collective operations to scale. The distinction that matters is loss behavior. Machine-learning collectives perform badly with packet loss and retransmission, so the Ethernet path depends on congestion control and priority flow control configured correctly, and getting that wrong is a common cause of clusters that underperform their specification.

## Strengths and weaknesses
InfiniBand's strength is that lossless behavior and low latency are properties of the design rather than of the configuration, which is why it has dominated large training deployments. Its weakness is a narrow supplier base and a separate operational skill set. Ethernet's strengths are the opposite: many vendors, familiar operations, and a faster commodity cost curve. Its weakness is that achieving comparable collective performance requires careful tuning, and the industry's answer to that has been to standardize the required behaviors rather than leave them to each operator.

## When to use
Use InfiniBand for large training clusters where scaling efficiency is the product and operational familiarity is secondary. Use Ethernet where the fleet is mixed, where inference dominates and collectives are less central, or where supplier diversity is a procurement requirement. For inference-heavy fleets the choice matters much less than it does for training, because serving exchanges far less data between machines. Whatever the choice, size the network against the collective pattern the training strategy actually produces rather than against aggregate bandwidth.

## Key numbers
Remote direct memory access bypassing the remote processor, which is what keeps collective latency low · lossless operation intrinsic to InfiniBand and configuration-dependent on Ethernet · network typically a meaningful minority of cluster capital on a training build and far less on an inference fleet · scaling efficiency, rather than link speed, being the number that decides value · Ultra Ethernet organized specifically to standardize the behaviors that make Ethernet competitive for this traffic.

## Examples
InfiniBand carries most published large training runs to date. Several hyperscalers have built very large training fleets on Ethernet instead, using their own congestion control. The Ultra Ethernet Consortium is the multi-vendor effort to make that path standard rather than proprietary.

## Economic profile
Network is a minority of cluster capital but a majority of the risk to scaling efficiency, which makes it a poor place to economize. A cluster that reaches 90% scaling efficiency instead of 70% has effectively bought a fifth more accelerators for the price of better networking, and that arithmetic usually dominates the price difference between the two options. The strategic argument is supplier concentration: InfiniBand comes from essentially one vendor, and much of the Ethernet effort is funded by buyers who would rather not have their cluster economics set by that vendor's pricing.

## Videos

- https://www.youtube.com/watch?v=eGoP2wPoaEM — InfiniBand and RoCE: Artificial Intelligence Data Centers | FiberMall (FiberMall, 9 minutes, 10k+ views)

## Further reading
[About InfiniBand (InfiniBand Trade Association)](https://www.infinibandta.org/about-infiniband/) · [Ultra Ethernet Consortium](https://ultraethernet.org/)
