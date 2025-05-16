import { useState } from "react";
import { rooms, type Room } from "@/mock/rooms";
import { Heart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type PopularRoomCardProps = {
  room: Room;
};

// Room Card
function PopularRoomCard({ room }: PopularRoomCardProps) {
  const imgUrl = room.imgUrl?.[0];
  const [imgLoaded, setImgLoaded] = useState(false);
  const [fav, setFav] = useState(false);

  return (
    <div className="relative max-w-60">
      <button
        className="absolute right-2 top-2 w-[10%] max-w-8"
        onClick={() => setFav((fav) => !fav)}
      >
        <Heart
          fill={fav ? "#ea273d" : "#212f3d"}
          color="#D4D1D0"
          className=" transition-colors"
          strokeWidth={2}
        />
      </button>

      {/* Skeleton loader */}
      {!imgLoaded && <Skeleton className="w-full h-40 rounded-lg" />}

      {/* Image */}
      <img
        src={imgUrl}
        alt=""
        className={`rounded-lg transition-opacity duration-500 ${
          imgLoaded ? "opacity-100" : "opacity-0 absolute"
        }`}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
      />

      <p>{room.type}</p>
      <p className="text-gray-500 text-xs">
        ${room.price} for night,
        {room.guestLimit === 1
          ? room.guestLimit + " Guest"
          : room.guestLimit + " Guests"}
      </p>
    </div>
  );
}

//Carousel
export default function PopularRoomCarousel() {
  return (
    <>
      <Carousel
        className="relative mx-16 my-12 "
        opts={{
          align: "start",
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent>
          {rooms.map((room) => (
            <CarouselItem
              key={room.roomNo}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <PopularRoomCard room={room} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="border absolute -top-6 right-10">
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="" />
        </div>
      </Carousel>
    </>
  );
}
