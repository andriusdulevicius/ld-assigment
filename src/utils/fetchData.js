import axios from 'axios';

const fetchData = async (url, options) => {
  try {
    const res = await axios({
      method: options?.method || 'get',
      url,
      ...options,
    });
    return res.data;
  } catch (err) {
    console.error('Error:', err);
  }
};

export default fetchData;
