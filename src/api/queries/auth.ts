import { type AxiosResponse } from 'axios';
import Axios from '@/config/api';
import type { AuthResponse} from '@/types/auth-response';
import type { LoginPayload, SignupPayload } from '@/types/auth-payload';



export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
    const response: AxiosResponse<AuthResponse> = await Axios.post("/auth/signin", payload);
    return response.data;
}

export async function signupUser(payload: SignupPayload): Promise<AuthResponse> {
    const response: AxiosResponse<AuthResponse> = await Axios.post("/auth/signup", payload);
    return response.data;
}