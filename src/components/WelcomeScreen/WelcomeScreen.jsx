import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleNavigateToHome = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EBFDF1]">
      <div className="text-center px-6">
        {/* Logo */}
        <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl sm:text-4xl font-semibold text-black">
          ParkMate
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-700">
          Discover parks near you with ease
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:gap-6">
          <button 
            onClick={handleNavigateToHome}
            className="w-64 sm:w-80 py-3 rounded-lg bg-[#16A34A] hover:bg-emerald-600 text-white font-medium shadow-md transition"
          >
            📍 Find Parks Near Me
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="w-64 sm:w-80 py-3 rounded-lg bg-white hover:bg-slate-100 text-black font-medium shadow-md transition flex items-center justify-center gap-3"
          >
            ℹ️ How It Works
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 py-6">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold">How ParkMate Works</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
            <div className="mt-3 text-sm text-slate-700 space-y-4">
              <div>
                <p className="font-semibold">Find Parks</p>
                <p>View parks on an interactive map or in a list view. Click on pins to see details.</p>
              </div>
              <div>
                <p className="font-semibold">Filter Parks</p>
                <p>Use filters to find parks with specific features like playgrounds, jogging tracks, and more.</p>
              </div>
              <div>
                <p className="font-semibold">Save Favorites</p>
                <p>Mark parks as favorites for quick access later.</p>
              </div>
              <div>
                <p className="font-semibold">Get Directions</p>
                <p>Easily get directions to any park with a single tap.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;