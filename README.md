# Feature Flags Platform (Monorepo)

This repository contains a production-style monorepo implementing a feature flag and release
notes platform, along with a consumer application that actively uses those flags.

## Goals
- Demonstrate modern CI/CD, testing, and deployment practices
- Showcase full-stack ownership (frontend, backend, data, auth)
- Provide a realistic, explainable system suitable for interviews

## Repository Structure
- apps/console — Admin UI for managing flags and release notes
- apps/consumer — Demo application consuming flags
- packages/db — Database schema, migrations, and client
- packages/shared — Shared types and flag evaluation logic

## Local Development
Instructions to be filled in after initial setup.

## Tech Stack
- Next.js 16 (App Router)
- PostgreSQL + Prisma
- Auth.js (GitHub OAuth)
- pnpm + Turborepo
