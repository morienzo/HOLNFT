import { ProtoDeployContractAttachment } from '../../../proto/models';
import { argumentsFromBytes, argumentsToBytes } from './utils';
import type {
  ContractArgumentFormat,
  ContractArgument,
  EmbeddedContractType,
} from './types';

export class DeployContractAttachment {
  private _codeHash: EmbeddedContractType;
  private _args: Uint8Array[];

  constructor(
    init?: Partial<{ codeHash: EmbeddedContractType; args: Uint8Array[] }>,
  ) {
    this._codeHash = init?.codeHash || 0;
    this._args = init?.args || [];
  }

  public set codeHash(codeHash: number) {
    this._codeHash = codeHash;
  }

  public get codeHash(): number {
    return this._codeHash;
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
    const protoAttachment = ProtoDeployContractAttachment.decode(bytes);

    this._codeHash = protoAttachment.CodeHash[0] || 0;
    this._args = protoAttachment.args;

    return this;
  }

  public toBytes() {
    const attachment = ProtoDeployContractAttachment.fromPartial({
      CodeHash: new Uint8Array([this._codeHash]),
      args: this._args.map((x) => x || new Uint8Array()),
    });
    return ProtoDeployContractAttachment.encode(attachment).finish();
  }
}
