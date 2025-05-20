type RoomDescription = {
    bedSize: "Single" | "Double" | "Queen" | "King";
    title: string;
    description: string;
    amenities: string[];
};

export interface Room {
    roomNo: number;
    type: "Deluxe" | "Standard";
    price: number;
    isFeatured: boolean;
    details: RoomDescription;
    imgUrl: string[];
    guestLimit: number;
}


export const rooms: Room[] = [
    {
        roomNo: 101,
        type: "Deluxe",
        price: 150,
        isFeatured: true,
        details: {
            bedSize: "King",
            title: "Deluxe King Room with Scenic Farm Views",
            description: "Experience tranquility in our Deluxe King Room, featuring a spacious layout with a king-sized bed and panoramic views of the surrounding rice fields and vegetable gardens. The room is designed with bamboo accents and equipped with windproof curtains to ensure a comfortable stay.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Private outdoor dining area",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        },
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        guestLimit: 2
    },
    {
        roomNo: 102,
        type: "Standard",
        price: 100,
        isFeatured: false,
        details: {
            bedSize: "Queen",
            title: "Standard Queen Room with Garden Access",
            description: "Our Standard Queen Room offers a cozy retreat with a queen-sized bed and easy access to the lush vegetable gardens. Perfect for guests seeking a comfortable stay amidst nature.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        },
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+06_16_08+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        guestLimit: 2
    },
    {
        roomNo: 103,
        type: "Deluxe",
        price: 180,
        isFeatured: true,
        guestLimit: 3,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/room-img.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_luxury_bamboo_hotel_cottage_with_a_kingsized_bed_wi_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_luxury_bamboo_hotel_cottage_with_a_kingsized_bed_wi_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_luxury_bamboo_hotel_cottage_with_a_kingsized_bed_wi_2.jpg"
        ],
        details: {
            bedSize: "King",
            title: "Luxury King Room with Panoramic Field View",
            description: "Luxury bamboo cottage with a king-sized bed, windproof curtains, and a private dining area. Enjoy panoramic views of rice fields and farm gardens. Perfect for a peaceful countryside escape.",
            amenities: [
                "King-sized bed",
                "2-layer windproof curtains",
                "Overlooking rice fields and farm plots",
                "Private outdoor dining table",
                "Shared bathroom and shower",
                "Towels and toiletries provided",
                "Access to swings and hiking trail",
                "Cook your own veggies with provided tools",
                "Optional home-cooked meals"
            ]
        }
    },
    {
        roomNo: 104,
        type: "Standard",
        price: 90,
        isFeatured: false,
        guestLimit: 1,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+06_35_48+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_cozy_modern_single_hotel_room_designed_for_solo_tra_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_cozy_modern_single_hotel_room_designed_for_solo_tra_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_luxury_bamboo_hotel_cottage_with_a_kingsized_bed_wi_0.jpg"
        ],
        details: {
            bedSize: "Single",
            title: "Cozy Single Room for Solo Travelers",
            description: "Modern and compact single room designed for solo travelers. Offers essential amenities and a quiet environment for rest and recharge.",
            amenities: [
                "Single bed with quality linens",
                "Free Wi-Fi",
                "Air conditioning",
                "Shared bathroom with hot shower",
                "Towels and toiletries provided",
                "Desk and reading lamp",
                "Quiet surroundings with garden view"
            ]
        }
    },
    {
        roomNo: 105,
        type: "Deluxe",
        price: 200,
        isFeatured: true,
        guestLimit: 4,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        details: {
            bedSize: "King",
            title: "Premium Deluxe Farmstay Cottage",
            description: "Spacious deluxe cottage with king-sized bed, overlooking scenic fields. Enjoy exclusive access to nature, dining under the stars, and fresh farm-to-table experiences.",
            amenities: [
                "King-sized bed",
                "2.5m x 4m bamboo-style cottage",
                "Private dining space beside room",
                "Shared shower and bathroom",
                "Toiletries and fresh towels",
                "Farm view of rice, peas, and vegetables",
                "Vegetable picking and cooking access",
                "Home-cooked meals available",
                "Nature walk and relaxation swings"
            ]
        }
    },
    {
        roomNo: 106,
        type: "Standard",
        price: 80,
        isFeatured: false,
        guestLimit: 1,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+06_43_06+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_ecofriendly_hotel_showcasing_shar_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_ecofriendly_hotel_showcasing_shar_1.jpg"
        ],
        details: {
            bedSize: "Single",
            title: "Budget Single Room for Nature Lovers",
            description: "Affordable single room with essential amenities, perfect for solo travelers. Enjoy access to nature trails and vegetable gardens.",
            amenities: [
                "Single bed",
                "Shared bathroom and shower",
                "Toiletries and towel included",
                "Access to vegetable gardens",
                "Swings and nature hiking",
                "Optional cooking and meal services",
                "Quiet and peaceful environment"
            ]
        }
    },
    {
        roomNo: 107,
        type: "Deluxe",
        price: 220,
        isFeatured: true,
        guestLimit: 4,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        details: {
            bedSize: "King",
            title: "Luxury King Room with Scenic Views",
            description: "Indulge in our Luxury King Room, featuring a spacious layout with a king-sized bed and breathtaking views of the surrounding rice fields and vegetable gardens. The room is designed with bamboo accents and equipped with windproof curtains to ensure a comfortable stay.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Private outdoor dining area",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
    {
        roomNo: 108,
        type: "Standard",
        price: 90,
        isFeatured: false,
        guestLimit: 2,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Lightning_XL_A_cozy_standard_hotel_room_viewed_from_t_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Lightning_XL_A_cozy_standard_hotel_room_viewed_from_t_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Lightning_XL_A_cozy_standard_hotel_room_viewed_from_t_3.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Lightning_XL_A_cozy_standard_hotel_room_viewed_from_t_0.jpg"],
        details: {
            bedSize: "Queen",
            title: "Standard Queen Room with Garden Access",
            description: "Our Standard Queen Room offers a cozy retreat with a queen-sized bed and easy access to the lush vegetable gardens. Perfect for guests seeking a comfortable stay amidst nature.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
    {
        roomNo: 109,
        type: "Deluxe",
        price: 250,
        isFeatured: true,
        guestLimit: 4,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+08_33_33+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        details: {
            bedSize: "King",
            title: "Luxury King Room with Scenic Views",
            description: "Indulge in our Luxury King Room, featuring a spacious layout with a king-sized bed and breathtaking views of the surrounding rice fields and vegetable gardens. The room is designed with bamboo accents and equipped with windproof curtains to ensure a comfortable stay.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Private outdoor dining area",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
    {
        roomNo: 110,
        type: "Standard",
        price: 100,
        isFeatured: false,
        guestLimit: 2,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+06_35_48+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_cozy_modern_single_hotel_room_designed_for_solo_tra_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_cozy_modern_single_hotel_room_designed_for_solo_tra_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Flux_Dev_A_luxury_bamboo_hotel_cottage_with_a_kingsized_bed_wi_0.jpg"
        ],
        details: {
            bedSize: "Queen",
            title: "Standard Queen Room with Garden Access",
            description: "Our Standard Queen Room offers a cozy retreat with a queen-sized bed and easy access to the lush vegetable gardens. Perfect for guests seeking a comfortable stay amidst nature.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
    {
        roomNo: 111,
        type: "Deluxe",
        price: 300,
        isFeatured: true,
        guestLimit: 4,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+08_48_08+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        details: {
            bedSize: "King",
            title: "Luxury King Room with Scenic Views",
            description: "Indulge in our Luxury King Room, featuring a spacious layout with a king-sized bed and breathtaking views of the surrounding rice fields and vegetable gardens. The room is designed with bamboo accents and equipped with windproof curtains to ensure a comfortable stay.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Private outdoor dining area",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
    {
        roomNo: 112,
        type: "Standard",
        price: 120,
        isFeatured: false,
        guestLimit: 2,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+08_54_10+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        details: {
            bedSize: "Queen",
            title: "Standard Queen Room with Garden Access",
            description: "Our Standard Queen Room offers a cozy retreat with a queen-sized bed and easy access to the lush vegetable gardens. Perfect for guests seeking a comfortable stay amidst nature.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
    {
        roomNo: 113,
        type: "Deluxe",
        price: 350,
        isFeatured: true,
        guestLimit: 4,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/ChatGPT+Image+May+20%2C+2025%2C+08_54_10+PM.png",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        details: {
            bedSize: "King",
            title: "Luxury King Room with Scenic Views",
            description: "Indulge in our Luxury King Room, featuring a spacious layout with a king-sized bed and breathtaking views of the surrounding rice fields and vegetable gardens. The room is designed with bamboo accents and equipped with windproof curtains to ensure a comfortable stay.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Private outdoor dining area",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
    {
        roomNo: 114,
        type: "Standard",
        price: 130,
        isFeatured: false,
        guestLimit: 2,
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        details: {
            bedSize: "Queen",
            title: "Standard Queen Room with Garden Access",
            description: "Our Standard Queen Room offers a cozy retreat with a queen-sized bed and easy access to the lush vegetable gardens. Perfect for guests seeking a comfortable stay amidst nature.",
            amenities: [
                "Free Wi-Fi",
                "Air conditioning",
                "Shared bathroom with shower",
                "Toiletries and towels",
                "Access to vegetable garden",
                "Home-cooked meals available",
                "Cooking equipment provided"
            ]
        }
    },
      {
    roomNo: 115,
    type: "Deluxe",
    price: 420,
    isFeatured: true,
    guestLimit: 4,
    imgUrl: [
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
    ],
    details: {
      bedSize: "King",
      title: "Modern King Suite with Panoramic Views",
      description: "Experience elegance in our Deluxe King Suite featuring a luxurious king-sized bed, large windows, and a stylish interior. Enjoy comfort and design tailored for your perfect stay.",
      amenities: [
        "Free Wi-Fi",
        "Air conditioning",
        "Private balcony",
        "Smart TV",
        "En-suite bathroom",
        "Minibar",
        "Room service"
      ]
    }
  },
  {
    roomNo: 116,
    type: "Standard",
    price: 180,
    isFeatured: false,
    guestLimit: 2,
    imgUrl: [
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_cozy_standard_hotel_room_with_warm_light_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_standard_hotel_room_with_basic_amenities_in_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Simple_and_clean_bathroom_in_a_standard_hotel_r_1.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modest_room_with_a_desk_lamp_and_bedside_tab_0.jpg"
    ],
    details: {
      bedSize: "Queen",
      title: "Comfortable Standard Room",
      description: "Our Standard Queen Room offers essential comfort with cozy interiors, ideal for short stays or business trips. Relax and recharge with simple yet functional amenities.",
      amenities: [
        "Free Wi-Fi",
        "Air conditioning",
        "Flat-screen TV",
        "Shared bathroom",
        "Towels and toiletries",
        "Daily housekeeping"
      ]
    }
  },
  {
    roomNo: 117,
    type: "Deluxe",
    price: 440,
    isFeatured: true,
    guestLimit: 3,
    imgUrl: [
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Sunny_day_view_from_a_deluxe_room_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_corner_deluxe_hotel_room_with_floor_to_ceili_2.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_deluxe_hotel_room_with_sofa_and_table_near_t_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_softly_lit_evening_shot_of_a_deluxe_room_2.jpg"
    ],
    details: {
      bedSize: "King",
      title: "Spacious Deluxe Room with City View",
      description: "Enjoy premium space and comfort in this Deluxe room designed with modern aesthetics and floor-to-ceiling windows offering vibrant city views.",
      amenities: [
        "Free Wi-Fi",
        "Air conditioning",
        "Smart TV",
        "City view balcony",
        "Private bath",
        "Coffee and tea maker"
      ]
    }
  },
  {
    roomNo: 118,
    type: "Standard",
    price: 175,
    isFeatured: false,
    guestLimit: 2,
    imgUrl: [
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Compact_standard_room_with_small_desk_and_c_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Standard_room_featuring_small_wardrobe_and_n_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Tidy_room_with_bedside_lighting_and_a_single_b_2.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Efficient_lighting_and_modest_desk_setup_in_s_0.jpg"
    ],
    details: {
      bedSize: "Double",
      title: "Economy Room for Budget Travelers",
      description: "Designed for comfort and value, this room is perfect for solo or duo travelers looking for clean, efficient accommodation with all the basics covered.",
      amenities: [
        "Free Wi-Fi",
        "Air conditioning",
        "Desk and chair",
        "Hot water shower",
        "Daily housekeeping"
      ]
    }
  },
  {
    roomNo: 119,
    type: "Deluxe",
    price: 460,
    isFeatured: true,
    guestLimit: 4,
    imgUrl: [
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_large_room_with_twin_queen_beds_and_window_v_1.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Luxurious_room_with_modern_furniture_and_soft_g_2.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Deluxe_hotel_room_with_ambient_lighting_and_t_1.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Beautifully_furnished_deluxe_room_with_kitchen_1.jpg"
    ],
    details: {
      bedSize: "Double",
      title: "Family Deluxe Room with Kitchenette",
      description: "Perfect for families, this room offers two queen beds, a small kitchenette, and warm interiors to make your stay feel like home.",
      amenities: [
        "Free Wi-Fi",
        "Air conditioning",
        "Kitchenette",
        "Microwave & fridge",
        "Private bath",
        "Family dining area"
      ]
    }
  },
  {
    roomNo: 120,
    type: "Standard",
    price: 160,
    isFeatured: false,
    guestLimit: 2,
    imgUrl: [
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Cozy_room_with_artwork_and_natural_light_in_b_1.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Minimalist_room_with_wall_decor_and_single_be_0.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Compact_room_with_bookshelf_and_reading_corner_2.jpg",
      "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Clean_white_themed_room_with_writing_table_ne_0.jpg"
    ],
    details: {
      bedSize: "Single",
      title: "Artist’s Standard Room",
      description: "This small yet artistic room offers a quiet and creative environment for solo travelers. Ideal for writers or digital nomads who need peace and light.",
      amenities: [
        "Free Wi-Fi",
        "Study desk",
        "Wall-mounted reading lamp",
        "Air conditioning",
        "Compact shower area"
      ]
    }
  }
];
