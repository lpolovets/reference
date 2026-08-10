---
number: 19
name: Protected military SATCOM
part: 4
group: Mobile and protected
orbits: [geo, leo]
mass: [med]
buyer: [def]
maturity: routine
cost: vhigh
---

## Description
Protected military SATCOM is what a communications link costs when it has to keep working while someone is actively trying to stop it. The mechanism is a stack of measures, each addressing a different attack. Uplinks run at extremely high frequency near 44 GHz with fast frequency hopping, which forces a jammer to spread its power across a wide band; nulling antennas steer a pattern null onto the jammer's bearing so its energy never enters the receiver; onboard processing demodulates and regenerates the signal instead of repeating it, so a jammer cannot simply swamp a transponder; and crosslinks route traffic satellite to satellite so it never transits a foreign teleport. On top of that, the strategic constellation is hardened against nuclear effects, because its primary job is nuclear command and control, which means shielding, hardened parts, and a design that survives the electromagnetic pulse and radiation from a high-altitude burst. AEHF is the current US system: six satellites of about 6,170 kg each, at roughly $15.5B for the program, or around $1.3B per spacecraft.

## Strengths and weaknesses
It works, which is the point, and nothing commercial comes close: an unprotected commercial link can be jammed by an adversary with a truck and a power amplifier, and this cannot. The weaknesses are cost, capacity, and pace. Protected channels are narrow by design, so a satellite that cost more than a billion dollars carries a small fraction of the traffic of a commercial satellite costing a fifth as much. Development runs a decade, so the fielded system reflects threat assumptions from the previous decade. And the failure mode nobody likes to discuss is concentration: a six-satellite constellation of extremely valuable assets in geostationary orbit is a small, well-known, and fixed target set, which is precisely the argument the proliferated architecture makes against it.

## When to use
Reserve protected SATCOM for traffic that has to survive a contested environment: nuclear command and control, strategic warning, and the command links that must work when everything else is being jammed. For high-volume theater traffic, wideband systems like WGS carry far more bandwidth per dollar with none of the hardening, and commercial leases carry more still. The live architectural choice is exquisite versus proliferated. SDA's Transport Layer buys resilience through numbers rather than hardening, at roughly $14M per Tranche 1 space vehicle and about $21.5M on later awards against $1.3B for an AEHF satellite, and had more than 60 Tranche 1 vehicles on orbit by July 2026. If the requirement is resilience against counterspace attack, proliferation is the better buy. If the requirement is a link that survives nuclear effects, nothing in LEO does that job today, and you are buying the exquisite satellite whether you like the price or not.

## Key numbers
AEHF at about 6,170 kg per satellite and roughly $15.5B for six spacecraft, near $1.3B each · EHF uplinks near 44 GHz with downlinks near 20 GHz · military X-band at 7.25–7.75 GHz down and 7.9–8.4 GHz up · SDA Transport Layer vehicles at roughly $14M on Tranche 1 and about $21.5M on later awards · more than 60 Tranche 1 transport satellites on orbit by July 2026 · about $1.5B awarded in 2026 for 72 more.

## Regulatory and spectrum
This is the one communications category where spectrum is not a race. The bands are set aside for government use in the ITU allocations — EHF uplinks at 43.5–45.5 GHz with downlinks at 20.2–21.2 GHz, and military X-band at 7.25–7.75 and 7.9–8.4 GHz — so a protected system never enters a commercial processing round, never fights a bringing-into-use deadline, and in the US gets its assignments through NTIA and the interagency process rather than an FCC license. What binds instead is export control and alliance management. Crypto, anti-jam waveforms, and nulling antennas sit firmly on the US Munitions List, so allied access runs through government-to-government agreements rather than a sales contract: the UK, Canada, the Netherlands, and Australia bought into AEHF on exactly that basis, and the Protected Tactical SATCOM program is being structured so allies can host payloads. The second constraint is that protected bands are narrow and demand keeps growing, which is why the US Space Force is pushing protection into the waveform. The Protected Tactical Waveform provides anti-jam performance over ordinary transponders, including commercial ones, turning a spectrum-allocation problem into a signal-processing problem and letting commercial capacity carry protected traffic.

## Examples
Milstar and its successor AEHF, built by Lockheed Martin with Northrop Grumman payloads, with AEHF-6 launched in 2020; WGS, the wideband X and Ka system built by Boeing that carries the bulk of theater traffic without hardening; Evolved Strategic SATCOM as the intended AEHF replacement for nuclear command and control; Protected Tactical SATCOM, with a prototype payload flying and Viasat and Intelsat awarded the first two operational PTS-Global satellites in June 2026; the SDA Transport Layer as the proliferated LEO alternative; and allied systems including UK Skynet 6 and France's Syracuse 4.

## Economic profile
Cost per protected bit is the worst in the industry by a wide margin, and it always will be, because hardening and anti-jam processing consume mass, power, and bandwidth that would otherwise carry traffic. Governments buy it anyway because the alternative is a command system an adversary can switch off. The interesting money has moved to the two layers around the satellite: terminals, which are the practical constraint on how much protected capability a force can actually use, and waveforms, which let commercial satellites carry protected traffic and so break the link between protection and a billion-dollar spacecraft. For anyone building a business adjacent to this, the durable positions are terminal manufacturing, waveform and modem intellectual property, and commercial capacity qualified to carry the protected waveform. Building the exquisite satellites themselves is a two-or-three-prime business with decade-long cycles and no commercial market underneath it.

## Videos

- https://www.youtube.com/watch?v=wCpZG3hVaJg — Advanced EHF Communications Satellite (Northrop Grumman, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=L0sNPYrErKI — Anti-Jam MilSatCom Overview - Protected (Anti-Jam) Satellite Communications (Northrop Grumman, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=lCE82hKrodQ — Anti-Jam MilSatCom - See Low Cost Terminals in Action (Northrop Grumman, 5 minutes, 5k+ views)

## Further reading

[Defense Primer: Nuclear Command, Control, and Communications (NC3) (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11697.html) · [DOD Satellite Communications: Reporting on Progress Needed to Provide Insight on New Approach (U.S. Government Accountability Office)](https://www.gao.gov/products/gao-25-107034)
