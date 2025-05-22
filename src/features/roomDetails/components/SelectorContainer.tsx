import { Card, CardContent } from "@/components/ui/card";

import GuestSelectorContainer from "./GuestSelectorContainer";
import DateSelector from "./DateSelector";

export default function Picker() {
  return (
    <div className="w-full h-max md:w-[500px] mx-auto flex-1">
      <Card className="border rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <DateSelector />
          <GuestSelectorContainer />
        </CardContent>
      </Card>
    </div>
  );
}
