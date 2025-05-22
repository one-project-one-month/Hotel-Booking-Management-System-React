import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
export default function DateSelector() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarFocus, setCalendarFocus] = useState<"checkin" | "checkout">(
    "checkin"
  );

  const formatDateOrPlaceholder = (
    date: Date | undefined,
    placeholder: string
  ) => {
    return date ? format(date, "MM/dd/yyyy") : placeholder;
  };

  return (
    <div className="grid grid-cols-2 divide-x">
      <div className="p-4 border-b">
        <div className="text-sm font-medium uppercase">CHECK-IN</div>
        <Popover
          open={calendarFocus === "checkin" && calendarOpen}
          onOpenChange={(open) => {
            if (open) {
              setCalendarFocus("checkin");
            }
            setCalendarOpen(open);
          }}
        >
          <PopoverTrigger asChild>
            <div
              className="cursor-pointer text-gray-500 text-base font-normal"
              onClick={() => {
                setCalendarFocus("checkin");
                setCalendarOpen(true);
              }}
            >
              {formatDateOrPlaceholder(checkInDate, "Add date")}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start" side="bottom">
            <div className="p-4">
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Select dates</h3>
                  <p className="text-sm text-gray-500">
                    Add your travel dates for exact pricing
                  </p>
                </div>
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={(date) => {
                    setCheckInDate(date);
                    setCalendarFocus("checkout");
                  }}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date()}
                  className="rounded-md"
                />
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCheckInDate(undefined);
                      setCheckOutDate(undefined);
                    }}
                  >
                    Clear dates
                  </Button>
                  <Button size="sm" onClick={() => setCalendarOpen(false)}>
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="p-4 border-b">
        <div className="text-sm font-medium uppercase">CHECKOUT</div>
        <Popover
          open={calendarFocus === "checkout" && calendarOpen}
          onOpenChange={(open) => {
            if (open) {
              setCalendarFocus("checkout");
            }
            setCalendarOpen(open);
          }}
        >
          <PopoverTrigger asChild>
            <div
              className="cursor-pointer text-gray-500 text-base font-normal"
              onClick={() => {
                setCalendarFocus("checkout");
                setCalendarOpen(true);
              }}
            >
              {formatDateOrPlaceholder(checkOutDate, "Add date")}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start" side="bottom">
            <div className="p-4">
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Select dates</h3>
                  <p className="text-sm text-gray-500">
                    Add your travel dates for exact pricing
                  </p>
                </div>
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={(date) => {
                    setCheckOutDate(date);
                    setCalendarOpen(false);
                  }}
                  numberOfMonths={2}
                  disabled={(date) =>
                    !!(
                      date < new Date() ||
                      (checkInDate && date <= checkInDate)
                    )
                  }
                  className="rounded-md"
                />
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCheckInDate(undefined);
                      setCheckOutDate(undefined);
                    }}
                  >
                    Clear dates
                  </Button>
                  <Button size="sm" onClick={() => setCalendarOpen(false)}>
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
