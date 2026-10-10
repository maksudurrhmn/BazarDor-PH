async function CategoryPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch category');
  }

  const data = await res.json();

  const filteredProducts = data.filter((item) => item.category === id);

  return (
    <section className="bg-[#F0F5F0]">
      <div className="container mx-auto pt-16">
        <div className="flex gap-2 p-10 bg-white rounded-2xl">
          <span className="w-14 h-14 bg-[#eef2ee] rounded-2xl flex items-center justify-center text-3xl">
            {filteredProducts[0]?.categoryIcon}
          </span>
          <div>
            <h4>{filteredProducts[0]?.categoryNameBn}</h4>
            <p>{filteredProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 ">
        <span className="py-4">মোট {filteredProducts.length}টি পণ্য দেখানো হচ্ছে</span>
        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm font-inter hover:border-green-800 transition-all duration-200 ease-in-out"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-[#eef2ee] rounded-2xl flex items-center justify-center text-3xl">
                  {item.image}
                </div>
                <div>
                  <h3 className="m-0 text-lg font-bold text-gray-900 leading-none capitalize">
                    {item.nameBn}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-400">Per {item.unit}</p>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="block text-xs font-medium text-gray-400 mb-1">
                    Today's Price
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-gray-900">{item.today}</span>
                    <span className="text-base font-bold text-gray-900">Tk</span>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    item.change.dir === 'up'
                      ? 'text-green-600 bg-green-100'
                      : item.change.dir === 'down'
                        ? 'text-red-700 bg-red-100'
                        : 'text-gray-600 bg-gray-100'
                  }`}
                >
                  <span className="text-xs">
                    {item.change.dir === 'up' ? '▲' : item.change.dir === 'down' ? '▼' : '-'}
                  </span>
                  <span>{Math.abs(item.change.pct)} %</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
