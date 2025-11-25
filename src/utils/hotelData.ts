import { Hotel } from '../components/HotelCard'

export interface LocationData {
  name: string
  fullLocationName: string
  slug: string
  description: string
  heroImage: string
  hotels: Hotel[]
  highlights: string[]
  bestTimeToVisit: string
  averageRating: number
  totalReviews: number
}

export interface RoomType {
  id: number
  name: string
  description: string
  image: string
  maxOccupancy: number
  size: string
  basePrice: number
  mealPlans: MealPlan[]
}

export interface MealPlan {
  id: number
  name: string
  description: string
  price: number
  includes: string[]
}

export interface DetailedHotel extends Hotel {
  slug: string
  images: string[]
  roomTypes: RoomType[]
  allAmenities: string[]
  specialities: string[]
  checkInTime: string
  checkOutTime: string
  policies: string[]
  nearbyAttractions: string[]
  totalReviews?: number
}

export const allHotels: Hotel[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    title: 'Mountain View Suite',
    location: 'Manali, Himachal Pradesh',
    description: 'Wake up to breathtaking mountain views in our luxury suite with modern amenities and cozy interiors.',
    rating: 4.8,
    price: 8500,
    amenities: ['WiFi', 'Mountain View', 'Spa', 'Restaurant'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    title: 'Coastal Paradise',
    location: 'Goa, India',
    description: 'Experience beachfront luxury with stunning ocean views, exceptional dining, and world-class hospitality.',
    rating: 4.9,
    price: 12000,
    amenities: ['Beach Access', 'Pool', 'Spa', 'Bar'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    title: 'Heritage Elegance',
    location: 'Jaipur, Rajasthan',
    description: 'Immerse yourself in royal luxury with traditional architecture, modern comfort, and authentic experiences.',
    rating: 4.7,
    price: 9500,
    amenities: ['Heritage', 'Pool', 'Garden', 'Restaurant'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    title: 'Spa & Wellness Retreat',
    location: 'Rishikesh, Uttarakhand',
    description: 'Rejuvenate your mind and body in our serene wellness retreat surrounded by nature and tranquility.',
    rating: 4.6,
    price: 7500,
    amenities: ['Yoga', 'Spa', 'Meditation', 'Organic Food'],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    title: 'Sunset Terrace',
    location: 'Udaipur, Rajasthan',
    description: 'Enjoy stunning sunset views from our elegant terrace overlooking the beautiful lakes and palaces.',
    rating: 4.8,
    price: 11000,
    amenities: ['Lake View', 'Terrace', 'Pool', 'Restaurant'],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    title: 'Luxury Villa',
    location: 'Kerala, India',
    description: 'Experience traditional Kerala architecture with modern luxury in our spacious villas by the backwaters.',
    rating: 4.9,
    price: 13000,
    amenities: ['Backwater View', 'Private Pool', 'Ayurveda', 'Boat Rides'],
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80',
    title: 'Garden Oasis',
    location: 'Ooty, Tamil Nadu',
    description: 'Escape to our peaceful garden oasis nestled in the hills, perfect for a relaxing getaway.',
    rating: 4.5,
    price: 6500,
    amenities: ['Garden', 'Tea Estate', 'Hiking', 'Restaurant'],
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
    title: 'Desert Luxury',
    location: 'Jaisalmer, Rajasthan',
    description: 'Experience the magic of the desert in our luxurious property with traditional Rajasthani hospitality.',
    rating: 4.7,
    price: 9000,
    amenities: ['Desert View', 'Camel Rides', 'Cultural Shows', 'Spa'],
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    title: 'Snow Peak Lodge',
    location: 'Manali, Himachal Pradesh',
    description: 'Cozy mountain lodge with panoramic views of snow-capped peaks, perfect for adventure seekers.',
    rating: 4.6,
    price: 7200,
    amenities: ['Mountain View', 'Skiing', 'Fireplace', 'Restaurant'],
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    title: 'Beachfront Resort',
    location: 'Goa, India',
    description: 'Luxurious beachfront resort with direct access to pristine beaches and tropical paradise.',
    rating: 4.8,
    price: 15000,
    amenities: ['Beach Access', 'Infinity Pool', 'Spa', 'Water Sports'],
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    title: 'Royal Palace Stay',
    location: 'Jaipur, Rajasthan',
    description: 'Live like royalty in our palace-turned-hotel with authentic Rajasthani architecture and culture.',
    rating: 4.9,
    price: 18000,
    amenities: ['Palace', 'Cultural Tours', 'Spa', 'Fine Dining'],
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    title: 'Riverside Retreat',
    location: 'Rishikesh, Uttarakhand',
    description: 'Peaceful riverside property with yoga sessions, meditation, and adventure activities.',
    rating: 4.7,
    price: 6800,
    amenities: ['River View', 'Yoga', 'Rafting', 'Organic Food'],
  },
]

// Detailed hotel data with rooms, meal plans, etc.
export const detailedHotels: DetailedHotel[] = [
  {
    id: 1,
    slug: 'mountain-view-suite',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    title: 'Mountain View Suite',
    location: 'Manali, Himachal Pradesh',
    description: 'Wake up to breathtaking mountain views in our luxury suite with modern amenities and cozy interiors. Perfect for couples seeking a romantic mountain getaway.',
    rating: 4.8,
    price: 8500,
    amenities: ['WiFi', 'Mountain View', 'Spa', 'Restaurant'],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    roomTypes: [
      {
        id: 1,
        name: 'Deluxe Mountain View Room',
        description: 'Spacious room with panoramic mountain views, king-size bed, and modern amenities.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        maxOccupancy: 2,
        size: '350 sq ft',
        basePrice: 8500,
        mealPlans: [
          {
            id: 1,
            name: 'Room Only',
            description: 'Accommodation only',
            price: 0,
            includes: ['Room'],
          },
          {
            id: 2,
            name: 'Breakfast',
            description: 'Room with breakfast',
            price: 1200,
            includes: ['Room', 'Breakfast'],
          },
          {
            id: 3,
            name: 'Half Board',
            description: 'Room with breakfast and dinner',
            price: 2500,
            includes: ['Room', 'Breakfast', 'Dinner'],
          },
          {
            id: 4,
            name: 'Full Board',
            description: 'Room with all meals',
            price: 3800,
            includes: ['Room', 'Breakfast', 'Lunch', 'Dinner'],
          },
        ],
      },
      {
        id: 2,
        name: 'Premium Suite',
        description: 'Luxurious suite with separate living area, mountain balcony, and premium amenities.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
        maxOccupancy: 3,
        size: '550 sq ft',
        basePrice: 12000,
        mealPlans: [
          {
            id: 1,
            name: 'Room Only',
            description: 'Accommodation only',
            price: 0,
            includes: ['Room'],
          },
          {
            id: 2,
            name: 'Breakfast',
            description: 'Room with breakfast',
            price: 1500,
            includes: ['Room', 'Breakfast'],
          },
          {
            id: 3,
            name: 'Half Board',
            description: 'Room with breakfast and dinner',
            price: 3000,
            includes: ['Room', 'Breakfast', 'Dinner'],
          },
          {
            id: 4,
            name: 'Full Board',
            description: 'Room with all meals',
            price: 4500,
            includes: ['Room', 'Breakfast', 'Lunch', 'Dinner'],
          },
        ],
      },
    ],
    allAmenities: [
      'Free WiFi',
      'Mountain View',
      'Spa & Wellness Center',
      'Restaurant',
      'Room Service',
      '24/7 Front Desk',
      'Parking',
      'Laundry Service',
      'Air Conditioning',
      'Heating',
      'Mini Bar',
      'Safe',
      'TV',
      'Balcony',
    ],
    specialities: [
      'Panoramic mountain views from every room',
      'Award-winning spa with Himalayan treatments',
      'Fine dining restaurant serving local and international cuisine',
      'Adventure activities including skiing and trekking',
      'Romantic packages for couples',
    ],
    checkInTime: '2:00 PM',
    checkOutTime: '11:00 AM',
    policies: [
      'Cancellation free until 48 hours before check-in',
      'Children under 5 stay free',
      'Pets not allowed',
      'Smoking allowed in designated areas only',
    ],
    nearbyAttractions: [
      'Hadimba Temple (2 km)',
      'Solang Valley (14 km)',
      'Rohtang Pass (51 km)',
      'Manali Mall Road (1 km)',
    ],
    totalReviews: 324,
  },
  {
    id: 2,
    slug: 'coastal-paradise',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    title: 'Coastal Paradise',
    location: 'Goa, India',
    description: 'Experience beachfront luxury with stunning ocean views, exceptional dining, and world-class hospitality. Perfect for beach lovers and party enthusiasts.',
    rating: 4.9,
    price: 12000,
    amenities: ['Beach Access', 'Pool', 'Spa', 'Bar'],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    ],
    roomTypes: [
      {
        id: 1,
        name: 'Beach View Room',
        description: 'Comfortable room with direct beach access and ocean views.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        maxOccupancy: 2,
        size: '400 sq ft',
        basePrice: 12000,
        mealPlans: [
          {
            id: 1,
            name: 'Room Only',
            description: 'Accommodation only',
            price: 0,
            includes: ['Room'],
          },
          {
            id: 2,
            name: 'Breakfast',
            description: 'Room with breakfast',
            price: 1500,
            includes: ['Room', 'Breakfast'],
          },
          {
            id: 3,
            name: 'Half Board',
            description: 'Room with breakfast and dinner',
            price: 3200,
            includes: ['Room', 'Breakfast', 'Dinner'],
          },
          {
            id: 4,
            name: 'Full Board',
            description: 'Room with all meals',
            price: 4800,
            includes: ['Room', 'Breakfast', 'Lunch', 'Dinner'],
          },
        ],
      },
      {
        id: 2,
        name: 'Beachfront Villa',
        description: 'Luxurious private villa with direct beach access, private pool, and butler service.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
        maxOccupancy: 4,
        size: '1200 sq ft',
        basePrice: 25000,
        mealPlans: [
          {
            id: 1,
            name: 'Room Only',
            description: 'Accommodation only',
            price: 0,
            includes: ['Room'],
          },
          {
            id: 2,
            name: 'Breakfast',
            description: 'Room with breakfast',
            price: 2000,
            includes: ['Room', 'Breakfast'],
          },
          {
            id: 3,
            name: 'Half Board',
            description: 'Room with breakfast and dinner',
            price: 4000,
            includes: ['Room', 'Breakfast', 'Dinner'],
          },
          {
            id: 4,
            name: 'Full Board',
            description: 'Room with all meals',
            price: 6000,
            includes: ['Room', 'Breakfast', 'Lunch', 'Dinner'],
          },
        ],
      },
    ],
    allAmenities: [
      'Direct Beach Access',
      'Infinity Pool',
      'Spa & Wellness',
      'Beach Bar',
      'Restaurant',
      'Water Sports',
      'Free WiFi',
      'Parking',
      'Room Service',
      '24/7 Front Desk',
      'Air Conditioning',
      'Mini Bar',
      'Safe',
      'TV',
    ],
    specialities: [
      'Private beach access with sun loungers',
      'Infinity pool with ocean views',
      'Beach bar serving tropical cocktails',
      'Water sports activities (jet skiing, parasailing)',
      'Live music and entertainment',
    ],
    checkInTime: '3:00 PM',
    checkOutTime: '12:00 PM',
    policies: [
      'Cancellation free until 72 hours before check-in',
      'Children under 12 stay free',
      'Pets allowed with prior notice',
      'No smoking in rooms',
    ],
    nearbyAttractions: [
      'Baga Beach (0 km)',
      'Anjuna Beach (5 km)',
      'Fort Aguada (8 km)',
      'Dudhsagar Falls (60 km)',
    ],
    totalReviews: 456,
  },
]

// Helper function to get hotel slug from title
export const getHotelSlug = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-')
}

export const getDetailedHotel = (locationSlug: string, hotelSlug: string): DetailedHotel | undefined => {
  const hotel = detailedHotels.find(
    (hotel) =>
      hotel.slug === hotelSlug &&
      hotel.location.toLowerCase().split(',')[0].replace(/\s+/g, '-') === locationSlug
  )
  
  // If not found in detailed hotels, try to create from basic hotel data
  if (!hotel) {
    const basicHotel = allHotels.find(
      (h) =>
        getHotelSlug(h.title) === hotelSlug &&
        h.location.toLowerCase().split(',')[0].replace(/\s+/g, '-') === locationSlug
    )
    
    if (basicHotel) {
      // Return a basic detailed hotel structure
      return {
        ...basicHotel,
        slug: hotelSlug,
        images: [basicHotel.image],
        roomTypes: [],
        allAmenities: basicHotel.amenities || [],
        specialities: [],
        checkInTime: '2:00 PM',
        checkOutTime: '11:00 AM',
        policies: [],
        nearbyAttractions: [],
      }
    }
  }
  
  return hotel
}

export const locationData: Record<string, LocationData> = {
  manali: {
    name: 'Manali',
    fullLocationName: 'Manali, Himachal Pradesh',
    slug: 'manali',
    description: 'Nestled in the heart of the Himalayas, Manali offers breathtaking mountain views, adventure sports, and serene landscapes. Perfect for couples seeking a romantic mountain getaway or adventure enthusiasts.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('manali')),
    highlights: ['Snow-capped Mountains', 'Adventure Sports', 'Hot Springs', 'Temples', 'Skiing'],
    bestTimeToVisit: 'March to June, October to February',
    averageRating: 4.7,
    totalReviews: 1248,
  },
  goa: {
    name: 'Goa',
    fullLocationName: 'Goa, India',
    slug: 'goa',
    description: 'India\'s party capital with pristine beaches, vibrant nightlife, and Portuguese heritage. Experience the perfect blend of relaxation and excitement.',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('goa')),
    highlights: ['Beaches', 'Nightlife', 'Water Sports', 'Heritage Sites', 'Seafood'],
    bestTimeToVisit: 'November to February',
    averageRating: 4.8,
    totalReviews: 2156,
  },
  jaipur: {
    name: 'Jaipur',
    fullLocationName: 'Jaipur, Rajasthan',
    slug: 'jaipur',
    description: 'The Pink City of India, known for its royal palaces, vibrant culture, and rich history. Experience the grandeur of Rajasthan.',
    heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('jaipur')),
    highlights: ['Palaces', 'Fort', 'Shopping', 'Culture', 'Cuisine'],
    bestTimeToVisit: 'October to March',
    averageRating: 4.7,
    totalReviews: 1892,
  },
  rishikesh: {
    name: 'Rishikesh',
    fullLocationName: 'Rishikesh, Uttarakhand',
    slug: 'rishikesh',
    description: 'The Yoga Capital of the World, offering spiritual experiences, adventure activities, and serene natural beauty along the Ganges.',
    heroImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('rishikesh')),
    highlights: ['Yoga & Meditation', 'River Rafting', 'Temples', 'Adventure Sports', 'Nature'],
    bestTimeToVisit: 'March to April, September to November',
    averageRating: 4.6,
    totalReviews: 987,
  },
  udaipur: {
    name: 'Udaipur',
    fullLocationName: 'Udaipur, Rajasthan',
    slug: 'udaipur',
    description: 'The City of Lakes, famous for its romantic ambiance, beautiful palaces, and serene lake views. Perfect for couples and honeymooners.',
    heroImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('udaipur')),
    highlights: ['Lake Views', 'Palaces', 'Boat Rides', 'Romantic Getaway', 'Heritage'],
    bestTimeToVisit: 'September to March',
    averageRating: 4.8,
    totalReviews: 1456,
  },
  kerala: {
    name: 'Kerala',
    fullLocationName: 'Kerala, India',
    slug: 'kerala',
    description: 'God\'s Own Country, known for its backwaters, lush greenery, Ayurveda, and tranquil beaches.',
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('kerala')),
    highlights: ['Backwaters', 'Ayurveda', 'Beaches', 'Wildlife', 'Tea Estates'],
    bestTimeToVisit: 'October to March',
    averageRating: 4.9,
    totalReviews: 2034,
  },
  ooty: {
    name: 'Ooty',
    fullLocationName: 'Ooty, Tamil Nadu',
    slug: 'ooty',
    description: 'The Queen of Hill Stations, offering cool climate, tea gardens, and scenic beauty in the Nilgiri Hills.',
    heroImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('ooty')),
    highlights: ['Tea Gardens', 'Botanical Gardens', 'Toy Train', 'Lakes', 'Cool Climate'],
    bestTimeToVisit: 'April to June, September to November',
    averageRating: 4.5,
    totalReviews: 1123,
  },
  jaisalmer: {
    name: 'Jaisalmer',
    fullLocationName: 'Jaisalmer, Rajasthan',
    slug: 'jaisalmer',
    description: 'The Golden City, famous for its golden sand dunes, magnificent fort, and desert adventures.',
    heroImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80',
    hotels: allHotels.filter(h => h.location.toLowerCase().includes('jaisalmer')),
    highlights: ['Desert Safari', 'Golden Fort', 'Sand Dunes', 'Camel Rides', 'Cultural Shows'],
    bestTimeToVisit: 'October to March',
    averageRating: 4.7,
    totalReviews: 876,
  },
}

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return locationData[slug.toLowerCase()]
}

export const getAllLocations = (): LocationData[] => {
  return Object.values(locationData)
}
