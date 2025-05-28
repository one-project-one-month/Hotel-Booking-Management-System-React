import { type Room as RoomProp } from "@/types/rooms.ts";
import Room from "@/features/room/components/Room.tsx";
import { useParams } from "react-router";
import { useFetchRooms } from "@/api/services/rooms";
import Loading from "@/components/loading";
import { filterRoomsByType } from "../home/utils";
export default function RoomContainer() {
  const { type } = useParams<{ type: string }>();
  const { data: rooms, isLoading } = useFetchRooms();
  const filteredRoomsByType = type === "Deluxe" || type === "Standard"
    ? filterRoomsByType(rooms ?? [], type)
    : rooms ?? [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] rounded-full">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <h1 className="text-center py-5 text-2xl font-bold">
        {type ? `${type.charAt(0).toUpperCase() + type.slice(1)} Rooms` : "All Rooms"}
      </h1>
      <div className={"container mx-auto px-4"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {filteredRoomsByType.map((room: RoomProp, index: number) => (
            <Room room={room} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
