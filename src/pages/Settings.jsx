import { Link } from 'react-router-dom';
import { useState } from 'react';

function Settings() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="">
        <nav className="bg-[#16A34A] text-white p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <Link to="/home" className="text-2xl font-bold">Settings</Link>
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
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-2">
              <div className="flex flex-col space-y-3 px-2">
                <Link 
                  to="/home" 
                  className="font-medium hover:text-gray-200 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/favorites" 
                  className="font-medium hover:text-gray-200 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Favorites
                </Link>
                <Link 
                  to="/settings" 
                  className="font-medium hover:text-gray-200 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md divide-y">
          {/* Display Settings */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Display</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Dark Mode</span>
                <button className="w-12 h-6 rounded-full bg-gray-200">
                  <div className="w-4 h-4 ml-1 rounded-full bg-white"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Park Updates</span>
                <button className="w-12 h-6 rounded-full bg-[#16A34A]">
                  <div className="w-4 h-4 ml-7 rounded-full bg-white"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Event Notifications</span>
                <button className="w-12 h-6 rounded-full bg-[#16A34A]">
                  <div className="w-4 h-4 ml-7 rounded-full bg-white"></div>
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">About</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Version 1.0.0</p>
              <p className="text-gray-600">© 2025 ParkMate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;