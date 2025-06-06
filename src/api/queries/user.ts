import Axios from '@/config/api';
import type { ApiResponse } from '@/types/api-response';
import type { User } from '@/types/user';

export async function fetchUserById(roomId: string): Promise<User> {
    const token = localStorage.getItem("token") ?? '';
    const response = await Axios.get<ApiResponse<User>>(`/users/${roomId}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.data;
}