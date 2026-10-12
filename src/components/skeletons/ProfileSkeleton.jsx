import React from 'react';

function ProfileSkeleton() {
  return (
    <main className="min-h-screen animate-pulse bg-[#F0F5F0] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Page heading */}
        <div className="mb-8">
          <div className="mb-4 h-5 w-36 rounded bg-gray-200" />
          <div className="h-9 w-32 rounded bg-gray-200" />
          <div className="mt-3 h-4 w-full max-w-md rounded bg-gray-200" />
        </div>

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Profile header */}
          <div className="flex flex-col items-center gap-4 border-b border-gray-100 p-6 sm:flex-row sm:p-8">
            <div className="h-24 w-24 shrink-0 rounded-full bg-gray-200" />

            <div className="flex w-full flex-col items-center gap-3 sm:items-start">
              <div className="h-6 w-36 rounded bg-gray-200" />
              <div className="h-4 w-48 max-w-full rounded bg-gray-200" />
              <div className="h-6 w-28 rounded-full bg-gray-200" />
            </div>
          </div>

          {/* Account information cards */}
          <div className="grid gap-4 border-b border-gray-100 p-6 sm:grid-cols-2 sm:p-8">
            {[1, 2].map((item) => (
              <div key={item} className="rounded-xl bg-gray-50 p-4">
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="mt-3 h-5 w-36 max-w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Update forms */}
          <div className="space-y-8 p-6 sm:p-8">
            {/* Update name */}
            <div className="space-y-4">
              <div className="h-5 w-44 rounded bg-gray-200" />
              <div className="h-4 w-full max-w-sm rounded bg-gray-200" />
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="h-12 w-full rounded-lg bg-gray-200" />
              <div className="h-10 w-36 rounded-2xl bg-gray-200" />
            </div>

            <div className="border-t border-gray-100" />

            {/* Update email */}
            <div className="space-y-4">
              <div className="h-5 w-40 rounded bg-gray-200" />
              <div className="h-4 w-full max-w-lg rounded bg-gray-200" />
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="h-12 w-full rounded-lg bg-gray-200" />
              <div className="h-10 w-36 rounded-xl bg-gray-200" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProfileSkeleton;
