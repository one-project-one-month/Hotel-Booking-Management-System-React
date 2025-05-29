import { createBooking, type BookingPayload } from '../queries/booking';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateBooking = (payload: BookingPayload) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => createBooking(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["booking"] });
          },
        })
}