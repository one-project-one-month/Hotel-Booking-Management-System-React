import type { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../queries/user";

export const useFetchUserById = (userId: string) => {
    return useQuery<User>({
        queryKey: ['user', userId],
        queryFn: () => fetchUserById(userId),
        enabled: !!userId,
    });
}