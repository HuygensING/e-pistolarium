# Pergamon client

## Development

- Copy the Docker volume data from the test server to the local Docker volumes dir
- Symlink `production.yml` and `janus` from the `deploy` repo to `./docker`
- `npm run compose-dev -- pull`
- `npm run dev -- --build`