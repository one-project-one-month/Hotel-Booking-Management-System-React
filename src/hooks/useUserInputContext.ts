import { BookingContext } from "@/context/UserInputContext";
import { useContext } from "react";

function useUserInputContext() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error(
          "BookingContext must be used within a BookingContextProvider"
        );
    }
    
    const { inputData, setInputData } = context;
    
    const setCheckIn = (date: Date | undefined) => {
        setInputData((prev) => ({ ...prev, checkIn: date }));
    };
    const setRoomPrice = (roomPrice:number) => {
        setInputData((prev) => ({ ...prev, roomPrice: roomPrice }));
    };
    const setCheckOut = (date: Date | undefined) => {
        setInputData((prev) => ({ ...prev, checkOut: date }));
    };

    const setGuestCount = (guestCount: { adults: number; children: number }) => {
        setInputData((prev) => ({ ...prev, guestCount }));
    }
    const resetContext = () => {
        setInputData(()=>({checkIn: undefined,
            checkOut: undefined,
            guestCount: {
              adults: 0,
              children: 0,
            },
          maxGuestCount: 0,
          roomPrice: 0
        }))
    }
    return {
      checkInDate: inputData.checkIn,
      checkOutDate: inputData.checkOut,
      guestCount: inputData.guestCount,
      roomPrice: inputData.roomPrice,
      setCheckIn,
      setCheckOut,
      setGuestCount,
      resetContext,
      setRoomPrice
    }
}

export default useUserInputContext
