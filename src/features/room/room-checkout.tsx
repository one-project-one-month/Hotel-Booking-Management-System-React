/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLocation, useNavigate } from "react-router";
import CheckOutPaymentCard from "./components/CheckOutPaymentCard";
import CheckOutDetailCard from "./components/CheckOutDetailCard";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import type { Room } from "@/types/rooms";

export default function RoomCheckout() {

  interface LocationState {
    roomData?: Room;
  }

  const location = useLocation();
  const state = location.state as LocationState;
  const roomData = state.roomData;
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
        {roomData && (
          <>
            <CheckOutPaymentCard roomData={roomData} />
            <CheckOutDetailCard roomData={roomData} />
          </>
        )}
      </div>
    </>
  );
}
