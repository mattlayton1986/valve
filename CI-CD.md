# CI / CD

## Continuous Integration
GitHub Actions runs on pull requests and executes:
- dependency install
- lint
- tests
- build

Merges are blocked unless all checks pass.

## Continuous Deployment
- Preview deployments are created for pull requests
- Production deployment occurs on merge to main

## Rollback strategy
Redeploy a previous successful build via the hosting provider.
