import BN from 'bn.js';
export declare const DNA_BASE = "1000000000000000000";
export declare function stripHexPrefix(str: string): string;
export declare function hexToUint8Array(hexString: string): Uint8Array;
export declare function toHexString(byteArray: Uint8Array | number[], withPrefix?: boolean): string;
export declare function floatStringToDna(value: string): BN;
export declare function dnaToFloatString(value: BN | string): string;
export declare function calculateGasCost(feePerGas: BN | string, gas: number): string;
//# sourceMappingURL=utils.d.ts.map