import { BedSingle, Star } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { format, getMonth, intervalToDuration } from "date-fns";

import SelectorDialog from "./SelectorDialog";
import ImgContainer from "./ImgContainer";
import useUserInputContext from "@/hooks/useUserInputContext";
import type { Room, RoomDescription } from "@/types/rooms";

interface CheckOutDetailCardProps {
  roomData: Room;
}

function CheckOutDetailCard({ roomData }: CheckOutDetailCardProps) {
  const { checkInDate, checkOutDate, guestCount } = useUserInputContext();
  const totalGuest = guestCount.adults + guestCount.children;
  const detailsStr =
    typeof roomData.details === "string"
      ? roomData.details
      : JSON.stringify(roomData.details);
  const detailsObj = JSON.parse(detailsStr) as RoomDescription;
  const amenities = detailsObj.amenities.length > 0 ? detailsObj.amenities : [];
  const title = detailsObj.title;
  const imgUrls: string[] =
    typeof roomData.imgUrl === "string"
      ? (JSON.parse(roomData.imgUrl) as string[])
      : roomData.imgUrl;
  const imgUrl = imgUrls[0];

  // Format dates
  const formattedCheckIn =
    checkInDate && checkOutDate
      ? getMonth(checkInDate) === getMonth(checkOutDate)
        ? format(checkInDate, "dd")
        : format(checkInDate, "dd MMM")
      : "";
  const formattedCheckOut = checkOutDate
    ? format(checkOutDate, "dd MMM yyyy")
    : "";

  // Calculate duration and total cost
  const { days: duration = 0 } =
    checkInDate && checkOutDate
      ? intervalToDuration({ start: checkInDate, end: checkOutDate })
      : { days: 0 };

  const totalCost = duration && roomData.price * duration;

  return (
    <div className="border rounded-lg w-[450px] grid p-8">
      <div>
        <div className="flex gap-4 pb-4">
          <ImgContainer imgUrl={imgUrl} />
          <div className="grid items-center">
            <div className="flex items-center gap-2">
              <Star size={40} />
              <h3 className=" font-semibold text-wrap">{title}</h3>
            </div>
            <div className="flex gap-2">
              <BedSingle />
              <p
                className="w-[200px] text-sm font-semibold text-nowrap overflow-ellipsis"
                style={{ overflow: "hidden" }}
              >
                {amenities.map((item: string, i: number) => {
                  if (i === 0) {
                    return item;
                  }
                  return ` / ${item}`;
                })}
              </p>
            </div>
          </div>
        </div>
        <Separator className="bg-border -mx-1 my-1 h-px" />
      </div>
      <div className="my-4 relative">
        <h3>Trip Details</h3>
        <p className=" font-extralight text-sm">
          {formattedCheckIn} - {formattedCheckOut}
        </p>
        <p className=" font-extralight text-sm">
          {totalGuest} {totalGuest > 1 ? "guests" : "guest"}
        </p>
        <SelectorDialog />
      </div>
      <Separator className="bg-border -mx-1 my-1 h-px" />
      <div className="my-4 ">
        <h3>Price Details</h3>
        <p className="flex font-extralight text-sm">
          ${roomData.price} x {duration}{" "}
          {duration && duration > 1 ? "nights" : "night"}{" "}
          <span className="font-extralight text-sm ml-auto">${totalCost}</span>
        </p>
      </div>
      <Separator className="bg-border my-4 -mx-1 h-px" />
      <div className="my-4">
        <p className="flex">
          <span className="mr-auto">Total</span>
          <span className="ml-auto">${totalCost}</span>
        </p>
      </div>
    </div>
  );
}
export default CheckOutDetailCard;
