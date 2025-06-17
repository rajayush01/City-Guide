export const FilterStats = ({ filteredDestinations, totalDestinations, sortOption, onSortChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Showing {filteredDestinations.length} of {totalDestinations} destinations
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortOption}
            onChange={onSortChange}
          >
            <option>Rating (High to Low)</option>
            <option>Name (A to Z)</option>
            <option>Price (Low to High)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
