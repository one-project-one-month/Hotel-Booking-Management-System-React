import { rooms } from "@/mock/rooms.ts";
import RoomCarousel from "./components/RoomCarousel";
import { useFetchRooms } from "@/api/services/rooms";

export default function Home() {
  const {data: featuredRooms, error} = useFetchRooms()
  const standardRooms = rooms.filter((room) => room.type === "Standard");
  const deluxeRooms = rooms.filter((room) => room.type === "Deluxe");

  console.log("Rooms", featuredRooms)
  console.log("Error", error)
  return (
    <>
      {/* <RoomCarousel
        isFeatured={true}
        roomData={featuredRooms ?? []}
        title={"Our Popular Rooms"}
      /> */}
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
