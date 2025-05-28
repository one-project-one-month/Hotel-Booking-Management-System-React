import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type GuestCount = {
  adults: number;
  children: number;
  infants: number;
  pets: number;
};

type UserInput = {
  checkIn: Date | "";
  checkOut: Date | "";
  guestCount: GuestCount;
};
type ProviderProps = {
  inputData: UserInput;
  setInputData?: Dispatch<SetStateAction<UserInput>>;
};

const UserInputContext = createContext<ProviderProps | undefined>(undefined);

const UserInputContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputData, setInputData] = useState<UserInput>({
    checkIn: "",
    checkOut: "",
    guestCount: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
  });
  useEffect(() => {
    console.log(inputData);
  }, [inputData]);
  return (
    <UserInputContext.Provider value={{ inputData, setInputData }}>
      {children}
    </UserInputContext.Provider>
  );
};

export { UserInputContext, UserInputContextProvider };
