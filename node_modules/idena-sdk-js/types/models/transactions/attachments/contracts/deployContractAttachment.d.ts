import type { ContractArgumentFormat, ContractArgument, EmbeddedContractType } from './types';
export declare class DeployContractAttachment {
    private _codeHash;
    private _args;
    constructor(init?: Partial<{
        codeHash: EmbeddedContractType;
        args: Uint8Array[];
    }>);
    set codeHash(codeHash: number);
    get codeHash(): number;
    set args(args: Uint8Array[]);
    get args(): Uint8Array[];
    getArgs(formats: ContractArgumentFormat[]): ContractArgument[];
    setArgs(args: ContractArgument[]): void;
    fromBytes(bytes: Uint8Array): this;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=deployContractAttachment.d.ts.map