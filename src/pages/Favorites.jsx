import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Favorites({ favoriteParks, removeFromFavorites }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#16A34A] text-white p-4 shadow-md relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12极-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <Link to="/home" className="text-2xl font-bold">ParkMate</Link>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-green-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/home" className="font-medium hover:text-gray-200 transition">
              Home
            </Link>
            <Link to="/favorites" className="font-medium hover:text-gray-200 transition">
              Favorites
            </Link>
            <Link to="/settings" className="font-medium hover:text-gray-200 transition">
              Settings
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#16A34A] shadow-lg z-50">
              <div className="px-4 py-3 space-y-4">
                <Link 
                  to="/home" 
                  className="block font-medium hover:text-gray-200 transition py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/favorites" 
                  className="block font-medium hover:text-gray-200 transition py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Favorites
                </Link>
                <Link 
                  to="/settings" 
                  className="block font-medium hover:text-gray-200 transition py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Settings
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">My Favorite Parks</h1>
          <p className="text-gray-600">Parks you've saved for quick access</p>
        </div>

        {favoriteParks.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.极64 0z" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">No favorites yet</h2>
              <p className="text-gray-500 mb-6">Mark parks as favorites to see them here</p>
              <Link 
                to="/home" 
                className="inline-block bg-[#16A34A] text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition"
              >
                Find Parks
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteParks.map((park) => (
              <div key={park.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="h-48">
                    <img 
                      src={park.imageUrl} 
                      alt={park.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{park.name}</h3>
                      <button
                        onClick={() => removeFromFavorites(park.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{park.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {park.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-[#EBFDF1] text-[#16A34A] rounded-full text-xs"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-xs truncate">{park.address}</p>
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
}

export default Favorites;