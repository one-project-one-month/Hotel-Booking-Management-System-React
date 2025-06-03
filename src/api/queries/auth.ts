import { type AxiosResponse } from 'axios';
import Axios from '@/config/api';
import type { AuthResponse} from '@/types/auth-response';

interface LoginPayload {
    email: string;
    password: string;
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
    const response: AxiosResponse<AuthResponse> = await Axios.post("/auth/signin", payload);
    return response.data;
}