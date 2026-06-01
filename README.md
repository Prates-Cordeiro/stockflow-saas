# StockFlow

> Multi-tenant inventory management SaaS built with Next.js, TypeScript, Supabase and Stripe.

StockFlow is a Software-as-a-Service platform for warehouses, depots, retail stores and e-commerce operations that need real-time stock control across multiple locations, with full movement traceability and centralised management.

## Status

🚧 Early stage — initial governance and tooling. No application code yet.

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui |
| Backend | Next.js API Routes / Server Actions, TypeScript |
| Database | PostgreSQL via Supabase, with Row-Level Security (RLS) |
| Auth | Supabase Auth |
| Payments | Stripe (subscriptions, trial, billing portal) |
| Hosting | Vercel |

## Multi-tenancy model

Each tenant (company) has fully isolated:

- Users and roles
- Products and stock locations
- Movements and balances
- Stripe subscription

Isolation is enforced at the database layer through **Supabase Row-Level Security** policies keyed on `tenant_id`. No tenant ever sees another tenant's rows, regardless of API path.

## Roadmap

### Phase 0 — Foundation
- [ ] Repository governance and CI tooling (this PR)
- [ ] Next.js scaffold
- [ ] Supabase project + base schema
- [ ] Authentication
- [ ] Tenant onboarding
- [ ] Stripe subscription with free trial

### Phase 1 — MVP
- [ ] Products
- [ ] Locations
- [ ] Stock movements (in / out)
- [ ] Per-location balance
- [ ] Operational dashboard
- [ ] Minimum-stock alerts

### Phase 2 — Operations
- [ ] Inter-location transfers
- [ ] Barcode reader
- [ ] Reports
- [ ] CSV import

### Phase 3 — Expansion
- [ ] Suppliers
- [ ] Purchase orders
- [ ] Public API
- [ ] Mobile app

## Security

- Multi-tenant isolation via Supabase RLS policies
- Role-based access control inside each tenant
- Encrypted Supabase Auth sessions
- No customer data leaves the row owner's tenant scope at the database layer
- Stripe customer data handled only through Stripe SDK; PCI handled by Stripe

If you discover a security issue, please follow [SECURITY.md](./SECURITY.md). Do not open a public issue.

## Development

### Prerequisites

- Node.js 22+
- npm 10+ (or pnpm, decided at scaffold time)

### Setup

```bash
git clone https://github.com/Prates-Cordeiro/stockflow-saas.git
cd stockflow-saas
npm install
```

Husky commit hooks install automatically via `prepare` script and enforce [Conventional Commits](https://www.conventionalcommits.org/) on every commit.

### Commit conventions

Conventional Commits with these types: `feat`, `fix`, `perf`, `refactor`, `docs`, `test`, `build`, `ci`, `chore`, `security`, `revert`. Scopes match the workspace area you touch (`web`, `db`, `auth`, `billing`, `ci`, etc.). See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full conventions.

## Releases

Automated via [release-please](https://github.com/googleapis/release-please). Merging a `feat:` or `fix:` commit on `main` opens a release PR; merging that PR cuts a new GitHub Release and tag.

## Project structure

```
stockflow-saas/
├── .github/           CI workflows, templates, Dependabot
├── .husky/            Local git hooks
├── apps/              (future) Next.js app(s)
├── packages/          (future) shared packages
├── supabase/          (future) migrations, policies, seed
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE            MIT
└── README.md          you are here
```

## License

MIT — see [LICENSE](./LICENSE).

## Authors

Built by [@Tcordeir0](https://github.com/Tcordeir0) (Talys Cordeiro) and [@RafhaellPrates](https://github.com/RafhaellPrates) (Rafhael Prates) under the **Prates & Cordeiro** organisation.
