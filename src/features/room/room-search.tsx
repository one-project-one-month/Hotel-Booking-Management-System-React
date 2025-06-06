import { useState, useMemo } from "react"
import { useFetchFilterRooms } from "@/api/services/rooms"
import Loading from "@/components/loading"
import { useParams } from "react-router"
import Room from "./components/Room"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RoomSearch() {
    const { total_guests } = useParams()
    const { data: rooms = [], isLoading } = useFetchFilterRooms(total_guests ?? "")
    const [sortOrder, setSortOrder] = useState("lowToHigh")

    const sortedRooms = useMemo(() => {
        const roomsCopy = [...rooms]
        return roomsCopy.sort((a, b) => {
            const priceA = parseFloat(String(a.price)) || 0
            const priceB = parseFloat(String(b.price)) || 0

            if (sortOrder === "lowToHigh") {
                return priceA - priceB
            } else {
                return priceB - priceA
            }
        })
    }, [rooms, sortOrder])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loading />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Available Rooms
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Showing results for {total_guests} guest{parseInt(total_guests ?? "1") > 1 ? 's' : ''}
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <Label className="text-sm font-medium text-gray-700">
                                Sort by price:
                            </Label>
                            <Select value={sortOrder} onValueChange={(value) => { setSortOrder(value)}}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Order" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="lowToHigh">Low to High</SelectItem>
                                    <SelectItem value="highToLow">High to Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {sortedRooms.length > 0 ? (
                    <>
                        <div className="mb-6">
                            <p className="text-sm text-gray-600">
                                {sortedRooms.length} room{sortedRooms.length !== 1 ? 's' : ''} found
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {sortedRooms.map((room) => (
                                <Room key={room.id} room={room} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No rooms available
                        </h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            We couldn't find any rooms that accommodate {total_guests} guest{parseInt(total_guests ?? "1") > 1 ? 's' : ''}. 
                            Try adjusting your search criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}