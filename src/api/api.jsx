import axios from "axios";

const BASE_URL = 'https://pixabay.com/api';
const KEY = '29223502-b1dc9d1d2c960e384c4942ba7';
const LIMIT = '12';

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        per_page: LIMIT,
        key: KEY,
        image_type: 'photo',
        orientation: 'horizontal',
    }
});


export const getImages = async(_page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            _page,
        }
    });
    return data;
}
