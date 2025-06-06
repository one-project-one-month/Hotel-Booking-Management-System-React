import type { Profile } from "@/types/profile"
import { useQuery } from "@tanstack/react-query"
import { fetchUserInfo } from "../queries/profile"

export const useFetchUserProfile = () => {
    return useQuery<Profile>({
        queryKey: ["profile"],
        queryFn: fetchUserInfo
    })
}