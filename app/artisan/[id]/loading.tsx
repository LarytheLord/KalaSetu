"use client"

export default function ArtisanProfileLoading() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          {/* Profile header skeleton */}
          <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
          
          {/* Profile content skeleton */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="h-80 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-10 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-20 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="md:w-2/3">
              <div className="h-12 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-40 bg-gray-200 rounded-lg mb-6"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-60 bg-gray-200 rounded-lg"></div>
                <div className="h-60 bg-gray-200 rounded-lg"></div>
                <div className="h-60 bg-gray-200 rounded-lg"></div>
                <div className="h-60 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}