import GetProducts from '@/library/GetProducts';
import Marquee from 'react-fast-marquee';

async function NavMarquee() {
  const data = await GetProducts();
  return (
    <div className="py-2 border-b border-gray-200 bg-white">
      <Marquee className="" pauseOnHover="true">
        {data.map((item) => (
          <div key={item.id} className="px-4">
            <div className="text-sm flex gap-2">
              <span>{item.image}</span>
              <span>{item.nameBn}</span>
              <span>
                {item.today} টাকা/{item.unit}
              </span>
              <div
                className={`flex gap-0.5 ${
                  item.change.dir === 'up'
                    ? 'text-green-600'
                    : item.change.dir === 'down'
                      ? 'text-red-700'
                      : 'text-gray-600'
                }`}
              >
                <span className="text-xs flex justify-center items-center">
                  {item.change.dir === 'up' ? '▲' : item.change.dir === 'down' ? '▼' : '-'}
                </span>
                <span>{Math.abs(item.change.pct)}%</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default NavMarquee;
