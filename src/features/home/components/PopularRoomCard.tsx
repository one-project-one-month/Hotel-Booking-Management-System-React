import ImgContainer from "@/components/img-container";
import { Button } from "@/components/ui/button";
import type { Room } from "@/mock/rooms";
import { Heart } from "lucide-react";
import { useState } from "react";

type PopularRoomCardProps = {
    room: Room;
};

export default function PopularRoomCard({ room }: PopularRoomCardProps) {
    const imgURL = room.imgUrl?.[0]
    const [fav, setFav] = useState<boolean>(false);
    return (
        <div className="relative max-w-60">
            <Button
                variant="ghost"
                className="absolute w-8 h-8 right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
                onClick={() => setFav((fav) => !fav)}
            >
                <Heart
                    fill={fav ? "#ea273d" : "none"}
                    color={fav ? "#ea273d" : "#444"}
                    className="w-5 h-5"
                />
            </Button>

            <ImgContainer
                src={imgURL}
                alt="Popular Room Img"
            />

            <div className="mt-2">
                <p className="font-medium">{room.type}</p>
                <p className="text-gray-500 text-xs">
                    ${room.price} per night,
                    {room.guestLimit === 1
                        ? ` ${room.guestLimit} Guest`
                        : ` ${room.guestLimit} Guests`}
                </p>
            </div>

        </div>
    )
}
