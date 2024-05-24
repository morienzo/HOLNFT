import type { AxiosInstance } from 'axios';
export declare class BaseProvider {
    protected _httpProvider: AxiosInstance;
    constructor(httpProvider: AxiosInstance);
    doRequest(obj: {
        method: string;
        params: any;
        id?: number;
    }): Promise<any>;
}
//# sourceMappingURL=provider.d.ts.map