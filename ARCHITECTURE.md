# Architecture

## High-level overview
The system consists of two applications sharing a database and common packages:

- Console app (admin): manages flags, environments, and release notes
- Consumer app: reads flags and changes behavior accordingly

## Data flow
1. Admin creates or updates flags in the console
2. Changes are persisted in PostgreSQL
3. Consumer app fetches evaluated flags via a public API
4. UI behavior changes based on flag values

## Key design decisions
- Monorepo for shared types and logic
- Server-side auth enforcement
- Simple boolean flags first; extensible later
