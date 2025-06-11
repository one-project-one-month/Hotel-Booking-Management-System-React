import type { Room } from "@/mock/rooms";
import { extractRoomNumbers, getRoomData } from "../utils";
import type { RoomQueryStrategy } from "./RoomService";

export class MockRoomQueryStrategy implements RoomQueryStrategy {

    private replyMock = "Here are the 5 available rooms with the lowest prices:\n\n* Room 101: Single, $80/night\n* Room 103: Single, $90/night\n* Room 105: Double, $100/night\n* Room 107: Double, $110/night\n* Room 109: Suite, $120/night"

    async generateSearchQuery(): Promise<string> {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        return this.replyMock;
    }

    async findRooms(): Promise<Room[]> {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        const roomNumbers = extractRoomNumbers(this.replyMock);
        
        return getRoomData(roomNumbers);
    }


}