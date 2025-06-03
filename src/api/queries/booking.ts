import type { BookingResponse } from '@/types/api-response';
import { type AxiosResponse } from 'axios';
import Axios from '@/config/api';

export interface BookingPayload {
    userId: string;
    roomId: string;
    checkIn: Date;
    checkOut?: Date;
    guestCount: number;
    totalAmount: number
}

export async function createBooking(payload:BookingPayload): Promise<BookingResponse> {
    const response: AxiosResponse<BookingResponse> = await Axios.post("/bookings", payload);
    return response.data;
}

