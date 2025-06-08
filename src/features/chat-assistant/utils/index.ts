import { rooms } from "@/mock/rooms";

export function extractRoomNumbers(reply: string) {
    const regex = /Room (\d+)/g;
    const matches = reply.matchAll(regex);
    return Array.from(matches, match => Number(match[1]));
}

export function getRoomData(roomNumbers: number[]) {
    return rooms.filter(room => roomNumbers.includes(room.roomNo));
}