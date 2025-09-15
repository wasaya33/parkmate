import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#16A34A] text-white p-4 shadow-md relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
      
      <div className=" mx-auto px-2 py-6">
        {/* Header Section */}
        <div className=" ">
          <h1 className="text-2xl font-bold  mb-2">My Favorite Parks</h1>
          <p className="text-gray-600">Parks you've saved for quick access</p>
        </div>

        <div className="rounded-lg  p-6">
          <div className="text-center py-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
      </div>
    </div>
  );
}

export default Favorites;