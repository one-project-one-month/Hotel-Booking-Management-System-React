import { API_URL } from '@/config/constants';
import type { BookingResponse } from '@/types/api-response';
import axios, { type AxiosResponse } from 'axios';

export interface BookingPayload {
    userId: string;
    roomId: string;
    checkIn: Date;
    checkOut?: Date;
    guestCount: number;
    totalAmount: number
}

export async function createBooking(payload:BookingPayload): Promise<BookingResponse> {
    const response: AxiosResponse<BookingResponse> = await axios.post(`${API_URL}/bookings`, payload);
    return response.data;
}

