---
number: 4
name: High-Voltage DC Distribution
part: 1
group: Power delivery
density: [high, ext]
where: [ai, hyper]
retrofit: new
maturity: emerg
---

## Description
Conventional data center power converts several times: AC in, DC in the UPS, AC out, then AC to DC again in every server supply. High-voltage DC distribution cuts the middle out. Power is rectified once at the room or row level and distributed as DC, historically at 380–400 V and now increasingly at plus or minus 400 V DC for AI racks, down a busbar into the rack where power shelves feed the servers. Batteries connect directly to the DC bus, so there is no inverter between them and the load.

## Strengths and weaknesses
Removing conversion stages saves a few percent of total facility power and removes hardware that can fail. At AI rack densities the bigger argument is copper: at 130 kW a rack fed at 415 V AC needs an impractical number of large conductors, and raising the voltage is the only way to keep the busbar a reasonable size. Batteries on the DC bus also ride through faster than an inverter can. The weaknesses are ecosystem and safety. DC at 400 V does not self-extinguish an arc the way AC does, so connectors and protection are specialized, the supply chain is thin compared with AC, and equipment has to be bought for it rather than adapted.

## When to use
Consider it for new AI training halls at 100 kW or more per rack, where the copper argument alone justifies it and the whole hall can be designed around one architecture. It also fits telecom-adjacent facilities already comfortable with 48 V DC practice. Do not retrofit it into a mixed hall, since running two distribution architectures doubles the spares and the training. For anything under about 50 kW per rack, conventional AC distribution is cheaper, better supported, and efficient enough that the conversion savings do not repay the disruption.

## Key numbers
Distribution at 380–400 V DC, and plus or minus 400 V DC in recent AI rack designs · removes two conversion stages, saving roughly 2–5% of facility power · batteries connect directly to the bus with no inverter · DC arcs do not self-extinguish, so protection and connectors are specialized · adopted mainly in new-build AI halls rather than retrofits.

## Examples
Open Compute Project rack power designs, which moved from 12 V to 48 V bus bars and then toward higher DC distribution; NVIDIA's 800 V DC reference architecture for high-density AI racks; long-standing 48 V DC practice in telecom central offices, which is the same idea at lower voltage.

## Economic profile
The energy saving alone does not pay for this. Removing two conversion stages saves roughly 2–5% of facility power, which is real money at campus scale but not enough to cover specialized DC protection, a thin supply chain, and equipment that has to be bought for the architecture rather than adapted to it. The argument that does pay is copper: at 130 kW a rack fed at 415 V AC needs an impractical number of large conductors, so above about 100 kW the AC alternative stops having an acceptable cost at all. That is why this shows up in new AI halls and almost never as a retrofit, since running two distribution architectures in one building doubles the spares and the training for whatever the second one saves. Volume is what would change the picture. If Open Compute rack power designs and NVIDIA's 800 V DC reference architecture pull enough equipment into the market, the ecosystem premium shrinks and the 2–5% starts to matter on its own. Below about 50 kW per rack, a buyer should stay on AC until that happens.

## Videos

- https://www.youtube.com/watch?v=uAHNLsKiE9k — Power Distribution for AI Data Centers | Schneider Electric (Schneider Electric, 3 minutes, 1k+ views)

## Further reading

[Electrical Efficiency Measurement for Data Centers, White Paper 154 (Schneider Electric)](https://download.schneider-electric.com/files?p_File_Name=NRAN-72754V_R2_EN.pdf&p_Doc_Ref=SPD_NRAN-72754V_EN) · [NVIDIA 800 VDC Architecture Will Power the Next Generation of AI Factories (NVIDIA)](https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/)
