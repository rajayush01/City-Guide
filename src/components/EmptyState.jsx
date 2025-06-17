import { Search } from "lucide-react";

export const EmptyState = ({ searchTerm, selectedCategory }) => {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
        <Search className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
      <p className="text-gray-600 mb-6">
        {searchTerm ? (
          <>No results for "{searchTerm}" in {selectedCategory === 'All' ? 'all categories' : selectedCategory}</>
        ) : (
          <>No destinations found in {selectedCategory}</>
        )}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Reset Filters
      </button>
    </div>
  );
};