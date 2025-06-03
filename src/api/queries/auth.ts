import axios, { type AxiosResponse } from 'axios';
import { API_URL } from '@/config/constants';
import type { AuthResponse} from '@/types/auth-response';

interface LoginPayload {
    email: string;
    password: string;
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
    const response: AxiosResponse<AuthResponse> = await axios.post(`${API_URL}/auth/signin`, payload);
    return response.data;
}