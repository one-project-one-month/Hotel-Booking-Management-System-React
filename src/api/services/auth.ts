import { toast } from "sonner";
import { loginUser } from "../queries/auth";
import type { AuthResponse, ErrorResponse } from "@/types/auth-response";
import { useNavigate } from "react-router";

export const useLogin = () => {
    const navigate = useNavigate()
    return {
        mutationFn: async (request: { email: string; password: string }) => loginUser(request),
        onSuccess: (response: AuthResponse) => {
            toast.success(response.message)
            localStorage.setItem("token", response.data.token);
            void navigate("/")
        },
        onError: (error: ErrorResponse) => {
            toast.error(error instanceof Error ? error.message : "An error occurred during login");
        },
    }
}