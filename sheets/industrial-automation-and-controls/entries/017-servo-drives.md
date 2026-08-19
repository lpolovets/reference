---
number: 17
name: "Servo drives and feedback"
part: 4
group: "Motion control"
layer: control
industries: [disc, log]
determinism: sub1
lockin: single
maturity: std
related: [power-electronics#industrial-variable-frequency-drives]
---

## Description
A servo drive takes a position or velocity command and delivers the current that makes a motor follow it, closing loops on current, velocity, and position at nested rates, with the current loop running fastest. The feedback device on the motor is what makes this possible, and its resolution and latency bound what the drive can achieve. Tuning sets the gains of those loops against the mechanical system's inertia and compliance, and it is the step that decides whether a machine runs smoothly or oscillates, which is why commissioning time is dominated by it.

## Strengths and weaknesses
The strength is precise, repeatable, programmable motion with torque available at any speed including zero, which no simpler drive arrangement provides. Modern drives also absorb functions that used to need separate hardware: safe torque off, position capture, and enough diagnostics to identify a mechanical problem from the current signature. The weaknesses are cost, tuning skill, and coupling. Servo systems cost several times a plain induction drive of the same power, tuning requires expertise, and the drive is usually tied to its vendor's motor, feedback, and network.

## When to use
Use servo where position or synchronization matters: indexing, contouring, and anything following a line master. Use a variable-frequency drive on an induction motor where the requirement is just to turn something at an adjustable speed, since it costs far less and needs no tuning. Where the mechanics are compliant or the load inertia is much larger than the motor's, resolve that in the mechanical design rather than expecting the drive to tune around it, because no gain setting fixes a badly matched system.

## Key numbers
Nested current, velocity, and position loops with the current loop fastest, commonly in the tens of microseconds · feedback resolution and latency bounding achievable accuracy regardless of drive quality · cost several times a variable-frequency drive of the same power · commissioning time dominated by tuning rather than by wiring · safe torque off now integrated in the drive rather than requiring external contactors.

## Examples
Every motion platform vendor supplies matched drives, motors, and feedback as a system, connected over that vendor's deterministic network. The power electronics sheet covers the converter topology inside the drive, which is shared with general variable-frequency drives.

## Economic profile
The drive and motor are a visible cost and the tuning is a hidden one, and on a machine with many axes the commissioning effort can exceed the hardware. That is why machine builders standardize on one platform and reuse tuned configurations across builds, converting a per-machine engineering cost into a per-model one. The vendor coupling is deliberate on the supplier's side and is worth understanding on the buyer's: replacing one axis's drive years later usually means buying from the original supplier at whatever the price is then, because the network and feedback interfaces are not interchangeable.

## Videos

- https://www.youtube.com/watch?v=ditS0a28Sko — What is a Servo Motor and How it Works? (RealPars, 16 minutes, 1m+ views)
- https://www.youtube.com/watch?v=tHOH-bYjR4k — What is a Servo Motor and What Does It Do? (The Engineering Mindset, 3 minutes, 100k+ views)

## Further reading
[EtherCAT technology overview (EtherCAT Technology Group)](https://www.ethercat.org/en/technology.html) · [PLCopen: standards for industrial control programming (PLCopen)](https://www.plcopen.org/)
