import axios from 'axios';
const { VITE_API_URL, VITE_API_KEY } = import.meta.env

const giphyApi = axios.create({
    baseURL: VITE_API_URL
});

// TODO: set interceptor
calendarApi.interceptors.request.use(config => { 
    config.params = {
        api_key:VITE_API_KEY
    }
    return config;
})
export default giphyApi;