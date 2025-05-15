import {useState} from "react";

import type {Room} from "@/mock/rooms.ts";
import {BedDouble,Users} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton.tsx";

export default function PopularRoom({room}:{room:Room}){
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className={"bg-[#f0f0f0] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"}>
            {!imgLoaded && <Skeleton className="top-0 left-0 w-full h-60" />}
            <img
                src={room.imgUrl[0]}
                alt="Room Image" className={`w-full h-60 object-cover ${
                imgLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
                onLoad={() => setImgLoaded(true)}
                loading="lazy"/>
            <div className={"p-4 flex flex-col flex-1"}>
                <h1 className={"text-xl text-gray-800"}>{room.type} Room</h1>
                <div className={"flex gap-2 py-2"}>
                    <BedDouble/>
                    <h2 className={"text-base text-gray-800"}> {room.details.bedSize} Bed</h2>
                </div>
                <div className={"flex gap-2 py-2"}>
                    <Users />
                    <h2 className={"text-base text-gray-800"}>{room.guestLimit} Guest{room.guestLimit>1?"s":""}</h2>
                </div>
                <div className={"mt-auto"}>
                    <button className={"mt-4 w-full bg-blue-900 cursor-pointer hover:bg-blue-800 text-white py-2 px-4 rounded-lg"}>
                        View Details
                    </button>
                </div>
            </div>
        </div>

    )
}