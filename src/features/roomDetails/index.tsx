import { useParams } from "react-router";
import RoomDetailUi from "./components/RoomDetailUi";
import { useFetchRoomById } from "@/api/services/rooms";

export default function RoomDetail() {
  const { roomId } = useParams();
  const { data: room, isLoading } = useFetchRoomById(roomId!);
  console.log("room", room);
  return (
    <div className="container mx-auto mt-8">
      {room && <RoomDetailUi currentRoom={room} />}
    </div>
  );
}
