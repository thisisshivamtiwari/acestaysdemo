import React, { useRef, useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Hotel {
  id: number
  image: string
  title: string
  location: string
  description: string
}

const HotelShowcase: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const hotels: Hotel[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      title: 'Mountain View Suite',
      location: 'Manali, Himachal Pradesh',
      description: 'Wake up to breathtaking mountain views in our luxury suite with modern amenities and cozy interiors.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      title: 'Coastal Paradise',
      location: 'Goa, India',
      description: 'Experience beachfront luxury with stunning ocean views, exceptional dining, and world-class hospitality.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      title: 'Heritage Elegance',
      location: 'Jaipur, Rajasthan',
      description: 'Immerse yourself in royal luxury with traditional architecture, modern comfort, and authentic experiences.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      title: 'Spa & Wellness Retreat',
      location: 'Rishikesh, Uttarakhand',
      description: 'Rejuvenate your mind and body in our serene wellness retreat surrounded by nature and tranquility.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      title: 'Sunset Terrace',
      location: 'Udaipur, Rajasthan',
      description: 'Enjoy stunning sunset views from our elegant terrace overlooking the beautiful lakes and palaces.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Villa',
      location: 'Kerala, India',
      description: 'Experience traditional Kerala architecture with modern luxury in our spacious villas by the backwaters.',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80',
      title: 'Garden Oasis',
      location: 'Ooty, Tamil Nadu',
      description: 'Escape to our peaceful garden oasis nestled in the hills, perfect for a relaxing getaway.',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
      title: 'Desert Luxury',
      location: 'Jaisalmer, Rajasthan',
      description: 'Experience the magic of the desert in our luxurious property with traditional Rajasthani hospitality.',
    },
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.querySelector('.hotel-card') as HTMLElement
      if (cardElement) {
        const cardWidth = cardElement.clientWidth
        const gap = window.innerWidth < 640 ? 16 : window.innerWidth < 1024 ? 24 : 32
        scrollContainerRef.current.scrollBy({
          left: -cardWidth - gap,
          behavior: 'smooth',
        })
      }
    }
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.querySelector('.hotel-card') as HTMLElement
      if (cardElement) {
        const cardWidth = cardElement.clientWidth
        const gap = window.innerWidth < 640 ? 16 : window.innerWidth < 1024 ? 24 : 32
        scrollContainerRef.current.scrollBy({
          left: cardWidth + gap,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-terracotta-texture overflow-hidden">
      {/* Minimal Wooden Texture Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 60px,
          rgba(101, 67, 33, 0.08) 60px,
          rgba(101, 67, 33, 0.08) 61px
        )`
      }}></div>
      
      {/* Warm Glow Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-dust/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-dust/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            <span className="block font-sans">Wake Up Next to</span>
            <span className="block text-gold-dust" style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>
              Nature
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-cream/90 max-w-4xl mx-auto leading-relaxed">
            Awe-inspiring wilderness and wildlife, exceptional dining, and cozy rooms—we're the
            ultimate adventure destination. Find us in the heart of celebration across India.
          </p>
        </div>

        {/* Hotel Cards Horizontal Scroll Container */}
        <div
          ref={cardsRef}
          className="relative px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16"
        >
          {/* Left Scroll Button - Hidden on mobile */}
          <button
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            className={`hidden sm:flex absolute left-2 md:left-4 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-dust/95 backdrop-blur-sm shadow-lg items-center justify-center transition-all duration-300 border-2 border-gold-dust-dark/20 ${
              canScrollLeft
                ? 'opacity-100 hover:bg-gold-dust hover:scale-110 cursor-pointer'
                : 'opacity-0 cursor-not-allowed pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Scroll Button - Hidden on mobile */}
          <button
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            className={`hidden sm:flex absolute right-2 md:right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-dust/95 backdrop-blur-sm shadow-lg items-center justify-center transition-all duration-300 border-2 border-gold-dust-dark/20 ${
              canScrollRight
                ? 'opacity-100 hover:bg-gold-dust hover:scale-110 cursor-pointer'
                : 'opacity-0 cursor-not-allowed pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollPaddingLeft: '1rem',
              scrollPaddingRight: '1rem',
            }}
          >
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className={`hotel-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 flex-shrink-0 snap-start w-[calc(100vw-3rem)] sm:w-[380px] md:w-[400px] lg:w-[450px] ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-terracotta-dark/90 via-terracotta/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gold-dust/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gold-dust-dark/30 shadow-lg">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-charcoal truncate max-w-[140px] sm:max-w-none">
                      {hotel.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6 bg-cream/95 backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-terracotta-dark mb-2 sm:mb-3 font-serif group-hover:text-gold-dust transition-colors duration-300">
                  {hotel.title}
                </h3>
                <p className="text-charcoal/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
                  {hotel.description}
                </p>

                {/* CTA Button */}
                <button
                  className="group/btn inline-flex items-center gap-2 text-terracotta font-semibold text-sm hover:gap-3 hover:text-gold-dust transition-all duration-300"
                  aria-label={`Explore ${hotel.title}`}
                >
                  <span>Explore More</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dust via-terracotta to-gold-dust transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <button
            className="btn-gold-dust px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group"
            aria-label="View all properties"
          >
            <span>View All Properties</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HotelShowcase

