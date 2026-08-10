---
number: 2
name: Small multirotor ISR
part: 1
group: Multirotor
roles: [isr, log]
endurance: [mins, hours]
payload: [tiny, small]
autonomy: sup
cost: low
---

## Description
A small multirotor ISR drone weighs 1–25 kg, carries a stabilized electro-optical and thermal gimbal, and flies for 25–60 minutes. This is the class that the commercial drone industry built and that every military has adopted, formally or otherwise. Modern examples add substantial onboard autonomy: obstacle avoidance, subject tracking, and the ability to complete a mission without GNSS by using visual-inertial odometry. Payload capacity of 1–5 kg is enough for a good sensor, a small dropped munition, or a radio relay.

## Strengths and weaknesses
Hovering is the capability that matters. A multirotor can hold a position over a target, inspect from any angle, land in a confined space, and launch from anywhere without infrastructure. Cost is low and training time is short. The weaknesses follow from hovering: rotor efficiency in a hover is poor, so endurance stays under an hour regardless of battery improvements, and wind above 25–30 knots ends the mission. Acoustic and visual signature at low altitude is significant, and the aircraft is easy to detect within a kilometer.

## When to use
Use small multirotors for short-duration overwatch, artillery observation, inspection, and the wide range of tasks where hovering and immediate launch matter more than endurance. If the mission is persistent surveillance of a wide area, a fixed-wing aircraft gives four to ten times the endurance for the same weight. If the requirement is precision strike, a purpose-built loitering munition costs less per effect than modifying an ISR quadcopter. Assume the aircraft will be lost and buy in quantity rather than buying one expensive one.

## Key numbers
Gross weight 1–25 kg · endurance 25–60 minutes · payload 1–5 kg · wind limit 25–30 knots · detectable within about 1 km · unit cost $2k–50k.

## How it is countered
RF jamming of control and video links is the standard counter and works well against most models. GNSS jamming degrades navigation unless the aircraft carries visual odometry, which the better ones now do. Small arms and shotguns are effective inside 200 m. Detection by acoustic sensors, RF direction finding, and small radar is well developed for this class, and it is the threat that the entire counter-UAS industry was built around.

## Examples
Skydio X10, Teledyne FLIR SkyRaider, Parrot ANAFI USA, Autel and DJI Mavic and Matrice series in widespread military and paramilitary use, and Ukrainian and Russian modified commercial quadcopters dropping munitions.

## Economic profile
This is the most commoditized category in military aviation, with prices from $2k for a modified consumer aircraft to $50k for a hardened Western model. The cost gap has driven a persistent argument about whether supply-chain assurance is worth a 10× price premium, and the practical answer in operational units has often been no. Western manufacturers have gained ground on the back of NDAA compliance requirements, autonomy in GNSS-denied conditions, and cyber assurance, none of which the cheap alternatives match.

## Videos

- https://www.youtube.com/watch?v=GRdM-BxlBQg — Skydio Delivers a Breakthrough for Enterprise Drones with the Launch of Skydio X10 (Skydio, 3 minutes, 500k+ views)
- https://www.youtube.com/watch?v=jWDpqo-18xA — Skydio X10 Hands On First Look - A Huge Upgrade (Billy Kyle, 13 minutes, 50k+ views)
- https://www.youtube.com/watch?v=BP-G6OXk-KE — Parrot Anafi USA First Flight and Impressions - Small But Mighty (Billy Kyle, 18 minutes, 10k+ views)

## Further reading

[Unmanned Aircraft Systems: Roles, Missions, and Future Concepts (Congressional Research Service)](https://www.everycrsreport.com/reports/R47188.html) · [Unmanned Aircraft Systems (Federal Aviation Administration)](https://www.faa.gov/uas)
