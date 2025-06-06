import { toast } from "sonner";
import { loginUser, signupUser } from "../queries/auth";
import type { AuthResponse, ErrorResponse } from "@/types/auth-response";
import { useNavigate } from "react-router";
import type { SignupPayload } from "@/types/auth-payload";

export const useLogin = () => {
    const navigate = useNavigate()
    return {
        mutationFn: async (request: { email: string; password: string }) => loginUser(request),
        onSuccess: (response: AuthResponse) => {
            toast.success(response.message)
            localStorage.setItem("token", response.data.token);
            void navigate(-1)
        },
        onError: (error: ErrorResponse) => {
            toast.error(error instanceof Error ? error.message : "An error occurred during login");
        },
    }
}

export const useSignUp = () => {
    const navigate = useNavigate()
    return {
        mutationFn: async (request: SignupPayload) => signupUser(request),
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