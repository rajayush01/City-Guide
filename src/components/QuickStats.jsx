import { MapPin, Star, Filter, Camera } from 'lucide-react';

export const QuickStats = ({ destinations }) => {
  const stats = [
    {
      label: 'Total Destinations',
      value: destinations.length,
      icon: MapPin,
      color: 'bg-blue-500'
    },
    {
      label: 'Average Rating',
      value: (destinations.reduce((sum, d) => sum + d.rating, 0) / destinations.length).toFixed(1),
      icon: Star,
      color: 'bg-yellow-500'
    },
    {
      label: 'Categories',
      value: new Set(destinations.map(d => d.category)).size,
      icon: Filter,
      color: 'bg-green-500'
    },
    {
      label: 'Featured',
      value: destinations.filter(d => d.featured).length,
      icon: Camera,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center transform hover:scale-105 transition-transform duration-200">
          <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
            <stat.icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};