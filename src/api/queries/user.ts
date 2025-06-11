import Axios from '@/config/api';
import type { ApiResponse } from '@/types/api-response';
import type { User } from '@/types/user';

export async function fetchUserById(userId: string): Promise<User> {
    const response = await Axios.get<ApiResponse<User>>(`/users/${userId}`);
    return response.data.data;
}