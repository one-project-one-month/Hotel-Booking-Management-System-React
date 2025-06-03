import Axios from '@/config/api';
import type { ApiResponse } from '@/types/api-response';
import type { Room } from '@/types/rooms';

export async function fetchRooms(): Promise<Room[]> {
    const response = await Axios.get<ApiResponse<Room[]>>("/room");
    return response.data.data;
}

export async function fetchRoomById(roomId: string): Promise<Room> {
    const response = await Axios.get<ApiResponse<Room>>(`/room/${roomId}`);
    return response.data.data;
}