export interface LoginPayload {
    email: string;
    password: string;
}

export interface SignupPayload {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
}