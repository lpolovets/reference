---
number: 11
name: Atomic layer etch
part: 3
group: Process modules
devices: [logic, memory]
node: [adv, lead, front]
wafer: [w300]
toolcost: low
suppliers: few
---

## Description
Atomic layer etch removes material in self-limiting cycles instead of continuously, so the amount removed comes from the cycle count rather than from the time. One half-cycle modifies only the top atomic layer, usually by adsorbing chlorine or a fluorocarbon; the second half-cycle removes only the modified material, using ion energy set below the threshold that would sputter anything underneath. ALE is to plasma etch what ALD is to CVD, and manufacturing-processes 193 covers the self-limiting surface chemistry that both rest on. Removal per cycle is a fraction of a nanometer — Lam has published chlorine-argon silicon ALE at 1.2 Å per cycle with under 3% non-uniformity across a 300 mm wafer — which is the only practical way to release nanosheet channels without eating the sheets, trim fins and gates to within a few angstroms, and smooth the line-edge roughness EUV resists leave behind.

## Strengths and weaknesses
Precision and selectivity are the whole point, and both come from the same mechanism: if the removal step cannot touch unmodified material, then selectivity stops depending on rate ratios and starts depending on chemistry. The cost is throughput. Conventional reactive-ion etch removes nanometers a second; ALE removes about an angstrom per cycle with cycles measured in seconds, so it runs one to two orders of magnitude slower. The failure mode is incomplete saturation. If either half-reaction does not saturate everywhere — deep inside a high-aspect-ratio feature, or at the wafer edge — the process quietly stops being self-limiting and becomes an ordinary rate process with all the non-uniformity you were paying to avoid. Saturation time scales roughly as the square of the aspect ratio, which is why ALE and deep features (010) sit at opposite ends of the same toolset.

## When to use
Use ALE where a few angstroms of error changes the device. Nanosheet channel release is the clearest case: SiGe has to come out from between silicon sheets a few nanometers thick, with enough selectivity that the sheets survive intact (015). Fin and gate trimming, recess etches specified as a thickness rather than a time, and post-EUV resist smoothing are the others. Everywhere else use conventional plasma etch (manufacturing-processes 186) and take the rate, because the throughput ALE costs you does not come back. A reasonable rule of thumb: if the tolerance on the step is a nanometer or worse, you do not need ALE and should not pay for it.

## Key numbers
Roughly 1–2 Å removed per cycle, against conventional plasma etch rates of nanometers a second · under 3% non-uniformity across 300 mm in published silicon ALE · cycle times of seconds, giving one to two orders of magnitude lower throughput than continuous etch · saturation time scaling roughly as the square of the aspect ratio · Lam claims up to 3× throughput improvement with its DirectALE approach.

## Supply chain
Four to eight firms can sell you something called ALE — Lam Research, Tokyo Electron, Applied Materials, and Hitachi High-Tech in production, plus Oxford Instruments and Plasma-Therm at research scale — which makes this look less concentrated than 010. In practice it is not much less. Only two or three of those have ALE qualified inside a leading-edge logic flow, and qualification is the real barrier: an ALE recipe is co-developed with a specific fab on a specific tool over years, and it does not transfer between vendors, so a fab's second source exists on paper long before it exists in production. Precursor gases come from the industrial gas majors (Linde, Air Liquide, Air Products, Taiyo Nippon Sanso) plus specialty houses supplying the thermal-ALE chemistries based on hydrogen fluoride and metal-organic ligand exchange. US rules on advanced etch equipment sales to Chinese leading-edge fabs cover ALE-capable tools, so the export exposure is the same as the rest of the etch category.

## Examples
Lam's DirectALE and its published chlorine-argon silicon ALE at 1.2 Å per cycle. Nanosheet channel release at TSMC N2, Intel 18A, and Samsung SF3 all depend on it. So do fin and gate trimming at FinFET nodes, high-k and metal gate recess steps, and the resist-smoothing steps that make EUV line-edge roughness tolerable.

## Economic profile
ALE is bought as a capability rather than as a tool category: it usually runs on the same etch platforms as everything else, with different hardware and different recipes, so the incremental capital is chamber count rather than a new machine on the floor. The cost shows up as throughput, and several times the chamber count for the same wafer starts is a real capex line. That is why vendors compete on ALE throughput rather than on precision, which everyone now has. For equipment demand: gate-all-around and backside power delivery both add ALE steps, so etch chambers per wafer start keep rising even when wafer volumes are flat, which is the structural reason etch has been gaining share of wafer fab equipment spending for a decade.

## Videos

- https://www.youtube.com/watch?v=4G8wXQGEBrA — The Era of Atomic Scale Engineering (Lam Research, 3 minutes, 100k+ views)

## Further reading

[Tech Brief: All About ALE (Lam Research)](https://newsroom.lamresearch.com/Tech-Brief-All-About-ALE) · [Atomic Layer Etching at the Tipping Point: An Overview (ECS Journal of Solid State Science and Technology)](https://iopscience.iop.org/article/10.1149/2.0061506jss)
