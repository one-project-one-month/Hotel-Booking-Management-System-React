import type { Room } from "@/types/rooms";

export const getFeaturedRooms = (rooms: Room[]) => {
    return rooms.filter((room) => room.isFeatured);
}

export const filterRoomsByType = (rooms: Room[], type: "Deluxe" | "Standard") => {
    return rooms.filter((room) => room.type === type);
}