import type { Room } from "@/types/room";

export interface RoomQueryStrategy {
    generateSearchQuery(query: string): Promise<string>;
    findRooms(query?: string): Promise<Room[]>;
}