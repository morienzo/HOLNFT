import { ContractArgument, ContractArgumentFormat } from './types';
export declare function argumentFromBytes(format: ContractArgumentFormat, index: number, bytes: Uint8Array): ContractArgument;
export declare function argumentsFromBytes(formats: ContractArgumentFormat[], bytes: Uint8Array[]): ContractArgument[];
export declare function argumentToBytes(data: ContractArgument): Uint8Array;
export declare function argumentsToBytes(args: ContractArgument[]): Uint8Array[];
//# sourceMappingURL=utils.d.ts.map