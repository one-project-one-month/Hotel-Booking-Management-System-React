import { type Room } from "@/mock/rooms";
import { useState } from "react";
import { BedSingle, Star } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { format, getMonth, intervalToDuration } from "date-fns";

import SelectorDialog from "./SelectorDialog";
import ImgContainer from "./ImgContainer";
type CheckOutDetailCardProps = {
  roomData: Room;
};

function CheckOutDetailCard({ roomData }: CheckOutDetailCardProps) {
  const [checkInDate, setCheckInDate] = useState<Date>(
    new Date("June 4, 2025 03:24:00")
  );
  const [checkOutDate, setCheckOutDate] = useState<Date>(
    new Date("June 7, 2025 03:24:00")
  );
  const formattedCheckIn =
    getMonth(checkInDate) === getMonth(checkOutDate)
      ? format(checkInDate, "dd")
      : format(checkInDate, "dd MMM");
  const formattedCheckOut = format(checkOutDate, "dd MMM yyyy");
  const { days: duration } = intervalToDuration({
    start: checkInDate,
    end: checkOutDate,
  });
  const totalCost = duration && roomData.price * duration;
  const imgUrl = roomData.imgUrl[0];
  return (
    <div className="border rounded-lg w-100 grid p-8">
      <div>
        <div className="flex gap-4 pb-4">
          <ImgContainer imgUrl={imgUrl} />
          <div className="grid items-center">
            <div className="flex items-center gap-2">
              <Star size={40} />
              <h3 className=" font-semibold text-wrap">
                {roomData.details.title}
              </h3>
            </div>
            <div className="flex gap-2">
              <BedSingle />
              <p
                className="w-[200px] text-sm font-semibold text-nowrap overflow-ellipsis"
                style={{ overflow: "hidden" }}
              >
                {roomData.details.amenities.map((item, i) => {
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
      <div className="mt-4 relative">
        <h3>Trip Details</h3>
        <p className=" font-extralight text-sm">
          {formattedCheckIn} - {formattedCheckOut}
        </p>
        <p className=" font-extralight text-sm">1 adult</p>
        <SelectorDialog
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
        />
        <Separator className="bg-border -mx-1 my-1 h-px" />
      </div>
      <div className="mt-4 ">
        <h3>Price Details</h3>
        <p className="flex font-extralight text-sm">
          ${roomData.price} x {duration}{" "}
          {duration && duration > 1 ? "nights" : "night"}{" "}
          <span className="font-extralight text-sm ml-auto">${totalCost}</span>
        </p>
        <Separator className="bg-border mt-4 -mx-1 my-1 h-px" />
      </div>
      <div className="mt-4">
        <p className="flex">
          <span className="mr-auto">Total</span>
          <span className="ml-auto">${totalCost}</span>
        </p>
      </div>
    </div>
  );
}
export default CheckOutDetailCard;
