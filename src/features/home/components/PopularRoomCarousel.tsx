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
type CarouselProps = {
  roomData: Room[];
  isFeatured: boolean;
  title: string;
};

// function createRoomResource() {
//   let status = "pending";
//   let result: Room[] | undefined;
//   const suspender = new Promise<void>((resolve) => {
//     setTimeout(async () => {
//       const mod = await import("@/mock/rooms");
//       result = mod.rooms;
//       status = "success";
//       resolve();
//     }, 1000); // 3 second delay
//   });

//   return {
//     read() {
//       if (status === "pending") {
//         throw suspender;
//       }
//       return result!;
//     },
//   };
// }

// Room Card
function PopularRoomCard({ room }: PopularRoomCardProps) {
  const imgUrl = room.imgUrl[0];
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [fav, setFav] = useState(false);

  return (
    <div className="relative max-w-60 h-fit">
      <button
        className="absolute right-2 top-2 w-[10%] max-w-8"
        onClick={() => setFav((fav) => !fav)}
      >
        <Heart
          fill={fav ? "#e60076" : "#212f3d"}
          color="#D4D1D0"
          className=" transition-colors"
          strokeWidth={2}
        />
      </button>
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
      <p>{room.details.title}</p>
      <p className="text-gray-500 text-xs">
        ${room.price} for night,
        {room.guestLimit === 1
          ? room.guestLimit + " Guest"
          : room.guestLimit + " Guests"}
      </p>
    </div>
  );
}
// const roomResource = createRoomResource();

// function PopularRoomCarouselContent() {
//   const roomData = roomResource.read();
//   return (
//     <>
//       {roomData.map((room) => (
//         <CarouselItem
//           key={room.roomNo}
//           className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
//         >
//           <PopularRoomCard room={room} />
//         </CarouselItem>
//       ))}
//     </>
//   );
// }

//Carousel
export default function RoomCarousel({
  roomData,
  isFeatured,
  title,
}: CarouselProps) {
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

        <div className="absolute -top-7 text-lg font-semibold">{title}</div>

        {isFeatured && (
          <div className="border absolute -top-6 right-10">
            <CarouselPrevious className=" cursor-pointer -left-6" />
            <CarouselNext className="cursor-pointer" />
          </div>
        )}

        {!isFeatured && (
          <div className="absolute -top-6 right-0">
            <a
              href=""
              className=" underline text-pink-600 hover:text-pink-700 focus:text-pink-700 text-sm"
            >
              See More...
            </a>
          </div>
        )}
      </Carousel>
    </>
  );
}
