function Favorites() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#16A34A] text-white p-4 shadow-md mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Favorite Parks</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No favorites yet</h2>
            <p className="text-gray-500">Start adding parks to your favorites list by clicking the heart icon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
