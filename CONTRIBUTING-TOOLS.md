# Contributing a tool to Strix Advanced Tools

Strix is a suite, not a walled garden. If you have built an open-source privacy or
security tool that lives by the same rules — **offline by default, zero telemetry,
genuinely auditable** — you can propose it. Once it passes the same security review
and hardening pass every Strix tool goes through, it ships under the Strix umbrella:
its own repository, a page on the website in 13 languages, and checksummed, attested
releases.

You keep authorship and the MIT copyright throughout. Strix co-maintains and
distributes your tool **with** you.

---

## How it works

1. **Build your tool.** Any language, for Windows and/or Linux, under an
   MIT-compatible license. Meet the criteria below.
2. **Open a submission.** File a [Tool submission issue](../../issues/new?template=tool-submission.yml)
   with your repository link, what it does, the platforms it targets, and how it
   touches the network (if at all).
3. **Security review & hardening.** We run the review pipeline below and share every
   finding with you. We work them through together — a review that finds issues is
   the process working.
4. **It ships as Strix.** On acceptance your tool gets its own repository under the
   `strix-tool` organization, a localized landing page on the site, and releases
   with a `SHA256SUMS` and a SLSA build-provenance attestation.

---

## What a Strix tool must be

These are non-negotiable — they are the promises the whole suite is built on.

- **Open source.** Public source under the MIT license (or an MIT-compatible
  permissive license: ISC, BSD-2/3-Clause, Apache-2.0). Nothing hidden or obfuscated.
- **Offline by default.** No network calls of its own for a desktop tool. If
  networking is the tool's whole purpose (recon/OSINT), it must be **key-less,
  consent-gated, clearly scoped, and authorized-use-only** — never silent or
  background traffic.
- **Zero telemetry.** No analytics SDKs, no phone-home, no accounts. The user's data
  never leaves their machine.
- **One job, done well.** A focused utility with sensible defaults, a clear scope,
  and an explicit statement of what it deliberately does **not** do.
- **Documented & testable.** A `README`, a `SECURITY.md` with a threat model, and
  regression tests for anything safety-critical.
- **Least privilege.** No shell-outs, no dynamic code execution (`eval`/`exec`),
  argv-only subprocess calls, absolute-path tool resolution, and elevation only where
  genuinely required.

---

## The security review every submission goes through

The same gate the existing tools cleared before launch. Nothing ships until it passes.

1. **Static analysis (SAST)** — `semgrep`, `bandit`, `PSScriptAnalyzer`, Roslyn
   analyzers, and language-appropriate linters across the whole codebase.
2. **Dependency & supply-chain audit** — pinned versions, an SBOM, `pip-audit` /
   Dependabot, and a check that every third-party dependency is warranted.
3. **Adversarial code review** — a human pass hunting injection, path traversal,
   SSRF, privilege escalation, and any weakening of a safety control.
4. **Hardening** — we close the gaps together: least privilege, no shell, input
   validation, fail-closed defaults, and defense-in-depth on the dangerous paths.
5. **Provenance on every release** — CI builds each release, writes a SHA-256
   `SHA256SUMS`, and attaches a SLSA build-provenance attestation, so every download
   is verifiable.

---

## What you keep — and what you get

- **Your authorship & copyright.** You stay the author. The MIT copyright is yours.
- **A real audience.** A localized landing page in 13 languages, SEO/GEO wiring, and
  a place in the tool grid and downloads.
- **A trusted release pipeline.** Checksums, attestation, an eventual code-signing
  path (SignPath Foundation), and a security-disclosure process — set up for you.
- **Co-maintenance.** Issues, PRs and security reports flow through the same process
  as the rest of the suite.

---

## FAQ

**Do I lose ownership of my tool?**
No. You keep authorship and the MIT copyright. You can withdraw before release.

**What languages or frameworks are allowed?**
Any. The suite spans Python, C#, PowerShell and more. What matters is the license,
the offline/no-telemetry rules, and passing the review — not the stack.

**What if my tool needs the network?**
Only if networking is its actual purpose. It must then be key-less, consent-gated,
clearly scoped, and authorized-use-only.

**What happens if it doesn't pass?**
You get the full findings and can address them and resubmit. The same happened to
the tools already in the suite.

---

Ready? **[Open a tool submission →](../../issues/new?template=tool-submission.yml)**
