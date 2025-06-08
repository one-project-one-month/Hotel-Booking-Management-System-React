/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLocation, useNavigate } from "react-router";
import CheckOutPaymentCard from "./components/CheckOutPaymentCard";
import CheckOutDetailCard from "./components/CheckOutDetailCard";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function RoomCheckout() {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const roomData = location.state?.roomData;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap justify-center gap-12 h-full mt-12 relative">
        <Button
          onClick={() => {
            void navigate(-1);
          }}
          className="absolute rounded-full left-[10%] p-4"
        >
          <MoveLeft size={20} />
        </Button>
        <CheckOutPaymentCard roomData={roomData} />
        <CheckOutDetailCard roomData={roomData} />
      </div>
    </>
  );
}
