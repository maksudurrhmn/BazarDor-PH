import GetProducts from '@/library/GetProducts';

async function AllProdcts() {
  const data = await GetProducts();
  console.log(data.lenght);
  return (
    <div className="container mx-auto py-16">
      <h4 className="text-xl py-4 font-bold">সব পণ্য</h4>
      <span className="py-4">মোট টি পণ্য দেখানো হচ্ছে</span>
      <div className="grid grid-cols-3 gap-6">
        {data.map((item) => (
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
                <span className="block text-xs font-medium text-gray-400 mb-1">Today's Price</span>
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
  );
}

export default AllProdcts;
