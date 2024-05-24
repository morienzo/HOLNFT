import type { ContractArgument, ContractArgumentFormat, JsonIterateMap } from '../models';
import type { AxiosInstance } from 'axios';
import { BaseProvider } from './provider';
export declare class ContractProvider extends BaseProvider {
    static create(url: string, apiKey: string): ContractProvider;
    constructor(httpProvider: AxiosInstance);
    readData(address: string, key: string, format: ContractArgumentFormat): Promise<string>;
    readonlyCall(address: string, method: string, format: ContractArgumentFormat, args: ContractArgument[]): Promise<string>;
    readMap(address: string, mapName: string, key: string, format: ContractArgumentFormat): Promise<string>;
    iterateMap(address: string, mapName: string, keyFormat: ContractArgumentFormat, valueFormat: ContractArgumentFormat, limit?: number, continuationToken?: string): Promise<JsonIterateMap>;
}
//# sourceMappingURL=contractProvider.d.ts.map