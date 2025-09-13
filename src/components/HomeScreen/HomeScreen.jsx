import React, { useState } from 'react';

const HomeScreen = ({ onNavigateToWelcome }) => {
  const [activeView, setActiveView] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample park data
  const parks = [
    {
      id: 1,
      name: "Central Park",
      description: "Expansive urban park featuring scenic walking paths, a boating lake, and various sports facilities. Perfect for nature lovers and outdoor enthusiasts.",
      amenities: ["Walking Trails", "Boating", "Playgrounds", "Sports Fields", "Picnic Areas"],
      address: "Central Park West, New York, NY 10024",
      rating: 4.8,
      imageUrl: "https://source.unsplash.com/800x600/?park,central"
    },
    {
      id: 2,
      name: "Golden Gate Park",
      description: "Sprawling park with museums, gardens, and recreational areas. A perfect blend of culture and nature in the heart of the city.",
      amenities: ["Botanical Gardens", "Museums", "Lakes", "Tea Garden", "Cycling Paths"],
      address: "501 Stanyan St, San Francisco, CA 94117",
      rating: 4.7,
      imageUrl: "https://source.unsplash.com/800x600/?park,golden-gate"
    },
    {
      id: 3,
      name: "Millennium Park",
      description: "Modern urban park known for its unique architecture and public art installations. Features outdoor concerts and events throughout the year.",
      amenities: ["Art Installations", "Concert Venue", "Ice Rink", "Gardens", "Fountains"],
      address: "201 E Randolph St, Chicago, IL 60602",
      rating: 4.6,
      imageUrl: "https://source.unsplash.com/800x600/?park,millennium"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
    

      {/* Search Bar */}
     <div className="p-4 bg-[#EBFDF1]">
  <div className="relative w-[95%] mx-auto">
    <input
      type="text"
      placeholder="Search parks by name or area..."
      className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
</div>

      {/* View Toggle */}
      <div className="p-4 border-b">
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveView('map')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              activeView === 'map' 
                ? 'bg-[#16A34A] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Map View
          </button>
          <button
            onClick={() => setActiveView('list')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              activeView === 'list' 
                ? 'bg-[#16A34A] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">
        {activeView === 'map' ? (
          // Map View
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-gray-600">Map view will be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">Interactive map with park locations</p>
            </div>
          </div>
        ) : (
          // List View
          <div className="max-w-4xl mx-auto space-y-6">
            {parks.map((park) => (
              <div key={park.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="flex">
                  <div className="w-1/3">
                    <img 
                      src={park.imageUrl} 
                      alt={park.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{park.name}</h3>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-600">{park.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{park.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {park.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#EBFDF1] text-[#16A34A] rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm">{park.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;