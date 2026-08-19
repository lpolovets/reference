---
number: 30
name: "Digital twin and virtual commissioning"
part: 6
group: "Analytics and security"
layer: ent
industries: [disc, proc, hybrid, log]
determinism: nrt
lockin: single
maturity: grow
---

## Description
Virtual commissioning connects the real control program to a simulated machine, so the logic can be tested against a model of the mechanics before the machine exists. The controller runs its actual code, either on real hardware or in a faithful emulator, and the simulation supplies the sensor signals and responds to the outputs. A digital twin extends the same idea past commissioning into a model that keeps running alongside the plant, fed by live data and used to compare expected against actual behavior. The two are usually sold together and are quite different in maturity, since the first is proven and the second is still finding its uses.

## Strengths and weaknesses
Virtual commissioning's strength is schedule: control software debugging moves off the critical path, where machine time is scarcest and most expensive, into a period when the machine is still being built. Faults that would have been found on the floor at high cost are found at a desk. Its weakness is model fidelity, since a simulation that does not represent the mechanics accurately gives false confidence, and building an accurate one is real work. The digital twin's weakness is that the maintenance burden is continuous and the use case is often stated in general terms rather than in terms of a decision it improves.

## When to use
Use virtual commissioning where machine downtime for commissioning is expensive or where the control software is complex, which describes most large automated lines and nearly all retrofits into running plants. Model the mechanics to the level the tests require rather than exhaustively, since fidelity beyond what the logic exercises is wasted effort. Adopt a running digital twin only where a specific decision depends on it, such as detecting drift against expected behavior, and be skeptical of proposals whose benefit is described without naming the decision it changes.

## Key numbers
Control software tested against a simulated machine before hardware exists, moving debugging off the commissioning critical path · the real control program executed rather than a reimplementation, which is what makes the test meaningful · model fidelity the limiting factor, since an inaccurate simulation produces confidence rather than validation · commissioning time on the floor the expensive resource that this trades against desk time · a running twin requiring continuous maintenance as the plant changes, or it silently diverges.

## Examples
Automotive body shops and large material handling systems are where virtual commissioning is most established, because commissioning windows there are short and expensive. Simulation packages from the major automation vendors connect directly to their own controllers, and independent tools connect to several.

## Economic profile
Virtual commissioning has a clear and demonstrated return where commissioning time is the constraint, because the hours saved on the floor are the most expensive hours in the project and the hours spent modeling are among the cheapest. The arithmetic works whenever the machine is complex or the plant cannot be stopped for long. The running digital twin has a much weaker record, and the pattern of disappointment is consistent: models built without an owner drift out of correspondence with the plant within a year, at which point they are quietly abandoned along with the investment.

## Further reading
[PLCopen: standards for industrial control programming (PLCopen)](https://www.plcopen.org/) · [Open Process Automation Forum (The Open Group)](https://www.opengroup.org/forum/open-process-automation-forum)
