import { useLocation, useNavigate } from "react-router";
import CheckOutPaymentCard from "./components/CheckOutPaymentCard";
import CheckOutDetailCard from "./components/CheckOutDetailCard";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
export default function RoomCheckout() {
  const location = useLocation();
  const roomData = location.state?.roomData;

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-12 h-full mt-12 relative">
        <Button
          onClick={() => navigate(-1)}
          className="absolute rounded-full left-[10%] p-4"
        >
          <MoveLeft size={20} />
        </Button>
        <CheckOutPaymentCard />
        <CheckOutDetailCard roomData={roomData} />
      </div>
    </>
  );
}
