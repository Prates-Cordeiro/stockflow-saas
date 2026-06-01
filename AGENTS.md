# AGENTS.md — Guidance for AI coding assistants

This file is read by AI coding assistants (Claude Code, GitHub Copilot, Cursor, etc.) when working on this repository. It explains the conventions a human reviewer expects.

## Project shape

- **What**: Multi-tenant inventory management SaaS
- **Stack**: Next.js (App Router) · TypeScript · Tailwind · shadcn/ui · Supabase (Postgres + Auth + RLS) · Stripe
- **Hosting**: Vercel
- **Org**: [Prates-Cordeiro](https://github.com/Prates-Cordeiro)

## Hard rules

1. **Every commit message must follow Conventional Commits.** A `commit-msg` hook will reject anything else. Allowed types: `feat`, `fix`, `perf`, `refactor`, `docs`, `test`, `build`, `ci`, `chore`, `security`, `revert`.
2. **All commit messages, PR titles and PR bodies are in English.**
3. **Never bypass git hooks** with `--no-verify` unless explicitly instructed.
4. **Never commit secrets.** `.env*.local` is gitignored. Use Vercel env vars or `supabase secrets` for sensitive values.
5. **Every database table that holds tenant data must have an RLS policy keyed on `tenant_id`.** No exceptions. Cross-tenant queries go through dedicated admin functions with explicit `SECURITY DEFINER` and audit logging.
6. **Default merge strategy is squash + delete branch.** Intermediate commits inside a PR are disposable.
7. **One logical change per PR.** Refactors get their own PR, separate from feature work.

## Soft rules

- Prefer React Server Components by default. Fall back to client components only when interactivity, hooks, or browser APIs require it.
- Use Server Actions for mutations whenever possible; reserve API routes for webhooks and third-party callbacks (Stripe).
- shadcn/ui components are vendored, not installed. Customise inline.
- Tailwind only — no CSS modules, no styled-components.
- TypeScript `strict: true`. No `any` in new code without an explicit `// eslint-disable-next-line` and a reason.

## Workflow

When implementing a feature:

1. Read the relevant issue and any linked PRs first.
2. If the change touches the database, the matching Supabase migration belongs in the same PR.
3. Run `npm run typecheck` and `npm run lint` locally before pushing.
4. Open a PR; the CI will run automatically.
5. Wait for a human review before merging. Do **not** self-approve, and do **not** push fixes without re-running CI.

## What to ask before doing

If a request is ambiguous in any of these areas, stop and ask:

- Database schema changes (especially RLS policies)
- Billing logic (Stripe webhooks, trial behaviour, prorations)
- Auth flow changes
- Anything that touches a tenant boundary

## What you can decide on your own

- Component naming and file structure inside an existing module
- Internal refactors that do not change the public surface
- Documentation improvements
- Tailwind class organisation
- Test coverage expansion

## Related docs

- [README.md](./README.md) — high-level overview
- [CONTRIBUTING.md](./CONTRIBUTING.md) — branching, commits, PR conventions
- [SECURITY.md](./SECURITY.md) — vulnerability reporting and hardening commitments
