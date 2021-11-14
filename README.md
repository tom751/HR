# About

HR app to experiment with some new tech.

## Isn't this over-complicated?

Yes

# Run

## Envoy proxy

Runs on port 4000, forwards to Go gRPC server listening on port 5000. All requests from the browser must go to port 4000.

```sh
cd envoy
docker build -t envoy:v1 .
docker run --network=host envoy:v1
```

## Go gRPC server

Runs on port 5000.

```sh
cd server
go run main.go
```

## Vue 3 (Vite) client

Runs on http://localhost:3000

```sh
cd client
yarn
yarn dev
```

# Generate Go and js/ts files from proto

```sh
./build-protos.sh
```

This outputs js/ts files to `client/src/types` and Go files to `/pb`.
Since the js/ts generation don't support ES modules, some extra replacements are done in the generated files to get them to work with Vite. Furthermore, when importing types in the client from a `.d.ts` file you must **not** use destructuring. For example:

```ts
import { LoginDetails } from '@/types/hr_pb'; // Don't do this

import hr from '@/types/hr_pb'; // Do this
const details: hr.LoginDetails;
```

I am hoping there will be a better solution for that in the near future.
