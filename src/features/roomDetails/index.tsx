import { useParams } from "react-router";
import { rooms } from "@/mock/rooms";
import RoomDetail from "./components/RoomDetail";

export default function index() {
  const { roomNo } = useParams();
  const currentRoom = rooms.find((room) => room.roomNo == Number(roomNo));

  return (
    <div className="container mx-auto mt-8">
      <RoomDetail currentRoom={currentRoom} />
    </div>
  );
}
