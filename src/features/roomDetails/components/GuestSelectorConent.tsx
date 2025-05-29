import type { UserInput } from "@/context/UserInputContext";
import type { GuestCount, GuestType } from "./GuestSelectorContainer";
import GuestSelector from "./GuestSelector";

type GuestSelectorConentProps = {
  guestCount: GuestCount;
  setInputData: React.Dispatch<React.SetStateAction<UserInput>>;
};

function GuestSelectorConent({
  guestCount,
  setInputData,
}: GuestSelectorConentProps) {
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
    </div>
  );
}
export default GuestSelectorConent;
