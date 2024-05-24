import type { AxiosInstance } from 'axios';
import { BaseProvider } from './provider';
import type { JsonBalance, JsonEpoch, JsonIdentity } from '../models';
export declare class DnaProvider extends BaseProvider {
    static create(url: string, apiKey: string): DnaProvider;
    constructor(httpProvider: AxiosInstance);
    balance(address: string): Promise<JsonBalance>;
    identity(address?: string): Promise<JsonIdentity>;
    epoch(): Promise<JsonEpoch>;
}
//# sourceMappingURL=dnaProvider.d.ts.map