export declare function privateKeyToPublicKey(key: Uint8Array | number[] | string, withPrefix?: boolean): string;
export declare function publicKeyToAddress(publicKey: Uint8Array | number[] | string, withPrefix?: boolean): string;
export declare function privateKeyToAddress(key: Uint8Array | number[] | string, withPrefix?: boolean): string;
export declare function sender(data: Uint8Array | number[], signature: Uint8Array | number[], withPrefix?: boolean): string;
export declare function sign(data: Uint8Array | number[], key: Uint8Array | number[] | string): Uint8Array;
//# sourceMappingURL=crypto.d.ts.map