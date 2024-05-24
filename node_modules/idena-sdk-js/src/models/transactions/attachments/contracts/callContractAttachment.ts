import { ProtoCallContractAttachment } from '../../../proto/models';
import type { ContractArgument, ContractArgumentFormat } from './types';
import { argumentsFromBytes, argumentsToBytes } from './utils';

export class CallContractAttachment {
  private _method: string;
  private _args: Uint8Array[];

  constructor(init?: Partial<{ method: string; args: Uint8Array[] }>) {
    this._method = init?.method || '';
    this._args = init?.args || [];
  }

  public set method(method: string) {
    this._method = method;
  }

  public get method(): string {
    return this._method;
  }

  public set args(args: Uint8Array[]) {
    this._args = args;
  }

  public get args(): Uint8Array[] {
    return this._args;
  }

  public getArgs(formats: ContractArgumentFormat[]): ContractArgument[] {
    return argumentsFromBytes(formats, this._args);
  }

  public setArgs(args: ContractArgument[]) {
    this._args = argumentsToBytes(args);
    return this;
  }

  public fromBytes(bytes: Uint8Array) {
    const protoAttachment = ProtoCallContractAttachment.decode(bytes);

    this._method = protoAttachment.method;
    this._args = protoAttachment.args;

    return this;
  }

  public toBytes() {
    const attachment = ProtoCallContractAttachment.fromPartial({
      method: this._method,
      args: this._args.map((x) => x || new Uint8Array()),
    });
    return ProtoCallContractAttachment.encode(attachment).finish();
  }
}
