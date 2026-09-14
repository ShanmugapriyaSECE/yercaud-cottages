export type Room = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  type: string;
  capacity: string;
  images: string[];
  features: string[];
};

export const rooms: Room[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    description: "A comfortable and affordable room for couples and small families visiting Yercaud.",
    longDescription:
      "Our Deluxe Room offers a cozy and well-furnished space perfect for couples and small families. Enjoy the cool hill breeze, comfortable beds and all essential amenities for a relaxing stay in Yercaud.",
    price: "₹1,500",
    type: "Room",
    capacity: "2 Adults",
    images: [
      "/images/rooms/Deluxe Bedroom/1.jpeg",
      "/images/rooms/Deluxe Bedroom/2.jpeg",
      "/images/rooms/Deluxe Bedroom/3.jpeg",
      "/images/rooms/Deluxe Bedroom/4.jpeg",
      "/images/rooms/Deluxe Bedroom/5.jpeg",
    ],
    features: ["Double Bed", "Hot Water", "Free Wi-Fi", "Free Parking", "In-House Restaurant"],
  },
  {
    slug: "triple-bedded-room",
    name: "Triple Bedded Room",
    description: "A spacious stay for families and small groups looking for comfort in the hills.",
    longDescription:
      "The Triple Bedded Room is ideal for small groups and families who need a little extra space. Three comfortable beds, modern amenities and a peaceful hill-station atmosphere make this a great choice.",
    price: "₹2,000",
    type: "Room",
    capacity: "3 Adults",
    images: [
      "/images/rooms/Triple Bedded room/1.jpeg",
      "/images/rooms/Triple Bedded room/2.jpeg",
      "/images/rooms/Triple Bedded room/3.jpeg",
      "/images/rooms/Triple Bedded room/4.jpeg",
      "/images/rooms/Triple Bedded room/5.jpeg",
      "/images/rooms/Triple Bedded room/6.jpeg",
    ],
    features: ["3 Single Beds", "Hot Water", "Free Wi-Fi", "Free Parking", "In-House Restaurant"],
  },
  {
    slug: "family-room",
    name: "Family Room",
    description: "A spacious family accommodation designed for a relaxing Yercaud holiday.",
    longDescription:
      "Our Family Room is designed with families in mind — spacious, comfortable and well-equipped. Enjoy quality time together in the beautiful Shevaroy Hills with everything you need for a memorable stay.",
    price: "₹2,500",
    type: "Room",
    capacity: "4 Adults",
    images: [
      "/images/rooms/Family Room/1.jpeg",
      "/images/rooms/Family Room/2.jpeg",
      "/images/rooms/Family Room/3.jpeg",
      "/images/rooms/Family Room/4.jpeg",
      "/images/rooms/Family Room/5.jpeg",
      "/images/rooms/Family Room/6.jpeg",
      "/images/rooms/Family Room/7.jpeg",
      "/images/rooms/Family Room/8.jpeg",
    ],
    features: ["Multiple Beds", "Hot Water", "Free Wi-Fi", "Free Parking", "In-House Restaurant"],
  },
  {
    slug: "one-bedroom-cottage",
    name: "One Bedroom Cottage",
    description: "A peaceful private cottage with a bedroom and living space for couples and families.",
    longDescription:
      "Experience the charm of a private cottage stay in Yercaud. The One Bedroom Cottage includes a comfortable bedroom and a cozy living area — perfect for couples and small families seeking privacy and tranquility.",
    price: "₹2,500",
    type: "Cottage",
    capacity: "2–3 Adults",
    images: [
      "/images/cottages/One Bedroom Cottage/1.jpeg",
      "/images/cottages/One Bedroom Cottage/2.jpeg",
      "/images/cottages/One Bedroom Cottage/3.jpeg",
      "/images/cottages/One Bedroom Cottage/4.jpeg",
      "/images/cottages/One Bedroom Cottage/5.jpeg",
      "/images/cottages/One Bedroom Cottage/6.jpeg",
      "/images/cottages/One Bedroom Cottage/7.jpeg",
      "/images/cottages/One Bedroom Cottage/8.jpeg",
      "/images/cottages/One Bedroom Cottage/9.jpeg",
      "/images/cottages/One Bedroom Cottage/10.jpeg",
    ],
    features: ["Private Cottage", "Living Area", "Hot Water", "Free Wi-Fi", "Free Parking", "In-House Restaurant"],
  },
  {
    slug: "two-bedroom-cottage",
    name: "Two Bedroom Cottage",
    description: "A spacious cottage ideal for families and groups travelling together.",
    longDescription:
      "Our Two Bedroom Cottage with a living room is the perfect choice for families and groups. Two well-furnished bedrooms, a shared living space and the privacy of your own cottage make this an unforgettable Yercaud experience.",
    price: "₹4,000",
    type: "Cottage",
    capacity: "4–5 Adults",
    images: [
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/1.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/2.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/3.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/4.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/5.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/6.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/7.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/8.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/9.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/10.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/11.jpeg",
      "/images/cottages/Two Bedrooms with Living room Individual Cottage/12.jpeg",
    ],
    features: ["2 Bedrooms", "Living Room", "Private Cottage", "Hot Water", "Free Wi-Fi", "Free Parking", "In-House Restaurant"],
  },
  {
    slug: "family-suite-room",
    name: "Family Suite Room",
    description: "A premium family stay combining extra space, comfort and modern amenities.",
    longDescription:
      "The Family Suite Room is our premium offering — a spacious suite designed for families who want extra comfort and space. Enjoy a luxurious hill-station stay with modern amenities and warm hospitality.",
    price: "₹3,000",
    type: "Suite",
    capacity: "4–6 Adults",
    images: [
      "/images/rooms/Family Suite Room/1.jpeg",
      "/images/rooms/Family Suite Room/2.jpeg",
      "/images/rooms/Family Suite Room/3.jpeg",
      "/images/rooms/Family Suite Room/4.jpeg",
    ],
    features: ["Suite Layout", "Multiple Beds", "Hot Water", "Free Wi-Fi", "Free Parking", "In-House Restaurant"],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
