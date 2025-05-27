import type { Room } from '@/types/rooms';
import { useQuery } from '@tanstack/react-query';
import { fetchRooms } from '@/api/queries/room';


export const useFetchRooms = () => {
    return useQuery<Room[], Error>({
        queryKey: ['rooms'],
        queryFn: fetchRooms,
    });
};