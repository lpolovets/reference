---
number: 18
name: "CNC controls"
part: 4
group: "Motion control"
layer: control
industries: [disc]
determinism: sub1
lockin: prop
maturity: std
---

## Description
A computer numerical control reads a part program describing tool paths and turns it into coordinated axis motion, handling interpolation, feed rate control around corners, tool offsets, and compensation for the machine's own geometric errors. It is a motion controller specialized so thoroughly for machine tools that it has its own programming language, its own operator conventions, and its own supplier structure. The look-ahead function, in which the control examines many blocks of the program in advance to plan acceleration, is what allows a machine to hold contour accuracy at production feed rates rather than slowing at every corner.

## Strengths and weaknesses
The strength is that decades of accumulated machine tool knowledge are built in, from thread cycles to probing routines to thermal compensation, and machinists can operate any machine of a given control family without retraining. The weaknesses are that the platforms are closed and the ecosystem is conservative. Getting data out of a CNC has historically been difficult, and the programming language remains a line-oriented format designed for paper tape, which sits awkwardly with modern software practice even though every attempt to replace it has failed commercially.

## When to use
It is not really optional on a machine tool. The decisions are which control family, since that determines operator familiarity, post-processor availability, and what the machine can be integrated with, and whether to specify the open data interface that recent standards provide. For non-machining motion, a general motion controller is more flexible and less expensive. Where a plant already runs one control family, specifying it again is usually correct for the same reason PLC standardization is.

## Key numbers
Look-ahead across many program blocks to plan acceleration and hold contour accuracy at production feed rates · axis counts from three to over ten on multi-tasking machines · programming in a line-oriented format standardized decades ago and still dominant · thermal and geometric compensation built in, since machine tool accuracy drifts with temperature · a closed platform historically, with standardized data interfaces a recent addition rather than a native feature.

## Examples
The machine tool control market is dominated by a small number of suppliers whose installed bases and operator familiarity are the barrier to entry. MTConnect and OPC UA companion specifications are the two routes by which shop-floor data now leaves these machines.

## Economic profile
The control is a significant fraction of a machine tool's price and its real economic weight is in the operators and programmers trained on it, which is what makes shops reluctant to mix families. That familiarity is a genuine productivity effect rather than a preference, since a programmer moving between control conventions makes mistakes that scrap parts. The recent value shift has been in data: shops that can extract utilization and cycle data from their machines find capacity they did not know they had, and that has been worth more on many shop floors than any single machine upgrade.

## Further reading
[OPC Unified Architecture (OPC Foundation)](https://opcfoundation.org/about/opc-technologies/opc-ua/) · [ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards)
