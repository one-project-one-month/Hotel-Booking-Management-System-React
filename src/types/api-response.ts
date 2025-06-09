export interface ApiResponse<T> {
    data: T;
}

export interface BookingData {
    id: string;
    userId: string;
    roomId: string;
    check_in: string; 
    check_out: string; 
    deposit_amount: number;
    total_amount: number;
    status: string;
    guest_count: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    user: string | null;
    room: string | null;
}

export interface BookingResponse {
    message: string;
    data: BookingData;
}
