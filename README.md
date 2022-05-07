# About

HR app to experiment with some new tech.

## Isn't this over-complicated?

Yes

# Run

```sh
docker-compose up
cd client
yarn # first run only
yarn dev
```

# Generate Go and TypeScript files from proto

```sh
./build-protos.sh
```

# Architecture

## Vue 3 (Vite) client

Runs on http://localhost:3000

## Envoy proxy

Runs on port 4000, forwards to Go gRPC server listening on port 5000. All requests from the browser must go to port 4000.

## Go gRPC server

Runs on port 5000.
