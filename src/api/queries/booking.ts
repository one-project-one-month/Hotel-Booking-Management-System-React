import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API_URL;

export interface BookingPayload {
    userId: string;
    roomId: string;
    checkIn: Date;
    checkOut?: Date;
    guestCount: number;
    totalAmount: number

}

export async function createBooking(payload:BookingPayload) {
    const response = await axios.post(`${API_URL}/bookings`, payload);
    console.log(response.data.data)
    return response;
}

