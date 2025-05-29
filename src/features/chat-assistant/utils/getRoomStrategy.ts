import { APIRoomQueryStrategy } from "../service/APIRoomQueryStrategy";
import { MockRoomQueryStrategy } from "../service/MockRoomQueryStrategy";
import type { RoomQueryStrategy } from "../service/RoomService";


export function getRoomStrategy(useMock: boolean): RoomQueryStrategy {
  return useMock ? new MockRoomQueryStrategy() : new APIRoomQueryStrategy();
}
