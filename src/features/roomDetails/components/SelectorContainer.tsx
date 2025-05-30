import { Card, CardContent } from "@/components/ui/card";

import GuestSelectorContainer from "./GuestSelectorContainer";
import DateSelector from "./DateSelector";
import useGuestLimit from "@/hooks/useGuestLimit";

export default function Picker() {
  const { maxGuestCount } = useGuestLimit()
  return (
    <div className="w-full h-max md:w-[400px] mx-auto flex-1">
      <Card className="border rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <DateSelector />
          <GuestSelectorContainer maxGuests={maxGuestCount}/>
        </CardContent>
      </Card>
    </div>
  );
}
