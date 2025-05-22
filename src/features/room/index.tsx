import { rooms, type Room as RoomProp } from "@/mock/rooms.ts";
import Room from "@/features/room/components/Room.tsx";
export default function RoomContainer() {
  return (
    <>
      <h1 className={"text-center py-5"}>Room Page</h1>
      <div className={"container mx-auto px-4"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {rooms.map((room: RoomProp, index: number) => (
            <Room room={room} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
