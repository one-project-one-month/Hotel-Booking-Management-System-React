import Axios from "@/config/api";
import type { ApiResponse } from "@/types/api-response";
import type { Profile } from "@/types/profile";

export async function fetchUserInfo(): Promise<Profile> {
    // For showing user profile
    const userId = "82a74ba3-9238-4fdc-bee1-222b4c87c395"
    const response = await Axios.get<ApiResponse<Profile>>(`/users/${userId}`)

    return response.data.data
}