export default function MessagesLoading() {
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
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>

          {/* Messages List Skeleton */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex justify-between">
                      <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                      <div className="flex space-x-2">
                        <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
