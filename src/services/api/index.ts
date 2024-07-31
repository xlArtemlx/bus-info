import axios from 'axios';

export const getBaseUrl = (): string => {
    return ''; //
};

const restApi = axios.create();

restApi.interceptors.request.use(
    async (config) => {
        const baseUrl = await getBaseUrl();
        config.baseURL = baseUrl;
        return config;
    },
    (error) => Promise.reject(error),
);

export default restApi;
