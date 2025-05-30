import type { GuestCount } from "@/types/booking";
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

// Add maxGuestCount to UserInput interface to control the maximum number of guests
export interface UserInput {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guestCount: GuestCount;
  maxGuestCount: number
};

interface ProviderProps {
  inputData: UserInput;
  setInputData: Dispatch<SetStateAction<UserInput>>;
};

// name changed from UserInputContext to BookingContext since this context is used for booking-related data
const BookingContext =  createContext<ProviderProps | undefined>(undefined);

const UserInputContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputData, setInputData] = useState<UserInput>({
    checkIn: undefined,
    checkOut: undefined,
    guestCount: {
      adults: 0,
      children: 0,
    },
    maxGuestCount: 0,
  });
  return (
    <BookingContext.Provider value={{ inputData, setInputData }}>
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, UserInputContextProvider };
