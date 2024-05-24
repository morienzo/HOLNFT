import type { AxiosInstance } from 'axios';
import { createAxiosInstance } from './utils';
import { BaseProvider } from './provider';
import type { JsonBalance, JsonEpoch, JsonIdentity } from '../models';

export class DnaProvider extends BaseProvider {
  static create(url: string, apiKey: string) {
    return new DnaProvider(createAxiosInstance(url, apiKey));
  }

  constructor(httpProvider: AxiosInstance) {
    super(httpProvider);
  }

  public async balance(address: string): Promise<JsonBalance> {
    const result = await this.doRequest({
      method: 'dna_getBalance',
      params: [address],
    });

    return result;
  }

  public async identity(address?: string): Promise<JsonIdentity> {
    const result = await this.doRequest({
      method: 'dna_identity',
      params: address ? [address] : [],
    });

    return result;
  }

  public async epoch(): Promise<JsonEpoch> {
    const result = await this.doRequest({
      method: 'dna_epoch',
      params: [],
    });

    return result;
  }
}
