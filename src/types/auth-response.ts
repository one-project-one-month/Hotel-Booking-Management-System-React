export interface AuthResponse {
    message: string;
    data: {
        token: string;
    }
}

export interface ErrorResponse {
    message: string;
    error: string;
}