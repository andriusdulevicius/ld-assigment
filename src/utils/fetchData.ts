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
    if (err.response) {
      throw err.response.data;
    } else if (err.request) {
      throw err.request;
    } else {
      throw new Error(`Error: ${err.message}`);
    }
  }
};

export default fetchData;
