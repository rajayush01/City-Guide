import { MapPin } from "lucide-react";

export const Footer = () => {
    const categories = ['All', 'Heritage', 'Food', 'Nature', 'Entertainment'];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">CityGuide</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Discover the best destinations, restaurants, and attractions in your city. 
              Your ultimate guide to exploring and experiencing everything the city has to offer.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(1).map((category) => (
                <li key={category}>
                  <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Social Media
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CityGuide. All rights reserved. Made with ❤️ for travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};