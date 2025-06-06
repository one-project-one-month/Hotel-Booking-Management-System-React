import type { RoomDescription, Room } from "@/types/rooms";
import { Users, Bed, DollarSign, Eye, Star, Utensils, Wind, Bath, Mountain, Coffee, Info } from 'lucide-react';
import ApplyCoupon from "./ApplyCoupon";
import { useState } from "react";
import type { CouponApplied } from "@/types/coupon";

export default function RoomInfo({ currentRoom }: { currentRoom: Room }) {
  const [appliedCoupons, setAppliedCoupons] = useState<CouponApplied[]>([])

  const calculateDiscountPrice = () => {
    let finalPrice = currentRoom.price;
    let totalDiscount = 0;

    appliedCoupons.forEach((coupon) => {
      const validDiscount = coupon.discount > 50 ? 20 : coupon.discount;

      const discount = finalPrice * (validDiscount / 100);
      totalDiscount += discount;
      finalPrice -= discount;
    });

    return {
      originalPrice: currentRoom.price,
      finalPrice: Math.max(finalPrice, 0),
      totalDiscount: totalDiscount
    };
  };


  const { originalPrice, totalDiscount, finalPrice } = calculateDiscountPrice();


  const handleApplyCoupon = (coupon: CouponApplied) => {
    setAppliedCoupons(prev => [...prev, coupon])
  }

  const details: RoomDescription = typeof currentRoom.details === 'string'
    ? JSON.parse(currentRoom.details) as RoomDescription
    : currentRoom.details;
  const description = details.description;

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('bed')) return <Bed className="w-4 h-4" />;
    if (amenityLower.includes('curtains') || amenityLower.includes('wind')) return <Wind className="w-4 h-4" />;
    if (amenityLower.includes('view') || amenityLower.includes('overlook')) return <Eye className="w-4 h-4" />;
    if (amenityLower.includes('dining') || amenityLower.includes('cook') || amenityLower.includes('meal')) return <Utensils className="w-4 h-4" />;
    if (amenityLower.includes('bathroom') || amenityLower.includes('shower') || amenityLower.includes('towel')) return <Bath className="w-4 h-4" />;
    if (amenityLower.includes('trail') || amenityLower.includes('swing')) return <Mountain className="w-4 h-4" />;
    return <Coffee className="w-4 h-4" />;
  };

  const keyHighlights = [
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      label: "Guest Capacity",
      value: `Up to ${String(currentRoom.guestLimit)} guest${currentRoom.guestLimit !== 1 ? 's' : ''}`
    },
    {
      icon: <Bed className="w-5 h-5 text-purple-600" />,
      label: "Bed Type",
      value: details.bedSize
    }
  ];

  const categorizedAmenities = {
    "Beds & Curtains": details.amenities.filter((a: string) =>
      a.toLowerCase().includes('bed') ||
      a.toLowerCase().includes('curtains')
    ),
    "Views & Outdoor": details.amenities.filter((a: string) =>
      a.toLowerCase().includes('view') ||
      a.toLowerCase().includes('overlook') ||
      a.toLowerCase().includes('dining table') ||
      a.toLowerCase().includes('swing') ||
      a.toLowerCase().includes('trail')
    ),
    "Dining & Kitchen": details.amenities.filter((a: string) =>
      a.toLowerCase().includes('cook') ||
      a.toLowerCase().includes('meal') ||
      a.toLowerCase().includes('veggies')
    ),
    "Bathroom & Linens": details.amenities.filter((a: string) =>
      a.toLowerCase().includes('bathroom') ||
      a.toLowerCase().includes('shower') ||
      a.toLowerCase().includes('towel') ||
      a.toLowerCase().includes('toiletries')
    )
  };

  return (
    <div className="space-y-6 flex-1">
      <section className="space-y-1">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-semibold">{currentRoom.type} Room</h1>
            {currentRoom.isFeatured && (
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                Featured
              </div>
            )}
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${currentRoom.status === 'Available'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
              }`}>
              {currentRoom.status}
            </div>
          </div>
          <div className="flex items-start justify-end gap-2 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
            <DollarSign className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 leading-tight">
                {Math.round(finalPrice)}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                per night
              </div>
              {totalDiscount > 0 && (
                <div className="mt-1">
                  <span className="text-xs text-gray-400 line-through">${originalPrice}</span>
                  <span className="text-xs text-green-600 ml-1 font-medium">Save ${Math.round(totalDiscount)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {details.title && (
          <h2 className="text-gray-700 font-medium">{details.title}</h2>
        )}
      </section>

      <ApplyCoupon onApply={handleApplyCoupon} />

      <div className="grid grid-cols-2 gap-3">
        {keyHighlights.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center gap-2">
            {item.icon}
            <div className="min-w-0">
              <div className="text-xs text-gray-600 truncate">{item.label}</div>
              <div className="font-semibold text-gray-900 text-sm truncate">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 bg-blue-50 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">About This Room</h3>
        </div>
        <p className="text-gray-600 leading-relaxed lg:w-2xl md:w-full">
          {description}
        </p>
      </div>

      {details.amenities.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Amenities & Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(categorizedAmenities).map(([category, amenities]) => (
              amenities.length > 0 && (
                <div key={category} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">{category}</h4>
                  <div className="space-y-2">
                    {amenities.map((amenity: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="text-blue-600 flex-shrink-0">
                          {getAmenityIcon(amenity)}
                        </div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}