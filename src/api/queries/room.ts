import { API_URL } from '@/config/constants';
import type { ApiResponse } from '@/types/api-response';
import type { Room } from '@/types/rooms';
import axios from 'axios';

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