import type { AxiosInstance } from 'axios';
import axios from 'axios';

export class BaseProvider {
  protected _httpProvider: AxiosInstance;

  constructor(httpProvider: AxiosInstance) {
    this._httpProvider = httpProvider;
  }

  public async doRequest(obj: { method: string; params: any; id?: number }) {
    try {
      if (!obj.id) obj.id = 1;

      const { data } = await this._httpProvider.post('/', obj);

      const { result, error } = data;
      if (error) throw new Error(error.message);

      return result;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response) {
          throw new Error(e.response.data as any);
        } else if (e.request) {
          throw new Error('node is unavailable');
        } else throw new Error(e.message);
      } else {
        throw e;
      }
    }
  }
}
