---
number: 9
name: Gradients, Coils and Pulse Sequences
part: 2
group: Magnetic resonance
uses: [diag]
invasiveness: [ext]
capex: high
regclass: c2
maturity: std
---

## Description
The magnet supplies the field; everything that turns it into an image sits inside the bore. Three orthogonal gradient coils add a linear field variation along x, y and z so that resonant frequency encodes position, and a clinical system runs about 33–45 mT/m of gradient amplitude with a slew rate of 120–200 T/m/s, driven by amplifiers pushing hundreds of amps at peak powers approaching a megawatt. A body-sized transmit coil delivers the RF pulse, and a close-fitting receive array picks up the signal: 8 to 32 channels for routine work, 64 or more on research head arrays. Channel count matters because independent coil sensitivities let parallel imaging reconstruct an image from undersampled data, so 2–4x acceleration is routine and simultaneous multi-slice pushes diffusion and functional imaging further. The pulse sequence decides what the image means, since the same hardware produces a T1, T2, diffusion or susceptibility image depending only on the timing of the pulses and gradients.

## Strengths and weaknesses
Sequences and reconstruction are where most image-quality gains now come from, because they are software on an installed magnet rather than a new magnet. Compressed sensing and trained reconstruction have cut typical scan times by roughly a third to a half at matched image quality, and vendors ship them as licensed options on scanners already in the field. Gradient performance is limited by the patient, not the amplifier: rapidly switched gradients induce currents in peripheral nerves, and IEC 60601-2-33 requires operation below the peripheral nerve stimulation threshold, which is what caps usable slew rate near 200 T/m/s on a whole-body system. Local head-only gradient inserts sidestep that geometry and reach 200–500 mT/m in research use. Gradient switching also drives Lorentz forces in the coil that make MRI loud, over 100 dB in some sequences, and receive coils are the part patients and staff physically handle, so they get dropped and are a recurring repair line.

## When to use
Specify gradients by what you actually run: 33–45 mT/m is enough for routine clinical work, and paying for the top gradient tier is worth it only if diffusion imaging, functional imaging, or cardiac work is a real share of your volume. Buy more receive channels if you want acceleration rather than raw sensitivity, since parallel imaging capability scales with independent coils. If throughput is the problem, license the accelerated reconstruction package before you consider a second scanner, because a 40% scan-time cut on an existing magnet is far cheaper than another room. If you are a startup selling into this layer, sell software or coils, since both install on the existing base without touching the magnet. Avoid assuming a research gradient insert transfers to clinical use, because the nerve stimulation limit that bounds a whole-body coil is a regulatory constraint and not an engineering one.

## Key numbers
Gradient amplitude 33–45 mT/m clinical, 200–500 mT/m on research head inserts · slew rate 120–200 T/m/s, capped by peripheral nerve stimulation under IEC 60601-2-33 · gradient amplifiers at hundreds of amps and peak powers near a megawatt · receive arrays of 8–32 channels routine, 64+ for research heads · parallel imaging acceleration 2–4x routine · accelerated reconstruction cuts scan time by roughly a third to a half · acoustic noise above 100 dB.

## Examples
Siemens Deep Resolve, GE AIR Recon DL and Philips SmartSpeed are the shipping deep learning reconstruction options; blipped-CAIPI simultaneous multi-slice, developed for the Human Connectome Project, is now standard on clinical diffusion and functional protocols; head gradient inserts built for connectome imaging reach several hundred mT/m.

## Economic profile
This layer is where MRI vendors make margin after the magnet is sold. A 32-channel receive array costs roughly $30–80k, coils get dropped and cables fail, so replacement is a recurring line rather than a one-time purchase. Sequence and reconstruction packages are licensed software options priced from tens of thousands to a few hundred thousand dollars each, and they carry near-zero marginal cost, which is why every vendor's roadmap is weighted toward them. For the hospital the arithmetic is simple: if a package cuts a 30-minute exam to 20, a scanner running 10 hours a day gains several slots a day, and at a few hundred dollars of reimbursement per exam the option pays back inside a year or two at high utilization. Gradient upgrades on an installed magnet are also sold this way, though they need a service visit and sometimes a new amplifier cabinet. The barrier for a third-party entrant is that coils and sequences have to be validated against a specific vendor's scanner and cleared as accessories to it, which is a narrow 510(k) path but a real one, and a few independent coil makers do exactly that.

## Videos

- https://www.youtube.com/watch?v=EMeAC50zjFg — MRI Machine - Main, Gradient and RF Coils/ Magnets | MRI Physics Course | Radiology Physics Course#2 (Radiology Tutorials, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=5pxbkQINuIE — Phase encoding helps localize an MRI signal in the body - MRI physics explained (Clover Learning, 7 minutes, 10k+ views)

## Further reading

[Gradient specifications (Questions and Answers in MRI)](https://mriquestions.com/gradient-specifications.html) · [Recent advances in parallel imaging for MRI (Progress in Nuclear Magnetic Resonance Spectroscopy)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5927614/)
