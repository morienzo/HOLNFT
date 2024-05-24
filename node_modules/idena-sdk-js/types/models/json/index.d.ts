export declare class JsonBlock {
    coinbase: string;
    hash: string;
    parentHash: string;
    height: number;
    root: string;
    identityRoot: string;
    ipfsCid: string;
    transactions: string[];
    flags: string[];
    isEmpty: boolean;
    offlineAddress: string;
    constructor(coinbase: string, hash: string, parentHash: string, height: number, root: string, identityRoot: string, ipfsCid: string, transactions: string[], flags: string[], isEmpty: boolean, offlineAddress: string);
}
export declare class JsonTransaction {
    hash: string;
    type: string;
    from: string;
    to: string;
    amount: string;
    tips: string;
    maxFee: string;
    nonce: number;
    epoch: number;
    payload: string;
    blockHash: string;
    usedFee: string;
    timestamp: number;
    constructor(hash: string, type: string, from: string, to: string, amount: string, tips: string, maxFee: string, nonce: number, epoch: number, payload: string, blockHash: string, usedFee: string, timestamp: number);
}
export declare class JsonReceipt {
    contract: string;
    method: string;
    success: boolean;
    gasUsed: number;
    txHash: string;
    error: string;
    gasCost: string;
    txFee: number;
    constructor(contract: string, method: string, success: boolean, gasUsed: number, txHash: string, error: string, gasCost: string, txFee: number);
}
export declare class JsonBalance {
    stake: string;
    balance: string;
    nonce: number;
    mempoolNonce: number;
    constructor(stake: string, balance: string, nonce: number, mempoolNonce: number);
}
declare class JsonFlipWords {
    words: number[];
    used: boolean;
    id: number;
    constructor(words: number[], used: boolean, id: number);
}
declare class JsonTxAddr {
    TxHash: string;
    Address: string;
    constructor(TxHash: string, Address: string);
}
declare class JsonInviter {
    txHash: string;
    address: string;
    epochHeight: number;
    constructor(txHash: string, address: string, epochHeight: number);
}
export declare class JsonIdentity {
    address: string;
    profileHash: string;
    stake: string;
    invites: number;
    age: number;
    state: string;
    pubkey: string;
    requiredFlips: number;
    availableFlips: number;
    flipKeyWordPairs: JsonFlipWords[];
    madeFlips: number;
    totalQualifiedFlips: number;
    totalShortFlipPoints: number;
    flips: string[];
    online: boolean;
    generation: number;
    code: string;
    invitees: JsonTxAddr[];
    penalty: string;
    lastValidationFlags: string[];
    delegatee: string;
    delegationEpoch: number;
    delegationNonce: number;
    isPool: boolean;
    inviter: JsonInviter;
    shardId: number;
    constructor(address: string, profileHash: string, stake: string, invites: number, age: number, state: string, pubkey: string, requiredFlips: number, availableFlips: number, flipKeyWordPairs: JsonFlipWords[], madeFlips: number, totalQualifiedFlips: number, totalShortFlipPoints: number, flips: string[], online: boolean, generation: number, code: string, invitees: JsonTxAddr[], penalty: string, lastValidationFlags: string[], delegatee: string, delegationEpoch: number, delegationNonce: number, isPool: boolean, inviter: JsonInviter, shardId: number);
}
export declare class JsonEpoch {
    startBlock: number;
    epoch: number;
    nextValidation: string;
    currentPeriod: string;
    constructor(startBlock: number, epoch: number, nextValidation: string, currentPeriod: string);
}
export declare class JsonIterateMapItem {
    key: string;
    value: string;
    constructor(key: string, value: string);
}
export declare class JsonIterateMap {
    items: JsonIterateMapItem[];
    continuationToken: string;
    constructor(items: JsonIterateMapItem[], continuationToken: string);
}
export {};
//# sourceMappingURL=index.d.ts.map