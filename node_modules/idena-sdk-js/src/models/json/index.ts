export class JsonBlock {
  constructor(
    public coinbase: string,
    public hash: string,
    public parentHash: string,
    public height: number,
    public root: string,
    public identityRoot: string,
    public ipfsCid: string,
    public transactions: string[],
    public flags: string[],
    public isEmpty: boolean,
    public offlineAddress: string,
  ) {}
}

export class JsonTransaction {
  constructor(
    public hash: string,
    public type: string,
    public from: string,
    public to: string,
    public amount: string,
    public tips: string,
    public maxFee: string,
    public nonce: number,
    public epoch: number,
    public payload: string,
    public blockHash: string,
    public usedFee: string,
    public timestamp: number,
  ) {}
}

export class JsonReceipt {
  constructor(
    public contract: string,
    public method: string,
    public success: boolean,
    public gasUsed: number,
    public txHash: string,
    public error: string,
    public gasCost: string,
    public txFee: number,
  ) {}
}

export class JsonBalance {
  constructor(
    public stake: string,
    public balance: string,
    public nonce: number,
    public mempoolNonce: number,
  ) {}
}

class JsonFlipWords {
  constructor(
    public words: number[],
    public used: boolean,
    public id: number,
  ) {}
}

class JsonTxAddr {
  constructor(public TxHash: string, public Address: string) {}
}

class JsonInviter {
  constructor(
    public txHash: string,
    public address: string,
    public epochHeight: number,
  ) {}
}

export class JsonIdentity {
  constructor(
    public address: string,
    public profileHash: string,
    public stake: string,
    public invites: number,
    public age: number,
    public state: string,
    public pubkey: string,
    public requiredFlips: number,
    public availableFlips: number,
    public flipKeyWordPairs: JsonFlipWords[],
    public madeFlips: number,
    public totalQualifiedFlips: number,
    public totalShortFlipPoints: number,
    public flips: string[],
    public online: boolean,
    public generation: number,
    public code: string,
    public invitees: JsonTxAddr[],
    public penalty: string,
    public lastValidationFlags: string[],
    public delegatee: string,
    public delegationEpoch: number,
    public delegationNonce: number,
    public isPool: boolean,
    public inviter: JsonInviter,
    public shardId: number,
  ) {}
}

export class JsonEpoch {
  constructor(
    public startBlock: number,
    public epoch: number,
    public nextValidation: string,
    public currentPeriod: string,
  ) {}
}

export class JsonIterateMapItem {
  constructor(public key: string, public value: string) {}
}
export class JsonIterateMap {
  constructor(
    public items: JsonIterateMapItem[],
    public continuationToken: string,
  ) {}
}
