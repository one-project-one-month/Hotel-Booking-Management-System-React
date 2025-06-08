import type { GuestCount, GuestType } from "@/types/booking";
import GuestSelector from "./GuestSelector";
import { useEffect, useState } from "react";
import useGuestLimit from "@/hooks/useGuestLimit";

interface GuestSelectorConentProps {
  guestCount: GuestCount;
  setGuestCount: (guestCount: { adults: number; children: number }) => void;
}

function GuestSelectorConent({
  guestCount,
  setGuestCount,
}: GuestSelectorConentProps) {
  const { maxGuestCount } = useGuestLimit();
  const [totalGuestCount, setTotalGuestCount] = useState<GuestCount>({
    adults: guestCount.adults,
    children: guestCount.children,
  });
  const totalGuests = totalGuestCount.adults + totalGuestCount.children;
  const handleGuestChange = (type: GuestType, increment: boolean) => {
    setTotalGuestCount((prev) => {
      const newCount = { ...prev };

      if (increment) {
        // Maximum 3 guests (adults + children)
        if (totalGuests >= maxGuestCount) {
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
  useEffect(() => {
    setGuestCount(totalGuestCount);
  }, [totalGuestCount]);

  return (
    <div className="p-4 space-y-6">
      <GuestSelector
        title="Adults"
        subtitle="Age 13+"
        count={totalGuestCount.adults}
        onIncrement={() => {
          handleGuestChange("adults", true);
        }}
        onDecrement={() => {
          handleGuestChange("adults", false);
        }}
      />

      <GuestSelector
        title="Children"
        subtitle="Ages 2–12"
        count={totalGuestCount.children}
        onIncrement={() => {
          handleGuestChange("children", true);
        }}
        onDecrement={() => {
          handleGuestChange("children", false);
        }}
      />

      <p className="text-sm">
        This place has a maximum of 3 guests, not including infants. Pets aren't
        allowed.
      </p>
    </div>
  );
}
export default GuestSelectorConent;
