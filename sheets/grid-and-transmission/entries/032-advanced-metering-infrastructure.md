---
number: 32
name: Advanced Metering Infrastructure
part: 7
group: Distribution & edge
voltage: [lv]
roles: [vis, deliv]
lead: yr
siting: exist
maturity: mature
---

## Description
An advanced meter records consumption at 15-minute to hourly intervals and reports it over a communications network, usually a utility-owned mesh radio system or cellular. That is the visible function. The more useful ones are diagnostic: the meter reports voltage, detects and reports its own outage, and confirms restoration, so a utility learns which customers are out from the meters rather than from phone calls. About 128 million advanced meters were installed in the United States as of 2023, covering most residential customers.

## Strengths and weaknesses
Interval data makes time-varying rates possible, outage reporting shortens restoration, voltage data lets a utility see where a feeder is out of band, and remote connect and disconnect removes truck rolls. The costs are the network and the data. A full deployment is a large capital program, the head-end and meter data management systems are substantial software projects, and the analytics that justify the business case often lag the meters by years. Privacy is a real concern, since interval data reveals occupancy patterns, and communications security has to be maintained across millions of endpoints for 15 years.

## When to use
The deployment decision is mostly made: most US and European utilities have rolled out or are rolling out. The live questions are what to do with it. Use meter voltage data to target where regulation is failing and where transformers are overloaded, which is the fastest-payback analytic. Use interval data to enable time-of-use and critical-peak pricing, which is what actually moves load. Where a utility is still choosing, weigh a mesh network against cellular on 15-year total cost rather than on installation price, since the communications choice is harder to change than the meters.

## Key numbers
Interval recording at 15 minutes to one hour · about 128.4 million advanced meters in the US as of 2023, up 9.1 million in one year · covers roughly three quarters of US electricity customers · meter life typically 15–20 years · outage detection at the meter is often faster than customer calls.

## Examples
Full-territory rollouts by most US investor-owned utilities; Great Britain's national smart meter program; Italy's Enel deployment, the first at national scale; rural cooperatives using AMI voltage data to find failing transformers before they fail.

## Videos

- https://www.youtube.com/watch?v=WkKzXmwMDBE — Communication Technology for Smart Meters – AMR vs. AMI (TE Connectivity, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=i-ySau00EJw — AMI Meters (Poudre Valley REA, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=BBgzL88ufbo — Advanced Metering Infrastructure (Smart Meters) Case Study - Brunswick EMC (Advanced Energy, 5 minutes, 1k+ views)

## Further reading

[How many smart meters are installed in the United States, and who has them? (US Energy Information Administration)](https://www.eia.gov/tools/faqs/faq.php?id=108&t=3) · [2024 Assessment of Demand Response and Advanced Metering (FERC)](https://www.ferc.gov/sites/default/files/2024-11/Annual%20Assessment%20of%20Demand%20Response_1119_1400.pdf)
