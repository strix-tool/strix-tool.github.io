# Security Policy

This repository holds the **Strix Advanced Tools** website — a static
[Astro](https://astro.build) site. It runs no server code and collects no data: no
analytics, no cookies, no accounts.

If you find a security issue in the **website** (for example a content-injection or a
supply-chain concern in the build), please report it **privately** — do not open a
public issue:

- Use **GitHub Private Vulnerability Reporting** on this repository
  (**Security → Report a vulnerability**).

For a security issue in one of the **tools**, report it on that tool's own repository —
each ships its own `SECURITY.md` with a threat model and disclosure path.

How the tools' downloads are verified (SHA-256 checksums + build-provenance attestation):
https://strix-tool.github.io/security/
