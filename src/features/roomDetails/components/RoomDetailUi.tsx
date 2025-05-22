import { type Room } from "@/mock/rooms";
import RoomImages from "./RoomImages";
import RoomInfo from "./RoomInfo";
import Picker from "./SelectorContainer";

export default function RoomDetailUi({
  currentRoom,
}: {
  currentRoom: Room | undefined;
}) {
  if (!currentRoom) {
    return <h1>Room Not Found</h1>;
  }

  return (
    <div className="sm:px-0 px-3 ">
      {
        <div className="grid grid-cols-2 grid-rows-2 sm:gap-3 gap-1">
          {currentRoom.imgUrl.map((img, index) => (
            <RoomImages key={index} roomImg={img} />
          ))}
        </div>
      }

      <div className="flex justify-between mt-5 md:flex-row lg:gap-0 gap-4 flex-col">
        <RoomInfo currentRoom={currentRoom} />
        <Picker />
      </div>
    </div>
  );
}
