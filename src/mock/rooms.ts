type RoomStatus = "Available" | "Checked In" | "Check Out";

type RoomDescription = {
    bedSize: "Single" | "Double" | "Queen" | "King";
    description: string;
};

export interface Room {
  roomNo: number;
  type: "Deluxe" | "Standard";
  price: number;
  status: RoomStatus;
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
        status: "Available",
        isFeatured: true,
        details: {
            bedSize: "King",
            description: "Spacious room with a king-sized bed and modern amenities."
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
        status: "Checked In",
        isFeatured: false,
        details: {
            bedSize: "Queen",
            description: "Cozy room with a queen-sized bed and essential facilities."
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
        roomNo: 103,
        type: "Deluxe",
        price: 180,
        status: "Available",
        isFeatured: true,
        details: {
            bedSize: "King",
            description: "Luxury room with a king-sized bed and a stunning view."
        },
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        guestLimit: 3
    },
    {
        roomNo: 104,
        type: "Standard",
        price: 90,
        status: "Available",
        isFeatured: false,
        details: {
            bedSize: "Single",
            description: "Compact room with a single bed, ideal for solo travelers."
        },
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        guestLimit: 1
    },
    {
        roomNo: 105,
        type: "Deluxe",
        price: 200,
        status: "Checked In",
        isFeatured: true,
        details: {
            bedSize: "King",
            description: "Premium deluxe room with a king-sized bed and exclusive amenities."
        },
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        guestLimit: 4
    },
    {
        roomNo: 106,
        type: "Standard",
        price: 120,
        status: "Check Out",
        isFeatured: false,
        details: {
            bedSize: "Double",
            description: "Comfortable room with a double bed and essential amenities."
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
        roomNo: 107,
        type: "Deluxe",
        price: 250,
        status: "Available",
        isFeatured: true,
        details: {
            bedSize: "Queen",
            description: "Elegant deluxe room with a queen-sized bed and a scenic view."
        },
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        guestLimit: 3
    },
    {
        roomNo: 108,
        type: "Standard",
        price: 110,
        status: "Checked In",
        isFeatured: false,
        details: {
            bedSize: "Queen",
            description: "Standard room with a queen-sized bed and modern facilities."
        },
        imgUrl: [
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_luxurious_hotel_room_featuring_a_large_w_2.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_A_modern_deluxe_hotel_room_with_a_kingsize_1.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Closeup_of_a_luxurious_kingsized_bed_in_a_0.jpg",
            "https://hotel-rooms-img.s3.ap-southeast-2.amazonaws.com/Leonardo_Phoenix_10_Elegant_view_from_a_luxury_hotel_room_feat_2.jpg"
        ],
        guestLimit: 2
    }
];
