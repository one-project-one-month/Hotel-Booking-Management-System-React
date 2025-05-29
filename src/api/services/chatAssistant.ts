import { useMutation } from '@tanstack/react-query';
import { requestHotelRoomSuggestions } from '@/api/queries/chat-assistant';

export const useRequestRoomSuggestion = () => {
  return useMutation({
    mutationFn: requestHotelRoomSuggestions,
    mutationKey: ['requestRoomSuggestion'],
    onSuccess: (data) => {
      console.log('Suggestion Requested:', data);
    },
    onError: (error) => {
      console.error('Error requesting suggestion:', error);
    }
  });
};