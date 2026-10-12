export default function ProductCardSkeleton() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <div key={item} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* Product image and name */}
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ee]">
                <div className="h-7 w-7 rounded-lg bg-gray-200" />
              </div>

              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-5 w-32 max-w-full rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
              </div>
            </div>

            {/* Price and price change */}
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="mb-2 h-4 w-20 rounded bg-gray-200" />

                <div className="flex items-baseline gap-2">
                  <div className="h-7 w-24 rounded bg-gray-200" />
                  <div className="h-4 w-8 rounded bg-gray-200" />
                </div>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1">
                <div className="h-3 w-3 rounded-sm bg-gray-200" />
                <div className="h-3 w-8 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
