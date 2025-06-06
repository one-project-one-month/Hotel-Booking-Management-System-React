import axios from 'axios';
import { API_URL } from './constants';

const Axios = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": 'application/json',
    },
    timeout: 10000,
});


Axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: unknown) => {
        let message: string;
        if (error && typeof error === 'object' && 'message' in error) {
            message = String((error as { message?: unknown }).message);
        } else {
            message = String(error);
        }
        return Promise.reject(new Error(message));
    }
);

const RoomAssistantAxios = axios.create({
    baseURL: import.meta.env.VITE_CHAT_ASSISTANT_API_URL as string,
    headers: {
        "Content-Type": 'application/json',
    }
});

export default Axios;
export { RoomAssistantAxios };