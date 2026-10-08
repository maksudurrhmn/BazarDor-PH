import Image from 'next/image';

async function PriceUp() {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await res.json();

  const topItems = data
    .filter((item) => item.change.dir === 'up')
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto">
      <h4>
        <span className="text-red-700">▲</span> Prices have gone up today
      </h4>
      <div className="grid grid-cols-3 gap-4">
        {topItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-3xl bg-[#fafcf9] border border-[#e3eae3] shadow-sm font-inter hover:border-green-800 transition-all duration-200 ease-in-out"
          >
            {/* Top Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-[#eef2ee] rounded-2xl flex items-center justify-center text-3xl">
                {item.image}
              </div>
              <div>
                <h3 className="m-0 text-lg font-bold text-gray-900 leading-none capitalize">
                  {item.slug}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-400">Per {item.unit}</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between">
              <div>
                <span className="block text-xs font-medium text-gray-400 mb-1">Today's Price</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-gray-900">{item.today}</span>
                  <span className="text-base font-bold text-gray-900">Tk</span>
                </div>
              </div>

              {/* Percentage Badge */}
              <div className="flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-full">
                <span className="text-[8px]">▲</span>
                <span>12.5 %</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceUp;
