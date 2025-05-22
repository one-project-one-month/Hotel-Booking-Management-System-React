import { useState } from "react";
import { Link } from "react-router";

import type { Room } from "@/mock/rooms.ts";
import { Skeleton } from "@/components/ui/skeleton";

export default function Room({ room }: { room: Room }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden hover:shadow-md">
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
        <span
          className={`absolute top-2 left-2 bg-white text-xs px-3 py-2 rounded-full text-green-600`}
        >
          {room.status || "Avaliable"}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{room.type}</h2>
        {/* <h2 className="text-base text-gray-500">{room.roomNo}</h2> */}

        <div className="flex justify-between mt-3">
          <div>
            <p className="text-base text-gray-500 text-sm">Start From</p>
            <div>
              <span className="text-lg font-semibold">${room.price}</span>
              <span className="text-base text-gray-500 text-sm">/Night</span>
            </div>
          </div>
          <Link to={`/rooms/${room.roomNo}`} className="self-end">
            <button className="text-sm w-full bg-pink-400 hover:bg-pink-500 cursor-pointer text-white py-2 px-4 rounded-full">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
