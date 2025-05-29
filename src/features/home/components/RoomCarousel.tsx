import { Suspense, useState } from "react";
import { type Room } from "@/types/rooms";
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
import { Link } from "react-router";
import type { RoomDescription } from "@/types/rooms";
import { Button } from "@/components/ui/button";
import { addRoomToFavorites, isRoomInFavorites, removeRoomFromFavorites } from "../utils";

type RoomCardProps = {
  room: Room;
};
type CarouselProps = {
  roomData: Room[];
  isFeatured: boolean;
  title: string;
  roomType?: string;
};

function PopularRoomCard({ room }: RoomCardProps) {
  const imgUrl = (typeof room.imgUrl === 'string' ? JSON.parse(room.imgUrl) : room.imgUrl as string[])[0];
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [fav, setFav] = useState(() => isRoomInFavorites(room.id));
  const details: RoomDescription = typeof room.details === 'string'
    ? JSON.parse(room.details)
    : room.details as RoomDescription;
  const title = details.title;

  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!fav) {
      const wasAdded = addRoomToFavorites(room);
      if (wasAdded) {
        setFav(true);
      }
    } else {
      const wasRemoved = removeRoomFromFavorites(room);
      if (wasRemoved) {
        setFav(false);
      }
    }
  };
  return (
    <div className="relative max-w-60 h-fit">
      <Button
        variant="ghost"
        className="absolute right-2 top-2 w-[10%] cursor-pointer z-10"
        onClick={handleFavClick}
        tabIndex={0}
      >
        <Heart
          fill={fav ? "#e60076" : "#212f3d"}
          color="#D4D1D0"
          className="transition-colors"
          strokeWidth={2}
        />
      </Button>
      <Link to={`/room/details/${room.id}`} className="block">
        <div
          className="w-full h-40 border bg-center bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: imgUrl && !imgError ? `url(${imgUrl})` : undefined,
          }}
        >
          {/* Skeleton loader*/}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
          )}

          {/* Hidden img to handle onLoad and onError */}
          {imgUrl && !imgLoaded && !imgError && (
            <img
              src={imgUrl}
              alt=""
              className="hidden"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          )}

          {/* Error msg for the error in the img fetching  */}
          {imgLoaded && imgError && (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg text-gray-500 text-sm">
              Image unavailable
            </div>
          )}
        </div>
        <p>{title}</p>
        <p className="text-gray-500 text-xs">
          ${room.price} for night,
          {room.guestLimit === 1
            ? room.guestLimit + " Guest"
            : room.guestLimit + " Guests"}
        </p>
      </Link>
    </div>
  );
}

export default function RoomCarousel({
  roomData,
  isFeatured,
  title,
  roomType
}: CarouselProps) {
  return (
    <>
      <Carousel
        className="mx-16 my-6"
        opts={{
          align: "start",
          containScroll: "trimSnaps",
        }}
      >
        <section className="flex justify-between items-center relative mb-1">
          <h2 className="text-lg font-semibold">{title}</h2>
          {isFeatured && (
            <div className="border absolute top-3 right-10">
              <CarouselPrevious className="cursor-pointer -left-6" />
              <CarouselNext className="cursor-pointer" />
            </div>
          )}

          {!isFeatured && (
            <div className="">
              <Link
                to={`/rooms/${roomType}`}
                className="underline underline-offset-2 text-pink-600 hover:text-pink-700 focus:text-pink-700 text-sm"
              >
                See More...
              </Link>
            </div>
          )}
        </section>
        <CarouselContent>
          <Suspense fallback={<CarouselSkeleton />}>
            {roomData.map((room: Room) => (
              <CarouselItem
                key={room.roomNo}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <PopularRoomCard room={room} />
              </CarouselItem>
            ))}
          </Suspense>
        </CarouselContent>


      </Carousel>
    </>
  );
}
