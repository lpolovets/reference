---
number: 34
name: "Obsolescence and spares"
part: 7
group: "Lifecycle"
layer: ent
industries: [disc, proc, hybrid, log, bldg]
determinism: nrt
lockin: single
maturity: std
---

## Description
Control equipment outlives its own supply chain. A controller installed with a new line will run for fifteen to twenty-five years, while the vendor's product lifecycle moves it from current to mature to discontinued and finally to unsupported in a fraction of that. The plant is then maintaining equipment it cannot buy, with programming software that no longer runs on current operating systems, and often without anyone left who wrote the application. Vendors publish lifecycle status per product line, and reading it before purchase is one of the cheapest pieces of due diligence available.

## Strengths and weaknesses
The strength of the installed equipment is that it works, and that is not a small thing: a controller running unchanged for two decades has proven itself in a way a replacement has not. The weakness is accumulating fragility on every axis at once. Spares become scarce and expensive, the secondary market becomes the only source and carries no warranty, the development environment becomes hard to run, and the knowledge base retires. None of these is urgent in any given year, which is exactly why the problem is deferred until a failure forces it.

## When to use
Check lifecycle status at purchase and avoid buying into a line already in its mature phase, since it shortens the supported life of a twenty-year asset. Hold spares for anything whose failure stops production and whose replacement lead time exceeds the tolerable outage, and refresh that holding as lines are discontinued. Keep the development environment working, in a virtual machine if necessary, because being unable to open the program is a worse position than being unable to buy the hardware. Plan migration on the plant's schedule rather than waiting for a failure to set it.

## Key numbers
Service life of 15–25 years in place against vendor product lifecycles measured in single-digit years to a decade · discontinued modules trading on a secondary market at prices set by scarcity rather than by cost · programming software often requiring an operating system no longer supported, which is a separate obsolescence track from the hardware · lifecycle status published per product line by the major vendors · migration cost dominated by re-engineering the application rather than by hardware.

## Examples
The secondary market in obsolete control hardware is a substantial business, supplying refurbished modules for systems the manufacturer no longer makes. Vendor migration programs offering partial reuse of existing wiring and I/O exist precisely because the alternative is losing the account to a competitor at the same moment.

## Economic profile
Obsolescence is a slow liability that becomes a fast one at the worst possible time. Spares holdings and a maintained development environment are cheap against the exposure, and both are routinely cut because their benefit is invisible until it is needed. Migration is where the accumulated lock-in gets priced: a plant with twenty years of undocumented application code faces a re-engineering cost that has nothing to do with hardware, and the vendor with the installed base is well placed to quote against it. That dynamic is what makes installed base the most valuable asset in this industry.

## Further reading
[PLCopen: standards for industrial control programming (PLCopen)](https://www.plcopen.org/) · [Open Process Automation Forum (The Open Group)](https://www.opengroup.org/forum/open-process-automation-forum)
