---
number: 3
name: Tool and Die Steel
part: 1
group: Carbon and alloy steel
properties: [wear, strong, tough]
strength: high
temperature: high
processing: [form, mach, am]
cost: low
---

## Description
Tool steel is high-carbon, high-alloy steel bought for what it does after heat treatment: 58–65 HRC, held against an abrasive workpiece for millions of cycles. It is the material behind almost every mold, die, punch, and cutting tool on the manufacturing-processes sheet. Hardness comes from martensite, and wear resistance comes from hard carbide particles suspended in it, which is why the grade letters are worth knowing as a trade-off map rather than as a catalog: W is plain water-hardening carbon, O oil-hardening and A air-hardening for general cold work, D high-carbon high-chromium for abrasive cold work, S shock-resisting for punches and chisels, H hot work for anything that touches hot metal, and M and T the molybdenum and tungsten high-speed steels for cutting tools. More carbide means more wear resistance and less toughness, in a straight line, and that single trade is most of what grade selection is. Hot-work grades add a second requirement, hot hardness: H13 is tempered near 550 °C so it does not soften when the die face sees 500–600 °C every shot.

## Strengths and weaknesses
Nothing else gives you that combination of hardness, bulk toughness, machinability in the annealed state, and price. You cut the tool at about 20 HRC with ordinary carbide inserts, then harden it, which is the whole reason tool steel beat cemented carbide for most tooling: carbide is harder and lasts longer but has to be ground or EDM'd to shape, costs several times as much per kilogram, and chips instead of deforming. The weaknesses show up in heat treatment and at the edges. Hardening changes size by a few tenths of a percent and distorts the part, so tools are rough-machined, stress-relieved, hardened, and then finish-ground, and you leave roughly 0.2–0.5 mm of grind stock per surface for that. At working hardness the material has almost no ductility, so it fails by chipping and cracking rather than by bending, and every sharp internal corner, EDM recast layer, and grinding burn is a crack starter. Powder-metallurgy grades such as CPM 10V fix the wear-versus-toughness trade partway by dispersing very fine vanadium carbides instead of coarse segregated ones, at $30–50/kg against $3–10 for conventional bar.

## When to use
Pick the grade from what will destroy the tool, not from a hardness target. If the tool wears out against an abrasive workpiece (glass-filled plastic, high-strength sheet, ceramics), go up in carbide content: D2, then a PM grade like CPM 10V or Vanadis 4 Extra, and accept the price and the grinding cost. If the tool chips or cracks first, go down in carbide and up in toughness: S7 or A2, or drop the working hardness a few points, which usually buys more life than a harder grade would. If the tool touches hot metal, you are in hot-work grades and H13 is the default for die casting and aluminum extrusion. For plastic molds, start at P20 pre-hard around 30 HRC if the resin is unfilled and the run is short, and move to a hardened and polished grade if the resin is filled or the surface has to stay optical. For tooling that will make a few thousand parts, 4140 pre-hard is often enough and skips heat treatment entirely. And if wear resistance still is not enough after all of that, the next steps are a coating (PVD titanium aluminum nitride, on the surface-modification part of the manufacturing sheet) or cemented carbide, not another steel.

## Key numbers
58–65 HRC after hardening, roughly 20 HRC annealed for machining · H13 tempered near 550 °C with die surfaces at 500–600 °C · around 2,000 MPa tensile at working hardness, about 250 kN·m/kg, though tool steels are chosen on hardness and used mostly in compression · vanadium carbide around 2,800 HV against roughly 1,800 HV for chromium carbide, which is why PM grades outwear D2 · conventional bar $3–10/kg, PM grades such as CPM 10V $30–50/kg · leave 0.2–0.5 mm of grind stock per surface for heat-treat distortion.

## How it fails
Hot-work dies fail by heat checking. The die surface heats and quenches on every shot, so it cycles in tension against a cold interior, and after tens of thousands of cycles it develops a craze network of fine thermal-fatigue cracks that then prints onto every part. You can see it coming: the pattern starts at the hottest, sharpest features and coarsens, and once it does the die gets welded and re-cut or scrapped. Die-casting dies add soldering, where molten aluminum chemically attacks the steel and welds the casting into the cavity, which is why die-casting alloys carry deliberately high iron. Cold-work tools fail the other way, by chipping and gross fracture, usually because the grade or the hardness was pushed past what the toughness supported, and almost always starting at a sharp corner, an EDM recast layer, or a grinding burn rather than in the middle of a face. The third mechanism is heat treatment itself: quench cracks in sections that change abruptly, and slow dimensional drift weeks later as retained austenite transforms, which is what deep-freeze and double-tempering cycles exist to prevent. If a tool that measured right at inspection is out of size a month later, that is the mechanism.

## Examples
P20 and 1.2738 in injection mold bases, H13 in aluminum die-casting and extrusion dies, D2 and A2 in blanking and forming dies, S7 in punches and shear blades, M2 and M42 in drills, taps, and broaches, and CPM 10V or Uddeholm Vanadis 4 Extra in high-volume blanking of advanced high-strength sheet. Printed tooling is a real niche now, mostly H13 and 1.2709 maraging powder for mold inserts with conformal cooling channels that cannot be drilled. The specialty mills are voestalpine BÖHLER Uddeholm, Daido Steel, Proterial, Erasteel, Crucible Industries, and Swiss Steel.

## Economic profile
Tool steel is a small-tonnage, high-value corner of the steel industry, made by specialty melt shops using electroslag or vacuum-arc remelting for cleanliness and gas atomization for the powder grades, which is why it prices like an alloy rather than like a commodity. The number that decides purchases is not $/kg, because the steel is usually well under a fifth of what the finished tool costs; machining, EDM, grinding, polishing, heat treatment, and try-out dominate. That arithmetic is why a grade at five times the price of D2 sells: if it doubles the interval between regrinds on a tool that costs $80,000 to build and stops a production line when it is out, the material premium disappears into the rounding. It also means the durable businesses here are heat treaters, toolmakers, and coaters rather than the mills, and that a new tool material has to prove tool life in a real press before anyone will switch, which takes a year of running.

## Videos

- https://www.youtube.com/watch?v=TkzkdvEMC7I — 7 TYPES OF TOOL STEEL AND THEIR APPLICATIONS (James Sword Engineering, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=-fZQ9ElnymI — The Four Types of Steel (Part 5: Tool Steel) | Metal Supermarkets (Metal Supermarkets, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=a3TWILPPeYM — H13 vs P20 Tool Steel Comparison | Die & Mould Material Selection Explained (CNC CAD CAM ACADEMY of SIGMA YOUTH ENGINEERS, 4 minutes, 1k+ views)

## Further reading

[Die Science: Tool steel made simple (The Fabricator)](https://www.thefabricator.com/thefabricator/article/bending/die-science-tool-steel-made-simple) · [Effect of Different Surface Conditions on Toughness of Vanadis 6 Cold Work Die Steel—A Review (Materials, via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6566915/)
