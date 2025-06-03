export default function AnalyticsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header Skeleton */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div>
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>

          {/* Content Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
