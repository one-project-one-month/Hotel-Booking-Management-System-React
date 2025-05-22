import type { Room } from "@/mock/rooms";

export default function RoomInfo({ currentRoom }: { currentRoom: Room }) {
  return (
    <div className="space-y-1 flex-1">
      <h1 className="text-2xl">{currentRoom.type} Room</h1>
      <div className={"flex col gap-1 text-gray-800 text-base"}>
        <h2>
          {currentRoom.guestLimit} guest
          {currentRoom.guestLimit > 1 ? "s" : ""}.
        </h2>
        <h2>{currentRoom.details.bedSize} bed</h2>
      </div>
      <p className="text-gray-600 min-h-[50px] text-lg mb-3 lg:w-2xl md:w-full">
        {currentRoom.details.description}
      </p>
      <div>
        <button className="bg-gray-200 text-base text-gray-900 rounded px-3 py-2">
          Show more
        </button>
      </div>
    </div>
  );
}
