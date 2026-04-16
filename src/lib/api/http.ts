import axios from 'axios';
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANNON_KEY;
const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export const api = axios.create({
  baseURL: URL + '/rest/v1',
  headers: {
    'Content-Type': 'application/json',
    apikey: KEY!,
    Authorization: `Bearer ${KEY}`,
  },
});
