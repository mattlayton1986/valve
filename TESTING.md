# Testing Strategy

## Philosophy
Tests focus on behavior and contracts, not implementation details.

## Test layers
- Unit tests: pure logic (flag evaluation, helpers)
- Component tests: forms, validation, error states
- Integration tests: API handlers and DB interactions
- E2E tests: critical user flows using Playwright

## Tooling
- Vitest
- React Testing Library
- MSW
- Playwright
