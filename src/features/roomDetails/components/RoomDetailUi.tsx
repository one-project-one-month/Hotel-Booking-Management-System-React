import { type Room } from "@/types/rooms";
import RoomImages from "./RoomImages";
import RoomInfo from "./RoomInfo";
import Picker from "./SelectorContainer";
import RoomAmenities from "./RoomAmenities";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import ReviewContainer from "./ReviewContainer";
import { useEffect, type Key } from "react";

import useGuestLimit from "@/hooks/useGuestLimit";

export default function RoomDetailUi({
  currentRoom,
}: {
  currentRoom: Room;
}) {
  const { setMaxGuestCount } = useGuestLimit();

  const detailsStr =
    typeof currentRoom.details === "string"
      ? currentRoom.details
      : JSON.stringify(currentRoom.details);

  const detailsObj = JSON.parse(detailsStr) as { amenities?: unknown };
  const amenities = Array.isArray(detailsObj.amenities)
    ? detailsObj.amenities
    : [];

  const imgUrls: string[] =
    typeof currentRoom.imgUrl === "string"
      ? (JSON.parse(currentRoom.imgUrl) as string[])
      : currentRoom.imgUrl;

  useEffect(() => {
    if (currentRoom.guestLimit) {
      setMaxGuestCount(currentRoom.guestLimit);
    }
  }, [currentRoom.guestLimit]);

  return (
    <div className="sm:px-0 px-3">
      <div className="grid grid-cols-2 grid-rows-2 sm:gap-3 gap-1">
        {imgUrls.map((img: string, index: Key | null | undefined) => (
          <RoomImages key={index} roomImg={img} />
        ))}
      </div>

      <div className="flex justify-between mt-5 md:flex-row lg:gap-0 gap-4 flex-col">
        <section className="pb-6">
          <RoomInfo currentRoom={currentRoom} />
          <Separator className="my-5" />
          <RoomAmenities amenities={amenities} />
        </section>
        <section className="space-y-4">
          <Picker />
          <Button className="w-full text-lg py-7 rounded-full cursor-pointer shadow-lg bg-rose-500 hover:bg-rose-600 text-white">
            <Link
              to={`/rooms/checkout/${String(currentRoom.roomNo)}`}
              state={{ roomData: currentRoom }}
            >
              Book Now
            </Link>
          </Button>
        </section>
      </div>
      <ReviewContainer />
    </div>
  );
}
