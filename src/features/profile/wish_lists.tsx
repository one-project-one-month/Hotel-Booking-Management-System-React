import NoWishList from "@/assets/empty wishlist.png";
import { Button } from "@/components/ui/button";
import { FAVS_KEY } from "@/config/constants";
import type { Room } from "@/types/rooms";
import FavRoom from "@/features/room/components/Room";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function WishLists() {
  const navigate = useNavigate();
  const favRooms = localStorage.getItem(FAVS_KEY);

  const hasWishList = favRooms !== null;
  const wishList: Room[] = hasWishList
    ? Array.isArray(JSON.parse(favRooms))
      ? (JSON.parse(favRooms) as Room[])
      : []
    : [];

  const [rooms, setRooms] = useState<Room[]>(wishList);

  return (
    <>
      {hasWishList ? (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => {
                navigate(`/room/details/${room.id}`);
              }}
              className="cursor-pointer"
            >
              <FavRoom
                room={room}
                hasWishList={hasWishList}
                setRooms={setRooms}
              />
            </div>
          ))}
        </div>
      ) : (
        <WishListEmpty />
      )}
    </>
  );
}

function WishListEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <img src={NoWishList} alt="No Coupons" className="w-48 mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        No Wish List Yet
      </h2>
      <p className="text-gray-600 mb-6">
        Your wishlist is currently empty. Start exploring and add your favorite
        hotels or rooms to keep track of them here!
      </p>
      <Link to="/">
        <Button className="mt-3 bg-pink-600 hover:bg-pink-700 cursor-pointer px-12 py-6 rounded-xl shadow-lg ansition duration-300">
          Browse
        </Button>
      </Link>
    </div>
  );
}
