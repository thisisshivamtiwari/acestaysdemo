import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import GlassmorphismNavbar from '../components/GlassmorphismNavbar'
import HotelHero from '../components/HotelHero'
import HotelBookingForm from '../components/HotelBookingForm'
import RoomTypes from '../components/RoomTypes'
import AmenitiesSection from '../components/AmenitiesSection'
import HotelSpeciality from '../components/HotelSpeciality'
import PromoBanner from '../components/PromoBanner'
import Footer from '../components/Footer'
import { getDetailedHotel } from '../utils/hotelData'

const HotelDetailPage: React.FC = () => {
  const { location, hotel } = useParams<{ location: string; hotel: string }>()
  const hotelData = location && hotel ? getDetailedHotel(location, hotel) : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location, hotel])

  const handleBooking = (bookingData: {
    checkIn: string
    checkOut: string
    guests: number
    rooms: number
    roomType: number
    mealPlan: number
  }) => {
    console.log('Booking data:', bookingData)
    // Handle booking logic here
    alert('Booking functionality will be implemented here!')
  }

  if (!hotelData) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-cream">
        <GlassmorphismNavbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-terracotta-dark mb-4">Hotel Not Found</h1>
            <p className="text-charcoal/70 mb-6">The hotel you're looking for doesn't exist.</p>
            <Link
              to="/stays"
              className="btn-gold-dust px-6 py-3 rounded-lg font-semibold text-sm inline-block"
            >
              Browse All Stays
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-cream">
      {/* Navbar */}
      <GlassmorphismNavbar />

      {/* Hero Section */}
      <HotelHero hotel={hotelData} />

      {/* Booking Form Section */}
      <HotelBookingForm
        hotelName={hotelData.title}
        hotelLocation={hotelData.location}
        onBook={handleBooking}
      />

      {/* Room Types Section */}
      {hotelData.roomTypes && hotelData.roomTypes.length > 0 && (
        <RoomTypes roomTypes={hotelData.roomTypes} />
      )}

      {/* Amenities Section */}
      {hotelData.allAmenities && hotelData.allAmenities.length > 0 && (
        <AmenitiesSection amenities={hotelData.allAmenities} />
      )}

      {/* Speciality Section */}
      {hotelData.specialities && hotelData.specialities.length > 0 && (
        <HotelSpeciality specialities={hotelData.specialities} />
      )}

      {/* Promo Banner Section */}
      <PromoBanner />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HotelDetailPage

