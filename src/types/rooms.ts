export type RoomDescription = {
    bedSize: "Single" | "Double" | "Queen" | "King";
    title: string;
    description: string;
    amenities: string[];
};

export interface Room {
    id: string
    roomNo: number;
    type: "Deluxe" | "Standard";
    price: number;
    status: string
    isFeatured: boolean;
    details: RoomDescription;
    imgUrl: string[];
    guestLimit: number;
}