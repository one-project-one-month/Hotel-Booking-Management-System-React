import { useState } from "react";

import { BedDouble, Users } from "lucide-react";
import type { Room } from "@/mock/rooms";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export default function RoomDetail({
  currentRoom,
}: {
  currentRoom: Room | undefined;
}) {
  if (!currentRoom) {
    return <h1>Room Not Found</h1>;
  }

  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex gap-5 flex-col sm:flex-row sm:px-0 px-3">
      <div className="flex-1 relative h-80">
        {!imgLoaded && <Skeleton className="w-full h-full" />}
        <img
          src={currentRoom.imgUrl[0]}
          alt="Room Image"
          onLoad={() => setImgLoaded(true)}
          className={` transition-opacity duration-500 h-full w-full object-cover ${
            imgLoaded ? "opacity-100" : "opacity-0 absolute"
          }`}
        />
      </div>
      <div className="flex-1 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">{currentRoom.type}</h1>
          <button className=" bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded">
            {currentRoom.status}
          </button>
        </div>
        <div className={"flex col gap-5"}>
          <div className={"flex gap-2"}>
            <BedDouble />
            <h2 className={"text-base text-gray-800"}>
              {currentRoom.details.bedSize} Bed
            </h2>
          </div>
          <div className={"flex gap-2"}>
            <Users />
            <h2 className={"text-base text-gray-800"}>
              {currentRoom.guestLimit} Guest
              {currentRoom.guestLimit > 1 ? "s" : ""}
            </h2>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          {currentRoom.details.description}
        </p>
        <div className="flex justify-between">
          <h2 className="text-base text-gray-800">Availability:12/30 rooms</h2>
          <h2 className="text-base text-gray-800">
            ${currentRoom.price}/night
          </h2>
        </div>
      </div>
    </div>
  );
}
