import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API_URL;

export async function fetchRooms() {
    const response = await axios.get(`${API_URL}/room`);
    return response.data.data;
}