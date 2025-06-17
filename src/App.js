import { useState, useEffect } from "react";
import './App.css';
import { Header } from "./components/Header";
import { FeaturedSection } from "./components/FeaturedSection";
import { QuickStats } from "./components/QuickStats";
import { FilterStats } from "./components/FilterStats";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { EmptyState } from "./components/EmptyState";
import { DestinationCard } from "./components/DestinationCard";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
export default function App() {
  const mockDestinations = [
    {
      id: 1,
      name: "Golden Gate Bridge",
      category: "Heritage",
      rating: 4.8,
      reviews: 15420,
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
      ],
      description: "Iconic suspension bridge connecting San Francisco to Marin County",
      location: "San Francisco, CA",
      openHours: "24/7",
      phone: "+1-415-921-5858",
      website: "goldengatebridge.org",
      price: "Free",
      tags: ["Iconic", "Photography", "Walking", "Cycling"],
      featured: true
    },
    {
      id: 2,
      name: "The French Laundry",
      category: "Food",
      rating: 4.9,
      reviews: 3240,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=800&h=500&fit=crop"
      ],
      description: "World-renowned fine dining restaurant by Chef Thomas Keller",
      location: "Yountville, CA",
      openHours: "5:30 PM - 9:00 PM",
      phone: "+1-707-944-2380",
      website: "thomaskeller.com",
      price: "$$$$$",
      tags: ["Fine Dining", "Michelin Star", "Wine Country", "Romantic"],
      featured: true
    },
    {
      id: 3,
      name: "Muir Woods National Monument",
      category: "Nature",
      rating: 4.7,
      reviews: 8920,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=500&fit=crop"
      ],
      description: "Ancient redwood forest with towering trees and peaceful trails",
      location: "Mill Valley, CA",
      openHours: "8:00 AM - 6:00 PM",
      phone: "+1-415-388-2596",
      website: "nps.gov/muwo",
      price: "$15 per person",
      tags: ["Hiking", "Nature", "Photography", "Family-friendly"],
      featured: false
    },
    {
      id: 4,
      name: "Fisherman's Wharf",
      category: "Entertainment",
      rating: 4.3,
      reviews: 12680,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop"
      ],
      description: "Bustling waterfront district with shops, restaurants, and sea lions",
      location: "San Francisco, CA",
      openHours: "10:00 AM - 10:00 PM",
      phone: "+1-415-674-7503",
      website: "fishermanswharf.org",
      price: "Free to explore",
      tags: ["Shopping", "Dining", "Sea Lions", "Tourist Attraction"],
      featured: false
    },
    {
      id: 5,
      name: "Tartine Bakery",
      category: "Food",
      rating: 4.6,
      reviews: 5840,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&h=500&fit=crop"
      ],
      description: "Artisanal bakery famous for its sourdough bread and pastries",
      location: "San Francisco, CA",
      openHours: "7:00 AM - 7:00 PM",
      phone: "+1-415-487-2600",
      website: "tartinebakery.com",
      price: "$$",
      tags: ["Bakery", "Coffee", "Pastries", "Local Favorite"],
      featured: false
    },
    {
      id: 6,
      name: "Palace of Fine Arts",
      category: "Heritage",
      rating: 4.5,
      reviews: 7320,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop"
      ],
      description: "Beautiful Greco-Roman style rotunda and lagoon built for 1915 exposition",
      location: "San Francisco, CA",
      openHours: "6:00 AM - 9:00 PM",
      phone: "+1-415-563-6504",
      website: "palaceoffinearts.com",
      price: "Free",
      tags: ["Architecture", "Photography", "History", "Peaceful"],
      featured: false
    },
    {
      id: 7,
      name: "Alcatraz Island",
      category: "Heritage",
      rating: 4.7,
      reviews: 18960,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop"
      ],
      description: "Historic former federal prison on an island in San Francisco Bay",
      location: "San Francisco Bay, CA",
      openHours: "9:00 AM - 6:00 PM",
      phone: "+1-415-561-4900",
      website: "alcatrazcruises.com",
      price: "$45 per adult",
      tags: ["History", "Prison", "Tour", "Ferry Ride"],
      featured: true
    },
    {
      id: 8,
      name: "Golden Gate Park",
      category: "Nature",
      rating: 4.6,
      reviews: 11240,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
      ],
      description: "Large urban park with gardens, museums, and recreational activities",
      location: "San Francisco, CA",
      openHours: "5:00 AM - 10:00 PM",
      phone: "+1-415-831-2700",
      website: "sfrecpark.org",
      price: "Free",
      tags: ["Park", "Museums", "Gardens", "Recreation"],
      featured: false
    },
    {
      id: 9,
      name: "Pier 39",
      category: "Entertainment",
      rating: 4.4,
      reviews: 16580,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop"
      ],
      description: "Popular tourist destination with shops, restaurants, and entertainment",
      location: "San Francisco, CA",
      openHours: "10:00 AM - 9:00 PM",
      phone: "+1-415-705-5500",
      website: "pier39.com",
      price: "Free to explore",
      tags: ["Shopping", "Dining", "Entertainment", "Family-friendly"],
      featured: false
    },
    {
      id: 10,
      name: "Swan Oyster Depot",
      category: "Food",
      rating: 4.8,
      reviews: 4320,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=500&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=800&h=500&fit=crop"
      ],
      description: "Historic seafood counter serving fresh oysters and Dungeness crab",
      location: "San Francisco, CA",
      openHours: "10:30 AM - 5:30 PM",
      phone: "+1-415-673-1101",
      website: "swanoysterdepot.com",
      price: "$$$",
      tags: ["Seafood", "Historic", "Counter Service", "Local Institution"],
      featured: false
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");


  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter destinations based on search term and category
  let filteredDestinations = mockDestinations.filter(destination => {
  const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

  const matchesCategory = selectedCategory === 'All' || destination.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

// Sort after filtering
filteredDestinations.sort((a, b) => {
  switch (sortOption) {
    case "Rating (High to Low)":
      return b.rating - a.rating;
    case "Name (A to Z)":
      return a.name.localeCompare(b.name);
    case "Price (Low to High)":
      // Convert to number for sorting
      const getPriceValue = (price) => {
        if (typeof price !== 'string') return Infinity;
        const numMatch = price.match(/\d+/);
        if (numMatch) return parseInt(numMatch[0], 10);
        return price.length; // fallback for "$$", "$$$$"
      };
      return getPriceValue(a.price) - getPriceValue(b.price);
    default:
      return 0;
  }
});



  const handleToggleExpand = (id) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <main>
        <FeaturedSection destinations={mockDestinations} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <QuickStats destinations={mockDestinations} />

          <FilterStats
            filteredDestinations={filteredDestinations}
            totalDestinations={mockDestinations.length}
            sortOption={sortOption}
            onSortChange={handleSortChange}
          />

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            </div>
          ) : filteredDestinations.length === 0 ? (
            <EmptyState searchTerm={searchTerm} selectedCategory={selectedCategory} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onToggleExpand={handleToggleExpand}
                  isExpanded={expandedCards.has(destination.id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTop />

    </div>
  );
}
