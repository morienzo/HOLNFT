/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'models';

export interface ProtoTransaction {
  data: ProtoTransaction_Data | undefined;
  signature: Uint8Array;
  useRlp: boolean;
}

export interface ProtoTransaction_Data {
  nonce: number;
  epoch: number;
  type: number;
  to: Uint8Array;
  amount: Uint8Array;
  maxFee: Uint8Array;
  tips: Uint8Array;
  payload: Uint8Array;
}

export interface ProtoDeployContractAttachment {
  CodeHash: Uint8Array;
  args: Uint8Array[];
}

export interface ProtoCallContractAttachment {
  method: string;
  args: Uint8Array[];
}

export interface ProtoTerminateContractAttachment {
  args: Uint8Array[];
}

export interface ProtoStoreToIpfsAttachment {
  cid: Uint8Array;
  size: number;
}

function createBaseProtoTransaction(): ProtoTransaction {
  return { data: undefined, signature: new Uint8Array(), useRlp: false };
}

export const ProtoTransaction = {
  encode(
    message: ProtoTransaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data !== undefined) {
      ProtoTransaction_Data.encode(
        message.data,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.useRlp === true) {
      writer.uint32(24).bool(message.useRlp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ProtoTransaction_Data.decode(reader, reader.uint32());
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.useRlp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoTransaction>, I>>(
    object: I,
  ): ProtoTransaction {
    const message = createBaseProtoTransaction();
    message.data =
      object.data !== undefined && object.data !== null
        ? ProtoTransaction_Data.fromPartial(object.data)
        : undefined;
    message.signature = object.signature ?? new Uint8Array();
    message.useRlp = object.useRlp ?? false;
    return message;
  },
};

function createBaseProtoTransaction_Data(): ProtoTransaction_Data {
  return {
    nonce: 0,
    epoch: 0,
    type: 0,
    to: new Uint8Array(),
    amount: new Uint8Array(),
    maxFee: new Uint8Array(),
    tips: new Uint8Array(),
    payload: new Uint8Array(),
  };
}

export const ProtoTransaction_Data = {
  encode(
    message: ProtoTransaction_Data,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }
    if (message.epoch !== 0) {
      writer.uint32(16).uint32(message.epoch);
    }
    if (message.type !== 0) {
      writer.uint32(24).uint32(message.type);
    }
    if (message.to.length !== 0) {
      writer.uint32(34).bytes(message.to);
    }
    if (message.amount.length !== 0) {
      writer.uint32(42).bytes(message.amount);
    }
    if (message.maxFee.length !== 0) {
      writer.uint32(50).bytes(message.maxFee);
    }
    if (message.tips.length !== 0) {
      writer.uint32(58).bytes(message.tips);
    }
    if (message.payload.length !== 0) {
      writer.uint32(66).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoTransaction_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoTransaction_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint32();
          break;
        case 2:
          message.epoch = reader.uint32();
          break;
        case 3:
          message.type = reader.uint32();
          break;
        case 4:
          message.to = reader.bytes();
          break;
        case 5:
          message.amount = reader.bytes();
          break;
        case 6:
          message.maxFee = reader.bytes();
          break;
        case 7:
          message.tips = reader.bytes();
          break;
        case 8:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoTransaction_Data>, I>>(
    object: I,
  ): ProtoTransaction_Data {
    const message = createBaseProtoTransaction_Data();
    message.nonce = object.nonce ?? 0;
    message.epoch = object.epoch ?? 0;
    message.type = object.type ?? 0;
    message.to = object.to ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    message.maxFee = object.maxFee ?? new Uint8Array();
    message.tips = object.tips ?? new Uint8Array();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

function createBaseProtoDeployContractAttachment(): ProtoDeployContractAttachment {
  return { CodeHash: new Uint8Array(), args: [] };
}

export const ProtoDeployContractAttachment = {
  encode(
    message: ProtoDeployContractAttachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.CodeHash.length !== 0) {
      writer.uint32(10).bytes(message.CodeHash);
    }
    for (const v of message.args) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoDeployContractAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoDeployContractAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CodeHash = reader.bytes();
          break;
        case 2:
          message.args.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoDeployContractAttachment>, I>>(
    object: I,
  ): ProtoDeployContractAttachment {
    const message = createBaseProtoDeployContractAttachment();
    message.CodeHash = object.CodeHash ?? new Uint8Array();
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoCallContractAttachment(): ProtoCallContractAttachment {
  return { method: '', args: [] };
}

export const ProtoCallContractAttachment = {
  encode(
    message: ProtoCallContractAttachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.method !== '') {
      writer.uint32(10).string(message.method);
    }
    for (const v of message.args) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoCallContractAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoCallContractAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.string();
          break;
        case 2:
          message.args.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoCallContractAttachment>, I>>(
    object: I,
  ): ProtoCallContractAttachment {
    const message = createBaseProtoCallContractAttachment();
    message.method = object.method ?? '';
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoTerminateContractAttachment(): ProtoTerminateContractAttachment {
  return { args: [] };
}

export const ProtoTerminateContractAttachment = {
  encode(
    message: ProtoTerminateContractAttachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoTerminateContractAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoTerminateContractAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<
    I extends Exact<DeepPartial<ProtoTerminateContractAttachment>, I>,
  >(object: I): ProtoTerminateContractAttachment {
    const message = createBaseProtoTerminateContractAttachment();
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoStoreToIpfsAttachment(): ProtoStoreToIpfsAttachment {
  return { cid: new Uint8Array(), size: 0 };
}

export const ProtoStoreToIpfsAttachment = {
  encode(
    message: ProtoStoreToIpfsAttachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cid.length !== 0) {
      writer.uint32(10).bytes(message.cid);
    }
    if (message.size !== 0) {
      writer.uint32(16).uint32(message.size);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoStoreToIpfsAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoStoreToIpfsAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.bytes();
          break;
        case 2:
          message.size = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoStoreToIpfsAttachment>, I>>(
    object: I,
  ): ProtoStoreToIpfsAttachment {
    const message = createBaseProtoStoreToIpfsAttachment();
    message.cid = object.cid ?? new Uint8Array();
    message.size = object.size ?? 0;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
