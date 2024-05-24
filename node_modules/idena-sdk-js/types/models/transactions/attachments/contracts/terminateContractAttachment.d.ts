import type { ContractArgument, ContractArgumentFormat } from './types';
export declare class TerminateContractAttachment {
    private _args;
    constructor(init?: Partial<{
        args: Uint8Array[];
    }>);
    set args(args: Uint8Array[]);
    get args(): Uint8Array[];
    getArgs(formats: ContractArgumentFormat[]): ContractArgument[];
    setArgs(args: ContractArgument[]): void;
    fromBytes(bytes: Uint8Array): this;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=terminateContractAttachment.d.ts.map