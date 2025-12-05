# AceStayz User Section Architecture
## Flowchart & Component Inventory

**Document Created:** January 2025  
**Purpose:** Planning document for Admin Panel development

---

## 📊 USER SECTION FLOWCHART

```
┌─────────────────────────────────────────────────────────────────┐
│                         APPLICATION ENTRY                        │
│                          (index.html)                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                    ┌────────────────┐
                    │   AppRouter    │
                    │  (AppRouter.tsx)│
                    └────────┬───────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────┐   ┌──────────────┐   ┌─────────────────┐
│ ComingSoonPage│   │  HomePage    │   │ HotelDetailPage  │
│   Route: /    │   │ Route: /home │   │ Route: /hotel/  │
│   /comingsoon │   │   /main      │   │      :slug      │
└───────┬───────┘   └──────┬───────┘   └────────┬────────┘
        │                  │                     │
        │                  │                     │
        │    ┌─────────────┴─────────────┐       │
        │    │                          │       │
        │    ▼                          ▼       │
        │  ┌─────────────────────────────────┐ │
        │  │      Navigation Component       │ │
        │  │   (Fixed Top Bar - All Pages)   │ │
        │  └─────────────────────────────────┘ │
        │                                        │
        │    ┌──────────────────────────────────┘
        │    │
        │    ▼
        │  ┌─────────────────────────────────┐
        │  │      Footer Component           │
        │  │   (Bottom Bar - Most Pages)     │
        │  └─────────────────────────────────┘
        │
        │
        ▼
┌───────────────────────────────────────────────────────────────┐
│                    COMING SOON PAGE                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ • Animated Badge: "Crafting Your Perfect Stay"       │  │
│  │ • Main Heading: "Something Delightful Is Cooking"    │  │
│  │ • Feature Cards:                                      │  │
│  │   - Smooth Booking                                   │  │
│  │   - Exclusive Offers                                 │  │
│  │   - Premium Comfort                                  │  │
│  │ • Brand Messaging                                    │  │
│  └──────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘

        │
        ▼
┌───────────────────────────────────────────────────────────────┐
│                      HOMEPAGE                                 │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ 1. Navigation                                        │    │
│  │    └─> Hotels Dropdown (10 Cities)                  │    │
│  │    └─> About Us Link                                │    │
│  │    └─> Franchise Partner Link                       │    │
│  │    └─> Login/Join Button                            │    │
│  │                                                      │    │
│  │ 2. HeroSection                                       │    │
│  │    └─> Background Image with Overlay                 │    │
│  │    └─> Headline: "Premium Accommodation, hello       │    │
│  │         acestayz"                                    │    │
│  │    └─> Search Bar                                    │    │
│  │    └─> CTA Elements                                  │    │
│  │                                                      │    │
│  │ 3. ShuffleHero                                       │    │
│  │    └─> Animated Shuffling Content                    │    │
│  │                                                      │    │
│  │ 4. MouseImageTrailHero                               │    │
│  │    └─> Interactive Mouse Trail Effects               │    │
│  │                                                      │    │
│  │ 5. HotelShowcase                                     │    │
│  │    └─> Featured Hotels Grid/Carousel                 │    │
│  │    └─> Hotel Cards with Images                       │    │
│  │    └─> Quick Booking Access                          │    │
│  │                                                      │    │
│  │ 6. FeaturesShowcase                                  │    │
│  │    └─> Key Features Display                          │    │
│  │                                                      │    │
│  │ 7. BentoGridShowcase                                 │    │
│  │    └─> Modern Bento Grid Layout                     │    │
│  │                                                      │    │
│  │ 8. Footer                                            │    │
│  │    └─> Brand Section                                 │    │
│  │    └─> Quick Links                                   │    │
│  │    └─> Support Links                                 │    │
│  │    └─> Contact Info                                  │    │
│  │    └─> Social Media Links                           │    │
│  └──────────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────────┘
        │
        │ (Click on Hotel Card)
        ▼
┌───────────────────────────────────────────────────────────────┐
│                  HOTEL DETAIL PAGE                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 1. Navigation                                         │  │
│  │                                                       │  │
│  │ 2. HeroSlider (Auto-rotating)                        │  │
│  │    └─> Multiple Hotel Images                         │  │
│  │    └─> Previous/Next Controls                       │  │
│  │    └─> View Video Button                             │  │
│  │    └─> View All Images Button                        │  │
│  │    └─> Camera Icon Button                            │  │
│  │                                                       │  │
│  │ 3. Summary Bar (Blue Background)                     │  │
│  │    └─> Hotel Name                                    │  │
│  │    └─> Rating (5.0 stars)                           │  │
│  │    └─> Location                                     │  │
│  │    └─> Date Picker (Check-in/Check-out)             │  │
│  │                                                       │  │
│  │ 4. Tab Navigation                                    │  │
│  │    ├─> Rooms (Active by default)                    │  │
│  │    ├─> Amenities                                    │  │
│  │    ├─> Reviews                                      │  │
│  │    ├─> Location                                     │  │
│  │    ├─> Highlights                                   │  │
│  │    └─> FAQs                                         │  │
│  │                                                       │  │
│  │ 5. RoomsGrid (Section: #rooms)                       │  │
│  │    └─> Room Cards Grid                               │  │
│  │    └─> Room Images                                  │  │
│  │    └─> Room Details (Guests, Area)                  │  │
│  │    └─> Pricing with Discounts                       │  │
│  │    └─> Book Button                                  │  │
│  │                                                       │  │
│  │ 6. Amenities Section                                 │  │
│  │    └─> AmenitiesGrid Component                       │  │
│  │                                                       │  │
│  │ 7. ReviewsCarousel (Section: #reviews)              │  │
│  │    └─> Customer Reviews Slider                       │  │
│  │                                                       │  │
│  │ 8. GalleryStrip                                      │  │
│  │    └─> Horizontal Image Scroller                    │  │
│  │                                                       │  │
│  │ 9. LocationAbout (Section: #location)               │  │
│  │    └─> Location Information                          │  │
│  │    └─> Nearby Attractions                           │  │
│  │                                                       │  │
│  │ 10. BentoGridShowcase (Section: #highlights)        │  │
│  │     └─> Hotel Highlights                            │  │
│  │                                                       │  │
│  │ 11. FAQ (Section: #faqs)                            │  │
│  │     └─> Frequently Asked Questions                 │  │
│  │                                                       │  │
│  │ 12. HotelShowcase                                    │  │
│  │     └─> Related/Other Hotels                        │  │
│  │                                                       │  │
│  │ 13. Footer                                          │  │
│  │                                                       │  │
│  │ MODALS/BOTTOM SHEETS:                               │  │
│  │ ┌─────────────────────────────────────────────┐    │  │
│  │ │ BottomSheetGallery (Fullscreen Gallery)     │    │  │
│  │ │  └─> Sections: Rooms, Lobby, Dining, Exterior│    │  │
│  │ │  └─> Swipeable Image Gallery                  │    │  │
│  │ └─────────────────────────────────────────────┘    │  │
│  │ ┌─────────────────────────────────────────────┐    │  │
│  │ │ BottomSheetCalendar (Date Picker)           │    │  │
│  │ │  └─> Check-in Date Selection                 │    │  │
│  │ │  └─> Check-out Date Selection                │    │  │
│  │ └─────────────────────────────────────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

---

## 📦 COMPLETE COMPONENT INVENTORY

### 🎯 MAIN LAYOUT COMPONENTS

#### 1. Navigation (`src/components/Navigation.tsx`)
**Purpose:** Fixed top navigation bar present on all user-facing pages

**Features:**
- Fixed position with backdrop blur
- Responsive mobile hamburger menu
- Hotels dropdown with 10 city cards (Noida, Delhi, Gurugram, Jaipur, Goa, Bangalore, Chennai, Hyderabad, Mumbai, Pune)
- City cards with images and hover effects
- About Us link
- Franchise Partner link
- Login/Join CTA button
- Desktop and mobile navigation variants

**State Management:**
- `isMenuOpen` - Mobile menu toggle
- `isHotelsDropdownOpen` - Hotels dropdown toggle

**Props:** None (self-contained)

---

#### 2. Footer (`src/components/Footer.tsx`)
**Purpose:** Site footer with links and contact information

**Features:**
- Brand section with logo
- Quick Links (Why AceStayz?, Developers & Owners, Careers, Loyalty Program)
- Support Links (Contact Us, For the Press, In the Media, About Us)
- Contact Information (Address, Phone, Email)
- Social Media Links (Instagram, Twitter, YouTube, Facebook)
- Footer bottom with copyright and legal links
- Blue theme (#4B9CD3)

**Props:** None

---

### 🏠 HOMEPAGE COMPONENTS

#### 3. HeroSection (`src/components/HeroSection.tsx`)
**Purpose:** Main hero section with search functionality

**Features:**
- Full-screen hero with background image
- Gradient overlay (black/transparent)
- Main headline: "Premium Accommodation, hello acestayz"
- Tagline text
- Search bar with form submission
- Call-to-action elements
- Responsive layout

**State Management:**
- `searchQuery` - Search input value

**Props:** None

---

#### 4. ShuffleHero (`src/components/ShuffleHero.tsx`)
**Purpose:** Animated hero section with shuffling content

**Features:**
- Animated shuffling text/content
- Visual effects and transitions
- Used as secondary hero section

**Props:** Unknown (needs verification)

---

#### 5. MouseImageTrailHero (`src/components/MouseImageTrailHero.tsx`)
**Purpose:** Interactive hero with mouse trail image effects

**Features:**
- Mouse movement tracking
- Image trail effects
- Interactive visual elements

**Props:**
- `children` - React.ReactNode
- `images` - string[]
- `renderImageBuffer` - number

---

#### 6. HotelShowcase (`src/components/HotelShowcase.tsx`)
**Purpose:** Display featured hotels in grid/carousel format

**Features:**
- Hotel cards grid layout
- Hotel images
- Hotel details (name, location, type)
- Quick booking access
- Hover effects
- Responsive design

**Props:** Unknown (needs verification)

---

#### 7. FeaturesShowcase (`src/components/FeaturesShowcase.tsx`)
**Purpose:** Highlight key features and services

**Features:**
- Feature cards display
- Service highlights
- Visual icons/illustrations
- Responsive grid layout

**Props:** Unknown (needs verification)

---

#### 8. BentoGridShowcase (`src/components/BentoGridShowcase.tsx`)
**Purpose:** Modern bento grid layout showcasing content

**Features:**
- Bento grid layout (asymmetric grid)
- Multiple content blocks
- Visual hierarchy
- Responsive design
- Used on both HomePage and HotelDetailPage

**Props:** Unknown (needs verification)

---

### 🏨 HOTEL DETAIL PAGE COMPONENTS

#### 9. RoomsGrid (`src/components/detail/RoomsGrid.tsx`)
**Purpose:** Display available room types in a grid

**Features:**
- Room cards in grid layout
- Room images
- Room details (guests max, area in sq. ft.)
- Pricing with discounts (strikethrough original price)
- "onwards" pricing indicator
- Book button per room
- Uses Base components (AnimatedInView, GlassCard, PrimaryButton, Section)

**Props:** None

**Uses Base Components:**
- `AnimatedInView` - Animation wrapper
- `GlassCard` - Glass morphism card
- `PrimaryButton` - Primary action button
- `Section` - Section wrapper

---

#### 10. AmenitiesGrid (`src/components/detail/AmenitiesGrid.tsx`)
**Purpose:** Show hotel amenities in a grid layout

**Features:**
- Amenities list/grid
- Icon-based display
- Uses Base components

**Props:** None

**Uses Base Components:**
- `Section` - Section wrapper
- `FiShield` icon from react-icons

---

#### 11. ReviewsCarousel (`src/components/detail/ReviewsCarousel.tsx`)
**Purpose:** Customer reviews carousel/slider

**Features:**
- Reviews slider/carousel
- Customer testimonials
- Star ratings
- Navigation controls
- Uses Base components

**Props:** None

**Uses Base Components:**
- `Section` - Section wrapper
- `FiStar` icon from react-icons

---

#### 12. LocationAbout (`src/components/detail/LocationAbout.tsx`)
**Purpose:** Location information and nearby attractions

**Features:**
- Location details
- Nearby attractions
- Map integration (possibly)
- Address information

**Props:** Unknown (needs verification)

---

#### 13. FAQ (`src/components/detail/FAQ.tsx`)
**Purpose:** Frequently asked questions section

**Features:**
- FAQ accordion/list
- Expandable questions
- Answers display
- Uses Base components

**Props:** None

**Uses Base Components:**
- `Section` - Section wrapper

---

#### 14. OtherHotelsGrid (`src/components/detail/OtherHotelsGrid.tsx`)
**Purpose:** Related/similar hotels grid

**Features:**
- Related hotels display
- Hotel cards
- Navigation to other hotels

**Props:** Unknown (needs verification)

---

#### 15. BottomSheetGallery (`src/components/detail/BottomSheetGallery.tsx`)
**Purpose:** Fullscreen gallery bottom sheet modal

**Features:**
- Fullscreen modal overlay
- Image sections (Rooms, Lobby, Dining, Exterior)
- Swipeable image gallery
- Close button
- Section navigation

**Props:**
- `open` - boolean (modal open state)
- `onClose` - function (close handler)
- `sections` - array of section objects with title and images

**State Management:**
- Controlled by parent (HotelDetailPage)

---

#### 16. BottomSheetCalendar (`src/components/detail/BottomSheetCalendar.tsx`)
**Purpose:** Date picker bottom sheet modal

**Features:**
- Fullscreen modal overlay
- Calendar interface
- Check-in date selection
- Check-out date selection
- Date range validation
- Confirm button

**Props:**
- `open` - boolean (modal open state)
- `onClose` - function (close handler)
- `initialStart` - Date | undefined
- `initialEnd` - Date | undefined
- `onConfirm` - function (start, end) => void

**State Management:**
- Controlled by parent (HotelDetailPage)

---

### 🛠️ BASE/UTILITY COMPONENTS

#### 17. Base (`src/components/detail/Base.tsx`)
**Purpose:** Reusable base components for detail pages

**Exports:**

**a) AnimatedInView**
- Framer Motion wrapper
- Scroll-triggered animations
- Fade-in and scale effects
- Props: `children`, `className`

**b) Section**
- Section wrapper component
- Title and subtitle support
- ID for anchor links
- Props: `title`, `subtitle`, `id`, `children`

**c) GlassCard**
- Glass morphism card component
- Backdrop blur effect
- Hover animations
- Props: `children`, `className`

**d) PrimaryButton**
- Primary action button
- Brand blue color (#4B9CD3)
- Hover effects
- Props: Standard button props + `className`

**e) Tag**
- Tag/badge component
- Light blue background
- Props: `children`

**Constants:**
- `brandBlue` - '#4B9CD3'

---

## 📄 PAGE COMPONENTS

### 1. ComingSoonPage (`src/pages/ComingSoonPage.tsx`)
**Route:** `/`, `/comingsoon`

**Components Used:**
- None (standalone page)

**Features:**
- Animated fade-in entrance
- Badge: "Crafting Your Perfect Stay"
- Main heading: "Something Delightful Is Cooking"
- Feature cards (3 cards)
- Brand messaging
- No footer (commented out)

**State:**
- `isVisible` - Animation trigger

---

### 2. HomePage (`src/pages/HomePage.tsx`)
**Route:** `/home`, `/main`

**Components Used:**
1. Navigation
2. HeroSection
3. ShuffleHero
4. MouseImageTrailHero
5. HotelShowcase
6. FeaturesShowcase
7. BentoGridShowcase
8. Footer

**Layout:**
- Vertical stacking of components
- Full-width sections

---

### 3. HotelDetailPage (`src/pages/HotelDetailPage.tsx`)
**Route:** `/hotel/:slug`

**Components Used:**
1. Navigation
2. HeroSlider (inline component)
3. Summary Bar (inline component)
4. Tab Navigation (inline component)
5. RoomsGrid
6. AmenitiesGrid
7. ReviewsCarousel
8. GalleryStrip (inline component)
9. LocationAbout
10. BentoGridShowcase
11. FAQ
12. HotelShowcase
13. Footer
14. BottomSheetGallery (modal)
15. BottomSheetCalendar (modal)

**State Management:**
- `galleryOpen` - Gallery modal state
- `calendarOpen` - Calendar modal state
- `selectedStart` - Check-in date
- `selectedEnd` - Check-out date

**Inline Components:**
- HeroSlider - Image slider with controls
- Summary Bar - Hotel info and date picker
- Tab Icon - Tab navigation items
- GalleryStrip - Horizontal image scroller

---

## 🔄 NAVIGATION FLOW

```
User Journey:
1. Landing → ComingSoonPage (/)
   └─> (Future: Redirect to HomePage)

2. HomePage (/home, /main)
   ├─> Click Hotel Card → HotelDetailPage (/hotel/:slug)
   ├─> Click Navigation Links → (Future pages)
   └─> Click Hotels Dropdown → Filter by City (Future)

3. HotelDetailPage (/hotel/:slug)
   ├─> Click Book Button → (Future: Booking Flow)
   ├─> Click Gallery → BottomSheetGallery (Modal)
   ├─> Click Date Picker → BottomSheetCalendar (Modal)
   ├─> Click Related Hotel → Navigate to Another HotelDetailPage
   └─> Scroll to Sections → Anchor Links (#rooms, #amenities, etc.)

4. Navigation Actions:
   ├─> Hotels Dropdown → City Selection (Future: City Listing Page)
   ├─> About Us → (Future: About Page)
   ├─> Franchise Partner → (Future: Franchise Page)
   └─> Login/Join → (Future: Auth Pages)
```

---

## 📊 COMPONENT USAGE MATRIX

| Component | ComingSoonPage | HomePage | HotelDetailPage |
|-----------|---------------|----------|-----------------|
| Navigation | ❌ | ✅ | ✅ |
| Footer | ❌ | ✅ | ✅ |
| HeroSection | ❌ | ✅ | ❌ |
| ShuffleHero | ❌ | ✅ | ❌ |
| MouseImageTrailHero | ❌ | ✅ | ❌ |
| HotelShowcase | ❌ | ✅ | ✅ |
| FeaturesShowcase | ❌ | ✅ | ❌ |
| BentoGridShowcase | ❌ | ✅ | ✅ |
| RoomsGrid | ❌ | ❌ | ✅ |
| AmenitiesGrid | ❌ | ❌ | ✅ |
| ReviewsCarousel | ❌ | ❌ | ✅ |
| LocationAbout | ❌ | ❌ | ✅ |
| FAQ | ❌ | ❌ | ✅ |
| BottomSheetGallery | ❌ | ❌ | ✅ |
| BottomSheetCalendar | ❌ | ❌ | ✅ |

---

## 🎨 DESIGN SYSTEM

### Colors
- **Primary Blue:** #4B9CD3
- **Background:** Gray-50, Gray-100
- **Text:** Gray-900, Gray-700, Gray-600
- **Accents:** White, Black overlays

### Typography
- **Headings:** Bold, large (text-2xl to text-7xl)
- **Body:** Regular weight, readable sizes
- **Fonts:** System fonts stack

### Spacing
- **Container:** max-w-7xl
- **Padding:** px-4 sm:px-6 lg:px-8
- **Sections:** py-12, py-16

### Components Style
- **Cards:** Rounded-2xl, shadow-sm/shadow-xl
- **Buttons:** Rounded-xl, primary blue background
- **Modals:** Fullscreen bottom sheets
- **Animations:** Framer Motion, CSS transitions

---

## 🔮 FUTURE PAGES (From PRD)

### Planned User Pages:
1. **About Us Page** - Company information
2. **Franchise Partner Page** - Partnership opportunities
3. **Career Page** - Job listings
4. **Contact Page** - Contact form and information
5. **City Listing Pages** - Hotels by city (Noida, Delhi, etc.)
6. **Booking Page** - Booking flow
7. **User Profile Page** - User account management
8. **Booking History** - Past bookings
9. **Payment Page** - Payment processing
10. **Search Results Page** - Filtered hotel listings

---

## 📝 ADMIN PANEL PLANNING NOTES

### Data Management Needed:

#### Hotels Management
- CRUD operations for hotels
- Hotel images management (multiple images per hotel)
- Room types management
- Amenities management
- Location data management
- Pricing management

#### Bookings Management
- View all bookings
- Booking status management
- Check-in/Check-out dates
- Guest information
- Payment status

#### Users Management
- User accounts
- User profiles
- Booking history per user

#### Content Management
- FAQ management
- Reviews moderation
- Testimonials management
- Feature highlights
- Bento grid content

#### Settings
- Site settings
- Email templates
- Notification settings
- Payment gateway configuration

---

## 🗂️ FILE STRUCTURE SUMMARY

```
src/
├── pages/
│   ├── ComingSoonPage.tsx
│   ├── HomePage.tsx
│   └── HotelDetailPage.tsx
│
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ShuffleHero.tsx
│   ├── MouseImageTrailHero.tsx
│   ├── HotelShowcase.tsx
│   ├── FeaturesShowcase.tsx
│   ├── BentoGridShowcase.tsx
│   └── detail/
│       ├── Base.tsx
│       ├── RoomsGrid.tsx
│       ├── AmenitiesGrid.tsx
│       ├── ReviewsCarousel.tsx
│       ├── LocationAbout.tsx
│       ├── FAQ.tsx
│       ├── OtherHotelsGrid.tsx
│       ├── BottomSheetGallery.tsx
│       └── BottomSheetCalendar.tsx
│
└── routes/
    └── AppRouter.tsx
```

---

**Document End**

*This document serves as a reference for planning admin panel features that correspond to user-facing functionality.*

