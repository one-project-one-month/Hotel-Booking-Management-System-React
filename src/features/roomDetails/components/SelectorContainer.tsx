import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import GuestSelectorContainer from "./GuestSelectorContainer";
import DateSelector from "./DateSelector";

export default function Picker() {
  return (
    <div className="w-full max-w-md mx-auto flex-1">
      <Card className="border rounded-lg overflow-hidden">
        <CardContent className="p-0">
          <DateSelector />
          <GuestSelectorContainer />
        </CardContent>
      </Card>

      <Button className="w-full mt-4 py-6 rounded-full bg-rose-500 hover:bg-rose-600 text-white">
        Check availability
      </Button>
    </div>
  );
}
