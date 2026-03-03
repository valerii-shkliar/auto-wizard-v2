import { SUPABASE_ANNON_KEY } from '@/constants/url';

type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

class ServicesApi {
  static request<TResponse, TBody = unknown>(
    URL: string,
    id: string = '',
    method: TMethod = 'GET',
    body?: TBody,
  ): Promise<TResponse> {
    return fetch(URL + id, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
        apikey: SUPABASE_ANNON_KEY,
        Authorization: `Bearer ${SUPABASE_ANNON_KEY}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Request is failed!');
    });
  }

  static getList<TResponse>(URL: string) {
    return this.request<TResponse>(URL).catch(() => {
      throw new Error('List was not received from server!');
    });
  }

  static getOne<TResponse>(URL: string, id: string) {
    return this.request<TResponse>(URL, id).catch(() => {
      throw new Error('One element was not received from server!');
    });
  }

  static create<TResponse, TBody>(URL: string, body: TBody) {
    return this.request<TResponse>(URL, '', 'POST', body).catch(() => {
      throw new Error('Creating was not done on the server!');
    });
  }

  static update<TResponse, TBody>(URL: string, id: string, body: TBody) {
    return this.request<TResponse>(URL, id, 'PUT', body).catch(() => {
      throw new Error('Updating was not done on the server!');
    });
  }

  static delete<TResponse>(URL: string, id: string) {
    return this.request<TResponse>(URL, id, 'DELETE').catch(() => {
      throw new Error('Deleting was not done on the server!');
    });
  }
}
export default ServicesApi;
