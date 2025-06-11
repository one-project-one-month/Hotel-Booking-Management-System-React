import { Skeleton } from "@/components/ui/skeleton.tsx";
import { useState } from "react";

export default function RoomImages({ roomImg }: { roomImg: string }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div>
      <div className="flex-1 relative h-80">
        {!imgLoaded && <Skeleton className="w-full h-full" />}
        <img
          src={roomImg}
          alt="Room Image"
          onLoad={() => setImgLoaded(true)}
          className={`rounded transition-opacity duration-500 h-full w-full object-cover ${
            imgLoaded ? "opacity-100" : "opacity-0 absolute"
          }`}
        />
      </div>
    </div>
  );
}
