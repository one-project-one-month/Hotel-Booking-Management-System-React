import { useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { intervalToDuration } from "date-fns";
import { createBooking, type BookingPayload } from "@/api/queries/booking";
import { toast } from "sonner";
import useUserInputContext from "@/hooks/useUserInputContext";
import type { Room } from "@/types/rooms";

interface CheckOutPaymentCardProps {
  roomData: Room;
};

function CheckOutPaymentCard({ roomData }: CheckOutPaymentCardProps) {
  const { checkInDate, checkOutDate, guestCount } = useUserInputContext();

  // Calculate duration and total cost
  const { days: duration = 0 } =
    checkInDate && checkOutDate
      ? intervalToDuration({ start: checkInDate, end: checkOutDate })
      : { days: 0 };
  const adultsCount = guestCount.adults;
  const totalCost = duration && roomData.price * duration;
  const [openItem, setOpenItem] = useState<string | undefined>("item-1");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkInDate) {
      toast("Check-in date is required.");
      return;
    }
    const payload: BookingPayload = {
      userId: "3dd80c5c-cc5f-4fed-9691-32aa502ddaa",
      roomId: roomData.id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guestCount: adultsCount,
      totalAmount: totalCost,
    };
    const result = createBooking(payload);
    console.log(result);
  };
  return (
    <div className="border rounded-lg min-w-100  p-8 ">
      <h3 className=" font-bold text-lg mb-4">Comfirm and Pay</h3>
      <Accordion
        className="flex flex-col gap-8"
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        <AccordionItem
          className="border rounded-lg group py-2 px-4"
          value="item-1"
        >
          <AccordionTrigger className="hover:no-underline cursor-pointer">
            1. Choose when to pay
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center justify-between space-x-2">
                <Label className="font-light" htmlFor="option-one">
                  Pay ${totalCost} SGD now
                </Label>
                <RadioGroupItem value="option-one" id="option-one" />
              </div>
              <Separator className="border w-full my-4" />
              <div className="flex justify-between space-x-2">
                <Label className="font-light " htmlFor="option-two">
                  <p className="flex flex-col gap-4">
                    Pay part now, part later
                    <span className="block max-w-[300px] text-xs text-wrap text-gray-500">
                      ${totalCost * 0.25} SGD now, ${totalCost} SGD charged on
                      14 Aug. No extra fees.
                    </span>
                  </p>
                </Label>
                <RadioGroupItem value="option-two" id="option-two" />
              </div>
            </RadioGroup>
            <div className="flex justify-end mt-4">
              <Button
                className="px-4 py-2 rounded transition"
                onClick={() => { setOpenItem("item-2"); }}
                type="button"
              >
                Next
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border rounded-lg py-2 px-4" value="item-2">
          <AccordionTrigger>2. Add a payment method</AccordionTrigger>
          <AccordionContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name">Account Name:</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="border px-4 py-2 rounded-md m-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="accountNo">Bank Account No:</label>
                <input
                  name="accountNo"
                  id="accountNo"
                  type="text"
                  className="border px-4 py-2 rounded-md m-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pin">Secret Pin:</label>
                <input
                  name="pin"
                  id="pin"
                  type="password"
                  className="border px-4 py-2 rounded-md m-2"
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  className="px-4 py-2 rounded transition"
                  onClick={() => toast("Booking has been successfully placed")}
                >
                  Pay
                </Button>
              </div>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export default CheckOutPaymentCard;
