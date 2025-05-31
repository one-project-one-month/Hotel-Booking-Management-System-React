export interface ApiResponse<T> {
    data: T;
}

interface BookingResponseData {
    id: string;
    userId: string;
    roomId: string;
    checkIn: string; 
    checkOut: string; 
    depositAmount: number;
    totalAmount: number;
    status: string;
    guestCount: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    user: string | null;
    room: string | null;
}

export interface BookingResponse {
    message: string;
    data: BookingResponseData;
}