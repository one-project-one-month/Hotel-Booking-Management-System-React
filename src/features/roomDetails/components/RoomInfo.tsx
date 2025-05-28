import type { Room } from "@/mock/rooms";
import type { RoomDescription } from "@/types/rooms";

export default function RoomInfo({ currentRoom }: { currentRoom: Room }) {
   const details: RoomDescription = typeof currentRoom.details === 'string'
      ? JSON.parse(currentRoom.details)
      : currentRoom.details as RoomDescription;
    const description = details.description;
  return (
    <div className="space-y-1 flex-1">
      <h1 className="text-2xl font-semibold">{currentRoom.type} Room</h1>
      <div className={"flex col gap-1 text-gray-600 text-base"}>
        <h2>
          Accommodates {currentRoom.guestLimit} guest{currentRoom.guestLimit !== 1 && "s"}.
        </h2>
        <h2>Comfortable bedding included</h2>
      </div>
      <p className="text-gray-600 min-h-[50px]  my-3 lg:w-2xl md:w-full">
        {description}
      </p>
    </div>
  );
}
