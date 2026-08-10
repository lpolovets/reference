---
number: 11
name: Cislunar and escape trajectories
part: 2
group: Beyond Earth orbit
orbits: [deep]
buyer: [civ, sci, def]
maturity: emerging
cost: high
---

## Description
Cislunar space is everything between GEO and the Moon, plus the Earth-Moon Lagrange points, and escape trajectories are everything past that. The delta-v is not the hard part: a translunar injection costs about 3.12 km/s from LEO, escape sits only a little higher at a characteristic energy of C3 = 0, and holding a near-rectilinear halo orbit around the Moon takes under 10 m/s a year, which is less than geostationary station-keeping. What changes is operations. Launch windows recur roughly monthly and last days rather than being a date you pick, light-time delay puts 2.6 seconds of round trip between you and the Moon and 6 to 44 minutes to Mars, tracking time on deep-space antennas is rationed rather than purchased, and there is no orbital infrastructure of any kind: no GNSS, no relay network you can assume, no rescue, no second attempt.

## Strengths and weaknesses
The Lagrange points and lunar halo orbits are genuinely good places to be for certain jobs. L2 gives a telescope a stable thermal environment with the Earth, Moon, and Sun all on one side, and a near-rectilinear halo orbit keeps a station in continuous line of sight to Earth while staying cheap to maintain. The weakness is that everything else about the environment is hostile to normal engineering practice. You are outside the magnetosphere, so galactic cosmic rays and solar particle events hit the spacecraft directly, and shielding against a large event is impractical for anything uncrewed. Navigation depends on ground-based radiometric tracking, which means your position knowledge is only as good as your allocation of antenna time. The failure mode is the one CLPS has demonstrated repeatedly: landers that work through cruise and then fail in the last minutes, because terminal descent has to work on the first try with no way to abort and no help available.

## When to use
This is not a choice most missions face. Go beyond GEO when the destination is the point: lunar surface science, a Gateway-supported program, an astrophysics observatory that needs L2, a planetary mission, or a defense payload watching the volume between GEO and the Moon. If you go, plan around the operational constraints rather than the delta-v. Book deep-space tracking early and design the mission to survive with less of it than you asked for. Assume the launch window is a few days a month and that missing one costs a month. Carry enough autonomy that the spacecraft can hold a safe state through a light-time round trip plus a ground shift change. If your objective can be met from GEO or from a high Earth orbit, do that instead, because the ground segment cost and the operations risk both step up sharply once you leave Earth orbit.

## Key numbers
About 3.12 km/s from LEO to a translunar injection · C3 = 0 as the escape threshold · under 10 m/s a year to hold a near-rectilinear halo orbit · 2.6 s round-trip light time to the Moon and roughly 6 to 44 minutes to Mars · lunar launch windows recurring monthly and lasting days · CLPS lunar lander task orders in the $79–200M range.

## Regulatory and spectrum
Cislunar is where the regulatory framework is thinnest, and the gap is authorization rather than spectrum. The Outer Space Treaty makes states responsible for authorizing and continuously supervising their nationals' space activities, but in the US no agency clearly holds that authority for a novel activity like operating on the lunar surface. The FAA licenses the launch, the FCC licenses the radio, and NOAA licenses remote sensing of the Earth, and a lunar lander doing something none of those cover falls between them. Spectrum has its own quirk: the ITU's protected deep-space bands apply beyond two million kilometers, so a lunar mission is coordinated as near-Earth space research and shares its allocations more widely than a Mars mission does. Layered on top are COSPAR planetary protection, where the Moon is a light-touch Category II but Mars is not, the Artemis Accords as a non-binding framework signed by more than fifty states covering interoperability and safety zones, and separate presidential-level approval for launching nuclear power sources.

## Examples
NASA's CLPS program has bought lunar deliveries from Astrobotic, Intuitive Machines, and Firefly, whose Blue Ghost landed successfully in 2025 after earlier attempts fell short. Rocket Lab's CAPSTONE demonstrated a near-rectilinear halo orbit with a 12U CubeSat, which is the orbit Gateway will use. Beyond the Moon, JWST and Euclid operate at Sun-Earth L2, China's Chang'e program has run sample return and far-side missions with the Queqiao relay satellites providing communications, and Impulse Space's Helios kick stage is aimed at commercial cislunar delivery. Military interest is real but new and small, centered on tracking objects in the volume beyond GEO.

## Economic profile
Almost all the money here is government money, and the buying model recently changed. CLPS replaced cost-plus lander development with fixed-price task orders in the $79–200M range, accepting that some missions fail in exchange for many more attempts per dollar, and the early results have been exactly that mix. That model works for delivery. It has not yet produced a commercial customer who pays for lunar activity because they want the result, which is the thing missing from every cislunar business plan. The nearer-term commercial opportunities are the supporting layers rather than the destinations: transfer stages that take payloads from a rideshare drop-off to a lunar trajectory, communications and navigation relays, and tracking services. If you are evaluating a cislunar company, look at how much of its revenue depends on a single national program continuing at its current funding level, because for most of them the answer is all of it.

## Videos

- https://www.youtube.com/watch?v=EIodnH5aFI8 — Rocket Lab's Tiny Rocket Sent A Satellite to The Moon: What does 'Near Rectilinear Halo Orbit' Mean? (Scott Manley, 10 minutes, 100k+ views)
- https://www.youtube.com/watch?v=WVrWcbyOmxY — Why Spacecraft Are Using These Crazy Routes To The Moon - Weak Stability and Ballistic Capture. (Scott Manley, 14 minutes, 100k+ views)
- https://www.youtube.com/watch?v=X5O77OV9_ek — Near Rectilinear Halo Orbit Explained and Visualized (aisolutionsinc, 2 minutes, 50k+ views)

## Further reading

[Basics of Space Flight, Chapter 4: Trajectories (NASA)](https://science.nasa.gov/learn/basics-of-space-flight/chapter4-1/) · [Cislunar Near Rectilinear Halo Orbit for Human Space Exploration (NASA)](https://ntrs.nasa.gov/citations/20160003078)
