## Summary

<!-- One or two sentences: what does this PR change, and why? -->

## Type of change

- [ ] feat — new user-facing feature
- [ ] fix — bug fix
- [ ] perf — performance improvement
- [ ] refactor — code change with no behavioural impact
- [ ] docs — documentation only
- [ ] test — tests only
- [ ] build / ci — build system or CI changes
- [ ] chore — internal maintenance
- [ ] security — security fix or hardening

## Tenant safety checklist

If this PR touches the database or tenant data, confirm:

- [ ] New tables have an RLS policy keyed on `tenant_id`
- [ ] No query crosses tenant boundaries without going through a `SECURITY DEFINER` admin function
- [ ] Migrations are reversible (or the irreversibility is documented and intentional)
- [ ] No PII or secrets logged in plaintext

## Test plan

<!--
How did you verify this works?
Bulleted checklist of manual or automated tests.
Example:
- [ ] npm run typecheck passes
- [ ] npm run lint passes
- [ ] Manually tested onboarding flow in development
-->

## Screenshots / recordings

<!-- For UI changes, include before/after if relevant. -->

## Linked issues

<!-- Closes #N, Refs #M -->
