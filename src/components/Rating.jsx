import { Star } from "lucide-react";

export const Rating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) 
                ? 'text-yellow-400 fill-current' 
                : i < rating 
                  ? 'text-yellow-400 fill-current opacity-50' 
                  : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-gray-900">{rating}</span>
      <span className="text-sm text-gray-500">({reviews.toLocaleString()})</span>
    </div>
  );
};