import { Transaction, TransactionType } from '../models';
import type { AxiosInstance } from 'axios';
import { BaseProvider } from './provider';
import type { JsonBlock, JsonTransaction, JsonReceipt } from '../models/json';
export declare class BcnProvider extends BaseProvider {
    static create(url: string, apiKey: string): BcnProvider;
    constructor(httpProvider: AxiosInstance);
    buildTx(data: Partial<{
        from: string;
        to: string;
        epoch: number;
        nonce: number;
        type: TransactionType;
        amount: string;
        maxFee: string;
        tips: string;
        payload: number[] | Uint8Array;
    }>): Promise<Transaction>;
    sendTx(tx: Transaction): Promise<string>;
    estimateTx(tx: Transaction): Promise<{
        receipt: JsonReceipt;
        txHash: string;
        txFee: string;
    }>;
    blockAt(num: number): Promise<JsonBlock>;
    block(hash: string): Promise<JsonBlock>;
    lastBlock(): Promise<JsonBlock>;
    transaction(hash: string): Promise<JsonTransaction>;
    receipt(hash: string): Promise<JsonReceipt>;
    feePerGas(): Promise<string>;
}
//# sourceMappingURL=bcnProvider.d.ts.map