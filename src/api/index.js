import axios from 'axios';

const api = axios.create({
    baseURL: 'https://damp-thicket-29139.herokuapp.com/api',
})

export const getLocation = () => api.get(`/location`);

const apis = {
    getLocation,
}

export default apis;