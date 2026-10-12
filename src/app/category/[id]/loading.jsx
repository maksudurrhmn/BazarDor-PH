function loading() {
  return (
    <section className="min-h-screen animate-pulse bg-[#F0F5F0]">
      {/* Category header skeleton */}
      <div className="container mx-auto px-4 pt-16">
        <div className="flex items-center gap-4 rounded-2xl bg-white p-6 sm:p-10">
          {/* Category icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ee]">
            <div className="h-7 w-7 rounded-lg bg-gray-200" />
          </div>

          {/* Category name and product count */}
          <div className="min-w-0 flex-1 space-y-3">
            <div className="h-6 w-40 max-w-full rounded bg-gray-200" />
            <div className="h-4 w-64 max-w-full rounded bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Product cards skeleton */}
      <div className="container mx-auto px-4 py-16">
        <ProductCardSkeleton />
      </div>
    </section>
  );
}

export default loading;
