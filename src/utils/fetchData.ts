import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface Options {
  method: 'GET' | 'POST' | 'PUT';
}

const fetchData = async (url: string, options?: Options) => {
  try {
    const res = await axios({
      method: options?.method || 'GET',
      url,
      ...options,
    });
    return res.data;
  } catch (err) {
    console.error('Error:', err);
  }
};

export default fetchData;
