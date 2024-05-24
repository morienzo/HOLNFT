import type {
  ContractArgument,
  ContractArgumentFormat,
  JsonIterateMap,
} from '../models';
import type { AxiosInstance } from 'axios';
import { createAxiosInstance } from './utils';
import { BaseProvider } from './provider';

export class ContractProvider extends BaseProvider {
  static create(url: string, apiKey: string) {
    return new ContractProvider(createAxiosInstance(url, apiKey));
  }

  constructor(httpProvider: AxiosInstance) {
    super(httpProvider);
  }

  public async readData(
    address: string,
    key: string,
    format: ContractArgumentFormat,
  ): Promise<string> {
    const result = await this.doRequest({
      method: 'contract_readData',
      params: [address, key, format],
    });

    return result;
  }

  public async readonlyCall(
    address: string,
    method: string,
    format: ContractArgumentFormat,
    args: ContractArgument[],
  ): Promise<string> {
    const result = await this.doRequest({
      method: 'contract_readonlyCall',
      params: [{ contract: address, method, format, args }],
    });

    return result;
  }

  public async readMap(
    address: string,
    mapName: string,
    key: string,
    format: ContractArgumentFormat,
  ): Promise<string> {
    const result = await this.doRequest({
      method: 'contract_readMap',
      params: [address, mapName, key, format],
    });

    return result;
  }

  public async iterateMap(
    address: string,
    mapName: string,
    keyFormat: ContractArgumentFormat,
    valueFormat: ContractArgumentFormat,
    limit = 10,
    continuationToken = '0x',
  ): Promise<JsonIterateMap> {
    const result = await this.doRequest({
      method: 'contract_iterateMap',
      params: [
        address,
        mapName,
        continuationToken,
        keyFormat,
        valueFormat,
        limit,
      ],
    });

    return result;
  }
}
