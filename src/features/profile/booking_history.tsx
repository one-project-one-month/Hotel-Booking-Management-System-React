import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import BagIcon from "@/assets/bag.png";
export default function BookingHistory() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-8">
      <img src={BagIcon} alt="No Booking" className="w-40 h-40 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No History Yet</h2>

      <p className="text-lg text-gray-600 mb-4">Looks like your suitcase is still waiting—let’s fix that!</p>

      <Link to={"/"}>
        <Button className="mt-3 bg-pink-600 hover:bg-pink-700 cursor-pointer px-12 py-6 rounded-xl shadow-lg">Book a room</Button>
      </Link>
    </div>
  );
}
