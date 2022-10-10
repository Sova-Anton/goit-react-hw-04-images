import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '29223502-b1dc9d1d2c960e384c4942ba7';
const LIMIT = '12';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: KEY,
    per_page: LIMIT,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  return data;
};
