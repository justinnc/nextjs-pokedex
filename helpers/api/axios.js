import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const createApiRequest = async (url, method, data) => {
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
  }
};
export const baseImageUrl =
  'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';

export default axios;
