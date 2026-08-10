---
number: 5
name: KrF lithography (248 nm)
part: 2
group: Optical lithography
devices: [memory, logic, analog, power]
node: [mature]
wafer: [w200, w300]
toolcost: med
suppliers: duo
---

## Description
KrF lithography uses a krypton fluoride excimer laser at 248 nm in a projection scanner, resolving roughly 110 nm in a single exposure (manufacturing-processes 184 covers the resist step). It is the workhorse of mature-node manufacturing and, less obviously, the tool that patterns most of the layers in a 3D NAND device. NAND stopped scaling sideways in 2013 and now scales by stacking layers, so a 300-layer part is built largely with 1990s-vintage optics plus one extremely hard etch (010) and a great deal of deposition. The economics follow from throughput: an ASML NXT:870B runs up to 400 wafers an hour against 220 on the best EUV tool, at a selling price around €11M against $180M and up. ArF dry at 193 nm sits between KrF and immersion at roughly 65 nm, but most new capacity skipped it and went straight from KrF to immersion.

## Strengths and weaknesses
KrF is fast, cheap per exposure, well understood, and supported by three tool vendors and a large secondhand fleet, which is a combination nothing above it offers. Deep-UV resists at 248 nm are mature and inexpensive. The limitation is that 110 nm is close to the end of what the wavelength and resist chemistry will give, so there is no meaningful extension path. The failure mode is the light source rather than the optics: an excimer laser chamber is a consumable with a defined pulse life, the gas has to be managed, and an unplanned chamber failure takes the tool down for a service visit. Cost of ownership at this rung is a laser service contract as much as it is depreciation.

## When to use
If your features fall between roughly 110 nm and 350 nm, KrF is the cheapest tool that prints them, and it is the standard choice for mature logic, DRAM periphery, and the overwhelming majority of layers in a 3D NAND stack. Use i-line (004) instead for anything above about 350 nm, because the tool costs a third as much and the masks are cheaper. Go to ArF immersion (006) when a layer needs below about 110 nm, and expect to buy a 300 mm line to go with it. If you are planning capacity that must be buildable without an export license, KrF is the practical ceiling today, so design the process around what 110 nm plus etch and deposition can do rather than assuming you will get a finer tool later.

## Key numbers
248 nm KrF excimer, resolving roughly 110 nm · about €11M average selling price · up to 400 wafers an hour on an ASML NXT:870B, against 220 on an EUV scanner · roughly $4M for the i-line rung below and $90M for the immersion rung above · three vendors still sell new tools, plus a deep used market.

## Supply chain
This is the most competitive rung in lithography. ASML, Nikon, and Canon all still sell KrF scanners and there is a large secondhand fleet, so no single vendor can hold a fab hostage. One level down the picture tightens: excimer light sources come from Cymer, which ASML owns, and Gigaphoton, and KrF resists come from the same handful of Japanese chemical firms that supply everything else in this industry. Mask blanks are roughly 93% AGC and Hoya. The strategic point is what is not restricted. US and Dutch export rules cover EUV and advanced immersion tools but not KrF, so this is the finest lithography a Chinese fab can buy without a license, and it is also the rung China's own scanner program has publicly reached — SMEE ships KrF-class tools, while its 28 nm immersion tool has been announced repeatedly without a confirmed production shipment.

## Examples
ASML's TWINSCAN NXT:870B, Nikon's KrF scanner line, and Canon's FPA-6300ES series. The 3D NAND fabs at Samsung, SK Hynix, Micron, Kioxia, and YMTC run large KrF fleets; so do mature logic lines at 90–130 nm, DRAM periphery layers, and CMOS image sensor fabs. SMIC's non-restricted capacity is built substantially on this generation.

## Economic profile
At €11M and 400 wafers an hour, depreciation per wafer-layer is a few cents, and that is the number behind NAND's cost curve. Adding layers to a NAND stack adds deposition and etch time, not exposures, so cost per bit keeps falling on tools that were designed before anyone had heard of EUV. For anyone modeling mature-node economics, KrF capacity is cheap, available, and export-unrestricted, which is precisely why so much of it got built at once and why price competition at mature nodes has been severe. If your business plan depends on mature-node wafer prices holding, check how many KrF-based fabs are still under construction before you believe it.

## Videos

- https://www.youtube.com/watch?v=4XHvzBJb6ls — How a DUV Light Source Works (Cymer, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=y_biQpljz7A — Excimer LASER basics (FerroThinfilms Lab, 4 minutes, 10k+ views)

## Further reading

[DUV lithography for chip manufacturing (ZEISS SMT)](https://www.zeiss.com/semiconductor-manufacturing-technology/inspiring-technology/duv-lithography.html)
