# Contributing to StockFlow

Thanks for your interest. This document covers branching, commit conventions, pull requests, and the local toolchain.

## 1. Code of conduct

By participating you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## 2. Branching model

- `main` — protected, always deployable
- `feature/<slug>` — new functionality
- `fix/<slug>` — bug fixes
- `chore/<slug>` — infrastructure, dependencies, internal tooling
- `docs/<slug>` — documentation-only changes

Force-push to `main` is blocked. All work lands via pull request.

## 3. Conventional Commits — required

Every commit message MUST follow the [Conventional Commits](https://www.conventionalcommits.org/) format. A `commit-msg` git hook (Husky + commitlint) rejects commits that do not match.

### Allowed types

| Type        | Purpose                                                        |
|-------------|----------------------------------------------------------------|
| `feat`      | A new user-facing feature                                      |
| `fix`       | A bug fix                                                      |
| `perf`      | A change that improves performance                             |
| `refactor`  | Code change that neither adds a feature nor fixes a bug        |
| `docs`      | Documentation only                                             |
| `test`      | Adding or correcting tests                                     |
| `build`     | Build system, dependencies, package manager                    |
| `ci`        | CI/CD configuration                                            |
| `chore`     | Routine maintenance (versions, internal scripts)               |
| `security`  | Security fix or hardening change                               |
| `revert`    | Reverts a previous commit                                      |

### Scopes (recommended)

`web`, `api`, `db`, `auth`, `billing`, `ui`, `infra`, `ci`, `deps`. Pick the closest one.

### Examples

```
feat(billing): add Stripe webhook handler for invoice.paid
fix(auth): handle missing session on RSC refresh
chore(deps): bump next from 15.0.0 to 15.0.4
ci: enable CodeQL on push to main
security: enforce RLS policy on movements table
```

## 4. Pull requests

- Open against `main`
- Use a clear title in Conventional Commits format (becomes the squash-merge commit on `main`)
- Describe **what**, **why**, and a **test plan**
- Link to relevant issues with `Closes #N`
- Keep PRs focused — one logical change per PR
- All required CI checks must pass
- One approval required before merge

We **squash and merge** by default. Multiple work-in-progress commits inside a PR are fine — they collapse into one clean commit on `main`.

## 5. Local development

```bash
git clone https://github.com/Prates-Cordeiro/stockflow-saas.git
cd stockflow-saas
npm install
```

The `prepare` script installs Husky hooks automatically. Try to commit something — `commitlint` will validate the message format.

## 6. Releasing

We use [release-please](https://github.com/googleapis/release-please) on `main`. Every merged `feat:` or `fix:` opens or updates a release PR. Merging the release PR creates a new GitHub Release with a generated CHANGELOG entry.

You do not need to write the CHANGELOG by hand.

## 7. Reporting security issues

Do **not** open a public GitHub issue. Follow the disclosure process in [SECURITY.md](./SECURITY.md).

## 8. Questions

Open a discussion or ping the maintainers in an issue.
