#!/bin/bash

# Generate go files
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative pb/hr.proto

# Generate js/ts files
cd client
yarn generate


