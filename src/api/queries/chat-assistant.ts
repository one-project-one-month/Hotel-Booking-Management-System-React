import axios from 'axios';

interface ChatData {
    query: string;
}

export const requestHotelRoomSuggestions = async (data: ChatData) => {
    const response = await axios.post(
        import.meta.env.VITE_CHAT_ASSISTANT_API_URL,
        data
    );
    
    return response.data;
};