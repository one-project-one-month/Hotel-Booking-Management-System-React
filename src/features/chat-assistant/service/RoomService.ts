import type { Room } from "@/mock/rooms";

export interface RoomQueryStrategy {
    generateSearchQuery(query: string): Promise<string>;
    findRooms(query?: string): Promise<Room[]>;
}