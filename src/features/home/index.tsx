import RoomCarousel from "./components/RoomCarousel";
import { useFetchRooms } from "@/api/services/rooms";
import { filterRoomsByType, getFeaturedRooms } from "./utils";
import Loading from "@/components/loading";
import Footer from "./components/Footer";
import { useFetchBankAccounts } from "@/api/services/bankAccounts";

export default function Home() {
  const { data: rooms = [], isLoading } = useFetchRooms();
  const featuredRooms = getFeaturedRooms(rooms);
  const deluxeRooms = filterRoomsByType(rooms, "Deluxe");
  const standardRooms = filterRoomsByType(rooms, "Standard");
  useFetchBankAccounts();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] rounded-full">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <RoomCarousel
        isFeatured={true}
        roomData={featuredRooms}
        title={"Our Popular Rooms"}
      />
      <RoomCarousel
        isFeatured={false}
        roomData={deluxeRooms}
        title={"Our Luxury Rooms"}
        roomType="Deluxe"
      />
      <RoomCarousel
        isFeatured={false}
        roomData={standardRooms}
        title={"Standard Rooms"}
        roomType="Standard"
      />
      <Footer />
    </>
  );
}
