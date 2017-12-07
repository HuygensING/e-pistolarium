# Pergamon client

## Development

- Copy the Docker volume data from the test server to the local Docker volumes dir
- Symlink `production.yml` and `janus` from the `deploy` repo to `./docker`
- `npm run dev`

## Deploy to test

- Symlink `production.yml` and `janus` from the `deploy` repo to `./docker`
- `./scripts/deploy-test.sh`

## Deploy to production

- Symlink `production.yml` and `janus` from the `deploy` repo to `./docker`
- `./scripts/deploy-prod.sh`