import React from 'react'
import GlassmorphismNavbar from '../components/GlassmorphismNavbar'
import VideoHero from '../components/VideoHero'
import HotelShowcase from '../components/HotelShowcase'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import PromoBanner from '../components/PromoBanner'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Glassmorphism Navbar */}
      <GlassmorphismNavbar />

      {/* Video Hero Section */}
      <VideoHero
        videoUrl="https://www.pexels.com/download/video/3015493/"
        title="Your ♠️ when comes to stay"
        subtitle="Wrapped in warmth, styled with soul"
      />

      {/* Hotel Showcase Section */}
      <HotelShowcase />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Promo Banner Section */}
      <PromoBanner />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default HomePage

