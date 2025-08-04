# Agnes Pet Shop - Project Planning Document

## Project Overview
A modern, animated pet shop company profile website specializing in dogs, featuring interactive elements and smooth animations using React, Tailwind CSS, and GSAP.

## Technology Stack
- **Frontend Framework**: React with Vite v7.0.6 (Latest)
- **Styling**: Tailwind CSS v4.1.*
- **Animation Library**: GSAP v3.13.0
- **API**: Dog CEO API (https://dog.ceo)
- **Maps**: Google Maps Embed API (Mock implementation)

## Color Palette
- **Primary**: Soft Mint Green (#A8E6CF)
- **Secondary**: Sky Blue (#87CEEB)
- **Accent**: Pastel Blue (#B8E3F5)
- **Background**: Off-White (#FDFEFE)
- **Text Primary**: Dark Gray (#2C3E50)
- **Text Secondary**: Medium Gray (#7F8C8D)

## Project Structure
```
agnes-pet-shop/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── Loader.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedDogs.jsx
│   │   │   └── Services.jsx
│   │   ├── catalog/
│   │   │   ├── DogGrid.jsx
│   │   │   ├── DogCard.jsx
│   │   │   ├── DogDetails.jsx
│   │   │   └── BreedFilter.jsx
│   │   ├── about/
│   │   │   ├── CompanyStory.jsx
│   │   │   └── TeamSection.jsx
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx
│   │   │   └── LocationMap.jsx
│   │   └── article/
│   │       ├── ArticleList.jsx
│   │       └── ArticleCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Articles.jsx
│   ├── hooks/
│   │   ├── useDogAPI.js
│   │   └── useAnimation.js
│   ├── utils/
│   │   ├── api.js
│   │   └── animations.js
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Dog CEO API Documentation

### Base URL
`https://dog.ceo/api`

### Endpoints Used

1. **Get All Breeds**
   - Endpoint: `/breeds/list/all`
   - Method: GET
   - Response: 
   ```json
   {
     "message": {
       "affenpinscher": [],
       "african": [],
       "bulldog": ["boston", "english", "french"],
       ...
     },
     "status": "success"
   }
   ```

2. **Get Random Dog Image**
   - Endpoint: `/breeds/image/random`
   - Method: GET
   - Response:
   ```json
   {
     "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
     "status": "success"
   }
   ```

3. **Get Multiple Random Images**
   - Endpoint: `/breeds/image/random/{count}`
   - Method: GET
   - Max count: 50
   - Response:
   ```json
   {
     "message": ["url1", "url2", "url3"],
     "status": "success"
   }
   ```

4. **Get Images by Breed**
   - Endpoint: `/breed/{breed}/images`
   - Method: GET
   - Response:
   ```json
   {
     "message": ["url1", "url2", ...],
     "status": "success"
   }
   ```

5. **Get Random Image by Breed**
   - Endpoint: `/breed/{breed}/images/random`
   - Method: GET
   - Response:
   ```json
   {
     "message": "image_url",
     "status": "success"
   }
   ```

## Page Specifications

### 1. Home Page
**Components:**
- **Hero Section**
  - Animated headline with GSAP text reveal
  - CTA buttons with hover animations
  - Background with parallax dog images
- **Featured Dogs Carousel**
  - Displays 6 random dog images
  - GSAP-powered smooth transitions
  - Auto-rotate with pause on hover
- **Services Grid**
  - Dog adoption process
  - Training services
  - Grooming services
  - Health checkups
- **Testimonials**
  - Customer reviews with fade-in animations

**Animations:**
- Hero text: SplitText animation on load
- Scroll-triggered animations for sections
- Hover effects on service cards
- Smooth parallax scrolling

### 2. Catalog & Dog Details
**Features:**
- **Breed Filter Dropdown**
  - Populated from API breeds list
  - Search functionality
  - Clear filter option
- **Dog Grid Display**
  - Responsive grid (3 columns desktop, 2 tablet, 1 mobile)
  - Lazy loading images
  - Hover scale animation
- **Dog Details Modal/Page**
  - Enlarged image view
  - Mock dog information:
    - Name (generated)
    - Age (random 1-12 years)
    - Temperament
    - Size
    - Adoption status
  - Image gallery (5 images of same breed)
  - Adoption inquiry button

**Animations:**
- Grid items stagger animation on load
- Image zoom on hover
- Modal slide-in animation
- Gallery swipe animations

### 3. About Us Page
**Sections:**
- **Company Story**
  - Timeline with scroll animations
  - Mission and vision statements
- **Team Section**
  - Team member cards with flip animations
  - Mock team data
- **Our Values**
  - Icon animations on scroll
- **Achievements**
  - Counter animations for statistics

**Mock Content:**
- Founded in 2015
- 500+ dogs adopted
- 20+ expert staff
- 3 locations

### 4. Contact Us Page
**Components:**
- **Contact Form**
  - Name, Email, Phone, Message fields
  - Form validation
  - Submit animation
  - Success/error messages
- **Google Maps Embed**
  - Mock location in Jakarta
  - Custom styled map
  - Store markers
- **Contact Information**
  - Address cards with hover effects
  - Phone numbers
  - Email addresses
  - Operating hours

**Map Implementation:**
```javascript
// Mock Google Maps embed
const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5205328471877!2d106.82496231476897!3d-6.175110395515334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1234567890`;
```

### 5. Articles Page
**Features:**
- **Article Categories**
  - Dog Care Tips
  - Training Guides
  - Health & Nutrition
  - Breed Spotlights
- **Article Grid**
  - Featured article hero
  - Grid layout for other articles
  - Read time indicators
- **Article Cards**
  - Thumbnail images (from API)
  - Title, excerpt, date
  - Author information
  - Hover animations

**Mock Articles Data:**
```javascript
const articles = [
  {
    id: 1,
    title: "10 Essential Tips for First-Time Dog Owners",
    excerpt: "Starting your journey as a dog parent...",
    category: "Dog Care Tips",
    readTime: "5 min read",
    date: "2024-01-15",
    author: "Dr. Sarah Johnson"
  },
  // More articles...
];
```

## Animation Specifications

### GSAP Animations Library
```javascript
// animations.js
export const animations = {
  // Hero animations
  heroTimeline: () => {
    const tl = gsap.timeline();
    tl.from(".hero-title", { 
      y: 100, 
      opacity: 0, 
      duration: 1.2, 
      ease: "power3.out" 
    })
    .from(".hero-subtitle", { 
      y: 50, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.5");
    return tl;
  },
  
  // Scroll triggers
  scrollReveal: (element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    });
  },
  
  // Hover animations
  cardHover: (element) => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  }
};
```

## API Integration Pattern

### Custom Hook Example
```javascript
// useDogAPI.js
import { useState, useEffect } from 'react';

export const useDogAPI = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api${endpoint}`);
        const result = await response.json();
        if (result.status === 'success') {
          setData(result.message);
        } else {
          throw new Error('API request failed');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
```

## Component Architecture

### Reusable Components
1. **DogCard Component**
   - Image display with loading state
   - Breed name overlay
   - Hover animations
   - Click handler for details

2. **LoadingSpinner Component**
   - GSAP-powered loading animation
   - Pastel color scheme

3. **AnimatedSection Component**
   - Wrapper for scroll-triggered animations
   - Configurable animation options

## State Management
- React Context for global state (selected breed, favorites)
- Local component state for UI interactions
- Custom hooks for API calls

## Performance Optimization
1. **Image Optimization**
   - Lazy loading with Intersection Observer
   - Progressive image loading
   - Cached API responses

2. **Code Splitting**
   - Route-based code splitting
   - Dynamic imports for heavy components

3. **Animation Performance**
   - GSAP's will-change optimization
   - RequestAnimationFrame for smooth animations
   - Debounced scroll events

## Responsive Design Breakpoints
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Mobile landscape
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px'  // Extra large
    }
  }
};
```

## Development Phases

### Phase 1: Foundation (Week 1)
- Project setup with Vite + React
- Configure Tailwind CSS
- Setup GSAP
- Create basic routing
- Implement common components (Header, Footer)

### Phase 2: Core Features (Week 2)
- Integrate Dog CEO API
- Build Home page with animations
- Implement Catalog page with filtering
- Create Dog details modal/page

### Phase 3: Additional Pages (Week 3)
- Develop About Us page
- Build Contact page with map
- Create Articles section
- Add all animations and transitions

### Phase 4: Polish & Optimization (Week 4)
- Performance optimization
- Cross-browser testing
- Mobile responsiveness fine-tuning
- Final animations adjustments
- Deployment preparation

## Deployment Considerations
- Build optimization with Vite
- Environment variables for API endpoints
- CDN for static assets
- Performance monitoring setup
- SEO optimization

## Mock Data Structure
```javascript
// mockData.js
export const mockDogDetails = {
  generateDogInfo: (breed) => ({
    name: generateRandomName(),
    age: Math.floor(Math.random() * 12) + 1,
    gender: Math.random() > 0.5 ? 'Male' : 'Female',
    size: getSizeByBreed(breed),
    temperament: getTemperamentByBreed(breed),
    adoptionFee: Math.floor(Math.random() * 500) + 200,
    vaccinated: true,
    neutered: Math.random() > 0.3,
    description: generateDescription(breed)
  })
};
```