import { CheckLine } from "lucide-react";
import { amenityIcons } from "./amenity-icons";

interface RoomAmenitiesProps {
  amenities: string[];
}

export default function RoomAmenities({ amenities }: RoomAmenitiesProps) {
 
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">What this room offers</h2>
      <section>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <span className="text-gray-500">
                {amenityIcons[amenity] ? amenityIcons[amenity] : <CheckLine />}
              </span>
              <span className="text-gray-700">{amenity}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
