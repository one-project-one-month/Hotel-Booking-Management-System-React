import { useEffect } from "react";
import { useNavigate} from "react-router";

const useRedirectIfAuthenticated = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            void navigate("/", { replace: true });
        }
    }, [navigate, location]);
};

export default useRedirectIfAuthenticated;