import { API_URL } from '@/config/constants';
import axios from 'axios';

export interface BookingPayload {
    userId: string;
    roomId: string;
    checkIn: Date;
    checkOut?: Date;
    guestCount: number;
    totalAmount: number
}

// define type for the booking response (write type definition inside types folder)

export async function createBooking(payload:BookingPayload) {
    const response = await axios.post(`${API_URL}/bookings`, payload);
    console.log(response.data.data)
    return response;
}

