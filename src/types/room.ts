type RoomDescription = {
    bedSize: "Single" | "Double" | "Queen" | "King";
    title: string;
    description: string;
    amenities: string[];
};

export interface Room {
    roomNo: number;
    type: "Deluxe" | "Standard";
    price: number;
    isFeatured: boolean;
    details: RoomDescription;
    imgUrl: string[];
    guestLimit: number;
}