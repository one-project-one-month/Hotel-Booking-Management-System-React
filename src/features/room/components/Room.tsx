import { useState } from "react";
import { Link } from "react-router";

import type { Room } from "@/mock/rooms.ts";
import { Skeleton } from "@/components/ui/skeleton";

export default function Room({ room }: { room: Room }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="bg-[#f0f0f0] rounded-2xl shadow-md overflow-hidden hover:shadow-lg flex flex-col">
      <div className="relative h-60">
        {!imgLoaded && <Skeleton className="w-full h-full" />}
        <img
          src={room.imgUrl[Math.floor(Math.random() * room.imgUrl.length)]}
          alt="Room Image"
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0 absolute"
          }`}
          onLoad={() => setImgLoaded(true)}
        />
        <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded-full">
          {room.status || "Avaliable"}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg text-gray-800">{room.type}</h2>
        <h2 className="text-base text-gray-800">{room.roomNo}</h2>
        <h2 className="text-base text-gray-800 mb-3">One Night For {room.price}</h2>
        <div className="mt-auto">
          <Link to={`/rooms/${room.roomNo}`}>
            <button className="w-full bg-blue-900 hover:bg-blue-800 cursor-pointer text-white py-2 px-4 rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
