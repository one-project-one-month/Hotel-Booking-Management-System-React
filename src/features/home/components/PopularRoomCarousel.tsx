import { useState } from "react";
import { rooms, type Room } from "@/mock/rooms";
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
        <svg
          viewBox="-1.6 -1.6 19.20 19.20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="SVGRepo_bgCarrier"
            strokeWidth="0"
            transform="translate(0,0), scale(1)"
          ></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="3.2"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              fill={fav ? "#b51a00 " : "#444444"}
            ></path>
          </g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              fill={fav ? "#b51a00 " : "#444444"}
            ></path>
          </g>
        </svg>
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
          loop: true,
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
