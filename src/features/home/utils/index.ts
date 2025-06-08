import { FAVS_KEY } from "@/config/constants";
import type { Room } from "@/types/rooms";
import { toast } from "sonner";

export const getFeaturedRooms = (rooms: Room[]) => {
    return rooms.filter((room) => room.isFeatured);
}

export const filterRoomsByType = (rooms: Room[], type: "Deluxe" | "Standard") => {
    return rooms.filter((room) => room.type === type);
}

export function addRoomToFavorites(room: Room) {
    let favs: Room[] = [];
    const stored = localStorage.getItem(FAVS_KEY);
    if (stored) {
        favs = JSON.parse(stored) as Room[];
    }
    // Avoid duplicates by room id
    if (!favs.some((r) => r.id === room.id)) {
        favs.push(room);
        localStorage.setItem(FAVS_KEY, JSON.stringify(favs));
        toast.success("Added to favorites!")
        return true;
    }
    return false; 
}

export function removeRoomFromFavorites(room: Room) {
    const stored = localStorage.getItem(FAVS_KEY);
    if (stored) {
        let favs: Room[] = JSON.parse(stored) as Room[];
        const initialLength = favs.length;
        favs = favs.filter((r) => r.id !== room.id);

        // Only update localStorage and show toast if something was actually removed
        if (favs.length < initialLength) {
            localStorage.setItem(FAVS_KEY, JSON.stringify(favs));
            toast.success("Removed from favorites!")
            return true;
        }
    }
    return false;
}

export function isRoomInFavorites(roomId: string): boolean {
    const stored = localStorage.getItem("favoriteRooms");
    if (stored) {
        const favs: Room[] = JSON.parse(stored) as Room[];
        return favs.some((r) => r.id === roomId);
    }
    return false;
}