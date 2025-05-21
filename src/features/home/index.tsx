import { rooms } from "@/mock/rooms.ts";
import RoomCarousel from "./components/PopularRoomCarousel";

export default function Home() {
  const deluxeRooms = rooms.filter((room) => room.type === "Deluxe");
  const standardRooms = rooms.filter((room) => room.type === "Standard");
  return (
    <>
      <RoomCarousel
        isFeatured={true}
        roomData={rooms}
        title={"Our Popular Rooms"}
      />
      <RoomCarousel
        isFeatured={false}
        roomData={deluxeRooms}
        title={"Our Luxury Rooms"}
      />
      <RoomCarousel
        isFeatured={false}
        roomData={standardRooms}
        title={"Standard Rooms"}
      />
    </>
  );
}
