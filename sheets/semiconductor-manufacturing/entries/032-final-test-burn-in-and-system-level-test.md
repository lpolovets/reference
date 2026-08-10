---
number: 32
name: Final test, burn-in and system-level test
part: 7
group: Test and metrology
devices: [logic, memory, analog, power, rf]
node: [mature, adv, lead, front]
toolcost: low
suppliers: duo
---

## Description
Final test is the last gate, and it runs on the packaged part rather than the wafer, which is why this is the one entry on the sheet with no wafer tag. Three things happen here and they answer different questions. Automated test equipment exercises the device at speed, at voltage, and across temperature, running structured patterns (scan, memory BIST, analog and RF measurements) to prove the circuit is electrically correct after assembly. Burn-in runs the part hot and biased for hours to force early-life failures out before shipment, which is how automotive suppliers get to single-digit defective parts per million. System-level test boots the part in a board that resembles its real application and runs real software, because high-end SoCs fail in ways that structured patterns do not model, particularly marginal timing and power-management interactions. Everything here is priced in seconds of machine time, so the whole discipline is a negotiation between coverage and cost.

## Strengths and weaknesses
Final test is the only place that sees the finished product, so it catches assembly defects, package parasitics, and interactions that no wafer-level test can reach, and it is the last chance before a defect becomes a customer return. It is also, unavoidably, a throughput bottleneck: test time is serial per socket, so a part with a two-minute test needs a lot of testers to support high volume, and testers are capital equipment sitting between the factory and revenue. Burn-in adds hours of dwell time and its own oven capacity. System-level test adds the most coverage per second for complex SoCs but is the hardest to automate and to correlate, since a failure in a real workload does not always point at a circuit. The failure mode worth naming is a test escape on a part that ships: at automotive or datacenter volumes, a defect rate measured in parts per million turns into a recall or a fleet-wide reliability problem, and the cost of that dwarfs the test time you saved.

## When to use
Everything gets final test. Add burn-in when the application cannot tolerate infant mortality, which in practice means automotive, medical, aerospace, and some datacenter parts, and skip it on consumer parts where the field return cost is lower than the oven time. Add system-level test when the part is complex enough that structured coverage leaves real risk, which today means high-end SoCs, accelerators, and anything with a lot of power-management state. The rule of thumb for the trade is simple arithmetic: a tester at $100 an hour makes one second of test time worth about 2.8 cents per chip, so compare the marginal test seconds against the escape rate they buy down times the cost of an escape. If you are budgeting a program, use 2–3% of device cost as the historical benchmark and expect 3–5% for large AI parts with long test times.

## Key numbers
Test has historically been managed to about 2–3% of device cost, rising toward 3–5% for large AI parts, rather than the 5–10% that is often quoted · a tester at $100 an hour makes one second of test time worth about 2.8 cents per chip · modern high-speed ATE systems cost $1–3M each · Advantest and Teradyne hold roughly 80% of the market between them · Advantest's SoC tester share rose to roughly two-thirds in 2025 on AI demand · burn-in runs hours at elevated temperature and bias, which is how automotive parts reach single-digit defective parts per million.

## Supply chain
Two companies, Advantest and Teradyne, hold roughly 80% of the automated test equipment market between them, and Advantest's share of SoC testers specifically rose to about two-thirds during 2025 as AI parts with long test times pulled demand its way. Cohu, Chroma ATE, and a handful of Chinese entrants make up most of the rest, mainly at the lower-performance end. Around the tester sits a second tier that is easier to source: handlers, thermal control units, burn-in ovens, and load boards come from many suppliers, and the test houses themselves (KYEC, ASE, Amkor, and the captive lines at every IDM) compete openly. The exposure to watch is therefore capacity rather than access. Testers are built to order with long lead times, and when AI demand spiked, tester delivery slots became a real constraint on how fast accelerators could ship. ATE also falls under export controls for advanced applications, though less tightly than lithography, so the practical risk for a Chinese buyer is buying older or domestic equipment and paying for it in test time.

## Examples
Advantest's V93000 platform and Teradyne's UltraFLEX family cover most high-end SoC and accelerator test. Both also sell dedicated memory testers, including Teradyne's Magnum line, where hundreds of devices are tested in parallel. Cohu supplies testers and much of the handler and contactor market. King Yuan Electronics (KYEC) in Taiwan is the largest independent test house and does a large share of AI accelerator final test. On the buyer side, automotive suppliers such as Bosch, Infineon, and NXP run burn-in and extended-temperature programs to hit their parts-per-million targets, and Apple, NVIDIA, AMD, and Intel all use system-level test on their highest-end parts.

## Economic profile
Test is a small share of device cost and a large share of the argument, because it is one of the few places a program manager can visibly cut. The defensible figures are roughly 2–3% of device cost historically, rising toward 3–5% for large AI parts, which is well below the 5–10% that circulates in secondary sources. What is changing is the direction: test time per part is growing because dies are larger, packages contain more dies, and system-level test is spreading down from the highest-end products, while the cost per test second is falling only slowly. That combination is why Advantest's revenue tracked the AI buildout so closely in 2025 and why its guidance rose sharply mid-year. For anyone building a business here, the durable positions are the tester platform itself, which is a duopoly with a decades-long software and applications moat, and independent test capacity, which is a capital-intensive service business that gets pricing power exactly when the industry is capacity-constrained.

## Videos

- https://www.youtube.com/watch?v=HUqk62bPCnA — Semiconductor testing (Presto Engineering Denmark, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=C1oCcmlP64E — Burn-In Testing and ESS for Electronics (Z-AXIS, Inc., 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=GSPleyM3vcE — System-level testing (SLT), one of the most prominent methodologies for production testing (Tessolve, 7 minutes, 5k+ views)

## Further reading

[VLSI Test Process and Test Equipment, ET4076 Lecture 2 (TU Delft OpenCourseWare)](https://www.ocw.tudelft.nl/wp-content/uploads/Module_2_VLSI_Test_Process_and_ATE.pdf) · [Exploring the Mysteries of System-Level Test (IEEE Asian Test Symposium)](https://par.nsf.gov/servlets/purl/10401355)
