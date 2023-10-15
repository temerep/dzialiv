import axios from 'axios';

const host = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
});

const authHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

authHost.interceptors.request.use(authInterceptor);

export {host, authHost};