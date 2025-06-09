import { useState } from "react";
import { useNavigate } from "react-router";

import type { Room } from "@/types/rooms.ts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { FAVS_KEY } from "@/config/constants";

export default function Room({
  room,
  hasWishList,
  setRooms,
}: {
  room: Room;
  hasWishList: boolean;
  setRooms?: React.Dispatch<React.SetStateAction<Room[]>>;
}) {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgUrlArray: string[] =
    typeof room.imgUrl === "string"
      ? (JSON.parse(room.imgUrl) as string[])
      : room.imgUrl;
  const imgUrl = imgUrlArray[0];

  const handleRemoveFromWishList = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favRooms = localStorage.getItem(FAVS_KEY);

    if (!favRooms) return;

    const wishlist = JSON.parse(favRooms) as Room[];

    const updatedWishlist = wishlist.filter(
      (storeRoom: Room) => storeRoom.id !== room.id
    );

    localStorage.setItem(FAVS_KEY, JSON.stringify(updatedWishlist));
    if (setRooms) {
      setRooms(updatedWishlist);
    }
    toast.success("Removed from favorites!");

    //clear localstorage
    if (wishlist.length === 1) {
      localStorage.removeItem(FAVS_KEY);
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden hover:shadow-md">
      <div className="relative h-60">
        {!imgLoaded && <Skeleton className="w-full h-full" />}
        <img
          src={imgUrl}
          alt="Room Image"
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0 absolute"
          }`}
          onLoad={() =>  { setImgLoaded(true)}}
        />
        <span
          className={`absolute top-2 capitalize left-2 bg-white text-xs px-3 py-2 rounded-full text-green-600`}
        >
          {room.status}
        </span>
        {hasWishList && (
          <Trash2
            fill="#ec7063"
            color="white"
            className="absolute top-2 right-2 cursor-pointer text-xs"
            onClick={handleRemoveFromWishList}
          />
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{room.type}</h2>
        {/* <h2 className="text-base text-gray-500">{room.roomNo}</h2> */}
        <div className="flex justify-between mt-3">
          <div>
            <p className=" text-gray-500 text-sm">Start From</p>
            <div>
              <span className="text-lg font-semibold">${room.price}</span>
              <span className="text-gray-500 text-sm">/Night</span>
            </div>
          </div>

          <div
            className="self-end"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              if (room.status == "Booked") return;
              void navigate(`/room/details/${room.id}`);
            }}
          >
            <Button className={`text-sm w-full self-end bg-pink-400 hover:bg-pink-500 cursor-pointer text-white py-2 px-4 rounded-full ${room.status=="Booked" ? "bg-pink-300 cursor-default hover:bg-pink-300" :""}`}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
