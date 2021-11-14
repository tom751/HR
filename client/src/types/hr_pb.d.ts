import * as jspb from 'google-protobuf'



export class LoginDetails extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginDetails;

  getPassword(): string;
  setPassword(value: string): LoginDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginDetails.AsObject;
  static toObject(includeInstance: boolean, msg: LoginDetails): LoginDetails.AsObject;
  static serializeBinaryToWriter(message: LoginDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginDetails;
  static deserializeBinaryFromReader(message: LoginDetails, reader: jspb.BinaryReader): LoginDetails;
}

export namespace LoginDetails {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getFirstname(): string;
  setFirstname(value: string): User;

  getLastname(): string;
  setLastname(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getJobtitle(): string;
  setJobtitle(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    jobtitle: string,
  }
}

