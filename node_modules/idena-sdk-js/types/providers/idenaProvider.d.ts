import type { AxiosInstance } from 'axios';
import { BcnProvider } from './bcnProvider';
import { ContractProvider } from './contractProvider';
import { DnaProvider } from './dnaProvider';
import { BaseProvider } from './provider';
export declare class IdenaProvider extends BaseProvider {
    private _bcnProvider;
    private _contractProvider;
    private _dnaProvider;
    get Blockchain(): BcnProvider;
    get Contract(): ContractProvider;
    get Dna(): DnaProvider;
    static create(url: string, apiKey: string): IdenaProvider;
    constructor(httpProvider: AxiosInstance);
}
//# sourceMappingURL=idenaProvider.d.ts.map