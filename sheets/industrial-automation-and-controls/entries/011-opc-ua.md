---
number: 11
name: "OPC UA"
part: 2
group: "Wireless and interoperability"
layer: super
industries: [disc, proc, hybrid, log, bldg]
determinism: slow
lockin: open
maturity: std
---

## Description
OPC UA is the standard way plant systems exchange data with each other and with the business. Its predecessor moved values between Windows applications; OPC UA is platform-independent, carries a type system rather than only tagged values, and includes authentication and encryption in the specification instead of leaving them to the network. The information model is the important part: a device can describe not just that a value is 47.2 but that it is a temperature, in degrees Celsius, belonging to a particular piece of equipment, which is what makes automatic integration possible instead of manual tag mapping.

## Strengths and weaknesses
The strength is that it is genuinely vendor-neutral and genuinely adopted, which is rare at this layer. Companion specifications define standard information models for particular equipment types, so two machines from different builders can present the same data in the same shape. The weaknesses are complexity and performance. The full specification is large, implementations vary in which parts they support, and the overhead makes it unsuitable for control-rate traffic, which is why it sits above the control layer rather than in it. Certificate management is also a real operational burden that projects tend to discover late.

## When to use
Use it as the interface between the control layer and everything above: historians, manufacturing execution systems, analytics, and enterprise software. Use its publish-subscribe transport where many consumers need the same data, and its client-server mode for request-response integration. Do not use it for control-rate traffic between a controller and its I/O. Insist on the relevant companion specification when buying machinery, because it converts integration from a project into a configuration step.

## Key numbers
Platform-independent and specified with security built in rather than layered on · an information model carrying type, units and relationships rather than bare tag values · companion specifications defining standard models per equipment type, which is what enables plug-in integration · publish-subscribe and client-server transports for different integration patterns · overhead high enough that it belongs above the control layer rather than inside it.

## Examples
The OPC Foundation maintains the specification and the certification program, and companion specifications now exist for machine tools, robotics, packaging machinery, and many other categories. Most controller vendors ship a built-in server, which is what made the standard ubiquitous rather than aspirational.

## Economic profile
The value is integration cost avoided, and it is large. Mapping tags by hand between a control system and a manufacturing execution system is expensive, error-prone, and has to be redone whenever either side changes, and a standard information model removes most of that work permanently. That is why the standard is supported even by vendors whose commercial interest lies in lock-in: the integration friction was suppressing the sale of the software above it. For a plant, insisting on it at purchase is one of the cheapest ways to reduce the cost of every later project.

## Videos

- https://www.youtube.com/watch?v=_rQHcKwvRJw — The ABCs of OPC UA: Everything You Need to Understand (RealPars, 10 minutes, 50k+ views)
- https://www.youtube.com/watch?v=D3JnN1GBnGc — What is OPC UA |How it works ? Tutorial for Beginners (IT and Automation Academy, 10 minutes, 100k+ views)

## Further reading
[OPC Unified Architecture (OPC Foundation)](https://opcfoundation.org/about/opc-technologies/opc-ua/) · [Open Process Automation Forum (The Open Group)](https://www.opengroup.org/forum/open-process-automation-forum)
