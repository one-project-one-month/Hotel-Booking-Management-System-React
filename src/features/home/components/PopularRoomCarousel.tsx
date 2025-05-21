import { Suspense, useState } from "react";
import { type Room } from "@/mock/rooms";
import { Heart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselSkeleton from "./CarouselSkeleton";
type PopularRoomCardProps = {
  room: Room;
};

function createRoomResource() {
  let status = "pending";
  let result: Room[] | undefined;
  const suspender = new Promise<void>((resolve) => {
    setTimeout(async () => {
      const mod = await import("@/mock/rooms");
      result = mod.rooms;
      status = "success";
      resolve();
    }, 3000); // 3 second delay
  });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      }
      return result!;
    },
  };
}

// Room Card
function PopularRoomCard({ room }: PopularRoomCardProps) {
  const imgUrl = room.imgUrl[0];
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
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
      {!imgLoaded && !imgError && (
        <Skeleton className="w-full h-40 rounded-lg" />
      )}

      {/* Image or fallback */}
      {!imgError ? (
        <img
          src={imgUrl}
          alt=""
          className={`rounded-lg transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0 absolute"
          }`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-lg text-gray-500 text-sm">
          Image unavailable
        </div>
      )}
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
const roomResource = createRoomResource();

function PopularRoomCarouselContent() {
  const roomData = roomResource.read();
  return (
    <>
      {roomData.map((room) => (
        <CarouselItem
          key={room.roomNo}
          className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
        >
          <PopularRoomCard room={room} />
        </CarouselItem>
      ))}
    </>
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
          <Suspense fallback={<CarouselSkeleton />}>
            <PopularRoomCarouselContent />
          </Suspense>
        </CarouselContent>
        <div className="border absolute -top-6 right-10">
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="" />
        </div>
      </Carousel>
    </>
  );
}
