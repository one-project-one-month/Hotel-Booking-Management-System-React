import type { BookingResponse } from '@/types/api-response';
import { createBooking, type BookingPayload } from '../queries/booking';
import {  useQueryClient, type MutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';
import useUserInputContext from '@/hooks/useUserInputContext';
import type { Dispatch, SetStateAction } from 'react';

export const useCreateBookingOption = (setOpenReceipt: Dispatch<SetStateAction<boolean>>): MutationOptions<BookingResponse, Error, BookingPayload> => {
  const queryClient = useQueryClient();
  const {resetContext} = useUserInputContext()
    return {
        mutationFn: (payload: BookingPayload) => createBooking(payload),
        onSuccess: () => {
           void queryClient.invalidateQueries({ queryKey: ["booking","user"] });
          toast.success("Room booked successfully!")
          setOpenReceipt(true)
          resetContext()
      },
      onError: (error) => {
        toast.error(error.message )
        console.error("Error reserving room:", error)
        }
        }
}