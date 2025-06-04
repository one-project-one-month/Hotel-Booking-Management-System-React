import ReceiptCard from "./components/ReceiptCard";
import { useFetchUserById } from "@/api/services/user";

export default function Receipt() {
  const { data: user } = useFetchUserById(
    "959e8de4-5fb0-4b91-88ce-a0d3dbdf41ee"
  );
  const bookingData = user?.bookings ?? [];
  console.log(bookingData);
  return (
    <div className=" h-[90vh] overflow-scroll p-4 flex flex-col items-center">
      <h3 className="text-center my-4 font-semibold text-xl">
        Your Booking Receipts
      </h3>
      {bookingData.length !== 0 && user && (
        <div className="flex flex-wrap gap-4 justify-center">
          {bookingData.map((_, i) => (
            <ReceiptCard userData={user} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
