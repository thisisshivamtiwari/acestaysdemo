import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="relative bg-terracotta-texture overflow-hidden">
      {/* Wooden Texture Overlay */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link
              to="/"
              className="inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dust focus-visible:ring-offset-2 rounded-lg"
              aria-label="AceStayz home"
            >
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold font-serif text-cream mb-1">
                  AceStayz
                </span>
                <span className="text-xs text-gold-dust uppercase tracking-widest">
                  Luxury Stays
                </span>
                <div className="mt-2 h-0.5 w-16 bg-gold-dust"></div>
              </div>
            </Link>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <p className="text-cream/90 text-sm sm:text-base mb-4 leading-relaxed">
                Get hooked! Sign up to get the latest catch sent to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-cream/20 backdrop-blur-sm border border-gold-dust/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-gold-dust focus:border-transparent transition-all duration-300"
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="btn-gold-dust w-full px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider text-charcoal shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-cream font-bold text-lg uppercase tracking-wider mb-6 font-serif">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-cream/90 text-sm leading-relaxed">
                  634 Campbell Street<br />
                  Tofino, BC V0R 2Z0
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 underline underline-offset-4"
                  aria-label="View on map"
                >
                  View on Map
                </a>
              </li>
              <li>
                <a
                  href="tel:+18446804184"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300"
                  aria-label="Call us"
                >
                  +1 844-680-4184
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 underline underline-offset-4"
                  aria-label="Contact us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cream font-bold text-lg uppercase tracking-wider mb-6 font-serif">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/gift-cards"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 block"
                  aria-label="Gift cards"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 block"
                  aria-label="FAQ"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 block"
                  aria-label="Policies"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 block"
                  aria-label="Careers"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream font-bold text-lg uppercase tracking-wider mb-6 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/celebrate"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 block"
                  aria-label="Celebrate with us"
                >
                  Celebrate With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/couples"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 block"
                  aria-label="For couples"
                >
                  For Couples
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-cream/90 hover:text-gold-dust text-sm transition-colors duration-300 block"
                  aria-label="About us"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-dust/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-cream/80">
              <span>© {new Date().getFullYear()} AceStayz Inc. All Rights Reserved.</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="hidden sm:inline">|</span>
                <a
                  href="/privacy"
                  className="hover:text-gold-dust transition-colors duration-300 underline underline-offset-4"
                  aria-label="Privacy policy"
                >
                  Privacy Policy
                </a>
                <span>|</span>
                <a
                  href="/terms"
                  className="hover:text-gold-dust transition-colors duration-300 underline underline-offset-4"
                  aria-label="Terms of service"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm border border-gold-dust/30 flex items-center justify-center text-cream hover:bg-gold-dust/20 hover:border-gold-dust/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm border border-gold-dust/30 flex items-center justify-center text-cream hover:bg-gold-dust/20 hover:border-gold-dust/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm border border-gold-dust/30 flex items-center justify-center text-cream hover:bg-gold-dust/20 hover:border-gold-dust/50 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

