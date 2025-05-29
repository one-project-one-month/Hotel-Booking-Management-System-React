import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import useUserInputContext from "@/hooks/useUserInputContext";
import GuestSelectorConent from "./GuestSelectorConent";

export type GuestType = "adults" | "children" | "infants" | "pets";

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export default function GuestSelectorContainer() {
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const { inputData, setInputData } = useUserInputContext();
  const guestCount = inputData.guestCount;

  const totalGuests = guestCount.adults + guestCount.children;

  const getGuestText = () => {
    const total = totalGuests;
    return `${total} ${total === 1 ? "guest" : "guests"}`;
  };

  return (
    <div className="p-4">
      <div className="text-sm font-medium uppercase mb-1">GUESTS</div>
      <Popover open={isGuestSelectorOpen} onOpenChange={setIsGuestSelectorOpen}>
        <PopoverTrigger asChild>
          <div
            className="cursor-pointer flex justify-between items-center text-base font-normal"
            onClick={() => setIsGuestSelectorOpen(!isGuestSelectorOpen)}
          >
            {getGuestText()}
            {isGuestSelectorOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0" align="start" side="bottom">
          <GuestSelectorConent
            guestCount={guestCount}
            setInputData={setInputData}
          />
          <div className="flex justify-end">
            <Button
              variant="ghost"
              className="underline"
              onClick={() => setIsGuestSelectorOpen(false)}
            >
              Close
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
