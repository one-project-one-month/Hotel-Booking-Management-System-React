import type { Room } from '@/types/rooms';
import { useQuery } from '@tanstack/react-query';
import { fetchRooms, fetchRoomById } from '@/api/queries/room';


export const useFetchRooms = () => {
    return useQuery<Room[], Error>({
        queryKey: ['rooms'],
        queryFn: fetchRooms,
    });
};

export const useFetchRoomById = (roomId: string) => {
    return useQuery<Room, Error>({
        queryKey: ['room', roomId],
        queryFn: () => fetchRoomById(roomId),
        enabled: !!roomId, // Only run the query if roomId is provided
    });
}