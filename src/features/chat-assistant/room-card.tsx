import { MapPin, Star, Users } from "lucide-react";
import type { Room } from "@/mock/rooms.ts";

interface RoomCardProps {
    room: Room
}
   

export default function RoomCard({ room }: RoomCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-3">
            <div className="h-32 bg-gradient-to-br from-amber-100 to-orange-100 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-2 left-2 text-white font-semibold text-sm">
                    {room.roomNo}
                </div>
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-800">
                    ${room.price}/night
                </div>
            </div>
            <div className="p-3">
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                        <Users size={12} />
                        {room.guestLimit} guests
                    </span>
                    <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {room.details.bedSize}
                    </span>
                    <span className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-current" />
                        {5} / 5
                    </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{room.details.description}</p>
            </div>
        </div>
    )
}
