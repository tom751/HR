#!/bin/bash

# Generate go files
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative pb/hr.proto

# Generate js/ts files
cd client

protoc -I=../pb ../pb/*.proto \
	--js_out=import_style=commonjs,binary:./src/types \
	--grpc-web_out=import_style=typescript,mode=grpcweb:./src/types

# https://github.com/snowpackjs/snowpack/discussions/2539#discussioncomment-333636
sed -i "s/var jspb = require('google-protobuf')/import * as jspb from 'google-protobuf'/" src/types/hr_pb.js
sed -i "s/goog.object.extend(exports, proto.hr)/export default proto.hr/" src/types/hr_pb.js
sed -i "s/import [*] as hr_pb/import hr_pb/" src/types/HrServiceClientPb.ts
