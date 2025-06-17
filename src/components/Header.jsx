import { useState, useEffect } from 'react';
import { MapPin, Search, Filter } from 'lucide-react';

export const Header = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, showFilters, setShowFilters }) => {
  const [isScrolled, setIsScrolled] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Heritage', 'Food', 'Nature', 'Entertainment'];


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-l from-blue-700 to-blue-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className={`h-4 w-4 sm:h-8 sm:w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <h1 className={`text-base sm:text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                CityGuide
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                isScrolled ? 'text-gray-400' : 'text-gray-300'
              }`} />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-1 sm:py-2 rounded-full w-64 transition-all duration-200 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500' 
                    : 'bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:ring-2 focus:ring-white/50'
                }`}
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-1 sm:p-2 rounded-full transition-all duration-200 ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className={`overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-20 pb-4' : 'max-h-0'}`}>
          <div className="flex space-x-2 mt-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? isScrolled
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-blue-600'
                    : isScrolled
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};