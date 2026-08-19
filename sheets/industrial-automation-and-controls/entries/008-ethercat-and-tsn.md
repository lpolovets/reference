---
number: 8
name: "EtherCAT and TSN"
part: 2
group: "Fieldbus and Ethernet"
layer: field
industries: [disc, log]
determinism: sub1
lockin: multi
maturity: std
---

## Description
Where general industrial Ethernet is deterministic enough for machine control, coordinated motion needs an order of magnitude better. EtherCAT achieves it by having a single frame pass through every device in turn, with each node reading its own data and inserting its reply as the frame goes by, so one frame services the whole network rather than one frame per device. Time-Sensitive Networking takes a different route, adding scheduling standards to ordinary Ethernet so that time-critical traffic is guaranteed transmission windows while other traffic shares the same wire.

## Strengths and weaknesses
EtherCAT's strength is very low cycle time with tight synchronization across many axes, achieved with standard cable and no special switches. Its weakness is that the topology and the processing model are specific to it, so devices must implement it. TSN's strength is that it is an IEEE standard rather than a vendor protocol, so it promises determinism on ordinary networks shared with other traffic, which is exactly what a converged plant network needs. Its weakness is that the benefit requires switches, endpoints, and configuration that all support it, and that ecosystem has matured more slowly than the specifications did.

## When to use
Use EtherCAT where axes must be synchronized tightly and the machine is being designed around one motion platform, which describes most high-performance machine building. Use TSN where the objective is one converged network carrying control and other traffic together, and confirm that every switch in the path supports the required features. For ordinary sequencing neither is necessary, and specifying them adds cost and configuration complexity for determinism the application will not use.

## Key numbers
EtherCAT cycle times commonly well under 1 ms with synchronization across axes in the microsecond range · one frame servicing an entire network segment rather than one frame per device, which is the source of the efficiency · TSN standardized within IEEE 802.1 rather than by a vendor consortium · TSN determinism requiring support in every switch along the path, not only at the endpoints · both running over standard Ethernet cabling.

## Examples
EtherCAT is maintained by its technology group and is the usual choice in high-speed machine building. The TSN task group publishes the standards, and industrial profiles built on it are the route by which most automation vendors intend to adopt it.

## Economic profile
EtherCAT's economics are unusual in that the performance comes with lower hardware cost rather than higher, since it needs no managed switches and its device implementations are inexpensive, which is much of why it spread. TSN's economics are the opposite so far: the promise is one network instead of several, but realizing it requires replacing switches and endpoints, so the saving arrives only after an investment that is hard to justify piecemeal. That is the usual pattern for converged infrastructure, and it explains why TSN adoption has followed new-build projects rather than retrofits.

## Further reading
[EtherCAT technology overview (EtherCAT Technology Group)](https://www.ethercat.org/en/technology.html) · [Time-Sensitive Networking Task Group (IEEE 802.1)](https://1.ieee802.org/tsn/)
