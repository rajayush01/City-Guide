import { useState } from "react";
import { Heart, Share2, MapPin, Calendar, Phone, Globe, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { Rating } from "./Rating";

export const DestinationCard = ({ destination, onToggleExpand, isExpanded }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <ImageCarousel images={destination.images} alt={destination.name} />
        
        {destination.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full transition-all duration-200 ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white transition-all duration-200">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.name}</h3>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                destination.category === 'Heritage' ? 'bg-amber-100 text-amber-800' :
                destination.category === 'Food' ? 'bg-red-100 text-red-800' :
                destination.category === 'Nature' ? 'bg-green-100 text-green-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {destination.category}
              </span>
              <span className="text-sm text-gray-500">{destination.price}</span>
            </div>
          </div>
        </div>
        
        <Rating rating={destination.rating} reviews={destination.reviews} />
        
        <p className="text-gray-600 mt-3 mb-4">{destination.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{destination.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {isExpanded && (
          <div className="border-t pt-4 space-y-3 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <span>{destination.openHours}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span>{destination.phone}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 md:col-span-2">
                <Globe className="h-4 w-4 mr-2 text-gray-400" />
                <a href={`https://${destination.website}`} className="text-blue-600 hover:underline">
                  {destination.website}
                </a>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Get Directions</span>
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Plan Visit</span>
              </button>
            </div>
          </div>
        )}
        
        <button
          onClick={() => onToggleExpand(destination.id)}
          className="w-full mt-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 flex items-center justify-center space-x-1"
        >
          <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};