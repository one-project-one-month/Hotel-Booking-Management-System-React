import { useRef, useState } from "react";
import PopoverContainer from "./popovercontainer";
import { Button } from "./ui/button";
import { Search as SearchIcon } from "lucide-react";
import clsx from "clsx";
import DatePicker from "@/components/date-picker";
import DateCard from "./date-card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import CardContainer from "@/components/card-container";
import GuestCount from "./guest-count";
import { Separator } from "@/components/ui/separator";
import { addDays, nextFriday } from "date-fns";
import { useNavigate } from "react-router";

export default function Search() {
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [inputValues, setInputValues] = useState<{
    date: Date | undefined,
    guestCount: {
      adults: number,
      children: number
    } | undefined,
  }>({
    date: undefined,
    guestCount: undefined,
  })
  const [activeLabel, setActiveLabel] = useState<"Today" | "Tomorrow" | "This Weekend" | undefined>(undefined)
  const navigate = useNavigate()

  const handleInputChange = (field: string, value: string | number | Date) => {
    setInputValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSelect = (label: "Today" | "Tomorrow" | "This Weekend") => {
    setActiveLabel(label)

    const today = new Date()
    let selectedDate = today

    if (label === "Tomorrow") {
      selectedDate = addDays(today, 1)
    } else if (label === "This Weekend") {
      selectedDate = nextFriday(today)
    }

    handleInputChange("date", selectedDate)
  }

  const handleCalenderSelect = (date: Date | undefined) => {
    setActiveLabel(undefined)
    handleInputChange("date", new Date(date ?? Date.now()));
  }

  const handleGuestCountChange = (type: "adults" | "children", value: number) => {
    setInputValues(prev => ({
      ...prev,
      guestCount: {
        adults: type === "adults" ? value : prev.guestCount?.adults ?? 1,
        children: type === "children" ? value : prev.guestCount?.children ?? 0,
      },
    }))
  }

  const handleSearch = () => {
    const adults = inputValues.guestCount?.adults ?? 1;
    const children = inputValues.guestCount?.children ?? 0;
    const totalGuests = adults + children;
    void navigate(`/rooms/search/${totalGuests.toString()}`);
  }


  return (
    <div className="flex justify-center items-center px-2">
      <section
        className={clsx(
          "flex rounded-full shadow-md gap-2 items-center w-full md:w-lg lg:w-xl max-w-3xl",
          "transition-all duration-500 ease-in-out",
          isFocused
            ? "bg-zinc-300 shadow-lg"
            : "bg-white shadow-md border border-transparent"
        )}
      >
        <PopoverContainer
          id="date"
          title="Date"
          label="Add dates"
          value={inputValues.date ? inputValues.date.toLocaleDateString() : ""}
          isActive={activePopover === "date"}
          setActivePopover={setActivePopover}
          setIsFocused={setIsFocused}
          blurTimeoutRef={blurTimeoutRef}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <section className="grid grid-cols-2 md:grid-cols-1 gap-2 md:w-full">
              <DateCard
                date={inputValues.date}
                label="Today"
                isActive={activeLabel === "Today"}
                onSelect={() => { handleSelect("Today") }}
              />
              <DateCard 
                date={inputValues.date}
                label="Tomorrow" 
                isActive={activeLabel === "Tomorrow"} 
                onSelect={() => { handleSelect("Tomorrow") }} />
              <DateCard 
                date={inputValues.date}
                label="This Weekend" 
                isActive={activeLabel === "This Weekend"} 
                onSelect={() => { handleSelect("This Weekend") }} 
              />
              <div className="md:hidden">
                <Popover>
                  <PopoverTrigger asChild>
                    <div tabIndex={0}>
                      <CardContainer>
                        <h3 className="text-sm font-medium">Choose Dates</h3>
                      </CardContainer>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="me-10 w-max">
                    <DatePicker initialDate={inputValues.date} onSelect={handleCalenderSelect} />
                  </PopoverContent>
                </Popover>
              </div>
            </section>
            <div className="hidden md:block">
              <DatePicker initialDate={inputValues.date} onSelect={handleCalenderSelect} />
            </div>
          </div>
        </PopoverContainer>
        <PopoverContainer
          id="guest"
          title="Guest"
          label="Add guests"
          value={
            inputValues.guestCount
              ? (inputValues.guestCount.adults + inputValues.guestCount.children).toString()
              : ""
          }
          isActive={activePopover === "guest"}
          setActivePopover={setActivePopover}
          setIsFocused={setIsFocused}
          blurTimeoutRef={blurTimeoutRef}
        >
          <section className="py-3">
            <GuestCount
              isAdult={true}
              count={inputValues.guestCount?.adults ?? 1}
              onChange={(newCount) => { handleGuestCountChange("adults", newCount) }}
            />
            <Separator className="w-full my-4" />
            <GuestCount
              isAdult={false}
              count={inputValues.guestCount?.children ?? 0}
              onChange={(newCount) => { handleGuestCountChange("children", newCount) }}
            />
          </section>
        </PopoverContainer>

        <div className="my-2 pe-3">
          <Button
            onClick={handleSearch}
            disabled={!inputValues.date && !inputValues.guestCount}
            className="rounded-full cursor-pointer ml-auto w-12 h-12 shadow-md bg-pink-600 hover:bg-pink-700 focus:bg-pink-700"
          >
            <SearchIcon />
          </Button>
        </div>
      </section>
    </div>
  );
}
