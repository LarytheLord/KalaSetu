"use client"

export default function TeamPageLoading() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="h-20 bg-gray-200 rounded-lg mb-12 max-w-2xl mx-auto"></div>
          
          {/* Team members grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg p-6 h-80"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}