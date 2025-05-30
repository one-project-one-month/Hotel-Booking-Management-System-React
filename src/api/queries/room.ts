import type { ApiResponse } from '@/types/api-response';
import type { Room } from '@/types/rooms';
import axios from 'axios';

const API_URL: string = import.meta.env.VITE_BACKEND_API_URL as string;
if (!API_URL) {
    throw new Error('VITE_BACKEND_API_URL is not defined');
}


export async function fetchRooms(): Promise<Room[]> {
    const response = await axios.get<ApiResponse<Room[]>>(`${API_URL}/room`);
    return response.data.data;
}

export async function fetchRoomById(roomId: string): Promise<Room> {
    const response = await axios.get<ApiResponse<Room>>(`${API_URL}/room/${roomId}`);
    return response.data.data;
}