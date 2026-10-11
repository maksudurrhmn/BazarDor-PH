import PriceCard from './PriceCard';

export default function ProductDetails({ product }) {
  const lowestPrice = Math.min(...product.markets.map((market) => market.min));

  const highestPrice = Math.max(...product.markets.map((market) => market.max));

  const averagePrice =
    product.markets.reduce((total, market) => total + (market.min + market.max) / 2, 0) /
    product.markets.length;

  const avgPrice = Math.round(averagePrice);

  return (
    <main className="min-h-screen bg-[#F0F5F0]">
      <div className="container mx-auto px-4 py-6">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-base text-gray-600 font-semibold">
          <a href="/" className="hover:text-green-800 hover:underline">
            হোম
          </a>
          <span>›</span>
          <a
            href={`/category/${product.category}`}
            className="hover:text-green-800 hover:underline"
          >
            {product.categoryNameBn}
          </a>
          <span>›</span>
          <span className="text-black">{product.nameBn}</span>
        </nav>

        <section className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ee] text-3xl">
              {product.image}
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">{product.nameBn}</h1>
              <p className="text-sm lg:text-base text-gray-600">
                প্রতি {product.unit} · {product.categoryNameBn}
              </p>
              <div className="flex items-center">
                <p className="text-sm lg:text-base text-gray-600 flex">
                  গতকালের তুলনায় দাম{' '}
                  {product.change.dir === 'up'
                    ? 'বেড়েছে'
                    : product.change.dir === 'down'
                      ? 'কমেছে'
                      : 'অপরিবর্তিত'}{' '}
                </p>
                <div
                  className={`flex items-center gap-0.5 font-semibold ml-2 text-sm lg:text-base ${
                    product.change.dir === 'up'
                      ? 'text-red-700 '
                      : product.change.dir === 'down'
                        ? 'text-green-600 '
                        : 'text-gray-600'
                  }`}
                >
                  <span>{Math.abs(product.change.pct)}%</span>
                  <span className="text-xs">
                    {product.change.dir === 'up' ? '▲' : product.change.dir === 'down' ? '▼' : '-'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#F0F5F0] px-5 py-3 text-center">
            <p className="text-sm text-gray-600 font-medium">আজকের দাম</p>
            <p className="text-2xl font-extrabold text-gray-900">{product.today}৳</p>
            <p className="text-sm text-gray-600 font-medium">টাকা / {product.unit}</p>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="mb-4 text-lg font-bold">দামের সারসংক্ষেপ</h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <PriceCard label="সর্বনিম্ন দাম" price={lowestPrice} />
            <PriceCard label="সর্বোচ্চ দাম" price={highestPrice} />
            <PriceCard label="গড় দাম" price={avgPrice} />
          </div>

          <h2 className="mb-3 mt-6 text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-150 text-sm">
              <thead className="bg-[#F7F9F7] text-gray-500">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">বাজার</th>
                  <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                  <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                  <th className="px-4 py-3 text-right font-medium">সর্বোচ্চ</th>
                  <th className="px-4 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {product.markets.map((market, index) => (
                  <tr
                    key={market.id ?? `${market.name}-${index}`}
                    className="odd:bg-white even:bg-[#F0F5F0]/70 hover:bg-green-50"
                  >
                    <td className="px-4 py-3">{market.market}</td>
                    <td className="px-4 py-3">{market.division}</td>
                    <td className="px-4 py-3 text-right">{market.min} টাকা</td>
                    <td className="px-4 py-3 text-right">{market.max} টাকা</td>
                    <td className="px-4 py-3 text-right">{(market.min + market.max) / 2} টাকা</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
