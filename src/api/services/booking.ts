import type { BookingResponse } from '@/types/api-response';
import { createBooking, type BookingPayload } from '../queries/booking';
import {  useQueryClient, type MutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import useUserInputContext from '@/hooks/useUserInputContext';

export const useCreateBookingOption = (): MutationOptions<BookingResponse, unknown, BookingPayload> => {
    const navigate = useNavigate()
  const queryClient = useQueryClient();
  const {resetContext} = useUserInputContext()
    return {
        mutationFn: (payload: BookingPayload) => createBooking(payload),
        onSuccess: () => {
           void queryClient.invalidateQueries({ queryKey: ["booking","user"] });
          toast.success("Room booked successfully!")
          setTimeout(() => void navigate('/'), 500)
          resetContext()
          },
        }
}