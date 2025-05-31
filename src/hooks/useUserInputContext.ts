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
    const setCheckOut = (date: Date | undefined) => {
        setInputData((prev) => ({ ...prev, checkOut: date }));
    };

    const setGuestCount = (guestCount: { adults: number; children: number }) => {
        setInputData((prev) => ({ ...prev, guestCount }));
    }

    return {
      checkInDate: inputData.checkIn,
      checkOutDate: inputData.checkOut,
      guestCount: inputData.guestCount,
      setCheckIn,
      setCheckOut,
      setGuestCount
    }
}

export default useUserInputContext
