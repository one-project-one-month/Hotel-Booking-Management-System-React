import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Logo from "@/assets/logo.jpg";

export default function Footer() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center px-4">
        <img src={Logo} alt="logo" className="w-20 h-20 object-cover mx-auto" />
        <h1 className="text-2xl mt-1">Dream Stay</h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed py-10">
          Discover unparalleled luxury and comfort at Dream Stay. Experience
          world-class amenities, exceptional service and unforgettable moments
          in the heart of the city.
        </p>
      </div>

      {/* Why Choose Dream Stay Section */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-center text-gray-900">
          Why Choose Dream Stay?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-10">
          {/* Luxury Amenities */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                alt="Luxury hotel room interior"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Luxury Amenities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              World-class facilities including spa, fitness center and fine
              dining restaurants.
            </p>
          </div>

          {/* 24/7 Service */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                alt="Hotel concierge service"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              24/7 service
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Round-the-clock concierge and room service to ensure your comfort
              at all times.
            </p>
          </div>

          {/* Prime Location */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg"
                alt="City waterfront view"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Prime Location
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of the city with easy access to major
              attractions and business districts.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:w-4/5 mx-auto py-3 w-full">
            {/* Explore */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-gray-600 hover:text-gray-900">
                    Room & Suites
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">Dining</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">Amenities</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">Events</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">Gallery</p>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-gray-600 hover:text-gray-900">
                    Room services
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">Concierge</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">
                    Car Rental
                  </p>
                </li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact & Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">
                    Contact us
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">
                    Reservation
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">
                    Cancellation
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-900">Reviews</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="py-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive special offers and updates about Dream Stay.
            </p>
            <div className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <div>
                <Button className="bg-rose-400 hover:bg-rose-500 text-white px-6 cursor-pointer h-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
        {/* Copyright */}
        <div className="border-black pt-8 pb-5 text-center border-t">
            <div className="text-center text-gray-600 mb-4">
              @2025 Dream Stay Luxury Hotel. All rights reserved.
            </div>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <p className="hover:text-gray-700">Privacy Policy</p>
              <p className="hover:text-gray-700">Teams of Service</p>
              <p className="hover:text-gray-700">Sitemap</p>
            </div>
          </div>
    </div>
  );
}
