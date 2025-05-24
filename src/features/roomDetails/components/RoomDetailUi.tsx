import { type Room } from "@/mock/rooms";
import RoomImages from "./RoomImages";
import RoomInfo from "./RoomInfo";
import Picker from "./SelectorContainer";
import RoomAmenities from "./RoomAmenities";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import ReviewContainer from "./ReviewContainer";

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
        <section className="pb-6">
          <RoomInfo currentRoom={currentRoom} />
          <Separator className="my-5" />
          <RoomAmenities amenities={currentRoom.details.amenities} />
        </section>
        <section className="space-y-4">
          <Picker />

          <Button className="w-full text-lg py-7 rounded-full cursor-pointer shadow-lg bg-rose-500 hover:bg-rose-600 text-white">
            <Link
              to={`/rooms/checkout/${currentRoom.roomNo}`}
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
