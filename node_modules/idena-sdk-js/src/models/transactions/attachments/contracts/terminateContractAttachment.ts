import { ProtoTerminateContractAttachment } from '../../../proto/models';
import type { ContractArgument, ContractArgumentFormat } from './types';
import { argumentsFromBytes, argumentsToBytes } from './utils';

export class TerminateContractAttachment {
  private _args: Uint8Array[];

  constructor(init?: Partial<{ args: Uint8Array[] }>) {
    this._args = init?.args || [];
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
  }

  public fromBytes(bytes: Uint8Array) {
    const protoAttachment = ProtoTerminateContractAttachment.decode(bytes);

    this._args = protoAttachment.args;

    return this;
  }

  public toBytes() {
    const attachment = ProtoTerminateContractAttachment.fromPartial({
      args: this._args.map((x) => x || new Uint8Array()),
    });
    return ProtoTerminateContractAttachment.encode(attachment).finish();
  }
}
