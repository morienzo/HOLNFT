import type { AxiosInstance } from 'axios';
import { BcnProvider } from './bcnProvider';
import { ContractProvider } from './contractProvider';
import { DnaProvider } from './dnaProvider';
import { BaseProvider } from './provider';
import { createAxiosInstance } from './utils';

export class IdenaProvider extends BaseProvider {
  private _bcnProvider: BcnProvider;
  private _contractProvider: ContractProvider;
  private _dnaProvider: DnaProvider;

  public get Blockchain(): BcnProvider {
    return this._bcnProvider;
  }

  public get Contract(): ContractProvider {
    return this._contractProvider;
  }

  public get Dna(): DnaProvider {
    return this._dnaProvider;
  }

  static create(url: string, apiKey: string): IdenaProvider {
    return new IdenaProvider(createAxiosInstance(url, apiKey));
  }

  constructor(httpProvider: AxiosInstance) {
    super(httpProvider);
    this._bcnProvider = new BcnProvider(httpProvider);
    this._contractProvider = new ContractProvider(httpProvider);
    this._dnaProvider = new DnaProvider(httpProvider);
  }
}
