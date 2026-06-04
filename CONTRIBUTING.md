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

---

## Appendix: Your first contribution — step by step

New to open source or to this repo? This walkthrough takes you from zero to a merged pull request. Sections 2–4 above are the reference; this is the hands-on path.

### 1. Get the project running

```bash
git clone https://github.com/Prates-Cordeiro/stockflow-saas.git
cd stockflow-saas
npm install        # also installs the Husky commit hooks
```

### 2. Pick an issue

- Look for issues labeled **`good first issue`** — they are scoped for newcomers and have a clear **Acceptance criteria** checklist.
- Read the whole issue first. Check the **Blocked by** note: do not start an issue whose dependency hasn't merged yet.
- Comment on the issue saying you're picking it up, so two people don't do the same work.

### 3. Create a branch

Never work directly on `main`. Branch from the latest `main`:

```bash
git checkout main
git pull
git checkout -b feature/<slug>     # e.g. feature/products-table-rls
```

Branch prefixes: `feature/`, `fix/`, `chore/`, `docs/` (see §2).

### 4. Make the change

- Keep the PR focused on **one** issue.
- Follow the acceptance criteria as your checklist — that's literally what "done" means.

### 5. Commit (the hook will check you)

Commit messages MUST follow Conventional Commits (§3). The `commit-msg` hook **rejects** a bad message — that's normal, just fix and retry.

```bash
git add .
git commit -m "feat(db): add products table with tenant RLS"
```

If the commit is rejected, read the error: it's telling you the type or format is wrong.

### 6. Push and open the pull request

```bash
git push -u origin feature/<slug>
```

Then open a PR against `main` (GitHub will show a button, or run `gh pr create`). In the PR description:

- **What** you changed, **why**, and a **test plan** (how you verified it)
- `Closes #N` to auto-close the issue when the PR merges
- Paste any proof the acceptance criteria asks for (e.g. the isolation test output)

### 7. Pass review

- All CI checks must be green. If CI is red, click "Details" and read the log — fix and push again to the same branch.
- A maintainer reviews and may request changes. That's the normal, valuable part — respond by pushing more commits to the branch.
- One approval is required. We **squash and merge**, so your messy WIP commits collapse into one clean commit on `main`.

### 8. After merge

Your branch can be deleted (GitHub offers a button). Pull `main` again before starting the next issue. 🎉

> Stuck for more than ~30 minutes? Open the issue thread and ask. Asking early is encouraged, not a weakness.
