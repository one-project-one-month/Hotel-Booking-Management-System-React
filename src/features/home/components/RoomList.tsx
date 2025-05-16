import { CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { Room } from "@/mock/rooms"
import PopularRoomCard from "./PopularRoomCard"

type Props = {
    rooms: Room[]
}

export default function RoomList({ rooms }: Props) {
    return (
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
    )
}
