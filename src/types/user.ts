import type { BookingData } from "./api-response";

export interface User{
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    role: "user" | "admin",
    imageUrl:string ,
    points: number,
    createdAt: string,
    updatedAt: string,
    deletedAt: string | null,
    bookings : BookingData[]
}