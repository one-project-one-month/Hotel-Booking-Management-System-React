import {useState} from "react";

import type {Room} from "@/mock/rooms.ts";
import { Skeleton } from "@/components/ui/skeleton"

export default function Room_({room}:{room:Room}){
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div
            className="bg-[#f0f0f0] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="relative w-full h-60">
                {!imgLoaded && <Skeleton className="top-0 left-0 w-full h-full" />}
                <img
                    src={room.imgUrl[Math.floor(Math.random() * room.imgUrl.length)]}
                    alt="Hotel Room"
                    loading="lazy"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                        imgLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImgLoaded(true)}
                />
                <span
                    className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded-full">{room.status}</span>
            </div>
            <div className="p-4">
                <h2 className="text-lg text-gray-800">{room.type}</h2>
                <h2 className="text-base text-gray-800">{room.roomNo}</h2>
                <h2 className="text-base text-gray-800">One Night For {room.price}</h2>
                <p className="text-gray-600 mt-2 min-h-[50px] text-sm">{room.details.description}</p>
                    <button
                        className="mt-4 w-full bg-blue-900 hover:bg-blue-800 cursor-pointer text-white py-2 px-4 rounded-lg">
                        Book Now
                    </button>
            </div>
        </div>
    )
}