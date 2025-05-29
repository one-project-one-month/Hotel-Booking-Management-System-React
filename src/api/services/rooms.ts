import { useQuery } from '@tanstack/react-query';
import { fetchRooms, fetchRoomById } from '@/api/queries/room';
import type { Room } from '@/types/rooms';


export const useFetchRooms = () => {
    return useQuery<Room[]>({
        queryKey: ['rooms'],
        queryFn: fetchRooms,
    });
};

export const useFetchRoomById = (roomId: string) => {
    return useQuery<Room>({
        queryKey: ['room', roomId],
        queryFn: () => fetchRoomById(roomId),
        enabled: !!roomId,
    });
}