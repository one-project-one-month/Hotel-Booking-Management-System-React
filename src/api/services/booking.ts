import type { BookingResponse } from '@/types/api-response';
import { createBooking, type BookingPayload } from '../queries/booking';
import {  useQueryClient, type MutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCreateBookingOption = (): MutationOptions<BookingResponse, unknown, BookingPayload> => {
    const queryClient = useQueryClient();
    return {
        mutationFn: (payload: BookingPayload) => createBooking(payload),
        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey: ["booking"] });
            toast.success("Room booked successfully!")
          },
        }
}