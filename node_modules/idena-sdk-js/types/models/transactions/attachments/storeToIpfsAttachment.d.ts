import type { EmbeddedContractType } from './contracts/types';
export declare class StoreToIpfsAttachment {
    private _size;
    private _cid;
    constructor(init?: Partial<{
        size: EmbeddedContractType;
        cid: Uint8Array;
    }>);
    set size(size: number);
    get size(): number;
    set cid(cid: Uint8Array);
    get cid(): Uint8Array;
    fromBytes(bytes: Uint8Array): this;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=storeToIpfsAttachment.d.ts.map