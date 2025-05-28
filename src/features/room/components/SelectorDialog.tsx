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
import { useState, useContext } from "react";
import type { DateRange } from "react-day-picker";
import GuestSelectorContent from "./GuestSelectorContent";
import { UserInputContext } from "@/context/UserInputContext";

function SelectorDialog() {
  const context = useContext(UserInputContext);
  if (!context || !context.inputData || !context.setInputData) {
    throw new Error(
      "UserInputContext must be used within a UserInputContextProvider"
    );
  }
  const { inputData, setInputData } = context;

  const checkInDate = inputData.checkIn
    ? new Date(inputData.checkIn)
    : undefined;
  const checkOutDate = inputData.checkOut
    ? new Date(inputData.checkOut)
    : undefined;

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: checkInDate,
    to: checkOutDate,
  });

  const setDate = (range: DateRange | undefined) => {
    setDateRange(range);
    setInputData((prev) => ({
      ...prev,
      checkIn: range?.from ?? "",
      checkOut: range?.to ?? "",
    }));
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
                  setInputData((prev) => ({
                    ...prev,
                    checkIn: "",
                    checkOut: "",
                  }));
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
            <GuestSelectorContent />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
export default SelectorDialog;
