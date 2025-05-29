import { useParams } from "react-router";
import RoomDetailUi from "./components/RoomDetailUi";
import { useFetchRoomById } from "@/api/services/rooms";
import Loading from "@/components/loading";

export default function RoomDetail() {
  const { roomId } = useParams();
  const { data: room, isLoading } = useFetchRoomById(roomId!);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-8">
      {room && <RoomDetailUi currentRoom={room} />}
    </div>
  );
}
