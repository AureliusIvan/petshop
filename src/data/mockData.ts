// Mock data for the Agnes Pet Shop application

// Dog names for random generation
const dogNames = [
  'Max', 'Buddy', 'Charlie', 'Jack', 'Cooper', 'Rocky', 'Toby', 'Tucker', 'Jake', 'Bear',
  'Duke', 'Teddy', 'Oliver', 'Riley', 'Bailey', 'Bentley', 'Milo', 'Buster', 'Cody', 'Dexter',
  'Luna', 'Bella', 'Lucy', 'Molly', 'Daisy', 'Maggie', 'Sophie', 'Sadie', 'Chloe', 'Bailey',
  'Lola', 'Zoe', 'Abby', 'Ginger', 'Roxy', 'Gracie', 'Coco', 'Sasha', 'Lily', 'Angel'
];

// Dog temperaments by breed category
const temperaments = {
  sporting: ['Friendly', 'Outgoing', 'Eager', 'Alert', 'Active'],
  hound: ['Gentle', 'Patient', 'Loyal', 'Independent', 'Determined'],
  working: ['Confident', 'Courageous', 'Strong', 'Protective', 'Intelligent'],
  terrier: ['Feisty', 'Energetic', 'Bold', 'Determined', 'Alert'],
  toy: ['Charming', 'Playful', 'Affectionate', 'Lively', 'Devoted'],
  default: ['Friendly', 'Loyal', 'Playful', 'Intelligent', 'Loving']
};

// Size categories
const sizes = {
  small: ['Toy', 'Small'],
  medium: ['Medium', 'Medium-Large'],
  large: ['Large', 'Extra Large']
};

export const mockData = {
  // Generate random dog name
  generateRandomName: () => {
    return dogNames[Math.floor(Math.random() * dogNames.length)];
  },

  // Get size by breed (simplified categorization)
  getSizeByBreed: (breed) => {
    const smallBreeds = ['chihuahua', 'pug', 'terrier', 'spaniel', 'poodle'];
    const largeBreeds = ['mastiff', 'dane', 'bernard', 'shepherd', 'retriever', 'husky'];
    
    const isSmall = smallBreeds.some(small => breed.toLowerCase().includes(small));
    const isLarge = largeBreeds.some(large => breed.toLowerCase().includes(large));
    
    if (isSmall) return sizes.small[Math.floor(Math.random() * sizes.small.length)];
    if (isLarge) return sizes.large[Math.floor(Math.random() * sizes.large.length)];
    return sizes.medium[Math.floor(Math.random() * sizes.medium.length)];
  },

  // Get temperament by breed
  getTemperamentByBreed: (breed) => {
    const breedLower = breed.toLowerCase();
    let category = 'default';
    
    if (breedLower.includes('retriever') || breedLower.includes('spaniel')) category = 'sporting';
    else if (breedLower.includes('hound') || breedLower.includes('beagle')) category = 'hound';
    else if (breedLower.includes('shepherd') || breedLower.includes('mastiff')) category = 'working';
    else if (breedLower.includes('terrier')) category = 'terrier';
    else if (breedLower.includes('chihuahua') || breedLower.includes('pug')) category = 'toy';
    
    const traits = temperaments[category];
    return traits[Math.floor(Math.random() * traits.length)];
  },

  // Generate description
  generateDescription: (breed) => {
    const descriptions = [
      `This adorable ${breed} is looking for a loving forever home. They are well-socialized and great with children.`,
      `Meet this beautiful ${breed}! They love playing fetch and going on long walks. Perfect companion for an active family.`,
      `This sweet ${breed} has a gentle personality and gets along well with other pets. They would make a wonderful addition to any family.`,
      `A playful and energetic ${breed} who loves outdoor adventures. They are house-trained and ready for adoption.`,
      `This loving ${breed} enjoys cuddles and is very loyal. They have been health-checked and are up to date on vaccinations.`
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  },

  // Generate complete dog info
  generateDogInfo: (breed, imageUrl) => ({
    id: Math.random().toString(36).substr(2, 9),
    name: mockData.generateRandomName(),
    breed: breed.charAt(0).toUpperCase() + breed.slice(1),
    age: Math.floor(Math.random() * 12) + 1,
    gender: Math.random() > 0.5 ? 'Male' : 'Female',
    size: mockData.getSizeByBreed(breed),
    temperament: mockData.getTemperamentByBreed(breed),
    adoptionFee: Math.floor(Math.random() * 500) + 200,
    vaccinated: true,
    neutered: Math.random() > 0.3,
    description: mockData.generateDescription(breed),
    imageUrl: imageUrl,
    available: Math.random() > 0.1 // 90% available
  }),

  // Team members
  teamMembers: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Chief Veterinarian",
      experience: "15 years",
      specialization: "Small Animal Medicine",
      bio: "Dr. Johnson has been caring for pets for over 15 years and is passionate about animal welfare.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head Trainer",
      experience: "8 years",
      specialization: "Behavioral Training",
      bio: "Michael specializes in dog behavior and has helped hundreds of dogs find their perfect families.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Adoption Coordinator",
      experience: "6 years",
      specialization: "Family Matching",
      bio: "Emma ensures every dog finds the perfect family match and provides ongoing support to new pet owners.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    }
  ],

  // Articles data
  articles: [
    {
      id: 1,
      title: "10 Essential Tips for First-Time Dog Owners",
      excerpt: "Starting your journey as a dog parent can be overwhelming. Here are our top tips to help you prepare for your new furry family member.",
      category: "Dog Care Tips",
      readTime: "5 min read",
      date: "2024-01-15",
      author: "Dr. Sarah Johnson",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Dog Body Language",
      excerpt: "Learn to read your dog's signals and improve your communication with your four-legged friend.",
      category: "Training Guides",
      readTime: "7 min read", 
      date: "2024-01-10",
      author: "Michael Chen",
      featured: false
    },
    {
      id: 3,
      title: "Nutrition Guide: What to Feed Your Dog",
      excerpt: "A comprehensive guide to proper dog nutrition, including what foods to avoid and healthy treat options.",
      category: "Health & Nutrition",
      readTime: "6 min read",
      date: "2024-01-05",
      author: "Dr. Sarah Johnson",
      featured: false
    },
    {
      id: 4,
      title: "Golden Retriever Breed Spotlight",
      excerpt: "Everything you need to know about Golden Retrievers - temperament, care requirements, and why they make great family pets.",
      category: "Breed Spotlights",
      readTime: "4 min read",
      date: "2024-01-01",
      author: "Emma Rodriguez",
      featured: false
    }
  ],

  // Services data
  services: [
    {
      id: 1,
      title: "Dog Adoption",
      description: "Find your perfect furry companion from our carefully vetted selection of dogs.",
      icon: "🐕",
      features: ["Health screening", "Temperament assessment", "Ongoing support"]
    },
    {
      id: 2,
      title: "Training Services",
      description: "Professional training programs for dogs of all ages and skill levels.",
      icon: "🎓",
      features: ["Basic obedience", "Behavioral correction", "Advanced training"]
    },
    {
      id: 3,
      title: "Grooming",
      description: "Keep your dog looking and feeling their best with our grooming services.",
      icon: "✂️",
      features: ["Bath & brush", "Nail trimming", "Professional styling"]
    },
    {
      id: 4,
      title: "Health Checkups",
      description: "Regular health examinations to ensure your dog stays healthy and happy.",
      icon: "🏥",
      features: ["Wellness exams", "Vaccinations", "Preventive care"]
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Jennifer Smith",
      text: "Agnes Pet Shop helped us find the perfect dog for our family. The staff was incredibly knowledgeable and supportive throughout the entire process.",
      rating: 5,
      location: "Jakarta"
    },
    {
      id: 2,
      name: "David Williams",
      text: "The training program was amazing! Our rescue dog went from anxious to confident in just a few weeks. Highly recommended!",
      rating: 5,
      location: "Bandung"
    },
    {
      id: 3,
      name: "Maria Garcia",
      text: "Professional, caring, and truly passionate about animal welfare. We couldn't be happier with our adoption experience.",
      rating: 5,
      location: "Surabaya"
    }
  ]
};