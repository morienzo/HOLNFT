import BN from 'bn.js';
import type { JsonTransaction } from '../json';
export declare enum TransactionType {
    SendTx = 0,
    ActivationTx = 1,
    InviteTx = 2,
    KillTx = 3,
    SubmitFlipTx = 4,
    SubmitAnswersHashTx = 5,
    SubmitShortAnswersTx = 6,
    SubmitLongAnswersTx = 7,
    EvidenceTx = 8,
    OnlineStatusTx = 9,
    KillInviteeTx = 10,
    ChangeGodAddressTx = 11,
    BurnTx = 12,
    ChangeProfileTx = 13,
    DeleteFlipTx = 14,
    DeployContractTx = 15,
    CallContractTx = 16,
    TerminateContractTx = 17,
    DelegateTx = 18,
    UndelegateTx = 19,
    KillDelegatorTx = 20,
    StoreToIpfsTx = 21
}
export declare class Transaction {
    private _nonce;
    private _epoch;
    private _type;
    private _to;
    private _amount;
    private _maxFee;
    private _tips;
    private _payload;
    private _signature;
    constructor(init?: Partial<{
        nonce: number;
        epoch: number;
        type: TransactionType;
        to: Uint8Array | string;
        amount: Uint8Array | string | number | BN;
        maxFee: Uint8Array | string | number | BN;
        tips: Uint8Array | string | number | BN;
        payload: Uint8Array | number[];
    }>);
    set nonce(nonce: number);
    get nonce(): number;
    set epoch(epoch: number);
    get epoch(): number;
    set type(type: TransactionType);
    get type(): number;
    set to(to: string | Uint8Array | null);
    get to(): string | null;
    set amount(amount: number | string | BN | Uint8Array | null);
    get amount(): BN | null;
    set maxFee(maxFee: number | string | BN | Uint8Array | null);
    get maxFee(): BN | null;
    set tips(tips: number | string | BN | Uint8Array | null);
    get tips(): BN | null;
    set payload(payload: Uint8Array | null);
    get payload(): Uint8Array | null;
    get signature(): Uint8Array | null;
    get hash(): string;
    get sender(): string | null;
    get gas(): number;
    static fromHex(hex: string): Transaction;
    static fromBytes(bytes: Uint8Array): Transaction;
    fromHex(hex: string): Transaction;
    fromBytes(bytes: Uint8Array): Transaction;
    fromJson(jsonTx: JsonTransaction): Transaction;
    toBytes(): Uint8Array;
    sign(key: string | Uint8Array | number[]): Transaction;
    toHex(withPrefix?: boolean): string;
    private _createProtoTxData;
}
//# sourceMappingURL=transaction.d.ts.map