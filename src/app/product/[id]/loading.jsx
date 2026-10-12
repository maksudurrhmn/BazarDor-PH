import React from 'react';

function loading() {
  return (
    <main className="min-h-screen bg-[#F0F5F0] animate-pulse">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb skeleton */}
        <nav className="mb-5 flex items-center gap-2">
          <div className="h-5 w-12 rounded bg-gray-200" />
          <div className="h-4 w-3 rounded bg-gray-200" />
          <div className="h-5 w-24 rounded bg-gray-200" />
          <div className="h-4 w-3 rounded bg-gray-200" />
          <div className="h-5 w-28 rounded bg-gray-200" />
        </nav>

        {/* Product information and today's price */}
        <section className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 rounded-2xl bg-gray-200" />

            <div className="space-y-3">
              <div className="h-6 w-36 max-w-full rounded bg-gray-200 sm:w-48" />
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="flex items-center gap-2">
                <div className="h-4 w-36 rounded bg-gray-200" />
                <div className="h-4 w-12 rounded bg-gray-200" />
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#F0F5F0] px-5 py-3 text-center sm:min-w-40">
            <div className="mx-auto mb-2 h-4 w-20 rounded bg-gray-200" />
            <div className="mx-auto mb-2 h-8 w-28 rounded bg-gray-200" />
            <div className="mx-auto h-4 w-24 rounded bg-gray-200" />
          </div>
        </section>

        {/* Price summary and market table */}
        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <div className="mb-4 h-6 w-36 rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-gray-100 p-4">
                <div className="mb-3 h-4 w-24 rounded bg-gray-200" />
                <div className="h-7 w-28 rounded bg-gray-200" />
              </div>
            ))}
          </div>

          <div className="mb-3 mt-6 h-6 w-52 max-w-full rounded bg-gray-200" />

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="overflow-x-auto">
              <div className="min-w-150">
                {/* Table header */}
                <div className="grid grid-cols-5 gap-4 bg-[#F7F9F7] px-4 py-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="h-4 rounded bg-gray-200" />
                  ))}
                </div>

                {/* Table rows */}
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="grid grid-cols-5 gap-4 border-t border-gray-100 px-4 py-4"
                  >
                    {[1, 2, 3, 4, 5].map((cell) => (
                      <div key={cell} className="h-4 rounded bg-gray-200" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default loading;
