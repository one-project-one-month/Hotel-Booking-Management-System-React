import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import useUserInputContext from "@/hooks/useUserInputContext";
import GuestSelectorConent from "@/features/roomDetails/components/GuestSelectorConent";

function SelectorDialog() {
  const { checkInDate, checkOutDate, guestCount, setCheckIn, setCheckOut} = useUserInputContext();


  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: checkInDate,
    to: checkOutDate,
  });

  const setDate = (range: DateRange | undefined) => {
    setDateRange(range);
    setCheckIn(range?.from);
    setCheckOut(range?.to);
  };

  return (
    <Dialog>
      <DialogTrigger className="border bg-gray-200 hover:bg-gray-300 cursor-pointer text-xs py-1 px-3 rounded-md absolute top-0 right-0">
        Change
      </DialogTrigger>
      <DialogContent className=" min-w-fit p-8">
        <DialogHeader>
          <DialogTitle>Change reservation details</DialogTitle>
          <DialogDescription>Change reservation date</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="account" className="">
          <TabsList className=" flex self-center p-0">
            <TabsTrigger
              className="w-full h-full border p-4 m-0"
              value="calendar"
            >
              Calendar
            </TabsTrigger>
            <TabsTrigger
              className="w-full h-full border p-4 m-0"
              value="guests"
            >
              Guests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="calendar">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDate}
              numberOfMonths={2}
              disabled={(date) => date < new Date()}
              className="rounded-md  flex"
            />
            <div className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setDateRange(undefined);
                  setCheckIn(undefined);
                  setCheckOut(undefined);
                }}
              >
                Clear dates
              </Button>
              <DialogClose>
                <Button size="sm">Done</Button>
              </DialogClose>
            </div>
          </TabsContent>
          <TabsContent value="guests">
            <GuestSelectorConent
              guestCount={guestCount}
              setInputData={(data: { checkInDate?: Date; checkOutDate?: Date; guestCount?: number }) => {
                setCheckIn(data.checkInDate);
                setCheckOut(data.checkOutDate);
              }}
            />
            <DialogClose className="flex w-full">
              <Button className="ml-auto" size="sm">
                Done
              </Button>
            </DialogClose>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
export default SelectorDialog;
