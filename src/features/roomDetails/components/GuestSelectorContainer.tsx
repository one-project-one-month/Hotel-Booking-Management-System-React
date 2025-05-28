import { useContext, useState } from "react";

import GuestSelector from "./GuestSelector";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { UserInputContext } from "@/context/UserInputContext";

export type GuestType = "adults" | "children" | "infants" | "pets";

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export default function GuestSelectorContainer() {
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const context = useContext(UserInputContext);
  if (!context || !context.setInputData) {
    throw new Error(
      "UserInputContext must be used within a UserInputContextProvider"
    );
  }
  const { inputData, setInputData } = context;
  const guestCount = inputData.guestCount;

  const totalGuests = guestCount.adults + guestCount.children;

  const getGuestText = () => {
    const total = totalGuests;
    return `${total} ${total === 1 ? "guest" : "guests"}`;
  };

  const handleGuestChange = (type: GuestType, increment: boolean) => {
    setInputData((prev) => {
      const newCount = { ...prev.guestCount };
      if (increment) {
        if (
          (type === "adults" || type === "children") &&
          newCount.adults + newCount.children >= 3
        ) {
          return prev;
        }
        newCount[type] += 1;
      } else {
        if (type === "adults" && newCount.adults <= 1) return prev;
        if (newCount[type] <= 0) return prev;
        newCount[type] -= 1;
      }
      return { ...prev, guestCount: newCount };
    });
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
          <div className="p-4 space-y-6">
            <GuestSelector
              title="Adults"
              subtitle="Age 13+"
              count={guestCount.adults}
              onIncrement={() => handleGuestChange("adults", true)}
              onDecrement={() => handleGuestChange("adults", false)}
            />

            <GuestSelector
              title="Children"
              subtitle="Ages 2–12"
              count={guestCount.children}
              onIncrement={() => handleGuestChange("children", true)}
              onDecrement={() => handleGuestChange("children", false)}
            />

            <GuestSelector
              title="Infants"
              subtitle="Under 2"
              count={guestCount.infants}
              onIncrement={() => handleGuestChange("infants", true)}
              onDecrement={() => handleGuestChange("infants", false)}
            />

            <GuestSelector
              title="Pets"
              subtitle={
                <a href="#" className="underline">
                  Bringing a service animal?
                </a>
              }
              count={guestCount.pets}
              onIncrement={() => handleGuestChange("pets", true)}
              onDecrement={() => handleGuestChange("pets", false)}
            />

            <p className="text-sm">
              This place has a maximum of 3 guests, not including infants. Pets
              aren't allowed.
            </p>

            <div className="flex justify-end">
              <Button
                variant="ghost"
                className="underline"
                onClick={() => setIsGuestSelectorOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
