import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root path to welcome screen */}
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/home" element={
            <>
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
                    <Link to="/home" className="font-medium hover:text-gray-200 transition flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        
                      </svg>
                      Home
                    </Link>
                    <Link to="/favorites" className="font-medium hover:text-gray-200 transition flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        
                      </svg>
                      Favorites
                    </Link>
                    <Link to="/settings" className="font-medium hover:text-gray-200 transition flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        
                       
                      </svg>
                      Settings
                    </Link>
                  </div>

                  {/* Mobile Navigation Menu */}
                  {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-[#16A34A] shadow-lg z-50">
                      <div className="px-4 py-3 space-y-4">
                        <Link 
                          to="/home" 
                          className="block font-medium hover:text-gray-200 transition flex items-center gap-2 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            
                          </svg>
                          Home
                        </Link>
                        <Link 
                          to="/favorites" 
                          className="block font-medium hover:text-gray-200 transition flex items-center gap-2 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            
                          </svg>
                          Favorites
                        </Link>
                        <Link 
                          to="/settings" 
                          className="block font-medium hover:text-gray-200 transition flex items-center gap-2 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            
                          </svg>
                          Settings
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
              <Home />
            </>
          } />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;