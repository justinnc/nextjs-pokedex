import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const createApiRequest = async () => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
    // const statusCode = err.response.status;
    // const messages = err.response.data.data[0].messages;
    // throw new Error(JSON.stringify({ statusCode, messages }));
  }
};
export const baseImageUrl =
  'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';

export default axios;
