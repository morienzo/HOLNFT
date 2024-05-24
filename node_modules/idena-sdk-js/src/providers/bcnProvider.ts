import { Transaction, TransactionType } from '../models';
import type { AxiosInstance } from 'axios';
import { createAxiosInstance } from './utils';
import { BaseProvider } from './provider';
import { toHexString } from '../utils';
import type { JsonBlock, JsonTransaction, JsonReceipt } from '../models/json';

export class BcnProvider extends BaseProvider {
  static create(url: string, apiKey: string) {
    return new BcnProvider(createAxiosInstance(url, apiKey));
  }

  constructor(httpProvider: AxiosInstance) {
    super(httpProvider);
  }

  public async buildTx(
    data: Partial<{
      from: string;
      to: string;
      epoch: number;
      nonce: number;
      type: TransactionType;
      amount: string;
      maxFee: string;
      tips: string;
      payload: number[] | Uint8Array;
    }>,
  ): Promise<Transaction> {
    const params: any = data;
    if (data.payload) params.payload = toHexString(data.payload);
    params.useProto = true;

    const result = await this.doRequest({
      method: 'bcn_getRawTx',
      params: [params],
    });
    return new Transaction().fromHex(result);
  }

  public async sendTx(tx: Transaction): Promise<string> {
    const result = await this.doRequest({
      method: 'bcn_sendRawTx',
      params: [tx.toHex(true)],
    });

    return result;
  }

  public async estimateTx(
    tx: Transaction,
  ): Promise<{ receipt: JsonReceipt; txHash: string; txFee: string }> {
    const result = await this.doRequest({
      method: 'bcn_estimateRawTx',
      params: [tx.toHex(true)],
    });

    return result;
  }

  public async blockAt(num: number): Promise<JsonBlock> {
    const result = await this.doRequest({
      method: 'bcn_blockAt',
      params: [num],
    });

    return result;
  }

  public async block(hash: string): Promise<JsonBlock> {
    const result = await this.doRequest({
      method: 'bcn_block',
      params: [hash],
    });

    return result;
  }

  public async lastBlock(): Promise<JsonBlock> {
    const result = await this.doRequest({
      method: 'bcn_lastBlock',
      params: [],
    });

    return result;
  }

  public async transaction(hash: string): Promise<JsonTransaction> {
    const result = await this.doRequest({
      method: 'bcn_transaction',
      params: [hash],
    });

    return result;
  }

  public async receipt(hash: string): Promise<JsonReceipt> {
    const result = await this.doRequest({
      method: 'bcn_txReceipt',
      params: [hash],
    });

    return result;
  }

  public async feePerGas(): Promise<string> {
    const result = await this.doRequest({
      method: 'bcn_feePerGas',
      params: [],
    });

    return result;
  }
}
