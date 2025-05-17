import { type Room, rooms } from "@/mock/rooms.ts";
import PopularRoom from "@/features/home/components/PopularRoom.tsx";
import PopularRoomCarousel from "./components/PopularRoomCarousel";


export default function Home() {
    return (
        <>
            <PopularRoomCarousel />
            <div className={"container px-4 mx-auto"}>
                <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg"}>
                    {rooms.slice(0, 3).map((room: Room, index: number) => (
                        <PopularRoom room={room} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}
