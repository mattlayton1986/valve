# @valve/auth

Shared auth "contract" package for the Valve monorepo.

This package intentionally starts as:
- Types / config shape (env var contract)
- Documentation

Runtime auth implementation (OAuth routes, session handling, protected routes) will be added when the Console app is introduced in later issues.

## Authorization helpers

This package exposes small, framework-agnostic helpers such as `requireUser` and `requireAdmin`.

They are intended to be used at app boundaries (routes, server actions, APIs) once authentication is wired in.

Actual request/session integration will be added when the Console app exists.