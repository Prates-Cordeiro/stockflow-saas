/**
 * commitlint configuration for StockFlow SaaS.
 *
 * Enforces Conventional Commits. See CONTRIBUTING.md §3 for the full list
 * of accepted types. Mirrors the configuration used in the PondiFarmApp
 * repository for consistency across the maintainers' projects.
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "refactor",
        "docs",
        "test",
        "build",
        "ci",
        "chore",
        "security",
        "revert"
      ]
    ],
    "type-case":          [2, "always", "lower-case"],
    "type-empty":         [2, "never"],
    "subject-case":       [0],
    "subject-empty":      [2, "never"],
    "subject-full-stop":  [2, "never", "."],
    "header-max-length":  [2, "always", 100]
  }
};
