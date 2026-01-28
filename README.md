# Feature Flags Platform (Monorepo)

This repository contains a production-style monorepo implementing a feature flag and release notes platform, along with a consumer application that actively uses those flags.

## Requirements

- **Node.js**: >= 22 (LTS, `lts/jod`)
  - An `.nvmrc` is provided at the repo root.
- **Package manager**: pnpm (via Corepack or manual install)

> All tooling, installs, and scripts are intended to be run from the **repository root**.


## Goals
- Demonstrate modern CI/CD, testing, and deployment practices
- Showcase full-stack ownership (frontend, backend, data, auth)
- Provide a realistic, explainable system suitable for interviews

## Repository Structure
- `apps/valve` — Admin UI for managing flags and release notes
- `apps/consumer` — Demo application consuming flags
- `packages/auth` — Auth contracts, RBAC helpers, and shared auth logic
- `packages/db` — Database schema, migrations, and Prisma client
- `tooling/*` — Shared ESLint, TypeScript, and Prettier configuration

## Local Development
Instructions to be filled in after initial setup.

## Tech Stack
- Next.js 16 (App Router)
- PostgreSQL + Prisma
- Auth.js (GitHub OAuth)
- pnpm + Turborepo
