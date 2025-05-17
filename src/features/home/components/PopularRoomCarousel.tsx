import { Suspense } from "react";
import { rooms as mockRooms, type Room } from "@/mock/rooms";
import { Carousel } from "@/components/ui/carousel";
import RoomList from "./RoomList";
import CarouselSkeleton from "./CarouselSkeleton";
import CarouselControls from "./CarouselControls";


const fetchRooms = (): Promise<Room[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRooms);
    }, 1500);
  });
};

function createRoomResource() {
  let status = "pending";
  let result: Room[] | null = null;
  const suspender = fetchRooms().then(
    (data) => {
      status = "success";
      result = data;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else {
        return result!;
      }
    },
  };
}

const roomsResource = createRoomResource();

function RoomsContent() {
  const rooms = roomsResource.read();
  return <RoomList rooms={rooms} />;
}

export default function PopularRoomCarousel() {
  return (
    <Carousel
      className="relative mx-16 my-12"
      opts={{
        align: "start",
        containScroll: "trimSnaps",
      }}
    >
      <Suspense fallback={<CarouselSkeleton />}>
        <RoomsContent />
        <CarouselControls />
      </Suspense>

    </Carousel>
  );
}
