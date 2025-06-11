import { BookingContext } from "@/context/UserInputContext";
import { useContext } from "react";

function useGuestLimit() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error(
            "useGuestLimit must be used within a BookingContextProvider"
        );
    }

    const { inputData, setInputData } = context;

    const setMaxGuestCount = (value: number) => {
        setInputData((prev) => ({ ...prev, maxGuestCount: value }));
    };

    return {
        maxGuestCount: inputData.maxGuestCount,
        setMaxGuestCount,
    };
}

export default useGuestLimit;
