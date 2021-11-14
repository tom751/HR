/**
 * @fileoverview gRPC-Web generated client stub for hr
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import hr_pb from './hr_pb';


export class HrClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoLogin = new grpcWeb.MethodDescriptor(
    '/hr.Hr/Login',
    grpcWeb.MethodType.UNARY,
    hr_pb.LoginDetails,
    hr_pb.User,
    (request: hr_pb.LoginDetails) => {
      return request.serializeBinary();
    },
    hr_pb.User.deserializeBinary
  );

  login(
    request: hr_pb.LoginDetails,
    metadata: grpcWeb.Metadata | null): Promise<hr_pb.User>;

  login(
    request: hr_pb.LoginDetails,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: hr_pb.User) => void): grpcWeb.ClientReadableStream<hr_pb.User>;

  login(
    request: hr_pb.LoginDetails,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: hr_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/hr.Hr/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/hr.Hr/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

}

