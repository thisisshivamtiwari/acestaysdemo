import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import GlassmorphismNavbar from '../components/GlassmorphismNavbar'
import StayDetailHero from '../components/StayDetailHero'
import HotelCard from '../components/HotelCard'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import PromoBanner from '../components/PromoBanner'
import Footer from '../components/Footer'
import { getLocationBySlug } from '../utils/hotelData'

const StayDetailPage: React.FC = () => {
  const { location } = useParams<{ location: string }>()
  const { elementRef: hotelsRef, isVisible: hotelsVisible } = useScrollAnimation()

  const locationData = location ? getLocationBySlug(location) : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  if (!locationData) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-cream">
        <GlassmorphismNavbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-terracotta-dark mb-4">Location Not Found</h1>
            <p className="text-charcoal/70 mb-6">The location you're looking for doesn't exist.</p>
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
      <StayDetailHero
        locationName={locationData.name}
        fullLocationName={locationData.fullLocationName}
        description={locationData.description}
        heroImage={locationData.heroImage}
        averageRating={locationData.averageRating}
        totalReviews={locationData.totalReviews}
        highlights={locationData.highlights}
        bestTimeToVisit={locationData.bestTimeToVisit}
      />

      {/* Available Hotels Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={hotelsRef}
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              hotelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-terracotta-dark mb-4">
              <span className="block font-sans">Available Stays in</span>
              <span className="block text-gold-dust" style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>
                {locationData.name}
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Choose from our handpicked selection of premium accommodations in {locationData.name}.
            </p>
          </div>

          {/* Hotels Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ${
              hotelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {locationData.hotels.length > 0 ? (
              locationData.hotels.map((hotel, index) => (
                <div
                  key={hotel.id}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <HotelCard hotel={hotel} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-charcoal/70 text-lg">
                  No hotels available in {locationData.name} at the moment.
                </p>
                <Link
                  to="/stays"
                  className="btn-gold-dust px-6 py-3 rounded-lg font-semibold text-sm inline-block mt-4"
                >
                  Browse Other Locations
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Promo Banner Section */}
      <PromoBanner />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default StayDetailPage

