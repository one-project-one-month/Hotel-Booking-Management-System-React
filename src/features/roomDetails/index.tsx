import { useParams } from "react-router";
import { rooms } from "@/mock/rooms";
import RoomDetailUi from "./components/RoomDetailUi";

export default function RoomDetail() {
  const { roomNo } = useParams();
  const currentRoom = rooms.find((room) => room.roomNo == Number(roomNo));

  return (
    <div className="container mx-auto mt-8">
      <RoomDetailUi currentRoom={currentRoom} />
    </div>
  );
}
