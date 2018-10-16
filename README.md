# Pergamon client

## Before each
- Symlink `production.yml` from the `deploy` repo to `./docker`

## Development
- Copy the Docker volume data from the test server to the local Docker volumes dir
- `npm run start:dev`

## Bump
- `npm run bump -- patch` or
- `npm run bump -- minor` or
- `npm run bump -- major`

## Deploy to test
- `npm run deploy-test`

## Deploy to production
- `npm run deploy-prod`