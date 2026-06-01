# Security Policy

We take the security of StockFlow seriously. Because the platform is a multi-tenant SaaS handling customer inventory and payment subscriptions, even minor isolation bugs can be high impact.

## Supported versions

The project is in early-stage development. Only the latest commit on `main` and the latest tagged release are supported for security updates. Older tags will not receive backports.

## Reporting a vulnerability

**Do NOT open a public GitHub issue for security reports.**

Please report via either of the following private channels:

1. **GitHub Private Vulnerability Reporting** — open a [private report](https://github.com/Prates-Cordeiro/stockflow-saas/security/advisories/new). Preferred when possible.
2. **Direct email** — `security@pratesecordeiro.dev` (mailbox to be set up; see issue tracker for current contact)

When reporting, please include:

- A clear description of the vulnerability and its impact
- Steps to reproduce
- The commit hash or version where you first observed it
- Any proof-of-concept code, screenshots, or logs

We aim to:

- Acknowledge receipt within 72 hours
- Provide an initial assessment within 7 days
- Coordinate a fix and disclosure timeline with the reporter

## Scope

In scope:

- The StockFlow application code in this repository
- Supabase RLS policies and database functions shipped from this repository
- Stripe webhook handlers and signature verification
- Authentication and session handling

Out of scope:

- Third-party services (Supabase platform, Stripe, Vercel) — report directly to those vendors
- Self-hosted forks
- Social engineering of maintainers or users

## Responsible disclosure

Researchers who follow responsible disclosure (private report, reasonable time to remediate, no public disclosure before patch) will be acknowledged in the release notes of the security fix, with their consent.

## Hardening commitments

This project commits to:

- Mandatory Conventional Commits and PR review for changes touching the database schema, RLS policies, authentication, or billing
- CodeQL static analysis on every PR and on the `main` branch
- Dependabot dependency updates weekly across `npm` and `github-actions`
- Secrets never committed; `.env*.local` ignored by default
- Branch protection on `main` requiring CI checks to pass
