---
number: 35
name: Link Encryption and Key Management
part: 7
group: Networking & operations
reach: [short, global]
capacity: [mbps, tbps]
maturity: dep
---

## Description
A network operator can encrypt traffic at three different layers, and the choice decides how much overhead it costs and how much of the network can still read the plaintext. At layer 1 the transponder encrypts the whole wavelength with AES-256 before it goes into the fiber, which adds no bytes at all and under a microsecond of latency, but protects only the span between two transponders. At layer 2, MACsec (IEEE 802.1AE) encrypts each Ethernet frame between two ports with AES-GCM, runs inside the MAC so it holds line rate at 100G and above, and adds a security tag of 8 or 16 bytes plus a 16-byte integrity check value, roughly 2% of a 1,500-byte frame. At layer 3, IPsec (RFC 4301) wraps the IP packet in ESP between two gateways, adds about 60 bytes and forces a lower MTU, and negotiates keys with IKEv2. Keys come from one of two places: a pre-shared secret configured per link, or certificates issued by an internal authority, with the private material held in a hardware security module. The operational content of this entry is mostly the second half of its title, because the algorithms are settled and the failures are almost always about which key was where and when it last changed.

## Strengths and weaknesses
Encrypting lower down costs less and sees less. Layer 1 encryption protects everything on the wavelength, including the control traffic, with no throughput penalty and no per-flow policy, which suits a leased fiber pair between two of your own buildings. MACsec is hop by hop, so every switch in the path decrypts and re-encrypts, and a compromised intermediate device sees plaintext; that is fine inside a building and wrong across a carrier's network. IPsec survives an untrusted transport network because the gateways are the only endpoints, but done in software it costs roughly a core per few gigabits of AES-GCM, so anything past about 10 Gbps needs hardware offload, and the MTU reduction breaks applications that set the do-not-fragment bit. None of the three hides traffic analysis: volumes, timing and endpoint pairs stay visible unless you pad, which almost nobody does. The most common real failure is not cryptographic at all but an expired certificate or a pre-shared key nobody rotated in six years, and the outage that follows is usually longer than any breach would have been.

## When to use
If both ends of the span are yours and the fiber or wavelength is leased from someone else, use layer 1 encryption; it is a per-port option on the transponder you were buying anyway and costs no bandwidth. If the path is Ethernet across a small number of devices you own, turn on MACsec, since modern switch silicon includes it and the only cost is running the key agreement. If the path crosses networks you do not control, or you need different policies for different tenants over the same circuit, use IPsec and budget for offload hardware above 10 Gbps. If the data has to stay confidential into the late 2030s, assume a copy of today's ciphertext is already stored somewhere and move the key exchange to a post-quantum or hybrid one now, because AES-256 stays strong against a quantum attacker while the public-key exchange that established the key does not. In IKEv2 the two practical routes are a long post-quantum preshared key (RFC 8784) or multiple key exchanges combining a classical and a lattice algorithm (RFC 9370); the algorithms themselves, and quantum key distribution as an alternative, are covered on the quantum technologies sheet.

## Key numbers
Layer 1 AES-256 encryption adds no bytes and under 1 microsecond of latency · MACsec adds an 8- or 16-byte security tag plus a 16-byte integrity check, roughly 2% of a 1,500-byte frame · MACsec runs at line rate at 100G and above because it sits in the MAC · IPsec adds about 60 bytes per packet and forces a lower MTU · software IPsec costs roughly one core per few gigabits, so offload is needed past about 10 Gbps · AES-256 keeps roughly 128-bit strength against a quantum attacker, while the public-key exchange does not.

## Examples
IEEE 802.1AE MACsec with the 802.1X key agreement, which is what most campus and data-center switch silicon implements; optical-layer encryption in Ciena, Nokia and Infinera transponders, sold as a per-port option; IPsec as specified in RFC 4301 with IKEv2 from RFC 7296, plus RFC 8784 and RFC 9370 for the post-quantum transition; the NSA's Commercial Solutions for Classified program, which requires two independent layers of commercial encryption from different implementations rather than one.

## Economic profile
The cryptography is free and the key management is not. MACsec is a feature of switch and NIC silicon that is already paid for, so turning it on costs nothing in hardware and shows up entirely as operations: a certificate authority or a key store, a rotation schedule, and someone who owns it. Layer 1 encryption is sold as a per-port license adder on a transponder, which is real money but small against the line system it rides on, and it is the cheapest way to cover a leased fiber pair because it consumes no capacity. IPsec is the expensive one, since above about 10 Gbps it means buying gateways whose only job is encryption, and the throughput number on the datasheet is measured with large packets and falls sharply with small ones. Against all of that, the dominant cost of the post-quantum transition is inventory rather than algorithms: finding every device, appliance and protocol in the estate that does a public-key exchange, which is why large migrations are planned over five to ten years. For a buyer the useful rule is that the encryption line item is small and the credential lifecycle is where the outages and the audit findings come from, so budget for the second even when the first is a checkbox.

## Videos

- https://www.youtube.com/watch?v=ricMirSPyHs — MACSec (Media Access Control Security) Overview (Balram Shekhawat, 16 minutes, 10k+ views)
- https://www.youtube.com/watch?v=xTH1ZA_qUvA — IPsec Explained (PowerCert Animated Videos, 6 minutes, 100k+ views)

## Further reading

[802.1AE: MAC Security (MACsec) (IEEE 802.1 Working Group)](https://1.ieee802.org/security/802-1ae/) · [SP 800-77 Rev. 1, Guide to IPsec VPNs (NIST Computer Security Resource Center)](https://csrc.nist.gov/pubs/sp/800/77/r1/final)
