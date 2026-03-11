import axios from 'axios';
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANNON_KEY;
const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

const servicesApi = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    apikey: KEY,
    Authorization: `Bearer ${KEY}`,
  },
});

export async function getList<TResponse>(url: string) {
  try {
    const res = await servicesApi(url);
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error('List was not received from server!');
    }
  }
}

export async function getOne<TResponse>(url: string, id: string) {
  try {
    const res = await servicesApi(url + '/' + id);
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Element with id: [${id}] was not received from server!`);
    }
  }
}

export async function create<TResponse, TBody>(url: string, body: TBody) {
  try {
    const res = await servicesApi.post(url, body);
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error('Creating was not done on the server!');
    }
  }
}
export async function update<TResponse, TBody>(url: string, body: TBody) {
  try {
    const res = await servicesApi.put(url, body);
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error('Updating was not done on the server!');
    }
  }
}
export async function remove<TResponse, TBody>(url: string, body: TBody) {
  try {
    const res = await servicesApi.delete(url, { data: body });
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error('Deleting was not done on the server!');
    }
  }
}
