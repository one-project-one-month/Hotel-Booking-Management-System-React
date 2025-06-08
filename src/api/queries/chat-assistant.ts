import { RoomAssistantAxios } from "@/config/api";


interface ChatData {
    query: string;
}

export const requestHotelRoomSuggestions = async (data: ChatData) : Promise<string> => {
    const response = await RoomAssistantAxios.post(
        import.meta.env.VITE_CHAT_ASSISTANT_API_URL as string,
        data
    );
    
    return response.data as string;
};