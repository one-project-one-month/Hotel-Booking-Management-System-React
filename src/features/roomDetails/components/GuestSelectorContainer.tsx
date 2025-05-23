import { useState } from "react";

import GuestSelector from "./GuestSelector";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export type GuestType = "adults" | "children" | "infants" | "pets";

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export default function GuestSelectorContainer() {
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);

  const [guestCount, setGuestCount] = useState<GuestCount>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const totalGuests = guestCount.adults + guestCount.children;

  const getGuestText = () => {
    const total = totalGuests;
    return `${total} ${total === 1 ? "guest" : "guests"}`;
  };

  const handleGuestChange = (type: GuestType, increment: boolean) => {
    setGuestCount((prev) => {
      const newCount = { ...prev };

      if (increment) {
        // Maximum 3 guests (adults + children)
        if ((type === "adults" || type === "children") && totalGuests >= 3) {
          return prev;
        }
        newCount[type] += 1;
      } else {
        if (type === "adults" && prev.adults <= 1) return prev;
        if (prev[type] <= 0) return prev;
        newCount[type] -= 1;
      }

      return newCount;
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
