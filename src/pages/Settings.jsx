function Settings() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#16A34A] text-white p-4 shadow-md mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
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
