import axios from 'axios';

interface Options {
  method: 'GET' | 'POST' | 'PUT';
}

const fetchData = async (url: string, options?: Options, data?: any) => {
  try {
    const res = await axios({
      method: options?.method || 'GET',
      url,
      data,
      ...options,
    });
    return res.data;
  } catch (err: any) {
    return { error: err?.response?.data?.data?.message };
  }
};

export default fetchData;
