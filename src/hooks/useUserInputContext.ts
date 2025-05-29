import { UserInputContext } from "@/context/UserInputContext";
import { useContext } from "react";

function useUserInputContext() {
    const context = useContext(UserInputContext);
    if (!context || !context.inputData || !context.setInputData) {
        throw new Error(
          "UserInputContext must be used within a UserInputContextProvider"
        );
      }
    return context
}

export default useUserInputContext