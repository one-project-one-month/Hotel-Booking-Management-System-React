import GuestSelector from "@/features/roomDetails/components/GuestSelector";
import type {
  GuestCount,
  GuestType,
} from "@/features/roomDetails/components/GuestSelectorContainer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function GuestSelectorContent() {
  const [guestCount, setGuestCount] = useState<GuestCount>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const totalGuests = guestCount.adults + guestCount.children;

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
        This place has a maximum of 3 guests, not including infants. Pets aren't
        allowed.
      </p>

      <div className="flex justify-end">
        <Button size="sm">Done</Button>
      </div>
    </div>
  );
}
export default GuestSelectorContent;
