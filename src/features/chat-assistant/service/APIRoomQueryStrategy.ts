import { requestHotelRoomSuggestions } from "@/api/queries/chat-assistant";
import type { RoomQueryStrategy } from "./RoomService";
import type { Room } from "@/mock/rooms";
import { extractRoomNumbers, getRoomData } from "../utils";

export class APIRoomQueryStrategy implements RoomQueryStrategy {
    async generateSearchQuery(query: string): Promise<string> {
        try {
            const suggestion = await requestHotelRoomSuggestions({ query });
            return suggestion;
        } catch (error) {
            console.error('Error fetching room suggestion:', error);
            return "Sorry, I couldn't fetch suggestions right now.";
        }
    }

    async findRooms(query?: string): Promise<Room[]> {
        try {
            const suggestion = await this.generateSearchQuery(query ?? "");
            const roomNumbers = extractRoomNumbers(suggestion);

            return getRoomData(roomNumbers);
        } catch (error) {
            console.error('Error fetching rooms:', error);
            return [];
        }
    }
}
