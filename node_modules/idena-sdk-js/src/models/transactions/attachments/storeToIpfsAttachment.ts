import { ProtoStoreToIpfsAttachment } from '../../proto/models';
import type { EmbeddedContractType } from './contracts/types';

export class StoreToIpfsAttachment {
  private _size: number;
  private _cid: Uint8Array;

  constructor(init?: Partial<{ size: EmbeddedContractType; cid: Uint8Array }>) {
    this._size = init?.size || 0;
    this._cid = init?.cid || new Uint8Array();
  }

  public set size(size: number) {
    this._size = size;
  }

  public get size(): number {
    return this._size;
  }

  public set cid(cid: Uint8Array) {
    this._cid = cid;
  }

  public get cid(): Uint8Array {
    return this._cid;
  }

  public fromBytes(bytes: Uint8Array) {
    const protoAttachment = ProtoStoreToIpfsAttachment.decode(bytes);

    this._cid = protoAttachment.cid;
    this._size = protoAttachment.size;

    return this;
  }

  public toBytes() {
    const attachment = ProtoStoreToIpfsAttachment.fromPartial({
      cid: this._cid,
      size: this._size,
    });
    return ProtoStoreToIpfsAttachment.encode(attachment).finish();
  }
}
